'use client'
import Link from "next/link";
import { useTheme } from "next-themes"

export default function Header() {
    const { theme, setTheme } = useTheme();

    function toggle(){
        setTheme(theme == 'dark' ? 'light' : 'dark');
    }
    return (
        <header className="top-ribbon">
            <Link href="/" id="logo">Your Name</Link>
            <nav className="navlinks">
                <Link href="/"> Home </Link>
                <Link href="/projects"> Projects </Link>
                <Link href="/#contact"> Contact </Link>
            </nav>
            <button className="toggle-lightmode" onClick={toggle}> {`theme : ${theme == 'dark' ? '☽' : '☀︎'}`} </button>
        </header>
    );
}