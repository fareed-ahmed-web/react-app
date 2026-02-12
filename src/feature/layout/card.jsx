function Card({ title, onClick }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4" onClick={onClick}>
            <h2 className="text-lg font-semibold">{title}</h2>
        </div>
    );
}

export default Card;