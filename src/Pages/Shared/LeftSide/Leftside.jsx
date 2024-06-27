import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftside = () => {
    const [Categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
      <div className="space-y-4">
        <h2 className="text-3xl">All Caterogy</h2>
        {
            Categories.map(category=><Link
                className="block text-xl  font-semibold pl-3 border" 
                key={category.id} 
                to={`/category/${category.id}`}
                >{category.name}</Link>)
        }
      </div>
    );
};

export default Leftside;