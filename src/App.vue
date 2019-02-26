<template>
  <div id="app">
    <transition name='fade' mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
html {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: rgb( 237, 241, 245);
  width: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  transition: .5s ease-in-out;
}
.page-enter-active, .page-leave-active{
  transition: all 0.5s;
}
.page-enter, .page-leave-active{
  opacity: 0;
  transform: opacity(0)
}
.fade-enter-active, {
  transition: opacity .5s;
}
.fade-leave-active {
  transition: opacity .2s ;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
button{
    min-height: 40px;
    min-width: 80px;
    background: rgb(243, 80, 112);
    border:none;
    border-radius: 2px;
    color:white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.4);
    font-size: 20px;
}
    input{
        margin-top:10px;
        margin-bottom: 10px;
        margin-left:20px;
        border: none;
        background: rgb(237, 241, 245);
        padding:5px;
        width: 80%;

    }
    input:focus{
        outline: none;
        background: white;
        border-bottom: 1px solid rgb(243, 80, 112);
    }
.whiteForm{
    margin-top:20px;
    padding: 20px;
    background: white;

}

.apisContainer{
    padding: 30px;
    margin-top:40px;
    padding-left:30%;
    padding-right: 30%;
    background: white;

}
@media (max-width: 1600px){
.apisContainer{
    padding-left:25%;
    padding-right: 25%;
}
}

@media (max-width: 1200px){
.apisContainer{
    padding-left:20%;
    padding-right: 20%;
}
}
@media (max-width: 800px){
.apisContainer{
    padding-left:15%;
    padding-right: 15%;
}
}
@media (max-width: 500px){
.apisContainer{
    padding-left:30px;
    padding-right: 30px;
}
}
</style>
