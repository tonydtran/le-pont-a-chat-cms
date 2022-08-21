'use strict';

const { v4: uuid } = require('uuid');
const replaceSpecialCharacters = require('replace-special-characters');

module.exports = {
  beforeCreate: async (data) => {
    data.params.data.uuid = uuid();
    data.params.data.slug = `/${replaceSpecialCharacters(data.params.data.name.toLowerCase().replace(/ /g, '-'))}`;
  },
  beforeUpdate: async (data) => {
    if (data.params.data.name) {
      data.params.data.slug = `/${replaceSpecialCharacters(data.params.data.name.toLowerCase().replace(/ /g, '-'))}`;
    }
  }
};