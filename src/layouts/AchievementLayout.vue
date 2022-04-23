<template>
  <div class="achievement flex row justify-between q-mt-md">
    <nav class="achievement__navigation col-3">
      <div class="q-card achievement__navigation__card-info flex column text-center q-mb-md">
        <h5 class="achievement__navigation__card-info__title">{{ achievementTitle }}</h5>
        <h1 class="achievement__navigation__card-info__day">{{ achievementDay }}</h1>
        <h5 class="achievement__navigation__card-info__unit">{{ achievementUnit }}</h5>
      </div>
      <div class="achievement__navigation__controls q-card  flex">
        <q-btn icon="arrow_back_ios" class="achievement__navigation__controls__button" :ripple="false" @click="$router.back()"></q-btn>
        <q-btn icon="favorite" class="achievement__navigation__controls__button" :ripple="false"></q-btn>
        <q-btn icon="chat" class="achievement__navigation__controls__button" :ripple="false"></q-btn>
      </div>
    </nav>
    <div class="achievement__blog col-9">
      <div class="achievement__blog__new q-card  q-mb-md" v-for="item in news" :key="item">
        <h4 class="achievement__blog__new__title">{{item.title}}</h4>
        <p class="achievement__blog__new__date">{{item.date}} {{$t('achievement.at')}} {{item.time}}</p>
        <article class="achievement__blog__new__text">{{item.text}}</article>
        <div class=" flex justify-between">
          <div class="flex items-center">
            <UserImage class="achievement__blog__new__user-logo"/>
            <h4 class="achievement__blog__user-name">
              {{$userName}}
            </h4>
          </div>

            <nav class="achievement__blog__controls flex items-center ">
              <q-btn icon="chat" class="achievement__blog__controls__btn" :ripple="false"></q-btn>
              <q-btn icon="favorite" class="achievement__blog__controls__btn" :ripple="false"></q-btn>
              <h4 class="achievement__blog__controls__likes">
                {{item.likes.count}} {{item.likes.unit}}
              </h4>


            </nav>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserImage from "components/Core/User/UserImage";
export default {
  name: "AchieveLayout",
  components: {
    UserImage,
  },
  data() {
    return {
      achievementTitle: 'Делаю деньги',
      achievementDay: '3',
      achievementUnit: 'Lyz',

      news: [
        {
          title: 'Как я это сделал?',
          date: '05.05.2004',
          time: '5:25',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda corporis, doloremque eveniet ex impedit iusto, omnis placeat possimus quae quaerat, quis sit voluptates. Ipsam iure maxime odio optio sed! ',
          likes: {
            count: 5,
            unit: 'Tys'
          }
        },
        {
          title: 'Как я это сделал?',
          date: '05.05.2004',
          time: '5:25',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda corporis, doloremque eveniet ex impedit iusto, omnis placeat possimus quae quaerat, quis sit voluptates. Ipsam iure maxime odio optio sed! ',
          likes: {
            count: 5,
            unit: 'Tys'
          },
        },
      ]

    }
  }
}
</script>

<style lang="scss" scoped>
.achievement__blog {
  padding-left: 8px;
}

.achievement__navigation {
  padding-right: 8px;
}
.achievement__navigation__controls{
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.achievement__navigation__card-info{
  border-radius: 10px;
  padding: 30px;
}
.achievement__navigation__card-info__title{
  font-size: 30px;
  font-weight: 500;
}
.achievement__navigation__card-info__day{
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: 500;
}
.achievement__navigation__card-info__unit{
  font-size: 30px;
  font-weight: 500;
}
.achievement__blog__new{
  padding: 40px;
}
.achievement__blog__new__title{
  margin-bottom: 5px;
}
.achievement__blog__new__text{
  font-size: 20px;
  margin-top: 60px;
  margin-bottom:60px;
}
.achievement__blog__user-name{
  font-weight: 400;
}
.achievement__blog__controls__btn{
  font-size: 20px;
  border: none;
  width: 50px;
  //width: auto;
}
.achievement__blog__controls__likes{
  //font-size: 20px;
}
.achievement__blog__new__user-logo{
  width: 100px;
  margin-right: 20px;
}
</style>

<style lang="scss">
.achievement__navigation__controls__button {
  border: none !important;
  width: 33.33%;
  border-radius: 0;
}

.q-card{
  border-radius: 10px;
}
</style>
