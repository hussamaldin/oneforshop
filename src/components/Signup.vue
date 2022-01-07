<template>
<div class="absolute top-0 left-0 w-full h-[950px] bg-gray-100 z-50">
  <div class="text-3xl font-bold text-center w-full p-4 mb-4 text-gray-600">One For Shop</div>
  <div class="flex flex-row bg-white mx-auto my-auto w-[80%]">
            <div class="w-[50%] h-[780px] w-full rounded-l-lg">
             <img :src="img" class="w-full h-full bg-cover">
            </div>
            <div class="w-[50%] h-[780px] rounded-r-lg mx-4 pt-6 pl-4">
              <h3 class="pt-4 text-3xl font-bold text-left">Create Free Account!</h3>
              <form class="w-full h-full">
                <div class="flex flex-col mb-4 my-4 py-4">
                <div class="mb-6 my-4 text-left py-4">
                  <label class="block  mb-2 text-xl font-bold text-gray-700">Email</label>
                  <input type="text" placeholder="Email" class="w-full px-3 py-3 text-lg leading-tight text-gray-700 border rounded shadow appearance bg-gray-100 focus:outline-none focus:border-indigo-500">
                </div>
                
                 <div class="mb-6 text-left py-4">
									<label class="block mb-2 text-xl font-bold text-gray-700" for="password">Password</label>
									<input	class="w-full px-3 py-3 text-lg leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none bg-gray-100 focus:border-indigo-500" type="password" placeholder="Password"/>
								</div>
                <div class="mb-6 text-left py-4">
									<label class="block mb-2 text-xl font-bold text-gray-700" for="password conf">Confirm Password</label>
									<input
										class="w-full px-3 py-3 text-lg leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none bg-gray-100 focus:border-indigo-500" type="password" placeholder="Confirm Password"/>
								</div>
                <div class="text-left mb-6 py-4 text-lg">
                  <input type="checkbox" class="w-[20px]"><span>I accept <a href="#" class="text-blue-500 hover:underline"> Terms and Condition</a></span>
                </div>
                <div class="mb-6 text-left py-4">
								<button	class="w-[180px] px-4 py-3 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none bg-gray-100 focus:border-indigo-500" type="button">Create Account</button>
							</div>
              <div class="text-center py-1 py-4">
                <span class="inline-block text-xl">Alerady Have an Account ?<a href="#" class="text-blue-500 hover:underline">Login here</a></span>
              </div>
              </div>
              </form>
            </div>
  </div>
  </div>
</template>
<script>

export default {
  
  data(){
    return{
      img:require('../assets/sign.jpg')
    }
  }
}
</script>