import "./nft.card.css"
import {Nft} from "../../../models/nft.ts";
import {useNavigate} from "react-router-dom";

interface NftCardProps {
    nft: Nft
}

export const NftCard = (props: NftCardProps) => {
    const { id, name, description } = props.nft;
    const navigate = useNavigate();

    return (
        <div className="nft-card" onClick={() => navigate(`/nft/${id}`)}>
            <h3>Name: {name}</h3>
            <p>Description: {description}</p>
            <p>Id: {id}</p>
        </div>
    );
}