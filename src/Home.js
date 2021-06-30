import { useState } from "react";
import BlogList from "./BlogList";

const Home = () =>{
    const [blogs,setBlogs] = useState(
        [
            {title:'my new Blog', author:'ahmed', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptate porro vitae laborum amet architecto quis voluptatibus, quas quibusdam voluptas quaerat alias iste est, nesciunt eum aut. Eum soluta odit deleniti illo ratione, laudantium ea quam dolor minus quos architecto minima tempora explicabo sint quidem dolores, dolorum tenetur maxime voluptatibus esse iure consectetur neque illum cumque? Nam quas earum impedit, totam, ab nemo mollitia enim provident perspiciatis repellat non, explicabo architecto doloremque itaque eveniet. Ea repudiandae est autem perspiciatis facilis, culpa explicabo necessitatibus dolores et quasi sint doloribus minus consequuntur exercitationem repellendus voluptas voluptatum tempora repellat doloremque asperiores dolorem consectetur?', id:1},
            {title:'my new Blog', author:'Qaasim', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptate porro vitae laborum amet architecto quis voluptatibus, quas quibusdam voluptas quaerat alias iste est, nesciunt eum aut. Eum soluta odit deleniti illo ratione, laudantium ea quam dolor minus quos architecto minima tempora explicabo sint quidem dolores, dolorum tenetur maxime voluptatibus esse iure consectetur neque illum cumque? Nam quas earum impedit, totam, ab nemo mollitia enim provident perspiciatis repellat non, explicabo architecto doloremque itaque eveniet. Ea repudiandae est autem perspiciatis facilis, culpa explicabo necessitatibus dolores et quasi sint doloribus minus consequuntur exercitationem repellendus voluptas voluptatum tempora repellat doloremque asperiores dolorem consectetur?', id:2},
            {title:'my new Blog', author:'ahmed', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptate porro vitae laborum amet architecto quis voluptatibus, quas quibusdam voluptas quaerat alias iste est, nesciunt eum aut. Eum soluta odit deleniti illo ratione, laudantium ea quam dolor minus quos architecto minima tempora explicabo sint quidem dolores, dolorum tenetur maxime voluptatibus esse iure consectetur neque illum cumque? Nam quas earum impedit, totam, ab nemo mollitia enim provident perspiciatis repellat non, explicabo architecto doloremque itaque eveniet. Ea repudiandae est autem perspiciatis facilis, culpa explicabo necessitatibus dolores et quasi sint doloribus minus consequuntur exercitationem repellendus voluptas voluptatum tempora repellat doloremque asperiores dolorem consectetur?', id:3}
        ]
    )

    return (
        <div className="content">
         <BlogList blogs={blogs} title="All Blogs" />
         <BlogList blogs={blogs.filter(blog=>blog.author === 'ahmed')} title="Ahmed's Blogs" />
        </div>
    )
}
export default Home;