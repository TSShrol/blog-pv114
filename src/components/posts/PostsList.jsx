import { useSelector } from "react-redux";
import AuthorPost from "./AuthorPost";

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
                    <h3>{post.title}</h3>
                    <p> {post.content.substring(0,50)}</p>
                    <p> <AuthorPost userId={post.userId}/> </p>
                    <hr/>
                </article>
                
            ))
            }
        </section>


    );
}

export default PostsList;