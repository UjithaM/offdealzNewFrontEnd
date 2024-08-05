import Card from "./ProductCard.tsx";

const Product = () => {
    const handleButtonClick = () => {
        alert('Item added to cart');
    };
    return (
        <div className="flex flex-wrap sm:justify-between justify-center max-w-7xl mx-auto py-4 sm:px-6">
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
            <Card
                image="https://via.placeholder.com/150"
                title="Another Product"
                price="$29.99"
                onButtonClick={handleButtonClick}
            />
        </div>
    );
};


export default Product;