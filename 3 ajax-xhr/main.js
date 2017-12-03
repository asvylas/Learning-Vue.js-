'use strict';

const app = new Vue({
  el: "#to-do-app",
  data: {
    list: [],

  },
  mounted() {
    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
      if (http.readyState == 4) {
        const jsonData = JSON.parse(http.response)

        for (var i = 0; i < jsonData.length; i++) {
          if (jsonData[i].postId == 5) {
            app.list.push(jsonData[i])
          };
        };
      }
    }
    http.open("GET", "https://jsonplaceholder.typicode.com/comments", true);
    http.send();
  },
  computed: {
    jimmyFullName() {
      return `${this.jimmy.first} ${this.jimmy.last}`
    },
  },
  filters: {

  },
  methods: {
    getData(){
			let x = document.getElementById('message-id').valueAsNumber
			if (typeof x == "number") {
				app.list = []
				const http = new XMLHttpRequest();
				console.log(x)
				http.onreadystatechange = function() {
					if (http.readyState == 4) {
						const jsonData = JSON.parse(http.response)

						for (var i = 0; i < jsonData.length; i++) {
							if (jsonData[i].postId == x) {
								app.list.push(jsonData[i])
							};
						};
					}
				}
				http.open("GET", "https://jsonplaceholder.typicode.com/comments", true);
				http.send();
			} else {
				console.log("Input is not a number")
			}
		},
  },
  template:
	 `<div>
      <div>
				<div id="button-tooltip">
					<input type="number" placeholder="5" id="message-id">
					<span class="tooltiptext">Enter a number between 1 and 40</span>
				</div>
					<button v-on:click="getData">Get messages</button>
			 			<div v-for="name in list">
			 				<div class="message-box">
          			<p class="name">{{name.id}} {{name.name}}</p>
								<p class="message" >{{name.body}}</p>
							</div>
			  		</div>
      </div>
		</div>
	`
})
