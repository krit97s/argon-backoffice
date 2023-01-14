<template>

  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center">
        <b-col class="d-flex align-items-center">
          <h3 class="mb-0">รายการฝาก</h3>
          <base-button class="ml-auto" type="primary" size="sm"
            @click="$emit('changePage', meta.currentPage)">&#8634;</base-button>
        </b-col>
      </b-row>
    </template>

    <el-table class="table-responsive table text-nowrap" :data="tableData" header-row-class-name="thead-light">
      <el-table-column label="ลำดับ" prop="page" align="center">
        <template v-slot="{ row }">
          <div class="font-weight-600 text-primary text-nowrap">{{ tableData.indexOf(row) + 1 }}</div>
        </template>
      </el-table-column>
      <el-table-column label="ธนาคาร" prop="type" min-width="100px">
        <template v-slot="{ row }">
          <span class="avatar avatar-sm rounded-circle">
            <img :src="showImg(row.type)">
          </span>
        </template>
      </el-table-column>
      <el-table-column label="จากเลขบัญชี" prop="accNo" min-width="150px">

      </el-table-column>
      <el-table-column label="จำนวน" prop="amount" min-width="90px">
        <template v-slot="{ row }">
          {{ row.amount.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 }) }}
        </template>
      </el-table-column>
      <el-table-column label="วันเวลา" prop="amount" min-width="180px" align="center">
        <template v-slot="{ row }">
          {{ row.date }}
        </template>
      </el-table-column>
      <el-table-column label="status" min-width="130px" prop="status" align="center">
        <template v-slot="{ row }">
          <b-badge pill :variant="row.status == 0 ? 'primary' : row.status == 1 ? 'success' : 'danger'"> {{
            row.status
              == 0 ? 'รอดำเนินการ' : row.status == 1 ? 'สำเร็จ' : 'ยกเลิก'
          }}</b-badge>
        </template>
      </el-table-column>
      <!-- <el-table-column label="action" prop="status" align="center" min-width="150px">
        <template v-slot="{ row }">
          <div class="text-center">
            <base-button type="primary" size="sm"
              @click="$router.push(`/editcategory?id=${row.id}`)">แก้ไข</base-button>
            <base-button type="danger" size="sm" @click="removeOptionById(row.id)">ลบ</base-button>
          </div>
        </template>
      </el-table-column> -->
    </el-table>
    <b-pagination class="mt-3 mr-3" :disabled="isLoading" @input="$emit('changePage',meta.currentPage)" v-model="meta.currentPage"
      :per-page="perPage" :total-rows="meta.totalLength" align="right"></b-pagination>
  </b-card>
</template>
<script>
import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown } from 'element-ui'
export default {
  name: 'page-visits-table',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
  },
  props: {
    tableData: {
      type: Array,
      require: true
    },
    meta: {
      type: Object,
    },
    perPage: {
      type: Number,
    },
    isLoading: {
      type: Boolean,
    }
  },
  methods: {
    showImg(type) {
      switch (type) {
        case 'BAAC':
          return require('@/assets/bankImg/BAAC.png')
        case 'BBL':
          return require('@/assets/bankImg/BBL.png')
        case 'CIMB':
          return require('@/assets/bankImg/CIMB.png')
        case 'GHB':
          return require('@/assets/bankImg/GHB.png')
        case 'GSB':
          return require('@/assets/bankImg/GSB.png')
        case 'ICBC':
          return require('@/assets/bankImg/ICBC.png')
        case 'KBANK':
          return require('@/assets/bankImg/KBANK.png')
        case 'KK':
          return require('@/assets/bankImg/KK.png')
        case 'KTB':
          return require('@/assets/bankImg/KTB.png')
        case 'LHBANK':
          return require('@/assets/bankImg/LHBANK.png')
        case 'MHCB':
          return require('@/assets/bankImg/MHCB.png')
        case 'SCB':
          return require('@/assets/bankImg/SCB.png')
        case 'SMBC':
          return require('@/assets/bankImg/SMBC.png')
        case 'TBANK':
          return require('@/assets/bankImg/TBANK.png')
        case 'TCRB':
          return require('@/assets/bankImg/TCRB.png')
        case 'TISCO':
          return require('@/assets/bankImg/TISCO.png')
        case 'TMB':
          return require('@/assets/bankImg/TMB.png')
        case 'TSCO':
          return require('@/assets/bankImg/TSCO.png')
        case 'TTB':
          return require('@/assets/bankImg/TTB.png')
        case 'UOB':
          return require('@/assets/bankImg/UOB.png')
        default:
          break;
      }
    }
  }
}
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
