'use strict';

const { v4: uuid } = require('uuid');

module.exports = {
  beforeCreate: async (data) => {
    data.params.data.uuid = uuid();

    if (!data.params.data.input_type) {
      data.params.data.option_values.length > 4
        ? data.params.data.input_type = 'select'
        : data.params.data.input_type = 'radio'
    }
  },
  beforeUpdate: async (data) => {
    if (!data.params.data.input_type) {
      data.params.data.option_values.length > 4
        ? data.params.data.input_type = 'select'
        : data.params.data.input_type = 'radio'
    }
  },
};