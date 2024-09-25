// declaration section :
const output = document.getElementById('output');
const result = document.getElementById('result');

// condition section :
function condition1(x) {
    if (output.value === '') {
        output.value = ''
    }
    else {
        output.value += x;
    }
}
function condition2() {
    const val  = output.value;
    try {
        const res = eval(val);
        if (!isFinite(res)) {
            throw "Math Error";  // Handle division by zero
        }
        document.getElementById('result').innerHTML = res;
    } catch (error) {
        document.getElementById('result').style.color = '#d73d3d';
        document.getElementById('result').innerHTML = "Error";  // Show a simple error message
    }
}
/*condition3*/{
    if(result.innerHTML === undefined) {
        result.innerHTML = '';
    }
}
function condition4() {
        if (result.innerHTML === "Error") {
            output.value = '';
            result.style.color = '#0081A7';
        }
}

// button function section :
function function0() {
    output.value += 0;
    condition2();
    condition4()
}

function function1() {
    output.value += 1;
    condition2();
    condition4()
}

function function2() {
    output.value += 2;
    condition2();
    condition4()
}

function function3() {
    output.value += 3;
    condition2();
    condition4()
}

function function4() {
    output.value += 4;
    condition2();
    condition4()
}

function function5() {
    output.value += 5;
    condition2();
    condition4()
}

function function6() {
    output.value += 6;
    condition2();
    condition4()
}

function function7() {
    output.value += 7;
    condition2();
    condition4()
}

function function8() {
    output.value += 8;
    condition2();
    condition4()
}

function function9() {
    output.value += 9;
    condition2();
    condition4()
}


function functionDel() {
    output.value = '';
    result.innerHTML = '';
}
function functionCl() {
    output.value = output.value.slice(0,-1);
    if (output.value !== '') {
        condition2(); // Evaluate the remaining expression
    } else {
        result.innerHTML = ''; // Clear result if output is empty
    }
}
function functionDiv() {
    condition1('/');
    condition2();
}
function functionMul() {
    condition1('*');
    condition2();
}
function functionMin() {
    condition1('-');
    condition2();
}
function functionPl() {
    condition1('+');
    condition2();
}
function functionDeci() {
    if ((output.value === '')) {
        output.value = '0.';
    } else {
        output.value += '.';
    }
    condition2();
}
function functionEq() {
    condition2();
}
function functionOP() {
    output.value += '()';
    condition2();
}
function functionPow() {
    condition1('**');
    condition2();
}