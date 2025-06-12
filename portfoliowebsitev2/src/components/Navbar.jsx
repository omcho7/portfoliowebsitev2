import { useState } from 'react'
import PrimaryButton from './primaryButton'
import { useTheme } from '../context/ThemeContext'
import '../styles/navbar.css'

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="navbar">
            <div className="logo">
                OMAR<span className="dot">.</span>
            </div>
            
            <button 
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#resume" onClick={() => setIsMenuOpen(false)}>Resume</a>
                <PrimaryButton 
                    text="Contact Me"
                    size="small"
                    onClick={() => {
                        console.log('Contact clicked')
                        setIsMenuOpen(false)
                    }}
                />
                <button 
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? '☀️' : '🌙'}
                </button>
            </div>
        </nav>
    )
}

export default Navbar 