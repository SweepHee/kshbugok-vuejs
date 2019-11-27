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
                        <li><nuxt-link to='/'>호텔소개</nuxt-link></li>
                        <li><nuxt-link to='/'>객실안내</nuxt-link></li>
                        <li><nuxt-link to='/'>시설안내</nuxt-link></li>
                        <li><nuxt-link to='/'>커뮤니티</nuxt-link></li>
                        <li><nuxt-link to='/'>예약하기</nuxt-link></li>
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
        <div v-if="hoverMenu" @mouseenter="hoverMenu = true" @mouseleave="hoverMenu = false" class="sub-menu">
            
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            hoverMenu: false,
            turnOn: false,
        }
    },
    methods: {
        openSubmenu() {
            this.hoverMenu = !this.hoverMenu;
            this.turnOn = !this.turnOn;
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
    }

    header {
        width: 100%;
        height: 90px;
        font-family: 'Noto Sans KR', sans-serif;
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
    }

    nav ul li a {
        font-size: 17px;
        color: #363636;
        transition: 0.2s;
    }

    nav ul li a:hover {
        color: #a67c52;
    }

    nav ul li a:hover:before {
        content: "";
        border-bottom: 2px solid #a67c52;
        width: 65px;
        top: 90px;
        position: absolute;
    }

    .sub-menu {
        width: 100%;
        height: 250px;
        background-color: #ffffff;
    }


</style>