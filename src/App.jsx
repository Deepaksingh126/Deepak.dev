import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import MainCard from "./components/MainCard";
import Skills from './components/Skills';
import Message from "./components/Message";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import Project from "./components/Projects";


function App() {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    const content = document.getElementById('main-content');
    const greetingDiv = document.getElementById('greeting');
    const preloader = document.getElementById('preloader')


    function startGreetingCycle() {
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
        "Sawubona!"
      ];

      let index = 0;

      setInterval(() => {
        greetingDiv.textContent = greetings[index];
        index = (index + 1) % greetings.length;
      }, 170);
    }

    startGreetingCycle();


    window.addEventListener('load', function () {
      setTimeout(function () {
        setTimeout(() => {
          setIsLoading(false)
        }, 800);

      }, 1800);
    });


  }, []);

  return (
    (isLoading ? <>
      <div id="preloader">
        <div id="greeting"></div>
      </div>
    </> :
      <>

        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainCard />
                <Skills />
                <Message />
              </>
            }
          />
        </Routes >


        <Routes>
          <Route path="/project" element={<Project />} />
        </Routes >

        <Routes>
          <Route path="/blogs" element={<Blogs />} />
        </Routes >

        <Footer />
      </>)
  );
}

export default App;
