<template>
    <div class="flex items-center justify-center p-4">
        <div class="w-[700px] flex flex-col border rounded border-gray-200 overflow-hidden">
            <div class="flex flex-row h-[350px]">
                <div class="w-[10%] h-full bg-gray-100 cursor-pointer flex justify-center items-center group hover:bg-gray-200" @click="prev()"><span><i class="fa fa-angle-left group-hover:text-4xl text-2xl font-bold"></i></span></div>
                <div class="w-[80%] h-full rounded"><img :src="currentImage"  class="w-full h-full rounded transition ease-in-out duration-700"></div>
                <div class="w-[10%] h-full bg-gray-100 cursor-pointer flex justify-center items-center group hover:bg-gray-200" @click="next()"><span><i class="fa fa-angle-right group-hover:text-4xl text-2xl font-bold"></i></span></div>
            </div>
            <div class="w-full h-[250px] overflow-auto inline-block">
                <img v-for="(img ,index) in images" :key="index" @click="activateImage(index)" :src="img.big" :class="['inline cursor-pointer w-[250px] h-full', (activeImage == index) ? 'opacity-90' : '']">
            </div>
        </div>
    </div>
    <div class="flex items-center justify-center p-4 mt-4">
        <table class="table-auto w-full px-3">
            <thead class="text-lg font-semibold uppercase bg-gray-50 text-gray-400">
                <tr>
                    <th class="py-4 whitespace-nowrap">
                        <select v-model="tid">
                           <option disabled value="">Id</option>
                           <option>5</option>
                           <option>6</option>
                           <option>7</option>
                           <option>8</option>
                           <option>9</option>
                           <option>10</option>
                        </select>
                    </th>
                    <th class="py-4 whitespace-nowrap">
                        <select v-model="tname">
                           <option disabled value="">Name</option>
                           <option>Hussam</option>
                           <option>Omer</option>
                           <option>Hazim</option>
                           <option>Ali</option>
                           <option>Mohamed</option>
                           <option>Yasir</option>
                        </select>
                    </th>
                    <th class="py-4 whitespace-nowrap">
                        <select v-model="tgender">
                           <option disabled value="">Gender</option>
                           <option>Male</option>
                           <option>Female</option>
                        </select>
                    </th>
                    <th class="py-4 whitespace-nowrap">
                        <select v-model="tage">
                           <option disabled value="">Age</option>
                           <option>20</option>
                           <option>22</option>
                           <option>30</option>
                           <option>25</option>
                           <option>18</option>
                           <option>21</option>
                        </select>
                    </th>
                </tr>
            </thead>
            <tbody class="text-lg divide-y divide-gray-100">
                <tr class="border-b border-gray-100 py-4 hover:bg-gray-100" v-for="(drop,index) in dropt" :key="index">
                    <td class="py-4 whitespace-nowrap">{{drop.id}}</td>
                    <td class="py-4 whitespace-nowrap">{{drop.name}}</td>
                    <td class="py-4 whitespace-nowrap">{{drop.gender}}</td>
                    <td class="py-4 whitespace-nowrap">{{drop.age}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            images: [
                    {
                        id: '1',
                        big: require("../assets/images.png"),
                        thumb: 'images/thumbs/p1.jpeg'
                    },
                    {
                        id: '2',
                        big: require("../assets/Swagger.jpg"),
                        thumb: 'images/thumbs/p2.jpeg'
                    },
                    {
                        id: '3',
                        big: require("../assets/jese.png"),
                        thumb: 'images/thumbs/p3.jpeg'
                    },
                    {
                        id: '4',
                        big: require("../assets/nikon.jpg"),
                        thumb: 'images/thumbs/p4.jpeg'
                    },
                    {
                        id: '5',
                        big: require("../assets/images.png"),
                        thumb: 'images/thumbs/p1.jpeg'
                    },
                    {
                        id: '6',
                        big: require("../assets/Swagger.jpg"),
                        thumb: 'images/thumbs/p2.jpeg'
                    },
                    {
                        id: '7',
                        big: require("../assets/jese.png"),
                        thumb: 'images/thumbs/p3.jpeg'
                    },
                    {
                        id: '8',
                        big: require("../assets/nikon.jpg"),
                        thumb: 'images/thumbs/p4.jpeg'
                    }
                ],
                droptable:[
                    {
                        id:'5',
                        name:"Hussam",
                        gender:"male",
                        age:"22"
                    },
                    {
                        id:'6',
                        name:"Ali",
                        gender:"male",
                        age:"18"
                    },
                    {
                        id:'7',
                        name:"Mohamed",
                        gender:"male",
                        age:"30"
                    },
                    {
                        id:'8',
                        name:"Omer",
                        gender:"male",
                        age:"25"
                    },
                    {
                        id:'9',
                        name:"Hazim",
                        gender:"male",
                        age:"18"
                    },
                    {
                        id:'10',
                        name:"Zainb",
                        gender:"Female",
                        age:"18"
                    },
                    {
                        id:'11',
                        name:"Samia",
                        gender:"Female",
                        age:"25"
                    },
                    {
                        id:'12',
                        name:"Yasir",
                        gender:"male",
                        age:"22"
                    },
                    {
                        id:'13',
                        name:"Saad",
                        gender:"Female",
                        age:"22"
                    },

                ],
                //Index of the active image on the images array
                activeImage: 0,
                tage:'',
                tgender:'',
                tname:'',
                tid:''
        }
    },
    computed : {
        dropt(){

            if(this.tage === '' && this.tgender === '' && this.tname === '' && this.tid === ''){
                return this.droptable
            }
            else{
                let drop=this.droptable;
                if(this.tid){
                 drop=drop.filter((dat) => dat.id === this.tid )
                }
                if(this.tname){
                 drop=drop.filter((dat) => dat.name === this.tname )
                }
                if(this.tgender){
                 drop=drop.filter((dat) => dat.gender === this.tgender )
                }
                if(this.tage){
                 drop=drop.filter((dat) => dat.age === this.tage)
                }
                 return drop;
            }
        },
    currentImage(){
        return this.images[this.activeImage].big
    }
    },
    methods :{
        next(){
            var active=this.activeImage +1;
            if(active >= this.images.length){
                active=0;
            }
            this.activateImage(active)

        },
        prev(){
            var active=this.activeImage - 1;
            if(active < 0){
                active=this.images.length - 1;
            }
            this.activateImage(active)

        },
        activateImage(imageIndex) {
                this.activeImage = imageIndex;
            }
    }
}
</script>