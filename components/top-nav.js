import { HiOutlineLogin } from "react-icons/hi";
import { Button } from "@material-tailwind/react";

export default function TopNav() {

  return (
    <div className="sticky top-0 grid grid-cols-3 py-4 bg-white">
      <div className="flex justify-center items-center py-2 gap-4">
        <Button
          size="md"
          variant="text"
          className="lg:flex items-center justify-between text-md"
        >
          <span>ورود</span>
          <HiOutlineLogin size={25} />
        </Button>
        <button>انگلیسی</button>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
