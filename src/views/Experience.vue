<template>
    <section ref="experience" class="experience">
        <AppHeader ref="nav" v-on:clicked="isDarkEnabled($event)" />
            <div class="intro-row" ref="introRow">
                <div class="container">
                    
                    <div class="introduction-box">
                        <p>
                            Hello! I'm <b>Mark Bryan</b> and I enjoy creating interactive websites.
                            I graduated with bachelor's degree in Infomation Technology major in Web Tech at University of the Cordilleras.
                        </p>
                        <p>
                            I've experience in web hosting, e-commerce, API, SEO, debugging and responsive web design, my other skills are graphics design and video editing.
                        </p>
                        <p>
                            My main focus these days is building accessible, fast and secured web app.
                        </p>
                       
                    </div>
                    <div class="cartoon-box">
                        <img src="@/assets/icon/my-cartoon.png" alt="">
                    </div>
                </div>
            </div>
            <div class="work-row" ref="workRow">
                <div class="container">
                    <h1 class="title">Experience</h1>
                    <div class="work-box">
                        <div class="company-tab">
                            <tabs ref="tabs" v-model="active">
                                <tab v-for="company in companies" :key="company.name">{{company.name}}</tab>
                                <!-- <tab>Food Buddy</tab> -->
                            </tabs>
                        </div>
                        <div class="work-details">                        
                            <tab-panels v-model="active">
                                <tab-panel v-for="company in companies" :key="company.name">
                                    <h1>{{company.job}} <a @click="externalLink(company.link)">@{{company.where}}</a></h1>
                                    <p class="work-date">{{company.date}}</p>    
                                    <ul>
                                        <li v-for="responsibility in company.responsibilities" :key="responsibility">{{responsibility}}</li>
                                    </ul>
                                </tab-panel>
                                <!-- <tab-panel>Content B</tab-panel> -->
                            </tab-panels>
                        </div>
                    </div>
                </div>
            </div>
        <AppContact ref="contact" />
    </section>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import Tab from '../components/Tab.vue'
import Tabs from '../components/Tabs.vue'
import TabPanel from '../components/TabPanel.vue'
import TabPanels from '../components/TabPanels.vue'
import AppContact from '../components/AppContact.vue'
import { ref } from "vue";
export default {
    name: "PageGraphics",
    
    
    components:{
        AppHeader,
        Tab,
        Tabs,
        AppContact,
        TabPanels,
        TabPanel
    },
    setup() {
        const active = ref(0);

        return { active };
    },
    data(){
        return{
            isDarkMode: false,
            darkModeStorage: localStorage.getItem('darkMode'),
            companies: [
                {
                    name: "MDS CSI",
                    where: "MDS Call Solution Inc.",
                    link: "https://www.mdscsi.com/",
                    job: "Technology Engineer",
                    date: "August 2021 - Present",
                    responsibilities: [
                        "Analyze user needs and software requirements to determine feasibility of design and develop software solutions.",
                        "Conceptualize and design applications based on requirements gathered from the client.",
                        "Design or plan customizations of applications for client use with the aim of optimizing operational efficiency.",
                        "Code applications based on requirements from clients and finalized designs produced.",
                        "Deploy applications both on staging servers (for testing) and productions servers. ",
                        "Conduct unit testing of developed codes/modules and assist in conducting User Acceptance Testing.",
                        "Write/rewrite, review and debug coded programs.",
                        "Support applications/systems developed by addressing queries and fixing reported bugs/design flaws."
                    ]

                },
                {
                    name: "Onion Head Direct",
                    where: "Onion Head Direct",
                    link: "http://www.onionheaddirect.com/",
                    job: "Website Developer",
                    date: "January 2019 - August 2021",
                    responsibilities: [
                        "Convert website mock-up design to WordPress/Shopify site.",
                        "Maintain website content and product information like prices, discounts, shipping, images, promotions, etc.",
                        "Deliver engaging user experience through optimization of images, code, and cross-browser compatibility.",
                        "Maintain optimal website performance and manage hosting environment.",
                        "Work with the Social Media Team to ensure alignment between the website and our social media presences & strategy."
                    ]

                },
                {
                    name: "Internship",
                    where: "Onion Head Direct",
                    link: "http://www.onionheaddirect.com/",
                    job: "Assistant Web Developer",
                    date: "August 2018 - December 2018",
                    responsibilities: [
                        "Participate in creating a WordPress website.",
                        "Maintain company clients website.",
                        "Deliver production ready graphics for the website.",
                        "Create product banner/gif."
                    ]
                }
            ],
        }
    },
    methods:{
        externalLink(link){
            window.open(link,'_blank')
        },
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
            this.$refs.introRow.style.background = null
            this.$refs.workRow.style.background = null
            contact.$refs.contact.style.background = null
            localStorage.setItem('darkMode', null);
        },
        enableDarkMode(){
            const nav = this.$refs.nav
            const contact = this.$refs.contact
            
            nav.$refs.nav.style.background = "#191919"
            this.$refs.introRow.style.background = "#3B444F"
            this.$refs.workRow.style.background = "#303A48"
            
            contact.$refs.contact.style.background = "#191919"
            localStorage.setItem('darkMode', true);
        },
    },
    mounted(){
        if(this.darkModeStorage == "true"){
            this.enableDarkMode()
            this.isDarkMode = true
            
        }
        console.log();
    }
}
</script>

<style lang="scss" scoped>
.experience{
    padding: 0;
    overflow: hidden;
    min-width: 100%;
    .intro-row{
        // width: 100vw;
        background-color: $med-green;
        .container{
            padding: 20px 0;
            min-height: 64vh;
            display: flex;
            align-items: center;
            flex-direction: column;
            @media screen and(min-width: $tablet) {
                flex-direction: row;
                justify-content: center;
            }
            .cartoon-box{
                width: 80%;
                padding: 10px;
                text-align: center;
                @media screen and(min-width: $tablet) {
                    width: 30%;
                }
                img{
                    height: auto;
                    max-width:200px;
                    @media screen and(min-width: $tablet) {
                        max-width:250px;
                    }
                }
            }
            .introduction-box{
                width: 100%;
                padding: 20px;
                margin-top: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                @media screen and(min-width: $tablet) {
                    width: 60%;
                }
                p{
                    color: white;
                    text-align:justify;
                    font-size: 1.4rem;
                    line-height: 1.5;
                    margin-bottom: 13px;
                }
            }
        }
    }
    .work-row{
        background-color: #3e633e;
        color: white;
        .container{
            min-height: 40vh;
            h1.title{
                font-size: 50px;
                opacity: .3;
                
                text-align: center;
                @media screen and(min-width: $tablet) {
                    font-size: 100px;
                }
            }
            .work-box{
                width: 100%;
                display: flex;
                justify-content: center;
                padding: 10px ;
                // padding-bottom: 20px;
                flex-direction: column;
                @media screen and(min-width: $tablet) {
                    flex-direction: row;
                }
                .company-tab{
                    width: 100%;
                    padding: 10px;
                    @media screen and(min-width: $tablet) {
                        width: 20%;
                    }
                    .active{
                        color: yellow;
                        border-bottom: 3px solid yellow;
                        background-color: #507a50;
                        @media screen and(min-width: $tablet) {
                            border-bottom: none;
                            border-left: 3px solid yellow;
                        }
                    }
                    
                }
                .work-details{
                    width: 100%;
                    min-height: 500px;
                    padding: 10px;
                    @media screen and(min-width: $tablet) {
                        width: 70%;
                    }
                    @media screen and(min-width: 1024px) {
                        width: 50%;
                    }
                    h1{
                        a{
                            cursor: pointer;
                            color: yellow;
                            text-decoration: underline rgba(0, 0, 0, 0);
                            transition: all ease-in-out .4s;
                            font-size: 20px;
                            &:hover{
                                text-decoration-color: rgb(251, 255, 0);
                            }
                        }
                    }
                    p.work-date{
                        margin-bottom: 20px;
                    }
                    ul{
                        list-style: square;
                        padding-left: 10px;
                        
                        li{
                            // line-height: 1;
                            font-size: 1.1rem ;
                            padding-left: 5px;
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
    }
}
</style>