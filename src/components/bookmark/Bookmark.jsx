import PropTypes from 'prop-types'
const Bookmark = ({ selectedCourse, totalHours, remaining }) => {
    return (
        <div className='bg-slate-300 rounded-lg p-5 mt-4 md:mt-0' >
            <h1 className="text-xl font-semibold border-b-2 pb-4">Credit Hour Remaining {remaining} hrs</h1>
            <h1 className="text-2xl font-semibold pt-4">Course Name</h1>
            {
                selectedCourse.map(course => (
                    <li className=' p-2 ml-4 list-decimal font-medium' key={course.id}> {course.course_title} </li>
                ))
            }

            <h1 className="text-xl font-medium border-t-2 pt-4 mt-3">Total Credit Hour : {totalHours}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    selectedCourse: PropTypes.array,
    totalHours: PropTypes.number,
    remaining: PropTypes.number

}

export default Bookmark;