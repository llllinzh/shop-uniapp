<template>
	<view class="Commodity-list">

		<!-- 商品列表组件 -->
		<Commodity :dataList='commodityList'></Commodity>

	</view>

</template>

<script setup>
	import Commodity from './Commodity.vue'

	const commodityList = [{
			id: 1,
			imgUrl: "/static/img/commodity1.jpg",
			name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
			pprice: "299",
			oprice: "659",
			discount: "5.2"
		},
		{
			id: 2,
			imgUrl: "../../static/img/commodity2.jpg",
			name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
			pprice: "299",
			oprice: "659",
			discount: "5.2"
		},
		{
			id: 3,
			imgUrl: "../../static/img/commodity3.jpg",
			name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
			pprice: "299",
			oprice: "659",
			discount: "5.2"
		},
		{
			id: 4,
			imgUrl: "../../static/img/commodity4.jpg",
			name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
			pprice: "299",
			oprice: "659",
			discount: "5.2"
		}
	]
</script>

<style>
</style>