"use strict";
(function(F){
const {products:P,$,t,esc,eur,favs,updateFavs,source}=F;
let kind="all",skin="all",query="";
const productType=p=>({serum:t("Sérum","Serum"),exfoliant:t("Esfoliante","Exfoliant"),moisturizer:t("Hidratante","Moisturizer"),cleanser:t("Limpeza","Cleanser")}[p.type]||p.type);
function card(p){const saved=favs.has(p.id);return '<article class="product-card"><div class="product-card-top" style="background:'+p.color+'"><span class="bottle">🧴</span><button type="button" data-fav="'+esc(p.id)+'" aria-label="'+t("Guardar ou retirar","Save or remove")+'" aria-pressed="'+saved+'">'+(saved?"♥":"♡")+'</button></div><h4>'+esc(p.name)+'</h4><p class="product-meta">'+esc(p.brand)+' · '+p.size+' ml · '+productType(p)+'</p><small>'+esc(p.tags)+'</small><p class="product-price">'+eur(p.retailEUR)+'</p>'+source(p)+'<div class="product-bottom"><small>'+t("Preço de referência europeu","European reference price")+'</small><button type="button" data-compare="'+esc(p.id)+'">'+t("comparar ♡","compare ♡")+'</button></div></article>'}
function visible(){return P.filter(p=>(kind==="all"||p.type===kind)&&(skin==="all"||p.skin.includes(skin))&&(!query||[p.name,p.brand,p.tags,p.inci].join(" ").toLowerCase().includes(query)))}
function render(){const a=visible();$("catalog").innerHTML=a.map(card).join("")||'<p>'+t("Nenhum produto encontrado.","No matching products found.")+'</p>';$("catalog-count").textContent=a.length+' / '+P.length}
function favList(){const p=P.filter(x=>favs.has(x.id));$("favorites-content").innerHTML=p.length?p.map(card).join(""):'<p>'+t("Ainda não guardaste produtos. Clica no ♡ de um produto.","No saved products yet. Tap ♡ on a product.")+'</p>'}
F.renderCatalog=render;F.renderFavorites=favList;
$("product-suggestions").innerHTML=P.map(p=>'<option value="'+esc(p.name)+'"></option>').join("");
for(const id of ["product-a","product-b"]){$(id).innerHTML=P.map(p=>'<option value="'+esc(p.id)+'">'+esc(p.brand+" — "+p.name)+'</option>').join("")}
$("product-b").selectedIndex=1;
document.querySelectorAll("[data-filter]").forEach(b=>b.addEventListener("click",()=>{kind=b.dataset.filter;document.querySelectorAll("[data-filter]").forEach(x=>x.classList.toggle("active",x===b));render()}));
$("skin-filter").addEventListener("change",e=>{skin=e.target.value;render()});
$("catalog-search").addEventListener("input",e=>{query=e.target.value.toLowerCase().trim();render()});
$("hero-search").addEventListener("submit",e=>{e.preventDefault();query=$("search-input").value.toLowerCase().trim();$("catalog-search").value=query;render();F.bump("searches");$("compare").scrollIntoView({behavior:"smooth"})});
function click(e){const fav=e.target.closest("[data-fav]"),cmp=e.target.closest("[data-compare]");if(fav){const id=fav.dataset.fav;if(favs.has(id))favs.delete(id);else{favs.add(id);F.bump("saves")}updateFavs();render();favList()}if(cmp){const id=cmp.dataset.compare;$("product-a").value=id;const alt=P.find(p=>p.id!==id&&p.type===P.find(q=>q.id===id).type);$("product-b").value=alt?.id||P.find(p=>p.id!==id).id;$("compare").scrollIntoView({behavior:"smooth"});F.renderComparison?.()}}
$("catalog").addEventListener("click",click);$("favorites-content").addEventListener("click",click);render();favList();
})(window.FL);