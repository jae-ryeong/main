<template>
    <div>
        <div class="inner">
            <h1 class="mainText">FrontEnd</h1>
            <div class="frontEnd">
                <img class="profile" src="https://avatars.githubusercontent.com/u/76980526?v=4" alt="">
                <div class="introduce">
                    <div class="name">JGY</div>
                    <div class="email">jgy_98@naver.com</div>
                    <div class="tel">010-2037-4553</div>
                </div>
            </div>
            <h1 class="mainText">BackEnd</h1>
            <div class="backEnd">
                <div class="person">
                    <img class="profile" src="https://avatars.githubusercontent.com/u/76980526?v=4" alt="">
                        <div class="introduce"> 
                        <div class="name">YSH</div>
                        <div class="email">jgy_98@naver.com</div>
                        <div class="tel">010-2037-4553</div>
                    </div>
                </div>
                <div class="person">
                    <img class="profile" src="https://avatars.githubusercontent.com/u/76980526?v=4" alt="">
                        <div class="introduce"> 
                        <div class="name">LJH</div>
                        <div class="email">jgy_98@naver.com</div>
                        <div class="tel">010-2037-4553</div>
                    </div>
                </div>
                <div class="person">
                    <img class="profile" src="https://avatars.githubusercontent.com/u/76980526?v=4" alt="">
                        <div class="introduce"> 
                        <div class="name">KJR</div>
                        <div class="email">jgy_98@naver.com</div>
                        <div class="tel">010-2037-4553</div>
                    </div>
                </div>
            </div>
        </div>
        <b-button v-b-toggle.sidebar-1 class="advertisement">광고문의</b-button>
        <b-sidebar id="sidebar-1" title="광고 / 개발자 문의" shadow>
        <div class="px-3 py-2">
            <p>
                <b-button id="popover-target-1">
                    시훈
                </b-button>
                <b-popover target="popover-target-1" triggers="hover" class="profileSmall">
                    <template #title>email</template>
                    jgy_98@naver.com
                </b-popover>
            </p>
            <div class="technology">
                <h3>MohaeMookji Project</h3>
                <hr>
                <b>자취생들을 위한 랜덤 요리 추천 웹 사이트</b>
                <br><br>
                <h4>1. 프로젝트 개요</h4>
                <br>
                매끼마다 무슨 요리를 할지 고민하는 자취생들을 위해 유튜브의 다양한 요리
                <br><br>
                <h4>2. System Archtecture</h4>
                <hr>
                <img class="technologyImg" src="http://127.0.0.1:5500/main/Front/images/System%20Archtecture.png" alt="System Archtecture">
                <br><br>
                <h4>3. Operational Environment</h4>
                <hr>
                <p><h5>Web Server</h5>:클라이언트의 요청을 받아 정적 웹페이지 반환(메인 페이지)</p>
                <p><h5>Crawling Server</h5>:유튜브에서 크롤링한 영상의 소스코드를 카테도리별로 데이터베이스에 저장</p>
                <p><h5>Web Application Server</h5>:데이터베이스에 저장된 유튜브 소스코드 영상을 Select하여 동적 웹페이지 반환(요리추천 페이지)</p>
                <p><h5>Database</h5>:간편식, 면요리, 밥요리 등 카테고리 별로 유튜브 영상 소스코드 저장</p>
                <h4>4. Physical Scope</h4>
                <hr>
                <p><h5>웹 페이지</h5>: Vue.js, BootStrap</p>
                <p><h5>서버</h5>- 인프라 : AWS EC2 <br> - Web Server & WAS : Node.JS <br>- Crawling Server : Python/Django <br> - DBMS : MongoDB <br> - Container : Docker</p>
                <p><h5>프로젝트</h5>- 버전관리 : Git Hub <br> - CI/CD : Git Actions <br> - 협업도구 : MicrosoftTeams / Azure Boards</p>
                <h4>5. Logica   l Scope</h4>
                <hr>
                <p><h5>요리영상 카테고리</h5>: 끼니, 다이어트, 운동, 간식</p>
                <br>
            </div>
        </div>
        </b-sidebar>
        <Footer/>
    </div>
</template>

<script>
import Footer from './footer.vue'
export default {
    components: {
        Footer
    }
    
}
</script>
<style scoped>
    .inner{
        position: relative;
        width: 1000px;
        height: 100vh;
        margin: auto;
    }
    .mainText{
        margin-top: 8%;
    }
    .profile{
        border-radius: 50%;
        border: 3px solid rgb(208, 204, 204);
        margin-top: 5%;
        width: 20%;
        height: 20%;
    }
    .profileSmall{
        border-radius: 50%;
        background-image: url("ttps://avatars.githubusercontent.com/u/76980526?v=4");
        background-color: #fff;
        border: 1px solid rgb(208, 204, 204);
        width: 18%;
        height: 18%;
    }
    #sidebar-1{

    }
    #popover-target-1{
        border-radius: 50%;
        background-image: url("ttps://avatars.githubusercontent.com/u/76980526?v=4");
        background-size: contain;
        border: 1px solid rgb(208, 204, 204);
        width: 54px;
        height: 54px;
    }
    .frontEnd, .person{
        display: flex;
        margin-left: 20%;
    }
    .introduce{
        font-size: 25px;
        margin: 5% 15%;
    }
    .advertisement{ 
        position: absolute;
        right: 0;
        margin-top: 150px;
        margin-right: 30px;
        
        background-color: #fff;
        color: #333;
    }
    .advertisement:hover{
        background-color: rgb(159, 159, 159);
        color: #fff;
    }
    .technologyImg{
        width: 300px;
        height: 200px;
        border-radius: 10px;

    }
    /* .px-3{
        display: flex;
    } */
</style>