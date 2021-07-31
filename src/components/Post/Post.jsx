import "./index.scss";
import MaleImage from "./../../images/male.png";
import FemaleImage from "./../../images/female.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Post = ({ post, isAuthor = false }) => {
  return (
    post && (
      <div className="post">
        <div className="header">
          <div className="img-wrapper">
            <Link to={`/profile/${post.user._id}`} className="title">
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
            </Link>
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
    )
  );
};

export default Post;
