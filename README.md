## Hat-draw

Draw names from a hat to determine who buys for who. Christmas time.


### API
The API will be a collection of Lambda functions exposed via API Gateway with a MongoDB data store.

#### /register
Register with an email address + name
An email consiting of the Name of the 

```javascript
const payload = { email: 'blake.guilloud@gmail.com', name: 'Blake' };

api.post(baseUrl, payload);
```