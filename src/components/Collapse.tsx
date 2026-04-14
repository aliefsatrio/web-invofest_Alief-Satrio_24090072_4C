import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface collapseProps{
    title: string;
    description: string;
}

const Collapse:React.FC<collapseProps> = ({ title, description }) => {
     const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="border border-red-500 rounded-lg">
            <button onClick={() => setIsOpen(!isOpen)} className="p-4 flex gap-4 hover:bg-gray-300 transition-colors w-full">
                <div className="p-2 bg-gray-100">
                    <ChevronDown className={`text-gray-600 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                </div>
                <h3>{title}</h3>
            </button>
            {isOpen &&<div className="p-4 bg-gray-100">{description}</div>}
        </div>
    );
};

export default Collapse;