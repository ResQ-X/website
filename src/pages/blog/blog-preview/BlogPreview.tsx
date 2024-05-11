import { useEffect, useState } from "react";
import styles from "./BlogPreview.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/config";
import axios from "axios";
import { handleAPIError } from "../../../utils/handleAPIError";
import LoadingSpinner from "../../../components/loading-spinner/LoadingSpinner";
import isEmpty from "../../../validation/isEmpty";
import { IBlog } from "../../../models/BlogTypes";
import useDisplayMessage from "../../../hooks/useDisplayMessage";
import ErrorHandler from "../../../components/error/ErrorHandler";
import moment from "moment";

function BlogPreview() {
  const { id } = useParams();
  const navigate = useNavigate();
  // Functions, States, Variables
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  // Hooks
  const { errorHandlerObj, setErrorHandlerObj } = useDisplayMessage({});

  //   Functions
  useEffect(() => {
    // Call API to find blog based on id and setBlog State
    if (id) {
      const url = `${api}/api/v1/blog/posts/${id}`;
      setIsLoading(true);
      axios
        .get(`${url}`)
        .then((res) => {
          setIsLoading(false);
          setBlog(res.data.data[0]?.post);
        })
        .catch((err) => {
          //  Set the error handler state
          setIsLoading(false);
          handleAPIError(err, setErrorHandlerObj);
        });
    } else {
      navigate(-1);
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <main className={"app__main_section"}>
      <div className="app__row_container">
        {/* Error Handlers */}
        <ErrorHandler
          errorHandlerObj={errorHandlerObj}
          className="app--actions-handler-wrapper"
        />

        {!isLoading && !isEmpty(blog) && (
          <div className={styles.blog_preview_container}>
            <div className={styles.blog_preview__blog_date}>
              {moment(blog?.post_date_gmt).format("MMMM D, YYYY")}
            </div>

            {/* Title */}
            <div className={`section_title ${styles.blog_preview__blog_title}`}>
              {blog?.post_title}
            </div>

            {/* Image */}
            {/* <div className={styles["blog-preview--blog-image"]}>
              <img src={blog?.image ? blog.image : blogImg} />
            </div> */}

            <div
              className={styles.blog_preview__blog_body}
              dangerouslySetInnerHTML={{
                __html: `${blog?.post_content || ""}`,
              }}
            ></div>
          </div>
        )}
        <div>{isLoading && <LoadingSpinner />}</div>
      </div>
    </main>
  );
}

export default BlogPreview;
