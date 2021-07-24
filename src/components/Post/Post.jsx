import "./index.scss";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="header">
        <div className="img-wrapper">
          {post.anonymous ? (
            <>
              <img
                src={
                  post.user.image
                    ? post.user.image
                    : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                }
                alt={post.user.name}
              />
              <p>{post.user.name}</p>
            </>
          ) : (
            <>
              <img
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                alt="Anonymous"
              />
              <p>Anonymous</p>
            </>
          )}
        </div>
      </div>
      <div className="body">
        {post.image && (
          <div className="image-body">
            {post.title && <p>{post.title}</p>}
            <img src={post.image} alt={post?.title} />
          </div>
        )}
        {!post.image && post.title && (
          <div className="title-body">
            <p>{post.title}</p>
          </div>
        )}
      </div>

      <div className="footer">
        <p>Like</p>
        <p>Comment</p>
        <p>Report</p>
      </div>
    </div>
  );
};

export default Post;
