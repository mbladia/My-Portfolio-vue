<template>
    <section class="welcome-section" ref="welcome">
        <div class="welcome-name-tablet">
            <h1>Hi, I'm Bryan.</h1>
            <h2>{{ greet }}</h2>
            <p class="mobile-welcome-description">Full stack web developer with {{ yearStartWork }}+ years of experience
                    coding websites.
            </p>
        </div>
        <div class="container">
            <div class="welcome-image">
                <svg ref="svg" version="1.1" id="svg-image" viewBox="0 0 596.81 722.33" xml:space="preserve">
                    <linearGradient id="my-cool-gradient" x2="1" y2="1">
                        <stop offset="0%" stop-color="#F4D03F" />
                        <!-- <stop offset="50%" stop-color="#224488" /> -->
                        <stop offset="100%" stop-color="#16A085" />
                    </linearGradient>
                    <path class="svg-image-box" d="M47.85,727.67c-0.59-1.78-49.78-40.3-46.81-160S-10.22,321.15,84.59,301s97.19-93.63,87.7-158.22
                        S194.07-23,346.07,6.33s121.33,204,56,270.67s86.67,38.67,109.33,141.33c22.67,102.67-10.67,156,45.33,240s54.67,96,54.67,96"/>
                    <line class="st0" x1="596.81" y1="722.33" x2="42.91" y2="722.33"/>
                </svg>
                <img src="../assets/portfolio-header-image.png" alt="">
            </div>
            <div class="welcome-text">
                <div class="welcome-name">
                    <h1>Hi, I'm Bryan. {{ greet }}</h1>
                    <h2></h2>
                </div>
                <p class="welcome-description">Full stack web developer with {{ yearStartWork }}+ years of experience
                    coding websites.
                </p>
                <h1 style="margin-bottom: 30px;"><b> Developer. Designer. Debugger</b></h1>
                
                <div class="welcome-text-btn">
                    <!-- <button @click="downloadWithVueResource()" class="btn-darkmode-tablet">Download Resume</button> -->
                    <!-- <p>Last update: Jan 2021</p>   -->
                    <a class="btn-darkmode-tablet" :href="resume" download="Mark-Bryan-Resume">Download Resume </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AppWelcome",
    data(){
        return{
            yearStartWork : 0,
            isDarkMode: false,
            resume: require('@/assets/Mark-Bryan-Resume.pdf'),
            publicPath: process.env.BASE_URL,
            greetVisitor: "",
            greet: "Nice to meet you."
        }
    },
    methods: {
        greetTime(){
            
            var d = new Date();
            var startYear = 2019;
 
            this.yearStartWork = d.getFullYear() - startYear
            var timeDay = d.getHours();
            if(timeDay >= 5 && timeDay < 12){
                this.greetVisitor = "Good Morning"
            }else if(timeDay >= 12 && timeDay < 18){
                this.greetVisitor = "Good Afternoon"
            }else{
                this.greetVisitor = "Good Evening"
            }
            // console.log(n);
        },

    },
    beforeMount(){
        this.greetTime()
    }
}
</script>

<style lang='scss' scoped>
    .welcome-section{
        // min-height: 550px;
        width: 100%;
        background: rgb(22,74,65);
        background: linear-gradient(90deg, $light-green 0%, $med-green 49%, $dark-green 100%);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        .welcome-name-tablet{
            height: 220px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            color: $light;
            padding: 10px;
            margin-bottom: 15px;
            @media screen and (min-width: 636px) {
                display: none;
            }
            h1{
                font-size: 2rem;
                margin-top: auto;
                @media screen and (max-width: 375px) {
                    font-size: 1.8rem;
                }
            }
            h2{
                font-size: 1.2rem;
                @media screen and (max-width: 375px) {
                    font-size: 1rem;
                }
            
            }
            .mobile-welcome-description{
                font-size: 23px;
                text-align: center;
                margin-top: auto;
                @media screen and (min-width: 636px) {
                    display: none;
                }
            }
        }
        .container{
            width: 100%;
            padding: 0 10px;
            display: flex;
            justify-content: center;
            height: 330px;
            @media screen and (min-width: $tablet) {
                height: 650px;
            }
            .welcome-image{
                width: auto;
                // margin-right: 10px;
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                @media screen and (max-width: 375px) {
                    display: none;
                }
                #svg-image{
                    position: absolute;
                    height: 270px;
                    left: -12px;
                    fill: url(#my-cool-gradient) #F4D03F;
                    @media screen and (min-width: 768px) {
                        height: 420px;  
                    }
                }
                & > img{
                    height: 250px;
                    width: auto;
                    display: inherit;
                    z-index: 1000;
                
                    @media screen and (min-width: 768px) {
                        height: 400px; 
                    }
                }
                
            }
            .welcome-text{
                width: 100%;
                // padding: 35px 10px;
                color: $light;
                text-align: center;
                z-index: 99;
                display: flex;
                flex-direction: column;
                justify-content: center;
                @media screen and (min-width: 636px) {
                    max-width: 768px;
                }
                .welcome-name{
                    & > h1{
                        @media screen and (min-width: 636px) {
                            display: inherit;
                            font-size: 2rem;
                        }
                        @media screen and (min-width: 768px) {
                            font-size: 2.4rem;
                        }
                        display: none;
                        font-size: 2.6rem;
                        margin-bottom: 10px;
                        
                    }
                    & > h2 {
                        @media screen and (min-width: 636px) {
                            display: inherit;
                            font-size: 1.3rem;
                        }
                        @media screen and (min-width: 768px) {
                            font-size: 1.6rem;
                        }
                        display: none;
                    }
                }
                .welcome-text-btn{
                    .btn-darkmode-tablet{
                        display: inline-block;
                        text-align: center;
                        font-size: 1.2rem;
                        text-decoration: none;
                        color: white;
                        background-color: #164a41;
                        padding: 10px 35px;
                        // border-radius: 13px;    
                        box-shadow: black 2px 5px 7px;
                        margin-bottom: 40px;
                        margin-top: 5px;
                        border: none;
                        cursor: pointer;
                        &:hover{
                            background-color: $med-green;
                            color: $light;
                            transition: ease-in-out .3s;
                        }
                    }
                }
                
                & > .welcome-description{
                    // margin-top: 10px;
                    line-height: 1.5;
                    margin-bottom: 20px;
                    font-size: 23px;
                    // @media screen and (min-width: $tablet) {
                    //     // margin-top: 30px;
                    //     line-height: 1.5;
                        
                    // }
                    @media screen and (max-width: 636px) {
                        display: none;
                        visibility: hidden;
                    }
                }
                
            }
        }
    }



</style>