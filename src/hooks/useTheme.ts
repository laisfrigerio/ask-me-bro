import { useEffect, useState } from 'react'

export default function useTheme () {
	const [theme, setTheme] = useState('dark')

	function setMode (mode: string) {
			window.localStorage.setItem('theme', mode)
			setTheme(mode)
	}

	function themeToggler () {
			theme === 'light' ? setMode('dark') : setMode('light')
	}

	useEffect(() => {
			const localTheme = window.localStorage.getItem('theme')
			localTheme && setTheme(localTheme)
	}, [])

	return [theme, themeToggler]
}
