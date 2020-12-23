module.exports.first = function (req, res, next) {
    console.log('1st middleware');
    next();
}

module.exports.second = function (req, res, next) {
    console.log('2nd middleware');
    next();
}

module.exports.third = function (req, res, next) {
    console.log('3rd middleware');
    return res.send('Done');
}
