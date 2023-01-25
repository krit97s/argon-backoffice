<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-primary">
    </base-header>
    <b-container fluid class="mt--9">

      <b-row class="mt-5">
        <b-col cols="12" class="mb-5 mb-xl-0">
          <ReportResult :isLoading="isLoadingResult" :tableData="reportResult" :meta="reportResultMeta"
            :perPage="perPage" @changePage="changePageResult($event)"></ReportResult>
        </b-col>
        <b-col cols="12" class="my-4 mb-xl-0">
          <page-visits-table :isLoading="isLoading" :tableData="report" :meta="reportMeta" :perPage="perPage"
            @changePage="changePage($event)"></page-visits-table>
        </b-col>
        <!-- <b-col cols="12" class="mb-5 mb-xl-0 mt-2">
          <page-visits-table :isLoading="isLoading" :tableData="report" :meta="reportMeta" :perPage="perPage"
            @changePage="changePage($event)"></page-visits-table>

        </b-col> -->
      </b-row>
    </b-container>
  </div>
</template>
<script>
// Charts
import { mapState } from "vuex"

// Tables
import PageVisitsTable from '../report/PageVisitsTable.vue';
import ReportResult from '../report/PageVisitsTable2.vue';

export default {
  components: {
    ReportResult,
    PageVisitsTable,
  },
  computed: {
    ...mapState({
      reportResult: (state) => state.report.reportResultList,
      reportResultMeta: (state) => state.report.reportResultMeta,
      report: (state) => state.report.reportList,
      reportMeta: (state) => state.report.reportMeta,
    })
  },
  data() {
    return {
      isLoadingResult: false,
      isLoading: false,
      perPage: 10,
      loadingStat: false,
    };
  },
  methods: {
    changePageResult(currentPage) {
      this.fetchDataResult(currentPage)
    },
    changePage(currentPage) {
      this.fetchData(currentPage)
    },
    async fetchData(currentPage) {
      this.isLoading = true
      await this.$store.dispatch("report/onFetchReport", { page: currentPage || 1, perPage: this.perPage })
      this.isLoading = false
    },
    async fetchDataResult(currentPage) {
      this.isLoadingResult = true
      await this.$store.dispatch("report/onFetchReportResult", { page: currentPage || 1, perPage: this.perPage })
      this.isLoadingResult = false
    },
  },
  async created() {
    await this.fetchData()
    await this.fetchDataResult()
  }

};
</script>
<style>
.el-table .cell {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
