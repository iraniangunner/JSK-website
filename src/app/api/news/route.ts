import { NextResponse } from "next/server";
import Busboy from "busboy";
import fs from "fs";
import path from "path";
import prisma from "@/lib/prisma";
import { toNodeReadableStream } from "@/lib/stream";



export async function POST(request: Request) {
  if (!request.body) {
    return NextResponse.json(
      { error: "بدون داده برای پردازش" },
      { status: 400 }
    );
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
      resolve(); // فقط اینجا resolve
    });

    writeStream.on("error", reject);
  });

  busboy.on("field", (fieldname, val) => {
    fields[fieldname] = val;
  });

  busboy.on("error", reject);

  
  busboy.on("finish", () => {});

  const nodeStream = toNodeReadableStream(request.body!);
  nodeStream.pipe(busboy);
});


    if (!fields.title || !fields.content) {
      return NextResponse.json(
        { error: "لطفا عنوان و محتوا را وارد کنید" },
        { status: 400 }
      );
    }

    const news = await prisma.news.create({
      data: {
        title: fields.title,
        title_en: fields.title_en,
        content: fields.content,
        content_en: fields.content_en,
        imageUrl,
      },
    });

    return NextResponse.json(news, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "خطا در ذخیره خبر" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const news = await prisma.news.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });
    return NextResponse.json(news);
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
