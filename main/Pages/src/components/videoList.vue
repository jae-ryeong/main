<template>
    <div class="main">
            <header>
                <div class="inner">
                    <b-nav tabs justified class="menus">
                        <b-nav-item class="menu">전체</b-nav-item>
                        <b-nav-item class="menu">끼니</b-nav-item>
                        <b-nav-item class="menu">다이어트</b-nav-item>
                        <b-nav-item class="menu">운동</b-nav-item>
                        <b-nav-item class="menu">간식</b-nav-item>
                    </b-nav>
                </div>
            </header>
            <section>
                <div class="inner">
                    <div class="viderList">
                        <!--json 파일의 개수만큼 영상 틀 생김.-->
                        <div class="videoInformations"
                        v-for="movieCount, i in movieLength"
                        :key="i"  @click="watchVideo(e)">
                            <div class="video" id="video">
                                <div class="videoInner">
                                    <img id="videoImg" class = "videoImg" :src="videoImg[i]" alt="이미지 없음."/>
                                    {{i}}
                                    <div class="videoInformation">
                                        <div class="videoTitle">
                                            {{videoTitle[i]}}
                                        </div>
                                        <div class="videoUser">
                                            {{videoUser[i]}}
                                        </div>
                                    </div>
                                </div> 
                            </div>                       
                        </div>
                    </div>
                    <!--영상 누르면 화면 어두워지고 동영상 나오도록 하기-->
                    <div class="movieBox"/>
                    <div class="movie">
                        <!-- <video controls autoplay muted src="https://www.youtube.com/embed/kfGi3rTct8c">
                        </video> -->
                        <iframe  frameborder="0"></iframe>
                    </div>
                    <button class="movieDown">
                        영상 끄기
                    </button>
                </div>
            </section>
            <!-- <Footer/> -->
        </div>
</template>

<script>
import Footer from './footer.vue'
import data from '../data/data.json'
export default {
    components: {
        Footer
    },
    data(){
        return{
            navigations: [
                {
                    name : 'Main',
                    href: '/'
                }
            ],
            movieLength: data.length,
            videoImg: [],
            videoUser: [],
            videoTitle: [],
            video: [],
        }
    },
    mounted(){
        this.underLine();
        this.watch();
        this.videoBg();
    },  
    created(){
        // this.indent();
        this.videoInformation();
    },
    methods:{
        underLine(){
            const menu = document.querySelectorAll('.menu');
            for(var i = 0; i < menu.length; i++){
                    menu[i].onmouseover = function(){
                        let underLine = document.querySelectorAll('.underLine');
                        for(var j = 0; j <= underLine.length; j++){
                            underLine[j].classList.add('event');
                        }
                    }
                    menu[i].onmouseout = function(){
                        let underLine = document.querySelectorAll('.underLine');
                        for(var z = 0; z <= underLine.length; z++){
                            underLine[z].classList.remove('event');
                    }
                }
            }
        
        },
        watchVideo(e){
            const movieBox = document.querySelector('.movieBox');
            const movie = document.querySelector('.movie');
            const movieDowm = document.querySelector('.movieDown');
            movieBox.style.display = "block";
            movie.style.display = "block";
            movieDowm.style.display = "block";
            movieDowm.addEventListener('click', function(){
                movieBox.style.display = "none";
                movie.style.display = "none";
                movieDowm.style.display = "none";
            })
            const videoImg = document.querySelectorAll('.videoImg');
            const movieLink = document.querySelector('.movie iframe');
            const movieLength = this.movieLength;
            const video = this.video;
            // 영상 이미지 클릭하면 해당 이미지 관련 영상 띄우기 (코드 개선하기)
            for(let i in video){
                videoImg[i].addEventListener('click', function(){
                    movieLink.src = video[i];
                })
            }
        },
        mainLink(){
            this.$router.push({
                path : '/'
            })
        },
        // 비디오 영상, 이미지, 제목, 비디오 등등을 표시.
        videoInformation(){
            let movieInner = data;
            console.log(data.length);
            // 영상 이미지 넣기
            movieInner.map(a => {
                this.videoImg.push(a.thumbnail);
            })
            // 영상 제목 넣기
            movieInner.map(a => {
                this.videoUser.push(a.query);
            })
            // 영상 설명 넣기
            movieInner.map(a => {
                this.videoTitle.push(a.title);
            })
            movieInner.map(a => {
                this.video.push(a.url);
            })
        },
        watch(){
            
        },
        // 영상 이미지 가져오기 (높은 해상도로) 코드 개선하기.
        replaceDiffSizeImage(src, size = 700){
            // 대문자 SX300으로 시작하는 text를 SX700으로 해당하는 text로 변경 
            // 하지만 700은 다른 사이즈로도 변경할 수 있도록 size라는 매개변수를 아래와 같이 적이주자.
            movieInner.map(a => {
                this.videoImg.push(a.thumbnail);
            })
            return src.replace('SX300', `SX${size}`)
        }
    }
}
</script>
<style scoped>
    *{
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .main{
        position: relative;
        width: 100%;
    }
    .inner{
        position: relative;
        margin: auto;
        width: 1000px;
        height: 100%;
    }
    header{
        position: relative;
        width: 100%;
        height: 120px;
        background-color: #F2BB7B;
    }
    .menus{
        position: absolute;
        top: 78px;
        left: 25px;
    }
    .menu{
        width: 100px;
    }
    .menu a{
        color: #fff;
    }
    .menu a:hover{
        color: #333;
    }
    .underLine{
        margin-top: 30px;
        width: 100%;
        height: 4px;
        background-color: #fff;
        opacity: 0;
        transition: 1s;
    }
    .underLine.event{
        transform: translateY(-20px);
        opacity: 1;
    }
    section{
        position: relative;
        width: 100%;
        height: 70%;
    }
    .viderList{
        position: absolute;
    }
    .videoImg{
        position: absolute;
        width: 295px;
        height: 200px;
        border-radius: 10px;
    }
    .videoInformations{
        width: 700px;
        height: 250px;
        border-radius: 10px;
        background-color: rgb(238, 235, 235);
    }
    .video{
        position: relative;
        top: 20px;
        margin: 30px 20px;
        width: 300px;
        height: 200px;
        border: 3px solid rgb(205, 203, 203);
        border-radius: 10px;
        cursor: pointer;
    }
    .videoInner{
        position: absolute;
        display: flex;
    }
    .videoInformation{
        position: absolute;
        left: 200px;
        margin: 30px 100px;
    }
    .videoInformation:nth-child(4),
    .videoInformation:nth-child(5),
    .videoInformation:nth-child(6){
        position: relative;
        /* margin-top: 400px;
        margin-left: 10px; */
    }
    .videoInformation{
        position: relative;
    }
    .videoUser{
        font-size: 12px;
        margin-left: 20px;
    }
    .videoTitle{
        width: 300px;
        font-size: 16px;
        margin-left: 20px;
    }
    .darkBg{
        margin-top: 180px;
        background:rgba(0, 0, 0, 0.5);
        opacity: 0;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        transition: 1s;
    }
    .darkBg.event{
        opacity: .7;
        transform: translateY(-200px);
    }
    .title{
        color: #fff;
        padding: 10px;
        font-size: 25px;
        font-weight: 700;
    }
    .name{
        color: #fff;
        padding: 10px;
        font-size: 20px;
        font-weight: 500;
    }
    .movieBox{
        position:fixed;
        right: 1px;
        top: 1px;
        width: 100vw;
        height: 100vh;
        background-color: #000;
        opacity: .5;
        display: none;
    }
    .movie{
        position: absolute;
        left: 140px;
        top: 100px;
        width: 700px;
        height: 400px;
        border-radius: 10px;
        /* border: 3px solid #333; */
        display: none;
    }
    .movie iframe{
        position: fixed;
        width: 700px;
        height: 400px;
        border-radius: 10px;
        z-index: 10;
    }
    .movieDown{
        position: absolute;
        width: 80px;
        height: 50px;
        top : 50px;
        right: 10px;
        border-radius: 10px;
        display: none;
    }
</style>