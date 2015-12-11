import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    stopEvents() {
      this.get('jqplugin').stop();
    }
  },
  didInsertElement() {
    let jquerypic = this.$(".jquerypic").jquerypic();
    this.set('jqplugin', jquerypic);
  },
  willDestroyElement() {
    this.get('jqplugin').stop();
  }
});
