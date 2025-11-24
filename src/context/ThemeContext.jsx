import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

// Get theme immediately (synchronously) before render
const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'dark';
    }
    return 'dark';
};

// Set theme on document immediately
if (typeof window !== 'undefined') {
    document.documentElement.setAttribute('data-theme', getInitialTheme());
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme());
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        // Disable transitions on first load to prevent flash
        if (isFirstLoad) {
            document.documentElement.classList.add('no-transition');
            setIsFirstLoad(false);

            // Re-enable transitions after a tick
            setTimeout(() => {
                document.documentElement.classList.remove('no-transition');
            }, 0);
        }

        // Apply theme to document
        document.documentElement.setAttribute('data-theme', theme);
        // Save to localStorage
        localStorage.setItem('theme', theme);
    }, [theme, isFirstLoad]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
