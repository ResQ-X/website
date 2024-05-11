import styles from "./BlogHeaderSection.module.css";

function BlogHeaderSection() {
  return (
    <section className={styles.blogs_header_section}>
      <h1 className={`section_title`}>ResQX Blogs</h1>

      {/* Section Description */}
      <p className={`section_sub_text_wrapper `}>
        Check out some of our latest blog posts
      </p>
    </section>
  );
}

export default BlogHeaderSection;
