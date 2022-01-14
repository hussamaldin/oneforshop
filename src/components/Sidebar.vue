<template x-if="true">
    <div class="p-4 overflow-y-auto bg-white fixed top-[75px] left-0 h-[705px] w-[260px] border-r border-gray-300">
    <ul class="space-y-2 pd-2 text-xl"> 
        <li>
          <form action="#" method="GET" class="lg:hidden">
            <div class="relative mt-1 w-[250px] h-[60px]">
                <button class="absolute left-0 top-4 text-xl text-gray-400 pl-3 flex items-center"><i class="fa fa-search"></i></button>
                <input type="text" class="bg-gray-50 h-full border rounded-lg border-gray-300 w-full pl-10 p-2.5" placeholder="Search">
            </div>
          </form>
        </li>
        <li><a href="/profile" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2"><i class="fa fa-user w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"></i></span>profile</a></li>
        <li><a href="login" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2"><i class="fa fa-sign-in w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"></i></span>Sign in</a></li>
        <li><a href="/" class="text-xl flex flex-row justify-between font-normal text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2 justify-start"><i class="fa fa-inbox w-6 h-6 text-gray-500 mr-2 group-hover:text-gray-900 transition duration-75"></i>Inbox</span><span class="justify-end w-[20px] h-[20px] bg-red-200 text-sm text-center rounded-full">3</span></a></li>
        <li x-data="{ open: false }"><a href="/product" class="text-xl text-gray-900 font-normal rounded-lg flex flex-row justify-between items-center p-2 hover:bg-gray-100 group"><span  @click="open = true" class="p-2 justify-start">
            <i class="fa fa-shopping-bag w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75 mr-2"></i>Product</span><span class="justify-end"><i class="fa fa-angle-down ml-2 text-2xl font-bold"></i></span></a>
            <ul x-cloak x-show="open">
        <li><a href="#" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2"><i class="fa fa-bell w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"></i></span>Setting</a></li>
        <li><a href="#" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2"><i class="fa fa-bell w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"></i></span>Pilling</a></li>
        <li><a href="#" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2"><i class="fa fa-bell w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"></i></span>Invoice</a></li>
            </ul>
        </li>
        <li x-data="{ open: false }"><a href="/users" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex flex-row justify-between items-center p-2 hover:bg-gray-100 group"><span class="p-2 justify-start">
            <i class="fa fa-group w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75 mr-2"></i>Users</span><span class="justify-end"><i class="fa fa-angle-down ml-2 text-2xl font-bold"></i></span></a>
            <ul x-cloak x-show="open">
        <li><a href="#" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2"><i class="fa fa bell w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"></i></span>User List</a></li>
        <li><a href="#" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2"><i class="fa fa bell w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"></i></span>Profile</a></li>
        <li><a href="#" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2"><i class="fa fa bell w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"></i></span>Setting</a></li>
            </ul>
        </li>
        <li x-data="{ open: false }"><a href="/billing" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex flex-row justify-between items-center p-2 hover:bg-gray-100 group"><span class="p-2 justify-start">
            <i class="fa fa-file w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75 mr-2"></i>Billing</span><span class="justify-end"><i class="fa fa-angle-down ml-2 text-2xl font-bold"></i></span></a>
            <ul x-cloak x-show="open">
        <li><a href="#" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2"><i class="fa fa bell w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"></i></span>Pricing</a></li>
        <li><a href="#" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2"><i class="fa fa bell w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"></i></span>Maintenance</a></li>
        <li><a href="#" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2"><i class="fa fa bell w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"></i></span>Looping</a></li>
            </ul>
        </li>
        <li><a href="/setting" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex flex-row justify-between items-center p-2 hover:bg-gray-100 group"><span class="p-2 justify-start">
            <i class="fa fa-lock w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75 mr-2"></i>Setting</span><span class="justify-end"><i class="fa fa-angle-down ml-2 text-2xl font-bold"></i></span></a>
            <ul>
        <li><a href="#" class="text-xl font-normal text-gray-900 font-normal rounded0-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2"><i class="fa fa bell w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"></i></span>Sign up</a></li>
        <li><a href="#" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2"><i class="fa fa bell w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"></i></span>Authentecation</a></li>
        <li><a href="#" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2"><i class="fa fa bell w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"></i></span>ForgetPassword</a></li>
            </ul>
        </li>
        <li><a href="#" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2"><i class="fa fa-info-circle w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"></i></span>Help</a></li>
        <li><a href="#" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2"><i class="fa fa-shopping-cart w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"></i></span>By now</a></li>
        <li><a href="#" class="text-xl font-normal text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2"><i class="fa fa bell w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"></i></span>Components</a></li>
        <li><a href="#" class="text-xl font-normal pb-8 mb-4 text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"><span class="p-2"><i class="fa fa-file w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"></i></span>Documents</a></li>

    </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style scoped>
[x-cloak] { display: none !important; }
</style>