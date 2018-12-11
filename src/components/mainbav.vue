<template>
    <div class="mainbav">
        <ul class="nav">
            <li>
                <router-link to='/'>
                    <span>首页</span>
                </router-link>
            </li>
            <li>
                <router-link to='more'>
                    <span>更多</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'mainbav'
}
</script>

<style scoped>
.mainbav .nav{
    height: 40px;
    width:100%;
}
.nav li{
    display: inline-block;
    width:100px;
    height:40px;
    color:#fff;
    text-align:center;
    line-height:40px;
}
.nav li:hover{
    width:100px;
    height:40px;
    background:#5f55a0;
}

</style>


