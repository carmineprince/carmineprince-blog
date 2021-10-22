(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{460:function(s,n,a){"use strict";a.r(n);var e=a(21),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一、安装vue-video-player"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、安装vue-video-player"}},[s._v("#")]),s._v(" 一、安装vue-video-player")]),s._v(" "),a("p",[a("code",[s._v("npm install vue-video-player")]),s._v("\n##二、安装vue-loader\n"),a("code",[s._v("npm install vue-loader")]),s._v("\n##三、在plugins目录下创建video.js文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import Vue from 'vue';\n\nconst VueVideoPlayer= require('vue-video-player/dist/ssr');\nconst hls = require('videojs-contrib-hls');\nimport 'vue-video-player/src/custom-theme.css';\n\nimport Video from 'video.js';\nimport 'video.js/dist/video-js.css';\n\nimport zhCN from './video-zh-CN.json';\n\nimport 'videojs-flash';\n\nconst SWF_URL=require('videojs-swf/dist/video-js.swf');\n\nVideo.options.flash.swf = SWF_URL; // 设置flash路径，Video.js会在不支持html5的浏览中使用flash播放视频文件\nVideo.addLanguage('zh-CN', zhCN);// 添加中文支持\nVue.use(hls);\nVue.use(VueVideoPlayer);\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("##四、在plugins目录下创建video-zh-CH.json文件\n拷贝node_modules/video/dist/lang/zh-CH.js中的json数据到video-zh-CH.json\n"),a("strong",[s._v("注意拷贝的是json数据。不要拷贝其他数据")])]),s._v(" "),a("p",[s._v("##五、配置nuxt.config.js")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('  plugins: [\n    {src: "@/plugins/video", ssr: false},\n  ],\n  build: {\n    extend(config, {isDev, isClient}) {\n      config.module.rules.push({\n        test: /\\.swf$/,\n        loader: "url-loader",\n        options:{\n          limit: 10000\n        }\n      });\n    }\n  }\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("##六、SPA使用")]),s._v(" "),a("h3",{attrs:{id:"template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template"}},[s._v("#")]),s._v(" template")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<video-player\n  class="confVideo vjs-custom-skin video-player"\n  ref="videoPlayer"\n  :options="playerOptions"\n  :playsinline="true"\n  customEventName="customstatechangedeventname"\n  @ready="playerReadied"\n  @loadeddata="onPlayerLoadeddata($event)"\n  @canplay="onPlayerCanplay($event)"\n  @canplaythrough="onPlayerCanplaythrough($event)"\n  @play="onPlayerPlay($event)"\n  @playing="onPlayerPlaying($event)"\n  @timeupdate="onPlayerTimeupdate($event)"\n  @pause="onPlayerPause($event)"\n  @waiting="onPlayerWaiting($event)"\n  @ended="onPlayerEnded($event)"\n  @statechanged="playerStateChanged($event)"\n  >\n</video-player>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("###script")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import 'video.js/dist/video-js.css'\nimport { videoPlayer } from 'vue-video-player'\nexport default {\n  components: {\n    videoPlayer\n  },\n  mounted() {\n      console.log('当前videojs对象', this.player)\n    },\n  computed: {\n      player() {\n        return this.$refs.videoPlayer.player\n      }\n    },\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("##七、SSR使用")]),s._v(" "),a("h3",{attrs:{id:"template-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template-2"}},[s._v("#")]),s._v(" template")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<div\n  v-video-player:myVideoPlayer="playerOptions"\n  class="confVideo vjs-custom-skin video-player"\n  ref="videoPlayer"\n  :playsinline="true"\n  customEventName="customstatechangedeventname"\n  @ready="playerReadied"\n  @loadeddata="onPlayerLoadeddata($event)"\n  @canplay="onPlayerCanplay($event)"\n  @canplaythrough="onPlayerCanplaythrough($event)"\n  @play="onPlayerPlay($event)"\n  @playing="onPlayerPlaying($event)"\n  @timeupdate="onPlayerTimeupdate($event)"\n  @pause="onPlayerPause($event)"\n  @waiting="onPlayerWaiting($event)"\n  @ended="onPlayerEnded($event)"\n  @statechanged="playerStateChanged($event)"\n></div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h3",{attrs:{id:"script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#script"}},[s._v("#")]),s._v(" script")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n  export default {\n    mounted() {\n      console.log('当前videojs对象, this.myVideoPlayer)\n    }\n    // Omit the same parts as in the following component sample code\n    // ...\n  }\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[s._v("#")]),s._v(" data")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("playerOptions: {\n  techOrder: ['html5', 'flash'], // 兼容顺序,使用flash播放，可以播放flv格式的文件\n  playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度\n  autoplay: false, // 如果true,浏览器准备好时开始回放\n  notSupportedMessage: '此视频暂无法播放!', // 无法播放时显示的信息\n  sourceOrder: true,\n  loop: false, // 导致视频一结束就重新开始。\n  // preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）\n  muted: true, // 默认情况下将会消除任何音频。\n  language: 'zh-CN',\n  // aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如\"16:9\"或\"4:3\"）\n  fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。\n  hls: true, //启用hls？\n  flash: {\n    hls: { withCredentials: false },\n    swf: '/videojs/video-js.swf'\n  },\n  html5: { hls: { withCredentials: false } },\n  sources: [\n    {\n      type: 'video/mp4', // 资源格式写法：'video/mp4'\n      src: '/video/1.mp4' // 本地资源地址，注意：本地资源存放在public文件夹中，本文视频资源路径public/video/1.mp4\n    }，\n    {\n      // withCredentials: true，\n      type: 'application/x-mpegURL', // hls\n      src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8' // url地址\n    }，\n    {\n      type:'rtmp/flv',//rtmp\n      src:'rtmp://live.hkstv.hk.lxdns.com/live/hks'//rtmp\n    },\n    {\n      type: 'rtmp/flv',//rtmp\n      src: `rtmp://58.200.131.2:1935/livetv/hunantv`\n    },\n    {\n      type: 'rtmp/mp4', // 资源格式写法：'video/mp4'\n      src: 'rtmp://' // url地址\n    }\n  ],\n  poster: 'path', // 你的封面地址\n  // width: document.documentElement.clientWidth,\n  // height: this.fileAreaHeight, // 设置高度，fluid需要设置成flase\n  // 配置控制栏\n  controlBar: {\n    volumePanel: {\n      inline: false //音量调节是否水平\n    },\n    currentTimeDisplay: true, //当前播放位置\n    timeDivider: false, // 时间分割线\n    durationDisplay: false, // 总时间\n    progressControl: true, // 进度条\n    remainingTimeDisplay: false, // 剩余时间\n    fullscreenToggle: true // 全屏按钮\n  }\n},\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br")])]),a("p",[s._v("##参考文章")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/58b57f9f37c1",target:"_blank",rel:"noopener noreferrer"}},[s._v("【Nuxt】四、vue-video-player使用"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=t.exports}}]);