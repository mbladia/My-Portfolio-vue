<template>
    <section class="contact" ref="contact"> 
        <div class="container">
            <div class="contact-info">
                <h1>Contact Me</h1>
                <h4>Have a question or want to work together?</h4>
                <p><span>Full name: </span>Mark Bryan Ladia</p>
                <p><span>Emai: </span>mbladia10@gmail.com</p>
                <p><span>Phone: </span>+639472841988</p>
            </div>
            <div class="social-media-info">
                <a v-for="item in socialMedia" :key="item" :href="item.imgLink" target="_blank">
                    <img  :src="require('@/assets/'+ item.imgSrc+'.png')" alt="">
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AppContact",
    data(){
        return{
            socialMedia: [{
                    id: 1,
                    imgSrc: "instagram-logo",
                    imgLink: "https://www.instagram.com/mbladia/"
                },{
                    id: 2,
                    imgSrc: "linkedin-logo",
                    imgLink: "https://ph.linkedin.com/in/mark-bryan-ladia-a51bb6170"
                },{
                    id: 3,
                    imgSrc: "logo-github",
                    imgLink: "#"
                },{
                    id: 4,
                    imgSrc: "facebook-logo",
                    imgLink: "https://www.facebook.com/mbladia/"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .contact{
        padding: 30px 10px;
        background: rgb(22,74,65);
        background: linear-gradient(90deg, $light-green 0%, $med-green 49%, $dark-green 100%);
        .container{
            display: flex;
            flex-direction: column;
            color: white;
            @media screen and (min-width: $tablet){
                flex-direction: row;
            }
            .contact-info{
                width: 100%;
                display: flex;
                flex-direction: column;
                padding: 10px;
                @media screen and (min-width: $tablet){
                    width: 50%;
                }
                h1{
                    font-size: 2.4rem;
                }
                h4{
                    margin-bottom: 20px;
                    border-bottom: 1px solid white;
                    padding-bottom: 5px;
                }
                p{  
                    margin-bottom: 10px;
                    span{
                    
                        font-weight: 700;
                    }
                }
                
            }
            .social-media-info{
                width: 100%;
                padding: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                @media screen and (min-width: $tablet){
                    width: 50%;
                }
                img{
                    width: auto;
                    height: 50px;
                    margin: 0 5px;
                }
            }
        }
    }
</style>