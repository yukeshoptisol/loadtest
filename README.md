### Prerequisites

Install Node JS
Install jq
For windows 
```
chaco install jq
```

```
1. Create one folder `datas` where you can keep all the csv files which are going to upload to server.
```

### Installing

Install Dependency

```
npm install
```

### Generate Payload

```
node app.js `{payloadType}` `{No. of payload}` `{UserId}`

payloadType - createDocs
No. of payload - No: of request want to generate
UserId - Test userid from db
```

### Cleanup

```
node .\services\cleanup.js
```

### Sample ENV
Create .env file
```
MONGO_URI=mongodb://127.0.0.1:27017/pih
DB=pih
```