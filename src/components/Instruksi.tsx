import Header from "./Header";
import handPhone from "../assets/images/hand-and-handphone.svg";
import bigCheck from "../assets/images/big-check-mark.png";
import "../styles/Intruksi.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NavigationBar from "./NavigationBar";

const Intruksi = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(Object);
  const [solution, setSolution] = useState([]);

  useEffect(() => {
    const url = "https://sgp1.blynk.cloud/external/api/get?token=dFVEeAn8MTGVCtL4IxlWwbqwfYe0HFjt&v0&v1&v2&v3";
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    createSolution();
  }, [solution]);

  const dataset = [
    {
      min_normal: 6.5, // ph.  Sources: koiart.net/2018/05/17/parameter-air-ideal-kolam-koi/
      max_normal: 7.5,
    },
    {
      min_normal: 20, // suhu.  Sources: koiart.net/2018/05/17/parameter-air-ideal-kolam-koi/
      max_normal: 26,
    },
    {
      min_normal: 50, // tds.  Sources: koiart.net/2018/05/17/parameter-air-ideal-kolam-koi/
      max_normal: 180,
    },
    {
      min_normal: 0, // ntu
      max_normal: 250,
    },
  ];

  const list_solusi = [
    // kurang | lebih
    [
      "Taburkan garam, backing soda, batu kapur, karang jahe(pilih salah satu atau beberapa saja)",
      "Taburkan tawas, daun ketapan, asam klorida, batang pepaya",
    ], //ph
    ["Buka penutup kolam, gunakan heater(pemanas air)", "Nyalakan pompa"], //suhu
    ["[kurang]", "[lebih]"], //tds
    ["", "Ganti air kolam, gunakan claykoi(obat penjernih kolam)"], //turby
  ];
  const arrayData = [data.v0, data.v1, data.v2, data.v3];

  const createSolution = () => {
    let solusi = [] as any;
    for (let i = 0; i <= 3; i++) {
      if (arrayData[i] < dataset[i].min_normal) {
        solusi[solusi.length] = list_solusi[i][0];
      } else if (arrayData[i] > dataset[i].max_normal) {
        solusi[solusi.length] = list_solusi[i][1];
      }
    }
    setSolution(solusi);
  };

  return (
    <>
      <Header />
      <div className="top h-[90vh]">
        <div className="rounded-[30px] bg-white mx-8 my-5 p-7 display-one">
          <img className="aspect-square mt-10 intruksi-hand" src={handPhone} />
          <ul className="todo-list my-10">
            {solution.map((x) => (
              <>
                <img className="checklist-image aspect-square m-1 mr-3" src={bigCheck} />
                <li>{x}</li>
              </>
            ))}
          </ul>
          <button className="bg-[#FF9E44] px-6 py-3 content-center laksanakan" onClick={() => navigate("/monitor")}>
            Laksanakan!
          </button>
        </div>
      </div>
      <NavigationBar />
    </>
  );
};

export default Intruksi;
