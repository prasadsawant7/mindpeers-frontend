import { NavLink, Outlet } from "react-router-dom";
import "../App.css";

export const RootLayout = () => {
  return (
    <div className="dark:bg-dark dark:text-white bg-gray-150 h-screen grid place-items-center">
      <div className="flex justify-between items-center lg:w-[80%] lg:h-[80%]">
        <div className="h-full lg:w-[28%] flex flex-col justify-start items-stretch">
          <div className="p-5 font-semibold text-xl">Menu</div>
          <NavLink
            to="/"
            className="navlink px-5 py-2 hover:bg-mindpeers-sea-green-light hover:border-r-6 hover:border-mindpeers-sea-green-dark"
          >
            Home
          </NavLink>
          <NavLink
            to="sentiment-analysis"
            className="navlink px-5 py-2 hover:bg-mindpeers-sea-green-light hover:border-r-6 hover:border-mindpeers-sea-green-dark"
          >
            Sentiment Analysis
          </NavLink>
          <NavLink
            to="sentiment-analysis-feedback"
            className="navlink px-5 py-2 hover:bg-mindpeers-sea-green-light hover:border-r-6 hover:border-mindpeers-sea-green-dark"
          >
            Sentiment Analysis Feedback
          </NavLink>
          <NavLink
            to="keyword-extraction"
            className="navlink px-5 py-2 hover:bg-mindpeers-sea-green-light hover:border-r-6 hover:border-mindpeers-sea-green-dark"
          >
            Keyword Extraction
          </NavLink>
          <NavLink
            to="keyword-extraction-feedback"
            className="navlink px-5 py-2 hover:bg-mindpeers-sea-green-light hover:border-r-6 hover:border-mindpeers-sea-green-dark"
          >
            Keyword Extraction Feedback
          </NavLink>
        </div>
        <div className="p-5 h-full lg:w-[72%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
