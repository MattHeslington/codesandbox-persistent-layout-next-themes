import Nav from 'components/nav'
import Sidebar from 'components/sidebar'

const Layout = ({ children }) => {
    return (
        <div className='w-screen h-screen flex flex-col bg-white dark:bg-black'>
            <Nav />
            <div className='flex flex-row w-full h-full'>
                <Sidebar />
                <div className='flex w-full h-full'>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Layout;
