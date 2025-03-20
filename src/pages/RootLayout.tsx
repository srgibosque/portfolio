import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className="md:ml-52">
        <main className="flex justify-center">
          <div className="w-full mx-4 my-3 md:mx-12 md:my-8 xl:max-w-[80rem]">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
