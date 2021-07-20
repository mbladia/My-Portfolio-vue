<template>
    <transition name="fade">
        <section class="sidebar" @click.self="close">
            <div class="sidebar-overlay" @click="$emit('close')">
                <div class="sidebar-body" ref="sidebarbody" @click.stop>
                    <div class="sidebar-header">
                        <img @click="$emit('close')" class="sidebar-close" src="@/assets/close.svg" alt="">
                        <a @click="externalLink()">Visit Website</a>
                    </div>
                    <div class="sidebar-content">
                        <h1 class="title">{{ sidebarTitle }}</h1>
                        <p class="desc">{{ sidebarDesc }}</p>
                        <p class="tools"><span class="tool-title">Tools: </span><span v-for='tool in sidebarTools' :key="tool">{{ tool }}, </span> </p>
                        <div class="sidebar-images">
                            <img v-for='imgLink in sidebarImages' :key="imgLink" :src="require('@/assets/projects/' + imgLink + '.jpg')" alt="">
                            <!-- <p>{{sidebarImages}}</p> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </transition>
</template>

<script>
export default {
    name: "AppSidebar",
    props: ["sidebarTitle", "sidebarDesc", "sidebarTools" , "sidebarLink", "sidebarImages"],
    // data(){
    //     return{
    //         projectTitle: this.sidebarTitle,
    //         projectDesc: this.sidebarDesc,
    //         projectTools: this.sidebarTools,
    //         projectLink: this.sidebarLink
    //     }
    // }
    methods:{
        externalLink(){
            window.open(this.sidebarLink,'_blank')
        }
    }
}
</script>

<style lang="scss" scoped>
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity .5s
    }
    .fade-enter,
    .fade-leave-active {
    opacity: 0
    }
    .modal-background {
    opacity: 0.2
    }
    .sidebar{
        height: 100vh;
        width: 100vw;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        // overflow: hidden;
        background-color: rgba(0, 0, 0, 0.562);
        &-close{
            width: 30px;
            height: 30px;
            cursor: pointer;
            fill: white;
            transition: all ease .3s ;
            &:hover{
                transform: rotate(90deg);
            }
        }
        &-overlay{
            display: flex;
            justify-content: flex-end;
            height: 100%;
            padding: 20px;
            
            .sidebar-body{

                width: 100%;
                background: white;
                padding: 20px;
                box-shadow: 0px 0px 10px black;
                height: 100%;
                overflow: auto;
                @media screen and (min-width: $tablet){
                    width: 80%;
                }
                @media screen and (min-width: 1024px){
                    width: 50%;
                }
                @media screen and (min-width: 1440px){
                    width: 30%;
                }
                .sidebar-header{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                    a{
                        text-decoration: none;
                        color: white;
                        text-align: center;
                        padding: 10px;
                        background: $dark-green;
                        width: 80%;
                        transition: all ease .3s;
                        cursor: pointer;
                        &:hover{
                            background-color: $med-green;
                        }
                    }
                }
                .sidebar-content{
                    display: flex;
                    // justify-content: center;
                    // align-items: center;
                    flex-direction: column;
                    // background: red;
                    word-wrap:break-word;
                    
                    .sidebar-images{
                        width: 100%;
                    
                        img{
                            width: 100%;
                            margin-bottom: 10px;
                            border: 3px solid $light-green;
                        }
                    }
                    .title{
                        text-align: center;
                        font-size: 2.4rem;
                        margin-bottom: 20px;
                    }
                    .desc{
                        text-align: justify;
                        margin-bottom: 20px;
                    }
                    .tools{
                        text-align: justify;
                        line-height: 1.8;
                        margin-bottom: 20px;
                        .tool-title{
                            font-weight: 700;
                            text-align: left;
                        }
                    }
                    
                }
            }
            
        }
        
    }
</style>