<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-primary">
    </base-header>
    <b-container fluid class="mt--9">

      <b-row class="mt-5">
        <b-col cols="12" class="mb-5 mb-xl-0">
          <page-visits-table :tableData="source" :meta="sourceMeta" :perPage="perPage"
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
import PageVisitsTable from '../source/PageVisitsTable.vue';

export default {
  components: {
    PageVisitsTable,
  },
  computed: {
    ...mapState({
      source: (state) => state.source.sourceList,
      sourceMeta: (state) => state.source.sourceMeta,
    })
  },
  data() {
    return {
      perPage: 10,
      loadingStat: false,
    };
  },
  methods: {
    changePage(currentPage) {
      this.fetchData(currentPage)
    },
    async fetchData(currentPage) {
      await this.$store.dispatch("source/onFetchSource", { page: currentPage || 1, perPage: this.perPage })
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
