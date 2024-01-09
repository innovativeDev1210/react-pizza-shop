# React Pizza Shop

Welcome to the React Pizza Shop repository! This is a web application built using React, Redux, and React Router to enable users to order their favorite pizzas from the comfort of their homes. The app offers various features like menu browsing, cart management, order creation, and order tracking.

# Screenshots
<img src="https://github.com/JoseAlbDR/react-pizza-shop/assets/128265706/3368925b-462b-4eef-81f3-c5c6bccdade2" height="200px" width="300px"/>
<img src="https://github.com/JoseAlbDR/react-pizza-shop/assets/128265706/e288326b-1a21-4902-bb7c-5e7ee1b358fa" height="200px" width="300px"/>
<img src="https://github.com/JoseAlbDR/react-pizza-shop/assets/128265706/8d9a1468-814a-485e-b8a7-0d7d6bc92c58" height="200px" width="300px"/>
<img src="https://github.com/JoseAlbDR/react-pizza-shop/assets/128265706/0dd2b61d-39db-4d00-9c25-66c9eebfd763" height="200px" width="300px"/>
<img src="https://github.com/JoseAlbDR/react-pizza-shop/assets/128265706/b2ababf4-262b-42fc-86a5-086ace15d539" height="200px" width="300px"/>

## Features

- **Menu Browsing:** Browse the delicious pizza menu and choose your favorite items.
- **Cart Management:** Add pizzas to the cart, view cart contents, and remove items if needed.
- **Order Creation:** Create a new pizza order, provide your contact information, and choose delivery priority.
- **Order Tracking:** Track the status of your order and view the estimated delivery time.

## Usage

To use the React Pizza Shop, follow these steps:

1. Clone the repository:

```git clone https://github.com/your-username/react-pizza-shop.git```

2. Change into the project directory:

```cd react-pizza-shop```

3. Install dependencies:

```npm install```

4. Start the development server:

```npm run dev```

5. Ctrl + click in the given url or open your web browser and navigate to it to access the app.

```
VITE v4.4.4  ready in 1063 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

# How to Order Pizza

## Home Page

When you first access the app, you will be greeted with the home page. If you are a new user, you will be prompted to create an account by providing your name. If you are an existing user, your name will be displayed.

## Menu Page

After creating an account or if you are an existing user, you can proceed to the menu page. Here, you can browse the available pizza options. Each pizza will display its name, description, and price.

## Adding Pizzas to Cart

To add a pizza to the cart, simply click the "Add to Cart" button on the pizza card. The pizza will be added to your cart with a default quantity of 1. If the same pizza is already in the cart, its quantity will be increased.

## Viewing Cart

To view your cart, click the "Cart" button in the navigation bar. The cart page will display the pizzas you have added along with their quantities and total prices. From here, you can proceed to order or remove items from the cart.

## Order Creation

Click the "Order Pizzas" button on the cart page to proceed to order creation. You will be asked to provide your contact information, including your name and phone number. You can also choose whether you want to give your order priority. The total price for your order will be displayed.

## Order Tracking

Once you have created an order, you will be redirected to the order tracking page. Here, you can track the status of your order and view the estimated delivery time.

## Redux Slices

### cartSlice.js

This slice manages the state related to the shopping cart. It defines actions to add, delete, increase, and decrease pizza quantities, as well as to clear the cart. The state stores an array of pizza items with their respective quantities.

### userSlice.js

This slice handles the user-related state, including the user's name, geolocation status, position, address, and error messages. It also includes an asynchronous thunk fetchAddress to fetch the user's address based on their geolocation.

## Services

### apiGeocoding.js

This service file provides a function getAddress that fetches the user's address based on their latitude and longitude using the BigDataCloud API. It is used in the fetchAddress thunk of the userSlice.

### apiRestaurant.js

This service file contains functions to interact with the backend API of the pizza restaurant. It includes functions to get the menu, fetch a specific order, create a new order, and update an existing order.

## Store

The store.js file configures the Redux store using the configureStore function from @reduxjs/toolkit. It combines the reducers from the userSlice and cartSlice to create the application store.

## Contributing

We welcome contributions to improve the React Pizza Shop. If you'd like to contribute, please follow the standard GitHub workflow of forking the repository, making changes on a feature branch, and opening a pull request to merge your changes.

