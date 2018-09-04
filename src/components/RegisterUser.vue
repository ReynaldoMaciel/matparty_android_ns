<template>
  <Page class="page" actionBarHidden="true">
    <FlexboxLayout flexDirection="column" backgroundColor="lightgray">
      <TextField hint="Nome"  
        v-model="username"       
        secure="false"
        keyboardType="text"
        returnKeyType="done" 
        returnPress="onReturnPress"
        autocorrect="false"
        focus="onFocus" 
        blur="onBlur" 
        class="input input-border"/>
      <TextField hint="Email"         
        secure="false"
        v-model="email"  
        keyboardType="email"
        returnKeyType="done" 
        returnPress="onReturnPress"
        autocorrect="false"
        focus="onFocus" 
        blur="onBlur" 
        class="input input-border"/>
      <TextField hint="Senha"  
        v-model="password"         
        secure="true"
        keyboardType="text"
        returnKeyType="done" 
        returnPress="onReturnPress"
        autocorrect="false"
        focus="onFocus" 
        blur="onBlur" 
        class="input input-border"/>
      <Button text="Registrar" @tap="registerUser" class="btn btn-primary btn-active" />
      <Button text="Logar" @tap="getToken" class="btn btn-primary btn-active" />
      <Button text="Get Users" @tap="getUsers" class="btn btn-primary btn-active" />
      <Button text="Logout" @tap="logout" class="btn btn-danger btn-active" />
      <Label> {{ token }}</Label>
    </FlexboxLayout>
  </Page>
</template>

<script>
  const axios = require('axios');

  export default {
    name: 'HelloWord',
    data () {
      return {
        username: 'Higor',
        email: 'hfn123@gmail.com',
        password: 'abc123',
        token: 'teste'
      };
    },
    methods: {
      registerUser() {       
        axios.post('https://matparty-api-only.herokuapp.com/register', {
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then(function (response) {
          alert("registrado");
        })
        .catch(function (error) {
          alert(error.message);
        })
      },
      getToken(){
        axios.post('https://matparty-api-only.herokuapp.com/authenticate', {
          email: this.email,
          password: this.password
        })
        .then((response) => {
          this.token = response.data["token"]
          alert("Logado com sucesso")
        })
        .catch(function (error) {
          alert(error.message);
        })
      },
      getUsers(){
        axios.get('https://matparty-api-only.herokuapp.com/users', {
          headers: {'Authorization':'Bearer ' + this.token }
        })
        .then(function (response) {
          alert(response.data.message);
        })
        .catch(function (error) {
          alert(error);
        })
      },
      logout(){
        this.token = ''
      }
    },
  };
</script>

<style scoped>
  .hello-world {
    margin: 20;
  }

  Label {
    color: red;
  }
</style>
