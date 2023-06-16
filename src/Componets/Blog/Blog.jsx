import { useNavigation } from "react-router-dom";
import faqImg from "../../image/ques.jpg"
import Loading from "../../Loading/Loading";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <section className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8 py-6">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center mt mb-10">
        <div className="flex flex-col gap-6  lg:px-0 w-full lg:w-[50%] mx-auto">
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              <h3 className="uppercase text-red-500">
                What is an access token and refresh token? <br /> How do they
                work and where should we store them on the client side?
              </h3>
            </div>
            <div className="collapse-content">
              <p>
                Access token is a digital credential that authorizes a client to access specific resources or perform actions on a server. A refresh token is used to obtain a new access token after the current one expires. These tokens should be securely stored on the client-side, such as in browser cookies or device key chains, to prevent unauthorized access.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              <h3 className="uppercase text-red-500" >Compare SQL and NoSQL databases?</h3>
            </div>
            <div className="collapse-content">
              <p>
                SQL databases are structured and use structured query language for data storage and retrieval, while NoSQL databases are non-relational and provide flexible schema options. NoSQL databases are better suited for unstructured or rapidly changing data
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              <h3 className="uppercase text-red-500">
                What is express js and
                Next JS?
              </h3>
            </div>
            <div className="collapse-content">
              <p>
                Next.js is a React framework that facilitates server-side rendering (SSR) and static site generation (SSG), offering features like routing and code splitting. Express.js, on the other hand, is a minimalistic web application framework for Node.js, simplifying the development of servers and APIs by handling routing and request/response handling.
              </p>

            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              <h1 className="uppercase text-red-500">What is MongoDB aggregate and how does it work?</h1>
            </div>
            <div className="collapse-content">
              <p>
                MongoDB aggregate is a powerful framework for data aggregation and analysis. It allows you to perform complex operations on MongoDB collections, such as grouping, filtering, and transforming data. It utilizes a pipeline-based approach where data flows through various stages, including matching, projecting, grouping, and sorting, allowing you to perform advanced data manipulations and calculations in a single query.
              </p>

            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] mx-auto">
          <img className="w-full lg:w-[50%] mx-auto" src={faqImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Blog;
