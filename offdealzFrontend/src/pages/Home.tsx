// src/pages/Home.tsx
import NavBar from "../components/layout/Header";
import MainSlideBanner from "../components/commom/MainSlideBanner";
import Card from "../components/product/ProductCard";

const Home = () => {
    const handleButtonClick = () => {
        alert('Item added to cart');
    };
    return (
        <>
            <NavBar/>
            <MainSlideBanner/>
            <div className="flex flex-wrap justify-center max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto py-4">
                <Card
                    image="https://via.placeholder.com/150"
                    title="Sample Product"
                    price="$19.99"
                    onButtonClick={handleButtonClick}
                />
                <Card
                    image="https://via.placeholder.com/150"
                    title="Another Product"
                    price="$29.99"
                    onButtonClick={handleButtonClick}
                />
                <Card
                    image="https://via.placeholder.com/150"
                    title="Another Product"
                    price="$29.99"
                    onButtonClick={handleButtonClick}
                />
            </div>
        </>
    );
}

export default Home;
