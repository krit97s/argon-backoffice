<template>
  <card>
    <b-row align-v="center" slot="header">
      <b-col cols="8" class="d-flex align-items-center">
        <img :src="product.nav_icon" width="30px" style="border-radius: 5px;" alt="">
        <h3 class="mb-0 ml-2">แก้ไขสินค้า</h3>
      </b-col>
      <b-col cols="4" class="text-right">
        <base-button @click="removeProduct(product.id)" type="danger" size="sm"><i class="fa fa-trash "
            aria-hidden="true"></i></base-button>
      </b-col>
    </b-row>
    <validation-observer v-slot="{ handleSubmit }" ref="formValidator">
      <b-form @submit.prevent="handleSubmit(submitForm)">
        <h6 class="heading-small text-muted mb-4">ข้อมูลสินค้า</h6>
        <div class="pl-lg-4">
          <b-row>
            <b-col lg="6">
              <base-input :rules="{ required: true }" name="Name" label="ชื่อสินค้า"
                placeholder="Valorant, Pubg, Free Fire, etc" v-model="product.name">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input label="หมวดหมู่สินค้า" :rules="{ required: true }" name="Category">
                <select class="form-control" v-model="product.category">
                  <option value="2">เติมเกม</option>
                </select>
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input type="text" :rules="{ required: true }" name="Company Code" label="รหัสบริษัท"
                placeholder="VALORAND-D" v-model="product.pay_to_company">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input type="number" step="any" :rules="{ required: true }" name="Cost Discount"
                label="ต้นทุุนส่วนลด (%)" v-model="product.cost_discount">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input type="text" :rules="{ required: true }" name="Image" label="รูปภาพ"
                placeholder="กรุณาวางลิงค์รูปภาพ" v-model="product.image">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input type="text" label="รูปภาพวิธีการเช็คข้อมูลตัวละคร" :rules="{ required: true }"
                name="How to Image" placeholder="กรุณาวางลิงค์รูปภาพ" v-model="product.howto_image">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input type="text" :rules="{ required: true }" name="Image Icon" label="รูปไอค่อน"
                placeholder="กรุณาวางลิงค์รูปภาพ" v-model="product.nav_icon">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input type="text" label="เซฺิฟเวอร์ (กรณีไม่มี ให้ปล่อยว่าง)" name="Server" v-model="product.server"
                placeholder="asia,urope * ชื่อเซิฟเวอร์ขั้นด้วย ,">
              </base-input>
            </b-col>

            <b-col lg="12" class="px-lg-5 mb-4" v-if="optionsList.length">
              <div class="d-flex align-items-center">
                <h3>ตัวเลือกสินค้า</h3>
                <base-button v-b-modal.modal-1 class="ml-auto" type="primary" size="sm"><i class="fa fa-plus "
                    aria-hidden="true"></i>เพิ่มตัวเลือก</base-button>
              </div>
              <hr />
              <b-row class="align-items-center justify-content-center" v-for="(option, index) in optionsList "
                :key="index">
                <b-col cols="12" lg="3"> <base-input type="text" label="ชื่อ" :rules="{ required: true }" name="Name"
                    placeholder="2,400 Points , Battle Pass" v-model="option.name">
                  </base-input></b-col>
                <b-col cols="12" lg="3"> <base-input type="text" label="ราคา " :rules="{ required: true }" name="Price"
                    placeholder="100,200,300" v-model="option.price">
                  </base-input></b-col>
                <b-col cols="12" lg="3"> <base-input type="number" step="any" label="ส่วนลด (%)"
                    :rules="{ required: true }" name="Discount" placeholder="กรุณาวางลิงค์รูปภาพ" v-model="option.dis">
                  </base-input></b-col>
                <b-col cols="12" lg="2" class="d-flex justify-content-end align-items-lg-center">
                  <b-form-checkbox name="check-button" v-model="option.enable" switch>
                  </b-form-checkbox>
                  <base-button type="danger" size="sm" class="px-2" @click="removeOptionById(option.id)"><i
                      class="fa fa-trash " aria-hidden="true"></i></base-button></b-col>
              </b-row>
              <b-row v-if="optionsList.length" class="align-items-center justify-content-center mt-3">
                <b-col cols="12" lg='11'>
                  <base-button block type="success" @click="updateOption()">บันทึก</base-button>
                </b-col>
              </b-row>
              <hr />
            </b-col>
            <b-col lg="12" v-else>
              <base-button v-b-modal.modal-1 class="mb-4" type="primary" outline block><i class="fa fa-plus "
                  aria-hidden="true"></i>เพิ่มตัวเลือก</base-button>
            </b-col>
            <b-col lg="12">
              <b-form-checkbox name="check-button" v-model="product.isSpecial" switch>
                สินค้าพิเศษ
              </b-form-checkbox>
              <b-form-checkbox name="check-button" v-model="product.isWait" switch>
                เติมแล้วไม่เข้าทันที (ต้องรอ)
              </b-form-checkbox>

            </b-col>
            <b-col lg="12" class="mt-3">
              <b-form-group label="คำอธิบาย" label-class="form-control-label" class="mb-0"
                label-for="about-form-textaria">
                <b-form-textarea rows="4" :rules="{ required: true }" name="Description"
                  v-model="product.description"></b-form-textarea>
              </b-form-group>
            </b-col>
            <b-col lg="12" class="mt-3 text-right">
              <base-button type="success" nativeType="submit" size="larged">ยืนยัน</base-button>
              <!-- <base-button type="danger" size="larged" @click="resetForm()">ล้างค่า</base-button> -->
            </b-col>
          </b-row>
        </div>
      </b-form>
    </validation-observer>
    <div>
      <b-modal id="modal-1" title="เพิ่มตัวเลือกสินค้า" size="xl" cancel-only @ok="handleOk" @hidden="options = []"
        :ok-disabled="disableOkBtn">
        <b-form ref="form" @submit.stop.prevent="confirmAddOption">
          <b-row class="align-items-center my-1" v-for="(option, index) in options " :key="index">
            <b-col cols="12" lg="3"> <base-input type="text" label="ชื่อ" required name="Name"
                placeholder="2,400 Points , Battle Pass" v-model="option.name">
              </base-input></b-col>
            <b-col cols="12" lg="4"> <base-input type="text" label="ราคา " required name="Price"
                placeholder="100,200,300" v-model="option.price">
              </base-input></b-col>
            <b-col cols="12" lg="4"> <base-input type="number" step="any" label="ส่วนลด (%)" required name="Discount"
                placeholder="กรุณาวางลิงค์รูปภาพ" v-model="option.dis">
              </base-input></b-col>
            <b-col cols="12" lg="1"><base-button block type="danger" @click="removeOption(index)"><i
                  class="fa fa-trash " aria-hidden="true"></i></base-button></b-col>
          </b-row>
        </b-form>
        <base-button outline type="secondary" class="text-primary mt-3" @click="addOption()" block>+ Add</base-button>
      </b-modal>
    </div>
  </card>
</template>
<script>
import { mapState } from 'vuex';
export default {
  async created() {
    this.fetchProductById()
    this.fetchOptionsById()
  },
  data() {
    return {
      options: [],
    }
  },
  computed: {
    disableOkBtn() {
      return !this.options.length ? true : false
    },
    ...mapState({
      optionsList: (state) => state.product.options,
      product: (state) => state.product.product,
    })
  },
  methods: {
    async fetchProductById() {
      await this.$store.dispatch("product/onFetchProductById", this.$route.query.id)
    },
    async fetchOptionsById() {
      await this.$store.dispatch("product/onFetchOptionById", this.$route.query.id)
    },
    async updateOption() {
      const payload = {
        options: this.optionsList
      }
      const response = await this.$store.dispatch("product/updateOption", payload)
      if (response.status) {
        await this.$notify({
          title: 'สำเร็จ !',
          text: response.response.msg,
          type: 'success',
        });
        this.fetchOptionsById();
      } else {
        this.$notify({
          title: 'ล้มเหลว !',
          text: response.response.msg,
          type: 'error',
        });
      }
    },
    async removeOptionById(id) {
      const confirm = window.confirm("ยืนยันการทำรายการ ?");
      if (confirm) {
        const response = await this.$store.dispatch("product/removeOption", id)
        if (response.status) {
          await this.$notify({
            title: 'สำเร็จ !',
            text: response.response.msg,
            type: 'success',
          });
          this.fetchOptionsById();
        } else {
          this.$notify({
            title: 'ล้มเหลว !',
            text: response.response.msg,
            type: 'error',
          });
        }
      }
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault()
      // Trigger submit handler
      this.confirmAddOption()
    },
    async confirmAddOption() {
      if (this.$refs.form.checkValidity()) {
        const payload = {
          options: this.options
        }
        const response = await this.$store.dispatch("product/addOption", payload)
        if (response.status) {
          await this.$notify({
            title: 'สำเร็จ !',
            text: response.response.msg,
            type: 'success',
          });
          this.fetchOptionsById()
          this.$nextTick(() => {
            this.$bvModal.hide('modal-1')
          })
        } else {
          this.$notify({
            title: 'ล้มเหลว !',
            text: response.response.msg,
            type: 'error',
          });
        }
      }
    },
    removeOption(index) {
      this.options.splice(index, 1)
    },
    addOption() {
      this.options.push({ product_id: this.product.id, name: '', price: '', dis: 0 })
    },
    async removeProduct(id) {
      const confirm = window.confirm("ยืนยันการทำรายการ ?");
      if (confirm) {
        const response = await this.$store.dispatch("product/removeProduct", id)
        if (response.status) {
          await this.$notify({
            title: 'สำเร็จ !',
            text: response.response.msg,
            type: 'success',
          });
          this.$router.push('/product')
        } else {
          this.$notify({
            title: 'ล้มเหลว !',
            text: response.response.msg,
            type: 'error',
          });
        }
      }
    },
    async submitForm() {
      const response = await this.$store.dispatch("product/updateProduct", this.product)
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
    },
  }
};
</script>
<style>

</style>
