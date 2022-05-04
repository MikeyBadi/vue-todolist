

const app = new Vue({
  el: "#app",
  data:{
    todos:[
      {
        title:'Dare da mangiare al cane',
        done:'false'
      },
      {
        title:'Fare la spesa',
        done:'false'
        
      },
      {       
        title:'Preparare da mangiare',
        done:'false'
      }
    ],
    newTodo:{
      title: '',
      done: false
    },
  },
  methods: {
    addTodo(){
      if(this.newTodo.title.length > 1){
        const nextTodo = {
          title : this.newTodo.title,
          done : this.newTodo.done
        }
        this.todos.push(nextTodo)
        this.newTodo.title='';
        console.log(this.todos);
      };
    },
    removeTodo(index){
      console.log(index);
      this.todos.splice(index, 1)
    }
  },
})