"use strict";

const _ = require('lodash')
const crypto = require('crypto')
const url = require('node:url')

const getInfoData = ({ fields = [], object = {} }) => {
    return _.pick(object, fields)
}

const createPublicAndPrivateKey = () => {
    return crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        },
    })
}

const fullUrl = (req) => {
    return url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl
    });
}

const getSelectData = (select = []) => {
    return Object.fromEntries(select.map(el => [el, 1]))
}

const getUnSelectData = (select = []) => {
    return Object.fromEntries(select.map(el => [el, 0]))
}


module.exports = {
    getInfoData,
    createPublicAndPrivateKey,
    fullUrl,
    getSelectData,
    getUnSelectData
}