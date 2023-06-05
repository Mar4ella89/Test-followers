# test-tweets
https://mar4ella89.github.io/test-tweets/

TweetsPage
This is a React component representing a page for displaying tweets. 
It fetches tweets from the server and allows users to follow or unfollow other users. 
It uses Redux for state management and React Router for navigation.

Installation

Clone the repository.

Install the required dependencies by running the following command:

npm install

Start the development server:

npm start

Components

The TweetsPage component uses the following components:

Container: A custom container component that wraps the content.
Loader: A component that displays a loading spinner while data is being fetched.
GoitIcon: An icon component.
Navbar: A navigation bar component.
Make sure to import and include these components in your project.

API

The TweetsPage component fetches data from an API using the axios library. Here are the API endpoints used:

Base URL: https://647c9e5dc0bae2880ad0f880.mockapi.io/api/users
/: Fetch all users from the API.
/{id}: Update the followers count for a specific user.
The API functions are defined in the services/user.js module.

Acknowledgements

React

Redux

React Router

Axios
