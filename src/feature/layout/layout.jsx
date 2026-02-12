import { Outlet } from "react-router-dom";
import Sidebar from "../layout/sidebar";
import Header from "../layout/header";

function Layout() {

    return (
        <>
            <div className="flex h-screen bg-gray-100">
                {/* SIDEBAR */}
                <Sidebar />
                {/* MAIN CONTENT */}
                <div className="flex-1 flex flex-col">
                    {/* HEADER */}
                    <Header />
                    {/* CONTENT */}
                    <main className="flex-1 p-6 overflow-auto">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    );
}

export default Layout;