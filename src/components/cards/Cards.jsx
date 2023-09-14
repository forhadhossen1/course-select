/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Bookmark from "../bookmark/Bookmark";
import Swal from "sweetalert2";

const Cards = () => {

    const [allCourse, setAllCourse] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [totalHours, setTotalHours] = useState(0);
    const [remaining, setRemaining] = useState(0);

    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, []);

    const remainingTime = 20;

    const handleRegistration = (course) => {
        const isSelected = selectedCourse.find(item => item.id == course.id);

        let hours = course.course_hours;
        if (isSelected) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Already Selected This Course'
              })
        } else {
            selectedCourse.forEach(item => {
                hours = hours + item.course_hours;
            });
            const totalRemaining = remainingTime - hours;
            setTotalHours(hours);
            setRemaining(totalRemaining);

            setSelectedCourse([...selectedCourse, course]);
        }
    };
    // console.log(selectedCourse)



    return (
        <div className=" py-8 md:flex gap-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-2/3 p-2">
                {
                    allCourse.map(course => (
                        <div key={course.id} className="card card-compact bg-gray-300 shadow-xl">
                            <figure><img className="p-3 h-64 w-96" src={course.img} alt="title image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{course.course_title}</h2>
                                <p className="text-xl">{course.course_description}</p>
                                <div className="flex justify-between text-lg py-5">
                                    <p><i className="fa-solid fa-dollar-sign"></i> Price : {course.price} $</p>
                                    <p><i className="fa-solid fa-book-open"></i> Credit : {course.course_hours} hrs</p>
                                </div>

                                <div className="card-actions">
                                    <button onClick={() => handleRegistration(course)} className="btn btn-primary w-full">select</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="md:ml-4 p-2">
                <Bookmark selectedCourse={selectedCourse} totalHours={totalHours} remaining={remaining}></Bookmark>
            </div>

        </div>
    );
};

export default Cards;