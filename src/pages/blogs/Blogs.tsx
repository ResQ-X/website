import styles from './Blog.module.css';
import BlogCard from './blog-card/BlogCard';
import BlogImage1 from './../../assets/images/others/blog/blogImage 6.png'
import BlogImage2 from './../../assets/images/others/blog/blogImage 7.png'
import { DummyBlogs } from '../../constants/DummyValues';





function Blogs() {
  return (

  <div className={styles['blog-container']}>
    <div className={styles["blog-container-title"]}>

    <h1 className={styles['sectionHeading']}>ResQX Blog</h1>
    <p className={styles['sectionText']}>check out some of our latest blogs</p>
    </div>
    <div className={styles['blog-widgets']}>
     { DummyBlogs.map((blog, index) => (<BlogCard
      id={blog.ID}
      date={blog.post_date}
      img={index % 2 === 0 ? BlogImage1 : BlogImage2  }
       title={blog.post_title} 
     
     />))}
      
    </div>
    
   
  </div>

  )

  
 
}

export default Blogs;
