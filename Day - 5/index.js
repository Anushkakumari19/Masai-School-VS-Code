let str = "Hello";
for(let i=0; i < str.length; i++){
    console.log(str[i])
}


check for isPalindrome(string){
    let res = ""
    for(let i=string.lenght; i>=0; i--){
        res = res + string[i]
    }
    if(res === string){
        return "palindrome"
    }else{
        return "not palindrome"
    }
    
}
let out = isPalindrome("masai");
console.log(out)
