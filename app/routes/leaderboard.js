import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('score', { time_span: params.time_span });
  },

  setupController: function(controller, model) {
    controller.set('scores', model);
  }
});
