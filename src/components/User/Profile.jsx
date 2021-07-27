import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Axios from "./../../api/server";
import config from "./../../helpers/config";
import "./../../styles/Profile.scss";
import Banner from "./Banner";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await Axios.get(
        "/api/v1/users/profile/" + localStorage.getItem("id"),
        config
      );
      setUser(res.data.data);
    };
    fetchUser();
  }, []);

  console.log(user);
  return (
    <div>
      <Navbar />
      <Banner user={user} />
    </div>
  );
};

export default Profile;
