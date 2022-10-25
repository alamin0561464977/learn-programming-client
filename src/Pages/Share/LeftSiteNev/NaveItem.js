import React from 'react';
import { useNavigate } from 'react-router-dom';

const NaveItem = ({ course }) => {
    const { name, id, image } = course;
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`course-detail/:${id}`)}>
            <div className="flex items-center mb-4 p-2 duration-300 transform border rounded shadow hover:scale-105 sm:hover:scale-110">
                <div className="mr-2">
                    <img className='w-10 h-10' src={image} alt="" />
                </div>
                <span className="text-gray-50">
                    {name}
                </span>
            </div>
        </div>
    );
};

export default NaveItem;