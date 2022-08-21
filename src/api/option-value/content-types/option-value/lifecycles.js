'use strict';

const { v4: uuid } = require('uuid');

module.exports = {
  beforeCreate: async (data) => {
    data.params.data.uuid = uuid();
    if (data.params.data.private_type && data.params.data.value) {
      const res = await strapi.entityService.findOne('api::private-type.private-type', data.params.data.private_type, {
        fields: ['description']
      })
      if (res?.description) {
        data.params.data.private_description = `${res.description} - ${data.params.data.value}`
      }
    }
  },
  beforeUpdate: async (data) => {
    if (data.params.data.private_type && data.params.data.value) {
      const res = await strapi.entityService.findOne('api::private-type.private-type', data.params.data.private_type, {
        fields: ['description']
      })
      if (res?.description) {
        data.params.data.private_description = `${res.description} - ${data.params.data.value}`
      }
    }
  }
};