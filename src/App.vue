<template>
  
  <router-view/>
</template>

<style lang="scss">
  .modal-open {
        overflow: hidden;
  }
  .dark-mode{
    color: red;
  }
  .nav-dark{
    background-color: black;
  }

  .nav-link a.router-link-active {
    color: black !important;
    
    background: white;
    border-radius: 5px;
    
  }
</style>
