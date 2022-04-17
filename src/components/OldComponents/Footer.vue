<template>
  <footer class="flex column q-pt-xl q-pb-md">

    <div class="footer__wrapper limiter flex justify-between q-mb-xl">
      <a href="#">
        <Logo>ZONCORD</Logo>
      </a>
      <a href="#" class="footer-title">Our mission</a>
      <a href="#" class="footer-title">For developers <br> <span>Api</span></a>
      <div class="footer-title">Contact <br><span>+79519746565</span></div>
      <a href="#" class="footer-title join">Join to Us</a>
    </div>
    <div class="copy-right flex justify-center">© Zoncord, 2022</div>
  </footer>
</template>

<script>
import Logo from "components/Core/Logo";

export default {
  name: "Footer",
  components: {
    Logo,
  }
}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  background-color: $oB;
  color: white;


  .footer-title {
    color: white;
    font-weight: 600;
    font-size: 1.2rem;

    span {
      font-weight: 500;
      font-size: 1rem;
    }
  }
}

.footer__wrapper {
  width: 100%;
}
@media (max-width: 768px){
  .footer__wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    *{
      text-align: center;
    }
  }
}
</style>
