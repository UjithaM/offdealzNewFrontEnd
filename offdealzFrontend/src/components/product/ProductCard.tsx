// src/components/Card.tsx
import React from 'react';

interface CardProps {
    image: string;
    title: string;
    price: string;
    onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, price, onButtonClick }) => {
    return (
        <div className="max-w-xs w-full rounded overflow-hidden shadow-lg m-4 transform transition-transform duration-500 hover:scale-105">
            <img className="w-full" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{price}</p>
            </div>
            <div className="px-6 py-4">
                <button
                    onClick={onButtonClick}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Card;
