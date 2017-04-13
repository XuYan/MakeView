function Data(val) {
    this.val = val;
}

/**
 * Get value from Data object
 */
Data.prototype.getValue = function() {
    return this.val;
}

/**
 * Set value to Data object
 */
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