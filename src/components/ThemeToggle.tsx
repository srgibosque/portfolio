import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-row items-center w-full gap-4 md:py-8 md:px-5 outline-1 md:outline-secondary-300 md:dark:outline-secondary-dark-300">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 bg-primary dark:bg-secondary-dark-500 shadow-md dark:shadow-none hover:bg-primary/80 dark:hover:bg-secondary-dark-500/60"
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8.00002 12.4453C10.4508 12.4453 12.4454 10.4508 12.4454 7.99999C12.4454 5.54918 10.4508 3.55466 8.00002 3.55466C5.54921 3.55466 3.55469 5.54918 3.55469 7.99999C3.55469 10.4508 5.54921 12.4453 8.00002 12.4453Z"
              fill="white"
            />
            <path d="M8.52203 0H7.47595V1.77933H8.52203V0Z" fill="white" />
            <path
              d="M2.71272 1.97303L1.97314 2.71292L3.23166 3.97091L3.97124 3.23102L2.71272 1.97303Z"
              fill="white"
            />
            <path
              d="M1.77933 7.47598H0V8.52206H1.77933V7.47598Z"
              fill="white"
            />
            <path
              d="M3.23119 12.0293L1.97302 13.2874L2.7127 14.0271L3.97087 12.7689L3.23119 12.0293Z"
              fill="white"
            />
            <path
              d="M8.52203 14.2207H7.47595V16H8.52203V14.2207Z"
              fill="white"
            />
            <path
              d="M12.7701 12.0288L12.0305 12.7687L13.289 14.0267L14.0286 13.2868L12.7701 12.0288Z"
              fill="white"
            />
            <path d="M16 7.47598H14.2207V8.52206H16V7.47598Z" fill="white" />
            <path
              d="M13.2871 1.97292L12.0289 3.23108L12.7686 3.97076L14.0268 2.7126L13.2871 1.97292Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
          >
            <path
              d="M0.167019 6.3384C0.875817 2.75793 3.73387 0.266116 7.00348 0C5.86026 0.991886 5.01428 2.39504 4.67131 4.06432C3.89392 7.95928 6.24896 11.8059 9.93013 12.6284C11.3477 12.9429 12.7653 12.7736 14 12.2171C12.3766 14.9993 9.19847 16.5476 5.99745 15.8218C1.90472 14.9267 -0.701829 10.6688 0.167019 6.3384Z"
              fill="white"
            />
          </svg>
        )}
      </button>
      <p className="text-sm text-secondary-400 dark:text-secondary-dark-400">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </p>
    </div>
  );
};

export default ThemeToggle;
