import { Fragment } from "react";

function PostDetail({ post }) {
    return (
        <Fragment>
            <p>ID {post.id}</p>
            <p>Title {post.title}</p>
            <p>Content {post.content}</p>
        </Fragment>
    );
}
export default PostDetail;