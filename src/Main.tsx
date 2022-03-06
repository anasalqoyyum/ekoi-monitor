import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Instruksi from "./components/Instruksi";
import Info from "./components/Info";
import Monitor from "./components/Monitor";
import KoiBaru from "./components/articles/KoiBaru";
import MengurasAir from "./components/articles/MengurasAir";
import AirKolamBerbusa from "./components/articles/AirKolamBerbusa";
import KarantinaKoi from "./components/articles/KarantinaKoi";
import OverFeeding from "./components/articles/OverFeeding";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="intruksi" element={<Instruksi />} />
        <Route path="articles" element={<Info />} />
        <Route path="articles/koi-baru" element={<KoiBaru />} />
        <Route path="articles/menguras-air-kolam" element={<MengurasAir />} />
        <Route path="articles/air-kolam-berbusa" element={<AirKolamBerbusa />} />
        <Route path="articles/karantina-koi" element={<KarantinaKoi />} />
        <Route path="articles/over-feeding" element={<OverFeeding />} />
        <Route path="monitor" element={<Monitor />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>PAGE NOT FOUND</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
