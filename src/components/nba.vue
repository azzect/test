<template>
    <div>
        <h1>NBA TEAMS</h1>

        <div  class="apisContainer">
            <ul type="none" v-for="(team, index) in data" :key="index">
                <li>
                    <b> {{team.abbreviation}}</b>
                    <ul type="none">
                        <li><b>City:</b> {{team.city}}</li>
                        <li><b>Conference:</b> {{team.conference}}</li>
                        <li><b>Division:</b> {{team.division}}</li>
                        <li><b>Full name:</b> {{team.full_name}}</li>
                        <li><b>Name:</b> {{team.name}}</li>
                    </ul>
                </li>
            </ul>
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
    this.$store.dispatch('fillPageDate', 'NBA')
  }
}
</script>
<style scoped>
ul{
    padding: 0;
}
li ul li:before{
    content:"↳→"
}
ul li ul li{
    display:none;

}
ul li:hover ul li{
    display:list-item;
}
</style>
