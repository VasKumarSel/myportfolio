import { useState, useEffect } from 'react';

const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                <span className="nav-logo">{'<VK />'}</span>
                <nav>
                    <ul className="nav-links">
                        {links.map(({ label, href }) => (
                            <li key={label}>
                                <a href={href}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
