import TopNav from "./navbar/topNav";
import Navbar from "./navbar/navbar";

export default function Header() {
  return (
    <header className="relative flex flex-col justify-between w-full z-20">
      <TopNav />
      <Navbar />
    </header>
  );
}