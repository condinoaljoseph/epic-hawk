import React, { useState, useContext, createContext } from 'react';

const initialValue = { theme: 'theme-light' };

export const ThemeContext = createContext(initialValue);

export default function ThemeProvider({ children }) {
	const [theme, setTheme] = useState('theme-light');

	const toggleTheme = () => {
		setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light');
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	return useContext(ThemeContext);
}
