
const Boton = ({ children, className = "", onClick, disabled = false }) => {

    return (
    <button
            onClick={onClick}
            disabled={disabled}
        className={`bg-purpura rounded flex items-center py-2 px-4 text-center text-black font-semibold my-4 ${className}`}
    >
        {children}
    </button>
    );
};

export default Boton;