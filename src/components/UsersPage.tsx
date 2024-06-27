import axios from "axios";
import {useEffect, useState} from "react";

import type {ReqResUserListResponse, User} from "../interfaces";

const LoadUser = async (): Promise<User[]> => {
  try {
    const {data} = await axios.get<ReqResUserListResponse>(
      "https://reqres.in/api/users"
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    LoadUser().then(setUsers);
  }, []);

  return (
    <>
      <h3>Ususarios:</h3>

      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img
                  style={{width: "70px"}}
                  src={user.avatar}
                  alt="User Avatar"
                />
              </td>
              <td>
                {user.first_name} {user.last_name}
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
