"use strict";(self.webpackChunkmovies_ngrx=self.webpackChunkmovies_ngrx||[]).push([[592],{2090:(p,r,t)=>{t.d(r,{I:()=>v});var s=t(7969),n=t(2340),o=t(7716),i=t(1841);let v=(()=>{class _{constructor(e){this.http=e}getNowPlaying$(e){return this.http.get(`${n.N.TMDB_API_URL}/movie/now_playing?api_key=${n.N.TMDB_API_KEY}&page=${e}`).pipe((0,s.U)(({results:M})=>M))}getMovie$(e){return this.http.get(`${n.N.TMDB_API_URL}/movie/${e}?api_key=${n.N.TMDB_API_KEY}&append_to_response=credits`)}}return _.\u0275fac=function(e){return new(e||_)(o.LFG(i.eN))},_.\u0275prov=o.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()}}]);