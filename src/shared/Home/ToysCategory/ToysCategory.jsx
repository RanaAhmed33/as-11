import { useEffect, useState } from "react";
import ToysDetails from "./ToysDetails";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ToysCategory = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("Math Toys");
  useEffect(() => {
    fetch("https://toy-server-ranaahmed33.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  useEffect(() => {
    fetch(
      `https://toy-server-ranaahmed33.vercel.app/ToysCategory/${category}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  }, [category]);


  const handleCategory = (event) => {
    setCategory(event);
  };
  return (

    <section className="mt-16" >
      <h1 className=" text-red-600 text-center text-3xl md:text-3xl lg:text-4xl font-bold py-10">
        TOYS CATEGORY
      </h1>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Tabs>
            <div className="sm:text-base md:text-lg font-bold bg-[#425ff0] text-white rounded-md ">
              <TabList>



                <Tab onClick={() => handleCategory("Math Toys")}>
                  MATH TOYS
                </Tab>
                <Tab onClick={() => handleCategory("Engineering Toys")}>
                  ENGINEERING TOYS
                </Tab>
                <Tab onClick={() => handleCategory("Science Toys")}>
                  SCIENCE TOYS
                </Tab>
              </TabList>
            </div>

            {/* <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel> */}
          </Tabs>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10"
          data-aos="zoom-in"
        >
          {toys.map((toy) => (
            <ToysDetails key={toy._id} toy={toy}></ToysDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToysCategory;
