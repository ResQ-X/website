"use client";

import { getMarkdownContent } from "@/lib/actions";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "@/ui/styles/markdown_styles.css";

export function MarkdownComponent({ filePath }: { filePath: string }) {
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
    <div className="markdown-content mx-6 my-20 md:mx-10 lg:mx-16">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
};
