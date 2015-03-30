import DS from 'ember-data';


var Todo = DS.Model.extend({
  title: DS.attr("string"),
  isCompleted: DS.attr("boolean")

});


// Todo.reopenClass({
//   FIXTURES: [
//     {
//       id: 1,
//       title: 'Learn twister Ember.js',
//       isCompleted: true
//     },
//     {
//       id: 2,
//       title: 'twister...',
//       isCompleted: false
//     },
//     {
//       id: 3,
//       title: 'Got Profit!',
//       isCompleted: true
//     }
//   ]
// });

export default Todo;
