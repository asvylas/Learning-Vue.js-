<template>
  <div class="">
    <h3>xp:{{xp}}</h3>
    <h3>gold:{{gold}}</h3>
    <h3>Lv:{{checkXp}}</h3>
    <ul>
      <button v-on:click="doTask(item)" v-for="item in tasks">
        {{item.job}}
      </button>
    </ul>
    <h4>Event Log:</h4>
    <p v-for="eventLog in events">
      {{dateStamp}}: You decided to {{eventLog.job}}. {{eventLog.xp}} xp gained, {{eventLog.gold}} gold gained.
    </p>
</div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {job: 'Take out the trash', xp: 2, gold: 2},
        {job: 'Water the plants', xp: 1, gold: -1},
        {job: 'Go out with friends', xp: 20, gold: -100},
        {job: 'Work at the store', xp: -10, gold: 50}],
      xp: 0,
      gold: 0,
      lv: 0,
      events: [],
    }
  },
  computed: {
		checkXp() {
      if (this.xp >  500) {
        this.lv = 3
      } else if (this.xp > 200) {
        this.lv = 2
      } else {
        this.lv = 1
      }
      return this.lv
		},
    dateStamp(){
      let now = new Date();
      return now;
    }
  },
  methods: {
    doTask(item){
      this.xp = this.xp + parseInt(item.xp)
      this.gold = this.gold + item.gold
      this.events.push(item)
      if (this.events.length > 5) {

        this.events.shift()
      }
    }
  },
}
</script>

<style>

</style>
