import Link from "next/link";
function index() {
  return (
    <header className="w-full section-padding py-8 bg-white border-b border-gray-800 flex justify-between items-center">
      <h1 className="text-4xl font-bold  text-cyan-800 hover:text-cyan-900 text-shadow-sm shadow-gray-200 cursor-pointer">
        <Link href="/">CA Karan Solanki</Link>
      </h1>
      <nav>
        <ul className="flex justify-center space-x-10 text-xl font-semibold">
          <li className="border-b border-transparent hover:border-cyan-800 transition-all duration-300">
            <Link href="/" className="text-gray-800 hover:text-cyan-800">
              Home
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-cyan-800 transition-all duration-300">
            <Link href="/about" className="text-gray-800 hover:text-cyan-800">
              About
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-cyan-800 transition-all duration-300">
            <Link
              href="/services"
              className="text-gray-800 hover:text-cyan-800"
            >
              Services
            </Link>
          </li>
          <li className="border-b border-transparent hover:border-cyan-800 transition-all duration-300">
            <Link href="#contact" className="text-gray-800 hover:text-cyan-800">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default index;
