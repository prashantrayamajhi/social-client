import { updateProfilePicture } from "./../../../actions/profile";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfilePicture = () => {
  const [image, setImage] = useState(null);
  const user = useSelector((state) => state.profile.user);

  const dispatch = useDispatch();
  const handleProfilePicture = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    dispatch(updateProfilePicture(formData, user._id));
  };

  return (
    <form onSubmit={handleProfilePicture}>
      <input
        type="file"
        name="image"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
      <button type="submit" style={{ marginTop: "2rem" }}>
        Update
      </button>
    </form>
  );
};

export default ProfilePicture;
