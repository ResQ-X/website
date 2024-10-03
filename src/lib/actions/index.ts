"use server"

import fs from "fs";
import path from "path";

export async function getMarkdownContent(filePath: string) {
  const fullPath = path.join(process.cwd(), filePath);
  const content = fs.readFileSync(fullPath, "utf8");
  return content;
}