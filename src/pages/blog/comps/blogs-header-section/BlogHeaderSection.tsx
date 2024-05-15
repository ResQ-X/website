import ContainerReveal from "../../../../components/animations/container-reveal/ContainerReveal";
import styles from "./BlogHeaderSection.module.css";

function BlogHeaderSection() {
  return (
    <section className={styles.blogs_header_section}>
      <ContainerReveal>
        <h1 className={`section_title`}>ResQX Blogs</h1>
      </ContainerReveal>

      {/* Section Description */}
      <ContainerReveal delay={0.1}>
        <p className={`section_sub_text_wrapper `}>
          Check out some of our latest blog posts
        </p>
      </ContainerReveal>
    </section>
  );
}

export default BlogHeaderSection;
