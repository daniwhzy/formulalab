"use strict";
window.FL=(function(){
const products=window.FORMULALAB_PRODUCTS||[], EN=document.documentElement.lang.startsWith("en");
const t=(pt,en)=>EN?en:pt;
const $=id=>document.getElementById(id);
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const load=(key,def)=>{try{const v=JSON.parse(localStorage.getItem("fl-"+key));return v==null?def:v}catch(e){return def}};
const save=(key,val)=>{try{localStorage.setItem("fl-"+key,JSON.stringify(val))}catch(e){}};
const favs=new Set(load("favs",[])), prices=load("prices",{}), stats=load("stats",{searches:0,comparisons:0,decodes:0,saves:0});
const split=s=>String(s||"").split(",").map(x=>x.trim()).filter(Boolean);
const norm=s=>s.trim().toLowerCase().replace(/^aqua\s*\(water\)$|^aqua\/water\/eau$/,"aqua").replace(/\s+/g," ");
const compare=(a,b)=>{const A=new Set(split(a).map(norm)),B=new Set(split(b).map(norm)),shared=[...A].filter(x=>B.has(x)),onlyA=[...A].filter(x=>!B.has(x)),onlyB=[...B].filter(x=>!A.has(x)),union=new Set([...A,...B]);return {shared,onlyA,onlyB,percent:union.size?Math.round(shared.length/union.size*100):0,countA:A.size,countB:B.size}};
const eur=x=>typeof x==="number"?new Intl.NumberFormat(EN?"en-IE":"pt-PT",{style:"currency",currency:"EUR"}).format(x):t("Preço não confirmado","Price not confirmed");
const kz=x=>typeof x==="number"?new Intl.NumberFormat("pt-AO",{maximumFractionDigits:2}).format(x)+" Kz":t("Sem preço local","No local price");
const price=p=>Object.prototype.hasOwnProperty.call(prices,p.id)?Number(prices[p.id]):null;
function bump(k){stats[k]=(stats[k]||0)+1;save("stats",stats);renderStats()}
function renderStats(){const o=$("metrics-content");if(o)o.innerHTML=[["searches",t("Pesquisas","Searches")],["comparisons",t("Comparações","Comparisons")],["decodes",t("Análises","Decodes")],["saves",t("Guardados","Saves")]].map(x=>'<div><strong>'+Number(stats[x[0]]||0)+'</strong><small>'+x[1]+'</small></div>').join("")}
function updateFavs(){const e=$("favorite-count");if(e)e.textContent=favs.size;save("favs",[...favs])}
function source(p){return '<a class="source-mini" target="_blank" rel="noopener noreferrer" href="'+esc(p.source)+'">'+t("ver ingredientes na marca ↗","check brand ingredient list ↗")+"</a>"}
$("mobile-menu")?.addEventListener("click",()=>{const m=$("mobile-links");const open=m.classList.toggle("open");$("mobile-menu").setAttribute("aria-expanded",String(open))});
document.querySelectorAll('img[src^="assets/"]').forEach(im=>im.addEventListener("error",()=>{im.style.display="none";const e=document.createElement("span");e.className="no-avatar";e.textContent="♡";im.after(e)}));
updateFavs();renderStats();
return {products,EN,t,$,esc,load,save,favs,prices,stats,split,norm,compare,eur,kz,price,bump,renderStats,updateFavs,source};
})();