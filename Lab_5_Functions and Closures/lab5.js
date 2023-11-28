function paralel(a) {
    return (b) => {
        return (c) => {
            return a * b * c;
        }
    }
}
console.log(paralel(1)(2)(3));
let VolumWithLenght3=paralel(3);
console.log(VolumWithLenght3(2)(4));
function* moveCharacter()
{   let coord=[0,0];
  let command;
    while(true){
      command=prompt("Enter comman");
      if(command=="left")
      {
        coord[0]-=10;
      }
      else if(command=="right")
      {
        coord[0]+=10;
      }else if(command=="up")
      {
        coord[1]+=10;
      }
      else if(command=="down")
      {
        coord[1]-=10;
      }
      else if(command=="exit")
      {
        break;
      }
      else
      {
        alert("unkown command");
      }
    yield coord;
    }
}
for(let coords of moveCharacter())
{
    alert(coords);
}
// Получение значений переменных и функций из глобального объекта window
for (var prop in window) {
  if (window.hasOwnProperty(prop)) {
    let value = window[prop];
    console.log(prop + ":", value);
  }
}
// function makeCounter()
// {
//   let count=0;
//   return function()
//   {
//     return count++;
//   }
// }
// let counter1=makeCounter();
// let counter2=makeCounter();
// alert(counter1());
// alert(counter1());
// alert(counter2());
// alert(counter1());
