<template>
  <div class="rounded-lg px-4 py-8" :class="selectedColor">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const COLORS : { [key: string]: any } = {
  green: 'text-white bg-green-400 hover:bg-green-500',
  red: 'text-white bg-red-400 hover:bg-red-500'
}

export default Vue.extend({
  props: {
    color: {
      type: String,
      default: () => COLORS.green
    }
  },
  computed: {
    selectedColor (): string {
      return COLORS[this.color]
    }
  }
})
</script>
