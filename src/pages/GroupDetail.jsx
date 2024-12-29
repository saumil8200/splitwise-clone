import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGroup, useMember, useTransaction } from "../contexts";
import { MemberForm, TransactionForm } from "../components";

function GroupDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { groups, updateGroup, deleteGroup } = useGroup();
	const { members } = useMember();
	const { transactions } = useTransaction();

	const [group, setGroup] = useState(null);
	const [isGroupEditable, setIsGroupEditable] = useState(false);
	const [groupName, setGroupName] = useState("");

	useEffect(() => {
		const foundGroup = groups.find((g) => g.id === parseInt(id));
		if (foundGroup) {
			setGroup(foundGroup);
			setGroupName(foundGroup.group);
		}
	}, [groups, id]);

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
		return <p>Group not found</p>;
	}

	const groupMembers = members.filter((member) => member.groupId === group.id);
	const groupTransactions = transactions.filter((transaction) => transaction.groupId === group.id);

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

			<div className="">
				<div className="">
					<TransactionForm groupId={group.id} />

					<div className="mt-6">
						<h3 className="font-semibold text-lg">Group Transactions</h3>
						<ul>
							{groupTransactions.length > 0 ? (
								groupTransactions.map((transaction) => {
									const member = members.find((m) => m.id === transaction.memberId);
									return (
										<li key={transaction.id} className="py-2">
											{transaction.transaction} - {transaction.amount} (Paid by: {member?.member || "Unknown"})
										</li>
									);
								})
							) : (
								<li>No transactions in this group yet.</li>
							)}
						</ul>
					</div>
				</div>
				<div>
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
				</div>
			</div>
		</>
	);
}

export default GroupDetail;
