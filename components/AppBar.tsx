import Link from "next/link";

const AppBar = () => {
    return (
        <div className="flex items-center justify-between h-16 px-4 bg-neutral-950 text-white font-bold fixed top-0 left-0 right-0 z-50">
            <div className="pl-5 text-2xl">
                LearnLive
            </div>
            <div className="flex items-center space-x-7">
                <Link href="">Github</Link>
                <Link href="">Courses</Link>
                <Link href="">About</Link>
            </div>
        </div>
    );
}

export default AppBar;