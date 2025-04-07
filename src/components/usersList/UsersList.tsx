/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const UsersList = ({ data }: { data: any }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="space-y-2">
        {data &&
          data?.users.map((user: any) => (
            <li key={user.id} className="border p-2 rounded shadow">
              <strong>
                {user.firstName} {user.lastName}
              </strong>{" "}
              - {user.email}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UsersList;
