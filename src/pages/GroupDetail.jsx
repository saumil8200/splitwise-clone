import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGroup } from "../contexts";

function GroupDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { groups, updateGroup, deleteGroup } = useGroup();
    
    const group = groups.find((g) => g.id === parseInt(id));

    const [isGroupEditable, setIsGroupEditable] = useState(false);
    const [groupName, setGroupName] = useState(group?.group || "");

    const editGroup = () => {
        if (isGroupEditable && groupName !== group?.group) {
            updateGroup(group.id, { ...group, group: groupName });
        }
        setIsGroupEditable(!isGroupEditable);
    };
    const handleDelete = () => {
        if (group) {
            deleteGroup(group.id);
            navigate("/");
        }
    };

    if (!group) {
        return <p>Group not found.</p>;
    }

    return (
        <>
            <div>
                <input
                    className="w-full text-2xl font-bold py-6 bg-transparent"
                    type="text"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    readOnly={!isGroupEditable}
                />
                <hr className="border-t border-gray-300 mb-4" />
                <div className="flex space-x-2 text-sm">
                    <button
                        className="text-gray-950 font-medium"
                        onClick={editGroup}
                        disabled={groupName === group.group && isGroupEditable}
                    >
                        {isGroupEditable ? "Save" : "Edit"}
                    </button>
                    <button className="text-red-600 font-medium" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}

export default GroupDetail