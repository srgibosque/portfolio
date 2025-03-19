import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";

const RootLayout = () => {
  return (
    <div>
      <div className="text-primary bg-white dark:text-primary-dark dark:bg-primary">
        <Header />
        <ThemeToggle />
        <div className="md:ml-52">
          <main className="flex justify-center">
            <div className="w-full mx-4 my-3 md:mx-12 md:my-8 xl:max-w-[80rem]">
              <Outlet />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
