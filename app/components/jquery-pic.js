import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    let jquerypic = this.$(".jquerypic").jquerypic();
    this.set('jqplugin', jquerypic);
  },
  willDestroyElement() {
    this.get('jqplugin').stop();
  }
});
