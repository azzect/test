<template>
    <div>
        <topbar />
        <section>
            <addUser/>
            <br>
            <userInfo/>
            <cards/>
        </section>
    </div>

</template>

<script>
import topbar from '@/components/dashboard/topbar'
import addUser from '@/components/dashboard/addUser'
import userInfo from '@/components/dashboard/userInfo'
import cards from '@/components/dashboard/cards'

export default {
  components: {
    topbar,
    addUser,
    userInfo,
    cards
  },
  created () {
    this.$store.dispatch('checkingSession')
    if (this.$store.state.token === null) {
      this.$router.push('/auth')
    }
  }
}
</script>
<style scoped>
@media (max-width:10000px){
    div{
    width: 100%;
    }
    section{
        margin-left: 100px;
        margin-right: 100px;
    }
}
@media (max-width:800px){
    section{
        margin-left: 20px;
        margin-right: 20px;
    }
}
@media (max-width:400px){
    section{
        margin-left: 5px;
        margin-right: 5px;
    }
}
