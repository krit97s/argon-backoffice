<template>
  <div>
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header ">
      <b-container fluid>
        <!-- Mask -->
        <span class="mask bg-gradient-primary opacity-8"></span>
        <!-- Header container -->
      </b-container>
    </div>

    <b-container fluid class="mt--7">
      <b-row class="justify-content-center">
        <b-col lg="12">
          <productList :items="productList"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import productList from '../product';
import { mapState } from 'vuex';

export default {
  components: {
    productList,
  },
  computed: {
    ...mapState({
      productList: (state) => state.product.productList,
    })
  },
  async created() {
    await this.$store.dispatch("product/onFetchProduct")
  }
};
</script>
<style>

</style>
