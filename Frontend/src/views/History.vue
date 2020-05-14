<template>
  <div class="history">
    <Layout>
      <div class="card">
        <h1 class="card-header">ประวัติการเข้าป่าไม้</h1>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>ชื่อ-นามสกุล</th>
                <th>เลขประจำตัวประชาชน</th>
                <th>ที่อยู่</th>
                <th>วัตถุประสงค์ในการเข้าไปในพื้นที่ป่า</th>
                <th>วันที่เข้าป่า</th>
                <th>เวลาที่เข้าป่า</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </Layout>
  </div>
</template>
<script>
import sidebar from "../components/themes/Sidebar.vue";
import Layout from "../components/themes/Layout";
import axios from "axios";
export default {
  components: {
    Layout
  },
  data() {
    return {
      form: {
        TEL: "",
        PASSWORD: ""
      }
    };
  },
  methods: {
    //ส่งข้อมูลไปตรวจสอบ
    onSubmit() {
      const response = axios
        .post("api/account/login", this.form)
        .then(response => {
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err.response.data);
        });
    },
    onReset() {
      this.onSubmit.rest();
      this.form = {
        TEL: "",
        PASSWORD: ""
      };
    },
    //ไปหน้าลงทะเบียน
    onRedirectToRegister() {
      this.$router.push("/register");
    }
  }
};
</script>
<style scoped>
.card-header{
    font-size: 20px;
}
</style>