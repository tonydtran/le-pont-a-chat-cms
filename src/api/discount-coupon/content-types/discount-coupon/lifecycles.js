'use strict';

const { ForbiddenError } = require('@strapi/utils/lib/errors');
const { v4: uuid } = require('uuid');

const isCouponValid = ({ expiration_date, max_usage, usage_count }) => {
  if (expiration_date) {
    const dateNow = new Date()
    const expirationDate = new Date(expiration_date)

    if (expirationDate.valueOf() - dateNow.valueOf() < 0) return false
  }

  if (max_usage === usage_count) return false

  return true
}

module.exports = {
  beforeCreate: async (data) => {
    data.params.data.uuid = uuid();
    if (!data.params.data.code) {
      data.params.data.code = (Math.random() + 1).toString(36).substring(6)
    }
    data.params.data.code = data.params.data.code.toUpperCase()

    if (data.params.data.expiration_date) {
      const dateNow = new Date()
      const expirationDate = new Date(data.params.data.expiration_date)

      if (expirationDate.valueOf() - dateNow.valueOf() < 0) {
        throw new ForbiddenError("La date d'expiration ne peut pas être antérieure à aujourd'hui")
      }
    }
  },
  beforeUpdate: async (data) => {
    if (data.params.data.uuid) {
      if (!isCouponValid(data.params.data)) {
        data.params.data.used = true;
      }
    }
  },
  beforeFindOne: async (data) => {
    console.log('beforeFindOne', data)
  },
  afterFindOne: async (data) => {
    console.log('afterFindOne', data)
  },
};