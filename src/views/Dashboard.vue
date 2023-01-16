<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-primary">
      <!-- Card stats -->
      <div class="d-flex flex-sm-row flex-column mb-2 mb-sm-0">
        <div class="d-sm-flex">
          <base-input type="month" class="w-sm-100" input-classes="form-control-sm" v-model="startDate" id="example-month-input" />
          <base-input type="month" input-classes="form-control-sm w-sm-100" class="ml-1 " v-model="endDate"
            id="example-month-input" />
        </div>
        <div class="ml-auto">
          <base-button type="primary" size="sm" @click="currentMonth()">เดือนนี้</base-button>
          <base-button type="primary" size="sm" @click="previousMonth()">เดือนที่แล้ว</base-button>
        </div>
      </div>

      <b-row v-if="!loadingStat">
        <b-col xl="3" md="6">
          <stats-card title="กำไร" type="gradient-green" bindColor
            :sub-title="overAll.totalProfit.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })"
            icon="ni ni-money-coins" class="mb-4">
            <template slot="footer">
              <!-- <div class="text-success mr-2">3.48%</div> -->
              <div class="text-nowrap text-right">{{ moment(overAll.date).format('MM/YYYY') }}</div>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="ยอดเติมเงิน" type="gradient-purple"
            :sub-title="overAll.netBalance.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })"
            icon="ni ni-cart" class="mb-4">
            <template slot="footer">
              <!-- <div class="text-success mr-2">12.18%</div> -->
              <div class="text-nowrap text-right">{{ moment(overAll.date).format('MM/YYYY') }}</div>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="ยอดลงทุน" type="gradient-primary"
            :sub-title="overAll.investBalance.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) || '0.00'"
            icon="ni ni-chart-pie-35" class="mb-4">
            <template slot="footer">
              <!-- <div class="text-danger mr-2">5.72%</div> -->
              <div class="text-nowrap text-right">{{ moment(overAll.date).format('MM/YYYY') }}</div>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="เคริตคงเหลือ" type="gradient-info"
            :sub-title="overAll.creditBalance.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })"
            icon="ni ni-credit-card" class="mb-4">
            <template slot="footer">
              <!-- <div class="text-success mr-2">523</div> -->
              <div class="text-nowrap ml-auto text-right">{{ moment(overAll.date).format('MM/YYYY') }}</div>
            </template>
          </stats-card>
        </b-col>
      </b-row>
      <b-row v-else>
        <b-col xl="3" md="6">
          <Skeleton height="128px" />
        </b-col>
        <b-col xl="3" md="6">
          <Skeleton height="128px" />
        </b-col>
        <b-col xl="3" md="6">
          <Skeleton height="128px" />
        </b-col>
        <b-col xl="3" md="6">
          <Skeleton height="128px" />
        </b-col>
      </b-row>
    </base-header>
    <!--Charts-->
    <b-container fluid class="mt--7">
      <b-row>
        <b-col xl="8" class="mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6>
                <h5 class="h3 text-white mb-0">Sales value</h5>
              </b-col>
              <!-- <b-col>
                <b-nav class="nav-pills justify-content-end">
                  <b-nav-item class="mr-2 mr-md-0" :active="bigLineChart.activeIndex === 0" link-classes="py-2 px-3"
                    @click.prevent="initBigChart(0)">
                    <span class="d-none d-md-block">Month</span>
                    <span class="d-md-none">M</span>
                  </b-nav-item>
                  <b-nav-item link-classes="py-2 px-3" :active="bigLineChart.activeIndex === 1"
                    @click.prevent="initBigChart(1)">
                    <span class="d-none d-md-block">Week</span>
                    <span class="d-md-none">W</span>
                  </b-nav-item>
                </b-nav>
              </b-col> -->
            </b-row>
            <line-chart :height="350" ref="bigChart" :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions">
            </line-chart>
          </card>
        </b-col>

        <b-col xl="4" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                <h5 class="h3 mb-0">Total orders</h5>
              </b-col>
            </b-row>

            <bar-chart :height="350" ref="barChart" :chart-data="redBarChart.chartData">
            </bar-chart>
          </card>
        </b-col>
      </b-row>
      <!-- End charts-->

      <!--Tables-->
      <b-row class="mt-5">
        <b-col cols="12" class="mb-5 mb-xl-0">
          <page-visits-table :isLoading="isLoadingOrder" :tableData="orderList" :meta="orderMeta"
            :perPage="perPageOrder" @changePage="changePageOrder($event)"></page-visits-table>
        </b-col>
        <b-col cols="12" class="my-3 mb-xl-0">
          <depositTable :isLoading="isLoadingDeposit" :tableData="deposit" :meta="depositMeta" :perPage="perPageDeposit"
            @changePage="changePageDeposit($event)"></depositTable>
        </b-col>
        <!-- <b-col xl="4" class="mb-5 mb-xl-0">
          <social-traffic-table></social-traffic-table>
        </b-col> -->
      </b-row>
      <!--End tables-->
    </b-container>

  </div>
</template>
<script>
// Charts
import moment from "moment"
import { Skeleton } from 'vue-loading-skeleton';
import { mapState } from "vuex"
import * as chartConfigs from '@/components/Charts/config';
import LineChart from '@/components/Charts/LineChart';
import BarChart from '@/components/Charts/BarChart';
import { BSkeletonImg } from "bootstrap-vue"
// Components
import BaseProgress from '@/components/BaseProgress';
import StatsCard from '@/components/Cards/StatsCard';

// Tables
import SocialTrafficTable from './Dashboard/SocialTrafficTable';
import PageVisitsTable from './Dashboard/PageVisitsTable';
import depositTable from './deposit/PageVisitsTable.vue';

export default {
  components: {
    depositTable,
    Skeleton,
    LineChart,
    BarChart,
    BaseProgress,
    StatsCard,
    PageVisitsTable,
    SocialTrafficTable
  },
  computed: {
    ...mapState({
      orderMeta: (state) => state.order.orderMeta,
      overAll: (state) => state.dashboard.overall,
      orderList: (state) => state.order.orderList,
      deposit: (state) => state.deposit.depositList,
      depositMeta: (state) => state.deposit.depositMeta,
    })
  },
  data() {
    return {
      isLoadingOrder: false,
      isLoadingDeposit: false,
      perPageOrder: 10,
      perPageDeposit: 5,
      loadingStat: false,
      date: new moment().format('YYYY-MM'),
      startDate: new moment().format('YYYY-MM'),
      endDate: new moment().format('YYYY-MM'),
      bigLineChart: {
        allData: [
          [0, 20, 10, 30, 15, 40, 20, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40]
        ],
        activeIndex: 0,
        chartData: {
          datasets: [
            {
              label: 'Performance',
              data: [0, 20, 10, 30, 15, 40, 20, 50, 60],
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
      redBarChart: {
        chartData: {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Sales',
            data: [25, 20, 30, 22, 17, 29]
          }]
        },
        extraOptions: chartConfigs.blueChartOptions
      }
    };
  },
  methods: {
    changePageOrder(currentPage) {
      this.fetchOrder(currentPage)
    },
    changePageDeposit(currentPage) {
      this.fetchDeposit(currentPage)
    },
    async fetchDeposit(currentPage) {
      this.isLoadingDeposit = true
      await this.$store.dispatch("deposit/onFetchDeposit", { page: currentPage || 1, perPage: this.perPageDeposit })
      this.isLoadingDeposit = false

    },
    async fetchOverAll() {
      this.loadingStat = true
      this.loadingOrder = true
      this.$store.dispatch("dashboard/onFetchOverAll", this.date).then(rs => {
        this.loadingStat = false
      })
      this.$store.dispatch("order/onFetchOrder", { page: 1, perPage: this.perPageOrder, date: this.date }).then(rs => {
        this.loadingOrder = false
      })
    },
    fetchOrder(currentPage) {
      this.isLoadingOrder = true
      this.$store.dispatch("order/onFetchOrder", { page: currentPage, perPage: this.perPageOrder, date: this.date }).then(rs => {
        this.loadingOrder = false
        this.isLoadingOrder = false
      })
    },
    previousMonth() {
      this.date = new moment(this.date).subtract(1, 'months').format('YYYY-MM');
      this.fetchOverAll()
    },
    currentMonth() {
      this.date = new moment().format('YYYY-MM')
      this.fetchOverAll()
    },
    moment,
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            label: 'Performance',
            data: this.bigLineChart.allData[index]
          }
        ],
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    }
  },
  mounted() {
    this.initBigChart(0);
  },
  async created() {
    this.fetchOverAll()
    this.fetchDeposit()
  }

};
</script>
<style>
.el-table .cell {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
