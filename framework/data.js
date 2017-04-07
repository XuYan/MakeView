function Data(val) {
    this.val = val;
}

Data.prototype.getValue = function() {
    return this.val;
}

Data.prototype.setValue = function(value) {
    this.val = value;
}

function init() {
    const op1 = new Data(0);
    const op2 = new Data(0);
    const oprt = new Data('+');
    return {
        "op1": op1,
        "op2": op2,
        "oprt": oprt
    };
}