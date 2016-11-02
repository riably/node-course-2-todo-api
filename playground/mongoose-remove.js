const {ObjectID}=require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
//
// var id = '5817119a12e2b119803f9f86';
// Todo.remove({}).then((resul)=>{
//   console.log(result);
// });
Todo.findOneAndRemove({_id:'5817119a12e2b119803f9f86'}).then((todo)=>{
  console.log(todo);
});
Todo.findByIdAndRemove('5817119a12e2b119803f9f86').then((todo)=>{
  console.log(todo);
});
