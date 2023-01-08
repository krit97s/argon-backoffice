<template>
  <card>
    <b-row align-v="center" slot="header">
      <b-col cols="8">
        <h3 class="mb-0">เพิ่มสินค้า</h3>
      </b-col>
      <!-- <b-col cols="4" class="text-right">
        <a href="#!" class="btn btn-sm btn-primary">Settings</a>
      </b-col> -->
    </b-row>

    <b-form @submit.prevent="updateProfile">
      <h6 class="heading-small text-muted mb-4">ข้อมูลสินค้า</h6>
      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input type="text" label="ชื่อสินค้า" placeholder="Valorant, Pubg, Free Fire, etc">
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input type="text" label="หมวดหมู่สินค้า" placeholder="gtopup">
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input type="text" label="รหัสบริษัท" placeholder="VALORAND-D">
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input type="number" label="ต้นทุุนส่วนลด (%)">
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input type="text" label="รูปภาพ" placeholder="กรุณาวางลิงค์รูปภาพ">
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input type="text" label="รูปภาพวิธีการเช็คข้อมูลตัวละคร" placeholder="กรุณาวางลิงค์รูปภาพ">
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input type="text" label="รูปไอค่อน" placeholder="กรุณาวางลิงค์รูปภาพ">
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input type="text" label="เซฺิฟเวอร์ (กรณีไม่มีปล่อยว่าง)"
              placeholder="asia,urope * ชื่อเซิฟเวอร์ขั้นด้วย ,">
            </base-input>
          </b-col>
          <b-col lg="12">
            <b-form-group label="คำอธิบาย" label-class="form-control-label" class="mb-0"
              label-for="about-form-textaria">
              <b-form-textarea rows="4" value="A beautiful premium dashboard for BootstrapVue." id="about-form-textaria"
                placeholder="A few words about you ..."></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
      </div>
    </b-form>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        company: 'Creative Code Inc.',
        username: 'michael23',
        email: '',
        firstName: 'Mike',
        lastName: 'Andrew',
        address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
        city: 'New York',
        country: 'USA',
        postalCode: '',
        aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>
<style>

</style>
