"use client";
import TopNav from "./top-nav";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="relative flex flex-col justify-between w-full">
      <TopNav />
      <Navbar />
    </header>
  );
}
