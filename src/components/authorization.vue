<template>
    <div class="container">
        <div class ='form'>
            <form>
                <h1>  Sign in
                </h1>
                <br>
                <label>Login
                    <br>
                    <input v-model="login" type="text" placeholder="введите логин">
                </label>
                <br>
                <label>
                    Password <br>
                    <input v-model="password" type="text" placeholder="введите пароль">
                </label>
                <br>
                <div>
                    <button type='button' @click="singin">
                        Sing in
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    singin: function () {
      const data = {
        login: this.login,
        password: this.password
      }
      this.$store.dispatch('login', data)
      this.$router.push('/dashboard')
    },
    checking: function () {
      if (this.$store.state.token !== null) {
        this.$router.push('/dashboard')
      }
    }
  },
  created () {
    this.$store.dispatch('checkingSession')
    this.checking()
  }
}
</script>
<style scoped>
@media (max-width:10000px){
    h1{
        background: rgb(44,50 ,68);
        border-top-right-radius: 9px;
        border-top-left-radius: 9px;
        color:white;
        padding: 10px;
    }
    form{
        width: 300px;
        border: 1px solid rgb(229, 239, 244);
        border-radius: 10px;
        text-align: left;
        justify-content: left;
        padding-bottom: 20px;
        background: white;
    }
    form div{
        text-align: center;
        justify-content: center;
    }

    label{
        margin-left:20px;
        color:rgb(44,50 ,68);
    }
    .form{
        text-align: center;
        justify-content: center;
        padding-top: 20%;
    }
    .container{
        display: flex;
        flex-direction: row;
        justify-content:center;
    }
}

@media (max-width: 400px){
    form{
        position: fixed;
        width: 100%;
        height: 100%;
    }
    button{
        position: fixed;
        bottom: 0px;
        width: 100% !important;
        left:0px;
        height: 50px;;
    }
    .form{
        text-align: center;
        justify-content: center;
        padding-top: 0%;
    }
    .container{
        display: inline;
        flex-direction: none;
        justify-content:none;
    }
}
</style>
