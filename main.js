// //Задание 1 - ое
// var a = 1, b = 1, c, d; // В этой строке происходит объявление переменных

// c = ++a; alert(c);           // a = 2, c = 2; ++a(префиксный оператор) => прибавлем 1 сразу и отправляем на печать результат
// d = b++; alert(d);           // d = 1; b = 2; b++(постфиксный оператор) => сначала печатаем, потом прибавляем 1
// c = (2+ ++a); alert(c);      // c = 5, a = 3; ++a(префиксный оператор) => прибавляем 1 сразу и отправляем на печать
// d = (2+ b++); alert(d);      // d = 4; b = 3;  b++ постфиксный оператор => сначала выводим на экран потом прибавляем 1 к d.
// alert(a);                    // a = 3; Результат выполнения предыдущих операций 
// alert(b);                    // b = 3; Результат выполнения предыдущих операций

// //Задание 2 - ое
// var a = 2; // присваиваем a значение 2
// var x = 1 + (a *= 2); // Выполняем последовательно, начиная со скобок (2 * 2 = 4), 1 + 4 = 5 => a = 4, x = 5; 




//Задание 3- е
// let a = -10;
// let b = 3;

// if (a >= 0 && b >= 0) {
//     document.write(a - b);
// } else if (a < 0 && b < 0){
//     document.write(a * b);
// } else {
//     document.write(a + b);
// }

//Альтернатиное 3- е задание 
// var a = parseInt(prompt('Ввести а:'));
// var b = parseInt(prompt('Ввести b:'));

// if (a >= 0 && b >= 0) {
//     document.write(a - b);
// } else if (a < 0 && b < 0){
//     document.write(a * b);
// } else {
//     document.write(a + b);
// }


// Задание 4 -ое 

// let a = 7;
// switch (a) {
//     case 0:
//         document.write("0");
//     case 1:
//         document.write("1");
//     case 2:
//         document.write("2");
//     case 3:
//         document.write("3");
//     case 4:
//         document.write("4");
//     case 5:
//         document.write("5");
//     case 6:
//         document.write("6");
//     case 7:
//         document.write("7");
//     case 8:
//         document.write("8");
//     case 9:
//         document.write("9");
//     case 10:
//         document.write("10");
//     case 11:
//         document.write("11");
//     case 12:
//         document.write("12");
//     case 13:
//         document.write("13");
//     case 14:
//         document.write("14");
//     case 15:
//         document.write("15");
//         break
//     default:
//         document.write("Что - то не из отрезка от 0 до 15");
//     } 



    //Задание 5-ое
    // const a = 3;
    // const b = 4;

    // function result(a, b) {
    //     return a + b; 
    // }
    // function result(a, b) {
    //     return a - b; 
    // }
    // function result(a, b) {
    //     return a * b; 
    // }
    // function result(a, b) {
    //     return a / b; 
    // }



    // Задание 6-ое
    // function mathOperation(arg1, arg2, operation) {
    //     switch(operation){
    //         case 'операция сложения':
    //             return arg1 + arg2;
    //             break
    //         case 'операция вычитания':
    //             return arg1 - arg2;
    //             break
    //         case 'операция умножения':
    //              return arg1 * arg2;
    //             break
    //         case 'операция деления':
    //             return arg1 / arg2;
    //             break
    //     }
    // }

    

    //Задание 7 - ое
    // null - тип данных
    // 0 - число 
    // null == 0; false;
    // null > 0; false;
    // null > = 0; true; понятия не имею почему так 



    // //Задание 8 -ое 
    // const power = (val, pow) => {
    //     if (pow != 1) {
    //         return val * power(val, pow - 1);
    //     } else if (pow <= 0) {
    //         alert("Введите число большее или равное 1");
    //     } else {
    //         return val;
    //     }
    // } 