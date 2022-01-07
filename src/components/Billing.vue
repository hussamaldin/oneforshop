<template>
    <div class="w-full h-full flex flex-col bg-gray-100 p-5">
        <div class="w-full text-3xl mb-4 font-bold text-left">Billing</div>
        <div class="flex flex-row justify-between bg-gray-100 rounded shadow-lg mb-8">
            <div class="flex flex-col border border-gray-100 bg-white shadow-lg text-left p-4 w-[49%]">
                <div class="flex flex-row mb-2 items-center w-full text-2xl font-bold p-1"><img :src="img" class="w-[60px] rounded-full h-[60px] mr-1 ml-4"><span class="text-xl text-blue-300">OneForShop</span></div>
                <div class="mb-2 w-full text-xl font-bold p-1"><p class="text-gray-300">Switch your subscription to a different type, such as a monthly plan, annual plan, or student plan. And see a list of subscription plans that Windster Pro offers</p></div>
                <div class="mb-2 w-full p-1 text-xl font-bold"><p>llkmglskmdd qwdwqd vlksdmvlkds</p></div>
                <div class="flex flex-row w-full p-1 justify-start text-2xl font-bold"><button class="bg-blue-400 rounded-xl text-white hover:bg-blue-500 p-2 w-[230px]"><i class="fa fa-file-text-o mr-1"></i>change plane</button><button class="hover:bg-gray-100 border border-gray-400 rounded-xl ml-4 p-2 w-[230px]">cancle subscription</button></div>
            </div>
            <div class="flex flex-col border border-gray-100 bg-white shadow-lg text-left p-4 w-[49%]">
                <div class="flex flex-row justify-between"><p class="text-2xl font-bold">Order History</p><p class="text-blue-400 p-1 rounded-xl text-xl font-bold hover:bg-gray-100">View all</p></div>
                <div class="overflow-auto">
                    <table class="table-fixed w-full px-3">
         <thead class="text-xl font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="py-4 w-[280px] pr-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">Transation</div>
                                </th>
                                <th class="py-4 pr-2  w-[200px] whitespace-nowrap">
                                    <div class="font-semibold text-left">Data & Time</div>
                                </th>
                                <th class="py-4 pr-2  w-[200px] whitespace-nowrap">
                                    <div class="font-semibold text-left">amount</div>
                                </th>
                                <th class="py-4 pr-2  w-[180px] whitespace-nowrap">
                                    <div class="font-semibold text-center">status</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-lg divide-y divide-gray-100">
                            <tr class="border-b border-gray-100 py-4">
                                
                                <td class="py-4 whitespace-nowrap">
                                    <div class="font-medium text-gray-800">Payment from Bonnie Green</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left">Apr 23 ,2021</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-sm text-center rounded-2xl bg-green-200">Complete</div>
                                </td>
                                
                            </tr>
                            <tr class="border-b border-gray-100 py-4">
                                
                                <td class="py-4 whitespace-nowrap">
                                    <div class="font-medium text-gray-800">Burak Long</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left">Apr 23 ,2021</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-sm rounded-2xl text-center bg-green-200">Complete</div>
                                </td>
                              
                            </tr>
                            <tr class="border-b border-gray-100 py-4">
                                <td class="py-4 whitespace-nowrap">
                                    <div class="font-medium text-gray-800">Burak Long</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left">Apr 23 ,2021</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-sm rounded-2xl text-center bg-red-200">Cancled</div>
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="text-left p-4 bg-white mb-8 rounded shadow-lg">
            <div class="text-left font-bold text-3xl mb-3">General Information</div>
            <div class="h-auto">
            <div class="flex flex-row justify-between p-2">
            <div class="flex flex-col w-[31%] h-[400px]">
                <div class="mb-2 p-2 w-full">
                    <label class="block text-lg font-bold">First Name</label>
                    <input placeholder="Bonne" type="text" class="border-2 p-2 outline-none focus:border-indigo-600 rounded-xl w-full border-gray-400 bg-gray-100">
                </div>
                <div class="mb-2 p-2 w-full">
                    <label class="block text-lg font-bold">Organization</label>
                    <input placeholder="Organi" type="text" class="border-2 p-2 outline-none focus:border-indigo-600 rounded-xl w-full border-gray-400 bg-gray-100">
                </div>
                <div class="mb-2 p-2 w-full">
                    <label class="block text-lg font-bold">Department</label>
                    <input placeholder="Depart" type="text" class="border-2 p-2 outline-none focus:border-indigo-600 rounded-xl w-full border-gray-400 bg-gray-100">
                </div>
                <div class="mb-2 p-2 w-full">
                    <label class="block text-lg font-bold">City</label>
                    <input placeholder="Khartoum" type="text" class="border-2 p-2 outline-none focus:border-indigo-600 rounded-xl w-full border-gray-400 bg-gray-100">
                </div>
            </div>
            <div class="flex flex-col w-[31%] h-[400px]">
                <div class="mb-2 p-2 w-full">
                    <label class="block text-lg font-bold">Last Name</label>
                    <input placeholder="Kamel" type="text" class="border-2 p-2 outline-none focus:border-indigo-600 rounded-xl w-full border-gray-400 bg-gray-100">
                </div>
                <div class="mb-2 p-2 w-full">
                    <label class="block text-lg font-bold">Role</label>
                    <input placeholder="Role" type="text" class="border-2 p-2 outline-none focus:border-indigo-600 rounded-xl w-full border-gray-400 bg-gray-100">
                </div>
                <div class="mb-2 p-2 w-full">
                    <label class="block text-lg font-bold">country</label>
                    <input placeholder="Sudan" type="text" class="border-2 p-2 outline-none focus:border-indigo-600 rounded-xl w-full border-gray-400 bg-gray-100">
                </div>
                <div class="mb-2 p-2 w-full">
                    <label class="block text-lg font-bold">Email</label>
                    <input placeholder="Bonne23@gmail.com" type="text" class="border-2 p-2 outline-none focus:border-indigo-600 rounded-xl w-full border-gray-400 bg-gray-100">
                </div>
            </div>
            <div class="w-[31%] ">
                <div class="mb-2 p-2 w-full h-full">
                    <label class="block text-lg font-bold">First Name</label>
                    <textarea placeholder="Recipt inf(optional)" class="border-2 p-2 h-[90%] outline-none focus:border-indigo-600 rounded-xl w-full border-gray-400 bg-gray-100"></textarea>
                </div>
                
            </div>
            </div>
            </div>
            <div class="text-left"><button class="w-[120px] p-2 bg-blue-400 text-white text-xl font-bold rounded-xl">Update</button></div>
        </div>
        <div class="text-left p-4 bg-white shadow-lg mb-8 rounded">
            <div class="text-left font-bold text-3xl mb-3">General Information</div>
            <div class="flex flex-row justify-between p-2">
            <div class="flex flex-col w-[49%]">
                <div class="mb-2 p-2 w-full">
                    <label class="block text-lg font-bold">Full Name as displayed *</label>
                    <input placeholder="Enter Your Name" type="text" class="border-2 p-2 outline-none focus:border-indigo-600 rounded-xl w-full border-gray-400 bg-gray-100">
                </div>
                <div class="mb-2 p-2 w-full">
                    <label class="block text-lg font-bold">CVC</label>
                    <input placeholder="******" type="text" class="border-2 p-2 outline-none focus:border-indigo-600 rounded-xl w-full border-gray-400 bg-gray-100">
                </div>
                
            </div>
            <div class="flex flex-col w-[49%]">
                <div class="mb-2 p-2 w-full">
                    <label class="block text-lg font-bold">Card Number</label>
                    <input placeholder="XXXXXXXXXXXXXXXX" type="text" class="border-2 p-2 outline-none focus:border-indigo-600 rounded-xl w-full border-gray-400 bg-gray-100">
                </div>
                <div class="mb-2 p-2 w-full">
                    <label class="block text-lg font-bold">Postal zip</label>
                    <input placeholder="e.g 1234" type="text" class="border-2 p-2 outline-none focus:border-indigo-600 rounded-xl w-full border-gray-400 bg-gray-100">
                </div>
                
            </div>
            </div>
            
            <div class="text-left"><button class="w-[120px] p-2 bg-blue-400 text-white text-xl font-bold rounded-xl">Update</button></div>
        </div>
        <div class="bg-white p-8 flex flex-row shadow-lg rounded mb-8 justify-between">
            <div class="w-[45%] flex flex-row justify-between">
            <a href="#" class="ml-2 hover:underline">Terms and condition</a>
            <a href="#" class="ml-2 hover:underline">Privicy Policey</a>
            <a href="#" class="ml-2 hover:underline">Licensing</a>
            <a href="#" class="ml-2 hover:underline">Cooki olice</a>
            <a href="#" class="ml-2 hover:underline">contact</a>
            </div>
            <div class="w-[45%] flex flex-row justify-end">
            <a href="#" class="mr-8"><i class="fa fa-facebook-square text-gray-500 hover:text-gray-900 text-2xl"></i></a>
            <a href="#" class="mr-8"><i class="fa fa-github-square text-gray-500 hover:text-gray-900 text-2xl"></i></a>
            <a href="#" class="mr-8"><i class="fa fa-instagram text-gray-500 hover:text-gray-900 text-2xl"></i></a>
            <a href="#" class="mr-8"><i class="fa fa-twitter-square text-gray-500 hover:text-gray-900 text-2xl"></i></a>
            <a href="#" class="mr-8"><i class="fa fa-paypal text-gray-500 hover:text-gray-900 text-2xl"></i></a>
            </div>
        </div>
        <div class="w-full mx-auto text-xl p-8">© 2020-2021 OneForShop. All rights reserved.</div>
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