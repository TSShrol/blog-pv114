import { useSelector } from "react-redux";

const PostsList = () => {
    const posts = useSelector((store) => store.posts);
    console.log(posts);
    return(
        <section>
            <h2>Posts</h2>
            {
            posts.map(post => (
                <article key={post.id}>
                    <h3>{post.title}</h3>
                    <p> {post.content.substring(0,50)}</p>
                </article>
            ))
            }
        </section>


    );
}

export default PostsList;