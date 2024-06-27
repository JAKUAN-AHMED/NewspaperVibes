import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Leftside from "../Shared/LeftSide/Leftside";
import Navbar from "../Shared/Navbar/Navbar";
import RightSide from "../Shared/RightSide/RightSide";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard/NewsCard";

const Home = () => {
    const news=useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div >
                    <Leftside></Leftside>
                </div>
                <div className="md:col-span-2 ">
                    {
                        news.map(aNews=><NewsCard 
                            key={aNews._id} 
                            news={aNews}
                            ></NewsCard>)
                    }
                </div>
                <div >
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;