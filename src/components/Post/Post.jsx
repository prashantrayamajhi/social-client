import "./index.scss";
import MaleImage from "./../../images/male.png";
import FemaleImage from "./../../images/female.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const Post = ({ post, isAuthor = false }) => {
  return (
    <div className="post">
      <div className="header">
        <div className="img-wrapper">
          {!post.anonymous ? (
            <>
              <img
                src={
                  post.user.image
                    ? post.user.image
                    : post.user.gender === "male"
                    ? MaleImage
                    : FemaleImage
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
        {isAuthor && <FontAwesomeIcon icon={faEllipsisH} className="icon" />}
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
