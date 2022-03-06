import Header from "./Header";
import handPhone from "../assets/images/hand-and-handphone.svg";
import bigCheck from "../assets/images/big-check-mark.png";
import "../styles/Intruksi.css";
import { useNavigate } from "react-router-dom";

const Intruksi = () => {
  const navigate = useNavigate();
  const solution = "TEST"; // LIST FROM DATA

  return (
    <>
      <Header />
      <div className="top h-[90vh]">
        <div className="rounded-[30px] bg-white mx-8 my-5 p-7 display-one">
          <img className="aspect-square mt-10 intruksi-hand" src={handPhone} />
          <ul className="todo-list my-10">
            <img className="checklist-image aspect-square m-1 mr-3" src={bigCheck} />
            <li>{solution}</li>
          </ul>
          <button className="bg-[#FF9E44] px-6 py-3 content-center laksanakan" onClick={() => navigate("/monitor")}>
            Laksanakan!
          </button>
        </div>
      </div>
    </>
  );
};

export default Intruksi;
