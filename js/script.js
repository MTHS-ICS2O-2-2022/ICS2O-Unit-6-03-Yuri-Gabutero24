// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

const weather = async(URLAddress) => {
  try {
    const response = await fetch(URLAddress)
    const json = await response.json()
    json.main.temp = Math.round(json.main.temp - 273.15)
    document.getElementById("the-weather").innerHTML = "The weather today is: " + json.main.temp + "°C"
    document.getElementById("icon").innerHTML = "<img src='http://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png'>"
  } catch (error) {
    console.log(error)
  }
}

weather(
  "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
)
