<template>
    <nav ref=nav>
        <div class="container">
            <div class="nav-title">
                <router-link to="/"><img src="../assets/my-logo.png" alt=""></router-link>
                    <!-- <router-link to="/"><p>Mark Bryan</p></router-link> -->
            </div>
            
            <div id="nav-icon4" :class="{open: isActive}" v-on:click="clickBurger()" ref="btnBurger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="nav-link" ref="navLink">
                <ul>
                    <li><router-link to="/" exact-path>Home</router-link></li>
                    <li><router-link to="/projects" exact-path>Projects</router-link></li>
                    <li><router-link to="/experience" exact-path>Experience</router-link></li>
                </ul>
                <button v-on:click="onClickButton()"  id="btn-darkmode" ref="btnDarkMode">
                    <img ref="darkModeSvg" :src="require('../assets/buttons/' + darkModeSvg)" alt="" />
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "AppHeader",
    data(){
        return{
            isDark: null,
            isActive: false,
            darkModeSvg: "",
            darkModeStorage: localStorage.getItem('darkMode'),
        }
    },
    methods:{
        onClickButton(){
            this.isDark = !this.isDark
            this.$emit('clicked', this.isDark)
            this.$refs.btnDarkMode.classList.add('darkModeAni')

            setTimeout(() => {
                this.$refs.btnDarkMode.classList.remove('darkModeAni')
            },700)

            if(this.isDark == true){
                this.darkModeSvg = 'moon.svg'             
            }else{
                this.darkModeSvg = 'sun.svg'
            }
        },
        clickBurger(){
            this.isActive = !this.isActive;
            if(this.isActive == true){        
                // console.log(this.isActive);        
               this.$refs.navLink.style.visibility = 'visible'
               this.$refs.navLink.style.opacity = 1
               document.body.classList.add("modal-open");
            }else{
                this.$refs.navLink.style.visibility = 'hidden'
                this.$refs.navLink.style.opacity = 0
                document.body.classList.remove("modal-open");
            }

        }
    },
    beforeMount(){
        if(this.isActive == false){
            document.body.classList.remove("modal-open");
        }

        if(this.darkModeStorage == "true"){
            this.darkModeSvg = 'moon.svg'
            this.isDark = true
        }else{
            this.darkModeSvg = 'sun.svg'
        }
    }
}
</script>

<style lang="scss" scoped>
.darkModeAni{
    pointer-events: none;
   @include animation('bloom .7s ease-in-out');
   animation-fill-mode: forwards;
}
        
        nav{
            background: rgb(22,74,65);
            background: linear-gradient(90deg, $light-green 0%, $med-green 49%, $dark-green 100%);
            width: 100%;
            .container{
                align-items: center;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: row;
                // position: relative;
                padding: 10px;
                button#btn-darkmode{
                    background: none;
                    border: none;
                    cursor: pointer;
                    width: fit-content;
                    user-select: none;
                    margin-bottom: auto;
                    @media screen and (min-width: $tablet) {
                        margin-left: auto;
                        
                    }
                    img{
                        height: 40px;
                        transition: all 1s linear;
                    }
                    
                }                          
                .nav-title{
                    padding: 1px;
                    display: flex;
                    align-items: center;
                    z-index: 9999999;
                    a{
                        text-decoration: none;
                    }
                    p{
                        margin-left: 10px;
                        font-size: 1.6rem;
                        color: $light;
                       
                    }
                    img{
                        height: 50px;
                        width: auto;
                    }
                }
                #nav-icon4{
                    width: 40px;
                    height: 40px;
                    position: relative;
                    transform: rotate(0deg);
                    
                    cursor: pointer;
                    z-index: 9999999;
                    @media screen and (min-width: $tablet) {
                        display: none;
                    }
                    span {
                        display: block;
                        position: absolute;
                        height: 5px;
                        width: 100%;
                        background: white;
                        border-radius: 9px;
                        opacity: 1;
                        left: 0;
                        transform: rotate(0deg);
                        transition: all .3s ease-in-out;
                    }
                    :nth-child(1) {
                        top: 0px;
                        transform-origin: left center;
                    }

                    :nth-child(2) {
                        top: 12px;
                        transform-origin: left center;
                    }

                    :nth-child(3) {
                        top: 24px;
                        transform-origin: left center;
                    }
                    &.open span:nth-child(1) {
                        transform: rotate(45deg);
                        top: -3px;
                        left: 8px;
                    }

                    &.open span:nth-child(2) {
                        width: 0%;
                        opacity: 0;
                    }

                    &.open span:nth-child(3) {
                        transform: rotate(-45deg);
                        top: 27px;
                        left: 8px;
                    }
                }
                
                .nav-link{
                    visibility: hidden;
                    opacity: 0;
                    width: 100%;
                    height: 100vh;
                    position: fixed;
                    top: 0;
                    left: 0;
                    background: rgba(15, 32, 16, 0.9);
                    z-index: 999999;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 20px;
                    transition: all .3s ease-in-out;
                    @media screen and (min-width: $tablet) {
                        visibility: visible;
                        opacity: 1;
                        position: relative;
                        height: auto;
                        display: flex;
                        flex-direction: row;
                        background: none;
                        padding: 0;
                    }
                    // display: none;
                    ul{
                        list-style: none;
                        min-height: 50%;
                        display: flex;
                        justify-content: space-around;
                        flex-direction: column;
                        align-items: center;
                        margin-top: auto;
                        margin-bottom: auto;
                        @media screen and (min-width: $tablet) {
                            width: 40%;
                            flex-direction: row;
                             margin-left: auto;
                        }
                        li{

                            transition: all ease .3s;
                            padding: 5px 10px;
                            a{
                                color: white;
                                text-decoration: none;
                                font-size: 30px;
                                padding: 5px;
                                @media screen and (min-width: $tablet) {
                                    font-size: 1rem;
                                }
                            }
                            :hover{
                                color: rgb(255, 255, 0);
                            }
                            
                        }
                    }
                    
                }
            }
        }
    
</style>