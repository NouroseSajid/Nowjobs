import React from 'react';

interface ComponentButtonProps {
    text: string;
    onClick: () => void;
}

const ComponentButton: React.FC<ComponentButtonProps> = ({ text, onClick }) => {
    return (
        <button 
            style={{
                backgroundColor: 'black',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }} 
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default ComponentButton;