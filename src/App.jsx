import { useEffect, useState } from "react";
import "./App.css";
import { GroupProvider, MemberProvider } from "./contexts";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  const [groups, setGroups] = useState([]);
  const [members, setMembers] = useState([]);

  const addGroup = (group) => {
    setGroups((prev) => [{ id: Date.now(), ...group }, ...prev]);
  };
  const updateGroup = (id, group) => {
    setGroups((prev) => prev.map((prevGroup) => (prevGroup.id === id ? group : prevGroup)));
  };
  const deleteGroup = (id) => {
    setGroups((prev) => prev.filter((group) => group.id !== id));
  };

  const addMember = (member, groupId) => {
    setMembers((prev) => [{ id: Date.now(), groupId, ...member }, ...prev]);
  };
  const updateMember = (id, updatedMember) => {
    setMembers((prev) => prev.map((prevMember) => (prevMember.id === id ? updatedMember : prevMember)));
  };
  const deleteMember = (id) => {
    setMembers((prev) => prev.filter((member) => member.id !== id));
  };

  useEffect(() => {
    const groups = JSON.parse(localStorage.getItem("groups"));
    const storedMembers = JSON.parse(localStorage.getItem("members"));

    if (groups && groups.length > 0) {
      setGroups(groups);
    }

    if (storedMembers && storedMembers.length > 0) {
      setMembers(storedMembers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [groups]);

  useEffect(() => {
    localStorage.setItem("members", JSON.stringify(members));
  }, [members]);

  return (
    <GroupProvider value={{ groups, addGroup, updateGroup, deleteGroup }}>
      <MemberProvider value={{ members, addMember, updateMember, deleteMember }}>
        <RouterProvider router={router} />
      </MemberProvider>
    </GroupProvider>
  );
}

export default App;
