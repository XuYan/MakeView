const body = new Element(document.getElementsByTagName("BODY"));

function Element(html_element) {
    this.element = html_element;
}

/**
 * Create div and attach under this Element object
 * 
 * @param {string} id - the id assigning to the new div.
 * @returns {Element} The Element object under which the new div will be attached
 */
Element.prototype.div = function(id) {
    // Create a div with given id
    const div_element = document.createElement("div");
    div_element.id = id;

    // Attach the div as child of this html element
    this.element.appendChild(div_element);

    return this;
};

/**
 * Specify the dependencies this Element object relies on
 * 
 * @param {Data} data - the dependency of this Element object
 * @returns {Element} The Element object depending on the given data
 */
Element.prototype.depends = function(data) {
    // TODO: Add Element object as Data object's build target

    return this;
};

/**
 * Instructions on how to generate a part of HTML dom tree 
 */
Element.prototype.build = function() {

};