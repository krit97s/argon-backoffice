<template>

  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center">
        <b-col class="d-flex align-items-center">
          <h3 class="mb-0">จัดการตั้งค่า</h3>
          <base-button class="ml-auto" type="primary" size="sm"
            @click="$emit('changePage', meta.currentPage)">&#8634;</base-button>
          <!-- <base-button size="sm" type="primary" @click="$router.push(`/addanounce`)">เพิ่มข้อมูล</base-button> -->
        </b-col>
      </b-row>
    </template>

    <el-table class="table-responsive table text-nowrap" :data="tableData" header-row-class-name="thead-light">
      <el-table-column label="ลำดับ" prop="page" align="center">
        <template v-slot="{ row }">
          <div class="font-weight-600 text-primary text-nowrap">{{ tableData.indexOf(row) + 1 }}</div>
        </template>
      </el-table-column>
      <el-table-column label="ประเภท" prop="type" min-width="150px">
        <template v-slot="{ row }">
          {{ row.type }}
        </template>
      </el-table-column>
      <el-table-column label="สถานะ" prop="enable">
        <template v-slot="{ row }">
          <b-form-checkbox @change="submitForm(row)" :disabled="row.type === 'QR_APP' ? true : false"
            name="check-button" v-model="row.enable" switch>
          </b-form-checkbox>
        </template>
      </el-table-column>
      <el-table-column label="action" prop="status" align="center" min-width="150px">
        <template v-slot="{ row }">
          <div class="text-center">
            <base-button type="primary" size="sm" @click="$router.push(`/editsetting?id=${row.id}`)">แก้ไข</base-button>
            <!-- <base-button type="danger" size="sm" @click="removeOptionById(row.id)">ลบ</base-button> -->
          </div>
        </template>
      </el-table-column>
    </el-table>
    <b-pagination class="mt-3 mr-3" :disabled="isLoading" @input="$emit('changePage',meta.currentPage)"
      v-model="meta.currentPage" :per-page="perPage" :total-rows="meta.totalLength" align="right"></b-pagination>
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
    async submitForm(item) {
      let payload = JSON.parse(JSON.stringify(item))
      const response = await this.$store.dispatch("setting/updateSetting", payload)
      if (response.status) {
        await this.$notify({
          title: 'สำเร็จ !',
          text: response.response.msg,
          type: 'success',
        });
        await this.$store.dispatch("setting/onFetchSetting", { page: 1, perPage: this.perPage })
      } else {
        this.$notify({
          title: 'ล้มเหลว !',
          text: response.response.msg,
          type: 'error',
        });
      }
    },
  }
}
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
