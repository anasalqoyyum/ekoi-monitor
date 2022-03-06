import mbakLogin from "../assets/images/mbak-mbak-login.svg";
import Header from "./Header";
import "../styles/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e: any) => setUsername(e.target.value);
  const onChangePassword = (e: any) => setPassword(e.target.value);

  const submit = () => {
    if (username === "Ekoi" && password === "lightjaya") {
      navigate("/monitor");
    }
  };

  return (
    <>
      <Header />
      <img className="aspect-square login-image" src={mbakLogin} />
      <form onSubmit={submit} className="text-center pt-4 mb-0 bg-[#FF9E44] rounded-t-[50px] min-h-[57vh]">
        <div className="sambutan m-5 mb-8 pt-2 text-center">
          <p className="text-2xl">Selamat datang!</p>
          <p className="text-base">Silahkan login terlebih dahulu</p>
        </div>
        <input
          type="text"
          name="username"
          className="username-form m-3 py-6 px-9 w-6/7 h-1/10 rounded-[30px] bg-white"
          placeholder="Masukkan username"
          onChange={onChangeUsername}
        />
        <input
          type="password"
          name="password"
          className="password-form m-3 py-6 px-9 w-6/7 h-1/10 rounded-[30px] bg-white"
          placeholder="Masukkan password"
          onChange={onChangePassword}
        />
        <button type="submit" className="m-3 p-4 w-1/2 rounded-[30px] bg-white right-0">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
