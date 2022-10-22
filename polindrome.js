//Inputs
let s = "A man, a plan, a canal: Panama"
//let s = "race a car"
//let s = " "


const palindrome= (s)=>{
// usamos una expresion regular para identificar los caraxteres que no son parte del ABC..
let expeRegular=/[\W_]/g;

// convertimos a mayúsculas y obtenemos su codigo ASCII
let asciiCode = s.toUpperCase();

//identificar y reemplazar caracteres que no son parte del Abecedario
let onlyCaracters=asciiCode.replace(expeRegular,'')

//convertimos en array cada caracter para guardar el String de derecha a izquierda y usamos Join para elimnar las comas
let stringReverse=onlyCaracters.split('').reverse().join('');

if(onlyCaracters==stringReverse)
{
return true
   //document.write("aqui: "+ stringReverse + "si es palindrome.");   
}else{
    return false
    //document.write(stringReverse, "no es palindrome.");   
} 
}

// llamamos a la función polindrome
palindrome(s);

document.write("El strinf es  palindrome?: "+palindrome(s));   