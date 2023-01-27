<div align="center">
<img
  src="./client/src/Assets/Images/PinkCowIcon2.png"
  alt="Logo"
  title="Logo"
  style="display: margin: 0 auto; max-width: 300px">
<h1>THE MILK STORE</h1>
</div>

## Table of Contents

### [About](#about)
### [Getting Started](#getting_started)
### [Usage](#usage)

---
## About
Introducing the webstore where you can buy the finest glass of milk 🥛
<br><br> In this full stack application users can experience the UI provided by `React` and `Tailwind` on the frontend and backend provided by `Express`
<br><br> The tech stack for this project includes using `Mongoose` on the backend and `MongoDB` as a database which are still not implemented.
<br><br>The application is `Desktop` use only

---
## Getting Started
1. Fork or clone the project. Navigate to the Client and the Server directory each separately and install all dependencies with `npm install` or `npm i`
2. To start the development mode:
   * for the Server run `npm run dev`
   * for the Client run `npm start`
3. If all goes well, the backend will be running on `localhost:8080`✨ and the frontend on `localhost:3000` ✨

---
## Usage
For starters, running `localhost:3000` will take you to the Home page where you can see the main layout.
<br>

 Features you can find on the main page: <br>

[Logo Icon](#logo_icon) / [Milk Types Dropdown](#milk_types_dropdown) / [Cart Icon](#cart_icon) / [Search bar](#search_bar) / [Filter](#filter) 

 Features on other pages: <br>
 [Pagination](#pagination) / [Slider](#slider)
 
<br>
<div align="center">
<img
  src="./_images/HomePage.png"
  alt="Home page"
  title="Home page"
  style="display: margin: 0 auto; max-width: 300px">
</div>

<br>

Clicking on one of the displayed products it will redirect you to a different page with the details for the chosen product. Among the details you can see the name, type and quantity in stock in liters. Below the details lies the [Slider](#slider) which you can use, to choose the amount of liters you want to purchase. When done, pressing the order button will place the quantity of your desired product in the cart.

<br>

<div align="center">
<img
  src="./_images/Single.png"
  alt="Single product"
  title="Single product"
  style="display: margin: 0 auto; max-width: 300px">
</div>

<br>

## Logo Icon
On the navbar first appear the Logo icon which pressed will redirect you to the Home page.

<br>

<div align="center">
<img
  src="./_images/Logo.png"
  alt="Single product"
  title="Single product"
>
</div>

<br>

#### Milk Types Dropdown
Further away on the right side of the navbar you can find the button for  Milk Types dropdown menu. Pressing the button will show all the types of milk which you can choose from. Choosing one of the types will redirect you to a different page where only products from the chosen type will be displayed. Only 9 products will display and for the users convenience the page will be equipped with [Pagination](#Pagination).

<br>

<div align="center">
<img
  src="./_images/Milk Type Dropdown.png"
  alt="Single product"
  title="Single product"
  style="display: margin: 0 auto; max-width: 300px">
</div>

<br>

#### Cart Icon
The Cart icon displays how many products have been chosen for purchase and clicking on it will show a slide menu with all the chosen products (in development)

<br>

<div align="center">
<img
  src="./_images/Cart.png"
  alt="Single product"
  title="Single product"
  style="display: margin: 0 auto; max-width: 300px">
</div>

<br>

#### Search bar
Searching by name is a benefit for reducing the number of all the products displayed on the home page.

<br>

<div align="center">
<img
  src="./_images/Search1.png"
  alt="Single product"
  title="Single product"
  style="display: margin: 0 auto; max-width: 300px">
<img
  src="./_images/Search2.png"
  alt="Single product"
  title="Single product"
  style="display: margin: 0 auto; max-width: 300px">
</div>

<br>

#### Filter 
On the home page you can filter the products by their types as well. Pressing on the filter will display a dropdown check box menu.

<br>

<div align="center">
<img
  src="./_images/Filter.png"
  alt="Single product"
  title="Single product"
  style="display: margin: 0 auto; max-width: 300px">
<img
  src="./_images/OpendFilter.png"
  alt="Single product"
  title="Single product"
  style="display: margin: 0 auto; max-width: 300px">

</div>

<br>

#### Pagination 
The pagination shows the current page and the number of pages in total. A Previous and a next button are included.

<br>

<div align="center">
<img
  src="./_images/Pagination.png"
  alt="Single product"
  title="Single product"
  style="display: margin: 0 auto; max-width: 300px">
</div>

<br>

#### Slider 
Easy to use slider showing you the amount of liter you have chosen in a interesting shaped bubble.

<br>

<div align="center">
<img
  src="./_images/Slider.png"
  alt="Single product"
  title="Single product"
  style="display: margin: 0 auto; max-width: 300px">

</div>