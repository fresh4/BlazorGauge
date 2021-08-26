var intersect = require('apexcharts');

window.intersect = function (arg1, arg2) {
    let result = intersect(arg1, arg2);
    return result.join(',');
};