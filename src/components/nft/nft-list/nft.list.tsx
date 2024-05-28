import {Nft} from "../../../models/nft.ts";
import {NftCard} from "../nft-card/nft.card.tsx";

interface NftListProps {
    items: Nft[];
}

export const NftList = (props: NftListProps) => {
    const { items } = props;
    return (
        <>
            {   !items || items.length === 0 ? <h3>No NFTs found!</h3>:
                items.map((item: Nft) => (
                    <NftCard nft={item} key={item.id}></NftCard>
                ))
            }
        </>
    )
}