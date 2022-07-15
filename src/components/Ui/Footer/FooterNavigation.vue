<template>
  <footer class="nav-footer">
    <div class="nav-footer__wrapper limiter">
      <q-tabs
        class="nav-footer__wrapper__tabs flex justify-between"
        content-class="flex justify-between"
        indicator-color="transparent"
        active-class="footer__wrapper__tabs__active-tab"
      >
        <q-route-tab
          icon="home"
          to="/feed"
          exact
          class="nav-footer__wrapper__tabs__tab"
          content-class="nav-footer__wrapper__tabs__tab__content"
          :ripple="false"
          no-caps

        >
          <p>
            Feed
          </p>
        </q-route-tab>
        <q-route-tab
          icon="explore"
          to="/explore"
          exact
          class="nav-footer__wrapper__tabs__tab"
          content-class="nav-footer__wrapper__tabs__tab__content"
          :ripple="false"
          no-caps
        >
          Explore
        </q-route-tab>
        <q-route-tab
          icon="account_circle"
          :to="`/profile/${this.$user.id}`"
          exact
          class="nav-footer__wrapper__tabs__tab"
          content-class="nav-footer__wrapper__tabs__tab__content"
          :ripple="false"
          no-caps
        >
          Account
        </q-route-tab>
      </q-tabs>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterNavigation",

}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  min-height: 50px;
  background-color: white;
  position: fixed;
  bottom: 0;
  border-top: 1px solid $border_color;
  z-index: 100;
}

.limiter {
  width: 80%;
}

.nav-footer__wrapper__tabs {
  width: 100%;
}

</style>

<style lang="scss">
.nav-footer__wrapper__tabs__tab{
  width: 33.33%;
  display: block;

  .q-tab__indicator {
    display: none;
  }
  .nav-footer__wrapper__tabs__tab__content {
    padding: 0;
    margin: 5px 0 0 0  !important;
    justify-content: normal;
    color: #494949;
    align-self: auto;
    min-width: auto;
    .q-tab__icon {
      font-size: 30px;
      width: auto;
      height: auto;
    }
    .q-focus-helper{
      display: none;
    }
  }
}

.footer__wrapper__tabs__active-tab{
  .nav-footer__wrapper__tabs__tab__content{
    color: $highlight;
  }
}
</style>
