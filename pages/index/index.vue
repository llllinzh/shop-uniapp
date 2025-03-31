<template>
	<view>
		<IndexSwiper></IndexSwiper>
		<Recommend></Recommend>
		<Card cardTitle='猜你喜欢'></Card>
		<CommodityList></CommodityList>
	</view>
</template>

<script setup>
import IndexSwiper from '@/components/index/indexSwiper.vue'
import Recommend from '@/components/index/Recommend.vue'
import Card from '@/components/common/Card.vue'
import CommodityList from '@/components/common/CommodityList.vue'
</script>

<style scoped>

</style>
