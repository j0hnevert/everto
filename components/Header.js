import {
    CheckBadgeIcon,
    HomeIcon,
    RectangleStackIcon,
    BoltIcon,
    MagnifyingGlassIcon,
    UserIcon
} from '@heroicons/react/24/solid'
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import Link from 'next/link'


function Header() {
    return (
        <header className="flex flex-col sm:flex-row justify-between
        items-center h-auto border-b border-white">
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <Link href="/"><a><HeaderItem title='HOME' Icon={HomeIcon} /> </a></Link>
                <HeaderItem title='TRENDING' Icon={BoltIcon} />
                <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon} />
                <HeaderItem title='COLLECTIONS' Icon={RectangleStackIcon} />
                <HeaderItem title='SEARCH' Icon={MagnifyingGlassIcon} />
                <Link href="enroll"><a><HeaderItem title='LIST' Icon={UserIcon} /> </a>
                </Link>
            </div>
            <Link href="/"><a><Image 
            className="object-contain"
            src="/evertlogo.png" width={200} height={100} /></a></Link>
        </header>
    )
}

export default Header