import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between">
            <Link className="text-primary font-semibold text-2xl" href="/">PIZZZZA</Link>
            <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                <Link href="/">Home</Link>
                <Link href="">Menu</Link>
                <Link href="">About</Link>
                <Link href="">Contact</Link>
                <Link href="/login" className="bg-primary px-6 py-2 rounded-md text-white ">Login</Link>
            </nav>
        </header>
    );
};

// export default Header;