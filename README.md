<<<<<<< HEAD
# **MohaeMookji Project**
#### 자취생들을 위한 랜덤 요리 추천 웹 사이트

## **1. 프로젝트 개요**
> 매끼마다 무슨 요리를 할지 고민하는 자취생들을 위해 유튜브의 다양한 요리영상을 랜덤으로 보여주는 웹 사이트
## **2. System Archtecture**
>![모해묵지 아키텍처](https://user-images.githubusercontent.com/33280934/116194211-7d45d580-a76b-11eb-9625-b3c4c937ae02.png)

## **3. Operational Environment**
> ### Web Server 
> : 클라이언트의 요청을 받아 정적 웹페이지 반환 (메인 페이지)
> ### Crawling Server
> : 유튜브에서 크롤링한 영상의 소스코드를 카테고리별로 데이터베이스에 저장
> ### Web Application Server
> : 데이터베이스에 저장된 유튜브 소스코드 영상을 Select하여 동적 웹페이지 반환 (요리추천 페이지)
> ### Database
> : 간편식, 면요리, 밥요리 등 카테고리 별로 유튜브 영상 소스코드 저장

## **4. Physical Scope**
> ### 웹페이지  
> : HTML / CSS / JavaScript  
> ### 서버  
> ㆍ인프라 : AWS EC2  
> ㆍWeb Server & WAS : NodeJS  
> ㆍCrawling Server : Python / Django  
> ㆍDBMS : MongoDB  
> ㆍContainer : Docker  
> ### 프로젝트  
> ㆍ버전관리 : Git Hub  
> ㆍCI/CD : Git Actions  
> ㆍ협업도구 : MicrosoftTeams / Azure Boards  

## **5. Logical Scope**
> ### 요리영상 카테고리
> : 간편식, 면요리, 밥요리, 볶음요리 등

=======
# ~08/13
## 1. 메인 페이지 스크롤 시 위, 아래 변화하도록 설정.
## 2. footer 부분 제거하고 메뉴 부분 생성 햄버거 바 누르면 오른쪽에서 나오게 설정했습니다.
![image](https://user-images.githubusercontent.com/76980526/129288541-7bc06e78-404a-42c1-af14-e94c3f3cc83b.png)
## 3. videoList에서 영상 부분에 마우스 hover 하면 유튜버나 영상 정보 뜨도록 하고 싶은데 ㅠ
![image](https://user-images.githubusercontent.com/76980526/129288724-52321098-7b93-4d99-a493-677b81d995a2.png)

# 08/03 작업

### 메인 페이지를 변경했습니다. 디자인이 괜찮다면 이렇게 갈 예정입니다!

<img width="1436" alt="스크린샷 2021-08-03 오후 3 46 40" src="https://user-images.githubusercontent.com/76980526/127970532-885cde8a-81e2-4e92-98ee-ba2af2e4193c.png">
<img width="1440" alt="스크린샷 2021-08-03 오후 3 47 07" src="https://user-images.githubusercontent.com/76980526/127970596-661853e1-0cc0-4fda-a5c4-503b3fd21aab.png">

#### 위에 이미지 text는 페이지가 load 되면 이벤트를 적용했습니다. 우측 상단 메뉴바는 후에 필요하면 작업하겠습니다.

#### 아래 이미지는 이미지가 위 아래로 왔다갔다 하는 효과를 줬습니다. 밑에 영상 보러가기 버튼을 해 놓아도 되고 VideoList.html에 동영상 리스트를 가져와서 넣어도 됩니다.(주석처리 함)

#### 밑에 footer부분은 그대로라서 캡처를 하지 않았습니다!
>>>>>>> 2cadaa146b56baa7b57e5fc00659fd70d53629b8
