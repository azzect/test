<template>
    <div>
        <h1>SHOW</h1>
        <div class="apisContainer">
            <h2>
              {{show.name}}
            </h2>
            <img :src="show.image.original" :alt="show.image.medium">
            <p><b>Date: </b> {{show.airdate}}</p>
            <p><b>Season: </b> {{show.season}}</p>
            <p><b>Number: </b> {{show.number}}</p>
            <p><b>Summary: </b> {{summary}}</p>
            <p><a :href="show.url">SEE DEMO HERE</a></p>
        </div>
    </div>
</template>
<script>
export default {
  computed: {
    show: function () {
      return this.$store.state.pageDate
    },
    summary: function () {
      return this.show.summary.replace(/(<p>|<\/p>)/g, '')
    }
  },
  created () {
    this.$store.dispatch('fillPageDate', 'Show')
  }
}
</script>
<style scoped>
img{
    width: 100%;
}
h1{
  padding: 10px;
}
h2{
  margin-bottom: 20px;
}
p{
  padding: 15px;
}
</style>
