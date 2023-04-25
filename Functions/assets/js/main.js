//Toplama çıxma, toplama, vurma, bölməyə uyğun funksiya
// function number(num1, num2, operator, result) {
//     var num1 = prompt("1-ci ededi daxil edin:");
//     var operator = prompt("operator daxil edin");
//     var num2 = prompt("2-ci ededi daxil edin");
//     var result = 0
//     switch (operator) {
//         case "+":
//             result = (Number(num1) + Number(num2));
//             break;
//         case "-":
//             result = (num1 - num2);
//             break;
//         case "*":
//             result = (num1 * num2);
//             break;
//         case "/":
//             result = (num1 / num2);
//             break;
//     }
//     return result;
// }
// console.log(number());


// ad ve soyad

// var person = {
//     ad: "Sabir",
//     soyad: "Guliyev",
//     ata: "Mehti",
// }
// console.log(person.ad + ' ' + person.soyad + ' ' + person.ata);


// var name = "Sabir Guliyev Mehti";
// var names = name.split(' ');
// console.log("Name = " + names[0]);
// console.log("Surname = " + names[1]);
// console.log("Dad = " + names[2]);



// 1 eded daxil edin.Eger o eded 50den kicikdirse o edede qeder 3 - e bolunen, 50 - 100 araligindadirsa o edede qeder 5e bolunen, 100den boyukdurse o edede qeder 8 e bolunen ededlerin sayini ekrana cixardan bir alqoritm yazin.
function ededler(eded) {
    var count=0;
    for (let i = 1; i < eded; i++) {
        if (eded<50 && i%3==0) {
            count++;
        }
        else if (eded>50 && eded<100 && i%5==0){
            count++;
        }
        else if(eded>100 && i%8==0){
            count++;
        }
    }
    return count;
}
console.log(ededler(prompt()));