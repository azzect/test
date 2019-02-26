<template>
    <div>
        <h1>CATS PICTURES</h1>

        <div class="apisContainer">
            <div v-for="(cat, index) in data " :key='index'>
                <img :src="cat" alt="">
            </div>

        </div>
    </div>
</template>
<script>
export default {
  computed: {
    data: function () {
      return this.$store.state.pageDate
    }
  },
  created () {
    this.$store.dispatch('fillPageDate', 'Cats')
  }
}
</script>
<style scoped>
h1{
    padding: 10px;
}
img{
    width: 100%;

}
</style>
