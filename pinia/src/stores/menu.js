import { defineStore } from "pinia"
import { ref } from "vue"

//เมนูอาหาร
export const menuStore = defineStore('menu',() =>{
const menulist = ref([
    {title: 'อกไก่ปิ้ง', img:'https://img.wongnai.com/p/800x0/2022/02/04/30ef855b4fbd4297acc1c29f14788e68.jpg', price:40, rating: 0},
    {title: 'สลัดโรลอกไก่', img:'https://img.wongnai.com/p/800x0/2022/02/04/5168ffb759ce4c09bd2497a2a568ffca.jpg', price:40, rating: 0},
    {title: 'French Tost & Berry Yogurt', img:'https://img.wongnai.com/p/800x0/2022/02/04/a26e331d05534060ae1e7ab94dfd5d3d.jpg', price:39, rating: 0},
    {title: 'ไข่ยัดไส้เต้าฮู้หมูสับ', img:'https://img.wongnai.com/p/800x0/2022/02/04/a4a686e45bfb4482aaf433bb026aea46.jpg', price:39, rating: 0},
    {title: 'กุ้งอบวุ้นเล้น', img:'https://img.wongnai.com/p/800x0/2022/02/04/45ff71f45a9b4cbd9bd5edbcc3b78238.jpg', price:70, rating: 0}
])

function delelteMenu(i){
    //menulist.value.pop(i)<--ลบตัวสุดท้าย
    //ลบค่าออกจากarray ตน.ที่i
    menulist.value.splice(i,1)//ลบตนที่ i,จน 1 ตัว
}
function addMenu(x){
    menulist.value.push(x)
}

return {menulist, delelteMenu,addMenu}
})