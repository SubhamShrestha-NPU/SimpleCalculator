// declaration section :
const output = document.getElementById('output');
const result = document.getElementById('result');

// Animation and interaction functions
function createRipple(button, event) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.height, rect.width);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function addButtonAnimation(button) {
    button.addEventListener('click', function(e) {
        createRipple(this, e);
        this.classList.add('clicked');
        
        // Add a slight delay to show the click effect
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
    });
    
    // Add hover sound effect simulation with vibration
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
}

function animateNumberEntry(element) {
    element.style.animation = 'numberEntry 0.3s ease-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 300);
}

function animateResult() {
    result.classList.add('flash');
    animateNumberEntry(result);
    setTimeout(() => {
        result.classList.remove('flash');
    }, 800);
}

function animateError() {
    result.classList.add('error');
    setTimeout(() => {
        result.classList.remove('error');
    }, 600);
}

function animateInputChange() {
    animateNumberEntry(output);
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to all buttons
    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button, index) => {
        addButtonAnimation(button);
        // Stagger button animations
        button.style.animationDelay = (index * 0.05) + 's';
    });
});

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
        animateResult(); // Add animation for successful calculation
    } catch (error) {
        document.getElementById('result').style.color = '#d73d3d';
        document.getElementById('result').innerHTML = "Error";  // Show a simple error message
        animateError(); // Add animation for error state
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
            result.classList.remove('error'); // Remove error animation class
        }
}

// button function section :
function function0() {
    output.value += 0;
    animateInputChange();
    condition2();
    condition4()
}

function function1() {
    output.value += 1;
    animateInputChange();
    condition2();
    condition4()
}

function function2() {
    output.value += 2;
    animateInputChange();
    condition2();
    condition4()
}

function function3() {
    output.value += 3;
    animateInputChange();
    condition2();
    condition4()
}

function function4() {
    output.value += 4;
    animateInputChange();
    condition2();
    condition4()
}

function function5() {
    output.value += 5;
    animateInputChange();
    condition2();
    condition4()
}

function function6() {
    output.value += 6;
    animateInputChange();
    condition2();
    condition4()
}

function function7() {
    output.value += 7;
    animateInputChange();
    condition2();
    condition4()
}

function function8() {
    output.value += 8;
    animateInputChange();
    condition2();
    condition4()
}

function function9() {
    output.value += 9;
    animateInputChange();
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