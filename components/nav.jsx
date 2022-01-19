import Link from 'next/link';

const Nav = () => {
    return (
        <div className='flex flex-row items-center justify-start space-x-4 h-12 border-b border-gray-200 dark:border-gray-500 w-full'>
            <div>
                <Link href='/'>
                    <a>
                        <span className='text-black dark:text-white'>home</span>
                    </a>
                </Link>
            </div>
            <div>
                <Link href='/about'>
                    <a>
                        <span className='text-black dark:text-white'>about</span>
                    </a>
                </Link>
            </div>
            <div>
                <Link href='/details'>
                    <a>
                        <span className='text-black dark:text-white'>details</span>
                    </a>
                </Link>
            </div>
        </div>
    )
};

export default Nav;
