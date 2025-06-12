# Homework

The homework for this week is to finish the class exercises and continue working on the meal sharing app, just like the previous week.

## Meal sharing app continued

Let's create some routing in your `meal-sharing` repo!

### **Adding frontend routes**

The routes for the application are defined below. In the previous homework you've added content to the `Home` component which is linked to the route `/`.
To add a new route, start by creating components to attach to the route in `/frontend/components`, then define the route path in the directory and choose which components to use in the page.
Alternatively, use Material UI to import pre-made components into your application.

| Route         | Description                                                                                                                                                                                                                                                             |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`           | Add a page title and a sub title. Render **some** (not all!) of the meals returned by the API and a link (a button or something out of your creative decision) to see more, which will lead to the `/meals` page. Please add more to this page like footer, menu, logo, etc. You should have the meals part already by having worked on `MealsList` (and `Meal`) component in previous homeworks. |
| `/meals/{id}` | Render the meal with the specific `id`. Add a form to create reservations for the meal.                                                                                                                                                                                 |
| `/meals`      | Render all the meals returned by the API with a link to their respective pages (`meals/3`). This page is very similar to the one in '/' route, except that it lists all meals returned by the API.                                                          |

### **/meals/{id}**

The `/meals/{id}` route should display the meal and have a form for making a reservation for that meal. The form should have `phonenumber`, `name` and `email`. When creating a new reservation with a form, use the `POST /api/reservations` route.

❗ This form should only be shown if the meal does have available reservations!

That means that we need to:

- When the "book seat" button is clicked get the `phonenumber`, `name` and `email` from either the form or the individual inputs;
- Now create a [post request using fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options) with the `phonenumber`, `name` and `email`.
- If the request is successful indicate to the user that the request went well. If it was unsuccessful show an error message. This we could do using `alert`. You could also explore [making a modal](https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc).

### **Reviews**

Create the possibility for a person to leave a review for a meal. The essence is very similar to the reservations - there is a form that submits certain information to the `reviews` endpoint of the API.
Make a choice where and when to display the form - it could follow each meal, it could have a button that shows or hides it, or it could have its own route - your app, your decision!

<br/>

## **Hand in homework**

Need to brush up on the homework hand-in process?<br/>
Check [this resource](https://github.com/HackYourFutureBelgium/Git_2025/blob/main/homework-submission.md) to remember how to hand in the homework correctly!

<br/>
