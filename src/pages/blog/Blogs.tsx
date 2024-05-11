/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useEffect, useState } from "react";
import styles from "./Blogs.module.css";
import isEmpty from "../../validation/isEmpty";
import BlogCard from "./comps/blog-card/BlogCard";
import { api } from "../../api/config";
import { IBlog } from "../../models/BlogTypes";
import useDisplayMessage from "../../hooks/useDisplayMessage";
import ErrorHandler from "../../components/error/ErrorHandler";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import BEPagination from "../../components/pagination/be-pagination/BEPagination";
import { handleAPIError } from "../../utils/handleAPIError";
import BlogHeaderSection from "./comps/blogs-header-section/BlogHeaderSection";

function Blogs() {
  // Functions, States and Variables
  // States
  const [allBlogs, setAllBlogs] = useState({
    posts: [],
    currentPage: 1,
    totalPages: 1,
  });
  const [allBlogPosts, setAllBlogPosts] = useState<IBlog[] | null>(null);
  const [pageNumberIndex, setPageNumberIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Hooks
  const { errorHandlerObj, setErrorHandlerObj } = useDisplayMessage({});

  const handleFetchAllBlogs = async function () {
    const url = `${api}/api/v1/blog/posts?page=${pageNumberIndex}`;
    // Fetch all blogs
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      if (!isEmpty(data?.data[0])) setAllBlogs(data?.data[0]);
    } catch (ex) {
      setIsLoading(false);
      handleAPIError(ex, setErrorHandlerObj);
    }
  };

  useEffect(() => {
    handleFetchAllBlogs();
  }, [pageNumberIndex]);

  // UseEffects
  useEffect(() => {
    if (allBlogs) {
      setAllBlogPosts(allBlogs.posts);
    }
  }, [allBlogs]);

  return (
    <main className={"app__main_section"}>
      <div className="app__row_container">
        {/* Error Handlers */}
        <ErrorHandler
          errorHandlerObj={errorHandlerObj}
          className="app--actions-handler-wrapper"
        />

        {/* Header Section */}
        <BlogHeaderSection />

        <div className={styles.blog_boxes_container}>
          {allBlogPosts?.map((blog, index) => (
            <Fragment key={index + 1}>
              <BlogCard blog={blog} />
            </Fragment>
          ))}
        </div>

        {/* Pagination */}
        {!isEmpty(allBlogPosts) && !(isLoading && isEmpty(allBlogPosts)) && (
          <BEPagination
            currentPage={allBlogs?.currentPage || 1}
            lastPage={allBlogs?.totalPages || 1}
            currentPosts={allBlogPosts}
            setPageNumberIndex={setPageNumberIndex}
          />
        )}
        <div>{isLoading && <LoadingSpinner />}</div>
      </div>
    </main>
  );
}

export default Blogs;
