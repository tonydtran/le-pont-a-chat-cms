'use strict';

const { v4: uuid } = require('uuid');

module.exports = {
  beforeCreate: async (data) => {
    data.params.data.uuid = uuid();
    data.params.data.reference = (Math.random() + 1).toString(36).substring(5).replace(/o/gmi, '0').toUpperCase();
  },
};