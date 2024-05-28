import './nft.page.css'
import {Nft} from "../../models/nft.ts";
import {NftCard} from "../../components/nft/nft-card/nft.card.tsx";
import {TransactionList} from "../../components/transactions/transaction-list/transaction.list.tsx";
import {useEffect, useState} from "react";
import {Transaction} from "../../models/transaction.ts";
import {API_URL} from "../../App.tsx";
import {useParams} from "react-router-dom";

export const NftPage = () => {
    const { id } = useParams();
    const [nft, setNft] = useState<Nft>({} as Nft);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const LoadNft = async () => {
        const response = await fetch(`${API_URL}/api/nft/${id}`);
        const json = await response.json();
        setNft(json.data);
    }

    const LoadTransactions = async () => {
        const response = await fetch(`${API_URL}/api/transaction/nft/${id}`);
        const json = await response.json();
        setTransactions(json.data);
    }

    const AddTransaction = async () => {
        const body = new URLSearchParams({nftId: nft.id});
        await fetch(`${API_URL}/api/transaction/`, {
            method: "POST",
            body
        });
        await LoadTransactions();
    }

    useEffect(() => {
        LoadNft().catch();
        LoadTransactions().catch();
    }, []);

    return (
        <div className='nft-page'>
            <NftCard nft={nft}></NftCard>
            <h1>Image</h1>
            <img src={`${API_URL}/static/${nft.filename}`} alt='NFT IMAGE'></img><br/>
            <button onClick={() => AddTransaction()}>Add Transaction</button>
            <h1>Transactions:</h1>
            <TransactionList transactions={transactions}></TransactionList>
        </div>
);
}
