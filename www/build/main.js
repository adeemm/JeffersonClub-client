webpackJsonp([7],{108:function(e,t){function n(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=108},120:function(e,t,n){function o(e){var t=i[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var i={"../pages/about/about.module.ngfactory":[162,4],"../pages/events/events.module.ngfactory":[163,0],"../pages/home/home.module.ngfactory":[164,3],"../pages/login/login.module.ngfactory":[165,6],"../pages/service/service.module.ngfactory":[166,1],"../pages/timeline/timeline.module.ngfactory":[167,2],"../pages/welcome/welcome.module.ngfactory":[168,5]};o.keys=function(){return Object.keys(i)},o.id=120,e.exports=o},131:function(e,t,n){"use strict";function o(e){return _._34(0,[(e()(),_._10(0,null,null,10,"button",[["class","item item-block"],["detail-none",""],["ion-item",""],["menuClose",""]],[[2,"activePageHighlight",null]],[[null,"click"]],function(e,t,n){var o=!0,i=e.component;return"click"===t&&(o=!1!==_._23(e,6).close()&&o),"click"===t&&(o=!1!==i.openPage(e.context.$implicit)&&o),o},B.b,B.a)),_._9(1097728,null,3,G.a,[A.a,z.a,_.l,_.J,[2,U.a]],null,null),_._30(335544320,4,{contentLabel:0}),_._30(603979776,5,{_buttons:1}),_._30(603979776,6,{_icons:1}),_._9(16384,null,0,X.a,[],null,null),_._9(16384,null,0,K.a,[m.a],{menuClose:[0,"menuClose"]},null),(e()(),_._32(2,["\n        "])),(e()(),_._10(0,null,0,1,"ion-icon",[["item-left",""],["role","img"]],[[2,"hide",null]],null,null,null,null)),_._9(147456,[[6,4]],0,V.a,[z.a,_.l,_.J],{name:[0,"name"]},null),(e()(),_._32(2,["\n        ","\n      "]))],function(e,t){e(t,6,0,""),e(t,9,0,t.context.$implicit.icon)},function(e,t){e(t,0,0,t.component.checkActive(t.context.$implicit)),e(t,8,0,_._23(t,9)._hidden),e(t,10,0,t.context.$implicit.title)})}function i(e){return _._34(0,[_._30(402653184,1,{nav:0}),(e()(),_._10(0,null,null,16,"ion-menu",[["id","mainSlideMenu"],["role","navigation"]],null,null,null,x.b,x.a)),_._9(245760,null,2,q.a,[m.a,_.l,z.a,J.a,_.J,R.a,y.h,d.a,b.a],{content:[0,"content"],id:[1,"id"]},null),_._30(335544320,2,{menuContent:0}),_._30(335544320,3,{menuNav:0}),_._29(6144,null,$.a,null,[q.a]),(e()(),_._32(0,["\n  "])),(e()(),_._10(0,null,0,9,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,W.b,W.a)),_._9(4374528,[[2,4]],0,Z.a,[z.a,J.a,d.a,_.l,_.J,b.a,R.a,_.C,[2,Q.a],[2,Y.a]],null,null),(e()(),_._32(1,["\n    "])),(e()(),_._10(0,null,1,5,"ion-list",[["no-lines",""]],null,null,null,null,null)),_._9(16384,null,0,ee.a,[z.a,_.l,_.J,J.a,y.h,d.a],null,null),(e()(),_._32(null,["\n      "])),(e()(),_._6(16777216,null,null,1,null,o)),_._9(802816,null,0,g.h,[_.U,_.Q,_.v],{ngForOf:[0,"ngForOf"]},null),(e()(),_._32(null,["\n    "])),(e()(),_._32(1,["\n  "])),(e()(),_._32(0,["\n"])),(e()(),_._32(null,["\n\n"])),(e()(),_._32(null,["\n"])),(e()(),_._10(0,null,null,2,"ion-nav",[["swipeBackEnabled","false"]],null,null,null,te.b,te.a)),_._9(4374528,[[1,4],["content",4]],0,ne.a,[[2,Q.a],[2,Y.a],b.a,z.a,J.a,_.l,_.C,_.J,_.k,y.h,D.a,[2,oe.a],d.a,_.m],{swipeBackEnabled:[0,"swipeBackEnabled"],root:[1,"root"]},null),_._29(6144,null,$.a,null,[ne.a]),(e()(),_._32(null,["\n"]))],function(e,t){var n=t.component;e(t,2,0,_._23(t,21),"mainSlideMenu"),e(t,14,0,n.pages);e(t,21,0,"false",n.rootPage)},function(e,t){e(t,7,0,_._23(t,8).statusbarPadding,_._23(t,8)._hasRefresher)})}Object.defineProperty(t,"__esModule",{value:!0});var r=n(20),_=n(0),l=(n(59),n(34)),s=n(43),a=n(57),u=n(58),h=n(45),c=function(){function e(e,t,n,o,i,r,_){this.platform=e,this.statusBar=t,this.splashScreen=n,this.menu=o,this.service=i,this.nativeStorage=r,this.http=_,this.rootPage="LoginPage",this.initializeApp(),this.pages=[{title:"Announcements",component:"HomePage",icon:"md-notifications"},{title:"Events",component:"EventsPage",icon:"md-calendar"},{title:"Service Timeline",component:"TimelinePage",icon:"md-pin"},{title:"Service Log",component:"ServicePage",icon:"md-time"},{title:"About",component:"AboutPage",icon:"md-information-circle"},{title:"Logout",component:"LoginPage",icon:"md-exit"}],this.activePage=this.pages[0],this.serviceProvider=i}return e.prototype.initializeApp=function(){var e=this;this.platform.ready().then(function(){e.statusBar.styleDefault(),e.menu.swipeEnable(!1,"mainSlideMenu"),e.menu.enable(!1,"mainSlideMenu"),e.nativeStorage.getItem("notFirstRun").then(function(t){t&&e.nativeStorage.getItem("token").then(function(t){e.nativeStorage.getItem("key").then(function(n){e.nativeStorage.getItem("url").then(function(o){e.service.headers=new l.d,e.service.headers.append("Authorization","Bearer "+t+":"+n),e.service.remote=o,e.http.get(e.service.baseUrl+e.service.webPort+"/auth/session",{headers:e.service.headers}).subscribe(function(t){401!=t.status?e.service.getNews().then(function(){e.rootPage="HomePage",e.splashScreen.hide()}):(e.nativeStorage.remove("token"),e.nativeStorage.remove("key"),e.nativeStorage.remove("url"),e.splashScreen.hide())})},function(e){return console.error("Error getting url",e)})},function(e){return console.error("Error getting key",e)})},function(e){return console.error("Error getting token",e)})},function(t){e.nativeStorage.setItem("notFirstRun",!0).then(function(){return console.log("Stored run!")},function(e){return console.error("Error storing run",e)}),e.rootPage="WelcomePage",e.splashScreen.hide()})})},e.prototype.openPage=function(e){"Logout"==e.title?this.logout():(this.nav.setRoot(e.component),this.activePage=e)},e.prototype.logout=function(){this.service.logout(),this.nav.setRoot("LoginPage",{},{animate:!0,direction:"backward"}),this.activePage=this.pages[0]},e.prototype.checkActive=function(e){return e==this.activePage},e}(),p=function(){return function(){}}(),g=n(11),f=n(123),d=n(8),m=n(14),b=n(6),y=n(5),S=n(76),P=n(31),v=n(85),C=n(78),w=n(63),O=n(77),A=n(19),E=n(29),R=n(18),k=n(64),M=n(65),L=n(47),j=n(80),D=n(24),H=n(124),I=n(125),F=n(126),T=n(127),N=n(128),B=n(130),G=n(26),z=n(1),U=n(33),X=n(61),K=n(75),V=n(32),x=n(160),q=n(54),J=n(3),$=n(25),W=n(129),Z=n(22),Q=n(4),Y=n(17),ee=n(62),te=n(161),ne=n(42),oe=n(15),ie=[],re=_._8({encapsulation:2,styles:ie,data:{}}),_e=_._7("ng-component",c,function(e){return _._34(0,[(e()(),_._10(0,null,null,1,"ng-component",[],null,null,null,i,re)),_._9(49152,null,0,c,[J.a,a.a,u.a,m.a,h.a,s.a,l.e],null,null)],null,null)},{},{},[]),le=n(50),se=n(79),ae=n(46),ue=n(81),he=n(36),ce=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),pe=function(e){function t(t){return e.call(this,t,[H.a,I.a,F.a,T.a,N.a,_e],[I.a])||this}return ce(t,e),Object.defineProperty(t.prototype,"_LOCALE_ID_26",{get:function(){return null==this.__LOCALE_ID_26&&(this.__LOCALE_ID_26=_._21(this.parent.get(_.x,null))),this.__LOCALE_ID_26},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NgLocalization_27",{get:function(){return null==this.__NgLocalization_27&&(this.__NgLocalization_27=new g.j(this._LOCALE_ID_26)),this.__NgLocalization_27},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_APP_ID_28",{get:function(){return null==this.__APP_ID_28&&(this.__APP_ID_28=_._12()),this.__APP_ID_28},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_IterableDiffers_29",{get:function(){return null==this.__IterableDiffers_29&&(this.__IterableDiffers_29=_._18()),this.__IterableDiffers_29},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_KeyValueDiffers_30",{get:function(){return null==this.__KeyValueDiffers_30&&(this.__KeyValueDiffers_30=_._20()),this.__KeyValueDiffers_30},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_DomSanitizer_31",{get:function(){return null==this.__DomSanitizer_31&&(this.__DomSanitizer_31=new r.s(this.parent.get(r.b))),this.__DomSanitizer_31},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Sanitizer_32",{get:function(){return null==this.__Sanitizer_32&&(this.__Sanitizer_32=this._DomSanitizer_31),this.__Sanitizer_32},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_HAMMER_GESTURE_CONFIG_33",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_33&&(this.__HAMMER_GESTURE_CONFIG_33=new C.a),this.__HAMMER_GESTURE_CONFIG_33},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EVENT_MANAGER_PLUGINS_34",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_34&&(this.__EVENT_MANAGER_PLUGINS_34=[new r.l(this.parent.get(r.b)),new r.p(this.parent.get(r.b)),new r.o(this.parent.get(r.b),this._HAMMER_GESTURE_CONFIG_33)]),this.__EVENT_MANAGER_PLUGINS_34},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_EventManager_35",{get:function(){return null==this.__EventManager_35&&(this.__EventManager_35=new r.e(this._EVENT_MANAGER_PLUGINS_34,this.parent.get(_.C))),this.__EventManager_35},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomSharedStylesHost_36",{get:function(){return null==this.__ɵDomSharedStylesHost_36&&(this.__ɵDomSharedStylesHost_36=new r.n(this.parent.get(r.b))),this.__ɵDomSharedStylesHost_36},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵDomRendererFactory2_37",{get:function(){return null==this.__ɵDomRendererFactory2_37&&(this.__ɵDomRendererFactory2_37=new r.m(this._EventManager_35,this._ɵDomSharedStylesHost_36)),this.__ɵDomRendererFactory2_37},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RendererFactory2_38",{get:function(){return null==this.__RendererFactory2_38&&(this.__RendererFactory2_38=this._ɵDomRendererFactory2_37),this.__RendererFactory2_38},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵSharedStylesHost_39",{get:function(){return null==this.__ɵSharedStylesHost_39&&(this.__ɵSharedStylesHost_39=this._ɵDomSharedStylesHost_36),this.__ɵSharedStylesHost_39},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Testability_40",{get:function(){return null==this.__Testability_40&&(this.__Testability_40=new _.R(this.parent.get(_.C))),this.__Testability_40},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Meta_41",{get:function(){return null==this.__Meta_41&&(this.__Meta_41=new r.h(this.parent.get(r.b))),this.__Meta_41},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Title_42",{get:function(){return null==this.__Title_42&&(this.__Title_42=new r.j(this.parent.get(r.b))),this.__Title_42},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_BrowserXhr_43",{get:function(){return null==this.__BrowserXhr_43&&(this.__BrowserXhr_43=new l.c),this.__BrowserXhr_43},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ResponseOptions_44",{get:function(){return null==this.__ResponseOptions_44&&(this.__ResponseOptions_44=new l.b),this.__ResponseOptions_44},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_XSRFStrategy_45",{get:function(){return null==this.__XSRFStrategy_45&&(this.__XSRFStrategy_45=l.k()),this.__XSRFStrategy_45},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_XHRBackend_46",{get:function(){return null==this.__XHRBackend_46&&(this.__XHRBackend_46=new l.i(this._BrowserXhr_43,this._ResponseOptions_44,this._XSRFStrategy_45)),this.__XHRBackend_46},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RequestOptions_47",{get:function(){return null==this.__RequestOptions_47&&(this.__RequestOptions_47=new l.a),this.__RequestOptions_47},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Http_48",{get:function(){return null==this.__Http_48&&(this.__Http_48=l.l(this._XHRBackend_46,this._RequestOptions_47)),this.__Http_48},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ɵi_49",{get:function(){return null==this.__ɵi_49&&(this.__ɵi_49=new P.q),this.__ɵi_49},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_FormBuilder_50",{get:function(){return null==this.__FormBuilder_50&&(this.__FormBuilder_50=new P.d),this.__FormBuilder_50},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_AlertController_54",{get:function(){return null==this.__AlertController_54&&(this.__AlertController_54=new w.a(this._App_8,this._Config_5)),this.__AlertController_54},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Events_55",{get:function(){return null==this.__Events_55&&(this.__Events_55=new O.a),this.__Events_55},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Form_56",{get:function(){return null==this.__Form_56&&(this.__Form_56=new A.a),this.__Form_56},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Haptic_57",{get:function(){return null==this.__Haptic_57&&(this.__Haptic_57=new E.a(this._Platform_4)),this.__Haptic_57},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Keyboard_58",{get:function(){return null==this.__Keyboard_58&&(this.__Keyboard_58=new R.a(this._Config_5,this._Platform_4,this.parent.get(_.C),this._DomController_6)),this.__Keyboard_58},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_LoadingController_59",{get:function(){return null==this.__LoadingController_59&&(this.__LoadingController_59=new k.a(this._App_8,this._Config_5)),this.__LoadingController_59},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_LocationStrategy_60",{get:function(){return null==this.__LocationStrategy_60&&(this.__LocationStrategy_60=v.c(this.parent.get(g.r),this._APP_BASE_HREF_52,this._Config_5)),this.__LocationStrategy_60},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Location_61",{get:function(){return null==this.__Location_61&&(this.__Location_61=new g.e(this._LocationStrategy_60)),this.__Location_61},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_UrlSerializer_62",{get:function(){return null==this.__UrlSerializer_62&&(this.__UrlSerializer_62=le.d(this._App_8,this._DeepLinkConfigToken_10)),this.__UrlSerializer_62},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_DeepLinker_63",{get:function(){return null==this.__DeepLinker_63&&(this.__DeepLinker_63=oe.b(this._App_8,this._UrlSerializer_62,this._Location_61,this._ModuleLoader_13,this.componentFactoryResolver)),this.__DeepLinker_63},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ModalController_64",{get:function(){return null==this.__ModalController_64&&(this.__ModalController_64=new M.a(this._App_8,this._Config_5,this._DeepLinker_63)),this.__ModalController_64},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_PickerController_65",{get:function(){return null==this.__PickerController_65&&(this.__PickerController_65=new L.a(this._App_8,this._Config_5)),this.__PickerController_65},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_TapClick_67",{get:function(){return null==this.__TapClick_67&&(this.__TapClick_67=new j.a(this._Config_5,this._Platform_4,this._DomController_6,this._App_8,this._GestureController_9)),this.__TapClick_67},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_TransitionController_69",{get:function(){return null==this.__TransitionController_69&&(this.__TransitionController_69=new D.a(this._Platform_4,this._Config_5)),this.__TransitionController_69},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_StatusBar_70",{get:function(){return null==this.__StatusBar_70&&(this.__StatusBar_70=new a.a),this.__StatusBar_70},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_NativeStorage_71",{get:function(){return null==this.__NativeStorage_71&&(this.__NativeStorage_71=new s.a),this.__NativeStorage_71},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_Service_72",{get:function(){return null==this.__Service_72&&(this.__Service_72=new h.a(this._Http_48,this._AlertController_54,this._NativeStorage_71)),this.__Service_72},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_SplashScreen_73",{get:function(){return null==this.__SplashScreen_73&&(this.__SplashScreen_73=new u.a),this.__SplashScreen_73},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new g.b,this._ErrorHandler_1=new f.a,this._ConfigToken_2=null,this._PlatformConfigToken_3=se.b(),this._Platform_4=J.b(this.parent.get(r.b),this._PlatformConfigToken_3,this.parent.get(_.C)),this._Config_5=z.c(this._ConfigToken_2,this._Platform_4),this._DomController_6=new d.a(this._Platform_4),this._MenuController_7=new m.a,this._App_8=new b.a(this._Config_5,this._Platform_4,this._MenuController_7),this._GestureController_9=new y.h(this._App_8),this._DeepLinkConfigToken_10={links:[{loadChildren:"../pages/about/about.module.ngfactory#AboutPageModuleNgFactory",name:"AboutPage",segment:"about",priority:"low",defaultHistory:[]},{loadChildren:"../pages/events/events.module.ngfactory#EventsPageModuleNgFactory",name:"EventsPage",segment:"events",priority:"low",defaultHistory:[]},{loadChildren:"../pages/home/home.module.ngfactory#EventsPageModuleNgFactory",name:"HomePage",segment:"home",priority:"low",defaultHistory:[]},{loadChildren:"../pages/login/login.module.ngfactory#LoginPageModuleNgFactory",name:"LoginPage",segment:"login",priority:"low",defaultHistory:[]},{loadChildren:"../pages/service/service.module.ngfactory#ServicePageModuleNgFactory",name:"ServicePage",segment:"service",priority:"low",defaultHistory:[]},{loadChildren:"../pages/timeline/timeline.module.ngfactory#TimelinePageModuleNgFactory",name:"TimelinePage",segment:"timeline",priority:"low",defaultHistory:[]},{loadChildren:"../pages/welcome/welcome.module.ngfactory#WelcomePageModuleNgFactory",name:"WelcomePage",segment:"welcome",priority:"low",defaultHistory:[]}]},this._Compiler_11=new _.i,this._NgModuleLoader_12=new S.a(this._Compiler_11),this._ModuleLoader_13=ae.c(this._NgModuleLoader_12,this),this._APP_INITIALIZER_14=[_._24,r.r(this.parent.get(r.i,null),this.parent.get(_.B,null)),ue.a(this._Config_5),O.b(this._Platform_4,this._DomController_6),j.b(this._Config_5,this._Platform_4,this._DomController_6,this._App_8,this._GestureController_9),ae.d(this._Config_5,this._DeepLinkConfigToken_10,this._ModuleLoader_13,this.parent.get(_.C))],this._ApplicationInitStatus_15=new _.d(this._APP_INITIALIZER_14),this._ɵf_16=new _._11(this.parent.get(_.C),this.parent.get(_._4),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_15),this._ApplicationRef_17=this._ɵf_16,this._ApplicationModule_18=new _.e(this._ApplicationRef_17),this._BrowserModule_19=new r.a(this.parent.get(r.a,null)),this._HttpModule_20=new l.f,this._ɵba_21=new P.o,this._FormsModule_22=new P.g,this._ReactiveFormsModule_23=new P.m,this._IonicModule_24=new v.a,this._AppModule_25=new p,this._AppRootToken_51=c,this._APP_BASE_HREF_52="/",this._AppModule_25},t.prototype.getInternal=function(e,t){return e===g.b?this._CommonModule_0:e===_.m?this._ErrorHandler_1:e===z.b?this._ConfigToken_2:e===se.a?this._PlatformConfigToken_3:e===J.a?this._Platform_4:e===z.a?this._Config_5:e===d.a?this._DomController_6:e===m.a?this._MenuController_7:e===b.a?this._App_8:e===y.h?this._GestureController_9:e===le.a?this._DeepLinkConfigToken_10:e===_.i?this._Compiler_11:e===S.a?this._NgModuleLoader_12:e===ae.b?this._ModuleLoader_13:e===_.c?this._APP_INITIALIZER_14:e===_.d?this._ApplicationInitStatus_15:e===_._11?this._ɵf_16:e===_.f?this._ApplicationRef_17:e===_.e?this._ApplicationModule_18:e===r.a?this._BrowserModule_19:e===l.f?this._HttpModule_20:e===P.o?this._ɵba_21:e===P.g?this._FormsModule_22:e===P.m?this._ReactiveFormsModule_23:e===v.a?this._IonicModule_24:e===p?this._AppModule_25:e===_.x?this._LOCALE_ID_26:e===g.k?this._NgLocalization_27:e===_.b?this._APP_ID_28:e===_.v?this._IterableDiffers_29:e===_.w?this._KeyValueDiffers_30:e===r.c?this._DomSanitizer_31:e===_.M?this._Sanitizer_32:e===r.f?this._HAMMER_GESTURE_CONFIG_33:e===r.d?this._EVENT_MANAGER_PLUGINS_34:e===r.e?this._EventManager_35:e===r.n?this._ɵDomSharedStylesHost_36:e===r.m?this._ɵDomRendererFactory2_37:e===_.K?this._RendererFactory2_38:e===r.q?this._ɵSharedStylesHost_39:e===_.R?this._Testability_40:e===r.h?this._Meta_41:e===r.j?this._Title_42:e===l.c?this._BrowserXhr_43:e===l.h?this._ResponseOptions_44:e===l.j?this._XSRFStrategy_45:e===l.i?this._XHRBackend_46:e===l.g?this._RequestOptions_47:e===l.e?this._Http_48:e===P.q?this._ɵi_49:e===P.d?this._FormBuilder_50:e===he.a?this._AppRootToken_51:e===g.a?this._APP_BASE_HREF_52:e===w.a?this._AlertController_54:e===O.a?this._Events_55:e===A.a?this._Form_56:e===E.a?this._Haptic_57:e===R.a?this._Keyboard_58:e===k.a?this._LoadingController_59:e===g.f?this._LocationStrategy_60:e===g.e?this._Location_61:e===le.b?this._UrlSerializer_62:e===oe.a?this._DeepLinker_63:e===M.a?this._ModalController_64:e===L.a?this._PickerController_65:e===j.a?this._TapClick_67:e===D.a?this._TransitionController_69:e===a.a?this._StatusBar_70:e===s.a?this._NativeStorage_71:e===h.a?this._Service_72:e===u.a?this._SplashScreen_73:t},t.prototype.destroyInternal=function(){this._ɵf_16.ngOnDestroy(),this.__ɵDomSharedStylesHost_36&&this._ɵDomSharedStylesHost_36.ngOnDestroy()},t}(_._5),ge=new _.z(pe,p);Object(_.Y)(),Object(r.k)().bootstrapModuleFactory(ge)},45:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n(0),i=n(34),r=n(59),_=n(43),l=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,_=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)_=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(_=(r<3?i(_):r>3?i(t,n,_):i(t,n))||_);return r>3&&_&&Object.defineProperty(t,n,_),_},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(e,t,n){this.http=e,this.alertCtrl=t,this.nativeStorage=n,this.baseUrl="http://localhost",this.webPort=":3000",this.dbPort=":5984"}return e.prototype.presentAlert=function(e,t,n){this.alertCtrl.create({title:e,subTitle:t,buttons:[n]}).present()},e.prototype.init=function(e){console.log(e),this.remote=e.userDBs.student,this.token=e.token,this.key=e.password,(this.headers=new i.d).append("Authorization","Bearer "+String(this.token)+":"+String(this.key)),this.nativeStorage.setItem("token",e.token).then(function(){return console.log("Stored token")},function(e){return console.error("Error storing token",e)}),this.nativeStorage.setItem("key",e.password).then(function(){return console.log("Stored key")},function(e){return console.error("Error storing key",e)}),this.nativeStorage.setItem("url",e.userDBs.student).then(function(){return console.log("Stored url")},function(e){return console.error("Error storing url",e)})},e.prototype.logout=function(){var e=this;this.http.post(this.baseUrl+this.webPort+"/auth/logout",null,{headers:this.headers}).subscribe(function(t){e.nativeStorage.clear().then(function(){return console.log("Cleared storage")},function(e){return console.error("Error clearing storage",e)})},function(e){console.log(e)})},e.prototype.addServiceHours=function(e){var t=this;this.http.post(this.remote,e,{headers:this.headers}).subscribe(function(e){t.presentAlert("Sucess","Hours sucessfully logged!","OK"),t.getServiceHours()},function(e){console.log(e)})},e.prototype.getServiceHours=function(){var e=this;this.http.get(this.remote+"/_design/hours/_view/date").subscribe(function(t){e.hours=t.json()},function(e){console.log(e)})},e.prototype.getEvents=function(){var e=this;this.http.get(this.baseUrl+this.dbPort+"/events/_design/events/_view/start").subscribe(function(t){e.events=t.json()},function(e){console.log(e)})},e.prototype.getNews=function(){var e=this;return new Promise(function(t){e.http.get(e.baseUrl+e.dbPort+"/news/_all_docs?include_docs=true").subscribe(function(n){e.news=n.json(),t()},function(e){console.log(e)})})},e}();a=l([Object(o.r)(),s("design:paramtypes",["function"==typeof(u=void 0!==i.e&&i.e)&&u||Object,"function"==typeof(h=void 0!==r.a&&r.a)&&h||Object,"function"==typeof(c=void 0!==_.a&&_.a)&&c||Object])],a);var u,h,c}},[131]);