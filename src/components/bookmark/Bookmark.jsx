import PropTypes from 'prop-types'
const Bookmark = ({selectedCourse}) => {
    return (
        <div>
            <h1 className="text-3xl">Course Name</h1>
            {
                selectedCourse.map(course => (
                    <li key={course.id}> {course.course_title} </li>
                ))
            }
        </div>
    );
};

Bookmark.propTypes = {
    selectedCourse: PropTypes.array
}

export default Bookmark;