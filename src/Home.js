import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () =>{
    const [blogs,setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleClick =(id)=>{
        const newBlogs = blogs.filter(blog=>blog.id !== id);
        setBlogs(newBlogs);
    }
    
    useEffect(()=>{
        fetch('http://localhost:800/blogs')
        .then(data=>{
            if(!data.ok){
                throw Error('could not fetch the data');
            }
            return data.json();
        })
        .then(data=>{
            setBlogs(data);
            setIsPending(false)
            setError(null)
        })
        .catch(err=>{
            setError(err.message);
            setIsPending(false)
        });
    }, [])

    return (
        <div className="content">
            {error && <div>{error}</div>}
            {isPending && <div>loading...</div>}
         {blogs && <BlogList blogs={blogs} title="All Blogs" handleClick={handleClick}/>}
        </div>
    )
}
export default Home;