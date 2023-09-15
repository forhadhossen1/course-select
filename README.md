
# Ans : 1

* Course Progress Tracking.
* Interactive Course Content.
* User Notifications and Reminders.


# Ans : 2

In my assignment code manage discuss:

useState for AllCourse:
I have a state variable allCourse, initialized as an empty array, to store the list of all available courses. It is updated with the fetched data from the JSON file using setAllCourse in the useEffect.
;

useState for SelectedCourse:
Another state variable, selectedCourse, is used to keep track of the courses that the user has selected. It starts as an empty array and is updated when a user clicks the "select" button using setSelectedCourse.

useState for TotalHours and Remaining:
totalHours and remaining are two state variables that are initialized to 0. They represent the total credit hours of the selected courses and the remaining credit hours available to the user, respectively. These states are updated within the handleRegistration function when a user selects or deselects a course.

I have a constant variable remainingTime that is not managed as state but rather as a constant. This variable represents the maximum allowed credit hours.

Updating State within handleRegistration:
In the handleRegistration function, you manage state by using setTotalHours, setRemaining, and setSelectedCourse to update the relevant state variables based on user actions (selecting or deselecting a course).

setSelectedCourse([...selectedCourse, course]);
Overall, state management in my assignment is done using React's useState hook, with state variables for the list of all courses, selected courses, total credit hours, and remaining credit hours. These state variables are updated as the user interacts with the application, ensuring that the UI reflects the current state of the user's course selections.