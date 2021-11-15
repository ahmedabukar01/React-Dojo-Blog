import { useState } from 'react';
import {useHistory} from 'react-router-dom';

const Create = () =>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('ahmed');
    const [isPending,setIspending] = useState(false);

    const history = useHistory();

    const submitHandle = (e)=>{
        e.preventDefault();

        setIspending(true);

        fetch('http://localhost:5000/blogs',{
            method:'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({title,body,author})
        }).then(()=>{
            console.log('added');
            setIspending(false);
            // history.go(-1);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h1>Create new Blog...</h1>

            <form onSubmit={submitHandle}>
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
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            
            </form>
        </div>
    )
}
export default Create;