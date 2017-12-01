'use strict';

const app = new Vue({
	el: "#app",
	data:{
		people: [
			{
			first: "Jimmy",
			last: "Dimmy",
			age: 12,
			school:"yes"
			},
			{
			first: "Devitto",
			last: "Johnny",
			age: 99,
			school: "no"
			}
		],
	},
	mounted() {
		const http = new XMLHttpRequest();
			http.onreadystatechange = function () {
				if(http.readyState == 4){
				console.log(JSON.parse(http.response))
				}
			}
		http.open("GET", "https://jsonplaceholder.typicode.com/comments", true);
		http.send();
		},
	computed: {
		jimmyFullName() {
			return `${this.jimmy.first} ${this.jimmy.last}`
		},
		jevittoFullName() {
			return `${this.jevitto.first} ${this.jevitto.last}`
		}
	},
	filters: {
		fullName(value) {
			return `${value.last}, ${value.first}`
		}
	},
	methods: {
		incrementAge(value) {
			value.age = value.age +1;
		},
		decrementAge(value){
			value.age = value.age -1;
		}
	},
	template:
		`<div class="container">
			<h2 v-for="name in people">
				<h4>{{name | fullName}}</h4>
				<h5> Age: {{name.age}}</h5>
				<button v-on:click="decrementAge(name)">-</button>
				<button v-on:click="incrementAge(name)">+</button>
				<input v-model="name.first"/>
			</h2>
		</div>
		`
})