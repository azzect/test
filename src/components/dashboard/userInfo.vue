<template>
  <div v-if='userInfo' class='whiteForm'>
          <div class='container'>
              <div class="tittle">
                  <h1 >Editing user: {{choosedUser.fullName}}</h1>
              </div>
              <div class='item'>
                  <label>fullName: <br> <input v-model="fullName" type="text" placeholder="fullName"></label>
              </div>
              <div class='item'>
                  <label>Telephone:  <br>  <input  v-model="telephone" type="tel" placeholder="telephone"></label>
              </div>
              <div class='item'>
                  <label>E-mail:  <br>  <input v-model="eMail"  type="eMail" placeholder="E-mail"></label>
              </div>
          </div>
          <div class="buttons">
              <div class="buttonCreate">
                  <button @click="updateUser">
                      save
                  </button>
              </div>
          </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      fullName: '',
      telephone: '',
      eMail: ''
    }
  },
  computed: {
    choosedUser: function () {
      return this.$store.state.choosedUser
    },
    userInfo: function () {
      if (this.$store.state.userInfo === true) {
        this.fillData()
      }
      return this.$store.state.userInfo
    }
  },
  methods: {
    updateUser: function () {
      const user = {
        fullName: this.fullName,
        telephone: this.telephone,
        eMail: this.eMail,
        card: this.$store.state.choosedUser.card
      }
      this.$store.dispatch('updateUser', user)
    },
    fillData: function () {
      this.fullName = this.$store.state.choosedUser.fullName
      this.telephone = this.$store.state.choosedUser.telephone
      this.eMail = this.$store.state.choosedUser.eMail
    },
    cancel: function () {
      this.$store.dispatch('userInfoCancel')
    }
  }
}
</script>
<style scoped>

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
