import { useEffect } from 'react';

interface IExpandedProjectModalProps {
    onClose: () => void;
}

function ExpandedProjectModal({ onClose }: IExpandedProjectModalProps) {

    function handleClickInside(e: React.MouseEvent) {
        e.stopPropagation();
    }

    // Prevents scrolling while card is open
    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30" onClick={onClose}>
            <div className="w-[90%] max-w-[600px] h-[400px] p-6 rounded-3xl box-primary bg-primary
                            transform transition-transform duration-300 scale-100 animate-fadeIn" 
                onClick={handleClickInside}>
                {
                    <button className="absolute top-4 right-4 text-xl rounded-5xl bg-gray-green" onClick={onClose}>
                        x
                    </button>
                }
            </div>
        </div>
    );
}

export default ExpandedProjectModal;