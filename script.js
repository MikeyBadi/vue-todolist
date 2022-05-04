

const app = new Vue({
  el: "#app",
  data:{
    todos:[
      'Dare da mangiare al cane',
      'Fare la spesa',
      'Preparare da mangiare'
    ],
    newTodo:'',
  },
  methods: {
    addTodo(){
      if(this.newTodo.length > 1){
        this.todos.push(this.newTodo)
        console.log(this.newTodo);
        this.newTodo='';
        console.log(this.todos);
      };
    },
    removeTodo(index){
      console.log(index);
      this.todos.splice(index, 1)
    }
  },
})