<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <template slot="links">
        <sidebar-item :link="{
          name: 'ภาพรวมระบบ',
          path: '/dashboard',
          icon: 'ni ni-tv-2 text-primary',
        }">
        </sidebar-item>
        <sidebar-item :link="{
          name: 'เติมเงิน',
          path: '/payment',
          icon: 'ni ni-cart text-primary',
        }">
        </sidebar-item>
        <sidebar-item :link="{
          name: 'จัดการสินค้า',
          path: '/product',
          icon: 'ni ni-box-2 text-primary'
        }">
        </sidebar-item>
        <sidebar-item :link="{
          name: 'จัดการต้นทุน',
          path: '/invest',
          icon: 'ni ni-money-coins text-primary'
        }">

        </sidebar-item>
        <sidebar-item :link="{
          name: 'จัดการประกาศ',
          path: '/anounce',
          icon: 'ni ni-notification-70 text-primary'
        }">
        </sidebar-item>
        <sidebar-item :link="{
          name: 'จัดการหมวดหมู่',
          path: '/category',
          icon: 'ni ni-folder-17 text-primary'
        }">
        </sidebar-item>
        <sidebar-item :link="{
          name: 'จัดการแบนเนอร์',
          path: '/carousel',
          icon: 'ni ni-image text-primary'
        }">
        </sidebar-item>
        <sidebar-item :link="{
          name: 'จัดการการตลาด',
          path: '/marketing',
          icon: 'ni ni-key-25 text-primary'
        }">
        </sidebar-item>


        <sidebar-item :link="{
          name: 'จัดการแหล่งที่มา',
          path: '/source',
          icon: 'ni ni-world-2 text-primary'
        }">
        </sidebar-item>

        <sidebar-item :link="{
          name: 'จัดการรายการฝาก',
          path: '/deposit',
          icon: 'fa fa-university text-primary'
        }">
        </sidebar-item>
        <sidebar-item :link="{
          name: 'ประวัติการเติมเครดิต',
          path: '/credit',
          icon: 'ni ni-bullet-list-67 text-primary'
        }">

        </sidebar-item>
        <sidebar-item :link="{
          name: 'รายงานสถานะออเดอร์',
          path: '/report',
          icon: 'ni ni-basket text-primary'
        }">
        </sidebar-item>
        <sidebar-item :link="{
          name: 'จัดการการตั้งค่า',
          path: '/setting',
          icon: 'ni ni-settings text-primary'
        }">
        </sidebar-item>
      </template>

      <template slot="links-after">
        <hr class="my-3">
        <h6 class="navbar-heading p-0 text-muted">Documentation</h6>

        <b-nav class="navbar-nav mb-md-3">
          <b-nav-item href="https://www.creative-tim.com/learning-lab/bootstrap-vue/quick-start/argon-dashboard">
            <i class="ni ni-spaceship"></i>
            <b-nav-text class="p-0">Getting started</b-nav-text>
          </b-nav-item>
          <b-nav-item href="https://www.creative-tim.com/learning-lab/bootstrap-vue/colors/argon-dashboard">
            <i class="ni ni-palette"></i>
            <b-nav-text class="p-0">Foundation</b-nav-text>
          </b-nav-item>
          <b-nav-item href="https://www.creative-tim.com/learning-lab/bootstrap-vue/avatar/argon-dashboard">
            <i class="ni ni-ui-04"></i>
            <b-nav-text class="p-0">Components</b-nav-text>
          </b-nav-item>
        </b-nav>
      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import DashboardNavbar from './DashboardNavbar.vue';
import ContentFooter from './ContentFooter.vue';
import DashboardContent from './Content.vue';
import { FadeTransition } from 'vue2-transitions';

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent,
    FadeTransition
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith('Win');
      if (isWindows) {
        initScrollbar('sidenav');
      }
    }
  },
  mounted() {
    this.initScrollbar()
  }
};
</script>
<style lang="scss">

</style>
