<template>
  <div id="app">
    <main-header></main-header>
    <div class="contianer">
      <side-nav class="nav"></side-nav>
      <router-view class="view"/>
    </div>
    <main-footer class="footer"></main-footer>
  </div>
</template>

<script>
import mainHeader from './components/header'
import sideNav from './components/side-nav'
import mainFooter from './components/footer'
export default {
  name: 'App',
  components: {
    mainHeader,
    sideNav,
    mainFooter
  },
}
</script>

<style>
@import "./assets/css/md.css";
  .contianer {
    overflow: hidden;
    margin: 48px auto;
    width: 90%;
    display: block;
    min-height: 800px;
    box-shadow: #3333332e 0px 0px 8px 5px;
    /* background-color: rgb(182, 31, 31); */
  }
  .footer {
    display: block;
  }
  .contianer .nav{
    float: left;
    width: 15%;
  }
  .contianer .view{
    float: left;
    width: 85%;
    padding: 32px 48px 48px;
    box-sizing: border-box
  }
  .container:after {
    content: "";
    clear: both;
    display: block;
  }
</style>
