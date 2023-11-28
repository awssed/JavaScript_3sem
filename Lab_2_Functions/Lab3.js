function basicOperation(operation, value1,value2)
{
    switch(operation)
    {
        case '+':
            return value1+value2;
        case '-':
            return value1-value2;
        case '/':
            return value1/value2;
        case '%':
            return value1%value2;
    }
}

console.log(basicOperation('+',10,5));

function sumCubeN(N)
{
    let result=0;
    for (let i=1;i<=N;i++)
    {
        result+=i^3;
    }
    return result;
}

console.log(sumCubeN(4));

function calcAverage(numbers)
{
    if(numbers.length==0)
    {
        return 0;
    }
    let sum=0;
    for(let i=0;i<numbers.length;i++)
    {
        sum+=numbers[i];
    }
    return sum/numbers.length;
}
console.log(calcAverage([1,2,3,4]));

function reverseString( str)
{
    let reversed=str.split('').reverse().join('');
    let filteredString='';
    let char;
    for(let i=0;i<reversed.length;i++) {
        char = reversed[i];
        if (/^[a-zA-Z,' ']+$/.test(char)) {
            filteredString += char;
        }
    }
    return filteredString;
}

console.log(reverseString("Hello цуworld!"))

function repeatString(n,str)
{
    let result='';
    for(let i=0;i<n;i++)
    {
        result+=str;
    }
    return result;
}
console.log(repeatString(5,"Hello"));

function filterStrings(arr1,arr2)
{
    let arr3=arr1.filter(function (str){
        return !arr2.includes(str);
    })
    return arr3;
}
let arr1 = ['apple', 'banana', 'orange', 'kiwi'];
let arr2 = ['banana', 'kiwi', 'grape'];
let result = filterStrings(arr1, arr2);
console.log(result);