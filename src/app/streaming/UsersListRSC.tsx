/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const UsersListRSC = async () => {
  const res = await fetch("https://dummyjson.com/users", {
    cache: "no-store", // no-store will
  });

  const data = await res.json();

  // await new Promise((resolve) => setTimeout(resolve, 15000));
  // await new Promise((res) => setTimeout(res, 13000));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="space-y-2">
        {data?.users.map((user: any) => (
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

export default UsersListRSC;
