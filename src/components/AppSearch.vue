<template>
	<v-card>
		<v-card-text>
			<v-container fluid>
				<v-row>
					<v-col cols="12" sm="4" md="4">
						<v-checkbox v-model="ex4" label="red" color="red" value="red" hide-details></v-checkbox>
						<v-checkbox
							v-model="ex4"
							label="red darken-3"
							color="red darken-3"
							value="red darken-3"
							hide-details
						></v-checkbox>
					</v-col>
					<v-col cols="12" sm="4" md="4">
						<v-checkbox v-model="ex4" label="indigo" color="indigo" value="indigo" hide-details></v-checkbox>
						<v-checkbox
							v-model="ex4"
							label="indigo darken-3"
							color="indigo darken-3"
							value="indigo darken-3"
							hide-details
						></v-checkbox>
					</v-col>
					<v-col cols="12" sm="4" md="4">
						<v-checkbox v-model="ex4" label="orange" color="orange" value="orange" hide-details></v-checkbox>
						<v-checkbox
							v-model="ex4"
							label="orange darken-3"
							color="orange darken-3"
							value="orange darken-3"
							hide-details
						></v-checkbox>
					</v-col>
				</v-row>

				<v-row class="mt-12">
					<v-col cols="12" sm="4" md="4">
						<v-checkbox v-model="ex4" label="primary" color="primary" value="primary" hide-details></v-checkbox>
						<v-checkbox v-model="ex4" label="secondary" color="secondary" value="secondary" hide-details></v-checkbox>
					</v-col>
					<v-col cols="12" sm="4" md="4">
						<v-checkbox v-model="ex4" label="success" color="success" value="success" hide-details></v-checkbox>
						<v-checkbox v-model="ex4" label="info" color="info" value="info" hide-details></v-checkbox>
					</v-col>
					<v-col cols="12" sm="4" md="4">
						<v-checkbox v-model="ex4" label="warning" color="warning" value="warning" hide-details></v-checkbox>
						<v-checkbox v-model="ex4" label="error" color="error" value="error" hide-details></v-checkbox>
					</v-col>
				</v-row>
			</v-container>
		</v-card-text>
		<v-combobox
			v-model="chips"
			:items="items"
			chips
			clearable
			label="Your favorite hobbies"
			multiple
			prepend-icon="mdi-filter-variant"
			solo
		>
			<template v-slot:selection="{ attrs, item, select, selected }">
				<v-chip v-bind="attrs" :input-value="selected" close @click="select" @click:close="remove(item)">
					<strong>{{ item }}</strong>
					&nbsp;
					<span>(interest)</span>
				</v-chip>
			</template>
		</v-combobox>
	</v-card>
</template>

<script ln="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component()
export default class AppSearch extends Vue {
	chips = ['Programming', 'Playing video games', 'Watching movies', 'Sleeping']
	/**
	 * 
	 * 
	 * {
  "message": "OK",
  "code": 0,
  "value": {
    "tags": [
      {
        "tag_no": 1,
        "tag_name": "액션",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 2,
        "tag_name": "RPG",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 3,
        "tag_name": "어드벤처",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 4,
        "tag_name": "퍼즐",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 5,
        "tag_name": "시뮬레이션",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 6,
        "tag_name": "스포츠",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 7,
        "tag_name": "슈팅",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 8,
        "tag_name": "FPS",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 9,
        "tag_name": "공포",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 10,
        "tag_name": "아케이드",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 11,
        "tag_name": "리듬",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 12,
        "tag_name": "디펜스",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 13,
        "tag_name": "생존",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 14,
        "tag_name": "전략",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 15,
        "tag_name": "샌드박스",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 16,
        "tag_name": "레이싱",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 17,
        "tag_name": "캐주얼",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 18,
        "tag_name": "카드수집",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 19,
        "tag_name": "플랫포머",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 20,
        "tag_name": "대전",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 21,
        "tag_name": "로그라이크",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 22,
        "tag_name": "핵앤슬래시",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 23,
        "tag_name": "횡스크롤 액션",
        "tag_type": "GENRE"
      },
      {
        "tag_no": 24,
        "tag_name": "2D",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 25,
        "tag_name": "3D",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 26,
        "tag_name": "픽셀그래픽",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 27,
        "tag_name": "게임잼",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 28,
        "tag_name": "높은 난이도",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 29,
        "tag_name": "쉬운 난이도",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 30,
        "tag_name": "마우스만 사용",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 31,
        "tag_name": "가성비",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 32,
        "tag_name": "여성취향",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 33,
        "tag_name": "남성취향",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 34,
        "tag_name": "10대 취향",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 35,
        "tag_name": "꼭 해봐야할",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 36,
        "tag_name": "귀여운",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 37,
        "tag_name": "초보자 추천",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 38,
        "tag_name": "힐링",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 39,
        "tag_name": "무료게임",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 40,
        "tag_name": "멀티 엔딩",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 41,
        "tag_name": "턴제",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 42,
        "tag_name": "한글화",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 43,
        "tag_name": "짧은",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 44,
        "tag_name": "애니",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 45,
        "tag_name": "라이트노벨",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 46,
        "tag_name": "스토리중심",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 47,
        "tag_name": "조작중심",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 48,
        "tag_name": "소문의 띵작",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 49,
        "tag_name": "미스터리",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 50,
        "tag_name": "갓게임",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 51,
        "tag_name": "실험적인",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 52,
        "tag_name": "콘트롤러 지원",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 53,
        "tag_name": "시간 순삭",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 54,
        "tag_name": "핫이슈",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 55,
        "tag_name": "영상미",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 56,
        "tag_name": "감동적인 서사",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 57,
        "tag_name": "스트레스 해소",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 58,
        "tag_name": "촉촉한 감성",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 59,
        "tag_name": "영웅",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 60,
        "tag_name": "판타지",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 61,
        "tag_name": "격투",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 62,
        "tag_name": "고퀄리티 그래픽",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 63,
        "tag_name": "예상 그 이상",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 64,
        "tag_name": "중독성 강한",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 65,
        "tag_name": "전쟁",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 66,
        "tag_name": "좋은 음악",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 67,
        "tag_name": "현실적인",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 68,
        "tag_name": "강렬한 반전",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 69,
        "tag_name": "공상 과학",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 70,
        "tag_name": "풍부한 스토리",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 71,
        "tag_name": "싱글플레이",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 72,
        "tag_name": "멀티플레이",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 73,
        "tag_name": "멋진 악역",
        "tag_type": "FEATURE"
      },
      {
        "tag_no": 74,
        "tag_name": "청강",
        "tag_type": "FEATURE"
      }
    ]
  }
}
	 */
	items = ['Streaming', 'Eating']
	search = [{}]
	ex4 = [
		'red',
		'indigo',
		'orange',
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'error',
		'red darken-3',
		'indigo darken-3',
		'orange darken-3',
	]
	remove(item) {
		this.chips.splice(this.chips.indexOf(item), 1)
		this.chips = [...this.chips]
	}
}
</script>
