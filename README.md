---
Table Of Content
- [EMMARKET](#emmarket)
  - [Features](#features)
  - [Installation](#installation)
    - [Run](#run)
    - [Backend \& API](#backend--api)
      - [Backend Installation](#backend-installation)
      - [Backend Run](#backend-run)
  - [Usage](#usage)
    - [POS Page (home page)](#pos-page-home-page)
    - [Products Filteration and Searching](#products-filteration-and-searching)
    - [Change the display way](#change-the-display-way)
      - [Display as Cards](#display-as-cards)
      - [Display as List](#display-as-list)
    - [Carts \& Filterations \& Sorting](#carts--filterations--sorting)
    - [Single Cart Manpluation](#single-cart-manpluation)

---

# EMMARKET
The web application is specifically designed for supermarkets to effectively manage their products and customer carts. It offers a range of features tailored to streamline supermarket operations. Key functionalities of the application include:

1. Product Management: The application allows supermarkets to easily manage their product .inventory, including adding new products, updating product details, and removing products when necessary.

2. Cart Management: Supermarkets can handle multiple customer carts concurrently, enabling efficient management of checkout processes for multiple customers at the same time.

3. Total Amount Calculation: The application provides the ability to calculate the total amount for each customer's cart, considering factors such as product prices, quantities, and any applicable discounts or taxes.

4. Cart Descriptions: Supermarkets can add descriptions to each cart, allowing cashiers or customers to provide additional details or notes for better organization and reference.

By utilizing this web application, supermarkets can streamline their product and cart management processes, enhance customer service, and ensure accurate calculation of order totals for a seamless shopping experience.

## Features
> Product Management
>
> Multi-Cart Management
> 
> Search & Filteration system
> 
> Category Manpluation page
> 
> Unit of measure Management
> 
> Dashbaord for Users
> 
> Authentication System
> 
> User Authorization 
>
> Switch Between Themes 

## Installation

The application built in node environment in react.js. To install the project you can clone it or install it as Zip file. After downloading project, You have to install the dependencies by this command:
```bash
npm i
```
### Run
```bash
npm start
```
### Backend & API 
The system are connected with backend that i build **Without the backend the system fail or even you cant use its own features**. Now lets installing and setup the backed to use the API's. Through this Link 
**[POS-BACKEND](https://github.com/AhmadEleiwa/POS-Backend)**.
The backend also built in node environment with express api. To install the backend you should follow the same steps witch we discover before.

> **NOTE:** The system database is MongoDB and the uri of the database connection is hidden in .env file. To Setup mongodb configuration correctly you have add .env file with line below
>
> MONGOPATH = "mongodb+srv://(username):ixrwZDUrxf6qcTei@cluster0.tubw4as.mongodb.net/(collection name)?retryWrites=true&w=majority"
#### Backend Installation 
```bash
npm i
```
#### Backend Run
```bash
npm start
```

## Usage
After installing and configure our app. The main page once we starting the page at localhost at port 3000 the page run this url [https::/localhost:3000](http://localhost:3000/) will shown as the figure below

<img src='assets/loginpage.png' />

Noway to navigate to any page without login to the page.There's no users yet. excpt only the admin. 
> Note: That once you configure MongoDB the system will not create the admin user. you have to Create one manually.
```ts
interface User{
    username:string;
    password:string;
    admin:boolean;
}
```
### POS Page (home page)
<img src='assets/pospage.png' />
A page for the cashier to manage customer's carts. This includes the ability to create and manage multiple carts and add descriptions to them for additional information. This page can handle these functionlites:

### Products Filteration and Searching 
The search bar and select inputs are utilized to apply filters to the list of products. You can enter search terms in the search bar to find specific products based on their names or other relevant information. The select inputs allow you to choose specific criteria for filtering the products, such as category or unit of measure. By selecting the desired options, you can refine the list and view only the products that meet the specified filter criteria.

<img src='assets/filterproducts.png' />

### Change the display way
Also You can change the display way of products list from Cards to list as shown


#### Display as Cards
<img src='assets/cardshow.png' />

#### Display as List
<img src='assets/listshow.png' />


### Carts & Filterations & Sorting
By clicking on the headers of the tables, you can sort the entire list based on the selected column. The sorting will be applied to organize the data in ascending or descending order. Additionally, you can utilize the search functionality to quickly find specific carts based on their descriptions. Enter relevant keywords in the search field to filter the list and narrow down the results.

<img src='assets/carttabel.png' width='100%' />

### Single Cart Manpluation
After selecting a cart from the list, you will be directed to the following view. In this view, you have the option to modify the description or quantity of individual products within the cart. You can also delete products from the list or add new products by selecting from the available product list. Additionally, each cart has taxes and discounts associated with it. Similar to the cart table, you can apply sorting and filtering options to refine the displayed data.
```ts
interface Cart {
  cartId: string;
  description: string;
  tax: number;
  discount: number;
  products: Product[];
}
```

<img src='assets/singelcart.png' />