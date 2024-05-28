import './home.page.css'
import {useEffect, useState} from "react";
import {Nft} from "../../models/nft.ts";
import {NftList} from "../../components/nft/nft-list/nft.list.tsx";
import {API_URL} from "../../App.tsx";
import {NftForm} from "../../components/nft/nft-form/nft.form.tsx";

export const HomePage = () => {
    const [rerender, setRerender] = useState<number>(0);
    const [nfts, setNfts] = useState<Nft[]>([]);
    const LoadNfts = async () => {
        const response = await fetch(`${API_URL}/api/nft/`).then();
        const json = await response.json();
        setNfts(json.data);
    }

    useEffect(() => {
        LoadNfts().then();
    }, [rerender]);

    return (
        <div className='home-page'>
            <NftForm rerender={rerender} setRerender={setRerender}/>
            <NftList items={nfts}/>
        </div>
    )
}