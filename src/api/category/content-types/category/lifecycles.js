'use strict';

const { v4: uuid } = require('uuid');

module.exports = {
  beforeCreate: async (data) => {
    data.params.data.uuid = uuid();
    data.params.data.slug = `/${data.params.data.name.toLowerCase().replace(/ /g, '-')}`;
  },
  beforeUpdate: async (data) => {
    if (data.params.data.name) {
      data.params.data.slug = `/${data.params.data.name.toLowerCase().replace(/ /g, '-')}`;
    }
  }
};