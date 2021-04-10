const siteIntroBody = "Members of our page get unlimited access to search for publications from all of the district towns in Bulgaria from all users or even create their own publications to find a mate to sport with!";
const welcomeGuestHeading = " Welcome to Activity-Finder!";
const validation = {
    register:{
        usernameLength: "Username must be between 4 and 20 symbols!",
        usernameSymbols: "Username must contain only latin letters or numbers!",
        passwordLength: "Password must be between 6 and 40 symbols!",
        passwordSymbols: "Password must contain only latin letters and/or numbers!",
        passwordsMissMatch: "Password and repeat password fields must match!",
        error: "Please fill the form with valid data!"
    },
    activity:{
        nameOfUser: "User's first and last name field is required and both should start with capital letter followed by lowercase letters and a single space between first and last name!",
        date: "Please select a date",
        descriptionLength: "Description must be between 8 and 200 symbols!",
        descroptionChars: "Description can contain only latin letters, numbers,spaces and '!', '?','-' signs!",
        peopleNeeded: "Please select a number between 1 and 20!",
        phoneNumber: "Phone number must be exactly 10 numbers and should start with '0' !",
        imgUrl: "Please enter a valid url! URL should start with either http:// or https://",
        error: "Please fill the form with valid data!"
    }
};

export {
    siteIntroBody,
    welcomeGuestHeading,
    validation
}