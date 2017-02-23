import Ember from 'ember';

const { computed, Controller } = Ember;

export default Controller.extend({
  model: null,

  categoryStats: computed.sort('model', '_countSorting'),

  _countSorting: ['count:desc']
});
