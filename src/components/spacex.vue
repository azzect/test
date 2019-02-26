<template>
    <div>
        <h1>  Latest launches of SpaceX</h1>
        <div class="apisContainer">
          <p><b>Mission name: </b> {{data.mission_name}}</p>
          <p><b>Launch date local: </b>{{data.launch_date_local}}</p>
          <p><b>Launch success: </b>{{data.launch_success}}</p>
          <p><b>Details: </b>{{data.details}} <a :href="data.links.article_link">ALL ARTICLE</a> </p>
          <p>
              <b>IMAGES</b>
          </p>
          <div v-for="(img, index) in data.links.flickr_images" :key="index">
            <p>
              <img :src="img" alt="">
            </p>
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
    this.$store.dispatch('fillPageDate', 'SpaceX')
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
p{
    padding: 15px;
}
</style>
