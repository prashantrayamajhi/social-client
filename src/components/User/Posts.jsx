import Post from "./../Post/Post";

const Posts = ({ user }) => {
  return (
    user && (
      <div className="left">
        {user.posts.length > 0 ? (
          user.posts
            .slice(0)
            .reverse()
            .map((post, index) => {
              return <Post key={index} post={post} />;
            })
        ) : (
          <div className="no-posts">
            <h3>No Posts Yet</h3>
          </div>
        )}
      </div>
    )
  );
};

export default Posts;
