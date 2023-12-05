# I will provide here some description how my project state are working or handle .

## at first (courseData, setCourseData) state are use for handle the all data from this project

### Question one : Add at least three project features?

#### feature one : Add the project to the cart while ensuring there are no duplicate entries.

#### feature two : Calculate the total cost of all the courses and display the shopping cart.

#### feature three : This project has a 20-hour time limit, and if a user adds 20-hour courses, they won't be able to add any more items to their cart.

### Question two : Discuss how you managed the state in your assignment project.

#### Answer : i have use total five state for manage my project. courseData, title, credit, price, hoursLeft

##### 1. courseData: This state manages the JSON data retrieved by the `useEffect` when fetching information.

##### 2. Title: This state is utilized to retrieve the title for my front page and manage the prevention of duplicate entries.

##### 3. Credit: 3. The `Credit` state serves the purpose of both overseeing credit card details and calculating the cumulative credit hours. Additionally, it enforces the preset limit.

##### 4 . price : This state is responsible for managing prices and computing the total price for display on the front page.

##### 5. hoursLeft : This state is utilized to manage the remaining hours for the user after they have selected their course credits, providing information about the remaining available credit.
