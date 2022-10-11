# E-commerce Back End

## Description
```
An application that utilizes Sequelize, dotenv, Express, JawsDB, MySQL2 to produce connections, routes, and models in the eCommerce Back End Application. It also utilizes express api and sequelize to allow a database to get all, get by id, post/create, put/update, delete/destroy specific data from the database. Using sequelize you are also able to seed the database with javascript rather writing sql queries. The primary functionality of the application starts within the terminal to start the server and further test routes by using the application called Insomnia. Since the application will not be deployed, use Insomnia for testing, it is a must as this is a back-end application.
  ```


## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Important-Links](#Important-Links)
  * [Questions](#questions)


## Installation
  * Ensure you are in your root folder,then open terminal and clone code from github. Then run these in the command terminal:

    * Next, run "npm init " to install packages 
    * MySQL2 Setup - "npm install --save mysql2"
    * Express Setup - "npm i express" 
    * dotenv Setup - "npm i dotenv" 
    * Sequelize Setup - "npm i sequelize" 
    * jawsDB Setup - is Through Heroku, be sure to have a card on your account (you will not be charged). > navigate to the app you created in heroku dashboard, click on it > Click on resources, then go down to search bar for Add-Ons and add JawsDB
    * Be sure to run the above packages in your terminal and include your require statements for your necessary files.
    * Don't forget to create your connections to sequelize using jawsDB

## Usage
  * Firstly, open the terminal 
  * When Models, Associations, and Routes are complete you will need to seed you data with "npm run seed" 
  * Once the data is seeded, start the server with "npm start"
  * The server will run and start in the terminal, when presented with "now listening !", your server has successfully been started
  * Open Insomnia to test routes, you will have to create folders and route links for all routes in Category, Product, Tags.
  * I prefer to test my routes in this order to ensure data is being sync to the right location. All "GET All/Get by ID" routes (Category, Product, Tags respectively), then "POST/PUT" Routes (Category, Tags, Product respectively), finally "DELETE" Routes (Tags, Product, Categorires respectively)
  * When the user is satisfied with their tests, they can exit the terminal using the short-cut on the keyboard : Ctrl + C


![eCommerce Back End GIF](assets/gifs/GET%20Routes%20for%20AllSingle%20ID%20(Categories%2C%20Products%2C%20Tags).gif "GET ALL/GET By ID Routes")
 <br/><br/>
![eCommerce Back End GIF](assets/gifs/POST_PUT%20Routes%20for%20(Categories%2C%20Tags%2C%20Products).gif "POST/PUT Routes")
 <br/><br/>
 ![eCommerce Back End GIF](assets/gifs/DELETE%20Routes%20for%20(Categories%2C%20Tags%2C%20Products).gif "DELETE Routes")
 <br/><br/>
 

## Important Links 

* GitHub Link: https://github.com/MichaelZimm20/eCommerce-back-end

* Video Demonstration Links: 
    * GET ALL/GET By ID Routes: https://drive.google.com/file/d/1ZOR1oooeseRuyiKr5XeXzOjCeYNsvPWL/view?usp=sharing
    * POST/PUT Routes: https://drive.google.com/file/d/1JXPvYd5AmHTfgfzPWeM8qPmaOmO-nA95/view?usp=sharing
    * DELETE Routes: https://drive.google.com/file/d/15zeRoeJLDyn0zkAN1L-2JxLqzbHebcvI/view?usp=sharing


## Questions 
  If you have any questions or concerns, contact:
  * GitHub: [MichaelZimm20](https://github.com/MichaelZimm20)
