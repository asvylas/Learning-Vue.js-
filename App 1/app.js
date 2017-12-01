new Vue({
  el: '#vue-app',
  data: {
    name:undefined,
    age:undefined,
    job: "no",
    x:0,
    y:0,
    website: 'http://www.google.com',
    websiteTag: '<a href="http://www.google.com">HAHAH</a>'
  },
  methods: {
    greet: function(){
        return 'Good ' + this.age;
    },
    add: function(value){
      return this.age += value
    },
    subtract: function(value){
      return this.age -= value
    },
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function(){
      alert("hi");
    },
    /*logName: function(){
      console.log("Name entered")
    },
    logAge: function(){
      console.log("Name age")
    }*/
  },
  computed:{
    logName: function(){
      console.log("Name entered")
    },
    logAge: function(){
      console.log("Name age")
    }
  }
});
