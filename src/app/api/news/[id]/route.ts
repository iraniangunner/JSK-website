import { NextResponse } from "next/server";
import Busboy from "busboy";
import fs from "fs";
import path from "path";
import prisma from "@/lib/prisma";
import { toNodeReadableStream } from "@/lib/stream";


export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const newsId = Number(params.id);
  if (isNaN(newsId)) {
    return NextResponse.json({ error: "شناسه خبر معتبر نیست" }, { status: 400 });
  }

  const existingNews = await prisma.news.findUnique({ where: { id: newsId } });
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
      // حذف تصویر قدیمی
      if (existingNews.imageUrl) {
        const oldPath = path.join(process.cwd(), "public", existingNews.imageUrl);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      imageUrl = `/uploads/${fileName}`;
      resolve(); // فقط همینجا resolve بشه
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

  const updatedNews = await prisma.news.update({
    where: { id: newsId },
    data: {
      title: fields.title || existingNews.title,
      title_en: fields.title_en || existingNews.title_en,
      content: fields.content || existingNews.content,
      content_en: fields.content_en || existingNews.content_en,
      imageUrl,
    },
  });

  return NextResponse.json(updatedNews);
}


export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const newsId = Number(id);
    if (isNaN(newsId)) {
      return NextResponse.json(
        { error: "شناسه خبر معتبر نیست" },
        { status: 400 }
      );
    }

    // پیدا کردن خبر برای گرفتن مسیر عکس
    const newsItem = await prisma.news.findUnique({
      where: { id: newsId },
    });

    if (!newsItem) {
      return NextResponse.json({ error: "خبر پیدا نشد" }, { status: 404 });
    }

    // حذف عکس از فولدر uploads
    if (newsItem.imageUrl) {
      const filePath = path.join(process.cwd(), "public", newsItem.imageUrl);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    // حذف خبر از دیتابیس
    await prisma.news.delete({
      where: { id: newsId },
    });

    return NextResponse.json({ message: "خبر و عکس مربوطه حذف شد" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const newsId = Number(id);
    if (isNaN(newsId)) {
      return NextResponse.json(
        { error: "شناسه خبر معتبر نیست" },
        { status: 400 }
      );
    }

    const newsItem = await prisma.news.findUnique({
      where: { id: newsId },
    });

    if (!newsItem) {
      return NextResponse.json({ error: "خبر پیدا نشد" }, { status: 404 });
    }

    return NextResponse.json(newsItem);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
