/**
 * Rate.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
    star: {
      type: 'integer',
      required: true
    },

    posts: {
      collection: 'post',
      through: 'postrate'
    }
    
  }
  
};

