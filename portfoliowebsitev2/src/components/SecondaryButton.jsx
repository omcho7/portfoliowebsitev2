import '../styles/SecondaryButton.css'

const SecondaryButton = ({ 
    text, 
    onClick, 
    size = 'medium', // small, medium, large
    disabled = false,
    className = '',
    icon
}) => {
    return (
        <button 
            className={`secondary-button ${size} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && <span className="button-icon">{icon}</span>}
            {text}
        </button>
    )
}

export default SecondaryButton