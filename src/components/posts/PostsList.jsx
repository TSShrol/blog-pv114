import { useSelector } from "react-redux";
import AuthorPost from "./AuthorPost";
import ReactionButton from "./ReactionButton";

const PostsList = () => {
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
                </article>
                
            ))
            }
        </section>


    );
}

export default PostsList;