<template>
	<v-app id="inspire">
		<AppBar />
		<v-main class="grey lighten-3">
			<v-container>
				<v-row>
					<v-col>
						<v-sheet min-height="70vh" rounded="lg">
							<router-view />
						</v-sheet>
					</v-col>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>

<script ln="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppBar from '@/layouts/AppBar.vue'

@Component({
	components: {
		AppBar,
	},
})
export default class App extends Vue {}
</script>
