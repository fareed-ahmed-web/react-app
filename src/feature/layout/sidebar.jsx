import { useState } from "react";
import MenuItem from "./menueItem";

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    return <>
        <aside
            className={`bg-gray-900 text-white transition-all duration-300 
        ${collapsed ? "w-20" : "w-64"} flex flex-col`}
        >
            {/* Logo */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
                {!collapsed && <span className="text-lg font-semibold">Dashboard</span>}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="text-gray-400 hover:text-white"
                >
                    ☰
                </button>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-700">
                <img
                    src="https://i.pravatar.cc/40"
                    alt="user"
                    className="w-10 h-10 rounded-full"
                />
                {!collapsed && (
                    <div>
                        <p className="text-sm font-medium">Fareed Ahmed</p>
                        <p className="text-xs text-gray-400">Admin</p>
                    </div>
                )}
            </div>

            {/* Menu */}
            <nav className="flex-1 px-2 py-4 space-y-1">
                <MenuItem icon="🏠" label="Dashboard" onClick="/dashboard" collapsed={collapsed} />
                <MenuItem icon="👥" label="Employees" onClick="/employee" collapsed={collapsed} />
                <MenuItem icon="📋" label="Task" onClick="/task" collapsed={collapsed} />
                <MenuItem icon="📊" label="Reports" onClick="/" collapsed={collapsed} />
                <MenuItem icon="⚙️" label="Settings" onClick="/" collapsed={collapsed} />
            </nav>
        </aside>

    </>;
}

export default Sidebar;