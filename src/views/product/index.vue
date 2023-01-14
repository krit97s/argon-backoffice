<template>
  <card header-classes="bg-transparent">
    <div class="d-flex">
      <h3 slot="header" class="mb-0">รายการสินค้า</h3>
      <base-button size="sm" class="ml-auto" type="primary"
        @click="$router.push(`/addproduct`)">เพิ่มสินค้า</base-button>
    </div>
    <b-row class="icon-examples" v-if="items.length">
      <b-col lg="3" md="12" v-for="(item, index) in items" :key="index" class="d-flex" style="position: relative;">
        <button type="button" class="btn-icon-clipboard" @click="$router.push(`/editproduct?id=${item.id}`)">
          <div class="d-flex">
            <div> <img :src="item.nav_icon" width="30px" style="border-radius:5px;" />
              <span class="text-nowrap">{{ item.name }}</span>
            </div>
          </div>
        </button>
        <div class="ml-auto" style="position:absolute; right:0; top:35px;">
          <b-form-checkbox v-model="item.enable" @change="onChangeStatus(item)" name="check-button-product-enable" switch>
          </b-form-checkbox>
        </div>
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col lg="3" md="12" v-for="(item, index) in 16" :key="index">
        <Skeleton height="70px" />
      </b-col>
    </b-row>
  </card>
</template>
<script>
import { Skeleton } from 'vue-loading-skeleton';
import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown } from 'element-ui'
export default {
  name: 'productTable',
  components: {
    Skeleton,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
  },
  props: {
    items: {
      type: Array,
      require: true
    }
  },
  methods: {
    async onChangeStatus(item) {
     let payload = JSON.parse(JSON.stringify(item))
      const response = await this.$store.dispatch("product/updateProduct", payload)
      if (response.status) {
        await this.$notify({
          title: 'สำเร็จ !',
          text: response.response.msg,
          type: 'success',
        });
      } else {
        this.$notify({
          title: 'ล้มเหลว !',
          text: response.response.msg,
          type: 'error',
        });
      }
    }
  },
  data() {
    return {

    }
  }
}
</script>
<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
