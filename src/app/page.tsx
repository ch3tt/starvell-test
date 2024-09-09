"use client";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GamePage from "./GamePage";

export default function Home() {
  const cleanOpen = () => {
    while (document.querySelector(".select.open")) {
      document.querySelector(".select.open")?.classList.remove("open");
    }
  };
  return (
    <>
      <main onClick={cleanOpen} className="main">
        <Header />
        <div className="page-content">
          <div className="page-content__wrapper">
            <GamePage />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
