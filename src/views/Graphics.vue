<template>
    <section ref="graphics" class="graphics">
        <AppHeader ref="nav" v-on:clicked="isDarkEnabled($event)" />
        <div class="container">
            <ul class="graphics-grid">

                <li v-for="graphic in graphics" :key="graphic.pos" :class="graphic.pos">
                    <img  :src="require('@/assets/graphics/' + graphic.imgLink)" alt="">
                </li>
            </ul>
        </div>
        <AppContact ref="contact" />
    </section>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppContact from '../components/AppContact.vue'
export default {
    name: "PageGraphics",
    components:{
        AppHeader,
        AppContact
    },
    data(){
        return{
            isDarkMode: false,
            darkModeStorage: localStorage.getItem('darkMode'),
            graphics: [
                {
                    
                    pos: "landscape",
                    imgLink: "banner-30.jpg",
                },
                {
                    pos: "landscape",
                    imgLink: "sanitize.jpg",
                },
                {
                    pos: "landscape",
                    imgLink: "banner-31-4.jpg",
                },
                {
                    pos: "portrait",
                    imgLink: "acrolyic-jobee.jpg",
                },
                {
                    pos: "landscape",
                    imgLink: "gif-27.gif",
                },
                {
                    pos: "landscape",
                    imgLink: "map-foodbuddy.jpg",
                },
                {
                    pos: "landscape",
                    imgLink: "foodbuddy-graphics-1.jpg",
                },
                {
                    pos: "portrait",
                    imgLink: "acrolyic-321.jpg",
                }
            ]
        }
    },
    methods:{
        isDarkEnabled(updatedMode){
            if(this.isDarkMode == true && updatedMode == true){
                this.disableDarkMode()
                this.isDarkMode = false
            }
            else if(updatedMode == true){
                this.enableDarkMode()
                this.isDarkMode = true
            }else if(updatedMode == false){
                this.disableDarkMode()
                this.isDarkMode = false
            }
        },
        disableDarkMode(){
            const nav = this.$refs.nav
            const contact = this.$refs.contact


            nav.$refs.nav.style.background = null
            this.$refs.graphics.style.background = null
            contact.$refs.contact.style.background = null
            localStorage.setItem('darkMode', null);
        },
        enableDarkMode(){
            const nav = this.$refs.nav
            const contact = this.$refs.contact

            nav.$refs.nav.style.background = "#191919"
            this.$refs.graphics.style.background = "#303A48"
            contact.$refs.contact.style.background = "#191919"
            localStorage.setItem('darkMode', true);
        },
    },
    mounted(){
        if(this.darkModeStorage == "true"){
            this.enableDarkMode()
            this.isDarkMode = true
        }
    }
}
</script>

<style lang="scss" scoped>
    .container{
        padding: 20px 0;

        .graphics-grid{     
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 10px;
            grid-auto-flow: dense;
            list-style: none;
            padding: 0 20px;
            li.landscape {
                grid-column-end: span 2;
            }
            li{
                img{
                    width: 100%;
                    height: auto;
                    transition: all ease-in-out .3s;
                }
                
            }
            
        }
    }
    
</style>