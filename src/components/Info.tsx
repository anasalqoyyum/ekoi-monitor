import Header from "./Header";
import "../styles/Info.css";
import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";

const Info = () => {
  return (
    <>
      <Header />
      <div className="top h-[90vh]">
        <div className="bg-white rounded-[2px] m-1 p-2 flex">
          <div className="images aspect-square m-2 pr-2 border-r-2 border-[#FF9E44]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
              <path
                d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
                        2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
              ></path>
            </svg>
          </div>
          <div className="article">
            <a href="/articles/koi-baru">
              <h3>Koi Baru</h3>
            </a>
            <p>Admin - 06 Februari 2022</p>
          </div>
        </div>

        <div className="bg-white rounded-[2px] m-1 p-2 flex">
          <div className="images aspect-square m-2 pr-2 border-r-2 border-[#FF9E44]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
              <path
                d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
                        2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
              ></path>
            </svg>
          </div>
          <div className="article">
            <a href="/articles/karantina-koi">
              <h3>Karantina Koi</h3>
            </a>
            <p>Admin - 06 Februari 2022</p>
          </div>
        </div>

        <div className="bg-white rounded-[2px] m-1 p-2 flex">
          <div className="images aspect-square m-2 pr-2 border-r-2 border-[#FF9E44]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
              <path
                d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
                        2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
              ></path>
            </svg>
          </div>
          <div className="article">
            <a href="/articles/air-kolam-berbusa">
              <h3>Air Kolam Berbusa</h3>
            </a>
            <p>Admin - 06 Februari 2022</p>
          </div>
        </div>

        <div className="bg-white rounded-[2px] m-1 p-2 flex">
          <div className="images aspect-square m-2 pr-2 border-r-2 border-[#FF9E44]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
              <path
                d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
                        2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
              ></path>
            </svg>
          </div>
          <div className="article">
            <a href="/articles/over-feeding">
              <h3>Over Feeding</h3>
            </a>
            <p>Admin - 06 Februari 2022</p>
          </div>
        </div>

        <div className="bg-white rounded-[2px] m-1 p-2 flex">
          <div className="images aspect-square m-2 pr-2 border-r-2 border-[#FF9E44]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
              <path
                d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
                        2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
              ></path>
            </svg>
          </div>
          <div className="article">
            <a href="/articles/menguras-air-kolam">
              <h3>Menguras Air Kolam</h3>
            </a>
            <p>Admin - 06 Februari 2022</p>
          </div>
        </div>
      </div>
      <NavigationBar />
      <Outlet />
    </>
  );
};

export default Info;
