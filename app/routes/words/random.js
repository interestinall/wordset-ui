import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find("word");
  },
  afterModel: function(words) {
    this.replaceWith("word.index", words.get("lastObject"));
  }
});
