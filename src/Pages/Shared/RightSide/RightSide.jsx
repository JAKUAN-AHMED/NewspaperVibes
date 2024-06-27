import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';
const RightSide = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login With</h2>
        <button className="flex btn btn-outline w-full">
          <FaGoogle className="mr-2 items-center"></FaGoogle>
          Google
        </button>
        <button className="flex btn btn-outline w-full">
          <FaGithub className="mr-2 items-center"></FaGithub>
          Github
        </button>
      </div>
      {/* find us on */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Find Us On</h2>
        <div className="border rounded p-8">
          <a href="" className="p-4 flex items-center border rouded-t-lg">
            <FaFacebook className="mr-2"></FaFacebook>
            <span>Facebook</span>
          </a>
          <a href="" className="p-4 flex items-center border-x">
            <FaTwitter className="mr-2"></FaTwitter>
            <span>Twitter</span>
          </a>
          <a href="" className="p-4 flex items-center border rouded-b-lg">
            <FaInstagram className="mr-2"></FaInstagram>
            <span>Instagram</span>
          </a>
        </div>
      </div>
      {/*  Q ZONE */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Q-Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSide;
