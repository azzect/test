<template>
    <div>
        <div class='topbar'>
            <div style="text-align:left; flex-grow:  1;">
                <button v-if="userListLenght > 0" class='ulsButton'>
                    <ul type="none" >
                        <div class='ulTittle'>
                            <div v-if="choosedUserIndex === null">
                                choose user ⬇︎
                            </div>
                            <div v-else :title="choosedUser">
                              {{choosedUser}}
                            </div>
                        </div>
                        <li v-for="(user, index) in userList" :key='user.name'>
                            <div :title="user.fullName" @click="chooseUser(user, index)">
                                {{user.fullName}}
                            </div>
                        </li>
                    </ul>
                </button>
            </div>
            <div style="text-align:right; flex-grow:  1; ">
                <button style="background:red; height:100%" @click="exit">
                    exit
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  computed: {
    userListLenght: function () {
      return this.$store.state.userListLenght
    },
    userList: function () {
      return this.$store.state.userList
    },
    choosedUser: function () {
      return this.$store.state.choosedUser.fullName
    },
    choosedUserIndex: function () {
      return this.$store.state.choosedUserIndex
    }
  },
  methods: {
    chooseUser: function (user, index) {
      const data = {
        user: user,
        index: index
      }
      this.$store.dispatch('chooseUser', data)
    },
    exit: function () {
      this.$store.dispatch('exit')
      this.$router.push('/auth')
      this.$router.go('/auth')
    }
  }
}
</script>
<style scoped>
ul{
    height: 100%;
    padding: 0px;
}

li{
    display: none;
    padding: 5px;
}
ul:hover li{
    display: list-item;
    transition: all, 1s;
}
ul:active li{
    display: list-item;

}
li:hover{
    background: rgb(243, 80, 112);
}
.ulTittle{
    padding: 5px;
    height: 40px;
}
.ulsButton{
    background: rgb(55, 61, 79);
    padding: 0px;
    min-width: 115px;
    max-width: 200px;
    overflow-x:hidden

}
.topbar{
    position: relative;
    left:0px;
    top:0px;
    width: 100%;
    height: 70px;
    background: rgb(44,50 ,68);
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

}

select{
    height: 100%;
    min-width: 100px;
    background: rgb(243, 80, 112);
    border: none;
    color: white;
    font-size: 100%
}
option{
    background-color: white;
    color: rgb(243, 80, 112);;
}
</style>
