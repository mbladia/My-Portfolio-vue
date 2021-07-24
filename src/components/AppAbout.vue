<template>
    <section class="about-section" ref="about">
        <div class="container">
            <p class="about-title">About Me</p>
            <div class="about-skills">
                <p class="about-title-skills">Skills</p>
                <div class="skill-logo-box">
                    <div class="skill-logo" role="radio" aria-checked="false" tabindex="-1" aria-label="Select image one" v-for="skillImage in skillImages" :key="skillImage.imgSrc" >
                        <img v-bind:src="require('@/assets/icon/' + skillImage.imgSrc)" alt="wewe" />
                    </div>
                </div>
            </div>
            
            <div class="about-me-box">
                <div class="about-image-name">
                    <img src="@/assets/grad.jpg" alt="">
                    <!-- <p class="about-name">MARK-BRYAN</p> -->
                    <ul class="about-li-name">
                        <li>M</li><li>A</li><li>R</li><li>K</li><li>-</li><li>B</li><li>R</li><li>Y</li><li>A</li><li>N</li>
                    </ul>
                </div>
                
                <p class="about-course">BSIT Major in Web Technology Track</p>
                <p class="about-school">Univesity of the Cordillera 2018</p>
                <p class="about-qoute">"Self-motivated Web Developer with experience working on multiple projects. Passionate and hardworking with penchant for meeting deadlines."</p>
            </div>
            
        </div>
    </section>
</template>

<script>
export default {
    name: "AppAbout",
    data(){
        return{
            skillImages: [
                { imgSrc: 'html5-original-wordmark.svg' },
                { imgSrc: 'css3-original-wordmark.svg' },
                { imgSrc: 'javascript-original.svg' },
                { imgSrc: 'bootstrap-plain-wordmark.svg' },
                { imgSrc: 'git-original-wordmark.svg' },
                { imgSrc: 'php-original.svg' },
                { imgSrc: 'mysql-original-wordmark.svg' },
                { imgSrc: 'laravel-plain-wordmark.svg' },
                { imgSrc: 'vue-js.svg' },
                { imgSrc: 'jquery-original-wordmark.svg' },
                { imgSrc: 'nodejs-original-wordmark.svg' },                
                { imgSrc: 'shopify.svg' },
                { imgSrc: 'wordpress-original.svg' },
                { imgSrc: 'photoshop-plain.svg' },
                { imgSrc: 'illustrator-plain.svg' },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .about-section{
        padding: 40px 10px;
        background-color: $bg-lightgreen;
        position: relative;
        .container{
            display: flex;
            flex-direction: column;
            @media screen and (min-width: $tablet) {
                flex-direction: row;
            }
            .about-title{
                position: absolute;
                font-weight: 700;
                font-size: 100px;
                opacity: .1;
                top: 0;
                @media screen and (max-width: 375px) {
                    font-size: 80px;
                }
            }
            
            .about-skills{
                position: relative;
                min-width: 100%;
                max-width: 100%;
                max-height: 100%;
                padding: 65px 0px;
                margin: auto;
                
                @media screen and (min-width: $tablet) {
                    min-width: 50%;
                    max-width: 50%;
                }
                
                .skill-logo-box{
                    display: grid;
                    justify-content: center;
                    grid-template-columns: repeat(auto-fit, 100px);
                    grid-template-rows: repeat(auto-fit, 100px);
                    
                    gap: 20px;
                    @media screen and (max-width: 359px) {
                        grid-template-columns: repeat(auto-fit, 80px);
                        grid-template-rows: repeat(auto-fit, 80px);
                    }
                    .skill-logo{
                        text-align: center;
                        padding: 5px;
                        position: relative;
                        transition: .3s;

                        &::after {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background-color: rgba(#000, 0);
                            transition: .3s;
                        }
                        img{
                            display: block;
                            width: 100%;
                            max-width: 100%;
                            height: auto;
                        }
                    }
                    &:hover .skill-logo:not(:hover) {
                        filter: grayscale(100%);

                        &::after {
                        background-color: rgba(rgb(204, 204, 204), 0.1);
                        }
                    }
                }
                .about-title-skills{
                    position: absolute;
                    bottom: 0;
                    font-weight: 700;
                    font-size: 100px;
                    opacity: .1;
                }
                
                
            }
            .about-me-box{
                text-align: center;
                min-width: 100%;
                max-width: 100%;
                padding: 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                @media screen and (min-width: $tablet) {
                    min-width: 50%;
                    max-width: 50%;
                }
                .about-image-name{
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    margin-bottom: 23px;
                    width: 100%;
                    position: relative;
                    img{
                       border-radius: 0% 0% 0% 0% / 0% 0% 0% 0% ;
                        box-shadow: 20px 20px rgba(0,0,0,.15);
                        transition: all .4s ease;
                        border-radius: 10px;
                        width: 250px;
                        height: auto;

                        @media screen and (min-width: $tablet) {
                            width: 300px;
                        }
                        &:hover{
                            border-radius: 0% 0% 50% 50% / 0% 0% 5% 5% ;
                            box-shadow: 10px 10px rgba(0,0,0,.25);
                        }
                    }
                    .about-li-name{
                        position: absolute;
                        right: 0;
                        border-left: 4px solid black;
                        opacity: .1;
                        font-size: 3.5rem;
                        line-height: .8;
                        font-weight: 700;
                        @media screen and (min-width: $tablet){
                            font-size: 4rem;
                        }
                        li{
                            text-decoration: none;
                            list-style: none;
                        }
                    }
                    // .about-name{
                    //     border-left: 4px solid black;
                    //     position: absolute;
                    //     right: 0;
                    //     display: flex;
                    //     // max-width: 10px;
                    //     font-size: 2.5rem;
                    //     margin-bottom: 5px;
                    //     writing-mode: vertical-rl;
                    //     line-height: .8;
                    //     font-weight: 700;
                    //     font-size: 4rem;
                    //     opacity: .1;
                    //     transform-origin: 0 0;
                    //     transform: rotate(270deg);
                    //     @media screen and (min-width: $tablet) {
                    //         right: 0;
                    //     }   
                    //     @media screen and (max-width: 860px ) and (min-width: $tablet) {
                    //         right: 21px;
                    //     }
                    // }
                }
                
                .about-course{
                    font-weight: 700;
                }
                .about-qoute{
                    margin-top: 10px;
                }
            }
        }
    }
</style>