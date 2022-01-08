<template>
    <div class="bg-white border-b border-gray-200 z-30 fixed w-full">
        <div class="px-3 py-3">
        <div class="flex items-center justify-between">
           <div class="flex items-center justify-start">
               <button class="mr-2 text-gray-600 w-[80px] h-[60px] hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100"><i class="fa fa-align-left text-2xl"></i></button>
               <img :src="img" class="w-[50px] h-[60px] mr-1 ml-4"><span class="text-lg text-blue-300">OneForShop</span>
               <form class="ml-6">
                   <div class="relative mt-1 w-[480px] h-[60px]">
                       <button class="absolute left-0 top-4 text-2xl text-gray-400 pl-3 flex items-center"><i class="fa fa-search"></i></button>
                       <input type="text" class="bg-gray-50 h-full border rounded-lg border-gray-300 w-full pl-10 p-2.5" placeholder="Search">
                   </div>
               </form>
           </div>
           <div class="flex items-center justify-end flex-row">
               <div class="ml-4 p-2 hover:bg-gray-100 rounded">
                   <button class="text-gray-600 w-[60px] h-[60px] hover:text-gray-900 cursor-pointer"><i class="fa fa-bell text-2xl"></i></button>
                   </div>
                   <div class="ml-4 p-2 rounded hover:bg-gray-100">
                   <button class="text-gray-600 w-[60px] h-[60px] hover:text-gray-900 cursor-pointer"><i class="fa fa-bars text-2xl"></i></button>
                   </div>
                   <div class="ml-4 p-2">
                   <img :src="img1" class="w-[60px] h-[60px] rounded-full">
                   </div>
                   <div class="mx-4 p-2">
                   <button class="w-[140px] h-[45px] bg-blue-500 rounded hover:bg-blue-700 text-white text-xl">By now</button>
                   </div>
               
               
           </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           img:require('../assets/images.png'),
           img1:require('../assets/nikon.jpg')
        }
    }
}
</script>