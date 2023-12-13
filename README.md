 The application enables users to mark their places of interest or visited locations on the world map, facilitating easy sharing with others. Users can explore new places, gather information, and gain ideas for itineraries and activities
 
## Installation
To self-host the application, one can follow the following steps:  
  
1. Clone the repository using the command `git clone https://github.com/krmh04/GeoConnect.git`  in a directory of your choice using Git Bash or the command prompt. (If Git is not installed, you can install it from [https://git-scm.com/](https://git-scm.com/))

2. Ensure you have Node.js and npm installed (You can install it from [https://nodejs.org/en](https://nodejs.org/en))

3. Open any editor (e.g. Visual Studio Code) and start a new Terminal Window.

4. Install the dependencies required for the client by navigating to the frontend directory and use the command `npm install`

5. Install the dependencies required for the backend by navigating to the server directory and use the command `npm install`  
6.  The web application makes use of a few environmental variables to store the variables and API keys of MongoDB Atlas and Mapbox.

Create a .env file in the frontend directory and enter the variable names: REACT_APP_MAPBOX_TOKEN, JWT_SECRET and its associated values.  
 (Note: The Mapbox token can be accessed after signing up on [https://www.mapbox.com/](https://www.mapbox.com/) . A random JWT_SECRET key 
 can be generated using [https://www.javainuse.com/jwtgenerator](https://www.javainuse.com/jwtgenerator))

Create a .env file in the backend directory and enter the variable names: NODE_ENV, PORT, CORS_ORIGIN, DATABASE_URL, JWT_SECRET and its associated values.  
(Note: The values are NODE_ENV=development, PORT=5000, CORS_ORIGIN=http: //localhost:3000)
The DATABASE_URL value can be entered after creating a free cluster on [https://cloud.mongodb.com](https://cloud.mongodb.com))  
  
7. After creating the two .env files, please start 2 separate two terminal windows and navigate to the frontend and server directories respectively.  
8. Run the command `npm start` to start the client and database server.

 # Credits
This project was made with the invaluable help of the following resources.  
 
 1. https://www.youtube.com/watch?v=5pQsl9u_10M
 2. https://github.com/bslzz/traveldiaries
 3. https://www.youtube.com/watch?v=9oEQvI7K-rA
 4. https://github.com/CodingGarden/travel-log
 5. https://docs.mapbox.com/  
 6. https://react.dev/reference/react
 7. https://www.youtube.com/watch?v=ZxxZ3kpk5tU 
 8. https://www.mongodb.com/docs/atlas/ 

