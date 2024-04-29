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

### Generate token

```
node app.js `{payloadType}` `{No. of payload}` `{UserId}`

payloadType - createDocs
No. of payload - No: of request want to generate
UserId - Test userid from db
```