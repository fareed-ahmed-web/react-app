import Card from "../layout/card";
function Dashboard() {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <Card title="Total Revenue" onClick={() => { }} />

                {/* Card 2 */}
                <   Card title="Total Users" onClick={() => { }} />

                {/* Card 3 */}
                <Card title="Orders" onClick={() => { }} />

                {/* Card 4 */}
                <Card title="Active Now" onClick={() => { }} />

                {/* Card 5 */}
                <Card title="Active Now" onClick={() => { }} />

                {/* Card 6 */}
                <Card title="Active Now" onClick={() => { }} />

                {/* Card 7 */}
                <Card title="Active Now" onClick={() => { }} />

                {/* Card 8 */}
                <Card title="Active Now" onClick={() => { }} />
            </div>
        </>
    );
}

export default Dashboard;