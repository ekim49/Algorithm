/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    const kelvin = (celsius + 273.15).toFixed(5);
    const fahrenheit = (celsius * 1.8 + 32).toFixed(5);
    
    return [kelvin, fahrenheit];
};