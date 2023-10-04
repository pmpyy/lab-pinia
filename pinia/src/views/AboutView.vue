<script setup>
import {useCounterStore} from '@/stores/counter'
const counterA = useCounterStore();

</script>
<template>
  <div class="about">
    <h1>{{ counterA.count }}</h1>
    <h3>{{ counterA.doubleCount }}</h3>
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
