/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    const arr = address.split('.');
    return arr.join('[.]');
};

