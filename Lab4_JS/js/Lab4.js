function someFunc(){
    console.log(document.getElementById("txt").value + " " + document.getElementById("txt2").value + " " + document.getElementById("txt3").value);
    }
    document.getElementById("btn").onclick = someFunc;
    