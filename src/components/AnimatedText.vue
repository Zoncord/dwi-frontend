<template>
  {{ currentText }}<span>{{ this.isShowedCursor ? '|' : '' }}</span>
</template>

<script>
export default {
  name: "AnimatedText",
  props: {
    text: {
      type: String,
      default: "..."
    },
    words: {
      type: Array,
      default() {
        return ['...', 'Incidents']
      },
    }
  },
  data() {
    return {
      currentText: '',
      isShowedCursor: true,
      // defaultWords:,
        defaultWords: ['...', 'Incidents']
    }
  },
  created() {
    let allWords = this.defaultWords.concat(this.words)
    this.animate()
    this.blinkCursor()
  },
  methods: {
    animate(delay = 2000) {
      this.increaseText()
      setTimeout(() => {
        this.decreaseText(50)
        setTimeout(() => {
          this.animate()
        }, delay)
      }, 2000)

    },
    increaseText(time = 100) {
      let counter = 0
      let interval = setInterval(() => {
        if (this.currentText !== this.text) {
          this.addSymbol(counter)
        } else {
          clearInterval(interval)
        }
        counter = (counter + 1) % this.text.length
      }, time)
    },
    decreaseText(time = 100) {
      let interval = setInterval(() => {
        if (this.currentText !== '') {
          this.eraseSymbol()
        } else {
          clearInterval(interval)
        }
      }, time)
    },
    addSymbol(number) {
      this.currentText += this.text[number]
    },
    eraseSymbol() {
      this.currentText = this.currentText.slice(0, this.currentText.length - 1)
    },
    blinkCursor(time = 300) {
      setInterval(() => {
        this.isShowedCursor = !this.isShowedCursor
      }, time)
    }
  }
}
</script>

<style scoped>
span {
  color: #8579EB;
}
</style>
