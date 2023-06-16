import bannerImg1 from "../../../image/bannerImg1.jpg"
import bannerImg2 from "../../../image/bannerImg2.jpg"
import bannerImg3 from "../../../image/bannerImg3.jpg"
import bannerImg4 from "../../../image/bannerImg4.jpg"

const Banner = () => {
  return (
    <section>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          {" "}
          <img src={bannerImg1} className="w-full object-cover" />
          <div className="absolute flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#210101] to-[rgba(21, 21, 21, 0))] mx-auto w-full">
            <div className="text-white space-y-7 flex flex-col items-center justify-center px-6 md:px-0 md:w-3/4 lg:w-3/6 mx-auto text-center uppercase">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Discovering Science Through Engaging Toy Experiments.
              </h1>
              <p>
                Science and toys intertwine, as hands-on experimentation and play create a dynamic learning experience, igniting curiosity and fostering scientific thinking in children.
              </p>

              <div>
                <button className="btn btn-info">
                  Extra Learn
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-xl text-yellow-500">
              ❮
            </a>
            <a href="#slide2" className="btn btn-xl text-yellow-500">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={bannerImg2} className="w-full object-cover " />
          <div className="absolute flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#210101] to-[rgba(21, 21, 21, 0))] mx-auto w-full">
            <div className="text-white space-y-7 flex flex-col items-center justify-center px-6 md:px-0 md:w-3/4 lg:w-3/6 mx-auto text-center uppercase">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Discovering Science Through Engaging Toy Experiments.
              </h1>
              <p>
                Science and toys intertwine, as hands-on experimentation and play create a dynamic learning experience, igniting curiosity and fostering scientific thinking in children.
              </p>

              <div>
                <button className="btn btn-info">
                  Extra Learn
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-xl text-yellow-500">
              ❮
            </a>
            <a href="#slide3" className="btn btn-xl text-yellow-500">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={bannerImg3} className="w-full object-cover" />
          <div className="absolute flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#210101] to-[rgba(21, 21, 21, 0))] mx-auto w-full">
            <div className="text-white space-y-7 flex flex-col items-center justify-center px-6 md:px-0 md:w-3/4 lg:w-3/6 mx-auto text-center uppercase ">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Discovering Science Through Engaging Toy Experiments.
              </h1>
              <p>
                WScience and toys intertwine, as hands-on experimentation and play create a dynamic learning experience, igniting curiosity and fostering scientific thinking in children.
              </p>

              <div>
                <button className="btn btn-info">
                  Extra Learn
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-xl text-yellow-500 ">
              ❮
            </a>
            <a href="#slide4" className="btn ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={bannerImg4} className="w-full object-cover" />
          <div className="absolute flex items-center justify-center h-full left-0 top-0 bg-gradient-to-r from-[#210101] to-[rgba(21, 21, 21, 0))] mx-auto w-full">
            <div className="text-white space-y-7 flex flex-col items-center justify-center px-6 md:px-0 md:w-3/4 lg:w-3/6 mx-auto text-center upp">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Discovering Science Through Engaging Toy Experiments.
              </h1>
              <p>
                Science and toys intertwine, as hands-on experimentation and play create a dynamic learning experience, igniting curiosity and fostering scientific thinking in children.
              </p>

              <div>
                <button className="btn btn-info">
                  Extra Learn
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-xl text-yellow-500 ">
              ❮
            </a>
            <a href="#slide1" className="btn btn-xl text-yellow-500">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
