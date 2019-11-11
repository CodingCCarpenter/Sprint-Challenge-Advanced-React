import React from 'react';
import useDarkMode from '../hooks/useDarkMode.js';

const ToggleDarkMode = () => {
    const [ darkMode, setDarkMode ] = useDarkMode('darkMode', false);

    return(
        <button 
            onClick={(e) => {
                e.preventDefault();
                setDarkMode(!darkMode);
            }}
            data-testid='toggle-dark-mode'
        >
            { darkMode ? 'Light Mode' : 'Dark Mode' }
        </button>
    );
};

export default ToggleDarkMode;