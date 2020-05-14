<template>
 <div>
    <sidebar-menu :menu="menu" />
  </div>

</template>

<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'ระบบลงทะเบียนการเข้าพื้นที่ป่า',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/information',
                        title: 'ข้อมูลส่วนตัว',
                        icon: 'fa fa-user'
                    }, {
                        href: '/history',
                        title: 'ประวัติการเข้าป่า',
                        icon: 'fa fa-user'
                    }, 
                    
                ]
            }
        }
    }
</script> 