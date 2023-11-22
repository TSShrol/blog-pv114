import { useDispatch, useSelector } from "react-redux";
import AuthorPost from "./AuthorPost";
import ReactionButton from "./ReactionButton";
import { postRemove, postEdit } from "../../store/appSlice/postsSlice";

const PostsList = () => {
    const dispatch=useDispatch();
    const posts = useSelector((store) => store.posts);
    console.log(posts);
    return(
        <section>
            <h2>Posts</h2>
            <hr/>
            {
            posts.map(post => (
                
                <article key={post.id}>
                    {post.id}
                    <h3>{post.title}</h3>
                    <p> {post.content}</p>
                    <p> <AuthorPost userId={post.userId}/> </p>
                    <hr/>
                    <ReactionButton post={post}/>

                    {/* <ReactionButton post={post}/> */}
                    <p><button onClick={()=>dispatch(postRemove(post.id))}>X</button></p>
                    <p><button onClick={()=>dispatch(postEdit(post.id))}>X</button></p>
                </article>
                
            ))
            }
        </section>


    );
}

export default PostsList;