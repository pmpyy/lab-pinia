import { ref } from "vue";
import { allmenu } from "./menuView.vue";

export function addMenu() {
const aMenu = ref({ title: 'หมูปิ้ง', img: 'https://img.wongnai.com/p/800x0/2022/02/04/30ef855b4fbd4297acc1c29f14788e68.jpg', price: 40, rating: 5 }
);
//allmenu.menulist.value.push(aMenu.value)
allmenu.addMenu(aMenu.value); //ส่งข้อมูลไปเพิ่มในstore
}
