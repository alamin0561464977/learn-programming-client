import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';

const CourseDetail = () => {
    const courseDetails = useLoaderData();
    const { name, image, d, price } = courseDetails;

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('pdf-test.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'pdf-test.pdf';
                alink.click();
            })
        })
    }
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
                        <button onClick={onButtonClick} className="btn btn-wide btn-primary">Download PDF <FaDownload className='ml-2 text-black' /> </button>
                        <Link to={`payment`}>
                            <button className="btn btn-wide btn-secondary">Parses Course</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;