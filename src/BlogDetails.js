import React from 'react'
import {useParams} from 'react-router-dom';

function BlogDetails() {
    const {id} = useParams()
    return (
        <div className="blog-details">
            <h2>Blog Detail {id} </h2>
        </div>
    )
}

export default BlogDetails
