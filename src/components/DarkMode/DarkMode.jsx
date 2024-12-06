import { useDarkMode } from 'tailwind-dark-mode';
const DarkMode = () => {
    const [theme, setTheme] = useDarkMode(false);
    useEffect(() => {
        
      }, [theme]);
    return (
        <div className={`min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white`}>
        <button
          className="p-2 mt-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-md"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    );
};

export default DarkMode;