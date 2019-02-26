<template>
    <div>
        <h1>DOG PICTURE</h1>
        <div class="apisContainer">
            <img :src="data" alt="">
            <button @click="GO">NEXT</button>
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
  methods: {
    GO: function () {
      this.$store.dispatch('fillPageDate', 'Dog')
    }
  },
  created () {
    this.$store.dispatch('fillPageDate', 'Dog')
  }
}
</script>
<style>
h1{
    padding: 10px;
}
img{
    width: 100%;
}
</style>
