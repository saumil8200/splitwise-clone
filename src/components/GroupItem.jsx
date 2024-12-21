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
        <div className="flex mb-2">
            <input className="w-full p-2" type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} readOnly={!isGroupEditable} />
            <button className="px-6 bg-gray-950 text-white" onClick={editGroup} disabled={groupName === group.group && isGroupEditable}>
                {isGroupEditable ? 'Save' : 'Edit'}
            </button>
            <button className="px-6 bg-red-600 text-white" onClick={() => deleteGroup(group.id)}>
                Delete
            </button>
        </div>
    );
}

export default GroupItem;
