import { useEffect, useState } from "react";
import "./App.css";
import { GroupProvider, MemberProvider, TransactionProvider } from "./contexts";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
	const [groups, setGroups] = useState([]);
	const [members, setMembers] = useState([]);
	const [transactions, setTransactions] = useState([]);

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

	const addTransaction = (transaction, groupId, memberId) => {
		setTransactions((prev) => [{ id: Date.now(), groupId, memberId, ...transaction }, ...prev]);
	};

	const updateTransaction = () => {};

	const deleteTransaction = () => {};

	useEffect(() => {
		const groups = JSON.parse(localStorage.getItem("groups"));
		const storedMembers = JSON.parse(localStorage.getItem("members"));
		const storedTransactions = JSON.parse(localStorage.getItem("transactions"));

		if (groups && groups.length > 0) {
			setGroups(groups);
		}

		if (storedMembers && storedMembers.length > 0) {
			setMembers(storedMembers);
		}

		if (storedTransactions && storedTransactions.length > 0) {
			setTransactions(storedTransactions);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("groups", JSON.stringify(groups));
	}, [groups]);

	useEffect(() => {
		localStorage.setItem("members", JSON.stringify(members));
	}, [members]);

	useEffect(() => {
		localStorage.setItem("transactions", JSON.stringify(transactions));
	}, [transactions]);

	return (
		<GroupProvider value={{ groups, addGroup, updateGroup, deleteGroup }}>
			<MemberProvider value={{ members, addMember, updateMember, deleteMember }}>
				<TransactionProvider value={{ transactions, addTransaction, updateTransaction, deleteTransaction }}>
					<RouterProvider router={router} />
				</TransactionProvider>
			</MemberProvider>
		</GroupProvider>
	);
}

export default App;
