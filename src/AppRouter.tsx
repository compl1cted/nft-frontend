import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/home-page/home.page.tsx";
import {NftPage} from "./pages/nft-page/nft.page.tsx";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={HomePage}></Route>
                <Route path='/nft/:id' Component={NftPage}></Route>
            </Routes>
        </BrowserRouter>
    );
}