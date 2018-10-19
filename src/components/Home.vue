<template>
  <div class="hello">
    <h1 @click="resetUserInfo">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  // created:{
  // },
  // mounted:{
    
  // },
  computed: {
    msg(){
      return `Welcome to ${this.$store.state.Home.userInfo.name}`
    }
  },
  methods:{
    resetUserInfo(){
      this.$store.dispatch("Home/setUserInfo", {name:'xinfei'});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
