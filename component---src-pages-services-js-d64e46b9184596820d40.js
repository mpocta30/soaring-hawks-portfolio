(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[88],{3998:function(e,t,n){"use strict";var a=n(7294),r=n(9);t.Z=function(e){var t=e.heading,n=e.headerBg;return a.createElement(i,{headerBg:n},a.createElement(o,null,a.createElement(d,null,a.createElement(c,null,t))))};var i=r.ZP.div.withConfig({displayName:"PhotoHero__HeroContainer",componentId:"dhrri4-0"})(["background:linear-gradient( 180deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 35%,rgba(0,0,0,0.1) 100% ),url(",') no-repeat center;background-size:cover;height:60vh;width:100%;padding:5rem calc((100vw - 1300px) / 2);color:white;display:flex;justify-content:center;align-items:center;position:relative;:before{content:"";position:absolute;top:0;bottom:0;right:0;left:0;z-index:2;background:linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.6) 100%),linear-gradient(180deg,rgba(0,0,0,0.2) 0%,transparent 100%);}'],(function(e){return e.headerBg})),o=r.ZP.div.withConfig({displayName:"PhotoHero__HeroContent",componentId:"dhrri4-1"})(["z-index:3;height:calc(100vh - 80px);max-height:100%;padding:0rem calc((100vw - 1300px) / 2);"]),d=r.ZP.div.withConfig({displayName:"PhotoHero__HeroItems",componentId:"dhrri4-2"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;height:100vh;max-height:100%;padding:0;color:white;line-height:1.1;font-weight:bold;"]),c=r.ZP.h1.withConfig({displayName:"PhotoHero__HeroH1",componentId:"dhrri4-3"})(["font-size:clamp(1.5rem,6vw,4rem);margin-bottom:1.5rem;letter-spacing:3px;padding:0 1rem;"])},4971:function(e,t,n){"use strict";var a=n(7294),r=n(9),i=n(6802),o=n(7004),d=(0,r.ZP)(o.z).withConfig({displayName:"Products___StyledButton",componentId:"sc-1ml2jo2-0"})(["font-size=14px;"]);t.Z=function(e){var t=e.background,n=e.products,r=e.name,i=e.animation;return a.createElement("div",null,a.createElement(c,{id:r,background:t},a.createElement(l,{style:{textTransform:"capitalize"},"data-sal":i,"data-sal-duration":"1000","data-sal-delay":"300","data-sal-easing":"ease"},r),a.createElement(s,null,function(e,t){var n=[];return e.forEach((function(e,r){n.push(a.createElement(m,{key:r,"data-sal":t,"data-sal-duration":"1000","data-sal-delay":(300+200*r).toString(),"data-sal-easing":"ease"},a.createElement("a",{href:e.slug},a.createElement(g,{image:e.image,alt:e.title})),a.createElement(u,null,a.createElement(p,null,a.createElement(h,null,e.title),a.createElement(f,null,e.description)),a.createElement(d,{to:e.slug,primary:"true"},"Learn More"))))})),n}(n,i))))};var c=r.ZP.div.withConfig({displayName:"Products__ProductsContainer",componentId:"sc-1ml2jo2-1"})(["background-color:",";padding:5rem calc((100vw - 1600px) / 2);color:black;"],(function(e){return e.background})),l=r.ZP.div.withConfig({displayName:"Products__ProductsHeading",componentId:"sc-1ml2jo2-2"})(["font-size:clamp(1.5rem,6vw,3rem);font-weight:bold;text-align:center;margin-bottom:3rem;color:#000;"]),s=r.ZP.div.withConfig({displayName:"Products__ProductsWrapper",componentId:"sc-1ml2jo2-3"})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:3rem;justify-items:center;padding:0 2rem;@media screen and (max-width:1200px){grid-template-columns:1fr 1fr;}@media screen and (max-width:768px){grid-template-columns:1fr;grid-gap:1rem;}"]),m=r.ZP.div.withConfig({displayName:"Products__ProductCard",componentId:"sc-1ml2jo2-4"})(["line-height:2;width:100%;height:100%;position:relative;border-radius:10px;transition:0.2s ease;@media screen and (max-width:768px){padding-top:1rem;}@media screen and (max-width:400px){min-height:450px;}"]),g=(0,r.ZP)(i.G).withConfig({displayName:"Products__ProductImg",componentId:"sc-1ml2jo2-5"})(["height:50%;max-width:100%;position:relative;border-radius:10px;filter:brightness(70%);transition:0.4s cubic-bezier(0.075,0.82,0.165,1);&:hover{filter:brightness(100%);}"]),u=r.ZP.div.withConfig({displayName:"Products__ProductInfo",componentId:"sc-1ml2jo2-6"})(["display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 1rem;@media screen and (max-width:768px){padding:0 1rem;display:block;}"]),p=r.ZP.div.withConfig({displayName:"Products__TextWrap",componentId:"sc-1ml2jo2-7"})([""]),h=r.ZP.h2.withConfig({displayName:"Products__ProductTitle",componentId:"sc-1ml2jo2-8"})(["font-weight:500;font-size:clamp(1.2rem,5vw,2rem);margin:0.5rem 3rem;"]),f=r.ZP.p.withConfig({displayName:"Products__ProductDescription",componentId:"sc-1ml2jo2-9"})(["font-style:italic;margin:0.5rem 0 1rem 0;"])},7227:function(e,t,n){"use strict";var a=n(7294),r=n(5444),i=n(4971);t.Z=function(e){var t,n,o=e.heading,d=e.background,c=e.animation,l=(0,r.useStaticQuery)("3438242500");return a.createElement("div",null,a.createElement(i.Z,{background:d,products:(t=l.allContentfulService.edges,n=[],t.forEach((function(e,t){var a={};a.image=e.node.hero.headerBg.gatsbyImageData,a.title=e.node.title,a.description=e.node.shortDescription.shortDescription,a.slug=e.node.slug,n.push(a)})),n),name:o,animation:c}))}},7948:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var a=n(7294),r=n(3088),i=n(3751),o=n(3998),d=n(7227),c=n.p+"static/real-estate-5f30646c28073485fd485ee3afe5bbf5.jpg",l=function(){return a.createElement(r.Z,null,a.createElement(i.Z,{title:"Services"}),a.createElement(o.Z,{heading:"Services",headerBg:c}),a.createElement(d.Z,{heading:""}))}}}]);
//# sourceMappingURL=component---src-pages-services-js-d64e46b9184596820d40.js.map