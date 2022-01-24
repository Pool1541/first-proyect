
function setResult(value) {
    document.getElementById("campo").value = value;
}

function getResult(){
    return(document.getElementById("campo").value);
}

function add(key){
    let result = getResult();
    if(result != "0" || isNaN(key)){
        setResult(result + key);
    } else {
        setResult(key);
    }
}

function calc() {
    let result = eval(getResult());
    setResult(result);
}

function back() {
   let valor = document.getElementById("campo").value;
   valor = valor.slice(0,-1);
   setResult(valor);
}

const dlte = () =>{
    document.getElementById("campo").value = null;
}