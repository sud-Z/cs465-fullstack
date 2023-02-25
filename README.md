# cs465-fullstack
CS-465 Full Stack Development with MEAN

# Architecture

In this project we used two types of frontend development, Express HTML for the customer facing page and Angular for the admin page. Express HTML is a template-based system while Angular is a component-based system. Express uses JavaScript while Angular uses TypeScript. Angular was used to build a Single Page application or SPA. This is a page that is dynamically re written for different functions instead of rendering new pages.
</br></br>
The frontend communicates with the backend via an API connected to a MongoDB database. We used a NoSQL database due to its simplicity and flexibility, as well as its speed. Updating schemas and models is much easier using NoSQL when compared to SQL databases because the data is inherently unstructured. 


# Functionality

One of the most important pieces of the puzzle in this project is JSON. JSON stands for JavaScript Object Notation, and it is used to send data between application components. It Is both human and machine readable. When a call is made to the API requesting data in return, it is sent in the form of JSON. The application can then immediately work with this data with no modification. Later in the project, we also used JSON for the admin authorization token. 
Another important piece was reusable UI components. This came in the form of handlebars templates on the client side. This allowed re use of the same snippets of code without needing to copy and paste them around in multiple files. This increases the simplicity of the application while also making it easier to change. Instead of changing the header on every frontend view, you would only need to change the header partial.


# Testing

Before Authorization was added, postman was used for API testing. Postman is a simple way to craft API requests and send them off without modifying code in any way. This made API testing a breeze. For simple API requests, GET requests, one could simply type the API request into the address bar and hit enter. This will display the JSON results of your request on the page. 

# Reflection

Oddly enough, just as this class was ending, I was moved to a new student position at work where I will be working on a remarkably similar application. Because of my experience with Angular in this course, I was able to jump right in and begin making modifications straight away. I even created the whole SQL database from the ground up and helped refactor the existing API to work with it. This course taught me a lot and has been a huge confidence booster for me. I hope that my work on this application will influence the higher ups at my company to hire me on when I graduate. If not, I am now confident that I could learn any web framework now that the basics have been instilled. Before this course, nothing intimidated me more than a web framework, now I understand that it only looks complicated. 
