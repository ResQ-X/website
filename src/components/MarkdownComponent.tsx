"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "@/ui/styles/markdown_styles.css";

// Fetch Markdown Content Dynamically
async function getMarkdownContent(filePath: string): Promise<string> {
  try {
    const response = await fetch(filePath); // Fetch from the public folder
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error("Error fetching markdown content:", error);
    throw error; // Or return a default error message if needed
  }
}

export function MarkdownComponent({ filePath }: { filePath: string }) {
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getMarkdownContent(filePath)
      .then((content) => setMarkdownContent(content))
      .catch(() => setError("Failed to load content."));
  }, [filePath]);

  if (error) {
    return <div className="error-message text-red-500">{error}</div>;
  }

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
