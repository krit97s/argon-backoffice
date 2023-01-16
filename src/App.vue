<template>
  <router-view>
    <notifications class="my-notification" />
  </router-view>

</template>

<script>
export default {
  beforeCreate(){
    this.$store.commit("auth/DECODE_TOKEN")
  }
}
</script>


<style >
.vue-notification {
  margin: 5px 5px 5px!important;
  padding: 15px!important;
  font-size: 12px;
  color: white;
  background: #44A4FC;
  border-left: 5px solid #187FE7;

}

/* .my-notification .vue-notification .success {
  background: #ffffff !important;
  ;
  border-left-color: #42A85F;
}

.warn {
  background: #ffb648;
  border-left-color: #f48a06;
}

.error {
  background: #E54D42;
  border-left-color: #B82E24;
} */
</style>
