<template>
    <div>
        <header>
            <div class="container-xl">
                <div class="logo">
                    <h3 class="fc-brown">KIDS STAY HOTEL <span class="fc-coffee">IN BUGOK</span></h3>
                    <p class="fs14 fc-ciment" style='letter-spacing:4.4px;'>키즈테마호텔 키즈스테이호텔인부곡</p>
                </div>
                <nav>
                    <ul @mouseenter="hoverMenu = true">
                        <li @mouseenter="hoverNav(1)"><nuxt-link to='/'>호텔소개</nuxt-link><div v-if="turn1" class="hover-line"></div></li>
                        <li @mouseenter="hoverNav(2)"><nuxt-link to='/sub1'>객실안내</nuxt-link><div v-if="turn2" class="hover-line"></div></li>
                        <li @mouseenter="hoverNav(3)"><nuxt-link to='/'>시설안내</nuxt-link><div v-if="turn3" class="hover-line"></div></li>
                        <li @mouseenter="hoverNav(4)"><nuxt-link to='/'>커뮤니티</nuxt-link><div v-if="turn4" class="hover-line"></div></li>
                        <li @mouseenter="hoverNav(5)"><nuxt-link to='/'>예약하기</nuxt-link><div v-if="turn5" class="hover-line"></div></li>
                    </ul>
                </nav>
                <div>
                    <ul>
                        <li>
                            <span class="fs16">고객센터. 055-000-0000</span>
                        </li>
                        <li>
                            <v-icon>mdi-home</v-icon>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <div v-if="hoverMenu" @mouseenter="hoverMenu = true" @mouseleave="closeSubMenu" class="sub-menu">
            <ul @mouseenter="hoverNav(1)">
                <li><nuxt-link to="/">호텔소개</nuxt-link></li>
                <li><nuxt-link to="/">이용안내</nuxt-link></li>
                <li><nuxt-link to="/">오시는길</nuxt-link></li>
                <li><nuxt-link to="/">주변관광지</nuxt-link></li>
            </ul>
            <ul @mouseenter="hoverNav(2)">
                <li><nuxt-link to="/">레이싱룸</nuxt-link></li>
                <li><nuxt-link to="/">캠핑룸</nuxt-link></li>
                <li><nuxt-link to="/">글램핑룸</nuxt-link></li>
                <li><nuxt-link to="/">핑크룸</nuxt-link></li>
                <li><nuxt-link to="/">플레이룸</nuxt-link></li>
                <li><nuxt-link to="/">캐리비안룸</nuxt-link></li>
                <li><nuxt-link to="/">루프탑글램핑룸</nuxt-link></li>
            </ul>
            <ul @mouseenter="hoverNav(3)">
                <li><nuxt-link to="/">키즈카페</nuxt-link></li>
                <li><nuxt-link to="/">루프탑 물놀이터</nuxt-link></li>
            </ul>
            <ul @mouseenter="hoverNav(4)">
                <li><nuxt-link to="/">공지사항</nuxt-link></li>
                <li><nuxt-link to="/">이벤트</nuxt-link></li>
            </ul>
            <ul @mouseenter="hoverNav(5)">
                <li><nuxt-link to="/">예약하기</nuxt-link></li>
            </ul>
        </div>
        <nuxt />
    </div>
</template>

<script>
export default {
    data () {
        return {
            hoverMenu: false,
            turnOn: false,
            hoverActive: false,
            turn1:false,
            turn2:false,
            turn3:false,
            turn4:false,
            turn5:false,
        }
    },
    methods: {
        closeSubMenu() {
            this.hoverMenu = false;
            this.turn1 = false;
            this.turn2 = false;
            this.turn3 = false;
            this.turn4 = false;
            this.turn5 = false;
        },
        hoverNav(i) {
            this.turn1 = false;
            this.turn2 = false;
            this.turn3 = false;
            this.turn4 = false;
            this.turn5 = false;
            switch(i)
            {
                case 1: this.turn1=true; break;
                case 2: this.turn2=true; break;
                case 3: this.turn3=true; break;
                case 4: this.turn4=true; break;
                case 5: this.turn5=true; break;
            }

        }
    }
}
</script>

<style>
@import "~/style/style.css";
@import "~/style/font.css";
@import "~/style/default.css";

    body {
        background: url("../img/bg/bg.png");
        background-size: cover;        
        font-family: 'Noto Sans KR', sans-serif;

    }

    header {
        width: 100%;
        height: 90px;
        background-color: #ffffff;
    }

    header .container-xl {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    .logo {
        display: inline-block;
    }

    .logo h3 {
        line-height: 20px;
    }

    nav ul li {
        width: 140px;
        display: inline-block;
        text-align: center;
    }

    nav ul li a {
        font-size: 17px;
        color: #363636;
        transition: 0.2s;
    }

    nav ul li a:hover {
        color: #a67c52;
    }

    .sub-menu {
        width: 100%;
        height: 250px;
        background-color: #ffffff;
        display: flex;
        position: absolute;
        justify-content: center;
        padding-top: 20px;
        padding-left:80px;
    }

    .sub-menu ul {
        display: inline-block;
        width: 140px;
    }
    .sub-menu ul:nth-child(3) {
        padding-left:10px;
    }

    .sub-menu ul:nth-child(4) {
        padding-left:15px;
    }

    .sub-menu ul:nth-child(5) {
        padding-left:15px;
    }

    .sub-menu ul li {
        height: 30px;
        font-size: 15px;
        display: block;
        text-align: center;
    }

    .sub-menu ul li a {
        color:#363636;
    }

    .sub-menu ul li a:hover {
        color:#a67c52;
    }


</style>