import { useDispatch } from "react-redux";
import { useState } from "react";
import { updateProfileSettings } from "./../../../actions/profile";

const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const [bio, setBio] = useState(user.bio);
  const [website, setWebsite] = useState(user.website);
  const [github, setGithub] = useState(user.github);
  const [instagram, setInstagram] = useState(user.instagram);
  const [linkedin, setLinkedin] = useState(user.linkedin);
  const [facebook, setFacebook] = useState(user.facebook);
  const [youtube, setYoutube] = useState(user.youtube);

  const handleFormSubmit = async (e) => {
    // profile/general/:id
    e.preventDefault();
    const data = {
      bio,
      website,
      github,
      instagram,
      linkedin,
      facebook,
      youtube,
    };
    dispatch(updateProfileSettings(data, user._id));
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="input-wrapper">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            placeholder="Keep it short and sweet"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={2}
          ></textarea>
        </div>
        <div className="input-wrapper">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            placeholder="Link your website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="github">Github</label>
          <input
            type="text"
            id="github"
            placeholder="Link your github profile"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="instagram">Instagram</label>
          <input
            type="text"
            id="instagram"
            placeholder="Link your instargram profile"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="linkedin">Linkedin</label>
          <input
            type="text"
            id="linkedin"
            placeholder="Link your linkedin profile"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            id="facebook"
            placeholder="Link your facebook profile"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="youtube">Youtube</label>
          <input
            type="text"
            id="youtube"
            placeholder="Link your youtube channel"
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Profile;
