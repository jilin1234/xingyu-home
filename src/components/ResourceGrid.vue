<script setup>
import ResourceCard from './ResourceCard.vue'

defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <ul class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    <li v-for="item in items" :key="item.id" class="h-full">
      <ResourceCard :item="item" />
    </li>
  </ul>
</template>
