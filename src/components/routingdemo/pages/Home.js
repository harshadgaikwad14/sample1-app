import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Use Effect Call on Loading home page");
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const getAllUsersResult = await axios.get("http://localhost:3001/users");
    console.log(">> Users : " + getAllUsersResult.data);
    setUsers(getAllUsersResult.data.reverse());
  };

  const deleteUser = async (userId) => {
    console.log(">> UsedeleteUserrs - userId : " + userId);
    await axios.delete(`http://localhost:3001/users/${userId}`);

    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h4>Home Page</h4>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mr-2"
                    to={`/users/view/${user.id}`}
                  >
                    {" "}
                    View{" "}
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    {" "}
                    Delete{" "}
                  </Link>
                </td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
