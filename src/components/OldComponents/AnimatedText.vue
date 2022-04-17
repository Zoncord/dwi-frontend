<template>
  {{ currentText }}<span :style="{opacity:this.isShowedCursor ? '1' : '0' }">{{ "|" }}</span>
</template>

<script>
import {shuffle} from "src/js/Functions";

export default {
  name: "AnimatedText",
  props: {
    text: {
      type: String,
      default: ""
    },
    words: {
      type: Array,
      default() {
        return [
          'Saying hello world to the strangers',
          'Saying bad words to the fish',
          // 'Screaming and asking my older brother about bothering his PC',
          'Eating SHEEEETS',
          'Writing too hard tasks for my friends in GarticPhone.com'
          // 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A maxime necessitatibus nisi placeat quaerat quos rem! Adipisci dignissimos eveniet expedita fugit impedit minima nisi obcaecati praesentium sequi temporibus! Perferendis, rerum!'
        ]
      },
    }
  },
  data() {
    return {
      currentText: '',
      isShowedCursor: true,
      // defaultWords: [],
      defaultWords: ['...', 'Incidents']
    }
  },
  created() {
    this.startAnimation()
  },
  methods: {
    async startAnimation() {
      this.blinkCursor()
      await this.decreaseText()
      setTimeout(async () => {
        await this.animate(this.allWords)
      }, 2000)
    },
    async animate(sentences, current = 0, delay = 2000) {
      await this.increaseText(sentences[current])
      setTimeout(async () => {
        await this.decreaseText(20)
        setTimeout(() => {
          this.animate(sentences, (current + 1) % sentences.length)
        }, delay)
      }, 2000)
    },
    async increaseText(sentence, time = 100) {
      await new Promise(resolve => {
        let counter = 0
        let interval = setInterval(() => {
          if (this.currentText !== sentence) {
            this.addSymbol(sentence, counter)
          } else {
            resolve()
            clearInterval(interval)
          }
          counter = (counter + 1) % sentence.length
        }, time)
      })

    },
    async decreaseText(time = 100) {
      await new Promise((resolve) => {
        let interval = setInterval(() => {
          if (this.currentText !== '') {
            this.eraseSymbol()
          } else {
            resolve()
            clearInterval(interval)
          }
        }, time)
      })
    },
    addSymbol(sentence, number) {
      this.currentText += sentence[number]
    },
    eraseSymbol() {
      this.currentText = this.currentText.slice(0, -1)
    },
    blinkCursor(time = 400) {
      setInterval(() => {
        this.isShowedCursor = !this.isShowedCursor
      }, time)
    },

  },
  computed: {
    allWords() {
      return this.defaultWords.concat(shuffle(this.words))
    }
  }
}
</script>

<style scoped>
span {
  /*color: #8579EB;*/
  color: #FA3E54;
}
</style>
