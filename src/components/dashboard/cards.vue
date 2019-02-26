<template>
    <div class="whiteForm" v-if='userInfo'>
      <h1> User's cards</h1>
        <div class="container" >
            <div v-for="(card, index) in cards" class="card" :key='index'>
                <div @click="pushNext(card.link)">
                    <div>
                        <div class="description">
                            <h2>{{card.tittle}}</h2>
                            <p>{{card.text}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  computed: {
    cards: function () {
      return this.$store.state.choosedUser.card
    },
    userInfo: function () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    pushNext: function (link) {
      this.$router.push(link)
    }
  }
}
</script>
<style scoped>
.whiteForm{
    background: none;
}
.container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.card{
    flex-grow:  1;
    background: white;
    width: 270px;
    height: 300px;
    max-height: 300px;
    max-width: 400px;
    margin:20px;
    text-align: center;
}
div div p{
    padding: 20px;
    overflow-x:hidden;
    word-wrap: break-word;
}
div div h2{
    padding: 20px;
    overflow-x:hidden;
    word-wrap: break-word;
}

</style>
