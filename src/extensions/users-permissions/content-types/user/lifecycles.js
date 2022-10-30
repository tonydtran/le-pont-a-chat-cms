'use strict';

const { v4: uuid } = require('uuid');
const replaceSpecialCharacters = require('replace-special-characters');

module.exports = {
  beforeCreate: async (data) => {
    data.params.data.uuid = uuid();
    const { firstname, lastname } = data.params.data
    data.params.data.username = `${replaceSpecialCharacters(firstname.trim())}_${replaceSpecialCharacters(lastname.trim())}_${(Math.random() + 1).toString(36).substring(8)}`
  },
};
