<template>
	<view class="index">

		<scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="scrollIntoIndex">
			<view :id="'top' + index" v-for="(item,index) in topBar" :key="index" class="scroll-item"
				@tap="changeTab(index)">
				<text :class="topBarIndex===index?'f-active-color':'f-color'">{{item.name}}</text>
			</view>
		</scroll-view>

		<swiper @change="onChangeTab" :current="topBarIndex" :style="'height:' + clentHeight +'px;'">
			<swiper-item v-for="(item, index) in newTopBar" :key="index">
				<view class="home-data">
					<block v-for="(k,i) in item.data" :key="i">
						<IndexSwiper v-if="k.type==='swiperList'" :dataList='k.data'></IndexSwiper>
						<Recommend></Recommend>
						<Card cardTitle='猜你喜欢'></Card>
						<CommodityList></CommodityList>
					</block>
				</view>
				
			</swiper-item>
		</swiper>

		<!-- 首页推荐模板 -->
		<!-- <IndexSwiper></IndexSwiper>
		<Recommend></Recommend>
		<Card cardTitle='猜你喜欢'></Card>
		<CommodityList></CommodityList> -->

		<!-- 其他模板：运动户外、美妆... -->
		<!-- <Banner></Banner>
		<Icons></Icons>
		<Card cardTitle='热销爆品'></Card>
		<Hot></Hot>
		<Card cardTitle='推荐店铺'></Card>
		<Shop></Shop>
		<Card cardTitle='为您推荐'></Card>
		<CommodityList></CommodityList> -->

	</view>
</template>

<script setup>
	import IndexSwiper from '@/components/index/indexSwiper.vue'
	import Recommend from '@/components/index/Recommend.vue'
	import Card from '@/components/common/Card.vue'
	import CommodityList from '@/components/common/CommodityList.vue'
	import Banner from '@/components/index/Banner.vue'
	import Icons from '@/components/index/Icons.vue'
	import Hot from '@/components/index/Hot.vue'
	import Shop from '@/components/index/Shop.vue'
	import {
		onMounted,
		ref
	} from 'vue'

	const topBarIndex = ref(0)
	const scrollIntoIndex = ref('top0')
	//内容块的高度值
	const clentHeight = ref(0)
	const topBar = ref([
		
	])
	
	//承载数据
	const newTopBar = ref([
		
	])


	
	onMounted(()=>{
		let view = uni.createSelectorQuery().select(".home-data")
		view.boundingClientRect(data =>{
			clentHeight.value = 1000
			// clentHeight.value = data.height
		}).exec();
		
		__init()
	})
	
	function __init(){
		uni.request({
			url:"http://192.168.146.31:3000/api/index_list/data",
			success:(res)=>{
				let data = res.data.data
				topBar.value = data.topBar
				newTopBar.value = initData(data)
			}
		})
	}
	
	function initData(res){
		let arr = []
		for(let i=0;i<topBar.value.length;i++){
			let obj = {
				data:[]
			}
			//获取首次数据
			if(i==0){
				obj.data = res.data
			}
			arr.push(obj)
		}
		return arr
	}
	
	function changeTab(index) {
		if (topBarIndex.value === index) {
			return
		}
		topBarIndex.value = index
		scrollIntoIndex.value = 'top' + index
	}
	
	function onChangeTab(e) {
		topBarIndex.value = e.detail.current
	}
	
</script>

<style scoped>
	.scroll-content {
		width: 100%;
		height: 80rpx;
		white-space: nowrap;
	}

	.scroll-item {
		display: inline-block;
		padding: 10rpx 30rpx;
		font-size: 32rpx;
	}

	.f-active-color {
		padding: 10rpx 0;
		border-bottom: 6rpx solid #49BDFB;
	}
</style>