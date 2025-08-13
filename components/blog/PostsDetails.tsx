import React from "react";

type WordPressPost = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: {
    pagelayer_contact_templates: any[];
    _pagelayer_content: string;
    footnotes: string;
  };
  categories: number[];
  tags: number[];
  class_list: string[];
  _links: any;
};

type PostsDetailsProps = {
  posts: WordPressPost;
};

function PostsDetails({ posts }: PostsDetailsProps) {
  console.log(posts);

  // Helper function to format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Helper function to strip HTML tags
  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, "");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="border-b pb-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {posts.title.rendered}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span>ID: {posts.id}</span>
          <span>Slug: {posts.slug}</span>
          <span>
            Status: <span className="capitalize">{posts.status}</span>
          </span>
          <span>
            Type: <span className="capitalize">{posts.type}</span>
          </span>
        </div>
      </div>

      {/* Dates Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Published</h3>
          <p className="text-sm text-blue-600">{formatDate(posts.date)}</p>
          <p className="text-xs text-blue-500">
            GMT: {formatDate(posts.date_gmt)}
          </p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-2">Last Modified</h3>
          <p className="text-sm text-green-600">{formatDate(posts.modified)}</p>
          <p className="text-xs text-green-500">
            GMT: {formatDate(posts.modified_gmt)}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Content</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: posts.content.rendered }}
          />
          {posts.content.protected && (
            <p className="text-red-600 text-sm mt-2">
              ⚠️ This content is protected
            </p>
          )}
        </div>
      </div>

      {/* Excerpt Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Excerpt</h3>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: posts.excerpt.rendered }}
          />
          {posts.excerpt.protected && (
            <p className="text-red-600 text-sm mt-2">
              ⚠️ This excerpt is protected
            </p>
          )}
        </div>
      </div>

      {/* Links and IDs Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-semibold text-purple-800 mb-2">Links</h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="text-purple-600">Permalink:</span>
              <a
                href={posts.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-2 break-all"
              >
                {posts.link}
              </a>
            </div>
            <div>
              <span className="text-purple-600">GUID:</span>
              <span className="ml-2 text-gray-600 break-all">
                {posts.guid.rendered}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-semibold text-indigo-800 mb-2">Associated IDs</h3>
          <div className="space-y-1 text-sm">
            <div>
              <span className="text-indigo-600">Author ID:</span>{" "}
              <span className="ml-2">{posts.author}</span>
            </div>
            <div>
              <span className="text-indigo-600">Featured Media:</span>{" "}
              <span className="ml-2">{posts.featured_media || "None"}</span>
            </div>
            <div>
              <span className="text-indigo-600">Categories:</span>{" "}
              <span className="ml-2">
                {Array.isArray(posts.categories)
                  ? posts.categories.join(", ")
                  : "N/A"}
              </span>
            </div>
            <div>
              <span className="text-indigo-600">Tags:</span>{" "}
              <span className="ml-2">
                {Array.isArray(posts.tags) ? posts.tags.join(", ") : "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="font-semibold text-orange-800 mb-2">
            Comment Settings
          </h3>
          <p className="text-sm">
            Status:{" "}
            <span className="capitalize text-orange-600">
              {posts.comment_status}
            </span>
          </p>
          <p className="text-sm">
            Ping Status:{" "}
            <span className="capitalize text-orange-600">
              {posts.ping_status}
            </span>
          </p>
        </div>

        <div className="bg-pink-50 p-4 rounded-lg">
          <h3 className="font-semibold text-pink-800 mb-2">Post Format</h3>
          <p className="text-sm">
            Format:{" "}
            <span className="capitalize text-pink-600">{posts.format}</span>
          </p>
          <p className="text-sm">
            Template:{" "}
            <span className="text-pink-600">{posts.template || "Default"}</span>
          </p>
        </div>

        <div className="bg-teal-50 p-4 rounded-lg">
          <h3 className="font-semibold text-teal-800 mb-2">Special Flags</h3>
          <p className="text-sm">
            Sticky:{" "}
            <span
              className={`${posts.sticky ? "text-green-600" : "text-red-600"}`}
            >
              {posts.sticky ? "Yes" : "No"}
            </span>
          </p>
        </div>
      </div>

      {/* Meta Information */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Meta Information
        </h3>
        <div className="space-y-2 text-sm">
          <div>
            <span className="font-medium text-gray-700">
              Pagelayer Contact Templates:
            </span>
            <span className="ml-2 text-gray-600">
              {posts.meta.pagelayer_contact_templates.length} items
            </span>
          </div>
          <div>
            <span className="font-medium text-gray-700">
              Pagelayer Content:
            </span>
            <span className="ml-2 text-gray-600">
              {posts.meta._pagelayer_content || "Empty"}
            </span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Footnotes:</span>
            <span className="ml-2 text-gray-600">
              {posts.meta.footnotes || "None"}
            </span>
          </div>
        </div>
      </div>

      {/* Debug Section */}
      <div className="mt-6 bg-gray-800 text-white p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Raw Data (for debugging)</h3>
        <pre className="text-xs overflow-x-auto">
          {JSON.stringify(posts, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default PostsDetails;
