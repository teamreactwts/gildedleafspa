if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),f={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts("fallback-fksuFd05twLAOuw7vXQ_5.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1664-818aa8f300f96085.js",revision:"818aa8f300f96085"},{url:"/_next/static/chunks/1845-b6c2f85bd96a67d4.js",revision:"b6c2f85bd96a67d4"},{url:"/_next/static/chunks/2501-afd860364b640c3f.js",revision:"afd860364b640c3f"},{url:"/_next/static/chunks/2589-126e21a546697043.js",revision:"126e21a546697043"},{url:"/_next/static/chunks/2910-e44d5a670d382565.js",revision:"e44d5a670d382565"},{url:"/_next/static/chunks/2954-2ee2ed5c6d2d9933.js",revision:"2ee2ed5c6d2d9933"},{url:"/_next/static/chunks/3282-7b67eeb36e3bcbe0.js",revision:"7b67eeb36e3bcbe0"},{url:"/_next/static/chunks/3434.fb61874cd887ff83.js",revision:"fb61874cd887ff83"},{url:"/_next/static/chunks/3678.0baea1b7630f3879.js",revision:"0baea1b7630f3879"},{url:"/_next/static/chunks/3843-ce73281cc85e2935.js",revision:"ce73281cc85e2935"},{url:"/_next/static/chunks/4411-0377c1018195fa51.js",revision:"0377c1018195fa51"},{url:"/_next/static/chunks/4682.4e123df4f27b6399.js",revision:"4e123df4f27b6399"},{url:"/_next/static/chunks/4718.55c673a6a6e24058.js",revision:"55c673a6a6e24058"},{url:"/_next/static/chunks/474-65f5515fee7aba05.js",revision:"65f5515fee7aba05"},{url:"/_next/static/chunks/4938-48c9a35f991a9aa4.js",revision:"48c9a35f991a9aa4"},{url:"/_next/static/chunks/4973-483b7fb6ebf51d72.js",revision:"483b7fb6ebf51d72"},{url:"/_next/static/chunks/5342.0fc3ad50640c771d.js",revision:"0fc3ad50640c771d"},{url:"/_next/static/chunks/537-f2b750b6ccc63286.js",revision:"f2b750b6ccc63286"},{url:"/_next/static/chunks/5491-73d10574a6b29db3.js",revision:"73d10574a6b29db3"},{url:"/_next/static/chunks/566-b02cf0f74364e973.js",revision:"b02cf0f74364e973"},{url:"/_next/static/chunks/5917-86757d8e476a8d9a.js",revision:"86757d8e476a8d9a"},{url:"/_next/static/chunks/5934-41bec1f218a0122e.js",revision:"41bec1f218a0122e"},{url:"/_next/static/chunks/6005-0bac6639dafb334d.js",revision:"0bac6639dafb334d"},{url:"/_next/static/chunks/6749-d17dd9c02b5fc8ea.js",revision:"d17dd9c02b5fc8ea"},{url:"/_next/static/chunks/7116-ecf1fb9bb6e78779.js",revision:"ecf1fb9bb6e78779"},{url:"/_next/static/chunks/75fc9c18-55217e80064ded2b.js",revision:"55217e80064ded2b"},{url:"/_next/static/chunks/8392-16c63b9eb89b4720.js",revision:"16c63b9eb89b4720"},{url:"/_next/static/chunks/8506-c478f6dfa3604b81.js",revision:"c478f6dfa3604b81"},{url:"/_next/static/chunks/9260.15410fb5b1065f29.js",revision:"15410fb5b1065f29"},{url:"/_next/static/chunks/9491-ea030e496221fe26.js",revision:"ea030e496221fe26"},{url:"/_next/static/chunks/ea88be26.43b75960b55a0567.js",revision:"43b75960b55a0567"},{url:"/_next/static/chunks/framework-4ed89e9640adfb9e.js",revision:"4ed89e9640adfb9e"},{url:"/_next/static/chunks/main-4dbb97a58065b94d.js",revision:"4dbb97a58065b94d"},{url:"/_next/static/chunks/pages/404-e4f0273c0a38e849.js",revision:"e4f0273c0a38e849"},{url:"/_next/static/chunks/pages/500-1e973056e30ec8bd.js",revision:"1e973056e30ec8bd"},{url:"/_next/static/chunks/pages/_app-a9b5e30647ea58dd.js",revision:"a9b5e30647ea58dd"},{url:"/_next/static/chunks/pages/_error-12a7be6150ce6d51.js",revision:"12a7be6150ce6d51"},{url:"/_next/static/chunks/pages/_offline-2bb1cae83a3f5c71.js",revision:"2bb1cae83a3f5c71"},{url:"/_next/static/chunks/pages/about-us-1018a715530d5e3f.js",revision:"1018a715530d5e3f"},{url:"/_next/static/chunks/pages/affordability-ec24e03d4c3b163e.js",revision:"ec24e03d4c3b163e"},{url:"/_next/static/chunks/pages/blog-details/%5Bid%5D-89bc081c75e5e603.js",revision:"89bc081c75e5e603"},{url:"/_next/static/chunks/pages/blogs-578db0a9eb71df9d.js",revision:"578db0a9eb71df9d"},{url:"/_next/static/chunks/pages/booking-5dc766953b7a90d6.js",revision:"5dc766953b7a90d6"},{url:"/_next/static/chunks/pages/coming-soon-152192d5c3c697db.js",revision:"152192d5c3c697db"},{url:"/_next/static/chunks/pages/condition-ca2897d9580663d4.js",revision:"ca2897d9580663d4"},{url:"/_next/static/chunks/pages/condition-details/%5Bid%5D-ddca5f75caa95883.js",revision:"ddca5f75caa95883"},{url:"/_next/static/chunks/pages/contact-us-8f3883c75e0462a9.js",revision:"8f3883c75e0462a9"},{url:"/_next/static/chunks/pages/index-4b269d0345dc9609.js",revision:"4b269d0345dc9609"},{url:"/_next/static/chunks/pages/membership-4758e59fe7031c02.js",revision:"4758e59fe7031c02"},{url:"/_next/static/chunks/pages/privacy-policy-f24a459f73e1661b.js",revision:"f24a459f73e1661b"},{url:"/_next/static/chunks/pages/service-details-f66ce1de1d93e086.js",revision:"f66ce1de1d93e086"},{url:"/_next/static/chunks/pages/service-details/%5Bid%5D-06893d936f3630fe.js",revision:"06893d936f3630fe"},{url:"/_next/static/chunks/pages/services-5f3356c6ff0226d2.js",revision:"5f3356c6ff0226d2"},{url:"/_next/static/chunks/pages/terms-of-use-bb28889df297d0d3.js",revision:"bb28889df297d0d3"},{url:"/_next/static/chunks/pages/terms-service-a2981be8bd4f03dc.js",revision:"a2981be8bd4f03dc"},{url:"/_next/static/chunks/pages/wrinkle-finelines-7de750c48f3e41dd.js",revision:"7de750c48f3e41dd"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-069f037d6b4b59f1.js",revision:"069f037d6b4b59f1"},{url:"/_next/static/css/5742916b735c3aa4.css",revision:"5742916b735c3aa4"},{url:"/_next/static/css/7f47b9549bf34fb2.css",revision:"7f47b9549bf34fb2"},{url:"/_next/static/css/8b55c0b4a7033e5a.css",revision:"8b55c0b4a7033e5a"},{url:"/_next/static/fksuFd05twLAOuw7vXQ_5/_buildManifest.js",revision:"203efbccc6ac73ba0a7680d40bcfe80a"},{url:"/_next/static/fksuFd05twLAOuw7vXQ_5/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/_offline",revision:"fksuFd05twLAOuw7vXQ_5"},{url:"/assets/fonts/corbel-demo.html",revision:"e12b317cf74e0697f502cd9fd6cd1b7b"},{url:"/assets/fonts/corbel-webfont.eot",revision:"be0eaa9f3aa52b1e8ca4fc9eeedfb606"},{url:"/assets/fonts/corbel-webfont.svg",revision:"8d7a6499f60e4f462af276b21d063ced"},{url:"/assets/fonts/corbel-webfont.ttf",revision:"4d97026343ee754d81c964b9affaacd6"},{url:"/assets/fonts/corbel-webfont.woff",revision:"b2893732c1bcf56ded072129713fcc83"},{url:"/assets/fonts/corbel-webfont.woff2",revision:"8d6858e40351a6f2778647eb86f811e0"},{url:"/assets/fonts/corbel_bold-demo.html",revision:"4102225006c1bf02a9e8cf6828bb3cc8"},{url:"/assets/fonts/corbel_bold-webfont.eot",revision:"73437dff94669488115ef433d1c04ac7"},{url:"/assets/fonts/corbel_bold-webfont.svg",revision:"28763cedcf5cd6da265016a8fd85051e"},{url:"/assets/fonts/corbel_bold-webfont.ttf",revision:"a69965de4e60235b10304958b2311820"},{url:"/assets/fonts/corbel_bold-webfont.woff",revision:"87c8365b6978413a46300217ee1240db"},{url:"/assets/fonts/corbel_bold-webfont.woff2",revision:"00a7bdf278eb7b2a15021a0ec12568c7"},{url:"/assets/fonts/corbel_bold_italic-demo.html",revision:"62c522459246c731c266c13aebde93e2"},{url:"/assets/fonts/corbel_bold_italic-webfont.eot",revision:"f5a80612c4ec900e5d5d29125ce6e255"},{url:"/assets/fonts/corbel_bold_italic-webfont.svg",revision:"d1d1ecfb8de947b8cac06169714b1840"},{url:"/assets/fonts/corbel_bold_italic-webfont.ttf",revision:"38810c0d5956da44a5b9f6ee79d1b366"},{url:"/assets/fonts/corbel_bold_italic-webfont.woff",revision:"6d657edce82ad68f70e892e8875adc4b"},{url:"/assets/fonts/corbel_bold_italic-webfont.woff2",revision:"4a0115675f9588df3ed971f77770d159"},{url:"/assets/fonts/corbel_italic-demo.html",revision:"faf7c5655e9ed88f3dbd0621f3ce48b9"},{url:"/assets/fonts/corbel_italic-webfont.eot",revision:"d9a93043f85a6302aa42d93d55973cb7"},{url:"/assets/fonts/corbel_italic-webfont.svg",revision:"2b6965a20ca440a36e10d0bd72690463"},{url:"/assets/fonts/corbel_italic-webfont.ttf",revision:"f037a9afa729a774c8f5eb5cee634d7e"},{url:"/assets/fonts/corbel_italic-webfont.woff",revision:"8b9a128f32fb038bf7395c073cbb9c21"},{url:"/assets/fonts/corbel_italic-webfont.woff2",revision:"1d0b38fdf8ff4c1c26361564880df068"},{url:"/assets/fonts/corbelb-demo.html",revision:"eca943339d37bf704c4c49a79454ecf6"},{url:"/assets/fonts/corbelb-webfont.eot",revision:"f2b40577defe99d7aca831d38eed136a"},{url:"/assets/fonts/corbelb-webfont.svg",revision:"ef761ed0628b620f6d4adcf69f61a362"},{url:"/assets/fonts/corbelb-webfont.ttf",revision:"38b6295f927143224de8bde1a188bc67"},{url:"/assets/fonts/corbelb-webfont.woff",revision:"7bf29a143f619fda0a3b897e4cde201b"},{url:"/assets/fonts/corbelb-webfont.woff2",revision:"86cd3e820ee4437393277711a4f06fdf"},{url:"/assets/fonts/corbeli-demo.html",revision:"a5fd1892902a703a77806ff97ccfbffa"},{url:"/assets/fonts/corbeli-webfont.eot",revision:"8622b330d62792abf47ab6d2869082f6"},{url:"/assets/fonts/corbeli-webfont.svg",revision:"5823f93f878837bd3159d7a8f5e0084e"},{url:"/assets/fonts/corbeli-webfont.ttf",revision:"f4c1c787f3dae909e6a911951c371370"},{url:"/assets/fonts/corbeli-webfont.woff",revision:"c426ecb13301450c6754a1fc381fd5e3"},{url:"/assets/fonts/corbeli-webfont.woff2",revision:"1f6ec86a6ef2ce13d6fc1da96efa6d69"},{url:"/assets/fonts/corbelz-demo.html",revision:"e737c0f7943f75ed3ec7b6798fde802e"},{url:"/assets/fonts/corbelz-webfont.eot",revision:"45a82f69fcf2bf1fcb97bdd3690ec708"},{url:"/assets/fonts/corbelz-webfont.svg",revision:"b8cc38cdc0308285c1c18e3ba6ccf05e"},{url:"/assets/fonts/corbelz-webfont.ttf",revision:"f53e125b885524b4f5d618b4b28de6ce"},{url:"/assets/fonts/corbelz-webfont.woff",revision:"3815196014a23d1a0996ad8c3582c916"},{url:"/assets/fonts/corbelz-webfont.woff2",revision:"2f95e6eb3c6e7a413711b162ed55b325"},{url:"/assets/icons/2082.png",revision:"65ada0ff471d1e8183b3b10deb5ec9d1"},{url:"/assets/icons/icon-192x192.png",revision:"ae6f521329304d4806aa5e23db04c71a"},{url:"/assets/icons/icon-256x256.png",revision:"cf43e20b526340564d41f8c16ea74595"},{url:"/assets/icons/icon-384x384.png",revision:"a389bbec381b2590af7cd0cd2b0eb487"},{url:"/assets/icons/icon-512x512.png",revision:"0bfd110606f188a25f48d83f4ea136ea"},{url:"/assets/images/404.svg",revision:"228e4ee9247e1cceb504ad2281f14458"},{url:"/assets/images/Qr_img.png",revision:"aeec37ad9a0c737ee37df0d965db5961"},{url:"/assets/images/about_image1.png",revision:"148925cf095d9f909b754ee3ef0df81e"},{url:"/assets/images/about_image2.png",revision:"5b3992f07554fb4aca80da7580eef567"},{url:"/assets/images/about_image3.png",revision:"ab220263304347303b66319998b73be0"},{url:"/assets/images/about_image4.png",revision:"d82a8111fe6e3d9e54bf337c63bfe021"},{url:"/assets/images/banner-image.png",revision:"6ff121edea49199943107b6f87f42e0a"},{url:"/assets/images/banner_back_logo.png",revision:"d772b3d5de4690ae20f6df5b0c770981"},{url:"/assets/images/banner_shape.png",revision:"452abe02d94e24c6ff5d5b7eea55bdf5"},{url:"/assets/images/banner_vector.png",revision:"5a82286236e70ca99b75c81a26fefd30"},{url:"/assets/images/blogDetailsImg.png",revision:"c6f1ac13dbd962e7a5519f78d7c641d9"},{url:"/assets/images/blogImage.png",revision:"afb3ff5698f706ad4103c9972c705fa7"},{url:"/assets/images/blogImage1.png",revision:"6d2c3c182ff16d56e4b7cab049ff58cd"},{url:"/assets/images/diffIcon1.svg",revision:"f09a4c16702acebc82c06210886ed8fb"},{url:"/assets/images/diffIcon10.svg",revision:"88ebe27fc52705cb9149117f8737b6aa"},{url:"/assets/images/diffIcon11.png",revision:"7d2f9c601340e8f31b97a467bd2a8628"},{url:"/assets/images/diffIcon2.svg",revision:"2e4269da8a29a32cf1caca8eb971d951"},{url:"/assets/images/diffIcon3.svg",revision:"44699c939b151598b5f4ddd5968794fb"},{url:"/assets/images/diffIcon4.svg",revision:"93977a11f25bc8fba0bfc7565cc77167"},{url:"/assets/images/diffIcon5.svg",revision:"7dc4b62652a40500ac3ed2fcd0346f2a"},{url:"/assets/images/diffIcon6.svg",revision:"8100631b9a1af33e6de76d053dfb3296"},{url:"/assets/images/diffIcon7.svg",revision:"636c6a7929c703c654fb0b037234c381"},{url:"/assets/images/diffIcon8.svg",revision:"a71117c13e69129e8da7a4b80ab47138"},{url:"/assets/images/diffIcon9.svg",revision:"459a1ca756ec3b2762d69024dfe6bdce"},{url:"/assets/images/diff_blur.png",revision:"60c32fcd11baea05d0ee0495fec66b7c"},{url:"/assets/images/downloadPhoneImg.png",revision:"81c6d75301c250da1587d41bb450dfaf"},{url:"/assets/images/footerBrandIcon.svg",revision:"28fc68ce65e458c085e619b3e56973cb"},{url:"/assets/images/footerDesing.png",revision:"0f0ce14ab5e5d0bf30d75052f9d93c33"},{url:"/assets/images/inner_wrapper_vector.png",revision:"ec3e9724e06728577778ae7408e91fe8"},{url:"/assets/images/leftArrow.svg",revision:"e4a562d858659ebd36ec64ad29c0f96e"},{url:"/assets/images/logo_img.png",revision:"8164bae33d427ecb48c9e672b7fddd1d"},{url:"/assets/images/modal_femal.png",revision:"910b71edcffcd37cea92735a2cd751ad"},{url:"/assets/images/modalbackground.png",revision:"f73660b550232ca45b5e6a76539fb3fb"},{url:"/assets/images/newsletter_image.png",revision:"439362c610a48d0b44c69e94e59375fb"},{url:"/assets/images/profileIcon.png",revision:"748bd19025920158a6c2e1de52c96eff"},{url:"/assets/images/qrmobile.png",revision:"bbb3d46eee66d7853b629c3fa7aaea60"},{url:"/assets/images/result_img.png",revision:"041cff495fefc96e37eb3a57377d288d"},{url:"/assets/images/rightArrow.svg",revision:"d1af23a99f792bcdba1bd613e3d5ad83"},{url:"/assets/images/slider1.png",revision:"8a440bfb68a288a1bf94108f5cbc0cfa"},{url:"/assets/images/slider2.png",revision:"83ad5c7169a5e3f6e9f4d12bcc3f6b53"},{url:"/assets/images/slider3.png",revision:"a3886c5fbad932e3ac08744241ffc275"},{url:"/assets/images/slider4.png",revision:"0b8599cb057e52fdd839cdf3306f99d8"},{url:"/assets/images/slider5.png",revision:"332e73b8913f1df19c02e2866acf071f"},{url:"/assets/images/story_img.png",revision:"5a3d6f061360f3df645754982bde1131"},{url:"/assets/images/wrong_cross.svg",revision:"d5afbf423c4e76c7c13377649696d4d6"},{url:"/favicon.ico",revision:"61bdcb79ad39021059e812661a4d1424"},{url:"/manifest.json",revision:"37e9309189ad052ba86f4095b53b0dd5"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
