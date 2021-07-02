import React, { useState, Fragment } from "react";

const ListExample = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "harshad" },
    { id: 2, name: "vivek" },
  ]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListExample;
