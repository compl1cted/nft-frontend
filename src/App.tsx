import './App.css'
import {AppRouter} from "./AppRouter.tsx";

export const API_URL = "http://localhost:9010";

export const App = () => {
    return (
        <AppRouter></AppRouter>
    );
}