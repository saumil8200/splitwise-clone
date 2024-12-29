/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTransaction, useMember } from "../contexts";

function TransactionForm({ groupId }) {
	const { addTransaction } = useTransaction();
	const { members } = useMember();
	const [transaction, setTransaction] = useState("");
	const [amount, setAmount] = useState("");
	const [memberId, setMemberId] = useState("");

	const handleAddTransaction = (e) => {
		e.preventDefault();

		if (!transaction.trim() || !amount.trim() || isNaN(amount) || !memberId) return;

		addTransaction({ transaction: transaction.trim(), amount: parseFloat(amount) }, groupId, parseInt(memberId));

		// Reset form fields
		setTransaction("");
		setAmount("");
		setMemberId("");
	};

	// Filter members for the current group
	const groupMembers = members.filter((member) => member.groupId === groupId);

	return (
		<div className="mt-6">
			<h3 className="font-semibold text-lg mb-4">Add Transaction</h3>
			<form onSubmit={handleAddTransaction} className="flex flex-col">
				<input
					type="text"
					placeholder="Transaction Description"
					value={transaction}
					onChange={(e) => setTransaction(e.target.value)}
					className="w-full p-3 mb-3"
				/>
				<input
					type="text"
					placeholder="Amount"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					className="w-full p-3 mb-3"
				/>
				<select value={memberId} onChange={(e) => setMemberId(e.target.value)} className="w-full p-3 mb-3">
					<option value="">Select Member</option>
					{groupMembers.map((member) => (
						<option key={member.id} value={member.id}>
							{member.member}
						</option>
					))}
				</select>
				<button type="submit" className="bg-gray-950 text-white px-3 py-2 text-sm">
					Add Transaction
				</button>
			</form>
		</div>
	);
}

export default TransactionForm;
