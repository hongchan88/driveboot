# Boot Drive Thru

## Intro

** Platform to provide direct to boot service for customer and shop owner**

## Live Example

To view a live example, **[click here](https://boot-drive-thru.netlify.app)**.

Account login for demo version
hello@boot.drive.thru // hello1234

## What is this project?

- wouldn't it be nice instead of parking and shoping, you can just drive thru and get items you need?
- Covid changed our way of shopping. contactless shopping , high scalability
- Easy for small shop owers to publish their items online using boot drive thru platform.
- Boot drive thru provides Contactless shopping for customers

## Technologies Used

Frontend

- Reactjs
- Tailwind / CSS / CSS module

Backend

- Firebase realtime database
- Cloudinary photo upload API
- Google Login / Email/password Login

Deployment

- Netflify

## More To do:

- mobile friendly responsive
- refactoring and useMemo()
- intergrate paypal api -> customer can pay when submit order
- email alert to customer and seller when status changed
- shop search / search by tag
- add more detail in order form (phone number, comment)
- seller can change date/time for pick up
- Direct message with seller and buyer

## Common Features

✔️ navigation structure\
✔️ setup login popup and login with firebase google , email/password for demo\
✔️ page not found error page\
✔️ welcome page for seller & buyer\
✔️ navigation menu\
✔️ footer\
✔️ heading + github link

## Buyer account features

Shop list / order form / cart

✔️ show shop list\
✔️ show shop order form\
✔️ add product on cart\
✔️ search product by name/brand\
✔️ submit form -> add to firebase database\
✔️ order form validation error\
✔️ order form validation error toast msg\
✔️ submit success toast

Buyer profile

✔️ get data from profile\
✔️ profile\
✔️ profile edit + data store in firebase\
✔️ profile photo edit\
✔️ profile change photo\
✔️ api using Cloudnary

Buyer orders page

✔️ order card -> view product that was purchased -> show product with total price\
✔️ link to shop page\
✔️ order stage process bar. order placed -> process -> ready -> picked up\
✔️ orders newest top sorting default\
✔️ when order is empty , show empty page\
✔️ buyer can send notification to seller when order is ready to pick up

Buyer order page/cart

✔️ click product -> show product image + description

## Seller account features

My shop / edit information / add product

✔️ add shop\
✔️ trading hour / open close date\
✔️ pickup / info edit\
✔️ add items/ delte items name/brand/price\
✔️ update order status ( process , ready , picked up) connect with customer order page\
✔️ change picture of info panel\
✔️ change picture of pick up location img\
✔️ add product img\
✔️ hashtag register for seller and show shop list card

Manage Orders

✔️ customer cancel status ( when customer deleted order from their end)\
✔️ profile picture of customer on manage order , show email\
✔️ pagination order page for buyer and seller\
✔️ upload product img -> firebase upload url\
✔️ order created time / date show on order history

🔧Fixed issues

Buyer issues

✔️ when order is deleted it will show error -> add dependency "order" pagination useEffect for re calculation page number -> while wait to \_calculate pagination it needs to have when order[key] is available to avoid error page\
 ✔️ updateArriveStatus fixed issue (not updating backend properly)\
 ✔️ shops list set min height + shop desc not showing\
 ✔️ click product will show picture and desciption of product\

Seller issues

✔️ my shop / shop list card edit css width/height to show constant cards\
✔️ direct url to /myshop /manageorder show error page -> on app.jsx added path for "/myshop", "/manageorder", "/myshop/:id"\
✔️ limit word for info text -> overflow hidden -> show ...
