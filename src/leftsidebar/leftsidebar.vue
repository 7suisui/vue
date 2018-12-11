<template>
    <div class="leftsidebar">
            <div class="logo">
                <div class="box">
                    <img src="../images/navsidebar/logo1.png" alt="">
                    <img src="../images/navsidebar/logo2.png" alt="">
                </div> 
            </div>
    </div>
</template>

<script>

export default {
    name:"leftsidebar",
    components:{
        
    }
     
}
</script>

<style scoped>
.leftsidebar{
    width:200px;
    height:1000px;
    background-color:#20222a;
    
}
.logo{
    width:200px;
    height:40px;
    background:#5f55a0;
    display: flex;
    align-items: center;
    
}
.logo .box{
    width:110px;
    height:20px;
    display: flex;
    justify-content:space-between;
    margin-left:15px;
}
.box img{
    height:20px;
}

</style>


