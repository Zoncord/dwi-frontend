<template>
  <!--  <div class="main-container">-->
  <!--    <div class="sections">-->
  <!--      &lt;!&ndash;      <section class="first-screen">first-screen</section>&ndash;&gt;-->
  <!--      <div class="second-screen-wrapper">-->
  <!--        <section class="second-screen">-->
  <!--          <div class="card-wrapper flex justify-center items-center">-->
  <!--            <div class="card">card</div>-->
  <!--          </div>-->
  <!--          <div class="text text-white">-->
  <!--            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur dolor dolore eaque expedita-->
  <!--              molestiae nemo numquam odit recusandae veritatis! Assumenda atque ducimus expedita fugiat id optio sit-->
  <!--              soluta. Quibusdam.-->
  <!--            </div>-->
  <!--            <div>Accusamus aspernatur atque beatae consequuntur dicta, excepturi exercitationem id ipsum, iste iure-->
  <!--              libero-->
  <!--              minus modi nemo nulla odit quas qui, quidem quisquam quod recusandae rem sit totam ullam ut vero.-->
  <!--            </div>-->
  <!--            <div>Accusantium aspernatur assumenda dolor eos esse excepturi iure mollitia, omnis quae quo ratione-->
  <!--              reiciendis temporibus totam vel voluptatem? A amet assumenda consectetur et inventore maiores non quaerat-->
  <!--              sequi temporibus unde.-->
  <!--            </div>-->
  <!--            <div>Aperiam consectetur dolor dolore dolorem facilis id ipsum iure modi nobis voluptas! Eius eos et-->
  <!--              expedita-->
  <!--              impedit natus nisi nostrum omnis quasi repellendus, sit tempora tempore unde ut vel vitae.-->
  <!--            </div>-->
  <!--            <div>A, accusantium aliquam aperiam aspernatur atque blanditiis dignissimos dolor et eum ex incidunt magni-->
  <!--              maiores maxime mollitia placeat, porro provident quam quasi quibusdam quis sapiente sunt veritatis vitae.-->
  <!--              Deserunt, sint.-->
  <!--            </div>-->
  <!--            <div>Ducimus est inventore libero quod ullam? Dignissimos labore minus sint tempora, ut velit. Consectetur-->
  <!--              cumque eligendi inventore minima minus nam nemo nobis odit, pariatur possimus praesentium, rerum vel-->
  <!--              voluptates voluptatum.-->
  <!--            </div>-->
  <!--            <div>Accusamus consectetur fugit obcaecati perspiciatis sequi? Doloremque fuga illum incidunt molestiae-->
  <!--              optio-->
  <!--              porro quae saepe vel voluptatibus, voluptatum. A earum eum exercitationem maiores mollitia nemo-->
  <!--              praesentium-->
  <!--              saepe sunt veniam voluptates.-->
  <!--            </div>-->
  <!--            <div>Ad asperiores consequatur, cumque deserunt dignissimos dolores dolorum earum eligendi esse et hic id in-->
  <!--              ipsa iusto laboriosam maxime minima molestiae, nemo non nostrum optio perferendis quisquam, reiciendis-->
  <!--              tempora vel.-->
  <!--            </div>-->
  <!--            <div>Animi aperiam autem dolor dolorem fugit illum laboriosam vitae. Beatae consequuntur doloribus maiores-->
  <!--              reprehenderit unde vel. A, ad commodi cum cumque debitis eaque error eveniet fugit, iure nemo omnis quae.-->
  <!--            </div>-->
  <!--            <div>Ad aliquid asperiores aspernatur dolorem doloribus eos eveniet fuga fugiat in incidunt maiores nemo,-->
  <!--              nihil nisi perferendis praesentium quaerat quam quasi quia quibusdam quis repellendus reprehenderit ullam-->
  <!--              voluptate voluptates voluptatum!-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </section>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <div class="main-container">
    <section class="first-section">
      <div class="sticky-block">Stisky Block</div>
      <div class="long-block">Long Block with some text</div>
    </section>
  </div>
</template>

<script>
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


import Long from "components/Long";
import CurvesScrollAnimation from "components/CurvesScrollAnimation";
import Card from "components/Card";
import Header from "components/Header";
import DateCardMenu from "components/DateCardMenu";

export default {
  name: "TestLayout",
  components: {},
  data() {
    return {
      showCardMenu: false,
    }
  },
  mounted() {
    gsap.from('.first-section', {
      // opacity: 0,  // Works with changing opacity
      yPercent: 100, // But dont works with changing positon
      scrollTrigger: '.main-container',
    }).startTime()

// ScrollTrigger.refresh() // Tried to use refresh(), but it doesn't helps
    ScrollTrigger.create({
      trigger: '.main-container',
      start: 'top+=10 top',
      end: '300 top',
      markers: true,
      pin: '.sticky-block',
    })

    // ScrollTrigger.create({
    //   trigger: '.sticky-block',
    //   start: 'top top',
    //   endTrigger: '.long-block',
    //   end: 'bottom bottom',
    //   pin: true,
    //   scrub: true,
    //   // markers: true,
    // })
  },
}
</script>

<style lang="scss" scoped>
.first-section {
  width: 100vw;
  height: 200vh;
  display: flex;

}

.sticky-block {
  height: 200px;
  width: 50%;
  background-color: #00FFBAFF;
}

.long-block {
  width: 50%;
  height: 100%;
  background-color: #FF6A0093;
}

//
//.main-container {
//  width: 100vw;
//  height: 100vh;
//  //overflow-x: hidden;
//}
//
//.sections {
//  width: 200vw;
//  display: flex;
//  //overflow-y: hidden;
//}
//
//.first-screen {
//  width: 100vw;
//  height: 100vh;
//  background-color: lightseagreen;
//}
//
//.second-screen-wrapper {
//  width: 100vw;
//  height: 200vh;
//}
//
//.second-screen {
//  width: 100%;
//  height: 100%;
//  background-color: #3A506B;
//  display: flex;
//}
//
//.card-wrapper {
//  width: 50%;
//  height: 100vh;
//}
//
//.card {
//  width: 80%;
//  height: 10vh;
//  background-color: rgba(0, 255, 186, 0.58);
//  //margin-top: 100px;
//}
//
//.text {
//  width: 50%;
//  background-color: blue;
//}
</style>
