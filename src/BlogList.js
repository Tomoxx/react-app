const BlogList = ({ blogs, title }) => {
    console.log(blogs, title);
    return ( 
        <div className="blog-list">
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}, by {blog.author}</h2>
                <p>{blog.body}</p>
            </div>
        ))}
        </div>
    );
}

export default BlogList;