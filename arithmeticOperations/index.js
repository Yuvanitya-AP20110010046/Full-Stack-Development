const add = document.getElementById('add');
const sub = document.getElementById('sub'); 
const mul = document.getElementById('mul');
const div = document.getElementById('div');
const result = document.getElementById('result');

add.addEventListener('click', () => {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    result.innerHTML = num1 + num2;
}
);
sub.addEventListener('click', () => {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    result.innerHTML = num1 - num2;

}
);

mul.addEventListener('click', () => {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    result.innerHTML = num1 * num2;
}
);
div.addEventListener('click', () => {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    result.innerHTML = num1 / num2;
}
);
mod.addEventListener('click', () => {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    result.innerHTML = num1 % num2;
}
);