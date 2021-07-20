<template>
    <section class="projects" ref="projects">
        <div class="container">
            <ul class="section-title" ref="sectiontitle">
                <li>P</li>
                <li>R</li>
                <li>O</li>
                <li>J</li>
                <li>E</li>
                <li>C</li>
                <li>T</li>
                <li>S</li>
            </ul>
            <div class="projects-box">
                <div class="projects-grid-box">
                    <div class="project-card" v-for="project in projects" :key="project.id" :style="{'background-image': 'url('+ project.imgSrc +')'}">
                        <div class="after-card">
                            <h1 class="project-title">{{ project.title}}</h1>
                            <p class="project-tools" v-for="tool in project.tools" :key="tool">• {{ tool }}</p>
                            <button v-on:click="showModal(); passToSidebar(project.title, project.desc, project.tools, project.link, project.imagesSrc)" class="btn-viewmore"  >More Details
                                <img src="@/assets/font-icon/eye-solid.svg" width="20" height="15" alt="">
                            </button>
                        </div>
                    </div>    
                </div>
                <div style="text-align:center;">
                    <router-link to="projects"><button class="btn-primary btn-view-all" >View All My Projects</button></router-link>
                </div>
            </div>
        </div>
        <transition name="fade">
            <AppSidebar v-show="isModalVisible" @close="closeModal" :sidebarTitle=itemTitle :sidebarDesc=itemDesc :sidebarTools=itemTools :sidebarLink=itemLink :sidebarImages=itemsImgs />
        </transition>
    </section>
</template>

<script>
import AppSidebar from './AppSidebar.vue'
export default {
    name: "AppProjects",
    components: {
        AppSidebar
    },
    data(){
        return{
            "itemTitle": "",
            "itemDesc": "",
            "itemLink": "",
            "itemTools": "",
            "itemsImgs": [],
            isModalVisible: false,
            projects: [
                {
                    id:1,
                    title: "Food Buddy", 
                    desc: "We're only 2 programmer created this app, made with WordPress. We configured woocommerce, added google map API and payment portal, etc. Food Buddy services is an online based food delivery platform that can easily provide you the experience of eating what you want wherever you are. It primarily operates in Luzon cities and provinces.",
                    link: "https://www.foodbuddy.store/",
                    tools: ["PHP", "WordPress", "jQuery", "Google Map API"],
                    imgSrc: require('@/assets/projects/food-buddy-ss.jpg'),
                    imagesSrc: ["food-buddy-sb-1", "food-buddy-sb-2","food-buddy-sb-3"]
                },
                {
                    id:2,
                    title: "Random App API", 
                    desc: "I maded it with Vue JS, created this app to improve my programming skills. This is hosted on heroku. Collected all my API github projects and display them all in singe web app. Random Dog Breed shows a random dog breed. Random Food Joke shows a random joke that is related to food. Random Cat Breed shows a random cat breed. NewsAPI shows top and breaking headlines in philippines, articles are sorted by the earliest date published first.",
                    link: "https://rand-vue-app.herokuapp.com/",
                    tools: ["Vue JS", "HTML", "Sass", "Dog/Cat/Spoonacular/News API"],
                    imgSrc: require('@/assets/projects/rand-api-ss.jpg'),
                    imagesSrc: ["rand-app-sb-1", "rand-app-sb-2","rand-app-sb-3", "rand-app-sb-4"]
                },
                {
                    id:3,
                    title: "Advantage Lifts", 
                    desc: "Advantage Lifts is your online home for the most reliable, high-quality residential and commercial 2-Post and 4-Post auto lifts for sale.",
                    link: "https://www.advantagelifts.com/",
                    tools: ["Shopify", "HTML", "CSS", "JavaScript"],
                    imgSrc: require('@/assets/projects/al-ss.jpg'),
                    imagesSrc: ["al-sb-1", "al-sb-2","al-sb-3"]
                },
                {
                    id:4,
                    title: "Automotive Lift Services", 
                    desc: "Automotive Lift Service is the leading automotive equipment company in the Mid-Atlantic region. Started in 1978, it's perfectly located in south-central Pennsylvania to service urgent needs of our customers located in Pennsylvania, Maryland, Delaware, Virginia, and West Virginia.",
                    link: "https://bestals.com/",
                    tools: ["Shopify", "HTML", "CSS", "JavaScript"],
                    imgSrc: require('@/assets/projects/als-ss.jpg'),
                    imagesSrc: ["als-sb-1", "als-sb-2","als-sb-3"]
                },
                {
                    id:5,
                    title: "KC POOL SERVICE", 
                    desc: "I made it with WordPress, it's hosted on GoDaddy. Also I design the whole website in Photshop then converted it to website. KC Pool Services is an Independent, family owned and operated pool and spa service, have almost 35 years of experience in the construction and service industries and know what it takes to provide quality service to our customers.",
                    link: "https://www.kcpoolservices.com/",
                    tools: ["PHP", "WordPress", "jQuery", "Google Map API"],
                    imgSrc: require('@/assets/projects/kcpool-ss.jpg'),
                    imagesSrc: ["kcpool-sb-1", "kcpool-sb-2","kcpool-sb-3"]
                },
                {
                    id:6,
                    title: "Celebrity Influencer", 
                    desc: "I made it with WordPress in 2020 when I was starting my web dev career. Not active, I created this site in 2020 and this is one of my favorite design.",
                    link: "https://www.ciicelebs.com/",
                    tools: ["HTML", "CSS", "PHP", "WordPress", "jQuery"],
                    imgSrc: require('@/assets/projects/cii-ss.jpg')
                },
            ]
        }
    },
    methods: {
        passToSidebar(itemTitle, itemDesc, itemTools, itemLink, itemsImgs){  
            this.itemTitle = itemTitle
            this.itemDesc = itemDesc
            this.itemTools = itemTools
            this.itemLink = itemLink
            this.itemsImgs = itemsImgs
            // console.log(this.itemLink);
        },
        showModal() {
            this.isModalVisible = true;
            document.body.classList.add("modal-open");
        },
        closeModal() {
            this.isModalVisible = false;
            document.body.classList.remove("modal-open");
        }
    }
}
</script>

<style lang="scss" scoped>

    section.projects{
        padding: 50px 0;
        background: $bg-medgreen;
        position: relative;
        // overflow: hidden;
        
        .container{
            min-height: 80vh;
            position: relative;
            display: flex;
            justify-content: flex-end;
            .section-title{
                list-style: none;
                position: absolute;
                top: 0;
                left: 0;
                opacity: .1;
                font-size: 100px;
                line-height: .8;
                font-weight: 700;
                color: black;
                
                & li{
                    font-size: 100px;
                    text-shadow: 0 0px #f3c623, 0 0px #f2aaaa;
                    transform: translate(0, 0) rotate(4deg);
                    @include animation('jump 2s ease-in-out infinite');
                    @for $i from 1 through 8 {
                        &:nth-child(#{$i}) {
                            animation-delay: 120ms * $i;
                        }
                    }
                }
            }
            .projects-box{
                width: 90%;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                padding: 0 20px;
                .btn-view-all{
                    margin-top: 15px;
                }
                .btn-view-all:hover{
                    background: $med-green;
                }
                .projects-grid-box{
                    display: grid;
                    grid-template-columns: repeat(auto-fit, 240px);
                    // grid-template-rows: repeat(auto-fill, 300px);
                    gap: 20px;
                    justify-content: flex-end;
                    @media screen and(min-width: $tablet){
                        grid-template-columns: repeat(auto-fit, 300px);
                    }
                    .project-card{
                        height: 240px;
                        position: relative;
                        background-position: center;
                        background-size: contain;
                        box-shadow: 0px 0px 10px $med-green;
                        @media screen and(min-width: $tablet){
                            height: 300px;
                        }
                        .after-card{
                            height: 100%;
                            width: 100%;
                            opacity: 0;
                            color: white;
                            background: rgb(0,0,0);
                            padding: 10px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            
                            // transition: stretch .1s ease;
                            @include animation('stretch-out .3s ease');
                            .project-title{
                                text-align: center;
                                margin-top: auto;
                                margin-bottom: 10px;
                                
                            }
                            .project-tools{
                                text-align: center;
                            }
                            .btn-viewmore{
                                padding: 10px 5px;
                                width: 100%;
                                background-color: white;
                                border: none;
                                cursor: pointer;
                                margin-top: auto;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                position: relative;
                                color: black;
                            
                                img{
                                    opacity: 0;
                                    margin-left: 4px;
                                    transition: all ease-in-out .5s;
                                }
                                &:hover > img{
                                    opacity: 1;

                                }
                            }
                        }
                        &:hover > .after-card{
                            
                            @include animation('stretch .8s ease');
                            animation-fill-mode: forwards;
                        }
                    }
                }
            }
        }
    }
</style>