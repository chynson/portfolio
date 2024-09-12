
interface IExpandedProjectModalProps {
    expanded: boolean;
    onClose: () => void;
}

function ExpandedProjectModal({expanded, onClose}: IExpandedProjectModalProps) {
    return (
        <div>
            <div className="bg-secondary w-[600px] h-[400px] fixed">
                {expanded &&
                    <button className="text-background" onClick={() => onClose}>X</button>
                }
            </div>
        </div>
    );
}

export default ExpandedProjectModal;