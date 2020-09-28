function Blog({ posts }) {
    return (
        <ul>
            {posts.map((post) => (
                <li>{post.title}</li>
            ))}
        </ul>
    );
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://localhost:8888/posts');
    const posts = await res.json();

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    };
}

export default Blog;
