const number=Number(process.argv[3])
const number2=Number(process.argv[4])
const operacao=process.argv[2]


switch(operacao){
 case"add":
 console.log(number+number2)
 break;

 case"subt":
 console.log(number-number2)
 break;

 case"divi":
 console.log(number/number2)
 break;

 case"mult":
 console.log(number*number2)
 break;

}