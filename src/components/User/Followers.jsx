import Banner from "./Banner";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./../../actions/profile";
import { getFollowersUsers } from "./../../actions/follow";
import { useEffect, useState } from "react";
import { checkJwtToken } from "../../helpers/auth";

import FollowCard from "./FollowCard";
import About from "./About";
import "./../../css/Follow.scss";
import "./../../css/Profile.scss";

const Followers = () => {
  const [isOwnProfile, setIsOwnProfile] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  const followers = useSelector((state) => state.follow.followers);
  const { id } = useParams();

  useEffect(() => {
    if (checkJwtToken()) {
      if (id === localStorage.getItem("id")) {
        setIsOwnProfile(true);
      }
    }
  }, [id]);

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getFollowersUsers(id));
  }, [dispatch, id]);

  return (
    <>
      <Navbar />
      {user && (
        <>
          <Banner user={user} isOwnProfile={isOwnProfile} />
          <div className="profile-container">
            <div className="left">
              <div className="follow">
                <h3>Followers</h3>
                <div className="list">
                  {followers && (
                    <FollowCard
                      isFollowing={false}
                      followers={followers}
                      id={id}
                    />
                  )}
                </div>
              </div>
            </div>
            <About id={id} />
          </div>
        </>
      )}
    </>
  );
};

export default Followers;
