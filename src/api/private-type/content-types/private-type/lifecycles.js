'use strict';

const { v4: uuid } = require('uuid');

module.exports = {
  beforeCreate: async (data) => {
    data.params.data.uuid = uuid();
    data.params.data.description = `[${data.params.data.option_category}] ${data.params.data.option_type}`;
  },
  beforeUpdate: async (data) => {
    if (data.params.data.option_category && data.params.data.option_type) {
      data.params.data.description = `[${data.params.data.option_category}] ${data.params.data.option_type}`;
    }
  }
};