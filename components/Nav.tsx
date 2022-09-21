import Link from "next/link"
import HeaderItem from "./HeaderItem"

function Nav() {
    return (
        <div className="pb-20">

        
        <nav className="flex flex-col sm:flex-row justify-between
        items-center h-auto border-b border-white">
            {/* <div className="flex grid-col-3 border-2 border-green-900 sm:flex-row justify-between items-center h-auto">
                <div className="flex grid-col-3">
                    <div className='flex flex-grow justify-evenly max-w-2xl'>
                        <button>Trainings</button>
                    </div>
                    <div className='flex flex-grow justify-evenly max-w-2xl'>
                        <button>Certifications</button>
                    </div>
                    <div className='flex flex-grow justify-evenly max-w-2xl'>
                        <button>Badges</button>
                    </div>
                    <div className='flex flex-grow justify-evenly max-w-2xl'>
                        <button>Offices</button>
                    </div>
                </div>
            </div> */}
            {/* <div className='flex flex-grow justify-evenly max-w-2xl'>
            <Link href="/">
                <a> CERTIFICATION </a>
            </Link>
            </div>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
            <Link href="/">
                <a> TRAININGS </a>
            </Link>
            </div>

            <h3 className="font-bold text-gray-700 text-md mt-2 text-center">WEB ESSENTIALS</h3>
            <div className="py-2 block text-gray-500 pb-12"> This training course is compose of the programming basics that are essential in building a website . Click the button below to know more about this course</div>
            <Link href="enrollment">
                <a className="bg-blue-500 text-white p-2 rounded hover:bg-slate-900" >See more</a>
            </Link> */}
            <div className="flex grid-cols-3 flex-grow justify-evenly m-5 max-w">
                <div>
                    <button>Trainings</button>
                </div>
                <div>
                    <button>Certifications</button>
                </div>
                <div>
                    <button>Badges</button>
                </div>
            </div>

        </nav>
        </div>
    )
}

export default Nav