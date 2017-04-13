// Define make rules to build app gradually
const operand1 = body.div("operand1").build(function(deps) {
    const operand1_data = new Data(0);

    // Removing outdated view block
    // TODO: add _init flag to Element object
    this.element.innerHTML = "";

    // Init view in operand1 div
    const text_area = document.createElement('textarea');
    text_area.innerHTML = "";

    // Attaching view to operand1 div
    this.element.appendChild(text_area);

    // Let text_area watch for onchange event
    text_area.setAttribute('onchange', function() {
        operand1_data.setValue(text_area.innerHTML);
    });

    return operand1_data;
});

const operator = body.div("operator").build(function(deps) {
    const operator_data = new Data('+');

    this.element.innerHTML = "";

    // Init view in operand1 div
    const text_area = document.createElement('textarea');
    text_area.innerHTML = "";

    // Attaching view to operand1 div
    this.element.appendChild(text_area);

    // Let text_area watch for onchange event
    text_area.setAttribute('onchange', function() {
        operator_data.setValue(text_area.innerHTML);
    });

    return operator_data;
});

const operand2 = body.div("operand2").build(function(deps) {
    const operand2_data = new Data(0);
    this.element.innerHTML = "";

    // Init view in operand1 div
    const text_area = document.createElement('textarea');
    text_area.innerHTML = "";

    // Attaching view to operand1 div
    this.element.appendChild(text_area);

    // Let text_area watch for onchange event
    text_area.setAttribute('onchange', function() {
        operand2_data.setValue(text_area.innerHTML);
    });

    return operand2_data;
});

body.div("result").depends({ op1: operand1, op2: operand2, oprt: operator }).build(function(deps) {
    // Removing outdated view block
    this.element.innerHTML = "";

    let result;    
    const op1 = deps.op1.getValue();
    const op2 = deps.op2.getValue();
    switch(deps.oprt.getValue()) {
        case '+':
            result = op1 + op2;
            break;
        case '-':
            result = op1 - op2;
            break;
        case '*':
            result = op1 * op2;
            break;
        case '/':
            result = op1 / op2;
    }

    // Update result div
    this.element.innerHTML = result;
});
 