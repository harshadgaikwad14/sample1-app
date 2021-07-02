import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    console.log("Use Effect Call on Loading Edit User page");
    loadUser();
  }, []);

  const loadUser = async () => {
    const userResult = await axios.get(`http://localhost:3001/users/${id}`);
    console.log("Get User Data : " + userResult.data);
    setUser(userResult.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1> View User Page</h1>
        <form action="">
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              readOnly
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter Name"
              value={user.name}
            />
          </div>

          <div className="mb-3">
            <label for="username" className="form-label">
              UserName
            </label>
            <input
              type="text"
              readOnly
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter User Name"
              value={user.username}
            />
          </div>

          <div className="mb-3">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              readOnly
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={user.email}
            />
          </div>

          <div className="mb-3">
            <label for="phone" className="form-label">
              phone
            </label>
            <input
              type="phone"
              readOnly
              className="form-control"
              id="phone"
              name="phone"
              placeholder="Enter phone"
              value={user.phone}
            />
          </div>

          <div className="mb-3">
            <label for="website" className="form-label">
              website
            </label>
            <input
              type="website"
              readOnly
              className="form-control"
              id="website"
              name="website"
              placeholder="Enter website"
              value={user.website}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ViewUser;
