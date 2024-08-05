// src/pages/Home.tsx
import NavBar from "../components/layout/Header";
import MainSlideBanner from "../components/commom/MainSlideBanner";
import Product from "../components/product/Product.tsx";
import Category from "../components/Category/Category.tsx";
import Footer from "../components/layout/Footer.tsx";

const Home = () => {

    return (
        <>
            <NavBar/>
            <MainSlideBanner/>
            <Product/>
            <Category/>
            <Footer/>
        </>
    );
}

export default Home;
