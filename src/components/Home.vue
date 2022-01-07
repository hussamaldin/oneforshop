<template>
        <div class="flex flex-row justify-between py-4 border-b  border-gray-200">
        <div class="justify-start">
            <div class="flex flex-row">
                <div class="w-[30px] ml-2 h-[50px] flex items-center"><input type="checkbox" class="w-[20px] h-[20px]"></div>
                <div class="border-x ml-2 border-gray-500">
                    <button class="hover:bg-gray-200 ml-2 w-[60px] h-[50px]"><i class="fa fa-trash text-2xl"></i></button>
                    <button class="hover:bg-gray-200 ml-2 w-[60px] h-[50px]"><i class="fa fa-archive text-2xl"></i></button>
                    <button class="hover:bg-gray-200 ml-2 w-[60px] h-[50px]"><i class="fa fa-info-circle text-2xl"></i></button>
                </div>
                <div class=" ml-2 h-[50px] w-[120px]"><button class="rounded hover:bg-blue-600 bg-blue-400 text-white w-full h-full text-2xl">Compose</button></div>
            </div>
        </div>
        <div class="justify-end">
            <div class="flex flex-row">
            <button class="hover:bg-gray-200 mr-2 w-[60px] h-[50px]"><i class="fa fa-bell text-2xl"></i></button>
            <button class="hover:bg-gray-200 mr-2 w-[60px] h-[50px]"><i class="fa fa-angle-left text-3xl"></i></button>
            <button class="hover:bg-gray-200 mr-2 w-[60px] h-[50px]"><i class="fa fa-angle-right text-3xl"></i></button>
            <p>12 from 12345</p>
            </div>
        </div>
        </div>
        <div class="w-full h-full flex flex-col p-1 overflow-x-auto">
        <div class="bg-white border-b border-gray-200 flex flex-row justify-between py-4 hover:bg-gray-100">
        <div class="w-[30px] mx-1 h-[50px] flex items-center"><input type="checkbox" class="w-[20px] h-[20px]"></div>
        <div class="flex items-center"><button><i class="fa fa-star-o hover:text-yellow-500 font-bold text-2xl"></i></button></div>
        <div class="flex items-center px-2"><img :src="img" class="w-[50px] h-[50px] rounded-full mx-1"><p class="font-bold text-xl text-lg text-gray-900">OneForShop</p></div>
        <div class="flex items-center mx-1 px-2 font-bold text-xl whitespace-nowrap"><p>This message From Me To Your erfect Website Design HHHHHH Welcome</p></div>
        <div class="flex items-center mx-1 px-2 font-bold text-xl whitespace-nowrap">16 Aprail at 12:23 Am</div>
        </div>
        <div class="bg-white border-b border-gray-200 flex flex-row justify-between py-4 hover:bg-gray-100">
        <div class="w-[30px] mx-1 h-[50px] flex items-center"><input type="checkbox" class="w-[20px] h-[20px]"></div>
        <div class="flex items-center"><button><i class="fa fa-star-o hover:text-yellow-500 font-bold text-2xl"></i></button></div>
        <div class="flex items-center px-2"><img :src="img" class="w-[50px] h-[50px] rounded-full mx-1"><p class="font-bold text-xl text-lg text-gray-900">OneForShop</p></div>
        <div class="flex items-center mx-1 px-2 font-bold text-xl whitespace-nowrap"><p>This message From Me To Your erfect Website Design HHHHHH Welcome</p></div>
        <div class="flex items-center mx-1 px-2 font-bold text-xl whitespace-nowrap">16 Aprail at 12:23 Am</div>
        </div>
        <div class="bg-white border-b border-gray-200 flex flex-row justify-between py-4 hover:bg-gray-100">
        <div class="w-[30px] mx-1 h-[50px] flex items-center"><input type="checkbox" class="w-[20px] h-[20px]"></div>
        <div class="flex items-center"><button><i class="fa fa-star-o hover:text-yellow-500 font-bold text-2xl"></i></button></div>
        <div class="flex items-center px-2"><img :src="img" class="w-[50px] h-[50px] rounded-full mx-1"><p class="font-bold text-xl text-lg text-gray-900">OneForShop</p></div>
        <div class="flex items-center mx-1 px-2 font-bold text-xl whitespace-nowrap"><p>This message From Me To Your erfect Website Design HHHHHH Welcome</p></div>
        <div class="flex items-center mx-1 px-2 font-bold text-xl whitespace-nowrap">16 Aprail at 12:23 Am</div>
        </div>
        <div class="bg-white border-b border-gray-200 flex flex-row justify-between py-4 hover:bg-gray-100">
        <div class="w-[30px] mx-1 h-[50px] flex items-center"><input type="checkbox" class="w-[20px] h-[20px]"></div>
        <div class="flex items-center"><button><i class="fa fa-star-o hover:text-yellow-500 font-bold text-2xl"></i></button></div>
        <div class="flex items-center px-2"><img :src="img" class="w-[50px] h-[50px] rounded-full mx-1"><p class="font-bold text-xl text-lg text-gray-900">OneForShop</p></div>
        <div class="flex items-center mx-1 px-2 font-bold text-xl whitespace-nowrap"><p>This message From Me To Your erfect Website Design HHHHHH Welcome</p></div>
        <div class="flex items-center mx-1 px-2 font-bold text-xl whitespace-nowrap">16 Aprail at 12:23 Am</div>
        </div>
        <div class="bg-white border-b border-gray-200 flex flex-row justify-between py-4 hover:bg-gray-100">
        <div class="w-[30px] mx-1 h-[50px] flex items-center"><input type="checkbox" class="w-[20px] h-[20px]"></div>
        <div class="flex items-center"><button><i class="fa fa-star-o hover:text-yellow-500 font-bold text-2xl"></i></button></div>
        <div class="flex items-center px-2"><img :src="img" class="w-[50px] h-[50px] rounded-full mx-1"><p class="font-bold text-xl text-lg text-gray-900">OneForShop</p></div>
        <div class="flex items-center mx-1 px-2 font-bold text-xl whitespace-nowrap"><p>This message From Me To Your erfect Website Design HHHHHH Welcome</p></div>
        <div class="flex items-center mx-1 px-2 font-bold text-xl whitespace-nowrap">16 Aprail at 12:23 Am</div>
        </div>
        <div class="bg-white border-b border-gray-200 flex flex-row justify-between py-4 hover:bg-gray-100">
        <div class="w-[30px] mx-1 h-[50px] flex items-center"><input type="checkbox" class="w-[20px] h-[20px]"></div>
        <div class="flex items-center"><button><i class="fa fa-star-o hover:text-yellow-500 font-bold text-2xl"></i></button></div>
        <div class="flex items-center px-2"><img :src="img" class="w-[50px] h-[50px] rounded-full mx-1"><p class="font-bold text-xl text-lg text-gray-900">OneForShop</p></div>
        <div class="flex items-center mx-1 px-2 font-bold text-xl whitespace-nowrap"><p>This message From Me To Your erfect Website Design HHHHHH Welcome</p></div>
        <div class="flex items-center mx-1 px-2 font-bold text-xl whitespace-nowrap">16 Aprail at 12:23 Am</div>
        </div>
        <div class="bg-white border-b border-gray-200 flex flex-row justify-between py-4 hover:bg-gray-100">
        <div class="w-[30px] mx-1 h-[50px] flex items-center"><input type="checkbox" class="w-[20px] h-[20px]"></div>
        <div class="flex items-center"><button><i class="fa fa-star-o hover:text-yellow-500 font-bold text-2xl"></i></button></div>
        <div class="flex items-center px-2"><img :src="img" class="w-[50px] h-[50px] rounded-full mx-1"><p class="font-bold text-xl text-lg text-gray-900">OneForShop</p></div>
        <div class="flex items-center mx-1 px-2 font-bold text-xl whitespace-nowrap"><p>This message From Me To Your erfect Website Design HHHHHH Welcome</p></div>
        <div class="flex items-center mx-1 px-2 font-bold text-xl whitespace-nowrap">16 Aprail at 12:23 Am</div>
        </div>
        <div class="bg-white border-b border-gray-200 flex flex-row justify-between py-4 hover:bg-gray-100">
        <div class="w-[30px] mx-1 h-[50px] flex items-center"><input type="checkbox" class="w-[20px] h-[20px]"></div>
        <div class="flex items-center"><button><i class="fa fa-star-o hover:text-yellow-500 font-bold text-2xl"></i></button></div>
        <div class="flex items-center px-2"><img :src="img" class="w-[50px] h-[50px] rounded-full mx-1"><p class="font-bold text-xl text-lg text-gray-900">OneForShop</p></div>
        <div class="flex items-center mx-1 px-2 font-bold text-xl whitespace-nowrap"><p>This message From Me To Your erfect Website Design HHHHHH Welcome</p></div>
        <div class="flex items-center mx-1 px-2 font-bold text-xl whitespace-nowrap">16 Aprail at 12:23 Am</div>
        </div>
        <div class="bg-white border-b border-gray-200 flex flex-row justify-between py-4 hover:bg-gray-100">
        <div class="w-[30px] mx-1 h-[50px] flex items-center"><input type="checkbox" class="w-[20px] h-[20px]"></div>
        <div class="flex items-center"><button><i class="fa fa-star-o hover:text-yellow-500 font-bold text-2xl"></i></button></div>
        <div class="flex items-center px-2"><img :src="img" class="w-[50px] h-[50px] rounded-full mx-1"><p class="font-bold text-xl text-lg text-gray-900">OneForShop</p></div>
        <div class="flex items-center mx-1 px-2 font-bold text-xl whitespace-nowrap"><p>This message From Me To Your erfect Website Design HHHHHH Welcome</p></div>
        <div class="flex items-center mx-1 px-2 font-bold text-xl whitespace-nowrap">16 Aprail at 12:23 Am</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
         img:require('../assets/nikon.jpg')
        }
    }
}
</script>