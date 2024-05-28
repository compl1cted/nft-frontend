import './transaction.card.css'
import {Transaction} from "../../../models/transaction.ts";

interface TransactionCardProps {
    transaction: Transaction;
}

export const TransactionCard = (props: TransactionCardProps) => {
    const { id, nftId, createdAt } = props.transaction;
    const formatDate = new Date(`${createdAt}`).toDateString();
    return (
        <div className='transaction-card'>
            <h4>Date: {formatDate}</h4>
            <p>Nft: {nftId}</p>
            <p>Id: {id}</p>
        </div>
    );
}