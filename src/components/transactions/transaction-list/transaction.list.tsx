import {Transaction} from "../../../models/transaction.ts";
import {TransactionCard} from "../transaction-card/transaction.card.tsx";

interface TransactionListProps {
    transactions: Transaction[];
}

export const TransactionList = (props: TransactionListProps) => {
    const { transactions } = props;
    return (
        <>
            { !transactions || transactions.length === 0 ? <h3>No transactions found!</h3>:
                transactions.map((item: Transaction) => (
                    <TransactionCard transaction={item} key={item.id}></TransactionCard>
                ))
            }
        </>
    )
}