<template>
  <Layout class="template-layout">
        <Header><Button type="primary" @click="resetUserInfo">Click</Button></Header>
        <Content class="content">
          <div>
            <H1>{{msg}}</H1>
          </div>
          <br/>
          <MyCard />
        </Content>
        <Footer class="footer">Footer</Footer>
  </Layout>
</template>

<script>
import {Layout,Header,Content,Footer,Button} from 'iview';
import MyCard from './components/MyCard';

export default {
  name: 'home',
  components: {
    Layout,Header,Content,Footer,Button,MyCard
  },
  data() {
    return {
      
    };
  },
  computed: {
    msg(){
      return `Welcome to ${this.$store.state.Home.userInfo.name}`
    }
  },
  methods:{
    resetUserInfo(){
      this.$store.dispatch("Home/setUserInfo", {name:'Vuex'});
    }
  }
};
</script>

<style lang="less" scoped>
.template-layout{
  height: 100%;
  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .footer{
    background: #515a6e;
  }
}
</style>
