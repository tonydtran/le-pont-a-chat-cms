'use strict';

const { v4: uuid } = require('uuid');
const toDecimals = require('round-to-decimal');

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

    data.params.data.discounted_price = data.params.data.discount
      ? toDecimals(data.params.data.price - (data.params.data.price * (data.params.data.discount / 100)), 2)
      : null
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

    data.params.data.discounted_price = data.params.data.discount
      ? toDecimals(data.params.data.price - (data.params.data.price * (data.params.data.discount / 100)), 2)
      : null
  }
};
