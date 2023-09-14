import PropTypes from 'prop-types';
import girl1 from '../../assets/images/girl1.jpg';
import { FaBookmark } from "react-icons/fa";



const Blog = ({ blog, addToBookmarks, handleMarkAsRead }) => {
    const { title, author, cover, reading_time, posted_date, hashtags } = blog
    return (
        <div className='p-5'>
            <img className='rounded-md my-3' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex gap-3'>
                    <img className='w-10' src={girl1} alt="" />
                    <div>
                        <h1 className='font-bold'>{author}</h1>
                        <small>{posted_date} </small>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <h1> {reading_time}<span>Min Read</span>  </h1>
                    <button onClick={() => addToBookmarks(blog)} className='text-blue-500'> <FaBookmark></FaBookmark> </button>
                </div>
            </div>
            <h1 className='text-2xl font-bold my-3 '>{title}</h1>
            <h1 className='text-blue-500'>{
                hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a> </span>)
            }</h1>
            <button className='text-blue-500 underline' onClick={() => handleMarkAsRead(reading_time)}>Mark As Read</button>
        </div>
    );

};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    addToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}




export default Blog;