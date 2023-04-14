(function(g){var window=this;'use strict';var zhb=function(a,b){g.T.call(this,{G:"button",Ia:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],X:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},W:[{G:"svg",X:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},W:[{G:"g",X:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},W:[{G:"g",X:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
W:[{G:"path",X:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.F=a;this.Qa("click",this.onClick,this);this.updateValue("title",g.ST(a,"Maximieren","i"));this.update({"data-title-no-tooltip":"Maximieren"});g.$a(this,g.YS(b.Hc(),this.element))},Ahb=function(a){g.T.call(this,{G:"div",
N:"ytp-miniplayer-ui"});this.Yf=!1;this.player=a;this.S(a,"minimized",this.Wh);this.S(a,"onStateChange",this.gP)},Bhb=function(a){g.xT.call(this,a);
this.u=new g.bI(this);this.j=new Ahb(this.player);this.j.hide();g.MS(this.player,this.j.element,4);a.wg()&&(this.load(),g.Vp(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(zhb,g.T);zhb.prototype.onClick=function(){this.F.Ma("onExpandMiniplayer")};g.w(Ahb,g.T);g.k=Ahb.prototype;
g.k.kM=function(){this.tooltip=new g.WV(this.player,this);g.D(this,this.tooltip);g.MS(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Qc=new g.dU(this.player);g.D(this,this.Qc);this.Qj=new g.T({G:"div",N:"ytp-miniplayer-scrim"});g.D(this,this.Qj);this.Qj.Ea(this.element);this.S(this.Qj.element,"click",this.PG);var a=new g.T({G:"button",Ia:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Schlie\u00dfen"},W:[g.dQ()]});g.D(this,a);a.Ea(this.Qj.element);this.S(a.element,"click",
this.Xo);a=new zhb(this.player,this);g.D(this,a);a.Ea(this.Qj.element);this.Fu=new g.T({G:"div",N:"ytp-miniplayer-controls"});g.D(this,this.Fu);this.Fu.Ea(this.Qj.element);this.S(this.Fu.element,"click",this.PG);var b=new g.T({G:"div",N:"ytp-miniplayer-button-container"});g.D(this,b);b.Ea(this.Fu.element);a=new g.T({G:"div",N:"ytp-miniplayer-play-button-container"});g.D(this,a);a.Ea(this.Fu.element);var c=new g.T({G:"div",N:"ytp-miniplayer-button-container"});g.D(this,c);c.Ea(this.Fu.element);this.GW=
new g.gV(this.player,this,!1);g.D(this,this.GW);this.GW.Ea(b.element);b=new g.fV(this.player,this);g.D(this,b);b.Ea(a.element);this.nextButton=new g.gV(this.player,this,!0);g.D(this,this.nextButton);this.nextButton.Ea(c.element);this.qj=new g.PV(this.player,this);g.D(this,this.qj);this.qj.Ea(this.Qj.element);this.Jc=new g.lV(this.player,this);g.D(this,this.Jc);g.MS(this.player,this.Jc.element,4);this.FG=new g.T({G:"div",N:"ytp-miniplayer-buttons"});g.D(this,this.FG);g.MS(this.player,this.FG.element,
4);a=new g.T({G:"button",Ia:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Schlie\u00dfen"},W:[g.dQ()]});g.D(this,a);a.Ea(this.FG.element);this.S(a.element,"click",this.Xo);a=new g.T({G:"button",Ia:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"Schlie\u00dfen"},W:[g.kQ()]});g.D(this,a);a.Ea(this.FG.element);this.S(a.element,"click",this.e7);this.S(this.player,"presentingplayerstatechange",this.xd);this.S(this.player,"appresize",this.Cb);this.S(this.player,"fullscreentoggled",
this.Cb);this.Cb()};
g.k.show=function(){this.mf=new g.Hp(this.Dv,null,this);this.mf.start();this.Yf||(this.kM(),this.Yf=!0);0!==this.player.getPlayerState()&&g.T.prototype.show.call(this);this.Jc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.mf&&(this.mf.dispose(),this.mf=void 0);g.T.prototype.hide.call(this);this.player.wg()||(this.Yf&&this.Jc.hide(),this.player.loadModule("annotations_module"))};
g.k.oa=function(){this.mf&&(this.mf.dispose(),this.mf=void 0);g.T.prototype.oa.call(this)};
g.k.Xo=function(){this.player.stopVideo();this.player.Ma("onCloseMiniplayer")};
g.k.e7=function(){this.player.playVideo()};
g.k.PG=function(a){if(a.target===this.Qj.element||a.target===this.Fu.element)g.NO(this.player.Fb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Wh=function(){g.Vp(this.player.getRootNode(),"ytp-player-minimized",this.player.wg())};
g.k.Ge=function(){this.Jc.yc();this.qj.yc()};
g.k.Dv=function(){this.Ge();this.mf&&this.mf.start()};
g.k.xd=function(a){g.S(a.state,32)&&this.tooltip.hide()};
g.k.Cb=function(){g.yV(this.Jc,0,this.player.jb().getPlayerSize().width,!1);g.mV(this.Jc)};
g.k.gP=function(a){this.player.wg()&&(0===a?this.hide():this.show())};
g.k.Hc=function(){return this.tooltip};
g.k.vg=function(){return!1};
g.k.gh=function(){return!1};
g.k.Sb=function(){return!1};
g.k.Ll=function(){return!1};
g.k.NH=function(){};
g.k.Np=function(){};
g.k.by=function(){};
g.k.Jm=function(){return null};
g.k.BF=function(){return null};
g.k.EF=function(){return new g.Fe(0,0)};
g.k.wk=function(){return new g.Om(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Qv=function(a,b,c,d,e){var f=0,h=d=0,l=g.bn(a);if(b){c=g.Qp(b,"ytp-prev-button")||g.Qp(b,"ytp-next-button");var m=g.Qp(b,"ytp-play-button"),n=g.Qp(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.$m(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Qp(b,"ytp-miniplayer-button-top-left"),f=g.$m(b,this.element),b=g.bn(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.jb().getPlayerSize().width;e=f+(e||0);l=g.ye(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.qp=function(){};
g.k.Fl=function(){return!1};
g.k.HD=function(){};
g.k.Jz=function(){};
g.k.Sq=function(){};
g.k.Rq=function(){};
g.k.SA=function(){};
g.k.Sr=function(){};
g.k.tD=function(){};g.w(Bhb,g.xT);g.k=Bhb.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.Vp(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.xT.prototype.create.call(this);this.u.S(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Rk=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.wT("miniplayer",Bhb);})(_yt_player);
