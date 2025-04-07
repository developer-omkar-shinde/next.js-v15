"use client";
import PageContainer from "@/layouts/PageContainer";
import Link from "next/link";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

export default function UsersPage() {
  return (
    <PageContainer paddingTopBottom={1}>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          {/* This link opens the modal */}
          <Link href={`users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </PageContainer>
  );
}
