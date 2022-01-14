<template>
    <div class="w-full h-full bg-gray-100 p-4">
        <div class="text-2xl font-bold text-left p-2">User Settings</div>
        <div class="flex flex-row justify-between mb-8">
            <div class="flex flex-col space-y-4 w-[35%]">
                <div class="border-gray-400 shadow text-left text-xl p-8 bg-white">
                    <img :src="img" class="w-[140px] mb-4 rounded h-[140px]">
                     <p class="mb-4">Hussam Aldin</p>
                     <p class="text-gray-500 mb-4">Software Engineer</p>
                     <button class="bg-blue-500 hover:bg-blue-700 h-[40px] rounded w-[200px] text-white"><i class="fa fa-cloud-upload mr-3"></i>change picture</button>
                </div>
                <div class="border-gray-400 shadow text-left text-xl p-8 mb-6 bg-white">
                    
                     <p class="mb-4 text-xl">Language & Times</p>
                     <div class="mb-6 p-2">
                         <select class="text-lg font-bold rounded border-2 border-gray-500 text-gray-400 h-[40px] w-full pl-5 pr-10 bg-white focus:border-indigo-400 focus:outline-none">
                               <option>English(Us)</option>
                               <option>Spanish</option>
                               <option>France</option>
                               <option>lwcwklmk</option>
                         </select>
                     </div>
                     <p class=" text-xl mb-4">Time Zone</p>
                     <div class="mb-6 p-2">
                         <select class="text-lg font-bold rounded border-2 border-gray-500 text-gray-400 h-[40px] w-full pl-5 pr-10 bg-white focus:border-indigo-400 focus:outline-none">
                               <option>English(Us)</option>
                               <option>Spanish</option>
                               <option>France</option>
                               <option>lwcwklmk</option>
                         </select>
                     </div>
                     <button class="bg-blue-500 hover:bg-blue-700 h-[40px] rounded w-[100px] text-lg text-white">Save all</button>
                </div>
                <div class="border-gray-400 shadow text-left text-lg p-8 mb-6 bg-white">
                     <p class="mb-4 text-xl">Social account</p>
                     <div class="flex flex-row items-center justify-between mb-3 h-[80px]">
                         <div><i class="fa fa-github text-2xl"></i></div>
                         <div class="w-[150px]"><p class="truncate">Github account</p><p class="truncate">www.github.com</p></div>
                         <div><button class="w-[120px] hover:bg-gray-200 p-2 border rounded-lg border-gray-300">Disconect</button></div>
                     </div>
                     <div class="flex flex-row items-center justify-between mb-3 h-[80px]">
                         <div><i class="fa fa-facebook-square text-2xl"></i></div>
                         <div class="w-[150px]"><p class="truncate">Facebook account</p><p class="truncate">www.facebook.com</p></div>
                         <div><button class="w-[120px] hover:bg-gray-200 p-2 border rounded-lg border-gray-300">Disconect</button></div>
                     </div>
                     <div class="flex flex-row items-center justify-between mb-3 h-[80px]">
                         <div><i class="fa fa-twitter-square text-2xl"></i></div>
                         <div class="w-[150px]"><p class="truncate">Twitter account</p><p class="truncate">www.twitter.com</p></div>
                         <div><button class="w-[120px] text-white hover:bg-blue-600 bg-blue-400 p-2 rounded-lg">Connect</button></div>
                     </div>
                     <div class="flex flex-row items-center justify-between mb-3 h-[80px]">
                         <div><i class="fa fa-instagram text-2xl"></i></div>
                         <div class="w-[150px]"><p class="truncate">instagram account</p><p class="truncate">www.instagram.com</p></div>
                         <div><button class="w-[120px] text-white hover:bg-blue-600 bg-blue-400 p-2 rounded-lg">connect</button></div>
                     </div>
                     <button class="bg-blue-500 h-[40px] hover:bg-blue-700 rounded w-[100px] text-lg text-white">Save all</button>
                </div>
                <div class="border-gray-400 shadow text-left text-lg p-8 mb-6 bg-white">
                    <div class="mb-4 text-xl">Other accounts</div>
                    <div class="flex flex-col p-3 border-b-2 border-gray-300">
                        <div class="flex flex-row mb-4 space-y-3">
                        <div><img :src="img" class="w-[50px] h-[50px] rounded-full"></div>
                        <div class="px-4 ml-3"><p class="font-bold text-sm">Hussam aldin</p><p class="text-blue-300">Khartoum, sudan</p><p>Last seen: 1 min ago</p></div>
                        </div>
                        <div class="w-full"><button class="border border-gray-200 p-1 w-full rounded-lg">Disconect</button></div>
                    </div>
                    <div class="flex flex-col p-3 mb-3 border-b-2 border-gray-300">
                        <div class="flex flex-row mb-4 space-y-3">
                        <div><img :src="img" class="w-[50px] h-[50px] rounded-full"></div>
                        <div class="px-4 ml-3"><p class="font-bold text-sm">Hussam aldin</p><p class="text-blue-300">Khartoum, sudan</p><p>Last seen: 1 min ago</p></div>
                        </div>
                        <div class="w-full"><button class="border border-gray-200 p-1 w-full rounded-lg">Disconect</button></div>
                    </div>
                    <div class="flex flex-col p-3 mb-3 border-b-2 border-gray-300">
                        <div class="flex flex-row mb-4 space-y-3">
                        <div><img :src="img" class="w-[50px] h-[50px] rounded-full"></div>
                        <div class="px-4 ml-3"><p class="font-bold text-sm">Hussam aldin</p><p class="text-blue-300">Khartoum, sudan</p><p>Last seen: 1 min ago</p></div>
                        </div>
                        <div class="w-full"><button class="border border-gray-200 p-1 w-full rounded-lg">Disconect</button></div>
                    </div>
                    <div class="flex flex-col p-3 mb-3 border-b-2 border-gray-300">
                        <div class="flex flex-row mb-4 space-y-3">
                        <div><img :src="img" class="w-[50px] h-[50px] rounded-full"></div>
                        <div class="px-4 ml-3"><p class="font-bold text-sm">Hussam aldin</p><p class="text-blue-300">Khartoum, sudan</p><p>Last seen: 1 min ago</p></div>
                        </div>
                        <div class="w-full"><button class="border border-gray-200 p-2 w-full rounded-lg">Disconect</button></div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col space-y-4 w-[60%]">
                <div class="border-gray-400 shadow text-left text-xl p-8 mb-6 bg-white">
                    <div class="mb-4 text-2xl">General information</div>
                    <div class="flex flex-col">
                    <div class="flex flex-row justify-between mb-2">
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">First Name</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="F name">
                        </div>
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">Last Name</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="L name">
                        </div>
                    </div>
                    <div class="flex flex-row justify-between mb-2">
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">City</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="Khartoum">
                        </div>
                        <div class="p-4 w-[50%] text-left text-lg font-bold">
                        <label class="block">Country</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="Sudan">
                        </div>
                    </div>
                    <div class="flex flex-row justify-between mb-2">
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">Address</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="Khartoum">
                        </div>
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">Email</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="Hussam@gmail.com">
                        </div>
                    </div>
                    <div class="flex flex-row justify-between mb-2">
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">Phone number</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="0920499020">
                        </div>
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">Birthday</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="1999/10/11">
                        </div>
                    </div>
                    <div class="flex flex-row justify-between mb-2">
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">Organization</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="OneForrShop">
                        </div>
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">Role</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="Role">
                        </div>
                    </div>
                    <div class="flex flex-row justify-between mb-2">
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">Department</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="Software">
                        </div>
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">Zip/postal code</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="Postal code">
                        </div>
                    </div>
                    <div class="w-full text-left"><button class="bg-blue-500 w-[100px] text-lg h-[40px] rounded-lg hover:bg-blue-700 text-white">Save all</button></div>
                </div>
                </div>

                <div class="border-gray-400 shadow text-left text-2xl p-8 bg-white">
                    <div class="flex flex-col">
                    <div class="flex flex-row justify-between mb-2">
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">First Name</label>
                        <input type="text"  class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="First Name">
                        </div>
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">Last Name</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="Last Name">
                        </div>
                    </div>
                    <div class="flex flex-row justify-between mb-2">
                        <div class="p-4 w-[50%] text-left text-sm font-bold">
                        <label class="block">City</label>
                        <input type="text" class="border-2 border-gray-300 p-1 outline-none focus:border-indigo-300 bg-gray-100 w-[90%] rounded-lg h-[45px]" placeholder="City">
                        </div>
                    </div>
                    <div class="flex flex-row justify-between mb-2">
                        <div class="p-4 w-[60%] text-left text-lg font-bold">
                        <p class="text-lg text-gray-600">Password requirments : </p>
                        <p class="text-sm text-gray-500">Ensure that these requirements are met:</p>
                        <p class="text-gray-400">At least 10 characters (and up to 100 characters)
                           At least one lowercase character
                           Inclusion of at least one special character, e.g., ! @ # ?
                           Some text here zoltan
                        </p>
                        </div>
                    </div>
                    <div class="w-full text-left"><button class="bg-blue-500 w-[100px] text-lg h-[40px] rounded-lg hover:bg-blue-700 text-white">Save all</button></div>
                </div>
            </div>
                <div class="border-gray-400 shadow text-left text-2xl p-8 bg-white">
                    <div class="flex flex-col space-y-8 mb-4">
                        <div class="flex flex-row justify-between border-b-2 border-gray-400 p-3">
                            <div class="flex flex-row justify-start">
                            <div><i class="fa fa-desktop text-2xl"></i></div>
                            <div class="ml-4"><p class="text-lg">ncaaaa 123.123.123.123</p><p class="text-sm text-gray-400">Chrome on IPhone</p></div>
                            </div>
                            <div class="justify-end"><button class="border border-gray-300 text-sm rounded-lg hover:bg-gray-200 w-[100px]">Revoke</button></div>
                        </div>
                        <div class="flex flex-row justify-between p-3">
                            <div class="flex flex-row justify-start">
                            <div><i class="fa fa-mobile-phone text-3xl"></i></div>
                            <div class="ml-4"><p class="text-lg">Khartoum 143.101.123.199</p><p class="text-sm text-gray-400">Chrome on Laptop</p></div>
                            </div>
                            <div class="justify-end"><button class="border border-gray-300 rounded-lg text-sm hover:bg-gray-200 w-[100px]">Revoke</button></div>
                        </div>
                    </div>
                        <div class="w-full text-left"><button class="bg-blue-500 w-[100px] text-sm h-[40px] rounded-lg hover:bg-blue-700 text-white">See more</button></div>
                </div>
                
            </div>
        </div>
      
          <div class="flex flex-row justify-between mb-14">
              <div class="w-[48%]">
                  <div class="border-gray-400 shadow text-left text-xl p-8 bg-white">
                      <div class="mb-4 p-2"><p class="text-xl font-bold">Alert & Notifation</p><p class="text-gray-400 text-lg">You can set up Themesberg to get notifications</p></div>
                      <div class="flex flex-row justify-between border-b-2 p-2 mb-6 border-gray-300">
                          <div class="justify-start"><p>Company news</p><p class="text-gray-400 text-sm text-wrap w-[350px]">Get Themesberg news, announcements, and product updates</p></div>
                          <div class="justify-end"><div class="w-[58px] flex h-[33px] items-center justify-end p-1 rounded-full bg-blue-500"><span class="h-[28px] w-[28px] rounded-full bg-white"></span></div></div>
                      </div>
                      <div class="flex flex-row justify-between border-b-2 p-2 mb-6 border-gray-300">
                          <div class="justify-start"><p>Account activity</p><p class="text-gray-400 text-sm text-wrap w-[350px]">Get important notifications about you or activity you've missed</p></div>
                          <div class="justify-end"><div class="w-[58px] flex h-[33px] items-center justify-end p-1 rounded-full bg-blue-500"><span class="h-[28px] w-[28px] rounded-full bg-white"></span></div></div>
                      </div>
                      <div class="flex flex-row justify-between border-b-2 p-2 mb-6 border-gray-300">
                          <div class="justify-start"><p>Meetups near you</p><p class="text-gray-400 text-sm text-wrap w-[350px]">Get an email when a Dribbble Meetup is posted close to my location</p></div>
                          <div class="justify-end"><div class="w-[58px] flex h-[33px] items-center justify-start p-1 rounded-full bg-gray-200"><span class="h-[28px] w-[28px] rounded-full bg-white"></span></div></div>
                      </div>
                      <div class="flex flex-row justify-between border-b-2 p-2 mb-6 border-gray-300">
                          <div class="justify-start"><p>New Message</p><p class="text-gray-400 text-sm text-wrap w-[350px]">Get Themsberg news, announcements, and product updates</p></div>
                          <div class="justify-end"><div class="w-[58px] flex h-[33px] items-center justify-end p-1 rounded-full bg-blue-500"><span class="h-[28px] w-[28px] rounded-full bg-white"></span></div></div>
                      </div>
                        <div class="w-full text-left"><button class="bg-blue-500 w-[100px] text-sm h-[40px] rounded-lg hover:bg-blue-700 text-white">Save all</button></div>
                  </div>
              </div>
              <div class="w-[48%]">
                  <div class="border-gray-400 shadow text-left text-xl p-8 bg-white">
                      <div class="mb-4 p-2"><p class="text-xl font-bold">Alert & Notifation</p><p class="text-gray-400 text-lg">You can set up Themesberg to get notifications</p></div>
                      <div class="flex flex-row justify-between border-b-2 p-2 mb-6 border-gray-300">
                          <div class="justify-start"><p>Company news</p><p class="text-gray-400 text-sm text-wrap w-[350px]">Get Themesberg news, announcements, and product updates</p></div>
                          <div class="justify-end"><div class="w-[58px] flex h-[33px] items-center justify-end p-1 rounded-full bg-blue-500"><span class="h-[28px] w-[28px] rounded-full bg-white"></span></div></div>
                      </div>
                      <div class="flex flex-row justify-between border-b-2 p-2 mb-6 border-gray-300">
                          <div class="justify-start"><p>Account activity</p><p class="text-gray-400 text-sm text-wrap w-[350px]">Get important notifications about you or activity you've missed</p></div>
                          <div class="justify-end"><div class="w-[58px] flex h-[33px] items-center justify-end p-1 rounded-full bg-blue-500"><span class="h-[28px] w-[28px] rounded-full bg-white"></span></div></div>
                      </div>
                      <div class="flex flex-row justify-between border-b-2 p-2 mb-6 border-gray-300">
                          <div class="justify-start"><p>Meetups near you</p><p class="text-gray-400 text-sm text-wrap w-[350px]">Get an email when a Dribbble Meetup is posted close to my location</p></div>
                          <div class="justify-end"><div class="w-[58px] flex h-[33px] items-center justify-end p-1 rounded-full bg-blue-500"><span class="h-[28px] w-[28px] rounded-full bg-white"></span></div></div>
                      </div>
                      <div class="flex flex-row justify-between border-b-2 p-2 mb-6 border-gray-300">
                          <div class="justify-start"><p>New Message</p><p class="text-gray-400 text-sm text-wrap w-[350px]">Get Themsberg news, announcements, and product updates</p></div>
                          <div class="justify-end"><div class="w-[58px] flex h-[33px] items-center justify-start p-1 rounded-full bg-gray-200"><span class="h-[28px] w-[28px] rounded-full bg-white"></span></div></div>
                      </div>
                        <div class="w-full text-left"><button class="bg-blue-500 w-[100px] text-sm h-[40px] rounded-lg hover:bg-blue-700 text-white">Save all</button></div>
                  </div>
              </div>
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
        <div class="w-full mx-auto text-xl p-8 mb-8">© 2020-2021 OneForShop. All rights reserved.</div> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            img:require('../assets/jese.png')
        }
    }
}
</script>