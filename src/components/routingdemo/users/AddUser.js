import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const onChangeInputEvent = (evt) => {
    console.log(evt.target.value);
    setUser({ ...user, [evt.target.name]: evt.target.value });
  };

  const submitData = async (evt) => {
    console.log(evt.target.value);
    evt.preventDefault(); // Data will no expose in url
    await axios.post("http://localhost:3001/users", user);
    history.push("/"); // Redirect Url
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1> Add User Page</h1>
        <form action="" onSubmit={(e) => submitData(e)}>
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter Name"
              value={user.name}
              onChange={(evt) => onChangeInputEvent(evt)}
            />
          </div>

          <div className="mb-3">
            <label for="username" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter User Name"
              value={user.username}
              onChange={(evt) => onChangeInputEvent(evt)}
            />
          </div>

          <div className="mb-3">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={(evt) => onChangeInputEvent(evt)}
            />
          </div>

          <div className="mb-3">
            <label for="phone" className="form-label">
              phone
            </label>
            <input
              type="phone"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Enter phone"
              value={user.phone}
              onChange={(evt) => onChangeInputEvent(evt)}
            />
          </div>

          <div className="mb-3">
            <label for="website" className="form-label">
              website
            </label>
            <input
              type="website"
              className="form-control"
              id="website"
              name="website"
              placeholder="Enter website"
              value={user.website}
              onChange={(evt) => onChangeInputEvent(evt)}
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-primary">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
