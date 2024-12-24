/* eslint-disable react/prop-types */
import { useState } from "react";
import { useMember } from "../contexts";

function MemberForm({ groupId }) {
  const [member, setMember] = useState("");
  const { addMember } = useMember();

  const handleAddMember = (e) => {
    e.preventDefault();

    if (member.trim()) {
      addMember({ member: member }, groupId);
      setMember("");
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold py-6">Add New Member</h2>
      <hr className="border-t border-gray-300 mb-4" />
      <form onSubmit={handleAddMember}>
        <label htmlFor="member-name" className="font-medium mb-2 block">
          Member Name
        </label>
        <input
          id="member-name"
          className="w-full text-sm p-2 mb-4 border rounded"
          type="text"
          placeholder="Enter member name"
          value={member}
          onChange={(e) => setMember(e.target.value)}
        />
        <button className="bg-gray-950 text-white px-3 py-2 text-sm" type="submit">
          Add Member
        </button>
      </form>
    </>
  );
}

export default MemberForm;
