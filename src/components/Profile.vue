<template>
    <div class="w-full h-full bg-gray-100 p-4">
        <div class="text-2xl font-bold text-left p-2">Profile</div>
        <div class="flex flex-row justify-between mb-8">
            <div class="flex flex-col space-y-4 w-[35%]">
                <div class="border-gray-400 shadow text-left p-4 bg-white">
                    <img :src="img" class="w-[80px] mb-2 h-[80px]">
                    <p class="text-xl font-bold mb-2">Hussam Aldin</p>
                    <p class="text-gray-400 text-xl mb-2"><i class="fa fa-suitcase text-gray-700 pr-2"></i>FrontEnd Develoer</p>
                    <p class="text-gray-400 text-xl mb-2"><i class="fa fa-map-marker text-gray-700 pr-2"></i>Khartoum , sudan</p>
                    <p class="text-gray-400 text-xl mb-2 font-bold">Email Address</p>
                    <p class=" text-xl mb-2 font-bold">hosaamdaffala09620@gmail.com</p>
                    <p class="text-gray-400 text-xl mb-2 font-bold">Home Address</p>
                    <p class=" text-xl mb-2 font-bold">92 Miles Drive, Newark, NJ 07103, bahry, sudan</p>
                    <p class="text-gray-400 text-xl mb-2 font-bold">Phone Number</p>
                    <p class="font-bold text-xl mb-2">+249920499020</p>
                    <p class="text-xl mb-2 font-bold">Software Skills</p>
                    <p><i class="fa fa-vimeo-square font-bold text-2xl text-yellow-400 ml-2"></i><i class="fa fa-viadeo-square font-bold text-2xl text-indigo-400 ml-2"></i><i class="fa fa-linkedin-square ml-2 text-2xl font-bold text-blue-400"></i><i class="fa fa-lastfm-square text-2xl font-bold text-purple-400 ml-2"></i><i class="fa fa-html5 ml-2 text-2xl font-bold text-red-400"></i></p>
                </div>
                <div class="border-gray-400 shadow text-left p-4 bg-white">
                    <div class="text-xl font-bold mb-2">Skills</div>
                    <div class="p-2 flex flex-row flex-wrap">
                        <span class="text-xl p-1 rounded bg-green-100 text-green-400 m-4">Ajax</span><span class="text-xl p-1 rounded bg-green-100 text-green-400 m-4">Database</span><span class="text-xl p-1 rounded bg-green-100 text-green-400 m-4">Ui Design</span><span class="text-xl p-1 rounded bg-green-100 text-green-400 m-4">Vuejs</span>
                        <span class="text-xl p-1 rounded bg-green-100 text-green-400 m-4">Wordpree</span><span class="text-xl p-1 rounded bg-green-100 text-green-400 m-4">moblie web design</span><span class="text-xl p-1 rounded bg-green-100 text-green-400 m-2">Brand Desgin</span><span class="text-xl p-1 rounded bg-green-100 text-green-400 m-4">Tailwind</span>
                        <span class="text-xl p-1 rounded bg-green-100 text-green-400 m-4">Json</span><span class="text-xl p-1 rounded bg-green-100 text-green-400 m-4">Prototyping</span>
                    </div>
                </div>
                <div class="border-gray-400 shadow text-left p-4 bg-white">
                    <div class="text-xl font-bold mb-2">Hobbies</div>
                    <div class="p-2 flex flex-row flex-wrap">
                        <span class="text-xl text-indigo-500 p-1 rounded bg-indigo-200 m-4">Footbal</span><span class="text-xl p-1 rounded bg-indigo-200 text-indigo-500 m-4">Movies watching</span><span class="text-xl p-1 rounded bg-indigo-200 text-indigo-500 m-4">Gaming</span>
                        <span class="text-xl text-indigo-500 p-1 rounded bg-indigo-200 m-4">Coding</span><span class="text-xl p-1 text-indigo-500 rounded bg-indigo-200 m-4">Walking</span><span class="text-xl p-1 rounded bg-indigo-200 text-indigo-500 m-2">Traviling</span>
                        <span class="text-xl p-1 rounded text-indigo-500 bg-indigo-200 m-4">Json</span><span class="text-xl p-1 text-indigo-500 rounded bg-indigo-200 m-4">Listinging to music</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col space-y-4 w-[60%]">
                <div class="border-gray-400 shadow text-left  p-12 bg-white">
                <div class="font-bold text-3xl">
                    General Information
                </div>
                <div class="font-bold text-2xl mb-1">About Me</div>
                <div class="text-xl leading-8 text-gray-400 mb-4">Dedicated, passionate, and accomplished Full Stack Developer with 9+ years of progressive experience working as an Independent Contractor for Google and developing and growing my educational social network that helps others learn programming, web design, game development, networking.
Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects.</div>
            <div class="flex flex-col space-y-8 text-xl">
                <div class="flex flex-row justify-between">
                    <div><p class="text-gray-400">Education</p><p>Thomas Jeff High School, Stanford University</p></div>
                    <div><p class="text-gray-400">Work History</p><p>Twitch, Google, Apple</p></div>
                </div>
                <div class="flex flex-row justify-between">
                    <div><p class="text-gray-400">Join Date</p><p>12/12/2021</p></div>
                    <div><p class="text-gray-400">Language</p><p>Arabic , English</p></div>
                </div>
                <div class="flex flex-row justify-between">
                    <div><p class="text-gray-400">Organization</p><p>Working For Me now</p></div>
                    <div><p class="text-gray-400">Role</p><p>Web Design</p></div>
                </div>
                <div class="flex flex-row justify-between">
                    <div><p class="text-gray-400">Department</p><p>Engenier</p></div>
                    <div><p class="text-gray-400">Birthday</p><p>11/10/1999</p></div>
                </div>
            </div>         
            </div>
            <div class="border-gray-400 shadow text-left  p-12 bg-white text-2xl">
                <div class="flex flex-col space-y-8">
                    <div class="flex flex-row justify-between">
                        <div class="w-[45%]">
                            <p>Vue</p>
                            <div class="bg-gray-300 w-full h-[10px] rounded-full"><p class="rounded-full bg-gray-700 w-[92%] h-full"></p></div>
                        </div>
                        <div class="w-[45%]">
                            <p>Vue Cli</p>
                            <div class="bg-gray-300 w-full h-[10px] rounded-full"><p class="rounded-full bg-gray-700 w-[60%] h-full"></p></div>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between">
                        <div class="w-[45%]">
                            <p>Html</p>
                            <div class="bg-gray-300 w-full h-[10px] rounded-full"><p class="rounded-full bg-gray-700 w-[80%] h-full"></p></div>
                        </div>
                        <div class="w-[45%]">
                            <p>Vuex</p>
                            <div class="bg-gray-300 w-full h-[10px] rounded-full"><p class="rounded-full bg-gray-700 w-[80%] h-full"></p></div>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between">
                        <div class="w-[45%]">
                            <p>Laravel</p>
                            <div class="bg-gray-300 w-full h-[10px] rounded-full"><p class="rounded-full bg-gray-700 w-[30%] h-full"></p></div>
                        </div>
                        <div class="w-[45%]">
                            <p>Ajax</p>
                            <div class="bg-gray-300 w-full h-[10px] rounded-full"><p class="rounded-full bg-gray-700 w-[50%] h-full"></p></div>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between">
                        <div class="w-[45%]">
                            <p>Tailwind</p>
                            <div class="bg-gray-300 w-full h-[10px] rounded-full"><p class="rounded-full bg-gray-700 w-[90%] h-full"></p></div>
                        </div>
                        <div class="w-[45%]">
                            <p>Json</p>
                            <div class="bg-gray-300 w-full h-[10px] rounded-full"><p class="rounded-full bg-gray-700 w-[65%] h-full"></p></div>
                        </div>
                    </div>
                    
                </div>
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