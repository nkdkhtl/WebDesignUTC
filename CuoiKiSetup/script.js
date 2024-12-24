const emailReg = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/
const regex = /^[a-zA-Z]+[\w]{0,}$/;
const str = 'paper123'
console.log(regex.test(str), str.match(regex));