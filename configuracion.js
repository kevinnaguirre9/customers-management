'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
     SERVER_PORT, 
     SERVER_HOST,
     SERVER_HOST_URL,
     DB_USER,
     DB_HOST,
     DB_NAME,
     DB_PASSWORD,
     DB_PORT
} = process.env;

assert(SERVER_PORT, 'Port is required');
assert(SERVER_HOST, 'Host is required');

module.exports = {
     SERVER_PORT, 
     SERVER_HOST,
     SERVER_HOST_URL,
     DB_USER,
     DB_HOST,
     DB_NAME,
     DB_PASSWORD,
     DB_PORT
}