import moment from "moment";
import styles from "../../Blogs.module.css";
import { Link } from "react-router-dom";
import defaultBlogImg from "../../../../assets/images/others/blog/blog-image-6.png";
import { IBlog } from "../../../../models/BlogTypes";
import { motion } from "framer-motion";

// Interfaces
interface IProps {
  blog: IBlog;
}

function BlogCard({ blog }: IProps) {
  return (
    <div className={styles.blog_box_container}>
      <Link to={`/blog/${blog.ID}`}>
        <div className={styles.blog_image_wrapper}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            src={blog.image ? blog.image : defaultBlogImg}
          />
        </div>

        <div className={styles.blog_name_wrapper}>{blog.post_title}</div>
        <div className={styles.blog_date_wrapper}>
          {moment(blog?.post_date_gmt).format("MMMM D, YYYY")}
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
