import { FaCheck } from "react-icons/fa";
function HeroSection() {
  return (
    <section className="flex section-padding py-10 h-[60vh] cursor-default">
      <div
        className="flex flex-col justify-between items-start
         py-10 pr-20 w-1/2 border-r-2 border-gray-800"
      >
        <div>
          <h2 className="text-5xl font-bold text-gray-800 font-montserrat">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit pariatur placeat .
          </h2>
          <p className="mt-6 text-xl font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
            explicabo.
          </p>
        </div>
        <button className="bg-cyan-900 text-white shadow-md shadow-transparent px-6 py-2 rounded-md hover:bg-cyan-700 hover:shadow-gray-800 transition-all duration-300 font-montserrat">
          Explore Services
        </button>
      </div>
      <div className="flex flex-col  w-1/2 py-10 px-20">
        <ul className="flex flex-col justify-between h-full cursor-default">
          <li className="flex items-center gap-10 group">
            <div className="bg-green-600 p-3 rounded-full shadow-md shadow-transparent group-hover:shadow-gray-700 group-hover:bg-green-700 transition-all duration-300">
              <FaCheck className="text-white" />
            </div>
            <p className="mb-2 text-xl font-semibold">
              Lorem ipsum dolor sit amet
            </p>
          </li>
          <li className="flex items-center gap-10 group">
            <div className="bg-green-600 p-3 rounded-full shadow-md shadow-transparent group-hover:shadow-gray-700 group-hover:bg-green-700 transition-all duration-300">
              <FaCheck className="text-white" />
            </div>
            <p className="mb-2 text-xl font-semibold">
              Lorem ipsum dolor sit amet
            </p>
          </li>
          <li className="flex items-center gap-10 group">
            <div className="bg-green-600 p-3 rounded-full shadow-md shadow-transparent group-hover:shadow-gray-700 group-hover:bg-green-700 transition-all duration-300">
              <FaCheck className="text-white" />
            </div>
            <p className="mb-2 text-xl font-semibold">
              Lorem ipsum dolor sit amet
            </p>
          </li>
          <li className="flex items-center gap-10 group">
            <div className="bg-green-600 p-3 rounded-full shadow-md shadow-transparent group-hover:shadow-gray-700 group-hover:bg-green-700 transition-all duration-300">
              <FaCheck className="text-white" />
            </div>
            <p className="mb-2 text-xl font-semibold">
              Lorem ipsum dolor sit amet
            </p>
          </li>
          <li className="flex items-center gap-10 group">
            <div className="bg-green-600 p-3 rounded-full shadow-md shadow-transparent group-hover:shadow-gray-700 group-hover:bg-green-700 transition-all duration-300">
              <FaCheck className="text-white" />
            </div>
            <p className="mb-2 text-xl font-semibold">
              Lorem ipsum dolor sit amet
            </p>
          </li>
          <li className="flex items-center gap-10 group">
            <div className="bg-green-600 p-3 rounded-full shadow-md shadow-transparent group-hover:shadow-gray-700 group-hover:bg-green-700 transition-all duration-300">
              <FaCheck className="text-white" />
            </div>
            <p className="mb-2 text-xl font-semibold">
              Lorem ipsum dolor sit amet
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default HeroSection;
