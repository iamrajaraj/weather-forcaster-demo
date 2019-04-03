# Weather Forecast App

*Application deployed into Heruko cloud and LIVE URL for application demo "https://weather-forecaster-demo.herokuapp.com/"

## Summary

The Weather Forecast app is a single page app that utilizes the OpenWeatherMap API from http://openweathermap.org/api to extract weather data and display a 5 day forecast.  

### Local Deployment, Run and Test Steps

* Do environment step up for Java 1.8 and Maven 3.0.3.
* Open cmd.exe and navigate to application folder. ex, cd ~/weather-forcaster-demo/.
* Execute command "mvn clean install" - this will install all required maven dependency those are added in POM.XML file.
* Execute command "mvn spring-boot:run" this will startup the application into in-build tomcat server.
* Later open the browser and type "http://localhost:8080". Here default port configured in "application.properties" file.
* Application successfully run in browser now.

### Cloud - Hosted details

* Heroku
* URl to access application - https://weather-forecaster-demo.herokuapp.com/

### Languages

* JavaScript/ES6
* HTML5/CSS3
* Java

### Frameworks and Technologies

* J2EE
* SprinBoot
* Bootstrap (v3)
* jQuery

### Building Tool

* Maven 3.0.3 (Java 1.8)

### Third-party APIs

* OpenWeatherMap API

### App features

* Gets the current location weather by user confirmation on location share while page laoding
* Queries and processes OpenWeatherMap API's data into a five day forecast
* Mobile, tablet, and desktop responsive courtesy of Bootstrap features

### To do : Enhancement App features with more time
* Allow user to enter city for weather forecasting.
* UI - look and feel enhancement.
* Add Graphical representation on temperature and wind.
* Add Map based on location.
* Share option to social media/ messenger apps.
* Weather Alert setup option for date and time.


### Challenges

* OpenWeatherMap API returns list of weather forecast for 5 days in 3 hours window, hence to display date wise 3hrs window have handle in loaders.js file 
