import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSide from "../Shared/RightSide/RightSide";
import Navbar from "../Shared/Navbar/Navbar";


const NewsDetails = () => {
    const {id}=useParams();
    const news=useLoaderData();
    const News=news.find(aNews=>aNews._id===id)
    const {image_url,title,details}=News;
    console.log(News);
    return (
      <div>
        <Header></Header>
        <Navbar></Navbar>
        <div className="grid md:grid-cols-4">
          <div className="col-span-3">
            <div className="card bg-base-100  shadow-md gap-4">
              <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <figure className="px-10 pt-10 mb-12 mt-8">
                  <img src={image_url} alt="Shoes" className="rounded-xl" />
                </figure>
                <p>{details}</p>
              </div>
            </div>
          </div>
          <div>
            <RightSide></RightSide>
          </div>
        </div>
      </div>
    );
};

export default NewsDetails;