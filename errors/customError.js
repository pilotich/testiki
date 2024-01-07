class CustomApiErrors extends Error {
    constructor(statusCode, msg) {
      this.statusCode = statusCode;
      this.msg = msg;
    }
  }
  //create method
  const createCustomError = (msg,statusCode) =>{
      return new CustomApiErrors(msg, statusCode)
  }
  
  module.exports = {createCustomError,CustomApiErrors}