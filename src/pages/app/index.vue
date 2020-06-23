<template>
  <div class="bg-gray-100 min-h-screen flex flex-col py-8">
    <h1 class="font-bold text-gray-900 text-2xl px-6">
      Perduitan
    </h1>
    <div class="flex items-center text-base overflow-x-scroll">
      <a v-for="i in listOfMonths" :key="i" class="mr-5 flex-shrink-0 hover:text-gray-900">{{ i }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    listOfMonths (): string[] {
      return [
        'Bulan ini',
        'Mei',
        'April',
        'Maret',
        'Februari',
        'Januari',
        'Desember 2019',
        'November 2019',
        'Oktober 2019',
        'September 2019'
      ]
    }
  }
})
</script>
