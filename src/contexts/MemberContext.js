/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const MemberContext = createContext({
    members: [
        {
            id: 1,
            member: "Saumil",
            groupId: 1,
        }
    ],
    addMember: (member, groupId) => {},
    updateMember: (id, member) => {},
    deleteMember: (id) => {},
})

export const useMember = () => {
    return useContext(MemberContext)
}

export const MemberProvider = MemberContext.Provider