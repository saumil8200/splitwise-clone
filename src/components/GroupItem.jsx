/* eslint-disable react/prop-types */
import { useState } from "react";
import { useGroup } from "../contexts";

function GroupItem({ group }) {
    const [isGroupEditable, setIsGroupEditable] = useState(false)
    const [groupName, setGroupName] = useState(group.group)
    const { updateGroup, deleteGroup } = useGroup();

    const editGroup = () => {
        if (isGroupEditable && groupName !== group.group) {
            updateGroup(group.id, { ...group, group: groupName });
        }
        setIsGroupEditable(!isGroupEditable);
    }

    return (
        <div className="bg-white p-8">
            <input className="w-full font-bold text-xl mb-4" type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} readOnly={!isGroupEditable} />
            <div className="flex space-x-2 text-sm">
                <button className="text-gray-950 font-medium" onClick={editGroup} disabled={groupName === group.group && isGroupEditable}>
                    {isGroupEditable ? 'Save' : 'Edit'}
                </button>
                <button className="text-red-600 font-medium" onClick={() => deleteGroup(group.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default GroupItem;
