<template>
  <div class="register container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <h1 class="name-system">ระบบลงทะเบียนผู้เข้าใช้พื้นที่เขตรักษาพันธุ์สัตว์ป่าเวียงลอ</h1>
        <div class="card">
          <h1 class="card-header">LOGIN</h1>
          <div class="card-body">
            <form @submit.prevent="onSubmit()">
              <div class="form-group row">
                <label for="inputmobile">เบอร์โทรศัพท์</label>

                <input type="text" v-model.trim="form.TEL" class="form-control" />
              </div>

              <div class="form-group row">
                <label for="inputpassword">รหัสผ่าน</label>

                <input type="password" v-model.trim="form.PASSWORD" class="form-control" />
              </div>

              <div class="forn-group">
                <button type="submit" class="btn btn-success btn-block">เข้าสู่ระบบ</button>
                <button
                  type="button"
                  @click="onRedirectToRegister()"
                  class="btn btn-secondary btn-block"
                >ลงทะเบียน</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
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
        .post("api/account/login",this.form)
        .then(response => {
          
          this.$router.push("/")
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
.name-system {
  width: 80%;
  display: block;
  margin: auto;
  margin-top: 15%;
  margin-bottom: 40px;
}
h1 {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}
.card-header {
  letter-spacing: 5px;
}
.card-body {
  padding-left: 15%;
  padding-right: 15%;
}
.btn {
  margin-top: 30px;
}
</style>