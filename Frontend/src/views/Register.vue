<template>
  <div class="register container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <h1 class="name-system">ระบบลงทะเบียนผู้เข้าใช้พื้นที่เขตรักษาพันธุ์สัตว์ป่าเวียงลอ</h1>
        <div class="card">
          <h1 class="card-header">REGISTER</h1>
          <div class="card-body">
            <form @submit.prevent="onSubmit()">
              <div class="form-group row">
                <label for="inputmobile" class="col-sm-6 col-form-label">เบอร์โทรศัพท์ :</label>
                <div class="col-sm-6">
                  <input type="text" v-model.trim="form.TEL" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputname" class="col-sm-6 col-form-label">ชื่อ :</label>
                <div class="col-sm-6">
                  <input type="text" v-model.trim="form.FIRSTNAME" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputlastname" class="col-sm-6 col-form-label">นามสกุล :</label>
                <div class="col-sm-6">
                  <input type="text" v-model.trim="form.LASTNAME" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputnickname" class="col-sm-6 col-form-label">ชื่อเล่น :</label>
                <div class="col-sm-6">
                  <input type="text" v-model.trim="form.NICKNAME" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputblood" class="col-sm-6 col-form-label">หมู่โลหิต :</label>
                <div class="col-sm-6">
                  <input type="text" v-model.trim="form.BLOOD" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputnumreg" class="col-sm-6 col-form-label">เลขบัตรประจำตัวประชาชน :</label>
                <div class="col-sm-6">
                  <input type="text" v-model.trim="form.NUMREG" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputnumhome" class="col-sm-6 col-form-label">บ้านเลขที่ :</label>
                <div class="col-sm-6">
                  <input type="text" v-model.trim="form.NUMHOME" class="form-control" />
                </div>
              </div>

              <div class="form-group row">
                <label for="inputnummoo" class="col-sm-6 col-form-label">หมู่ที่ :</label>
                <div class="col-sm-6">
                  <input type="text" v-model.trim="form.NUMMOO" class="form-control" />
                </div>
              </div>

              <div class="form-group row">
                <label for="inputprovince" class="col-sm-6 col-form-label">จังหวัด :</label>
                <div class="col-sm-6">
                  <select v-model="form.selected_provinces" class="form-control">
                    <option
                      v-for="item in provinces"
                      :key="item.id"
                      v-bind:value="item.id"
                    >{{item.name_in_thai}}</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputdistricts" class="col-sm-6 col-form-label">อำเภอ :</label>
                <div class="col-sm-6">
                  <select v-model="form.selected_districts" class="form-control">
                    <option
                      v-for="item in districts"
                      :key="item.id"
                      v-bind:value="item.id"
                    >{{item.name_in_thai}}</option>
                  </select>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputsubdistricts" class="col-sm-6 col-form-label">ตำบล :</label>
                <div class="col-sm-6">
                  <select v-model="form.selected_subdistricts" class="form-control">
                    <option
                      v-for="item in subdistricts"
                      :key="item.id"
                      v-bind:value="item.id"
                    >{{item.name_in_thai}}</option>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <label for="inputpostman" class="col-sm-6 col-form-label">รหัสไปรษณีย์ :</label>
                <div class="col-sm-6">
                  <input type="text" v-model.trim="form.ZIPCODE" class="form-control" />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputpassword" class="col-sm-6 col-form-label">รหัสผ่าน :</label>
                <div class="col-sm-6">
                  <input type="password" v-model.trim="form.PASSWORD" class="form-control" />
                </div>
              </div>

              <div class="forn-group">
                <button type="submit" class="btn btn-success btn-block">ลงทะเบียน</button>
                <button  type="button" @click="onRedirectToLogin()" class="btn btn-secondary btn-block">ยกเลิก</button>
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
        FIRSTNAME: "",
        LASTNAME: "",
        NICKNAME: "",
        BLOOD: "",
        NUMREG: "",
        NUMHOME: "",
        NUMMOO: "",
        selected_provinces: 0,
        selected_districts: 0,
        selected_subdistricts: 0,
        ADDRESS: "",
        ZIPCODE: "",
        PASSWORD: ""
      },
      provinces: [{ id: 0, name_in_thai: "เลือกจังหวัด" }],
      districts: [{ id: 0, name_in_thai: "เลือกอำเภอ" }],
      subdistricts: [{ id: 0, name_in_thai: "เลือกตำบล" }]
    };
  },
  methods: {
    //บันทึกข้อมูลลงทะเบียน
    findDataById(arr, id) {
      const index = arr.findIndex(x => x.id === id);
      console.log("inde " + index);

      return arr[index]["name_in_thai"];
    },
    updateAddress() {
      this.form.ADDRESS =
        this.form.NUMHOME+","+
        this.form.NUMMOO+","+
        this.findDataById(this.provinces, this.form.selected_provinces) +","+
        this.findDataById(this.districts, this.form.selected_districts) +","+
        this.findDataById(this.subdistricts, this.form.selected_subdistricts)+","+
        this.form.ZIPCODE;
    },
    onSubmit() {
      const response = axios
        .post("api/account/register", this.form)
        .then(response =>this.onReset)
        .catch(err => {
          console.log(err.response.data);
        });
    },
    onReset(){
      this.onSubmit.rest();
      this.form= {
        TEL: "",
        FIRSTNAME: "",
        LASTNAME: "",
        NICKNAME: "",
        BLOOD: "",
        NUMREG: "",
        NUMHOME: "",
        NUMMOO: "",
        selected_provinces: 0,
        selected_districts: 0,
        selected_subdistricts: 0,
        ADDRESS: "",
        ZIPCODE: "",
        PASSWORD: ""
      }
    },
    //ไปหน้าเข้าสู่ระบบ
    onRedirectToLogin(){
      this.$router.push("/login");
      

    },
    getProvinces() {
      const axios = require("axios");
      axios
        .get("http://localhost:3000/api/country/provinces")
        .then(response => {
          this.provinces = this.provinces.concat(response.data);
          // console.log(this.provinces);
        });
    },
    getDistricts(id) {
      const axios = require("axios");
      axios
        .get("http://localhost:3000/api/country/districts/" + id)
        .then(response => {
          this.districts = this.districts.concat(response.data);
          // console.log(this.districts);
        });
    },
    getSubdistricts(id) {
      const axios = require("axios");
      axios
        .get("http://localhost:3000/api/country/subdistricts/" + id)
        .then(response => {
          // console.log(response);
          this.subdistricts = this.subdistricts.concat(response.data);
          // console.log(this.subdistricts);
        });
    }
  },
  mounted() {
    this.getProvinces();
  },
  watch: {
    "form.selected_provinces": function(val) {
      this.districts = [];
      this.getDistricts(val);
      this.updateAddress();
    },
    "form.selected_districts": function(val) {
      this.subdistricts = [];
      this.getSubdistricts(val);
      this.updateAddress();
    },
    "form.selected_subdistricts": function(val) {
      this.updateAddress();
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
  padding-left: 5%;
  padding-right: 5%;
}
.btn {
  margin-top: 30px;
}
</style>