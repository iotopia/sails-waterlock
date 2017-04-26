/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    title: {
      type: 'string',
      required: true,
      unique: true
    },

    summary: {
      type: 'text',
      required: true
    },

    agentda: {
      type: 'text',
      required: true
    },

    exspected_result: {
      type: 'text'
    },

    /* One to One */

    rates: {
      collection: 'rate',
      through: 'postrate'
    },

    /* One to Many */

    author: {
      model: 'user'
    },

    subject: {
      model: 'subject'
    },

    /* Many to Many */

    schedules: {
      collection: 'schedule',
      through: 'schedulepost'
    },

    homeworks: {
      collection: 'homework',
      via: 'post'
    },

    comments: {
      collection: 'comment',
      via: 'post'
    }

  }

};
