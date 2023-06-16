import gallery1 from "../../../image/gallery1.jpg"
import gallery2 from "../../../image/gallery2.jpg"
import gallery3 from "../../../image/gallery3.jpg"
import gallery4 from "../../../image/gallery4.jpg"
import gallery5 from "../../../image/gallery5.jpg"
import gallery6 from "../../../image/gallery6.jpg"
import gallery7 from "../../../image/gallery7.jpg"
import gallery8 from "../../../image/gallery8.jpg"
import gallery9 from "../../../image/gallery9.jpg"

const Gallery = () => {
  return (
    <section >
      <h1 className="text-red-600  text-center text-3xl md:text-3xl lg:text-4xl font-bold py-8">
        TOYS GALLERY
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto px-4  gap-2">
        <figure className="px-10 pt-10">

          <img src={gallery1} alt="Shoes" className="rounded-xl" />
        </figure>

        <figure className="px-10 pt-10">
          <img src={gallery2} alt="Shoes" className="rounded-xl" />
        </figure>

        <figure className="px-10 pt-10">
          <img src={gallery3} alt="Shoes" className="rounded-xl" />
        </figure>

        <figure className="px-10 pt-10">
          <img src={gallery4} alt="Shoes" className="rounded-xl" />
        </figure>

        <figure className="px-10 pt-10">
          <img src={gallery5} alt="Shoes" className="rounded-xl" />
        </figure>

        <figure className="px-10 pt-10">
          <img src={gallery6} alt="Shoes" className="rounded-xl" />
        </figure>
        <figure className="px-10 pt-10">
          <img src={gallery7} alt="Shoes" className="rounded-xl" />
        </figure>
        <figure className="px-10 pt-10">
          <img src={gallery8} alt="Shoes" className="rounded-xl" />
        </figure>
        <figure className="px-10 pt-10">
          <img src={gallery9} alt="Shoes" className="rounded-xl" />
        </figure>


      </div>

    </section>
  );
};

export default Gallery;
