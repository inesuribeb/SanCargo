import { Outlet } from "react-router-dom";
import { LanguageProvider } from "../contexts/LanguageContext";
import Header from "../components/Header/Header";

const Root = () => (
    <LanguageProvider>
        <Header />
        <Outlet />
    </LanguageProvider>
);

export default Root;