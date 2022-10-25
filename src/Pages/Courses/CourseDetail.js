import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const courseDetails = useLoaderData();
    const { name, image, d, price, id } = courseDetails;
    return (
        <div>
            <div className="d-img card d-img bg-slate-600 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="badge badge-secondary">NEW</div>
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <h2 className="card-title">
                        Price: {price}
                    </h2>
                    <p>{d}</p>
                    <div className="card-actions ">
                        <button className="btn btn-wide btn-primary">Button</button>
                        <Link to={`payment`}>
                            <button className="btn btn-wide btn-secondary">Parses Course</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;