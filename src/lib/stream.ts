import { Readable } from "stream";
export function toNodeReadableStream(webStream: ReadableStream) {
  const reader = webStream.getReader();
  return new Readable({
    async read() {
      try {
        const { done, value } = await reader.read();
        if (done) {
          this.push(null);
        } else {
          this.push(Buffer.from(value));
        }
      } catch (err: any) {
        this.destroy(err);
      }
    },
  });
}
