<template>
	<div>
		<div>{{msg}}</div>
		父组件：{{count}}
		<button @click="changeCount($event)">event</button>
		<event></event>
	</div>
</template>
<script>
import { value } from "vue-function-api";

const countHandle = (root) => {
	let count = value(0);
	/*节流处理*/
	let changeCount = root.$utils.throttle(_ => {
		/*自定义事件触发*/
		root.$eventEmitter.emit('testEvent', ++count.value )
	},1000)
	return {count,changeCount}
}

const MyComponent =  {
	props: {
		name: {
			type: String,
			default: "vue-functional-based"
		}
	},
	setup(props,{root}) {
		let {count,changeCount} = countHandle(root)
		return {
			count,
			changeCount,
			msg: `hello ${props.name}!`
		};
	},
	components:{
		event:()=>import('./event.vue')
	}
};
export default MyComponent
</script>

