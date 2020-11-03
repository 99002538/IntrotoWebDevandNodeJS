var printval = function (val) {
    if (typeof (val) == 'string') {
        console.log('welcome ' + val);
    }
    if (typeof (val) == 'number') {
        console.log('your score is ' + val);
    }
};
printval('Kumaran');
printval(10);
var printvalues = function (val) {
    if (Array.isArray(val)) {
        console.log('print Array ' + val);
    }
    if (typeof (val) == 'object') {
        console.log(val);
    }
};
printvalues(['Raj', 'Ram']);
printvalues({ name: 'kumu' });
