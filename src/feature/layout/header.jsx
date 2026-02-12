function Header() {
    return <>
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="flex items-center gap-3">
                <span className="text-gray-600 hidden sm:block">
                    Hello, Fareed
                </span>
                <img
                    src="https://i.pravatar.cc/32"
                    className="rounded-full"
                    alt="profile"
                />
            </div>
        </header>
    </>;
}

export default Header;  