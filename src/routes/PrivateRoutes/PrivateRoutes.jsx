import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/ProviderContext";
import PropTypes from 'prop-types';
const PrivateRoutes = ({children}) => {
    const {User,Loader}=useContext(AuthContext);
    const location=useLocation();
    if(Loader)
        {
            return <span className="loading loading-bars loading-lg"></span>;
        }
    if(User)
    {
        return children;
    }
    return (
        <Navigate state={location.pathname} to={'/login'}>
            
        </Navigate>
    );
};
PrivateRoutes.propTypes={
    children:PropTypes.node
}
export default PrivateRoutes;