<template>
  <div class="login">


  <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">

    <h1 class="title">
      <i class="el-icon-setting"></i>
  vuex登录
  </h1>


<el-form-item label="账号" prop="username">
    <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
  </el-form-item>

  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
  </el-form-item>
  

  <el-form-item>
    <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
    <el-button @click="resetForm('loginForm')">重置</el-button>
  </el-form-item>
</el-form>


  </div>
</template>

<script>
export default {
  data() {
   
    return {
     loginForm: {
        username: "",
        password: "",
      
      },
      
      rules: {
        username:[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 18, message: '长度在 5到 18 个字符', trigger: 'blur' }
        ],

         password:[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 18, message: '长度在 5到 18 个字符', trigger: 'blur' }
        ],

      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //alert("submit!");
          //console.log(this.axios)
          let _this = this;
          this.axios.post('/api/checklogin',{
           
              username:_this.loginForm.username,
              password:_this.loginForm.password
            
          })

          .then(response =>{
             console.log("接受后端请求的数据",response.data)
          })

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html,body{
  margin: 0;
  padding: 0;
}
html,body,#app, .login{
 height:100%;

}

.login{
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-form{
  width: 400px;
  border: 1px solid  #ccc;
  border-radius:4px;
  padding: 0px 45px 10px 10px;

}
.el-form .title{
  font-size: 22px;
  color: #333;
  font-weight: bold;
  padding: 20px 0 20px 60px;
}
</style>
