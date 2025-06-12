import '../styles/PrimaryButton.css'

const PrimaryButton = ({ 
    text, 
    onClick, 
    size = 'medium', // small, medium, large
    disabled = false,
    className = '',
    icon
}) => {
    return (
        <button 
            className={`primary-button ${size} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && <span className="button-icon">{icon}</span>}
            {text}
        </button>
    )
}

export default PrimaryButton