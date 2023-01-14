<template>
  <card>
    <b-row align-v="center" slot="header">
      <b-col cols="12" class="d-flex align-items-center">
        <h3 class="mb-0">เพิ่มสินค้า</h3>
        <a class="ml-auto" href="https://www.wepay.in.th/comp_export.php" target="_blank">คู่มือสินค้า</a>
      </b-col>
      <!-- <b-col cols="4" class="text-right">
        <a href="#!" class="btn btn-sm btn-primary">Settings</a>
      </b-col> -->
    </b-row>
    <validation-observer v-slot="{ handleSubmit }" ref="formValidator">
      <b-form @submit.prevent="handleSubmit(submitForm)">
        <h6 class="heading-small text-muted mb-4">ข้อมูลสินค้า</h6>
        <div class="pl-lg-4">
          <b-row>
            <b-col lg="6">
              <base-input :rules="{ required: true }" name="Name" label="ชื่อสินค้า"
                placeholder="Valorant, Pubg, Free Fire, etc" v-model="form.name">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input label="หมวดหมู่สินค้า" :rules="{ required: true }" name="Category">
                <select class="form-control" v-model="form.category">
                  <option value="2">เติมเกม</option>
                </select>
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input type="text" :rules="{ required: true }" name="Company Code" label="รหัสบริษัท"
                placeholder="VALORAND-D" v-model="form.pay_to_company">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input type="number" step="any" :rules="{ required: true }" name="Cost Discount"
                label="ต้นทุุนส่วนลด (%)" v-model="form.cost_discount">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input type="text" :rules="{ required: true }" name="Image" label="รูปภาพ"
                placeholder="กรุณาวางลิงค์รูปภาพ" v-model="form.image">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input type="text" label="รูปภาพวิธีการเช็คข้อมูลตัวละคร" :rules="{ required: true }"
                name="How to Image" placeholder="กรุณาวางลิงค์รูปภาพ" v-model="form.howto_image">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input type="text" :rules="{ required: true }" name="Image Icon" label="รูปไอค่อน"
                placeholder="กรุณาวางลิงค์รูปภาพ" v-model="form.nav_icon">
              </base-input>
            </b-col>
            <b-col lg="6">
              <base-input type="text" label="เซฺิฟเวอร์ (กรณีไม่มี ให้ปล่อยว่าง)" name="Server" v-model="form.server"
                placeholder="asia,urope * ชื่อเซิฟเวอร์ขั้นด้วย ,">
              </base-input>
            </b-col>
            <b-col lg="12">
              <b-form-checkbox name="check-button-special" v-model="form.isSpecial" switch>
                สินค้าพิเศษ
              </b-form-checkbox>
              <b-form-checkbox name="check-button-no-wait" v-model="form.isWait" switch>
                เติมแล้วไม่เข้าทันที (ต้องรอ)
              </b-form-checkbox>

            </b-col>
            <b-col lg="12" class="mt-3">
              <b-form-group label="คำอธิบาย" label-class="form-control-label" class="mb-0"
                label-for="about-form-textaria">
                <b-form-textarea rows="4" :rules="{ required: true }" name="Description"
                  v-model="form.description"></b-form-textarea>
              </b-form-group>
            </b-col>
            <b-col lg="12" class="mt-3 text-right">
              <base-button type="success" nativeType="submit" size="larged">ยืนยัน</base-button>
              <base-button type="danger" size="larged" @click="resetForm()">ล้างค่า</base-button>
            </b-col>
          </b-row>
        </div>

      </b-form>
    </validation-observer>
  </card>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        category: '',
        type: 'gtopup',
        pay_to_company: '',
        cost_discount: '',
        isSpecial: false,
        isWait: false,
        image: '',
        nav_icon: '',
        howto_image: '',
        server: '',
        description: '',
      }
    };
  },
  methods: {
    resetForm() {
      this.form = {
        name: '',
        category: '',
        type: 'gtopup',
        pay_to_company: '',
        cost_discount: '',
        isSpecial: false,
        isWait: false,
        image: '',
        nav_icon: '',
        howto_image: '',
        server: '',
        description: '',
      }
    },
    async submitForm() {
      const response = await this.$store.dispatch("product/addProduct", this.form)
      if (response.status) {
        await this.$notify({
          title: 'สำเร็จ !',
          text: response.response.msg,
          type: 'success',
        });
        this.$router.push("/product")
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
