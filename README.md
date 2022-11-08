# Assignment-3
The Frontend Application is the Assignment 3 of the Nano Degress Program.

# Page of the app
The Web Application has three pages: Product List, Cart and Confirmation <br/>
**Product List** <br/>
The Product List page is the main page of the application, it has following functions:
- List of all products with their information  (name, price, description)
- Allow user to select the quantity of the item
- User can add items to the cart and receive notification

**Cart** <br/>
When users finish with selecting products, users can click on Cart to see what user has selected. The Cart page has following functions: 
- User can see items added to the cart
- User can change quantity of the each product
- If quantity of a product decreased to zero, it is removed from cart
- User can empty the cart
- User can see the total price for all items in the cart
- User can see the total item in the cart
- Users can enter payment information (Name, Shipping Address)
- Users can confirm the payment information and items in the cart 

**Confirmation** <br/>
After users view the cart, user can confirm buying the products selected. The Cart page has following functions:
- Users gets a confirmation of the order
- Cart is emptied after order is made
- User can go back to the Product List page

# Run the App
To lauch the app, please install of dependencies and run the command `ng serve --port 4200` then navigating to `http://localhost:4200/` to access the application.
