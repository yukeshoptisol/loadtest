const payloadType = process.argv[2];
const NO_OF_PAYLOADS = process.argv[3];
const USERID = process.argv[3];

if(payloadType === 'createDocs') {
    require('./controller/createDocs').generate(NO_OF_PAYLOADS, USERID)
}


