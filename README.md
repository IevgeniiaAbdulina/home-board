<h1 align="center">Greenhouse Project</h1>

<div align="center">
  Project created for self-use project.
</div>

<div align="center">
  <h3>
    <a href="#">
      App Demo
    </a>
  </h3>
</div>

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
<!-- - [Features](#features) -->
- [Contact](#contact)

## Overview

<img src="#" width="600px">

This project uses:

- [OpenWeather API](https://openweathermap.org/)

## Built With

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.
- [Bootstrap v5.0](https://getbootstrap.com)

## Project structure

<details>
<summary>Screens</summary>

- Login & Registration
- Dashboard
- Dashboard customization screen
- History
- Event logs screen
</details>

<details>
<summary>Login & Registration</summary>

Optional screen for now and can be implemented as last feature.
Generally, it should add new user with provided email. Verification also can be done through email.

Features:

- login
- registration
- verification
</details>

<details>
<summary>Dashboard</summary>

Main screen after completed login. Should show current data from sensors and urgent events (errors, for example).

Features:

- showing sensors data
- showing last [n] events
- showing short history of sensors reading
</details>

<details>
<summary>Dashboard customization screen</summary>

Aka dashboard settings. User should be able to configure which sensors should be active and what kind of data do they read: name of units('%' for humidity, for example), measurement type (for humidity it can be 'Humidity').

Features:

- add & remove sensor
- enable & disable sensor
- configure measurement type
</details>

<details>
<summary>History</summary>

Screen where all most resent readings are shown in one place. Each history item can be represented as plot. Also would be nice to have some date picker which allows to show history of each day. There is also a need to show history for last day, week, month, year. Such history can be made from average daily data. For example, if user select to show history for last week, data is read as 7 readings represented as average daily data. for month 30 such readings, etc

Features:

- show list of last readings
- show list of readings for specified day
- show simplified (average) history for exact period
- clear history
</details>

<details>
<summary>Event logs screen</summary>

The place where all events are shown, it should be possible to show all events. Such list should be filterable by event serenity level, like info, debug, warning, error.

Features:

- show list of events
- show list of events filtered by type
- clear history
</details>

## Contact

Project created with:

- GitHub [@IevgeniiaAbdulina](https://github.com/IevgeniiaAbdulina)
- GitHub [@fizarun](https://github.com/fizarum)
