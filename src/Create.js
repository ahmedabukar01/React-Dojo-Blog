import { useState } from 'react';

const Create = () =>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('');

    return (
        <div className="create">
            <h1>Create new Blog...</h1>
            <form>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                ></input>
                <label>Blog Body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Author</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="ahmed">Ahmed</option>
                    <option value="Abukar">Abukar</option>
                </select>
                <button>Add Blog</button>
                <p>{author}</p>
                <p>{body}</p>
                <p>{title}</p>
            </form>
        </div>
    )
}
export default Create;