import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex mt-4 mb-8 border rounded gap-6 bg-[#F3F3F3]">
      <button  className="btn btn-secondary text-2xl">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-6" to={"/"}>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-6" to={"/"}>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to={"/"}>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
