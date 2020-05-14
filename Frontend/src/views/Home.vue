<template>

<div class="from-group">
  <router-link class="btn information" to="information">
    ดูข้อมูลส่วนตัว
  </router-link>
  <router-link class="btn registerFrost" to="registerFrost">
    ลงทะเบียน
  </router-link>

</div>



</template>

<script>
import Header from '../components/themes/Header';
import Sidebar from '../components/themes/Sidebar'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar
  
  }
  }
</script>

<style scoped>
.btn-registerFrost{
  background-color: #3AB531;
}
.information{
  background-color: #0F71E1;
}
.btn {
  color: #FFFFFF;
  background-color: #0F71E1;
  margin-left: 50px;
}

</style>
