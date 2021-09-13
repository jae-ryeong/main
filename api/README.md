# **유튜브 동영상 데이터 정보 요청 API**


## **API 작성자**
```
이진형(bya2, byaa1972@gmail.com)
```

## **Plan**
```
1. 시간 별 자동 실행 (연계)
   - Linux
   - Docker

(완료) 검색어 랜덤 추출 및 종류 별 실행 완료. (구상 동작 완료)
(완료) 검색어 종류 구분 및 모델 작성 ex) Meal, Snack, Sports ...
(완료) 개인 별로 작성한 검색어 통합, 포맷 정리, 중복 제거.
(완료) 동영상에 해당하는 채널 추출 및 MongoDB 저장.
(완료) 검색어 별로 동영상 추출 및 MongoDB 저장.
(완료) 문자열로 정보를 요청할 수 있도록 작성. (API 사용량 최소화)
(완료) 비디오, 채널 정보 중복 제거.
(완료) 옵션에서 정보를 필터링. (API 사용량 최소화)
(완료) 비디오, 채널 정보 요청.
```

## **Progress**

'검색된 비디오 및 채널 정보' 요청
```
./src/apiController
./src/apiController/index.js (실행)
./src/apiController.getQueries (입력)
./src/apiController/infoList.json (결과)
```
```sh
Mohaemookji/main> npm run api
```
```js
// 결과

```

## **TEST**
'검색된 비디오 및 채널 정보' 요청
```
./src/apiController
./src/apiController/index.js (실행)
['군만두', '에드워드 권 집콕 집콕'] (입력)
```
```js
// 결과
videos:
 [
  {
    query: '군만두',
    url: 'https://www.youtube.com/watch?v=rk2gOrkZ8FQ',
    channelId: 'UClxcyOHsw5H6ZzlebgCcEhQ',
    title: '질의응답편(Q&A)/예열없이 바로 스텐팬에 두부 군만두도 성공할 수 있어요/베이컨 프렌치토스트 /두부구이 바삭군만두 /새우브로콜리 볶음밥',
    thumbnail: 'https://i.ytimg.com/vi/rk2gOrkZ8FQ/default.jpg'
  },
  ... 그 외 9개의 object
]

channels:
 [
  {
    id: 'UClxcyOHsw5H6ZzlebgCcEhQ',
    url: 'https://www.youtube.com/channel/UClxcyOHsw5H6ZzlebgCcEhQ',
    title: '미곰이meegom my life',
    thumbnail: 'https://yt3.ggpht.com/ytc/AKedOLTLaKzcJVm1IGss3M7uAG1wga-pWk2z8AurLSnMyA=s88-c-k-c0x00ffffff-no-rj'
  },
  ... 그 외 5개의 object
]
```

'검색어' 통합 및 중복 제거
```
./src/apiController.getQueries(list)
./src/TEST/index.js (실행)
./src/TEST/cooking.json (결과)
```
```json
// 결과
{
  "a": [
    "볶음",
    "국수",
    "스파게티",
    "면",
    "불닭",
    "구이",
    "에드워드 권 집콕 집콕",
    "깽스키친",
    ... 그 외 elements
  ],
  "b": [
    "땅콩",
    "호두",
    "과자",
    "쿠키",
    "빵",
    "라면 레시피",
    "튀김 요리",
    "스무디",
    ... 그 외 elements
  ],
  "c": [
    "저칼로리 요리",
    "선식",
    "생식",
    "오트밀",
    "야채주스",
    "저칼로리 레시피",
    "저탄수화물 레시피",
    "샐러드",
    ... 그 외 elements
  ],
  "d": [
    "고칼로리 요리",
    "멸치를 위한 요리",
    "고단백",
    "닭가슴살 요리",
    "랭킹닭컴 추천",
    "닭가슴살",
    "단백질 보충제",
    "벌크업 식단",
    ... 그 외 elements
  ],
  "e": [
    "선식",
    "생식",
    "견과류",
    "아이스크림",
    "야채 주스",
    "가지 요리",
    "샐러드",
    ... 그 외 elements
  ]
}
```

