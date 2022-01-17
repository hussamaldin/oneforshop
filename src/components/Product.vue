<template>
    <div class="h-full w-full">
        <!--Popup Forms--><div :class="add?'absolute w-full h-full bg-gray-500 bg-opacity-50 top-0 left-0 overflow-y-auto z-50':'absolute w-full h-full hidden bg-gray-500 bg-opacity-50 top-0 left-0 overflow-y-auto z-50' ">
            <div class="fixed top-[12px] bg-white p-1 rounded-lg left-[400px] border border-gray-300 shadow w-[800px] h-[740px]">
                <div class="w-full text-2xl border-b border-gray-300 flex flex-row justify-between p-4 mb-3"><span >Add User</span><span @click="add=!add" class="cursor-pointer hover:bg-gray-200 rounded px-2 hover:text-gray-600 text-gray-400 text-2xl font-bold">X</span></div>
                <div class="flex flex-col">
                    <div class="flex flex-row justify-between mb-1">
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">Product Name</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="Product">
                        </div>
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">Category</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="Product">
                        </div>
                    </div>
                    <div class="flex flex-row justify-between mb-1">
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">Brand</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="Product">
                        </div>
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">Price</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="Product">
                        </div>
                    </div>
                    <div class="w-full mb-1">
                        <div class="p-2 w-[100%] text-left text-sm font-bold">
                        <label class="block">Product Details</label>
                        <textarea class="border-2 resize-none border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-full h-[140px]"></textarea>
                        </div>
                    </div>
                    <div class="w-full p-2 mb-2">
                        <div class="w-full flex cursor-pointer items-center justify-center relative p-2 h-[160px] border border-gray-300">
                            <input type="file" class=" opacity-0 w-full h-full">
                            <span class="absolute top-[49%] z-10 left-[44%]">Drag And Drop</span>
                        </div>
                    </div>
                    <div class="w-full text-left"><button class="bg-blue-500 w-[100px] h-[40px] rounded-lg hover:bg-blue-700 text-white">Add product</button></div>
                </div>
            </div>
            <!-- main content-->
        </div>

        <div :class="edit?'absolute w-full h-full  bg-gray-500 bg-opacity-50 top-0 left-0 overflow-y-auto z-50':'absolute w-full h-full hidden bg-gray-500 bg-opacity-50 top-0 left-0 overflow-y-auto z-50' ">
            <div class="fixed top-[20px] bg-white rounded-lg left-[400px] border border-gray-300 shadow w-[800px] h-[740px]">
                <div class="flex flex-col">
                    <div class="flex flex-row justify-between mb-2">
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">Product Name</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="Product">
                        </div>
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">Product Name</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="Product">
                        </div>
                    </div>
                    <div class="flex flex-row justify-between mb-2">
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">Product Name</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="Product">
                        </div>
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">Product Name</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="Product">
                        </div>
                    </div>
                    <div class="w-full mb-3">
                        <div class="p-4 w-[100%] text-left text-sm font-bold">
                        <label class="block">Product Name</label>
                        <textarea class="border-2 resize-none border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-full h-[160px]"></textarea>
                        </div>
                    </div>
                    <div class="w-full p-4">
                        <div class="w-full flex cursor-pointer items-center justify-center relative p-4 h-[180px] border border-gray-300">
                            <input type="file" class=" opacity-0 w-full h-full">
                            <span class="absolute top-[49%] z-10 left-[44%]">Drag And Drop</span>
                        </div>
                    </div>
                    <div class="w-full"><button class="bg-blue-500 w-[100px] h-[40px] rounded-lg hover:bg-blue-700 text-white">Edit</button><button @click="edit=!edit" class="bg-blue-500 ml-3 w-[100px] h-[40px] rounded-lg hover:bg-blue-700 text-white">Close</button></div>
                </div>
            </div>
            <!-- main content-->
        </div>

        <div :class="del?'absolute w-full h-full bg-gray-500 bg-opacity-50 top-0 left-0 overflow-y-auto z-50':'absolute w-full h-full hidden bg-gray-500 bg-opacity-50 top-0 left-0 overflow-y-auto z-50' ">
            <div class="fixed top-[240px] p-4 bg-white left-[600px] rounded-lg border border-gray-300 shadow w-[500px] h-[350px]">
                <div class="w-full text-7xl text-red-600 p-4 mb-6"><span ><i class="fa fa-info-circle font-bold"></i></span></div>
                <div class="text-gray-400 mb-8 text-3xl">Are you sure you want do delete this user</div>
                
                    <div class="w-full flex flex-row justify-center"><button class="bg-red-500 mr-4 w-[110px] h-[45px] rounded-lg hover:bg-red-700 text-lg text-white">Yes I'm sure</button><button @click="del=!del" class="border border-gray-400 ml-3 w-[110px] h-[45px] rounded-lg text-lg hover:bg-gray-200">No Cancle</button></div>
                
            </div>
            
        </div>
     <div class="w-full p-3 font-bold text-2xl text-left"><p>All Product</p></div>
     <div class="p-4 w-full flex flex-row items-center justify-between">
         <div class="justify-start flex flex-row space-x-6 py-4 ">
         <div><input type="text" class="border border-gray-300 w-[350px] py-4" placeholder="Search For product"></div>
         <div><button class="w-[40px] h-[40px] hover:bg-gray-100"><i class="fa fa-gear font-bold text-3xl"></i></button></div>
         <div><button class="w-[40px] h-[40px] hover:bg-gray-100"><i class="fa fa-trash font-bold text-3xl"></i></button></div>
         <div><button class="w-[40px] h-[40px] hover:bg-gray-100"><i class="fa fa-info-circle font-bold text-3xl"></i></button></div>
         <div><button class="w-[40px] h-[40px] hover:bg-gray-100"><i class="fa fa-ellipsis-v font-bold text-3xl"></i></button></div>
         </div>
         <div class="justify-end">
         <button @click="add=!add" class="w-[150px] bg-blue-500 font-bold py-2 rounded hover:bg-blue-600 text-white flex flex-row justify-between"><span class="pl-4 text-2xl">+</span><span class="pr-2 text-lg">Add Product</span></button>
         </div>
     </div>
     <table class="table-auto w-full px-3">
         <thead class="text-lg font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th class="py-4 whitespace-nowrap">
                                    <input type="checkbox" class="w-[16px] h-[16px]">
                                </th>
                                <th class="py-4 whitespace-nowrap">
                                    <div class="font-semibold text-left">COURSE NAME</div>
                                </th>
                                <th class="py-4 whitespace-nowrap">
                                    <div class="font-semibold text-left">VIEWERS</div>
                                </th>
                                <th class="py-4 whitespace-nowrap">
                                    <div class="font-semibold text-left">PRICE</div>
                                </th>
                                <th class="py-4 whitespace-nowrap">
                                    <div class="font-semibold text-center">PRIC AFTER TAX</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-lg divide-y divide-gray-100">
                            <tr class="border-b border-gray-100 py-4 hover:bg-gray-100">
                                <td class="py-4 whitespace-nowrap">
                                    <input type="checkbox" class="w-[16px] h-[16px]">
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="font-medium text-gray-800">Burak Long</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left">160,000</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-lg text-center">$1,200.80</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <button @click="edit=!edit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[140px] p-2 text-lg rounded"><i class="fa fa-edit pr-2 text-xl"></i>Edit Item</button><button @click="del=!del" class="ml-2 p-2 bg-red-500 hover:bg-red-700 text-white font-bold w-[140px] text-lg rounded"><i class="fa fa-trash pr-2 text-xl"></i>Delete Item</button>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-100 py-4 hover:bg-gray-100">
                                <td class="py-4 whitespace-nowrap">
                                    <input type="checkbox" class="w-[16px] h-[16px]">
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="font-medium text-gray-800">Burak Long</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left">160,000</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-lg text-center">$1,200.80</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <button @click="edit=!edit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[140px] p-2 text-lg rounded"><i class="fa fa-edit pr-2 text-xl"></i>Edit Item</button><button @click="del=!del" class="ml-2 p-2 bg-red-500 hover:bg-red-700 text-white font-bold w-[140px] text-lg rounded"><i class="fa fa-trash pr-2 text-xl"></i>Delete Item</button>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-100 py-4 hover:bg-gray-100">
                                <td class="py-4 whitespace-nowrap">
                                    <input type="checkbox" class="w-[16px] h-[16px]">
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="font-medium text-gray-800">Burak Long</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left">160,000</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-lg text-center">$1,200.80</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <button @click="edit=!edit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[140px] p-2 text-lg rounded"><i class="fa fa-edit pr-2 text-xl"></i>Edit Item</button><button @click="del=!del" class="ml-2 p-2 bg-red-500 hover:bg-red-700 text-white font-bold w-[140px] text-lg rounded"><i class="fa fa-trash pr-2 text-xl"></i>Delete Item</button>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-100 py-4 hover:bg-gray-100">
                                <td class="py-4 whitespace-nowrap">
                                    <input type="checkbox" class="w-[16px] h-[16px]">
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="font-medium text-gray-800">Burak Long</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left">160,000</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-lg text-center">$1,200.80</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <button @click="edit=!edit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[140px] p-2 text-lg rounded"><i class="fa fa-edit pr-2 text-xl"></i>Edit Item</button><button @click="del=!del" class="ml-2 p-2 bg-red-500 hover:bg-red-700 text-white font-bold w-[140px] text-lg rounded"><i class="fa fa-trash pr-2 text-xl"></i>Delete Item</button>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-100 py-4 hover:bg-gray-100">
                                <td class="py-4 whitespace-nowrap">
                                    <input type="checkbox" class="w-[16px] h-[16px]">
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="font-medium text-gray-800">Burak Long</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left">160,000</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-lg text-center">$1,200.80</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <button @click="edit=!edit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[140px] p-2 text-lg rounded"><i class="fa fa-edit pr-2 text-xl"></i>Edit Item</button><button @click="del=!del" class="ml-2 p-2 bg-red-500 hover:bg-red-700 text-white font-bold w-[140px] text-lg rounded"><i class="fa fa-trash pr-2 text-xl"></i>Delete Item</button>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-100 py-4 hover:bg-gray-100">
                                <td class="py-4 whitespace-nowrap">
                                    <input type="checkbox" class="w-[16px] h-[16px]">
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="font-medium text-gray-800">Burak Long</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left">160,000</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-lg text-center">$1,200.80</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <button @click="edit=!edit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[140px] p-2 text-lg rounded"><i class="fa fa-edit pr-2 text-xl"></i>Edit Item</button><button @click="del=!del" class="ml-2 p-2 bg-red-500 hover:bg-red-700 text-white font-bold w-[140px] text-lg rounded"><i class="fa fa-trash pr-2 text-xl"></i>Delete Item</button>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-100 py-4 hover:bg-gray-100">
                                <td class="py-4 whitespace-nowrap">
                                    <input type="checkbox" class="w-[16px] h-[16px]">
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="font-medium text-gray-800">Burak Long</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left">160,000</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-lg text-center">$1,200.80</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <button @click="edit=!edit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[140px] p-2 text-lg rounded"><i class="fa fa-edit pr-2 text-xl"></i>Edit Item</button><button @click="del=!del" class="ml-2 p-2 bg-red-500 hover:bg-red-700 text-white font-bold w-[140px] text-lg rounded"><i class="fa fa-trash pr-2 text-xl"></i>Delete Item</button>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-100 py-4 hover:bg-gray-100">
                                <td class="py-4 whitespace-nowrap">
                                    <input type="checkbox" class="w-[16px] h-[16px]">
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="font-medium text-gray-800">Burak Long</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left">160,000</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-lg text-center">$1,200.80</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <button @click="edit=!edit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[140px] p-2 text-lg rounded"><i class="fa fa-edit pr-2 text-xl"></i>Edit Item</button><button @click="del=!del" class="ml-2 p-2 bg-red-500 hover:bg-red-700 text-white font-bold w-[140px] text-lg rounded"><i class="fa fa-trash pr-2 text-xl"></i>Delete Item</button>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-100 py-4 hover:bg-gray-100">
                                <td class="py-4 whitespace-nowrap">
                                    <input type="checkbox" class="w-[16px] h-[16px]">
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="font-medium text-gray-800">Burak Long</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left">160,000</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-lg text-center">$1,200.80</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <button @click="edit=!edit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[140px] p-2 text-lg rounded"><i class="fa fa-edit pr-2 text-xl"></i>Edit Item</button><button @click="del=!del" class="ml-2 p-2 bg-red-500 hover:bg-red-700 text-white font-bold w-[140px] text-lg rounded"><i class="fa fa-trash pr-2 text-xl"></i>Delete Item</button>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-100 py-4 hover:bg-gray-100">
                                <td class="py-4 whitespace-nowrap">
                                    <input type="checkbox" class="w-[16px] h-[16px]">
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="font-medium text-gray-800">Burak Long</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left">160,000</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-lg text-center">$1,200.80</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <button @click="edit=!edit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[140px] p-2 text-lg rounded"><i class="fa fa-edit pr-2 text-xl"></i>Edit Item</button><button @click="del=!del" class="ml-2 p-2 bg-red-500 hover:bg-red-700 text-white font-bold w-[140px] text-lg rounded"><i class="fa fa-trash pr-2 text-xl"></i>Delete Item</button>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-100 py-4 hover:bg-gray-100">
                                <td class="py-4 whitespace-nowrap">
                                    <input type="checkbox" class="w-[16px] h-[16px]">
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="font-medium text-gray-800">Burak Long</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left">160,000</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-lg text-center">$1,200.80</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <button @click="edit=!edit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[140px] p-2 text-lg rounded"><i class="fa fa-edit pr-2 text-xl"></i>Edit Item</button><button @click="del=!del" class="ml-2 p-2 bg-red-500 hover:bg-red-700 text-white font-bold w-[140px] text-lg rounded"><i class="fa fa-trash pr-2 text-xl"></i>Delete Item</button>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-100 py-4 hover:bg-gray-100">
                                <td class="py-4 whitespace-nowrap">
                                    <input type="checkbox" class="w-[16px] h-[16px]">
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="font-medium text-gray-800">Burak Long</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left">160,000</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-lg text-center">$1,200.80</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <button @click="edit=!edit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[140px] p-2 text-lg rounded"><i class="fa fa-edit pr-2 text-xl"></i>Edit Item</button><button @click="del=!del" class="ml-2 p-2 bg-red-500 hover:bg-red-700 text-white font-bold w-[140px] text-lg rounded"><i class="fa fa-trash pr-2 text-xl"></i>Delete Item</button>
                                </td>
                            </tr>
                            <tr class="border-b border-gray-100 py-4 hover:bg-gray-100">
                                <td class="py-4 whitespace-nowrap">
                                    <input type="checkbox" class="w-[16px] h-[16px]">
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="font-medium text-gray-800">Burak Long</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left">160,000</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <div class="text-lg text-center">$1,200.80</div>
                                </td>
                                <td class="py-4 whitespace-nowrap">
                                    <button @click="edit=!edit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[140px] p-2 text-lg rounded"><i class="fa fa-edit pr-2 text-xl"></i>Edit Item</button><button @click="del=!del" class="ml-2 p-2 bg-red-500 hover:bg-red-700 text-white font-bold w-[140px] text-lg rounded"><i class="fa fa-trash pr-2 text-xl"></i>Delete Item</button>
                                </td>
                            </tr>
                            </tbody>
     </table>
     <div class="flex flex-row justify-between p-4">
         <div class="justify-start text-2xl font-bold flex flex-row p-2"><button class="hover:bg-gray-200 w-[30px] mx-2"><i class="fa fa-angle-left"></i></button><button class="hover:bg-gray-200 w-[30px] mx-2"><i class="fa fa-angle-right"></i></button><p>Showing 123 of 1298</p></div>
         <div class="justify-end font-bold text-xl p-2 text-white"><button class="bg-blue-500 rounded ml-2 p-1 hover:bg-blue-700 w-[100px]"><i class="fa fa-angle-left px-2"></i>Previos</button><button class="bg-blue-500 hover:bg-blue-700 rounded ml-2 p-1 w-[100px]">Next<i class="fa fa-angle-right px-2"></i></button></div>
     </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            edit:false,
            del:false,
            add:false

        }
    },
    methods:{
    
    }
}
</script>