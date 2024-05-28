import './nft.form.css'
import {useState, Dispatch, SetStateAction} from "react";
import {API_URL} from "../../../App.tsx";

interface NftFormProps {
    rerender: number;
    setRerender: Dispatch<SetStateAction<number>>;
}

export const NftForm = (props: NftFormProps) => {
    const {rerender, setRerender} = props;
    let localRerender = rerender;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState<File>();

    const AddNft = async () => {
        if (!file) {
            return
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("file", file);
        await fetch(`${API_URL}/api/nft/`, {
            method: 'POST',
            body: formData
        });
        setRerender(localRerender + 1);
        localRerender += 1;
    }
    return (
        <form method="POST" onSubmit={async e => {
            e.preventDefault();
            await AddNft();
        }}>
            <h1>Add Nft</h1>
            <input type="text" name="name" placeholder="Name" onChange={e => setName(e.target.value)}/>
            <input type="text" name="description" placeholder="Description(Optional)"
                   onChange={e => setDescription(e.target.value)}/>
            <input type="file" name="file" onChange={e => {
                if (!e.target.files) {
                    return
                }
                setFile(e.target.files[0]);
            }}/>
            <button type="submit">Add Nft</button>
        </form>
    );
}