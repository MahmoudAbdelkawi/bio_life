import React from "react";
import "./users.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { getUsers, deleteUser } from "../../services/adminUsers";
import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function get() {
      const usersResult = await getUsers();
      setUsers(usersResult.data);
    }
    get();
  }, []);

  const usersArray = users.map((user) => ({
    id: user._id,
    fname: user.fname,
    lname: user.lname,
    username: user.username,
    email: user.email,
    phoneNumber: user.phoneNumber,
  }));
  return (
    <>
      <h1 className="h1-user">Users</h1>
      <div className="table-parent">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>username</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Delete user</th>
            </tr>
          </thead>

          <tbody>
            {usersArray.map((user) => {
              return (
                <tr key={user.id}>
                  <td data-label="id">{user.id}</td>
                  <td data-label="Name">
                    {user.fname} {user.lname}
                  </td>
                  <td data-label="username">{user.username}</td>
                  <td data-label="Phone">{user.phoneNumber}</td>
                  <td data-label="Email">{user.email}</td>
                  <td data-label="Delete">
                    <button
                      onClick={() => {
                        deleteUser(user.id);
                        window.location = "/dashboard/users";
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
