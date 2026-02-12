import { createPortal } from "react-dom";
import { useEffect } from "react";

function Modal({ title, isOpen, children, onClose }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [isOpen])

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />

            {/* Modal box */}
            <div className="relative bg-white rounded-lg shadow-lg w-full max-w-full p-6 z-10">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-black">
                        ✕
                    </button>
                </div>
                {/* Children content */}
                {children}
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}

export default Modal;