'use strict';

const { v4: uuid } = require('uuid');
const replaceSpecialCharacters = require('replace-special-characters');
const toDecimals = require('round-to-decimal');

module.exports = {
  beforeCreate: async (data) => {
    data.params.data.uuid = uuid();
    data.params.data.slug = `/${replaceSpecialCharacters(data.params.data.name.toLowerCase().replace(/ /g, '-'))}`;

    data.params.data.discounted_price = data.params.data.discount
      ? toDecimals(data.params.data.price - (data.params.data.price * (data.params.data.discount / 100)), 2)
      : null
  },
  beforeUpdate: async (data) => {
    if (data.params.data.name) {
      data.params.data.slug = `/${replaceSpecialCharacters(data.params.data.name.toLowerCase().replace(/ /g, '-'))}`;
    }

    data.params.data.discounted_price = data.params.data.discount
      ? toDecimals(data.params.data.price - (data.params.data.price * (data.params.data.discount / 100)), 2)
      : null
  }
};
