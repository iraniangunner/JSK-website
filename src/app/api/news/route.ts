import { NextResponse } from "next/server";
import Busboy from "busboy";
import fs from "fs";
import path from "path";
import pool from "@/lib/db"; // همون mysql2 connection pool
import { toNodeReadableStream } from "@/lib/stream";
import { ResultSetHeader } from "mysql2";

export async function POST(request: Request) {
  if (!request.body) {
    return NextResponse.json({ error: "بدون داده برای پردازش" }, { status: 400 });
  }

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

  const fields: Record<string, string> = {};
  let fileName = "";
  let imageUrl = "";

  try {
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

    if (!fields.title || !fields.content) {
      return NextResponse.json({ error: "لطفا عنوان و محتوا را وارد کنید" }, { status: 400 });
    }

    // ذخیره در دیتابیس
   const [result] = await pool.query<ResultSetHeader>(
  `INSERT INTO news (title, title_en, content, content_en, imageUrl, createdAt, updatedAt)
   VALUES (?, ?, ?, ?, ?, NOW(), NOW())`,
  [fields.title, fields.title_en, fields.content, fields.content_en, imageUrl]
);

return NextResponse.json(
  { id: result.insertId, ...fields, imageUrl },
  { status: 201 }
);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "خطا در ذخیره خبر" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const [rows] = await pool.query(`SELECT * FROM news ORDER BY createdAt ASC`);
    return NextResponse.json(rows);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
