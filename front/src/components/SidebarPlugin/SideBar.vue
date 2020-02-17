<template>
  <div class="sidebar"
       :data-background-color="backgroundColor"
       :data-active-color="activeColor">
    <!--
            Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black | darkblue"
            Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
        -->
    <!-- -->
    <div class="sidebar-wrapper" id="style-3">
      <div class="logo">
        <a href="#" class="simple-text">
            <div class="logo-img">
                <img src="data:image/jpeg;base64,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" alt="">
            </div>
          Polynetwork Angers
        </a>
      </div>
      <slot>

      </slot>
      <ul class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <slot name="links">
          <sidebar-link v-for="(link,index) in sidebarLinks"
                        :key="index"
                        :to="link.path"
                        :name="link.name"
                        :icon="link.icon">
          </sidebar-link>
        </slot>
      </ul>
      <moving-arrow :move-y="arrowMovePx">

      </moving-arrow>
    </div>
  </div>
</template>
<script>
import MovingArrow from "./MovingArrow.vue";
import SidebarLink from "./SidebarLink";
export default {
  props: {
    title: {
      type: String,
      default: "Paper Dashboard"
    },
    backgroundColor: {
      type: String,
      default: "black",
      validator: value => {
        let acceptedValues = ["white", "black", "darkblue"];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    activeColor: {
      type: String,
      default: "success",
      validator: value => {
        let acceptedValues = [
          "primary",
          "info",
          "success",
          "warning",
          "danger"
        ];
        return acceptedValues.indexOf(value) !== -1;
      }
    },
    sidebarLinks: {
      type: Array,
      default: () => []
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      autoClose: this.autoClose,
      addLink: this.addLink,
      removeLink: this.removeLink
    };
  },
  components: {
    MovingArrow,
    SidebarLink
  },
  computed: {
    /**
     * Styles to animate the arrow near the current active sidebar link
     * @returns {{transform: string}}
     */
    arrowMovePx() {
      return this.linkHeight * this.activeLinkIndex;
    }
  },
  data() {
    return {
      linkHeight: 65,
      activeLinkIndex: 0,
      windowWidth: 0,
      isWindows: false,
      hasAutoHeight: false,
      links: []
    };
  },
  methods: {
    findActiveLink() {
      this.links.forEach((link, index) => {
        if (link.isActive()) {
          this.activeLinkIndex = index;
        }
      });
    },
    addLink(link) {
      const index = this.$slots.links.indexOf(link.$vnode);
      this.links.splice(index, 0, link);
    },
    removeLink(link) {
      const index = this.links.indexOf(link);
      if (index > -1) {
        this.links.splice(index, 1);
      }
    }
  },
  mounted() {
    this.$watch("$route", this.findActiveLink, {
      immediate: true
    });
  }
};
</script>
<style>
</style>
