<template>
    <div>子组件：{{countVal}}</div>
</template>
<script>
    import {onMounted,value} from 'vue-function-api'
    export default {
        setup(props,{root}){
            const countVal = value(0)
            onMounted(()=>{
                /*自定义事件接收*/
                root.$eventEmitter .on('testEvent',(e)=>{
                    countVal.value = e
                })
            })
            return {
                countVal
            }
        },
    }
</script>