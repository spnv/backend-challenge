# backend-challenge

this is an API which use for the following challenge

Programming Challenge :
Please write one RESTful API that allows the client-side to retreive the list of products by category and the number of products 
that will be returned as JSON format. If there is no matched category, it should return an error.

---

API

Retreive the list of products by category and the number of products that will be returned as JSON format.

URL:
/products/[category]

Method:
GET

URL Params:
required
category=[alphanumeric] : category which want to be pick up

Success Response:
Code: 200 
Content: {"lists":[{"catagory":"Drink","item":"Water"},{"catagory":"Drink","item":"Beer"}],"count":2,"message":"success"}

Error Response:
Code: 500
Content: {"lists":[],"count":0,"message":"Not match"}

Power by NodeJS + React
