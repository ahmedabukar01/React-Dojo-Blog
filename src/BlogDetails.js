import React from 'react'
import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom';

function BlogDetails() {
    const {id} = useParams();
    const {data,isPending} = useFetch(`http://localhost:5000/blogs/${id}`);

    const history = useHistory();

    const handleClick = () =>{
        fetch(`http://localhost:5000/blogs/${id}`,{
            method: 'DELETE',
        }).then(()=>{
            history.push('/');
        })
    }
    return (
        <div className="blog-details">
            {isPending && <p>Loading...</p>}
           { data && (
               <article>
                   <h2>{data.title}</h2>
                   <p>Written by {data.author}</p>
                   <div>{data.body}</div>
                   <button onClick={handleClick}>Delete</button>
               </article>
           ) }
        </div>
    )
}

export default BlogDetails
