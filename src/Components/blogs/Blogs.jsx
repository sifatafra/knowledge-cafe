import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({ addToBookmarks, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])
    return (
        <div className=" w-2/3">
            <h1 className="text-3xl font-bold p-5">Blogs</h1>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    addToBookmarks={addToBookmarks}
                    handleMarkAsRead={handleMarkAsRead}
                    blog={blog}></Blog>)
            }
        </div>
    );
};

Blog.propTypes = {

    addToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blogs;