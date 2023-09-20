let dif_type=5;
console.log(typeof dif_type);
dif_type="Name";
console.log(typeof dif_type);
dif_type=0;
console.log(typeof dif_type);
dif_type=0.23;
console.log(typeof dif_type);
dif_type=1/0;
console.log(typeof dif_type);
dif_type=true;
console.log(typeof dif_type);
dif_type=null;
console.log(typeof dif_type);
//Вычислите площадь четырехугольника А, если его стороны равны 45 мм и 21 мм
let a1;
a1=45;
let b1;
b1=21;
console.log(`площадь прямоугольника ${a1*b1}`);
//Сколько квадратов В со сторонами 5 мм поместятся в четырехугольник А (45мм х 21мм)
let kvadrat;
kvadrat=5*5;
let count;
count=Math.floor(a1*b1/kvadrat);
console.log(`Количество квадратов: ${count}`)
//Сравните а и b
let i=2;
let a=++i;
let b=i++;
console.log(`Результат сравнеия a и b:${a==b}`)
//Сравнение значений
console.log(`Котик > котик: ${"Котик">"котик"}`);
console.log(`Котик > китик:${"Котик">"китик"}`);
console.log(`Кот > котик ${"Кот">"котик"}`);
console.log(`Привет > Пока ${"Привет">"Пока"}`);
console.log(`73 > "53" ${73>53}`);
console.log(`false < 0.54 ${false<0.54}`);
console.log(`true < 0.54 ${true<0.54}`);
console.log(`false < true ${false<true}`);
console.log(`123 < false ${123<false}`);
console.log(`true < "3"${true<"3"}`);
console.log(`3 < 5mm ${3<"5mm"}`);
console.log(`8>"-2" ${8>"-2"}`);
console.log(`34 == "34" ${34=="34"}`);
console.log(`null=undenfined ${null==undefined}`);

//задание 6
let teacherName = "Кудлацкая Марина Федоровна".toLowerCase().split(" ")
let userInput = prompt("имя").toLowerCase().split(" ")

if (teacherName[1]==userInput[0])
    alert("Вы угадали")
else if((teacherName[1]+' '+teacherName[2])==(userInput[0]+' '+userInput[1]))
    alert("вы угадали")
else if(JSON.stringify(teacherName)==JSON.stringify(userInput))
    alert("Вы угадали")
else
    alert("Неверно")
//Задание 7

let examRusian=true;
let examEnglish=false;
let examMath=false;
if(examRusian&& examEnglish&&examMath)
    console.log("Перевод на следующий курс");
else if(examRusian||examEnglish||examMath)
    console.log("Пересдача");
else
    alert("Отчисление");
//Задание 8
a=Number(prompt(" Введите чило a"));
b=Number(prompt("Введите число b"));
let n=Number(prompt("Введите n"));
alert(`a+b=${a+b} \n a-b=${a-b} \n a/b=${a/b} \n a*b=${a*b} \n a^n=${a**n} \n a%b=${a%b} \n квадратный корень из a =${a**0.5}`);
//Задание 9
console.log('9');
console.log(true+true);
console.log(0+"5");
console.log(5+"mm");
console.log(9/Infinity);
console.log(9*"\n9");
console.log(null-1);
console.log("5"-2);
console.log("5px"-3);
console.log(true-3);
console.log(7||0);
//Задание 10
for(let i=1;i<11;i++)
{
    if(i%2==0)
    {
        console.log(i+2);
    }
    else{
        console.log(i+"mm");
    }
}
//Задание 11
let week = ["понедельнику", "вторнику", "среде", "четвергу", "пятнице", "субботе", "воскресенью"];
let choice_week = prompt(`Введите число:`);
alert(`Данная цифра соответствует ${week[choice_week-1]}`);
week=
    {
        1: "понедельнику",
        2: "вторнику",
        3: "среде",
        4: "четвергу",
        5: "пятнице",
        6: "субботе",
        7: "воскресенью"
    }
    alert(week[choice_week])

