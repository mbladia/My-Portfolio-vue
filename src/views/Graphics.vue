<template>
    <section class="graphics">
        <AppHeader />
        <div class="container">
            <ul class="graphics-grid">

                <li v-for="graphic in graphics" :key="graphic.pos" :class="graphic.pos">
                    <img  :src="require('@/assets/graphics/' + graphic.imgLink)" alt="">
                </li>
            </ul>
        </div>
        <AppContact />
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
    }
}
</script>

<style lang="scss">
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