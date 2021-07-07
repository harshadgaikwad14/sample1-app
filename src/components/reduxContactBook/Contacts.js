import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//rafce
const Contacts = () => {
  const contacts = useSelector((state) => state.contacts);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>
              <input type="checkbox"></input>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            return (
              <tr key={index}>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>
                  <Link href="#" to={`/contacts/edit/${contact.id}`}>
                    Edit
                  </Link>
                  <a href="#"> Delete</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
