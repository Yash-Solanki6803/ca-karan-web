import Link from "next/link";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Socialbar() {
  return (
    <div className=" w-1/3 h-full flex flex-col  py-14 px-4">
      <h2 className="text-cyan-500 text-5xl font-bold text-shadow-lg shadow-gray-950">
        CA KARAN SOLANKI
      </h2>
      <p className="text-white mt-4 text-lg font-thin ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        dolorum!
      </p>

      <div className="flex gap-4 mt-10 ">
        <Link
          href="#"
          className="text-white text-2xl hover:text-cyan-500 transition-all duration-300"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href="#"
          className="text-white text-2xl hover:text-cyan-500 transition-all duration-300"
        >
          <RiInstagramFill />
        </Link>
        <Link
          href="#"
          className="text-white text-2xl hover:text-cyan-500 transition-all duration-300"
        >
          <FaFacebookF />
        </Link>
      </div>
    </div>
  );
}

export default Socialbar;
