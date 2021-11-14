import React from 'react'
import {useParams} from 'react-router-dom';
import useFetch from './useFetch';

function BlogDetails() {
    const {id} = useParams();
    const {data,isPending} = useFetch(`http://localhost:5000/blogs/${id}`);

    return (
        <div className="blog-details">
            {isPending && <p>Loading...</p>}
           { data && (
               <article>
                   <h2>{data.title}</h2>
                   <p>Written by {data.author}</p>
                   <div>{data.body}</div>
               </article>
           ) }
        </div>
    )
}

export default BlogDetails
