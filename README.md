# Node Gestpay S2S 

This is a simple example repo that shows how to use S2S requests. 

prerequisites: NodeJS (6+)

## Before you run any example

- check that the `shopLogin` is set to yours. 
- set your IPs in [Gestpay backoffice](https://sandbox.gestpay.net/BackOffice/). 
- check that the input data is valid and has sense for you. 

## how to start

1. `npm install`
2. start the desired example directly. For example, `node callPagamS2S-token.js` will perform a request to `callPagamS2S` using a token. 

## Did it work? 

After running any example, you'll see the JSON logged in console. `ErrorCode: '0'` means that the call has been executed successfully. 

## What are you using for Soap Requests 

We're using the library [node-soap](https://github.com/vpulim/node-soap). 

You'll notice that this library supports two types of usage, with callbacks or promises (ending with Async). We've decided to use the Async version for this examples. 

For example, In the async version, to call the `callPagamS2S` we call `callPagamS2SAsync` method. 

