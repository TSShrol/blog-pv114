import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { postAdded } from "../../store/appSlice/postsSlice";

const AddPostForm = () => {

    const dispatch=useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    // const [userId, setUserId]=useState('');
    
    const handlerTitleChange = event => setTitle(event.target.value);
    const handlerContentChange = event => setContent(event.target.value);

    const onSavePost=()=>{
        if(title!=='' && content!=='') {
            console.log(title, content);
            const id=nanoid();
            console.log(id);
            dispatch(postAdded({id, title, content}));
        }
    }

    return (
        <form>
            <label htmlFor="postTitle">Post Title</label>
            <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={handlerTitleChange}
            />
            <br />
            <label htmlFor="postContent">Post Content</label>
            <textarea
                id="postContent"
                name="postContent"
                value={content}
                onChange={handlerContentChange}
            />
            <br />
            <button type="button" onClick={onSavePost}>Add Post</button>
        </form>
    );
}


export default AddPostForm;