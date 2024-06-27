import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    const {_id,title,details,image_url}=news;
    return (
      <div className="card bg-base-100 mb-12 shadow-md">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <figure className="px-10 pt-10">
            <img src={image_url} alt="Shoes" className="rounded-xl" />
          </figure>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}
              <Link to={`/news/${_id}`} className="ml-2 text-blue-600 font-bold">
                Read More..
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    );
};

export default NewsCard;