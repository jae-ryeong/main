# **뭐해먹지 API: 유튜브 동영상 정보 요청**

## **작성자**
**`이진형`**(bya2, byaa1972@gmail.com)

## **설명**
[**`Description`**](https://github.com/KNUT-Mohaemookji/mohaemookji/tree/jinhyeong#mohaemookji-project)

## **고려 사항**
```
(진행) 다른 운영체제에서 동작할 수 있도록 순서가 불필요할 때 병렬 처리할 수 있도록 작성,
(진행) 각 동작이 완료 후에 다음 동작을 부여,
(진행) Youtube Data API 할당량 하루 10000 이내로 사용할 수 있도록 작성,
(진행) 스코프 범위 고려해서 코드 작성,
(진행) 데이터 베이스 동작 최소화,
(진행) 코드는 최대한 간결하게,
(진행) 가독성을 위해 변수, 함수, 매개변수명에 규칙성 부여,
(진행) 기능 별로 함수 분리,
```

## **개발 계획**
```
1. 시간 별 자동 실행 (연계, 진행 중)
   - Linux
   - Docker

2. 하루마다 할당량 10000 이내 동작 (진행 중)
   - 옵션을 통해 요청 데이터 필터링
   - 검색어 하나당 할당량 100
   - Video, Channel 등 하나당 할당량 1
   - 배열 형태의 Id를 스트링으로 변경해서 할당량 최소화
   - 중복되는 요소를 데이터 요청 전 미리 제거

3. 검색어 목록을 json 파일로 저장해서 API가 동작할 때마다 검색어 삭제, 일정 시간 후 다시 추가

(완료) 가독성 고려해서 자료형에 따라 변수 및 함수명에 변경, 매개변수 앞에 밑줄(_) 추가
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

## **오류 사항**
```
(진행) MongooseError - Operation `users.findOne()` buffering timed out after 10000ms
  - 병렬 처리
```

## **진행 상황**

### **화면**

#### **`터미널`**

`결과`(자세한 내용은 밑에 실행 결과 참조)

![image](https://user-images.githubusercontent.com/61080445/133105463-45d51997-054a-475a-b3fe-7b2b3e4174f4.png)

![image](https://user-images.githubusercontent.com/61080445/133105281-fc314fb9-cdd5-4d1b-b09b-b2844da1977b.png)

`중복 시`
![image](https://user-images.githubusercontent.com/61080445/133105672-f072b544-7069-4049-b4e4-cd544931dc53.png)

#### **`MongoDB Compass`**

`Collection`
![image](https://user-images.githubusercontent.com/61080445/133109438-4fb22c84-ac0e-436c-bd28-aa8ba73d84fe.png)

`Documents`  
##### Channel
![image](https://user-images.githubusercontent.com/61080445/133109655-1783465d-b882-4dc5-93df-fa5fd930becf.png)

##### Diet
![image](https://user-images.githubusercontent.com/61080445/133109736-c1b0e1d1-967d-4f97-8862-856d11140ab8.png)

##### Meal
![image](https://user-images.githubusercontent.com/61080445/133109844-b1ce35f8-be37-416a-87d6-c9dd107283bc.png)

##### Snack
![image](https://user-images.githubusercontent.com/61080445/133110108-51c5e868-9136-4470-814a-02e9608a7359.png)

##### Sports
![image](https://user-images.githubusercontent.com/61080445/133110221-cc35ec16-9e5f-419b-bdd6-b147016c9203.png)

##### Wellbeing
![image](https://user-images.githubusercontent.com/61080445/133110366-702847a8-b723-42c1-a069-b88aa8d50627.png)

### **실행**

`- Content`
```
0. 검색어 정리
1. 유튜브 API를 이용하여 검색어를 통해 검색 결과 요청
2. 검색된 비디오 및 채널 정보 요청
3. 데이터베이스에 정보 저장
```

`- Command`
```sh
$ npm run api
```

`- Files & Functions`
```
./db.js
./models/
./api/controller/apiController
./api/youtube/index.js (실행)
```

[`- Queries↓`](https://github.com/KNUT-Mohaemookji/mohaemookji/blob/main/api/youtube/result/cookingElements.json)
```
./api/youtube/result/cookingElements.json
```

[`- Result0↓`](https://github.com/KNUT-Mohaemookji/mohaemookji/blob/main/api/youtube/result/infoList0.json),
[`Result1↓`](https://github.com/KNUT-Mohaemookji/mohaemookji/blob/main/api/youtube/result/infoList1.json),
[`Result2↓`](https://github.com/KNUT-Mohaemookji/mohaemookji/blob/main/api/youtube/result/infoList2.json),
[`Result3↓`](https://github.com/KNUT-Mohaemookji/mohaemookji/blob/main/api/youtube/result/infoList3.json),
[`Result4↓`](https://github.com/KNUT-Mohaemookji/mohaemookji/blob/main/api/youtube/result/infoList4.json)
```
./api/youtube/result/infoList0.json
./api/youtube/result/infoList1.json
./api/youtube/result/infoList2.json
./api/youtube/result/infoList3.json
./api/youtube/result/infoList4.json
```

#### **테스트**
`'검색된 비디오 및 채널 정보' 요청`
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

`'검색어' 통합 및 중복 제거`
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

