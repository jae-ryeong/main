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

