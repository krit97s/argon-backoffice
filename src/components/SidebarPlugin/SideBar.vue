<template>
  <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
    <div class="container-fluid">

      <!--Toggler-->
      <navbar-toggle-button @click.native="showSidebar">

      </navbar-toggle-button>
      <router-link class="navbar-brand" to="/">
        <div class="d-flex align-items-center">
          <img src="../../../public/favicon.png" width="30px">
          <h1 class="font-weight-bold text-primary pl-1 pt-2">BACK OFFICE</h1>
        </div>

      </router-link>
      <slot name="mobile-right">
        <ul class="nav align-items-center d-md-none">
          <!-- <base-dropdown class="nav-item" menu-on-right tag="li" title-tag="a">
            <a slot="title-container" class="nav-link nav-link-icon" href="#" role="button" aria-haspopup="true"
              aria-expanded="false">
              <i class="ni ni-bell-55"></i>
            </a>

            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </base-dropdown> -->
          <base-dropdown class="nav-item" menu-on-right tag="li" title-tag="a">
            <a slot="title-container" class="nav-link" href="#" role="button">
              <div class="media align-items-center">
                <span class="avatar avatar-sm rounded-circle">
                  {{ user.name.charAt(0).toUpperCase() }}
                </span>
              </div>
            </a>

            <div class=" dropdown-header noti-title">
              <h6 class="text-overflow m-0"> {{ user.name }}</h6>
            </div>
            <!-- <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-single-02"></i>
              <span>My profile</span>
            </router-link>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-settings-gear-65"></i>
              <span>Settings</span>
            </router-link>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-calendar-grid-58"></i>
              <span>Activity</span>
            </router-link>
            <router-link to="/profile" class="dropdown-item">
              <i class="ni ni-support-16"></i>
              <span>Support</span>
            </router-link>
            <div class="dropdown-divider"></div> -->
            <a href="#!" class="dropdown-item" @click="$commit('auth/LOGOUT')">
              <i class="ni ni-user-run"></i>
              <span>Logout</span>
            </a>
          </base-dropdown>
        </ul>
      </slot>
      <slot></slot>
      <div v-show="$sidebar.showSidebar" class="navbar-collapse collapse show" id="sidenav-collapse-main">

        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-10 collapse-brand">
              <router-link to="/">
                  <h1 class="font-weight-bold text-primary pl-1 pt-2">BACK OFFICE</h1>
              </router-link>
            </div>
            <div class="col-2 collapse-close">
              <navbar-toggle-button @click.native="closeSidebar"></navbar-toggle-button>
            </div>
          </div>
        </div>

        <ul class="navbar-nav">
          <slot name="links">
          </slot>
        </ul>
        <!--Divider-->
        <!--Heading-->
        <!-- <h6 class="navbar-heading text-muted">Documentation</h6> -->
        <!--Navigation-->
        <ul class="navbar-nav mb-md-3">
          <li class="nav-item" style="cursor:pointer" v-if="user">
            <a class="nav-link" @click="$store.commit('auth/LOGOUT')">
              <i class="ni ni-button-power"></i> ออกจากระบบ
            </a>
          </li>
          <!-- <li class="nav-item">
                        <a class="nav-link"
                           href="https://www.creative-tim.com/learning-lab/bootstrap-vue/colors/argon-dashboard">
                            <i class="ni ni-palette"></i> Foundation
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="https://www.creative-tim.com/learning-lab/bootstrap-vue/alerts/argon-dashboard">
                            <i class="ni ni-ui-04"></i> Components
                        </a>
                    </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import NavbarToggleButton from '@/components/NavbarToggleButton'
import { mapState } from 'vuex';
import Avataaars from 'vuejs-avataaars'
export default {
  name: 'sidebar',
  components: {
    Avataaars,
    NavbarToggleButton
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user
    }),
  },
  props: {
    logo: {
      type: String,
      default: 'img/brand/green.png',
      description: 'Sidebar app logo'
    },
    autoClose: {
      type: Boolean,
      default: true,
      description: 'Whether sidebar should autoclose on mobile when clicking an item'
    }
  },
  provide() {
    return {
      autoClose: this.autoClose
    };
  },
  methods: {
    closeSidebar() {
      this.$sidebar.displaySidebar(false)
    },
    showSidebar() {
      this.$sidebar.displaySidebar(true)
    }
  },
  beforeDestroy() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = false;
    }
  }
};
</script>
