import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { formatDate } from "./../../../helpers/date";
import { updateGeneralSettings } from "./../../../actions/profile";

const General = ({ user }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [gender, setGender] = useState(user.gender);
  const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth);

  useEffect(() => {
    if (user.dateOfBirth) {
      const formattedDate = formatDate(user.dateOfBirth);
      setDateOfBirth(formattedDate);
    }
  }, [user.dateOfBirth]);

  const handleFormSubmit = async (e) => {
    // profile/general/:id
    e.preventDefault();
    const data = { name, address, gender, dateOfBirth };
    dispatch(updateGeneralSettings(data, user._id));
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="input-wrapper">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="input-wrapper">
          <label htmlFor="date">Date of birth</label>
          <input
            type="date"
            id="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => {
              setDateOfBirth(e.target.value);
            }}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default General;
