import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGroup, useMember } from "../contexts";
import { MemberForm } from '../components';

function GroupDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { groups, updateGroup, deleteGroup } = useGroup();
    const { members } = useMember();
    
    const group = groups.find((g) => g.id === parseInt(id));

    const [isGroupEditable, setIsGroupEditable] = useState(false);
    const [groupName, setGroupName] = useState(group?.group || "");

    const handleUpdateGroup = () => {
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

    const groupMembers = members.filter((member) => member.groupId === group.id);

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
                        onClick={handleUpdateGroup}
                        disabled={groupName === group.group && isGroupEditable}
                    >
                        {isGroupEditable ? "Save" : "Edit"}
                    </button>
                    <button className="text-red-600 font-medium" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </div>
            <div className="mt-6">
                <MemberForm groupId={group.id} />
            </div>

            <div className="mt-6">
                <h3 className="font-semibold text-lg">Group Members</h3>
                <ul>
                    {groupMembers.length > 0 ? (
                        groupMembers.map((member) => (
                            <li key={member.id} className="py-2">
                                {member.member}
                            </li>
                        ))
                    ) : (
                        <li>No members in this group yet.</li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default GroupDetail