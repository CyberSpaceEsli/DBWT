# DBWT 

## ✨ Open Data Portal for Chemnitz
This is a full-stack application built with the MERN-Stack, integrating data from the Chemnitz open data portal to create an interactive map application for accessing educational and social facilities.

## 💽 Initialize Database
Install [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/) and [MongoDB Compass](https://www.mongodb.com/docs/compass/current/install/) from their official websites.

1. Start the MongoDB Service:
- on MacOS:
```
brew services start mongodb/brew/mongodb-community
```

- on Linux:
```
sudo systemctl start mongod
```


2. Open MongoDB Shell
```
mongosh
```

3. Set up Database
```
use open_data_chemnitz
```
4. Create the following collections
```
db.createCollection("schools")
db.createCollection("kindergarden")
db.createCollection("social_child_projects")
db.createCollection("social_teenager_projects")
db.createCollection("profiles")
```
5. Download csv-Files from [Open Data Portal Chmenitz]( https://portal-chemnitz.opendata.arcgis.com/search?tags=bildungfamilie)

6. Start MondoDB Compass GUI and connect to your running database

7. Import the csv-Files to the corresponding collection

## 📌 Project Set Up

#### Fetch Project from GitHub
```
$ git clone https://github.com/CyberSpaceEsli/DBWT.git
$ cd DBWT
```

#### Install backend dependencies
```
$cd backend
$npm install
```

#### Install frontend dependencies
```
$cd client
$npm install
```

## 🚀 Run Application

*  Start Backend
```
npm run thursday
```

*  Start Frontend
```
npm run dev
```

> Check [localhost:5173](http://localhost:5173) for running application.