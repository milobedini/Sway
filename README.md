# Sway - SEI Project 4

# Overview
Sway is a mindfulness web-app that provides numerous features to help a user achieve their goals. This is a full-stack project which represents my first experience utilising Python and Django on the backend. I chose to undertake our final project individually in order to learn as much as possible over the process. The whole web application was built and delivered over a one week period.

## Deployed -> **[Sway](https://sway-mindfulness.herokuapp.com/)**

For the purpose of ease of access, you may login using the below details to view the fully featured version of Sway:
- Email: githubdemo@email.com
- Password: GithubDemo123

## Code Installation:
Clone or download the repository and run the following within the terminal:
- Setup backend dependencies: pipenv
- Enter shell for project: pipenv shell
- Make migrations: python3 manage.py makemigrations
- Migrate: python3 manage.py migrate
- Load the seed data for each Django app (articles, comments, jwt_auth, meditations, notes) by replacing ‘app’ with the app name: python3 manage.py loaddata app/seeds.json
- NB at this stage you can run python3 manage.py runserver and view the web-app in its static form.
- Initialise the backend server: python3 manage.py runserver
- Move into front-end directory: cd front-end
- Install frontend dependencies: yarn
- Start the frontend server: yarn start

<img width="712" alt="Screenshot 2021-12-28 at 12 01 07" src="https://user-images.githubusercontent.com/89992629/147564313-68ae0ae7-9c23-421b-bb22-b8224bd34129.png">

# The Brief

- Build a full stack application with a React front-end and a Django back-end.
- Use a Python-Django fully functional RESTful API to serve your data from a Postgres database.
- Create a complete web-app, using multiple (one-to-many and many-to-many) relationships and all CRUD routes.
- The finished product should be publicly accessible and deployed.

# Technologies Used

### Back-End
- Django
- Django-heroku
- Django REST Framework
- Psycopg2
- PyJWT
- Python

### Front-End
- Axios
- Bootstrap
- React
- React Router Dom
- Sass

### Development Tools
- Asana (project management)
- Cloudinary (media hosting)
- Git
- Github
- Heroku (deployment)
- Miro (planning)
- Postman
- QuickDBD (ERD)
- VS Code
- Yarn

# Approach

## 1) Planning
Due to my passion within the area, I arrived fairly quickly at the idea of creating a mindfulness web-app. I wanted to deliver all the features that I would want from such an app, namely:
- Meditations - both guided and using a self-timer.
- Notes - so that the user can scribble down any illuminating thoughts.
- Community - a hub for both forum-type threads and admin-posted articles for insight.
- Profile - a page to keep track of your progress, in order to boost motivation.
Sway being completely responsive was also a very high priority so that the user can benefit from the app wherever they are.

### ERD (Entity Relationship Diagram, QuickDBD)
<img width="858" alt="Screenshot 2021-12-28 at 12 08 03" src="https://user-images.githubusercontent.com/89992629/147564777-506863c0-3392-491b-a4ea-4b61f7b1be25.png">

### Feature Wishlist (Miro)
<img width="888" alt="Screenshot 2021-12-28 at 12 09 54" src="https://user-images.githubusercontent.com/89992629/147564918-7b73fb45-002f-4c3a-bb8e-cf2aeb2c5fd7.png">

### Wireframe (Miro)
<img width="1417" alt="Screenshot 2021-12-28 at 12 10 31" src="https://user-images.githubusercontent.com/89992629/147564968-bcce329f-b802-40e5-a508-b693c799ceb1.png">

I used Asana to clearly layout what needed to be achieved within the strict time frame we had, in order that each feature received due attention.
<img width="1908" alt="Screenshot 2021-12-28 at 12 12 32" src="https://user-images.githubusercontent.com/89992629/147565117-d8468d1d-8b00-404a-9618-18d6a5fddcb3.png">

## 2) Back-End
In my first experience using Python and Django as a backend, as well as a SQL database (in the form of PostgreSQL), I created 5 models (apps in Django terminology). These were for the articles, comments, users, meditations and notes. I utilised a custom user model and authentication (using JWT)  rather than solely relying on Django’s pre-built version. A total of 19 RESTful API endpoints were created, which were all tested using Postman during the backend build.

#### Code Snippet - Notes views
<img width="697" alt="Screenshot 2021-12-28 at 12 14 41" src="https://user-images.githubusercontent.com/89992629/147565285-1929424b-b0b6-45d3-9cf5-f8a4f8de8c2e.png">

## 3) Front-End
React was used for the creation of the front-end, including the following hooks: useState, useEffect, useRef and useContext. Axios was used for connecting the front-end requests to the back-end, and react-router-dom for the front-end routing. I decided to not use any package for creating the audio player for the guided meditations in order to challenge myself. The player utilises react hooks only and is fully customisable. Cloudinary was used to store the audio files for the app. Upon completing a meditation, the session is saved to the user’s profile. Creating the meditation timer was also extremely rewarding as it was my first experience with React’s useContext hook, which allowed the user to configure the settings for their meditation. Below is a snippet from the timer components:

#### Code Snippet - Timer component
<img width="486" alt="Screenshot 2021-12-28 at 12 16 40" src="https://user-images.githubusercontent.com/89992629/147565469-4106ba64-12f6-4feb-8972-a64ef2cac584.png">

The notes page was also a rewarding challenge, especially due to being able to read, delete and create a new note all from the same url.

#### Code Snippet - Notes List component
<img width="457" alt="Screenshot 2021-12-28 at 12 17 59" src="https://user-images.githubusercontent.com/89992629/147565583-6288b8ce-d52e-4867-b3b5-db1e418fb6c1.png">

## 4) Styling
As mentioned, the app being fully responsive was crucial from the outset. Bootstrap was utilised in order to neatly create a responsive navbar that became a hamburger menu on appropriate screen sizes. Through using responsive styling methods, barely any additional code was needed to adapt the web-app to mobile. The entire website and menus adapt to whether the user is logged in or not and points them towards doing so. Sass was used for the styling and I decided to style each page to an acceptable standard during the front-end phase, before using a whole day at the end of the project to add the finishing touches.

# Sway - Screenshot Walkthrough

#### Home Page
<img width="966" alt="Screenshot 2021-12-28 at 12 56 53" src="https://user-images.githubusercontent.com/89992629/147568476-f3d2b960-dbb9-4e33-80ad-b5d799ad374a.png">

#### Meditate Page
<img width="963" alt="Screenshot 2021-12-28 at 12 57 43" src="https://user-images.githubusercontent.com/89992629/147568543-bc9bdc50-3d83-4d66-bd70-afb65519b43e.png">

#### Guided Meditations Page
<img width="962" alt="Screenshot 2021-12-28 at 12 58 14" src="https://user-images.githubusercontent.com/89992629/147568577-c2897657-24fa-4b25-a962-5c419f4d14ea.png">

#### Guided Meditation Show Page
<img width="968" alt="Screenshot 2021-12-28 at 12 58 39" src="https://user-images.githubusercontent.com/89992629/147568624-e4f9b178-7654-4fe1-9a95-9d25df95aead.png">

#### Meditation Timer Page
<img width="968" alt="Screenshot 2021-12-28 at 12 58 55" src="https://user-images.githubusercontent.com/89992629/147568664-98f3e520-e14a-480e-a886-4cfa3cab74a7.png">

#### Meditation Timer Settings Page
<img width="967" alt="Screenshot 2021-12-28 at 12 59 08" src="https://user-images.githubusercontent.com/89992629/147568683-4b03b71e-aefb-47c5-97a7-8790a8bd3661.png">

#### Notes Page
<img width="965" alt="Screenshot 2021-12-28 at 12 59 33" src="https://user-images.githubusercontent.com/89992629/147568723-0c54a5f1-4073-4124-b08e-cfaa305b2e38.png">

#### Community Page
<img width="966" alt="Screenshot 2021-12-28 at 12 59 50" src="https://user-images.githubusercontent.com/89992629/147568761-0337180c-a46f-4af7-afa8-83b3ed697687.png">

#### Thread Show Page
<img width="966" alt="Screenshot 2021-12-28 at 13 00 19" src="https://user-images.githubusercontent.com/89992629/147568794-67a05853-e662-48a3-b77e-fa51b6245b02.png">

#### Edit Thread Page
<img width="965" alt="Screenshot 2021-12-28 at 13 00 37" src="https://user-images.githubusercontent.com/89992629/147568833-b53bf919-c1df-4058-9226-39942c3a5f13.png">

#### Profile Page
<img width="966" alt="Screenshot 2021-12-28 at 13 00 58" src="https://user-images.githubusercontent.com/89992629/147568871-a599a603-912f-4309-85c5-99cba6ce3bcb.png">

# Wins & Blockers
### **Wins**
- Complete application that delivers many features across all web devices. 
- Learning and utilising numerous Hooks and building a fully customisable audio player.

### **Blockers**
- Learning the idiosyncrasies of SQL databases and Django initially took some time to embed, whilst some of the Django features such as the admin portal were particularly time saving.

# Bugs
- The favouriting/unfavouriting of a meditation does not always switch the icon as it should.
- When registering, the user is not given a specific error message explaining that the given password is not strong enough.

# Future Improvements
- The ability to edit a note.
- A featured content component within the home page (e.g. the most favourited meditations, most commented on threads).
- Meditation history within the user profile page.
- Profile picture/avatar for each user.

# Key Takeaways
Building Sway was a great way to build my knowledge of Python, as well as of relational databases (SQL). Creating another React front-end further deepened my ability in this area, especially having employed useRef and useContext for the first time. Whilst Django felt a little limiting at times compared to MongoDB/Mongoose, its ability to create a functioning back-end so quickly and efficiently means that I will continue to delve deeper into it.
