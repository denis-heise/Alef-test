<template>
  <div class="wrapper">
    <MainHeader/>
    <main>
      <router-view></router-view>
    </main>
    <MainFooter/>
  </div>
</template>

<script>
import MainHeader from './components/header/header.vue';
import MainFooter from './components/footer/footer.vue';

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

