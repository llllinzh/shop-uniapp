<template>
	<view class="hot">
		<Commodity :dataList="hotList" itemW="250rpx" bigH="220rpx"></Commodity>
	</view>
</template>

<script setup>
import Commodity from '../common/Commodity.vue'
const hotList = [
	{
		id: 1,
		imgUrl: "/static/img/hot1.jpg",
		name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
		pprice: "299",
		oprice: "659",
		discount: "5.2"
	},
	{
		id: 1,
		imgUrl: "/static/img/hot2.jpg",
		name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
		pprice: "299",
		oprice: "659",
		discount: "5.2"
	},{
		id: 1,
		imgUrl: "/static/img/hot3.jpg",
		name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
		pprice: "299",
		oprice: "659",
		discount: "5.2"
	}
]
</script>

<style scoped>
</style>