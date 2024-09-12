import React from "react";

interface IExpandedProjectModalProps {
    expanded: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

function ExpandedProjectModal({expanded, onClose, children}: IExpandedProjectModalProps) {


    return (
        <div>
            <div className={`fixed flex justify-center items-center w-[600px] h-[350px] bg-primary rounded-3xl${expanded ? "visible" : "invisible"}`}
                 onClick={onClose}>
                <div className="w-full h-full bg-primary rounded-3xl" onClick={(e) => e.stopPropagation()}>
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-2xl font-bold text-gray-orange">Project Title</h2>
                        <p className="text-sm text-gray-green">Project Description</p>
                        <button className="absolute top-2 right-2 py-1 px-2 border border-secondary rounded-md
                                           text-gray-orange"
                                onClick={onClose}>
                            X
                        </button>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpandedProjectModal;