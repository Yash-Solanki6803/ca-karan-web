function NewsLetterSection() {
  return (
    <section className="flex section-padding py-14 h-[30vh] bg-transparent text-gray-800  relative">
      <div
        className="z-10 flex gap-28
      "
      >
        <h2 className="text-4xl font-bold  font-montserrat  tracking-widest  w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odit
          repellendus laborum
        </h2>
        <div className="w-1/2 h-full px-10   flex flex-col gap-10">
          <h3 className="text-4xl font-montserrat font-semibold  text-center">
            Please enter your email address
          </h3>
          <div className="flex w-full rounded-full shadow-2xl ">
            <input
              className="w-full rounded-l-full focus-visible:outline-none px-6 text-lg border focus-visible:border-gray-400"
              type="text"
            />
            <button className="bg-cyan-900 text-white px-6 py-4 rounded-r-full  font-montserrat font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className=" absolute   left-0 w-full h-full bottom-0 flex flex-row">
        <div className="w-full h-full  bg-gradient-to-r from-white to-gray-300"></div>
        {/* <div className="w-1/2 h-full  bg-gray-100"></div> */}
      </div>
    </section>
  );
}

export default NewsLetterSection;
