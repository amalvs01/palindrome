
//wap to check  if a number is palindrome   

const test = num => {
  let result = 0
  temp = num
  while (temp > 0) {
    digit = temp % 10
    result = result * 10 + digit
    temp = parseInt(temp/10)
  }
  if(result == num){
      console.log("The number is palindrome")
  }else{
      console.log(" not palindrome")
  }
  console.log(result)
}

test(121);