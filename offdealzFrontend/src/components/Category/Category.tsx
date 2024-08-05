import CategoryCard from "./CategoryCard.tsx";
import images from "../../assets/constants/images";

const Category = () => {
    return (
        <div className="flex flex-wrap sm:justify-between justify-center max-w-7xl mx-auto py-4 sm:px-6">
            <div className='container'>
                <h1 className="text-4xl font-bold  mb-10">Categories</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 place-items-center">
                    <CategoryCard img={images.Phone} title="Smart Phones"/>
                    <CategoryCard img={images.Laptop} title="Laptop" width="w-[220px]" height="h-[150px]"/>
                    <CategoryCard img={images.Microphone} title="MicroPhones"/>
                    <CategoryCard img={images.Bike} title="Bikes"/>
                    <CategoryCard img={images.Car} title="Cars"/>

                </div>

            </div>
        </div>
    );
};

export default Category;