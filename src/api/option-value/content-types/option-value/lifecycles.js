'use strict';

const { v4: uuid } = require('uuid');

module.exports = {
  beforeCreate: async (data) => {
    console.log('beforeCreate');
    data.params.data.uuid = uuid();
    data.params.data.private_description = `${data.params.data.private_type} - ${data.params.data.value}`
  },
  beforeUpdate: async (data) => {
    if (data.params.data.private_type && data.params.data.value) {
      data.params.data.private_description = `${data.params.data.private_type} - ${data.params.data.value}`
    }
  }
};