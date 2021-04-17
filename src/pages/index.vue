<template>
	<v-container>
		<AppSearch />
		<v-row>
			<v-col cols="3" v-for="n in 1" :key="n">
				<CardA />
				<!-- <Card /> -->
				<Card />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import AppSearch from '@/components/AppSearch.vue'
import Card from '@/components/Card.vue'
import CardA from '@/components/CardA.vue'
export default {
	name: 'home',
	components: {
		// HelloWorld,
		AppSearch,
		Card,
		CardA,
	},
}
</script>
