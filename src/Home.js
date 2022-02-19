import { useState, useEffect, useRef } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem ipsum is a dummy text which Ill be using for now...', author: 'Luqqy', id: 1},
        {title: 'The first story', body: 'Lorem ipsum is a dummy text which Ill be using for now...', author: 'Hyojin', id: 2},
        {title: 'The second day', body: 'Lorem ipsum is a dummy text which Ill be using for now...', author: 'Luqqy', id: 3},
        {title: 'On the third occasion', body: 'Lorem ipsum is a dummy text which Ill be using for now...', author: 'Kim', id: 4},
    ]);

    const [status, setStatus] = useState('');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog)=>blog.id!==id);
        setBlogs(newBlogs);
    };
    
    const firstUpdate = useRef(true);
    useEffect(() => {
        console.log(firstUpdate.current);
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        else {
            setStatus('Data has changed');
            setTimeout(() => {
                setStatus('');
            }, 2000);
        }
    }, [blogs]);

    return (  
        <div className="home">
            <p>{status}</p>
            <BlogList blogs={blogs} title="Blog Post" handleDelete={handleDelete} />
        </div>
    );
}
 
export default Home;