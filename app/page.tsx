"use client";
import Navbar from "../components/navbar";
import TopNav from "../components/top-nav";
import Hero from "../components/hero";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <header
        // style={{ backgroundImage: "url(/Stars.png)" }}
        className="relative flex flex-col justify-between w-full"
      >
        <TopNav />
        <Navbar />
      </header>
      {/* <div className="text-black">Hello</div> */}
      <Hero />
      <Footer />
    </>
  );
}
