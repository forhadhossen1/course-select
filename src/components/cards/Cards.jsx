/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Bookmark from "../bookmark/Bookmark";

const Cards = () => {

    const [allCourse, setAllCourse] = useState([]);

    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, [])



    return (
        <div className=" py-8 md:flex">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-2/3">
                {
                    allCourse.map(course => (
                        <div key={course.id} className="card card-compact bg-base-100 shadow-xl">
                            <figure><img className="p-3 h-64 w-96" src={course.img} alt="title image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{course.course_title}</h2>
                                <p className="text-xl">{course.course_description}</p>
                                <div className="flex justify-between text-xl font-medium py-5">
                                    <p><i className="fa-solid fa-dollar-sign"></i> Price : {course.price} $</p>
                                    <p><i className="fa-solid fa-book-open"></i> Credit : {course.course_hours} hrs</p>
                                </div>
                                <div className="card-actions">
                                    <button className="btn btn-primary w-full">select</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <Bookmark></Bookmark>
            </div>
        </div>
    );
};

export default Cards;