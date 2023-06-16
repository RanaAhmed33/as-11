import aboutUsImg from "../../../image/aboutusImg.jpg"

const About = () => {
  return (
    <section className="mt-6">
      <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
        <h1 className="text-red-600 text-center text-3xl md:text-3xl lg:text-4xl font-bold py-8">
          ABOUT US

        </h1>
        <div className="hero-content flex-col lg:flex-row" >
          <div className="lg:w-1/2 relative ">
            <h1 className="text-4xl font-bold space-y-3 my-12 lg:mt-0 lg:text-center uppercase text-orange-500">
              The ultimate destination for kids toy shopping delight.
            </h1>

            <p className="text-xl">
              Science and toys form an extraordinary union, merging fun and learning into a captivating experience. Through interactive play, children engage in hands-on experimentation, exploring scientific principles in an engaging and memorable way. Whether constructing intricate models, conducting fascinating experiments, or unraveling the mysteries of nature, toys become catalysts for curiosity and critical thinking. They nurture a deep appreciation for scientific concepts, inspiring the next generation of innovators, problem solvers, and explorers, who will shape our world through their boundless imagination and understanding of the natural world.
            </p>
          </div>
          <div className="lg:w-1/2 space-y-16 p-4">

            <img src={aboutUsImg} className="w-4/4 rounded-lg shadow-2xl" />

            <button className="btn btn-info w-[400px] ">
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
