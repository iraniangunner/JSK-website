import { NextResponse } from "next/server";
import Busboy from "busboy";
import fs from "fs";
import path from "path";
import pool from "@/lib/db"; // فایل کانکشن mysql2
import { toNodeReadableStream } from "@/lib/stream";
import { RowDataPacket, ResultSetHeader } from "mysql2";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const newsId = Number(params.id);
  if (isNaN(newsId)) {
    return NextResponse.json({ error: "شناسه خبر معتبر نیست" }, { status: 400 });
  }

  // گرفتن خبر فعلی
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM news WHERE id = ?",
    [newsId]
  );
  const existingNews = rows[0];
  if (!existingNews) {
    return NextResponse.json({ error: "خبر پیدا نشد" }, { status: 404 });
  }

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

  const fields: Record<string, string> = {};
  let fileName = "";
  let imageUrl = existingNews.imageUrl;

  await new Promise<void>((resolve, reject) => {
    const busboy = Busboy({ headers: Object.fromEntries(request.headers) });

    busboy.on("file", (fieldname, file, info) => {
      const { filename } = info;
      if (!filename) return;

      const safeFilename = path.basename(filename);
      const ext = path.extname(safeFilename) || ".jpg";
      const baseName = path.basename(safeFilename, ext);

      fileName = `${Date.now()}-${baseName}${ext}`;
      const filePath = path.join(uploadDir, fileName);

      const writeStream = fs.createWriteStream(filePath);
      file.pipe(writeStream);

      writeStream.on("finish", () => {
        if (existingNews.imageUrl) {
          const oldPath = path.join(process.cwd(), "public", existingNews.imageUrl);
          if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
        }
        imageUrl = `/uploads/${fileName}`;
        resolve();
      });

      writeStream.on("error", reject);
    });

    busboy.on("field", (fieldname, val) => {
      fields[fieldname] = val;
    });

    busboy.on("error", reject);

    const nodeStream = toNodeReadableStream(request.body!);
    nodeStream.pipe(busboy);
  });

  await pool.query<ResultSetHeader>(
    `UPDATE news 
     SET title = ?, title_en = ?, content = ?, content_en = ?, imageUrl = ?, updatedAt = NOW() 
     WHERE id = ?`,
    [
      fields.title || existingNews.title,
      fields.title_en || existingNews.title_en,
      fields.content || existingNews.content,
      fields.content_en || existingNews.content_en,
      imageUrl,
      newsId,
    ]
  );

  return NextResponse.json({
    id: newsId,
    ...existingNews,
    ...fields,
    imageUrl,
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const newsId = Number(params.id);
  if (isNaN(newsId)) {
    return NextResponse.json({ error: "شناسه خبر معتبر نیست" }, { status: 400 });
  }

  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM news WHERE id = ?",
    [newsId]
  );
  const newsItem = rows[0];
  if (!newsItem) {
    return NextResponse.json({ error: "خبر پیدا نشد" }, { status: 404 });
  }

  if (newsItem.imageUrl) {
    const filePath = path.join(process.cwd(), "public", newsItem.imageUrl);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  }

  await pool.query<ResultSetHeader>("DELETE FROM news WHERE id = ?", [newsId]);

  return NextResponse.json({ message: "خبر و عکس مربوطه حذف شد" });
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const newsId = Number(params.id);
  if (isNaN(newsId)) {
    return NextResponse.json({ error: "شناسه خبر معتبر نیست" }, { status: 400 });
  }

  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM news WHERE id = ?",
    [newsId]
  );

  if (rows.length === 0) {
    return NextResponse.json({ error: "خبر پیدا نشد" }, { status: 404 });
  }

  return NextResponse.json(rows[0]);
}
