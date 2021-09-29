# Boot Drive Thru

## Intro

** Platform to provide direct to boot service for customer and shop owner**

## why we need this service?

- wouldn't it be nice when you shopping, you don't need parking and you can just drive thru?
- Covid changed our way of shopping. contactless shopping , high scalability
- Easy for small shop owers to publish their items online adding boot drive thru service.
- Boot drive thru provides Contactless shopping for customers

## Technologies Used

##Frontend

- Reactjs
- Tailwind / CSS / CSS module

##Backend

- Firebase realtime database
- cloudinary photo upload API

## To do Features

##Common Features
_[x] navigation structure
_[x] setup login popup and login with firebase google , email/password for demo

[x] page not found error page

##More To do:
[] mobile friendly
[] refactoring and useMemo()

_[] intergrate paypal api -> customer can pay when submit order  
_[] email alert to customer and seller when status changed

_[] shop search / search by tag
_[] add more detail in order form (phone number, comment)
\_[] seller can change date/time for pick up
-[] Direct message with seller and buyer

-Buyer account view
-Shop list / order form / cart
_[x] show shop list  
_[x] show shop order form  
_[x] add product on cart  
_[x] search product by name/brand
_[x] submit form -> add to firebase database
_[x] order form validation error  
_[x] order form validation error toast msg
_[x] submit success toast
_Buyer profile
_[x] get data from profile
_[x] profile
_[x] profile edit + data store in firebase  
_[x] profile photo edit
_[x] profile change photo  
\*[x] api using Cloudnary

_Buyer order historpy page
_[x] order history page  
_[x] order card -> view product that was purchased -> show product with total price
_[x] link to shop page  
_[x] order stage process bar. order placed -> process -> ready -> picked up
_[x] orders newest top sorting default
_[x] when order is empty , show empty page
_[x] buyer can send notification to seller when order is ready to pick up

*[x] click product -> show product image + description
*CSS -[x] welcome page for seller buyer
_[x] navigation menu
_[x] footer
*[x] heading + github link
*Shop owner account view
_My shop / edit information / add product
*[x] add shop
*[x] trading hour / open close date
*[x] pickup / info edit
*[x] add items/ delte items name/brand/price
*[x] update order status ( process , ready , picked up) connect with customer order page
*[x] change picture of info panel
*[x] change picture of pick up location img
*[x] add product img
*Manage Order from seller
*[x] customer cancel status ( when customer deleted order from their end)
*[x] profile picture of customer on manage order , show email
*[x] pagination order page for buyer and seller
*[x] upload product img -> firebase upload url
*[x] order created time / date show on order history
*Buyer account fixed issue
*[x] when order is deleted it will show error -> add dependency "order" pagination useEffect for re calculation page number -> while wait to *calculate pagination it needs to have when order[key] is available to avoid error page
*[x] updateArriveStatus fixed issue (not updating backend properly)
*[x] shops list set min height + shop desc not showing
*[x] click product will show picture and desciption of product
*Seller account fixed issue
*[x] my shop / shop list card edit css width/height to show constant cards
*[x] direct url to /myshop /manageorder show error page -> on app.jsx added path for "/myshop", "/manageorder", "/myshop/:id"
*[x] hashtag register for seller and show shop list card
_[x] limit word for info text -> overflow hidden -> show ...
_Account login for demo version
_[x] hello@boot.drive.thru // hello1234
\*deployment
