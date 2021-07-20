<template>
    <section class="other-skill" ref="otherskillbox">
        <div class="container">
            <div class="row">
                <h1 class="title" ref="title">Graphics Design</h1>
                <!-- <div class="skill-buttons" style="text-align:center;"> -->
                    <router-link to="graphics"><button class="btn-primary btn-check-it" >Check it</button></router-link>
                <!-- </div>             -->
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AppOtherSkill"
}
</script>

<style lang="scss">
    .other-skill{
        padding: 20px 0;
        background: white;
        .container{       
            .row{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0 10px;
                .title{
                    font-size: 30px;
                    opacity: .5;
                    margin-bottom: 10px;
                    @media screen and (min-width: $tablet) {
                        font-size: 80px;
                    }
                    @media screen and (min-width: 450px) and (max-width: $tablet){
                        font-size: 50px;
                    }
                }
                .btn-check-it:hover{
                    background: $med-green;
                }
            }
            
        } 
    }
</style>