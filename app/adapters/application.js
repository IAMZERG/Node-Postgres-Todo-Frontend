import DS from 'ember-data';
var ApplicationAdapter = DS.RESTAdapter.extend({
       host: 'http://127.0.0.1:3000',
       namespace: 'api/v1'
});

export default ApplicationAdapter;
