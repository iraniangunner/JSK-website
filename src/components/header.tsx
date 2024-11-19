import TopNav from "./navbar/topNav";
import { ScrollNav } from "./navbar/scrollNav";

export default function Header() {
  return (
    <header className="relative flex flex-col justify-between w-full z-20">
      <TopNav />
      <ScrollNav />
    </header>
  );
}
