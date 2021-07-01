import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () =>{
    const [blogs,setBlogs] = useState(null)

    const handleClick =(id)=>{
        const newBlogs = blogs.filter(blog=>blog.id !== id);
        setBlogs(newBlogs);
    }
    
    useEffect(()=>{
        fetch('http://localhost:3000/blogs')
        .then(data=>{
            return data.json();
        })
        .then(data=>{
            setBlogs(data);
        })
    }, [])

    return (
        <div className="content">
         {blogs && <BlogList blogs={blogs} title="All Blogs" handleClick={handleClick}/>}
        </div>
    )
}
export default Home;