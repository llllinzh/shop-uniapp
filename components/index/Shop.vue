<template>
	<view class="shop">
		<view class="shop-item">
			<view class="shop-big">
				<image class="shop-big" src="/static/img/shop.jpg"></image>
			</view>
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item">
					<commodity :dataList="shopList" wrap="no-wrap" itemW="200rpx" bigH="200rpx" nameSize="20rpx">
					</commodity>
				</view>
			</scroll-view>
		</view>
		
		<view class="shop-item">
			<view class="shop-big">
				<image class="shop-big" src="/static/img/shop.jpg"></image>
			</view>
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item">
					<commodity :dataList="shopList" wrap="no-wrap" itemW="200rpx" bigH="200rpx" nameSize="20rpx">
					</commodity>
				</view>
			</scroll-view>
		</view>
		
		<view class="shop-item">
			<view class="shop-big">
				<image class="shop-big" src="/static/img/shop.jpg"></image>
			</view>
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item">
					<commodity :dataList="shopList" wrap="no-wrap" itemW="200rpx" bigH="200rpx" nameSize="20rpx">
					</commodity>
				</view>
			</scroll-view>
		</view>
		
		<view class="shop-item">
			<view class="shop-big">
				<image class="shop-big" src="/static/img/shop.jpg"></image>
			</view>
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item">
					<commodity :dataList="shopList" wrap="no-wrap" itemW="200rpx" bigH="200rpx" nameSize="20rpx">
					</commodity>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script setup>
	import Commodity from '../common/Commodity.vue'

	const shopList = [{
			id: 1,
			imgUrl: "/static/img/shop1.jpg",
			name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
			pprice: "299",
			oprice: "659",
			discount: "5.2"
		},
		{
			id: 2,
			imgUrl: "/static/img/shop2.jpg",
			name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
			pprice: "299",
			oprice: "659",
			discount: "5.2"
		},
		{
			id: 3,
			imgUrl: "/static/img/shop3.jpg",
			name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
			pprice: "299",
			oprice: "659",
			discount: "5.2"
		},
		{
			id: 4,
			imgUrl: "/static/img/shop4.jpg",
			name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
			pprice: "299",
			oprice: "659",
			discount: "5.2"
		},
		{
			id: 1,
			imgUrl: "/static/img/shop1.jpg",
			name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
			pprice: "299",
			oprice: "659",
			discount: "5.2"
		},
		{
			id: 2,
			imgUrl: "/static/img/shop2.jpg",
			name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
			pprice: "299",
			oprice: "659",
			discount: "5.2"
		},
		{
			id: 3,
			imgUrl: "/static/img/shop3.jpg",
			name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
			pprice: "299",
			oprice: "659",
			discount: "5.2"
		},
		{
			id: 4,
			imgUrl: "/static/img/shop4.jpg",
			name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
			pprice: "299",
			oprice: "659",
			discount: "5.2"
		}
	]
</script>

<style scoped>
	.shop-big {
		width: 100%;
		height: 350rpx;
	}

	.scroll-content {
		width: 100%;
		white-space: nowrap;
	}

	.scroll-item {
		display: inline-block;
	}
</style>