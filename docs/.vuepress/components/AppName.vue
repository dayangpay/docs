<script setup lang="ts">
import { computed } from "vue";
import { useSiteLocaleData } from 'vuepress/client'

const siteLocale = useSiteLocaleData()

const navbarBrandTitle = computed(() => siteLocale.value.title)
</script>

<template>
  <span>
    {{ navbarBrandTitle }}
  </span>
</template>
