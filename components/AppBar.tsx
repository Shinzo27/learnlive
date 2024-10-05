import Link from "next/link";

const AppBar = () => {
    return (
        <div className="flex items-center justify-between h-16 px-4 bg-neutral-950 text-white font-bold">
            <div className="pl-5 text-2xl">
                <Link href="/">LearnLive</Link>
            </div>
            <div className="flex items-center space-x-7">
                <Link href="">Github</Link>
                <Link href="/courses">Courses</Link>
                <Link href="">About</Link>
            </div>
        </div>
    );
}

export default AppBar;