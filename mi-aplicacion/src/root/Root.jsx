import { Outlet } from "react-router-dom";
import { LanguageProvider } from "../contexts/LanguageContext";
import { HeaderProvider } from "../contexts/HeaderContext";
import Header from "../components/Header/Header";

const Root = () => (
    <LanguageProvider>
        <HeaderProvider>
            <Header />
            <Outlet />
        </HeaderProvider>
    </LanguageProvider>
);

export default Root;