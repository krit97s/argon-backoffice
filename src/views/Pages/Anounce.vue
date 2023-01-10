<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-primary">
    </base-header>
    <b-container fluid class="mt--9">

      <b-row class="mt-5">
        <b-col cols="12" class="mb-5 mb-xl-0">
          <page-visits-table :isLoading="isLoading" :tableData="anounce" :meta="anounceMeta" :perPage="perPage"
            @changePage="changePage($event)"></page-visits-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
// Charts
import { mapState } from "vuex"

// Tables
import PageVisitsTable from '../anounce/PageVisitsTable.vue';

export default {
  components: {
    PageVisitsTable,
  },
  computed: {
    ...mapState({
      anounce: (state) => state.anounce.anounceList,
      anounceMeta: (state) => state.anounce.anounceMeta,
    })
  },
  data() {
    return {
      isLoading: false,
      perPage: 10,
      loadingStat: false,
    };
  },
  methods: {
    changePage(currentPage) {
      this.fetchData(currentPage)
    },
    async fetchData(currentPage) {
      this.isLoading = true
      await this.$store.dispatch("anounce/onFetchAnounce", { page: currentPage || 1, perPage: this.perPage })
      this.isLoading = false
    },
  },
  async created() {
    await this.fetchData()
  }

};
</script>
<style>
.el-table .cell {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
