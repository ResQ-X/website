import { Link } from 'react-router-dom';
import styles from './BlogCard.module.css'

// INTERFACES

interface IProps {
  id: number;
  img: string;
  title: string;
  date: string;
}


const BlogCard = ({

  id,
  img,
  title,
  date,
}:IProps) => {
  return (
    <div className={styles['blog-box']}>
      <Link to={`/blog/${id}`}>
      <img 
        src={img}
         alt="" />
        <h2>{title}</h2>
        <p>{date}</p>
      
      
      </Link>
       
      
    </div>
  )
}

export default BlogCard
