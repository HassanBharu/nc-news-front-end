1. # NorthCoder News

   This is a social news [website](https://cranky-mccarthy-52f512.netlify.com) serving as the frontend to the NC-Knews [API](https://hassan-nc-news.herokuapp.com/api) 
   for which the git can be found [here](https://github.com/HassanBharu/nc-news).
```
   The Web application allows a user to post new articles to existing topics, with the ability to create a 
   comment on each article, vote on articles and comments, login and logout
  
```
   ### Getting Started

   ### Prerequisites

   It is assumed that VS code (or another appropriate alternative) runs on your machine.

   You also need node (at least v11.0.0) and npm (at least version 6.4.1) installed on your machine.

   ### Installing

   #### Get the code

   Fork the project from git. Then copy the git url and in the appropriate folder on your machine:

   ```
   git clone <url from git>
   ```

   This will create the project on your local machine. Open the project in VS code (or alternative app).

   #### Install dependencies

   Run the following to install body-parser, chai, express, nodemon, knex, mocha, pg & supertest.

   ```
   npm install 
   ```

   Once all required dependencies are installed, you can check the node_modules folder (which should be created now) to see if the folders for each of these libraries exists.

   ## Running the tests

   Coming soon...

   ## Running the app

   To run the app:

   ```
   npm start
   ```

   ## Tech used

   ### Front end

   #### Frameworks

   The front-end was developed using React the styling was done via React Bootstrap combined with css. I considered other frameworks such as semantics but I preferred the styling provided by React Bootstrap.

   #### Testing

   Testing was done with Cypress. Given the limited time, not all of the test cases were incorporated and will be done at a later date.

   ### Back end

   The database holding the article info is Postgres and Express was used to build the server. Supertest, Mocha and Chai were used for testing.

   ### Sprint management

   A Readme was created in order to check off things which needed to be done

   ## Authors

   - Hassan Bharu
   - [git] https://github.com/HassanBharu

