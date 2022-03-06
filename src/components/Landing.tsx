import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoTagline from "../assets/images/LogoAndTagline.png";
import "../styles/Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, []);

  return (
    <>
      <img className="landing" src={logoTagline} />
    </>
  );
};

export default Landing;
