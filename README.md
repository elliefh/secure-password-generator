# secure-password-generator
# Table of Contents

- [secure-password-generator](#secure-password-generator)
- [Table of Contents](#table-of-contents)
  - [General Info](#general-info)
  - [Resources](#resources)
  - [Code Overview](#code-overview)

## General Info 
Created an application that generates a random password based on user-selected criteria. This application runs in the browser and feature dynamically updated HTML and CSS powered by JavaScript. It also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## Resources

This project was created with the help of:
- [Bootstrap](https://getbootstrap.com/)
- [W3 Schools](https://www.w3schools.com/)
- [UW Bootcamp](https://bootcamp.uw.edu)
- Special thanks to Bobbi Tarkany 

## Code Overview
The "generate password" function is executed when the button is clicked on the website. 

The user is presented with a series of prompts to determine password criteria, specifically password lenth (between 8 to 128 characters) and password character types (numerical, uppercase, lowercase, and special characters).

The user's input is validated using if else statements (e.g., filtering out irrelevant inputs like 'pizza'). When all prompts are answered appropriately, a random password that matches user's criteria is generated and displayed on the screen. 
