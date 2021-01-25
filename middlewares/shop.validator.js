const { check } = require('express-validator');

module.exports.shopValidator = [
  check('name')
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage('can not be empty')
    .bail()
    .isString()
    .withMessage('should be a string'),
  check('owner')
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage('can not be empty')
    .bail()
    .isString()
    .withMessage('should be a string'),
  check('category')
    .exists({ checkNull: true, checkFalsy: true })
    .withMessage('can not be empty')
    .bail()
    .isString()
    .withMessage('should be a string'),
];
