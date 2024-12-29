import { createContext, useContext } from "react";

export const TransactionContext = createContext({
	transactions: [
		{
			id: 1,
			transaction: "Lunch",
			memberId: 1,
			groupId: 1
		}
	],
	addTransaction: (transaction, amount, groupId, memberId) => {},
	updateTransaction: (id, member) => {},
	deleteTransaction: (id) => {}
});

export const useTransaction = () => {
	return useContext(TransactionContext);
};

export const TransactionProvider = TransactionContext.Provider;
