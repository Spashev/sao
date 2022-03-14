<template>
  <header class="theMainHeader">
    <div class="theMainHeader__logo">Kcell ЕСУР</div>
    <TheUserMenu />
  </header>
</template>

<!----------------------------------------------------------------------------------------------------------- script -->

<script>
import TheUserMenu from "./TheUserMenu";

export default {
  name: "TheMainHeader",
  components: {
    TheUserMenu
  }
};
</script>

<!------------------------------------------------------------------------------------------------------------ style -->

