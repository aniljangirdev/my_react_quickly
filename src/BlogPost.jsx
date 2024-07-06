import { Fragment, useEffect } from "react";

function BlogPost({ title, body }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Fragment>
      <article>
        <h1>{title}</h1>
        {body}
      </article>
    </Fragment>
  );
}

export default BlogPost;
