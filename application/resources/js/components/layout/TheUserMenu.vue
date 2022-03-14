<template>
  <label class="theUserMenu" v-on-clickaway="handleClickAway">
    <input type="checkbox" v-model="navShow" :checked="navShow" hidden />
    <div style="color:white; margin:5px;">{{ userName }}</div>
    <nav class="theUserMenu__menu" :class="{ 'theUserMenu__menu--show': navShow }">
      <div class="theUserMenu__menuHeader">
        <hr/>
      </div>
      <router-link
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.to"
        class="theUserMenu__item"
        exact-active-class="theUserMenu__item--active"
        @click.native="handleLinkClick()"
      >{{ item.label }}</router-link>

      <span class="theUserMenu__item theUserMenu__item--logout" @click="handleClickLogout()">Выйти</span>
    </nav>
  </label>
</template>

<!----------------------------------------------------------------------------------------------------------- script -->

<script>
import { mapState } from "vuex";
import { LOGOUT } from "@/components/auth";
import { mixin as clickaway } from "vue-clickaway";
import { userNav } from "@/config.js";

export default {
  name: "TheUserMenu",
  data: function() {
    return {
      navShow: false,
      navItems: userNav
    };
  },
  computed: mapState({
    userName: state => state.auth.userName
  }),
  mixins: [clickaway],
  methods: {
    handleClickAway: function() {
      this.navShow = false;
    },
    handleLinkClick() {
      this.navShow = !this.navShow;
    },
    handleClickLogout() {
      this.$store.dispatch(LOGOUT);
    }
  }
};
</script>

<!------------------------------------------------------------------------------------------------------------ style -->

<style lang="scss">
@import "@/config.scss";
.theUserMenu {
  $size: $header-height * 0.5;

  cursor: pointer;
  position: relative;
  height: $header-height * 0.75;
  margin: 0;
  margin-left: auto;

  &__avatar {
    height: inherit;
    border-radius: 100%;
  }

  &__menu {
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    display: flex;
    flex-direction: column;
    min-width: 18rem;
    background-color: $white;
    border: $border-width solid $border-color;
    border-radius: $border-radius;
    box-shadow: $box-shadow-sm;

    opacity: 0;
    visibility: hidden;
    transition: opacity 0.25s ease-in-out;

    &--show {
      opacity: 1;
      visibility: visible;
    }

    &Header {
      cursor: default;
      display: flex;
      align-items: center;
      padding: $spacer;

      &Avatar {
        width: $size;
        height: $size;
        margin-right: $spacer;
      }
    }
  }

  &__item {
    padding: $spacer * 0.25;
    padding-left: $spacer * 2 + $size;
    font-size: $font-size-sm;
    color: $body-color;
    transition: background-color 0.125s ease-in-out;

    &:hover {
      text-decoration: unset;
      background-color: $gray-200;
    }

    &:last-child {
      margin-bottom: $spacer * 0.75;
    }

    &--logout {
      color: $orange;
      &:hover {
        background-color: unset;
      }
    }
  }
}
</style>
