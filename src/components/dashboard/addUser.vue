<template>
    <div>
        <div class="buttonLine">
            <button type='button' @click='isFormSee'>
                + user
            </button>
        </div>
          <div v-if="userForm" class='whiteForm'>
              <div class='container'>
                  <div class="tittle">
                      <h1>New user</h1>
                  </div>
                  <div class='item'>
                      <label>Fullname: <br> <input v-model='user.fullName' type="text" placeholder="fullname"></label>
                  </div>
                  <div class='item'>
                      <label>Telephone:  <br>  <input v-model='user.telephone' type="tel" placeholder="telephone"></label>
                  </div>
                  <div class='item'>
                      <label>E-mail:  <br>  <input v-model='user.eMail' type="email" placeholder="E-mail"></label>
                  </div>
              </div>
              <div class="buttons">
                  <div class="buttonCreate">
                      <button @click="adding">
                          create
                      </button>
                  </div>
                  <div class="buttonCancel">
                      <button @click='isFormSee'>
                      cancel
                      </button>
                  </div>
              </div>
              <br>
          </div>
    </div>
</template>
<script>
export default {
  computed: {
    userForm: function () {
      return this.$store.state.userForm
    },
    user: function () {
      return this.$store.state.userAdding
    }
  },
  methods: {
    isFormSee: function () {
      this.$store.dispatch('userForm')
    },
    adding: function () {
      this.$store.dispatch('userAdding')
    }
  },
  created () {
    this.$store.dispatch('loadingUserList')
  }
}
</script>
<style scoped>

.buttonLine{
    text-align: right;
    justify-content: right;
    padding: 10px;
}
button{
    margin-top: 30px
}

.item{
    flex-grow:  1;
}
.container, .buttons{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

}
.tittle{
    width: 100%;
    margin-bottom: 40px;
}
.buttonCreate button{
    background:rgb(243, 80, 129)!important;
    align-self: flex-start;

}
.buttonCreate{
    text-align: left;
    flex-grow:  1;

}
.buttonCancel button{
    background:rgb(173, 23, 23)!important;
}
.buttonCancel{
    flex-grow:  1;
    text-align: right;
}
.buttons button{
    margin: 10px

}

</style>
