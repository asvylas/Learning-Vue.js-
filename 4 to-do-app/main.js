'use strict';

const app = new Vue({
  el: "#to-do-app",
  data: {
    list: [

    ],

  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      if (response.status == 200) {
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].userId == 1) {
            app.list.push(response.data[i])
          }
        }
      } else {
        console.log("Something went wrong")
      }
    })
  },
  computed: {

  },
  filters: {

  },
  methods: {
    deleteEntry(task){
      this.list.splice(this.list.indexOf(task), 1)
    },
    completeTask(task){
      task.completed = true;
    },
    addTask(){
      let newTaskTitle = document.querySelector('input#submit-task').value
      let newTask =
        {
          "userId": 1,
          "id": app.list.length+1,
          "title": newTaskTitle,
          "completed": false
        }
      app.list.push(newTask)
    },
  },
  template:
	 `<div class="container">
      <div>
      <input type="text" id="submit-task">
      <button v-on:click="addTask()">Submit a new task</button>
      </div>
      <div v-for="task in list">
        <div class="task">
          <p v-bind:class="{completed: task.completed}">ID: {{task.id}}, {{task.title}}</p>
          <button v-on:click="deleteEntry(task)">Delete</button>
          <button v-on:click="completeTask(task)">Complete</button>
        </div>
      </div>
		</div>
	`
})
