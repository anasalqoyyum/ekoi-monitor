import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "../styles/Monitor.css";
import NavigationBar from "./NavigationBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Chart, Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Monitor = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(Object);

  useEffect(() => {
    const url = "https://sgp1.blynk.cloud/external/api/get?token=dFVEeAn8MTGVCtL4IxlWwbqwfYe0HFjt&v0&v1&v2&v3";
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  const toIntruksi = () => {
    navigate("/intruksi");
  };

  const checkData = (datatype: any, val: any) => {
    let dataReq;
    const requirement = [
      {
        no: 0,
        min_normal: 6.5, // ph.  Sources: koiart.net/2018/05/17/parameter-air-ideal-kolam-koi/
        max_normal: 7.5,
      },
      {
        no: 1,
        min_normal: 20, // suhu.  Sources: koiart.net/2018/05/17/parameter-air-ideal-kolam-koi/
        max_normal: 26,
      },
      {
        no: 2,
        min_normal: 50, // tds.  Sources: koiart.net/2018/05/17/parameter-air-ideal-kolam-koi/
        max_normal: 180,
      },
      {
        no: 3,
        min_normal: 0, // ntu
        max_normal: 25,
      },
    ];
    switch (datatype) {
      case "ph":
        dataReq = requirement[0];
        break;
      case "suhu":
        dataReq = requirement[1];
        break;
      case "tds":
        dataReq = requirement[2];
        break;
      case "kekeruhan":
        dataReq = requirement[3];
        break;
    }
    if (!dataReq) return;
    if (val < dataReq["min_normal"] || val > dataReq["max_normal"]) {
      return "Kadar " + datatype + " dalam keadaan abnormal, lakukan langkah lanjutan untuk memperbaiki keadaan!";
    } else {
      return "Kadar " + datatype + " dalam keadaan normal, usahakan menjaga kondisi air kolam tetap stabil.";
    }
  };

  const createDoughnutData = (label: any, dataNow: any, dataMax: any) => {
    return {
      labels: [label],
      datasets: [
        {
          label: `${label} count`,
          data: [dataNow, dataMax - dataNow],
          backgroundColor: ["rgb(255,158,60)", "rgb(255,204,152)"],
          hoverOffset: 4,
        },
      ],
    };
  };

  const createGraphData = (label: any, dataGraph: any) => {
    const labels = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
    return {
      labels: labels,
      datasets: [
        {
          label: label,
          backgroundColor: "hsl(252, 82.9%, 67.8%)",
          borderColor: "hsl(252, 82.9%, 67.8%)",
          data: dataGraph,
        },
      ],
    };
  };

  const dataPH = createDoughnutData("pH", data.v0, 14);
  const dataCelc = createDoughnutData("celcius", data.v1, 55);
  const dataTds = createDoughnutData("ppm", data.v2, 500);
  const dataPpm = createDoughnutData("ntu", data.v3, 20);

  const graphDataPH = createGraphData("Derajat Keasaman (pH)", [5, 7, 6, 6, 8, 7, 7]);
  const graphDataCelc = createGraphData("Suhu (celcius)", [23, 22, 24, 23, 23, 26, 24]);
  const graphDataTds = createGraphData("Partikel Zat Terlarut (ppm)", [148, 157, 158, 147, 166, 170, 177]);
  const graphDataPpm = createGraphData("Kekeruhan (ntu) ", [180, 177, 198, 177, 200, 190, 187]);

  return (
    <>
      <Header />
      <div className="top h-full pb-12">
        <div className="title bg-white mx-8 my-5 p-4 text-lg text-center">
          <p>Realtime Data</p>
        </div>

        <div className="rounded-[30px] bg-white mx-8 my-5 p-7 display-one">
          <h4>Kadar keasaman (pH)</h4>
          <div className="my-4 shadow-lg rounded-lg overflow-hidden p-10">
            <Doughnut data={dataPH} />
          </div>
          <h4 className="mb-4" id="states0">
            {checkData("ph", data.v0)}
          </h4>
          <button className="bg-[#FF9E44] px-6 py-3 content-center langkah-lanjutan" onClick={toIntruksi}>
            Langkah lanjutan
          </button>
        </div>
        <div className="rounded-[30px] bg-white mx-8 my-5 p-7 display-two">
          <h4>Temperature (Celcius)</h4>
          <div className="my-4 shadow-lg rounded-lg overflow-hidden p-10">
            <Doughnut data={dataCelc} />
          </div>
          <h4 className="mb-4" id="states1">
            {checkData("suhu", data.v1)}
          </h4>
          <button className="bg-[#FF9E44] px-6 py-3 content-center langkah-lanjutan mt-1" onClick={toIntruksi}>
            Langkah lanjutan
          </button>
        </div>
        <div className="rounded-[30px] bg-white mx-8 my-5 p-7 display-three">
          <h4>Partikel zat terlarut (TDS)</h4>
          <div className="my-4 shadow-lg rounded-lg overflow-hidden p-10">
            <Doughnut data={dataTds} />
          </div>
          <h4 className="mb-4" id="states2">
            {checkData("tds", data.v2)}
          </h4>
          <button className="bg-[#FF9E44] px-6 py-3 content-center langkah-lanjutan mt-1" onClick={toIntruksi}>
            Langkah lanjutan
          </button>
        </div>
        <div className="rounded-[30px] bg-white mx-8 my-5 p-7 display-four">
          <h4>Kekeruhan (ppm)</h4>
          <div className="my-4 shadow-lg rounded-lg overflow-hidden p-10">
            <Doughnut data={dataPpm} />
          </div>
          <h4 className="mb-4" id="states3">
            {checkData("kekeruhan", data.v3)}
          </h4>
          <button className="bg-[#FF9E44] px-6 py-3 content-center langkah-lanjutan mt-1" onClick={toIntruksi}>
            Langkah lanjutan
          </button>
        </div>
        <div className="title bg-white mx-8 my-5 p-4 text-center text-lg">
          <p>Grafik Data</p>
        </div>

        <div className="rounded-[30px] bg-white mx-8 my-5 p-7">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <div className="py-4 px-5 bg-gray-50">
              <h4>Derajat keasaman (pH)</h4>
            </div>
            <div className="p-8">
              <Chart data={graphDataPH} type={"line"} />
            </div>
          </div>
        </div>

        <div className="rounded-[30px] bg-white mx-8 my-5 p-7">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <div className="py-4 px-5 bg-gray-50">
              <h4>Suhu (celcius)</h4>
            </div>
            <div className="p-8">
              <Chart data={graphDataCelc} type={"line"} />
            </div>
          </div>
        </div>

        <div className="rounded-[30px] bg-white mx-8 my-5 p-7">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <div className="py-4 px-5 bg-gray-50">
              <h4>Partikel zat terlarut (ppm)</h4>
            </div>
            <div className="p-8">
              <Chart data={graphDataPpm} type={"line"} />
            </div>
          </div>
        </div>

        <div className="rounded-[30px] bg-white mx-8 my-5 p-7">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <div className="py-4 px-5 bg-gray-50">
              <h4>Kekeruhan (ntu)</h4>
            </div>
            <div className="p-8">
              <Chart data={graphDataTds} type={"line"} />
            </div>
          </div>
        </div>
      </div>
      <NavigationBar />
    </>
  );
};

export default Monitor;
