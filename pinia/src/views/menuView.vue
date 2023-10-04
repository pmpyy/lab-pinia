<script setup>
 import { ref } from "vue"
// import {menulist} from '../stores/menu'
import {menuStore} from '@/stores/menu'


const allmenu = menuStore() //เอาตัวแปรมารับstore
const alist = allmenu.menulist

function del(i){
    allmenu.delelteMenu(i);
}

function addMenu(){
    const aMenu = ref({title: 'หมูปิ้ง', img:'https://img.wongnai.com/p/800x0/2022/02/04/30ef855b4fbd4297acc1c29f14788e68.jpg', price:40, rating: 5}
    )
    //allmenu.menulist.value.push(aMenu.value)
    allmenu.addMenu(aMenu.value)//ส่งข้อมูลไปเพิ่มในstore
}

</script>
<template>
    <div>
        <h1>Menu List </h1>
        <ul>
            <li v-for="(n,index) in alist" :key="index">
                <p>MENU: {{ n.title}}</p>
                <p>PRICE: {{ n.price }}</p>
                <img class="menu-img" :src="n.img "><br>
                <button @click="del(index)">ลบ</button>
            </li>
        </ul>
        <button @click="addMenu()">เพิ่มเมนู</button>
    </div>
</template>
<style>
.menu-img{
    width: 150px;
}
</style>