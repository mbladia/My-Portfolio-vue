<template>
    <nav ref=nav>
        <div class="container">
            <div class="nav-title">
                <router-link to="/">
                    <img src="../assets/me-logo.png" alt=""></router-link>
                    <router-link to="/"><p>Mark Bryan</p></router-link>
            </div>
            <div class="nav-link">
                <button v-on:click="onClickButton()"  id="btn-darkmode">
                      <svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496"><path ref="path" fill="currentColor" d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z" transform="translate(-8 -8)"/></svg>
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
            isDark: false
        }
    },
    methods:{
        onClickButton(){
            this.isDark = !this.isDark
            this.$emit('clicked', this.isDark)
        }
    }
}
</script>

<style lang="scss" scoped>

        
        nav{
            // position: absolute;
            background: rgb(22,74,65);
            background: linear-gradient(90deg, $light-green 0%, $med-green 49%, $dark-green 100%);
            width: 100%;
            // padding: 15px 20px;
            .container{
                align-items: center;
                display: flex;
                justify-content: space-between;
                flex-direction: row;                
                .nav-title{
                    display: flex;
                    align-items: center;
                    padding: 10px;
                    a{
                        text-decoration: none;
                    }
                    p{
                        margin-left: 10px;
                        font-size: 1.6rem;
                        color: $light;
                       
                    }
                    img{
                        height: 60px;
                        width: auto;
                    }
                }
                .nav-link{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    button{
                        background: none;
                        border: none;
                        cursor: pointer;
                        svg{
                            height: 40px;
                            path{
                                transition: all ease .3s ;
                                fill: #303A48;

                            }
                            
                        }
                        :hover {
                            height: 42px;
                        }
                    }
                }
            }
        }
    
</style>