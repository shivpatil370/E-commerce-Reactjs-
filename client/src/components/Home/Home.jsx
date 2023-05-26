import Banner from "./Banner/Banner"
import Category from "./Category/Category";
import Products from "../Products/Products";
import SingleProduct from "../SingleProduct/SingleProduct";

import "./Home.scss";
const Home = () => {
    return <div>
        <Banner/>
        <div className="main-content">
            <div className="layout">
                 <Category/>
                 <Products headingText="Popular Products"/>
                 <SingleProduct/>
            </div>
        </div>
    </div>;
};

export default Home;
