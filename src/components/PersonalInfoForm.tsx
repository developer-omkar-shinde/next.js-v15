// app/builder/personal/page.tsx
"use client";

import { useResumeStore } from "@/stores/resumeStore";

const PersonalPage = () => {
  const { personal, setPersonal } = useResumeStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonal({ [name]: value });
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Personal Info</h2>

      <input
        name="name"
        placeholder="Full Name"
        value={personal.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="email"
        placeholder="Email"
        value={personal.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="phone"
        placeholder="Phone"
        value={personal.phone}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="location"
        placeholder="Location"
        value={personal.location}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
    </div>
  );
};

export default PersonalPage;
