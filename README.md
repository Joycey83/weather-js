# Weather App

The Weather Application was created for the Shecodes Plus Project

## Introduction

A simple weather application that displays the current weather and daily forecasts based on geolocation or search.

[View the live project here.](https://weatherjs88.netlify.app/)

My approach for designing this weather application was to create it so that it is not only accessible to view on desktop but it is also mobile responsive. The applicaion is also accessible through a range of different devices.

![page mock up.](./images/weather-mockup.png)

## Features

- User can type in any city/countries in the world to search for a six day forecast
- Shows weather based on your geo location
- Shows animated weather Icons for each day
- Background images changes depending on the weather temperature for example if they city/country the user selected is < 0 a snowing background image will be shown. If the temperature is > 19 a sunny background image will be shown etc.

## Usage

- Visit https://weatherjs88.netlify.app/
- Type a city/country of your choice in the search bar
- Press the "Enter" button to search for the city or click on the search Icon.
- View the six day forecast for that city/country
- Hover over each day to get a better view of the max/min temperatures

# Frameworks & Programs Used

- Google Fonts One: [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono?query=roboto+mono)
- Google Fonts Two: [Poppins](https://fonts.google.com/specimen/Poppins?query=poppins)
- Animated weather Icons: [Meteocons](https://bas.dev/work/meteocons)
- Weather API used: [Openweathermap.org](https://openweathermap.org/api)

# Running Locally

## Live server

1.You will need node.js and npm. You should probably install this globally.

2.run the following command in your terminal:

npm install -g live-server

3.In your project directory issue the command live-server

4.This will automatically launch the default browser. When you make a change to any file, the browser will reload the page - unless it was a CSS file in which case the changes are applied without a reload.

# Deployment

## Deploy a project to Netlify

This site was deployed to Netlify. Plese follow these steps to deploy your site:

One way to get started deploying on Netlify is to use a Deploy to Netlify button to add a site.

1.Select the Deploy to Netlify button.

![netlify button.](/images/deploy-button.png)

You will get directed to the Netlify app to create a new site. You should find the following page, asking you to connect to GitHub.

2.Select Connect to GitHub to authenticate. If you don’t already have a Netlify user account, you will get one as part of this process.

3.Select Save & Deploy. As well as creating a new site on Netlify, this process clones the demo project repository to your GitHub account so you can make your own changes later on.

You will be redirected to the Site overview page where you can check for the deploy in the Production deploys list.

![netlify deployment.](/images/github-2.png)

You can also check that the repository has been cloned properly by selecting GitHub to navigate to your new repository on GitHub.

![netlify deployment2.](/images/github-1.png)

4.Once the deploy has finished building, you should get a production URL where you can access the website.

![netlify production url.](/images/github-3.png)

5.You can choose to customize the URL by changing the site’s name in the Netlify UI at Site settings > Site details > Site information.

# Credit

- Animated weather Icons was taken from [Meteocons](https://bas.dev/work/meteocons) designed by [Basmilius](https://bas.dev/)
