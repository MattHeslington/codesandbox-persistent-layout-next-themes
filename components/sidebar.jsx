import ThemeButton from 'components/theme-button'

const sidebar = () => {
    return (
        <div className='flex flex-col items-start justify-start space-y-4 w-64 border-r border-gray-200 dark:border-gray-500 h-full'>
            <div>
                <span className='text-black dark:text-white'>Sample item 1</span>
            </div>
            <div>
                <span className='text-black dark:text-white'>Sample item 1</span>
            </div>
            <div>
                <span className='text-black dark:text-white'>Sample item 2</span>
            </div>
            <ThemeButton />
        </div>
    )
};

export default sidebar;
