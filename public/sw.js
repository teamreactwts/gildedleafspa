if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),f={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts("fallback-ogKJCRU6hyvocA6Y5nYt9.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1664-818aa8f300f96085.js",revision:"818aa8f300f96085"},{url:"/_next/static/chunks/1845-9930c80422fc8129.js",revision:"9930c80422fc8129"},{url:"/_next/static/chunks/2070-a6c5aec5d855fb3b.js",revision:"a6c5aec5d855fb3b"},{url:"/_next/static/chunks/2501-afd860364b640c3f.js",revision:"afd860364b640c3f"},{url:"/_next/static/chunks/2589-b94206f7d259eb45.js",revision:"b94206f7d259eb45"},{url:"/_next/static/chunks/2910-e44d5a670d382565.js",revision:"e44d5a670d382565"},{url:"/_next/static/chunks/2954-860e3cd17cf4cdd0.js",revision:"860e3cd17cf4cdd0"},{url:"/_next/static/chunks/3282-e217f6df21f4d8cf.js",revision:"e217f6df21f4d8cf"},{url:"/_next/static/chunks/3434.fb61874cd887ff83.js",revision:"fb61874cd887ff83"},{url:"/_next/static/chunks/3678.0baea1b7630f3879.js",revision:"0baea1b7630f3879"},{url:"/_next/static/chunks/4682.4e123df4f27b6399.js",revision:"4e123df4f27b6399"},{url:"/_next/static/chunks/4718.55c673a6a6e24058.js",revision:"55c673a6a6e24058"},{url:"/_next/static/chunks/474-65f5515fee7aba05.js",revision:"65f5515fee7aba05"},{url:"/_next/static/chunks/4938-48c9a35f991a9aa4.js",revision:"48c9a35f991a9aa4"},{url:"/_next/static/chunks/4973-483b7fb6ebf51d72.js",revision:"483b7fb6ebf51d72"},{url:"/_next/static/chunks/5342.0fc3ad50640c771d.js",revision:"0fc3ad50640c771d"},{url:"/_next/static/chunks/537-00713b9e5da02aab.js",revision:"00713b9e5da02aab"},{url:"/_next/static/chunks/5491-73d10574a6b29db3.js",revision:"73d10574a6b29db3"},{url:"/_next/static/chunks/566-b02cf0f74364e973.js",revision:"b02cf0f74364e973"},{url:"/_next/static/chunks/5917-86757d8e476a8d9a.js",revision:"86757d8e476a8d9a"},{url:"/_next/static/chunks/659-43025aa8f4ed2b88.js",revision:"43025aa8f4ed2b88"},{url:"/_next/static/chunks/6749-d17dd9c02b5fc8ea.js",revision:"d17dd9c02b5fc8ea"},{url:"/_next/static/chunks/6997-6118694be1366e55.js",revision:"6118694be1366e55"},{url:"/_next/static/chunks/7428-73b1c429a2481b61.js",revision:"73b1c429a2481b61"},{url:"/_next/static/chunks/75fc9c18-55217e80064ded2b.js",revision:"55217e80064ded2b"},{url:"/_next/static/chunks/8392-16c63b9eb89b4720.js",revision:"16c63b9eb89b4720"},{url:"/_next/static/chunks/8506-b9fc2446e9097075.js",revision:"b9fc2446e9097075"},{url:"/_next/static/chunks/9260.15410fb5b1065f29.js",revision:"15410fb5b1065f29"},{url:"/_next/static/chunks/9491-ea030e496221fe26.js",revision:"ea030e496221fe26"},{url:"/_next/static/chunks/9708-f083711d493693a1.js",revision:"f083711d493693a1"},{url:"/_next/static/chunks/ea88be26.43b75960b55a0567.js",revision:"43b75960b55a0567"},{url:"/_next/static/chunks/framework-4ed89e9640adfb9e.js",revision:"4ed89e9640adfb9e"},{url:"/_next/static/chunks/main-4dbb97a58065b94d.js",revision:"4dbb97a58065b94d"},{url:"/_next/static/chunks/pages/404-a3bf77b84060303d.js",revision:"a3bf77b84060303d"},{url:"/_next/static/chunks/pages/500-dfa3e073ec676a2c.js",revision:"dfa3e073ec676a2c"},{url:"/_next/static/chunks/pages/_app-a9b5e30647ea58dd.js",revision:"a9b5e30647ea58dd"},{url:"/_next/static/chunks/pages/_error-12a7be6150ce6d51.js",revision:"12a7be6150ce6d51"},{url:"/_next/static/chunks/pages/_offline-3e3e6e9116b1d31d.js",revision:"3e3e6e9116b1d31d"},{url:"/_next/static/chunks/pages/about-us-c2d040634f886329.js",revision:"c2d040634f886329"},{url:"/_next/static/chunks/pages/affordability-6bf645272ee52686.js",revision:"6bf645272ee52686"},{url:"/_next/static/chunks/pages/blog-details/%5Bid%5D-b0350ac7f3275f41.js",revision:"b0350ac7f3275f41"},{url:"/_next/static/chunks/pages/blogs-04a6b481eee52077.js",revision:"04a6b481eee52077"},{url:"/_next/static/chunks/pages/booking-6bf0a02ccd98a1b7.js",revision:"6bf0a02ccd98a1b7"},{url:"/_next/static/chunks/pages/coming-soon-e819e94cbf080548.js",revision:"e819e94cbf080548"},{url:"/_next/static/chunks/pages/condition-13c20fb24695bb89.js",revision:"13c20fb24695bb89"},{url:"/_next/static/chunks/pages/condition-details/%5Bid%5D-7776d218fdf39591.js",revision:"7776d218fdf39591"},{url:"/_next/static/chunks/pages/contact-us-5b57aaf77cd8f0ec.js",revision:"5b57aaf77cd8f0ec"},{url:"/_next/static/chunks/pages/index-98f053aa38825378.js",revision:"98f053aa38825378"},{url:"/_next/static/chunks/pages/membership-c547bc018908be14.js",revision:"c547bc018908be14"},{url:"/_next/static/chunks/pages/privacy-policy-02445a773ec4c73d.js",revision:"02445a773ec4c73d"},{url:"/_next/static/chunks/pages/service-details-18e0a32ccf2d7231.js",revision:"18e0a32ccf2d7231"},{url:"/_next/static/chunks/pages/service-details/%5Bid%5D-4571a4ad8e1c889f.js",revision:"4571a4ad8e1c889f"},{url:"/_next/static/chunks/pages/services-5f7202f2bc847a22.js",revision:"5f7202f2bc847a22"},{url:"/_next/static/chunks/pages/terms-of-use-d452d23d9ee18b93.js",revision:"d452d23d9ee18b93"},{url:"/_next/static/chunks/pages/terms-service-b73596b188710ae7.js",revision:"b73596b188710ae7"},{url:"/_next/static/chunks/pages/wrinkle-finelines-023f3552e706ed3c.js",revision:"023f3552e706ed3c"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8c4d3baf23933de7.js",revision:"8c4d3baf23933de7"},{url:"/_next/static/css/7f47b9549bf34fb2.css",revision:"7f47b9549bf34fb2"},{url:"/_next/static/css/8b55c0b4a7033e5a.css",revision:"8b55c0b4a7033e5a"},{url:"/_next/static/css/91ed946be155e2b0.css",revision:"91ed946be155e2b0"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/_next/static/ogKJCRU6hyvocA6Y5nYt9/_buildManifest.js",revision:"c3c43c49b8605e2c4c7bfe8f1d99c584"},{url:"/_next/static/ogKJCRU6hyvocA6Y5nYt9/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_offline",revision:"ogKJCRU6hyvocA6Y5nYt9"},{url:"/assets/fonts/corbel-demo.html",revision:"6a090231c4b1e3981922b641496f5157"},{url:"/assets/fonts/corbel-webfont.eot",revision:"be0eaa9f3aa52b1e8ca4fc9eeedfb606"},{url:"/assets/fonts/corbel-webfont.svg",revision:"540fd7ca2101fb96f92c8569d058a2e7"},{url:"/assets/fonts/corbel-webfont.ttf",revision:"4d97026343ee754d81c964b9affaacd6"},{url:"/assets/fonts/corbel-webfont.woff",revision:"b2893732c1bcf56ded072129713fcc83"},{url:"/assets/fonts/corbel-webfont.woff2",revision:"8d6858e40351a6f2778647eb86f811e0"},{url:"/assets/fonts/corbel_bold-demo.html",revision:"859d42086b441cd4c638432d1fdecea0"},{url:"/assets/fonts/corbel_bold-webfont.eot",revision:"73437dff94669488115ef433d1c04ac7"},{url:"/assets/fonts/corbel_bold-webfont.svg",revision:"bb79d9a6604057e612f9ce6da7fb7038"},{url:"/assets/fonts/corbel_bold-webfont.ttf",revision:"a69965de4e60235b10304958b2311820"},{url:"/assets/fonts/corbel_bold-webfont.woff",revision:"87c8365b6978413a46300217ee1240db"},{url:"/assets/fonts/corbel_bold-webfont.woff2",revision:"00a7bdf278eb7b2a15021a0ec12568c7"},{url:"/assets/fonts/corbel_bold_italic-demo.html",revision:"9b67aad8d30a39366a92ca6a4935352d"},{url:"/assets/fonts/corbel_bold_italic-webfont.eot",revision:"f5a80612c4ec900e5d5d29125ce6e255"},{url:"/assets/fonts/corbel_bold_italic-webfont.svg",revision:"b60bfb8965bbf02333fe1567dfcf65eb"},{url:"/assets/fonts/corbel_bold_italic-webfont.ttf",revision:"38810c0d5956da44a5b9f6ee79d1b366"},{url:"/assets/fonts/corbel_bold_italic-webfont.woff",revision:"6d657edce82ad68f70e892e8875adc4b"},{url:"/assets/fonts/corbel_bold_italic-webfont.woff2",revision:"4a0115675f9588df3ed971f77770d159"},{url:"/assets/fonts/corbel_italic-demo.html",revision:"5f69ce8d4286ecebe4d5c70f2832ab56"},{url:"/assets/fonts/corbel_italic-webfont.eot",revision:"d9a93043f85a6302aa42d93d55973cb7"},{url:"/assets/fonts/corbel_italic-webfont.svg",revision:"6c18c5c134744862aaae86e8ac7397f2"},{url:"/assets/fonts/corbel_italic-webfont.ttf",revision:"f037a9afa729a774c8f5eb5cee634d7e"},{url:"/assets/fonts/corbel_italic-webfont.woff",revision:"8b9a128f32fb038bf7395c073cbb9c21"},{url:"/assets/fonts/corbel_italic-webfont.woff2",revision:"1d0b38fdf8ff4c1c26361564880df068"},{url:"/assets/fonts/corbelb-demo.html",revision:"b4cb1ff65a4607da1dc782d94de18ad6"},{url:"/assets/fonts/corbelb-webfont.eot",revision:"f2b40577defe99d7aca831d38eed136a"},{url:"/assets/fonts/corbelb-webfont.svg",revision:"e4fcd08b816412c2ba2d71aa57915bb1"},{url:"/assets/fonts/corbelb-webfont.ttf",revision:"38b6295f927143224de8bde1a188bc67"},{url:"/assets/fonts/corbelb-webfont.woff",revision:"7bf29a143f619fda0a3b897e4cde201b"},{url:"/assets/fonts/corbelb-webfont.woff2",revision:"86cd3e820ee4437393277711a4f06fdf"},{url:"/assets/fonts/corbeli-demo.html",revision:"588af3a06bd81ec63c2394439d540407"},{url:"/assets/fonts/corbeli-webfont.eot",revision:"8622b330d62792abf47ab6d2869082f6"},{url:"/assets/fonts/corbeli-webfont.svg",revision:"24967c2957316012f92cbb1d0bb8ec52"},{url:"/assets/fonts/corbeli-webfont.ttf",revision:"f4c1c787f3dae909e6a911951c371370"},{url:"/assets/fonts/corbeli-webfont.woff",revision:"c426ecb13301450c6754a1fc381fd5e3"},{url:"/assets/fonts/corbeli-webfont.woff2",revision:"1f6ec86a6ef2ce13d6fc1da96efa6d69"},{url:"/assets/fonts/corbelz-demo.html",revision:"c107315e5cb65179696f8a10083d33fa"},{url:"/assets/fonts/corbelz-webfont.eot",revision:"45a82f69fcf2bf1fcb97bdd3690ec708"},{url:"/assets/fonts/corbelz-webfont.svg",revision:"9b80f8989208b9bcc9d9299ae84f0f0e"},{url:"/assets/fonts/corbelz-webfont.ttf",revision:"f53e125b885524b4f5d618b4b28de6ce"},{url:"/assets/fonts/corbelz-webfont.woff",revision:"3815196014a23d1a0996ad8c3582c916"},{url:"/assets/fonts/corbelz-webfont.woff2",revision:"2f95e6eb3c6e7a413711b162ed55b325"},{url:"/assets/icons/2082.png",revision:"65ada0ff471d1e8183b3b10deb5ec9d1"},{url:"/assets/icons/icon-192x192.png",revision:"ae6f521329304d4806aa5e23db04c71a"},{url:"/assets/icons/icon-256x256.png",revision:"cf43e20b526340564d41f8c16ea74595"},{url:"/assets/icons/icon-384x384.png",revision:"a389bbec381b2590af7cd0cd2b0eb487"},{url:"/assets/icons/icon-512x512.png",revision:"0bfd110606f188a25f48d83f4ea136ea"},{url:"/assets/images/404.svg",revision:"228e4ee9247e1cceb504ad2281f14458"},{url:"/assets/images/Qr_img.png",revision:"aeec37ad9a0c737ee37df0d965db5961"},{url:"/assets/images/about_image1.png",revision:"148925cf095d9f909b754ee3ef0df81e"},{url:"/assets/images/about_image2.png",revision:"5b3992f07554fb4aca80da7580eef567"},{url:"/assets/images/about_image3.png",revision:"ab220263304347303b66319998b73be0"},{url:"/assets/images/about_image4.png",revision:"d82a8111fe6e3d9e54bf337c63bfe021"},{url:"/assets/images/banner-image.png",revision:"6ff121edea49199943107b6f87f42e0a"},{url:"/assets/images/banner_back_logo.png",revision:"d772b3d5de4690ae20f6df5b0c770981"},{url:"/assets/images/banner_shape.png",revision:"452abe02d94e24c6ff5d5b7eea55bdf5"},{url:"/assets/images/banner_vector.png",revision:"5a82286236e70ca99b75c81a26fefd30"},{url:"/assets/images/blogDetailsImg.png",revision:"c6f1ac13dbd962e7a5519f78d7c641d9"},{url:"/assets/images/blogImage.png",revision:"afb3ff5698f706ad4103c9972c705fa7"},{url:"/assets/images/blogImage1.png",revision:"6d2c3c182ff16d56e4b7cab049ff58cd"},{url:"/assets/images/diffIcon1.svg",revision:"05275cf0f51f0bace8571cbd2a3d9167"},{url:"/assets/images/diffIcon10.svg",revision:"7a1908d094b626dfe0b13961e2242d9a"},{url:"/assets/images/diffIcon11.png",revision:"7d2f9c601340e8f31b97a467bd2a8628"},{url:"/assets/images/diffIcon2.svg",revision:"c477a8c0681ffb447036abfed82c311d"},{url:"/assets/images/diffIcon3.svg",revision:"6b56de4e013eebcb618f4d5d8e6bc32d"},{url:"/assets/images/diffIcon4.svg",revision:"ceb19546096007ec354e7692dc13fb7f"},{url:"/assets/images/diffIcon5.svg",revision:"b29bb18df24c0441148bc8cf4e0a5038"},{url:"/assets/images/diffIcon6.svg",revision:"7f6e2427f2427120398852f07570a642"},{url:"/assets/images/diffIcon7.svg",revision:"4db5b1cd0b31d0e9cc7f975808102fbb"},{url:"/assets/images/diffIcon8.svg",revision:"38907100115db397bee2593f258916dd"},{url:"/assets/images/diffIcon9.svg",revision:"4f41ea6886ee58b82cc31bc1b2d16a7e"},{url:"/assets/images/diff_blur.png",revision:"60c32fcd11baea05d0ee0495fec66b7c"},{url:"/assets/images/downloadPhoneImg.png",revision:"81c6d75301c250da1587d41bb450dfaf"},{url:"/assets/images/footerBrandIcon.svg",revision:"04e3087b712aa8afd13968ccb91575f7"},{url:"/assets/images/footerDesing.png",revision:"0f0ce14ab5e5d0bf30d75052f9d93c33"},{url:"/assets/images/inner_wrapper_vector.png",revision:"ec3e9724e06728577778ae7408e91fe8"},{url:"/assets/images/leftArrow.svg",revision:"5e8a05d10b7c9c0e10108cdc43512866"},{url:"/assets/images/logo_img.png",revision:"8164bae33d427ecb48c9e672b7fddd1d"},{url:"/assets/images/modal_femal.png",revision:"910b71edcffcd37cea92735a2cd751ad"},{url:"/assets/images/modalbackground.png",revision:"f73660b550232ca45b5e6a76539fb3fb"},{url:"/assets/images/newsletter_image.png",revision:"439362c610a48d0b44c69e94e59375fb"},{url:"/assets/images/profileIcon.png",revision:"748bd19025920158a6c2e1de52c96eff"},{url:"/assets/images/qrmobile.png",revision:"bbb3d46eee66d7853b629c3fa7aaea60"},{url:"/assets/images/result_img.png",revision:"041cff495fefc96e37eb3a57377d288d"},{url:"/assets/images/rightArrow.svg",revision:"128948493647b9c94d61481a3a17f7ee"},{url:"/assets/images/slider1.png",revision:"8a440bfb68a288a1bf94108f5cbc0cfa"},{url:"/assets/images/slider2.png",revision:"83ad5c7169a5e3f6e9f4d12bcc3f6b53"},{url:"/assets/images/slider3.png",revision:"a3886c5fbad932e3ac08744241ffc275"},{url:"/assets/images/slider4.png",revision:"0b8599cb057e52fdd839cdf3306f99d8"},{url:"/assets/images/slider5.png",revision:"332e73b8913f1df19c02e2866acf071f"},{url:"/assets/images/story_img.png",revision:"5a3d6f061360f3df645754982bde1131"},{url:"/assets/images/wrong_cross.svg",revision:"a2d9824271fcd53f764d09913f366d06"},{url:"/favicon.ico",revision:"61bdcb79ad39021059e812661a4d1424"},{url:"/manifest.json",revision:"58ca874cbbac0e52a126e441873c30ce"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
