var Skyeng=function(n){var a={};function o(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Skyeng",analyticsCategory:"Skyeng Article",sendPageView:!1,listenedEvents:["click"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendPageView=t.sendEvent=void 0;var a,o=n(0),r=(a=o)&&a.__esModule?a:{default:a};t.sendEvent=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"Click",n=r.default.analyticsCategory+" — "+e+" — "+t;void 0!==window.dataLayer&&r.default.analyticsCategory&&window.dataLayer.push({event:"data_event",data_description:n})},t.sendPageView=function(){void 0!==window.dataLayer&&window.dataLayer.push({event:"Page — View",post_details:{},section:"special",tags:[],title:document.title,url:window.location.pathname})}},function(e,t,n){"use strict";var a,o=n(3),r=(a=o)&&a.__esModule?a:{default:a};e.exports.Special=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}();n(4);var o=d(n(5)),r=d(n(6)),i=d(n(7)),l=d(n(8)),s=n(9),c=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(n(1));function d(e){return e&&e.__esModule?e:{default:e}}o.default.polyfill();var u="skyeng",f={},v=function(e){function n(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return Object.assign(t.params,e),t.saveParams(),i.default&&e.data&&Object.assign(i.default,e.data),t.params.css?t.loadStyles(t.params.css).then(function(){return t.init()}):t.init(),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,r.default),a(n,[{key:"createElements",value:function(){f.main=(0,s.makeElement)("div",""+u),f.titlebar=(0,s.makeElement)("div",u+"__titlebar",{innerHTML:"<div><div></div><div></div><div></div></div>"}),f.body=(0,s.makeElement)("div",u+"__body"),f.pages=(0,s.makeElement)("div",u+"__pages",{textContent:"0/"+i.default.questions.length}),f.messages=(0,s.makeElement)("div",u+"__messages"),f.m=(0,s.makeElement)("div",u+"-msg"),f.mAvatar=(0,s.makeElement)("div",[u+"-msg__avatar",u+"-msg__avatar--logo"],{innerHTML:l.default.logo}),f.mFrom=(0,s.makeElement)("div",u+"-msg__from",{innerHTML:"<span>Skyeng</span>skyeng.ru"}),f.mTo=(0,s.makeElement)("div",u+"-msg__to",{innerHTML:"<span>Вам:</span>user.vc.ru"}),f.mText=(0,s.makeElement)("div",u+"-msg__text",{innerHTML:"Англицизмы наводнили русский деловой язык. Угадайте, что хочет собеседник, и предложите подходящий ответ."}),f.mBtn=(0,s.makeElement)("button",u+"__btn",{textContent:"Далее",data:{click:"continue"}}),f.m.appendChild(f.mAvatar),f.m.appendChild(f.mFrom),f.m.appendChild(f.mTo),f.m.appendChild(f.mText),f.q=(0,s.makeElement)("div",u+"-msg"),f.qAvatar=(0,s.makeElement)("div",u+"-msg__avatar",{innerHTML:l.default.user}),f.qFrom=(0,s.makeElement)("div",u+"-msg__from",{innerHTML:"<span>Олег</span>oleg@basicinclimited.ru"}),f.qTo=(0,s.makeElement)("div",u+"-msg__to",{innerHTML:"<span>Вам:</span>user.vc.ru"}),f.qText=(0,s.makeElement)("div",u+"-msg__text"),f.q.appendChild(f.qAvatar),f.q.appendChild(f.qFrom),f.q.appendChild(f.qTo),f.q.appendChild(f.qText),f.f=(0,s.makeElement)("div",[u+"-msg",u+"-msg--form"]),f.fAvatar=(0,s.makeElement)("div",[u+"-msg__avatar",u+"-msg__avatar--form"],{innerHTML:l.default.user}),f.fTitle=(0,s.makeElement)("div",u+"-msg__title",{textContent:"Выберите ответ:"}),f.fForm=(0,s.makeElement)("div",u+"-msg__form",{innerHTML:'<div class="'+u+'-msg__option" data-click="start">Понятно</div>'}),f.f.appendChild(f.fAvatar),f.f.appendChild(f.fTitle),f.f.appendChild(f.fForm),f.a=(0,s.makeElement)("div",u+"-msg"),f.aAvatar=(0,s.makeElement)("div",u+"-msg__avatar",{innerHTML:l.default.user}),f.aFrom=(0,s.makeElement)("div",u+"-msg__from",{innerHTML:"<span>User:</span>user.vc.ru"}),f.aTo=(0,s.makeElement)("div",u+"-msg__to",{innerHTML:"<span>Кому:</span>oleg@basicinclimited.ru"}),f.aText=(0,s.makeElement)("div",u+"-msg__text"),f.a.appendChild(f.aAvatar),f.a.appendChild(f.aFrom),f.a.appendChild(f.aTo),f.a.appendChild(f.aText),f.result=(0,s.makeElement)("div",u+"-result"),f.rTitle=(0,s.makeElement)("div",u+"-result__title"),f.rText=(0,s.makeElement)("div",u+"-result__text",{textContent:"Угадайте, в какой руке, коллега"}),f.rHands=(0,s.makeElement)("div",u+"-result__hands"),f.rHandL=(0,s.makeElement)("div",null,{innerHTML:l.default.fistL,data:{type:"l",click:"getGift"}}),f.rHandR=(0,s.makeElement)("div",null,{innerHTML:l.default.fistR,data:{type:"r",click:"getGift"}}),f.rBtn=(0,s.makeElement)("button",[u+"__btn",u+"__btn--result"],{textContent:"Мне не терпится",data:{click:"scrollTo"}}),f.rHands.appendChild(f.rHandR),f.rHands.appendChild(f.rHandL),f.result.appendChild(f.rTitle),f.result.appendChild(f.rText),f.result.appendChild(f.rHands),f.main.appendChild(f.titlebar),f.main.appendChild(f.body),f.body.appendChild(f.pages),f.body.appendChild(f.messages),f.messages.appendChild(f.m),f.messages.appendChild(f.f)}},{key:"restart",value:function(){c.sendEvent("Restart"),f.body.appendChild(f.pages),f.mBtn.textContent="Далее",f.mBtn.dataset.click="continue",this.setInitialParams(),this.makeNextQuestion()}},{key:"start",value:function(){c.sendEvent("Start"),this.makeNextQuestion()}},{key:"continue",value:function(){c.sendEvent("Next"),this.activeIndex+=1,this.makeNextQuestion()}},{key:"makeNextQuestion",value:function(){var e=i.default.questions[this.activeIndex];f.pages.textContent=this.activeIndex+1+"/"+i.default.questions.length,(0,s.removeChildren)(f.messages),f.qText.innerHTML=e.text,f.messages.appendChild(f.q),f.messages.appendChild(f.f),n.makeOptions(e.options)}},{key:"answer",value:function(e){c.sendEvent("Answer");var t=i.default.questions[this.activeIndex].options[e.dataset.id];(0,s.removeChildren)(f.messages),f.aText.classList.remove("is-correct"),f.aText.classList.remove("is-incorrect"),f.aText.innerHTML=t.text,f.mText.innerHTML=t.msg,f.messages.appendChild(f.a),f.messages.appendChild(f.m),f.m.contains(f.mBtn)||f.m.appendChild(f.mBtn),t.isCorrect?(this.correctAnswers+=1,f.aText.classList.add("is-correct")):f.aText.classList.add("is-incorrect"),this.activeIndex===i.default.questions.length-1&&(f.mBtn.innerHTML="Результат",f.mBtn.dataset.click="result")}},{key:"result",value:function(){c.sendEvent("Result"),f.body.removeChild(f.pages),(0,s.removeChildren)(f.messages),f.rTitle.innerHTML="Ваш результат<span>"+this.correctAnswers+" из "+i.default.questions.length+"</span>",f.messages.appendChild(f.result)}},{key:"getGift",value:function(e){c.sendEvent("Gift");var t=e.dataset.type||e.parentElement.dataset.type;f.rHands.classList.add("is-opened"),f.rText.innerHTML="Да! Вот промокод на&nbsp;пару бесплатных занятий в&nbsp;Skyeng: <span>VC_MARCH</span>. В&nbsp;конце статьи подробнее.",f.rHandR.innerHTML=l.default.palmR,f.rHandL.innerHTML=l.default.palmL,f.rHandR.dataset.click="",f.rHandL.dataset.click="","l"===t?f.rHandL.classList.add("is-selected"):f.rHandR.classList.add("is-selected"),f.result.appendChild(f.rBtn)}},{key:"scrollTo",value:function(){document.getElementById("skyeng-try-link").scrollIntoView({behavior:"smooth"})}},{key:"setInitialParams",value:function(){this.activeIndex=0,this.correctAnswers=0}},{key:"init",value:function(){this.setInitialParams(),this.createElements(),this.container.appendChild(f.main),c.sendEvent("Init","Show")}}],[{key:"makeOptions",value:function(e){(0,s.removeChildren)(f.fForm),e.forEach(function(e,t){f.fForm.appendChild((0,s.makeElement)("div",u+"-msg__option",{textContent:e.text,data:{id:t,click:"answer"}}))})}}]),n}();t.default=v},function(e,t,n){},function(e,t,n){!function(){"use strict";e.exports={polyfill:function(){var s=window,c=document;if(!("scrollBehavior"in c.documentElement.style&&!0!==s.__forceSmoothScrollPolyfill__)){var e,t=s.HTMLElement||s.Element,i=468,d={scroll:s.scroll||s.scrollTo,scrollBy:s.scrollBy,elementScroll:t.prototype.scroll||f,scrollIntoView:t.prototype.scrollIntoView},u=s.performance&&s.performance.now?s.performance.now.bind(s.performance):Date.now,n=(e=s.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(e)?1:0);s.scroll=s.scrollTo=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?l.call(s,c.body,void 0!==arguments[0].left?~~arguments[0].left:s.scrollX||s.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:s.scrollY||s.pageYOffset):d.scroll.call(s,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:s.scrollX||s.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:s.scrollY||s.pageYOffset))},s.scrollBy=function(){void 0!==arguments[0]&&(a(arguments[0])?d.scrollBy.call(s,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):l.call(s,c.body,~~arguments[0].left+(s.scrollX||s.pageXOffset),~~arguments[0].top+(s.scrollY||s.pageYOffset)))},t.prototype.scroll=t.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==a(arguments[0])){var e=arguments[0].left,t=arguments[0].top;l.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");d.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},t.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):d.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},t.prototype.scrollIntoView=function(){if(!0!==a(arguments[0])){var e=function(e){for(var t,n,a;0==((e=e.parentNode)===c.body)&&!1===(n=o(t=e,"Y")&&r(t,"Y"),a=o(t,"X")&&r(t,"X"),n||a););return e}(this),t=e.getBoundingClientRect(),n=this.getBoundingClientRect();e!==c.body?(l.call(this,e,e.scrollLeft+n.left-t.left,e.scrollTop+n.top-t.top),"fixed"!==s.getComputedStyle(e).position&&s.scrollBy({left:t.left,top:t.top,behavior:"smooth"})):s.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else d.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function f(e,t){this.scrollLeft=e,this.scrollTop=t}function a(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function o(e,t){return"Y"===t?e.clientHeight+n<e.scrollHeight:"X"===t?e.clientWidth+n<e.scrollWidth:void 0}function r(e,t){var n=s.getComputedStyle(e,null)["overflow"+t];return"auto"===n||"scroll"===n}function v(e){var t,n,a,o,r=(u()-e.startTime)/i;o=r=1<r?1:r,t=.5*(1-Math.cos(Math.PI*o)),n=e.startX+(e.x-e.startX)*t,a=e.startY+(e.y-e.startY)*t,e.method.call(e.scrollable,n,a),n===e.x&&a===e.y||s.requestAnimationFrame(v.bind(s,e))}function l(e,t,n){var a,o,r,i,l=u();i=e===c.body?(o=(a=s).scrollX||s.pageXOffset,r=s.scrollY||s.pageYOffset,d.scroll):(o=(a=e).scrollLeft,r=e.scrollTop,f),v({scrollable:a,method:i,startTime:l,startX:o,startY:r,x:t,y:n})}}}}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=function(){function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}}(),r=n(0),i=(a=r)&&a.__esModule?a:{default:a},l=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(n(1));var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.keyCodes={enter:13},this.params={container:document.body},i.default.sendPageView&&l.sendPageView()}return o(e,[{key:"saveParams",value:function(){Object.assign(this.params,i.default),this.container=this.params.container,this.addEventListeners()}},{key:"loadStyles",value:function(a){return new Promise(function(e,t){var n=document.createElement("link");n.rel="stylesheet",n.href=a,n.onload=function(){return e()},n.onerror=function(){return t()},document.body.appendChild(n)})}},{key:"addEventListeners",value:function(){var n=this;this.params.listenedEvents.forEach(function(t){n.container.addEventListener(t,function(e){return n.defaultEventHandler(e,t)})})}},{key:"defaultEventHandler",value:function(e,t){for(var n=e.target,a=void 0;n.parentNode&&n!==e.currentTarget&&(a=n.dataset[t],"click"===t&&"a"===n.tagName.toLowerCase()&&l.sendEvent(n.href),!a);)n=n.parentNode;(a=n.dataset[t])&&this[a]&&this[a](e.target,e)}}]),e}();t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={title:"Skyeng",questions:[{text:"Сможете прислать мудборд?",options:[{text:"Будет готово к флайту.",msg:"Неверно. Вы предложили сдать графические намётки в разгар рекламной кампании."},{text:"Он под NDA, с ума сошли?",msg:"Неверно. Вы засекретили намётки графики, хотя кому они нужны."},{text:"Соберём асап.",msg:"Верно! Ничто не мешает собрать намётки графики как можно скорее.",isCorrect:!0}]},{text:"Боюсь, что героя на нашем билборде обвинят в менспрединге.",options:[{text:"Вряд ли, он всего лишь джуниор.",msg:"Неверно. Вы объяснили низкой квалификацией то, что герой расселся в транспорте. Именно это и означает термин «менспрединг»."},{text:"Заново забрифуем фотографа.",msg:"Верно! Нужно сфотографировать модель в более скромной позе.",isCorrect:!0},{text:"Тогда поработаем с вордингом.",msg:"Неверно. Вы предложили поработать с текстом, хотя мужчина на иллюстрации просто расселся в транспорте. Именно это и означает «менспрединг»."}]},{text:"Подумаем над карпул-бизнесом?",options:[{text:"Можем, шеринг-экономика в моде.",msg:"Верно! Совместное использование частных автомобилей тоже на слуху.",isCorrect:!0},{text:"На рынке и так слишком много клининга.",msg:"Неверно! Вы перепутали уборку с совместным использованием автомобилей."},{text:"Не лезьте в девелопмент, плиз.",msg:"Неверно! Вы отказались от создания сервиса поиска попутчиков, испугавшись какой-то стройки."}]},{text:"В коллективе усиливается моббинг, что с этим делать?",options:[{text:"Прекрасно, пускай бар-хоппят дальше.",msg:"Неверно! В ответ на травлю сотрудника вы предложили коллективу покататься по барам. Звучит хорошо, но это неверный вариант."},{text:"Это мейнстрим, не отвлекайтесь от работы.",msg:"Неверно! Это совсем не мода, лучше отвлечься и разобраться в причинах травли в коллективе."},{text:"Поговорим с лидами отдела.",msg:"Верно! Стоит спросить у ключевых сотрудников, почему кого-то травят.",isCorrect:!0}]}]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={logo:'<svg viewBox="0 0 154.94 43.83"><path d="M1.87 27.85a9.83 9.83 0 0 0 7.41 3.64c2.69 0 5.09-1.29 5.09-3.84 0-5.28-13.54-4.32-13.54-12.1 0-4.37 3.74-6.53 8.59-6.53 2.45 0 7.34 1 7.34 4.37v2.06h-3.03v-1.14c0-1.78-2.59-2.45-4.18-2.45-3.36 0-5.38 1.15-5.38 3.5 0 5.42 13.54 4.18 13.54 12.19 0 4-3.65 6.77-8.45 6.77A11.58 11.58 0 0 1 0 30.1zM23.76 3.89a1 1 0 0 0-1.06-1.06h-2V.04h3.41c2.06 0 2.93.72 2.93 2.78v16h2.5a3.47 3.47 0 0 0 2.74-1.15l6.19-8.06h4l-7 8.83a5.72 5.72 0 0 1-1.82 1.73v.1a4 4 0 0 1 1.49 1.77l4.37 7.83c.43.81.91 1.06 2.21 1.06h1.3v2.83h-2.27c-2.4 0-3.07-.38-4.18-2.4l-4.8-8.64a2.68 2.68 0 0 0-2.49-1.06h-2.25v12.1h-3.27V3.89zM48.63 40.9c2.11 0 3.55-1.73 4.46-3.94l1.44-3.31-8.5-20.11a1.55 1.55 0 0 0-1.68-1.1h-.48V9.61h1.49c2.16 0 2.83.48 3.7 2.64l6.22 15.07c.48 1.2.86 2.59.86 2.59h.1a22.07 22.07 0 0 1 .82-2.59l6-15.07c.82-2.16 1.54-2.64 3.75-2.64h1.49v2.83h-.48a1.52 1.52 0 0 0-1.68 1.1L55.63 38.79c-1.25 3.07-3.7 5-6.91 5a7 7 0 0 1-5.23-2.35l1.54-2.4a5.17 5.17 0 0 0 3.6 1.86zM82.95 8.69c7 0 10.85 5.14 10.85 11.62 0 .72-.15 2.26-.15 2.26h-16.9a7 7 0 0 0 7.34 6.58 11.13 11.13 0 0 0 6.87-2.74l2.54 4.22a14.89 14.89 0 0 1-9.84 3.7c-8.11 0-13.15-5.86-13.15-12.82 0-7.54 5.09-12.82 12.44-12.82zm4.61 9.65c-.1-2.93-2.11-4.94-4.61-4.94a5.87 5.87 0 0 0-6 4.94h10.61zM99.7 15.51a.94.94 0 0 0-1.06-1.06h-1.92V9.27h5.62c2.16 0 3.22 1 3.22 2.74v.72a6.77 6.77 0 0 1-.1 1.06h.1a9.41 9.41 0 0 1 8.64-5.09c5.43 0 8.54 2.83 8.54 9.31v9.55a1 1 0 0 0 1.06 1.06h1.92v5.14h-5.81c-2.3 0-3.26-1-3.26-3.26V19.25c0-3-.77-5-3.84-5a6.71 6.71 0 0 0-6.58 5 10.33 10.33 0 0 0-.48 3.26v11.24h-6V15.51zM138.96 8.69c5.66 0 7.54 3.46 7.54 3.46h.1v-.62c0-1.1.77-2.26 2.69-2.26h5.66v5.18h-1.87a.94.94 0 0 0-1.06 1v16.81c0 8.4-6.53 11.57-12.91 11.57a19.51 19.51 0 0 1-8.69-2.11l1.87-4.8a15.79 15.79 0 0 0 6.77 1.63c3.7 0 6.91-1.58 6.91-6V31.4v-1.3h-.1c-1.44 2.06-3.55 3.17-6.82 3.17-7 0-11-5.67-11-12.39s3.85-12.19 10.91-12.19zm7.15 12.24c0-5.57-2.78-7.06-6.1-7.06-3.7 0-5.71 2.69-5.71 6.82s2.16 7.44 6.1 7.44c2.93.01 5.71-1.68 5.71-7.2z"/></svg>',user:'<svg viewBox="0 0 248.349 248.349"><path d="M9.954 241.305h228.441c3.051 0 5.896-1.246 7.805-3.416 1.659-1.882 2.393-4.27 2.078-6.723-5.357-41.734-31.019-76.511-66.15-95.053-14.849 14.849-35.348 24.046-57.953 24.046s-43.105-9.197-57.953-24.046C31.09 154.65 5.423 189.432.071 231.166c-.315 2.453.424 4.846 2.078 6.723 1.909 2.17 4.754 3.416 7.805 3.416z"/><path d="M72.699 127.09a72.826 72.826 0 0 0 4.166 4.019c12.586 11.259 29.137 18.166 47.309 18.166s34.723-6.913 47.309-18.166a72.838 72.838 0 0 0 4.166-4.019c1.327-1.398 2.622-2.828 3.84-4.329 9.861-12.211 15.8-27.717 15.8-44.6 0-39.216-31.906-71.116-71.116-71.116S53.059 38.95 53.059 78.16c0 16.883 5.939 32.39 15.8 44.6 1.213 1.502 2.507 2.927 3.84 4.33z"/></svg>',fistR:'<svg viewBox="0 0 56 80"><path d="M25.744 79.192c2.389 0 3.981-.808 5.043-1.886.796 1.347 2.388 2.694 5.042 2.694 4.778 0 7.166-2.694 7.166-8.08h1.593c1.061 0 2.123-.27 2.92-.809 2.122-1.347 8.757-6.195 8.492-15.623-.265-8.889-7.166-15.084-7.431-15.084l-10.616-9.428c-.531-2.154-.797-4.579-1.062-6.195h2.92c.796 0 1.592-.808 1.592-1.616V1.616C41.403.808 40.872 0 39.81 0c-1.061 0-1.592.808-1.592 1.616V21.55H7.166V1.616C7.166.808 6.37 0 5.573 0c-.796 0-1.592.808-1.592 1.616v21.549c0 .808.796 1.616 1.592 1.616h3.185c-.265 2.963-1.061 8.08-3.45 10.236C.796 38.787.265 42.828 0 47.138c0 1.347-.265 4.04-.265 7.273 0 5.926.265 13.198.265 13.737.265 2.155 1.592 5.926 6.104 5.926 1.593 0 2.654-.27 3.716-.808.265 1.885 1.858 4.58 6.37 4.31 1.857 0 2.919-.539 3.98-1.078.797 1.347 2.39 2.694 5.574 2.694zm-12.74-6.734v-5.926c0-.808-.795-1.616-1.592-1.616-.796 0-1.592.808-1.592 1.616v1.347s0 .27-.265.27c0 .269-.531 2.423-3.45 2.423-2.655 0-2.92-2.424-2.92-2.963 0-.269-.266-16.7 0-20.471.265-3.771.796-7.003 4.246-9.966 3.716-3.233 4.512-9.967 4.512-12.66h21.763c.266 1.077.531 2.963 1.062 7.003 0 .27.265.808.53 1.078l11.148 9.966s6.104 5.387 6.37 12.93c.265 7.81-5.309 11.851-7.167 12.929-.265.269-.796.269-1.327.269H42.73c.265-.539.53-1.347 1.062-2.424 3.45-6.465 0-14.546 0-14.815-.266-.808-1.328-1.078-2.124-.808s-1.061 1.346-.796 2.155c0 0 2.92 7.003.265 12.12-1.592 3.233-1.592 5.119-1.592 6.465v.809c0 3.501-1.062 4.848-3.981 4.848-2.654 0-2.92-2.694-2.92-3.232V67.07c0-.808-.796-1.617-1.592-1.617s-1.592.809-1.592 1.617v7.003s-.531 2.155-3.716 2.155c-2.654 0-2.92-1.616-3.185-1.886v-7.542c0-.808-.796-1.616-1.592-1.616s-1.593.808-1.593 1.616v5.657c0 .27-.53 2.155-3.45 2.155-2.654-.27-2.92-1.886-2.92-2.155z"/></svg>',fistL:'<svg viewBox="0 0 56 80"><path d="M30.256 79.192c-2.389 0-3.981-.808-5.043-1.886C24.417 78.653 22.825 80 20.171 80c-4.778 0-7.166-2.694-7.166-8.08h-1.593c-1.061 0-2.123-.27-2.92-.809C6.37 69.764-.264 64.916 0 55.488.265 46.6 7.166 40.404 7.431 40.404l10.616-9.428c.531-2.154.797-4.579 1.062-6.195h-2.92c-.796 0-1.592-.808-1.592-1.616V1.616C14.597.808 15.128 0 16.19 0c1.061 0 1.592.808 1.592 1.616V21.55h31.052V1.616C48.834.808 49.63 0 50.426 0c.797 0 1.593.808 1.593 1.616v21.549c0 .808-.796 1.616-1.593 1.616h-3.184c.265 2.963 1.061 8.08 3.45 10.236 4.512 3.77 5.043 7.811 5.308 12.121 0 1.347.265 4.04.265 7.273 0 5.926-.265 13.198-.265 13.737-.265 2.155-1.592 5.926-6.104 5.926-1.593 0-2.654-.27-3.716-.808-.265 1.885-1.858 4.58-6.37 4.31-1.857 0-2.919-.539-3.98-1.078-.797 1.347-2.39 2.694-5.574 2.694zm12.74-6.734v-5.926c0-.808.795-1.616 1.592-1.616.796 0 1.592.808 1.592 1.616v1.347s0 .27.266.27c0 .269.53 2.423 3.45 2.423 2.654 0 2.92-2.424 2.92-2.963 0-.269.265-16.7 0-20.471-.266-3.771-.797-7.003-4.247-9.966-3.716-3.233-4.512-9.967-4.512-12.66H22.294c-.266 1.077-.531 2.963-1.062 7.003 0 .27-.265.808-.53 1.078L9.554 42.559s-6.105 5.387-6.37 12.93c-.266 7.81 5.308 11.851 7.166 12.929.265.269.796.269 1.327.269h1.592c-.265-.539-.53-1.347-1.061-2.424-3.45-6.465 0-14.546 0-14.815.265-.808 1.327-1.078 2.123-.808.796.27 1.061 1.346.796 2.155 0 0-2.92 7.003-.265 12.12 1.592 3.233 1.592 5.119 1.592 6.465v.809c0 3.501 1.062 4.848 3.981 4.848 2.654 0 2.92-2.694 2.92-3.232V67.07c0-.808.796-1.617 1.592-1.617s1.592.809 1.592 1.617v7.003s.531 2.155 3.716 2.155c2.654 0 2.92-1.616 3.185-1.886v-7.542c0-.808.796-1.616 1.592-1.616s1.593.808 1.593 1.616v5.657c0 .27.53 2.155 3.45 2.155 2.654-.27 2.92-1.886 2.92-2.155z"/></svg>',palmR:'<svg viewBox="0 0 59 104"><path d="M29.368 98.208v-.527c.793.527 1.852.79 2.91.79 3.175 0 5.82-2.633 5.82-5.793V64.77c0-1.317.53-2.633 1.588-3.423l.794-.79 7.143 7.109a6.73 6.73 0 0 0 9.525 0C58.206 66.613 59 64.77 59 62.926c0-1.843-.794-3.422-2.117-4.739l-2.645-2.106c-2.382-2.37-3.44-5.53-4.233-9.479-2.91-12.637-8.732-16.85-12.965-18.167V22.38h2.382c1.852 0 3.439-1.317 3.439-3.16V1.58C42.596.79 42.067 0 41.009 0s-1.587.79-1.587 1.58l-.265 17.64H5.82V1.58C6.085.79 5.29 0 4.498 0 3.704 0 2.91.79 2.91 1.58v17.64c0 1.58 1.588 3.16 3.44 3.16h2.116v6.582c-1.323.527-2.645 1.58-3.704 2.633C-.265 36.597 0 45.023 0 48.972v33.175c0 3.16 2.646 5.792 5.82 5.792 1.059 0 2.117-.263 2.91-.79v3.95c0 3.16 2.647 5.792 5.822 5.792 1.058 0 2.116-.263 2.91-.79v2.37c0 3.159 2.646 5.792 5.82 5.792 3.175 0 6.086-2.896 6.086-6.055zm-8.731 0V62.663c0-.79-.794-1.58-1.588-1.58-.793 0-1.587.79-1.587 1.58v28.172c0 1.58-1.323 2.897-2.91 2.897-1.588 0-2.91-1.317-2.91-2.897v-8.688-22.643c0-.79-.794-1.58-1.588-1.58s-1.588.79-1.588 1.58V81.62c0 1.58-1.323 2.896-2.91 2.896-1.587 0-2.91-1.316-2.91-2.896V49.762v-1.053c0-3.686-.265-11.058 3.968-15.271 1.852-2.106 4.763-2.896 8.202-2.896.794 0 1.588-.79 1.588-1.58s-.794-1.58-1.588-1.58c-1.323 0-2.646.264-3.704.264V22.38H34.13v5.266H32.543c-.794 0-1.323.79-1.323 1.58s.794 1.316 1.587 1.316c.53 0 10.054-1.053 14.023 16.587 1.058 4.476 2.116 8.162 5.291 11.058l2.646 2.107c.793.79 1.058 1.58 1.058 2.633s-.265 1.843-1.058 2.633c-1.323 1.316-3.704 1.316-5.292 0L38.892 54.764c-.529-.527-1.587-.527-2.116 0-.53.526-.53 1.58 0 2.106l1.323 1.316-.794.79c-1.323 1.843-2.117 3.686-2.117 5.793v27.645c0 1.58-1.323 2.896-2.91 2.896-1.587 0-2.91-1.316-2.91-2.896V62.663c0-.79-.794-1.58-1.588-1.58s-1.587.79-1.587 1.58v35.545c0 1.58-1.323 2.896-2.91 2.896-1.588 0-2.646-1.317-2.646-2.896z"/></svg>',palmL:'<svg viewBox="0 0 59 104"><path d="M29.632 98.208v-.527c-.793.527-1.852.79-2.91.79-3.175 0-5.82-2.633-5.82-5.793V64.77c0-1.317-.53-2.633-1.588-3.423l-.794-.79-7.143 7.109a6.73 6.73 0 0 1-9.525 0C.794 66.613 0 64.77 0 62.926c0-1.843.794-3.422 2.117-4.739l2.645-2.106c2.382-2.37 3.44-5.53 4.234-9.479 2.91-12.637 8.73-16.85 12.964-18.167V22.38h-2.382c-1.851 0-3.439-1.317-3.439-3.16V1.58C16.404.79 16.933 0 17.991 0s1.587.79 1.587 1.58l.265 17.64H53.18V1.58C52.915.79 53.71 0 54.502 0c.794 0 1.588.79 1.588 1.58v17.64c0 1.58-1.588 3.16-3.44 3.16h-2.116v6.582c1.322.527 2.645 1.58 3.704 2.633C59.265 36.597 59 45.023 59 48.972v33.175c0 3.16-2.646 5.792-5.82 5.792-1.059 0-2.117-.263-2.91-.79v3.95c0 3.16-2.647 5.792-5.822 5.792-1.058 0-2.116-.263-2.91-.79v2.37c0 3.159-2.646 5.792-5.82 5.792-3.175 0-6.086-2.896-6.086-6.055zm8.731 0V62.663c0-.79.794-1.58 1.588-1.58.793 0 1.587.79 1.587 1.58v28.172c0 1.58 1.323 2.897 2.91 2.897 1.588 0 2.91-1.317 2.91-2.897v-8.688-22.643c0-.79.795-1.58 1.588-1.58.794 0 1.588.79 1.588 1.58V81.62c0 1.58 1.322 2.896 2.91 2.896 1.587 0 2.91-1.316 2.91-2.896V49.762v-1.053c0-3.686.265-11.058-3.968-15.271-1.852-2.106-4.763-2.896-8.202-2.896-.794 0-1.588-.79-1.588-1.58s.794-1.58 1.588-1.58c1.323 0 2.646.264 3.704.264V22.38H24.87v5.266H26.457c.794 0 1.323.79 1.323 1.58s-.794 1.316-1.587 1.316c-.53 0-10.054-1.053-14.023 16.587-1.058 4.476-2.116 8.162-5.291 11.058l-2.646 2.107c-.794.79-1.058 1.58-1.058 2.633s.264 1.843 1.058 2.633c1.323 1.316 3.704 1.316 5.292 0l10.583-10.795c.529-.527 1.587-.527 2.116 0 .53.526.53 1.58 0 2.106l-1.323 1.316.794.79c1.323 1.843 2.117 3.686 2.117 5.793v27.645c0 1.58 1.322 2.896 2.91 2.896 1.587 0 2.91-1.316 2.91-2.896V62.663c0-.79.794-1.58 1.588-1.58s1.587.79 1.587 1.58v35.545c0 1.58 1.323 2.896 2.91 2.896 1.588 0 2.646-1.317 2.646-2.896z"/></svg>'}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.makeElement=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[];e=e.toLowerCase();var a=document.createElement(e);for(var o in t&&("object"===(void 0===t?"undefined":l(t))?t.forEach(function(e){a.classList.add(e)}):"string"==typeof t&&a.classList.add(t)),n)if("data"===o){var r=n[o];for(var i in r)a.dataset[i]=r[i]}else a[o]=n[o];return a},t.cacheElements=function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"view",a={},t=document.querySelectorAll("[data-"+n+"]");Array.prototype.forEach.call(t,function(e){var t=e.dataset[n];a[t]=e}),Object.assign(e,a)},t.getSiblings=function(e){for(var t=[],n=e.parentNode.firstChild;n;n=n.nextSibling)1===n.nodeType&&n!==e&&t.push(n);return t},t.removeChildren=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},t.removeElement=function(e){e&&e.parentNode.removeChild(e)},t.htmlStringToNode=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstChild},t.prepend=function(e,t){e.insertBefore(t,e.firstChild)},t.isElementInDom=function(e){return e.parentNode}}]);
//# sourceMappingURL=all.js.map