![alt text][logo]

[logo]: https://i.ibb.co/7GXdfzK/dark-logo-transparent.png" "Activity-Finder"

# activityFinder MERN
**Activity-finder** is a **SPA** (Single-page application) project dedicated to help people who are new in town and/or don't have friends who like to sport.  
The main goal of the application is to make the life of those who want to stay active easier.  
The project's Back-end is an ExpressJS based **Rest API** server with MongoDB Atlas.  
The Front-end is a **React** client-side rendered, based on [Create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) template, application.

## Technologies used
### Rest API
- [ExpressJS](https://expressjs.com/) - v4.17.1
- [MongoDB](https://www.mongodb.com/) - v3.65.0
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [mongoose](https://mongoosejs.com/) - v5.12.0
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme) - v5.0.1
- [jsonwebtoken](https://jwt.io/) - v8.5.1
- [cookie-parser](https://github.com/expressjs/cookie-parser#readme) - v1.4.5
- [cors](https://github.com/expressjs/cors#readme) - v2.8.5
- [moment](https://momentjs.com/) - v2.29.1
- [nodemon](https://nodemon.io/) - v2.0.7

### Client-side
- [Create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) - v17.0.1 
- [React-router-dom](https://github.com/ReactTraining/react-router#readme) - v5.2.0
- [Styled-components](https://styled-components.com/) - v5.2.1
- [React-hot-toast](https://react-hot-toast.com/) - v1.0.2

## Starting the app
- Clone the repository
- Open it in VSCode or whatever editor you chose
- Open the terminal
- To install all dependencies type:
    > npm install
- When the dependencies are installed type in the terminal:
    > cd server
- Then:
    > npm start
- When the server starts open new terminal and type in:
    > cd client
- Then:
    > npm start

**Now your default browser should open at http://localhost:3000 and you are all set to give it a try!**

## In-app guide

### Guest
- After successfully starting the app you will be directed to the guest home page which has a navigation with **Logo**, "***Login***" and "***Register***" elements
- Clicking on either **Create free account** or **Register** will render the register form
- Clicking on either **here** or **Login** will render the login form
- Clicking on the site logo will render the guest home page
- Clicking on **About** in the footer will render the about page
- Clicking on **Radooy** in the footer will create a new blank page which will be redirected to my github profile

#### Register
- In order to make a **successful registration** the **username** you choose should be **unique** and only consist of **latin letter, numbers or - . _ symbols and should be between 4 and 20 characters long** and the **password** should contain only **latin letters and numbers and should be atleast 6 characters long** and be the **same as repeat password**
- If the values in the input fields **don't match the requirements above**, a notification will appear and a message for every **error** beneath the error target
- After **successful registration** you will be redirected to **Login page**

#### Login
- In order to make a **successful login** you need to type in a **valid username and password**
- If either the **username or password is wrong** a notification will appear saying that one of them is **not valid**
- After **successful login** you will be redirected to **user home page** with a notification "Logged in as ***username***"

### User
The navigation items appart from **Logo** will be set to "***Filter***", "***Create an activity***", "***My profile***" and "***Logout***" and won't change until the user logs out.  
The footer is remaining the same as the **Guest** footer.

#### Home page
- A heading will appear saying "Avalable activities for you, ***username***"
- The user home page will render a **preview** (including only sport, city, date and applied) of every one of **all the available activities** (which the all the users created including your own)
- If there are **no activities** a message will be shown saying that **there are no available activities**
- Clicking on the logo will render the ***Home Page*** **(user)**
- Clicking on **any of the available activities** will lead to a **Details page** for the chosen activity
- Clicking on the ***Filter*** button will lead to a **Filter page**
- Clicking on the ***Create an activity*** will lead to a **Create page**
- Clicking on ***My profile*** will lead to a **Profile page**
- Clicking on ***Logout*** will result in a **logout** and user will be **redirected to Login page (guest)**

#### Create page
- A form for creating an activity and a **Back** button is rendered
- Clicking on the **Back** button will bring you back to the previous page **clicked**
- In order for an activity to be created it should pass the following requirements:
    - **First and last name** of user should contain only **latin letters and a single space between first and last name**
    - **About the activity** description should be between **8 and 200 chars** and can contain **" ,!.?"** symbols
    - **Date** ***must*** be selected from the calendar
    - **People needed** must be in the interval between **1 and 20**
    - **Sport** and **City** must be selected from the lists, otherwise the **default values** are those on top of the lists - for sport - **Football**, for city - **Sofia**
    - **Phone number** must be exactly **10 characters** long and should start with **0**
    - **Image URL** must start with ***http:// or https://*** 
    - **All** fields are **required**
- If some of the requirements are **not pleased** notification is shown and **error messages** are applied beneath the inputs with errors
- After **successfully creating** an activity a notification is shown saying that the activity is created and user will be **redirected** to user **Home page**

#### Details page
- Renders the **full information** for the activity with a **Back** button
- If the user is the **creator** of the activity additional buttons **Edit** and **Delete** are rendered
- If the user is **not the creator** of the activity and if there are **still people needed**, button **Apply** or **Unapply** is rendered, depending on **if** the user is already **applied** for the activity or **not**. If there **isn't any space left** (the count of people needed is equal to the count of people applied) for the current unapplied user, the only button that's rendered is **Back** button
- Clicking the ***Edit*** button will lead to **Edit** page
- Clicking on ***Delete*** button will result in **deleting** the current activity. After that a notification appears saying that the **deletion was successful** and the user is **redirected to the Home page**
- Clicking on the **Back** button will bring you back to the previous page **clicked**
- Clicking on the **Apply** button will apply the user in the activity's people applied array and will **increase the count of people applied by 1**. A notification will be shown saying that the user has **applied successfully**. The **Unapply** button is being shown
- Clicking on **Unapply** will **decrease the count of people applied by 1** and a message will be shown saying that the user has **unapplied successfully**. The **Apply** button is shown

#### Edit page
- Renders the **Activity form** with submit button **edit** and a **Back** button
- Clicking on the **Back** button will redirect the user to the **Home page**
- The **Form** will be rendered with the **values of the edited activity** (the *date* won't be rendered, but a message displays the old date for the user, and it's value is kept in the *state* so if the user doesnt pick a new date , the *old one will persist*). The **sport and city** values are set to the **default** ones (city - **"Sofia"**, sport - **"Football"**)
- The requirements are the same as the **Create page**
- On **successful edit** a notification is shown saying that the **update was successful** and the user is **redirected** to the **Details page** of the activity

#### Filter page
- Renders the **Filter** navigation which has default buttons - **City**, **Sports** and **Back** (*note that the users navigation header is not removed*)
- Clicking the **Back** button will return the user to the **Home page**
- Clicking the **City** or **Sports** button will trigger only the **select field** of either the cities or sports **options** to choose from, a **Reset** button and a **Go** button.
- Clicking on the **Go** button will **render** all the activities from the **selected option** (the selected **city or sport**) in **preview** (including only sport, city, date and applied). If there **aren't any activities** a message will show saying that there are currently no activities found by the given criteria
- Clicking **on an activity** will redirect to it's **Details page**
- Clicking on the **Reset** button will **reset** the state of the page

#### My profile page
- Renders a navigation which has three buttons - **My activities**, **Activities applied** and **Back**
- Clicking on **My activities** will render a heading and the **user's activities** in **preview** (including only sport, city, date and applied) which he has created. If the user **hasn't created any activities** a message will appear saying that **there are currently no activities to show**. Clicking on an **activity** (if there is any) will redirect the user to the **Details page** of the activity
- Clicking on **Activities applied** will render a heading and the **user's activities applied to** in **preview** (including only sport, city, date and applied). If the user **hasn't applied to any** a message will appear saying that **there are currently no activities to show**. Clicking on an **activity** (if there is any) will redirect the user to the **Details page** of the activity
- Clicking on the **Back** button will redirect the user to the user **Home page**
