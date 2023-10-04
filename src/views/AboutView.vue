<script setup>
import {ref} from 'vue'
//ใช้วิธีการimport จาก store เข้ามา
// import store
import {useConnterStore} from '@/store/counter'
//variable
const counterA = useConnterStore();
//function
</script>
<template>
  <div class="about">
    <h1>{{  counterA.count}}</h1>
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
