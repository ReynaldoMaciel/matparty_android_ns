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
      <Button text="Logar" tap="onTap" class="btn btn-primary btn-active" />
      <Button text="Get Users" tap="onTap" class="btn btn-primary btn-active" />
    </FlexboxLayout>
  </Page>
</template>

<script>
  var dialog =  require("ui/dialogs")

  export default {
    name: 'HelloWord',
    data () {
      return {
        username: 'Higor',
        email: 'hfn@gmail.com',
        password: 'abc123'
      };
    },
    method: {
      registerUser() {
        console.log('teste');  
        alert('Your message')
        .then(() => {
          console.log("Alert dialog closed.");
        });
        
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
