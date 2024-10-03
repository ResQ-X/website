"use client";

import { getMarkdownContent } from "@/lib/actions";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownComponent({ filePath }: { filePath: string }) {
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    getMarkdownContent(filePath).then((content) => {
      setMarkdownContent(content);
    });
  }, [filePath]);

  return (
    <div>
      <MarkdownRenderer content={markdownContent} />
    </div>
  );
}

interface MarkdownProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownProps> = ({ content }) => {
  return (
    <div className="markdown-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};
