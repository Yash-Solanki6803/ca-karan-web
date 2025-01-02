import React from "react";

function AboutSection() {
  return (
    <section className="flex section-padding py-20 h-[80vh] bg-cyan-950 flex-col">
      <article className=" h-1/3 flex items-start ">
        <div className="flex  items-end w-1/4 font-montserrat">
          <h3 className="text-5xl font-bold text-cyan-500 text-shadow shadow-black">
            WHO
          </h3>
          <h3 className="text-4xl font-bold text-cyan-50 ml-6 ">WE ARE</h3>
        </div>
        <p className="text-lg text-white w-3/4 px-10 font-light">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          quibusdam consequuntur quam odit earum eum architecto autem ullam,
          nostrum minus sint itaque nemo harum officiis voluptates alias,
          placeat, voluptate dolore porro voluptatum? Voluptates magnam quisquam
          libero vero facilis unde doloribus molestias vel non dignissimos. Illo
          iure delectus rerum repellendus eum. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Quos, exercitationem! Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Ullam distinctio sequi eum
          ipsam molestias suscipit temporibus magnam perferendis blanditiis
          amet!
        </p>
      </article>
      <article className=" h-2/3 flex">
        <div className="flex flex-col px-4 pt-10   items-center h-full w-1/4  gap-10">
          <h2 className="text-white font-semibold text-4xl border-l-8 border-green-400 pl-6 font-montserrat">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="font-light text-white text-xl px-10 border-l-2 h-full ml-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla saepe
            nihil sequi earum, est autem id adipisci facere vitae nemo.
          </p>
        </div>
        <div className="flex flex-col px-4 pt-10   items-center h-full w-1/4  gap-10">
          <h2 className="text-white font-semibold text-4xl border-l-8 border-blue-400 pl-6 font-montserrat">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="font-light text-white text-xl px-10 border-l-2 h-full ml-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla saepe
            nihil sequi earum, est autem id adipisci facere vitae nemo.
          </p>
        </div>
        <div className="flex flex-col px-4 pt-10   items-center h-full w-1/4  gap-10">
          <h2 className="text-white font-semibold text-4xl border-l-8 border-green-400 pl-6 font-montserrat">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="font-light text-white text-xl px-10 border-l-2 h-full ml-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla saepe
            nihil sequi earum, est autem id adipisci facere vitae nemo.
          </p>
        </div>
        <div className="flex flex-col px-4 pt-10   items-center h-full w-1/4  gap-10">
          <h2 className="text-white font-semibold text-4xl border-l-8 border-blue-400 pl-6 font-montserrat">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="font-light text-white text-xl px-10 border-l-2 h-full ml-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla saepe
            nihil sequi earum, est autem id adipisci facere vitae nemo.
          </p>
        </div>
      </article>
    </section>
  );
}

export default AboutSection;
