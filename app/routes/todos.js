import Ember from 'ember';

export default Ember.Route.extend({
        inputValue: '',
        model: function () {
                var todos = this.store.findAll('todo');
                return todos;
        },
       actions: {

               newTodo: function () {
                       var todo = this.store.createRecord('todo', {text: $('#newinput').val(), completed: false});
                       todo.save();
               },
       saveClick: function (todo) {
               todo.save();
       },
       deleteTodo: function(todo) {

               todo.destroyRecord();

       }



       }

});
