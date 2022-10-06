//Array Demonstration

let arr = []
let arr1 = []
for(let count = 0; count<5; count++){
    arr[count] = prompt("Enter the Value  for 1-D Array:")
}
document.write("This is a Single Dimensional Array"+"<br>")
for(let count = 0; count<5; count++)
{
    document.write(`${arr[count]}<br>`)
}
for(var lol = 0; lol<3; lol++){
    arr1[lol] = new Array(3)
}

for(var i = 0;i<3;i++){
    for(var j = 0; j<3;j++){
        arr1[i][j] =  prompt("Enter the Values for 2-D Array: ");
    }
}
document.write("This is a 2-D Array"+"<br>")
for(var i = 0; i<3; i++){
    for(var j = 0;j<3;j++){
        document.write(arr1[i][j]+" ")
    }
    document.write("<br>")
}