/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const GroupContext = createContext({
  groups: [
    {
      id: 1,
      group: "Ahmedabad Trip"
    }
  ],
  addGroup: (group) => {},
  updateGroup: (id, group) => {},
  deleteGroup: (id) => {}
});

export const useGroup = () => {
  return useContext(GroupContext);
};

export const GroupProvider = GroupContext.Provider;
