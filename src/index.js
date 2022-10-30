'use strict';
const { v4: uuid } = require('uuid');
const replaceSpecialCharacters = require('replace-special-characters');

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    strapi.db.lifecycles.subscribe({
      models: ['plugin::users-permissions.user'],
      async beforeCreate (data) {
        data.params.data.uuid = uuid();
        const { firstname, lastname } = data.params.data
        data.params.data.username = `${replaceSpecialCharacters(firstname.trim())}_${replaceSpecialCharacters(lastname.trim())}_${(Math.random() + 1).toString(36).substring(8)}`
      }
    })
  },
};
