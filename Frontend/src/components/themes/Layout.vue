<template>
    <div class="layout">
    
    <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <Sidebar/>
            </div>
             <div class="col-sm-9">
                 <slot></slot>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import Sidebar from './Sidebar'
export default {
    components:{
        Sidebar
    }
}
</script>
<style scoped>
.container{
    margin-top: 60px;
}
</style>