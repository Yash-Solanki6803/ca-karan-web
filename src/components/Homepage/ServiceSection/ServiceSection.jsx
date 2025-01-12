import ServiceCard from "./ServiceCard";

function ServiceSection() {
  return (
    <section className="flex section-padding py-20 h-[80vh] bg-white text-gray-800 flex-col relative">
      <div className=" h-full z-10 flex flex-col gap-10 items-center">
        <h2 className="text-7xl font-bold font-montserrat text-center tracking-widest hover:-translate-x-1 hover:-translate-y-1 hover:text-cyan-900 transition-all duration-300 w-fit">
          OUR SERVICES
        </h2>
        <article className=" h-full flex gap-10">
          <ServiceCard
            serviceNumber="01"
            serviceName="Lorem Ipsum"
            serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ServiceCard
            serviceNumber="02"
            serviceName="Lorem Ipsum"
            serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ServiceCard
            serviceNumber="03"
            serviceName="Lorem Ipsum"
            serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ServiceCard
            serviceNumber="04"
            serviceName="Lorem Ipsum"
            serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ServiceCard
            serviceNumber="05"
            serviceName="Lorem Ipsum"
            serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </article>
      </div>
      <div className=" absolute  left-0 w-full h-1/2 bottom-0 flex flex-row">
        <div className="w-1/2 h-full  bg-cyan-800"></div>
        <div className="w-1/2 h-full  bg-cyan-900"></div>
      </div>
    </section>
  );
}

export default ServiceSection;
