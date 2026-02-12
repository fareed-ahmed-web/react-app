import { useNavigate } from "react-router-dom";

function MenuItem({ icon, label, collapsed, onClick }) {
    const navigate = useNavigate();

    return (
        <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => navigate(onClick)}  >
            <span>{icon}</span>
            {!collapsed && <span className="text-sm" >{label}</span>}
        </div>
    );
}

export default MenuItem;
