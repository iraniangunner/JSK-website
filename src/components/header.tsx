import TopNav from "./navbar/top-nav";
import Navbar from "./navbar/navbar";

export default function Header() {
  return (
    <header className="relative flex flex-col justify-between w-full">
      <TopNav />
      <Navbar />
    </header>
  );
}
