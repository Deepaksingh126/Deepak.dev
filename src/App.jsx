import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import MainCard from "./components/MainCard";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import Project from "./components/Projects";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const greetingDiv = document.getElementById("greeting");

    const greetings = [
      "Hi!",
      "Hola!",
      "नमस्ते!",
      "Bonjour!",
      "Hallo!",
      "Olá!",
      "سلام!",
      "Hej!",
      "Ciao!",
      "こんにちは!",
      "你好!",
      "안녕하세요!",
      "Привет!",
      "Selam!",
      "Merhaba!",
      "Shalom!",
      "Sawubona!",
    ];
    let index = 0;

    const greetingInterval = setInterval(() => {
      greetingDiv.textContent = greetings[index];
      index = (index + 1) % greetings.length;
    }, 170);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      clearInterval(greetingInterval);
    }, 3000);

    return () => {
      clearTimeout(timeout);
      clearInterval(greetingInterval);
    };
  }, []);

  return isLoading ? (
    <div id="preloader">
      <div id="greeting"></div>
    </div>
  ) : (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainCard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
