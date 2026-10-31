"use strict";
(function(F){
const {products:P,$,t,esc,compare,eur,kz,price,prices,save}=F;
const find=id=>P.find(p=>p.id===id);
function priceText(p){const local=price(p);return '<p>'+t("Referência Europa: ","Europe reference: ")+eur(p.retailEUR)+' / '+p.size+' ml</p><p>'+t("Preço em Angola: ","Angola price: ")+kz(local)+(local?" · "+kz(local/p.size*30)+"/30 ml":"")+'</p>'}
function render(){
const a=find($("product-a").value),b=find($("product-b").value);if(!a||!b)return;
if(a.id===b.id){$("comparison-output").innerHTML='<p>'+t("Escolhe dois produtos diferentes.","Select two different products.")+'</p>';return}
const m=compare(a.inci,b.inci);F.bump("comparisons");
const card=(p,label)=>'<article class="product-comparison-card"><span class="real-label">'+label+'</span><h4>'+esc(p.brand)+' — '+esc(p.name)+'</h4>'+priceText(p)+F.source(p)+'</article>';
const list=(title,arr)=>'<div><strong>'+title+' ('+arr.length+')</strong><ul>'+arr.slice(0,25).map(s=>'<li>'+esc(s)+'</li>').join("")+'</ul>'+(arr.length>25?'<small>+'+(arr.length-25)+' more</small>':"")+'</div>';
const pA=price(a),pB=price(b);
let savings="";
if(pA!=null&&pB!=null){const diff=pA/a.size*30-pB/b.size*30;savings='<p><strong>'+t("Diferença local por 30 ml: ","Local difference per 30 ml: ")+'</strong>'+kz(Math.abs(diff))+' ('+(diff>0?t("B mais barato","B costs less"):diff<0?t("A mais barato","A costs less"):t("mesmo preço","same price"))+')</p>'}
if(a.retailEUR!=null&&b.retailEUR!=null){const diff=a.retailEUR/a.size*30-b.retailEUR/b.size*30;savings+='<p>'+t("Diferença de referência europeia por 30 ml: ","European reference difference per 30 ml: ")+eur(Math.abs(diff))+'</p>'}
const output='<div class="real-compare-head">'+card(a,"A")+card(b,"B")+'</div><div class="science-note"><strong>'+t("Coincidência dos nomes INCI: ","INCI name overlap: ")+m.percent+'%</strong><div class="match-bar"><span style="width:'+m.percent+'%"></span></div><small>'+m.shared.length+' '+t("ingredientes em comum entre ","shared ingredients among ")+(m.shared.length+m.onlyA.length+m.onlyB.length)+' '+t("nomes diferentes","distinct names")+'. '+t("Esta percentagem NÃO mede eficácia, segurança nem compatibilidade.","This percentage does NOT measure efficacy, safety or suitability.")+'</small></div><div class="summary-pills"><div><strong>'+m.shared.length+'</strong><p>'+t("ingredientes partilhados","shared ingredients")+'</p></div><div><strong>'+m.onlyA.length+'</strong><p>'+t("só no produto A","only in A")+'</p></div><div><strong>'+m.onlyB.length+'</strong><p>'+t("só no produto B","only in B")+'</p></div></div><div class="breakdown">'+list(t("Em comum","Shared"),m.shared)+list(t("Só A","Only A"),m.onlyA)+list(t("Só B","Only B"),m.onlyB)+'</div><div class="local-comparison">'+savings+'</div><p class="risk-note">'+t("Mesmo quando as listas são parecidas, não conhecemos todas as concentrações, o pH ou a estabilidade. Confirma sempre o rótulo atual.","Similar lists cannot show exact concentrations, pH or stability. Always check the current label.")+'</p>';
$("comparison-output").innerHTML=output;
$("price-a").value=price(a)??"";$("price-b").value=price(b)??"";
}
F.renderComparison=render;
$("product-a").addEventListener("change",render);$("product-b").addEventListener("change",render);
$("save-prices").addEventListener("click",()=>{const a=find($("product-a").value),b=find($("product-b").value);for(const [p,id] of [[a,"price-a"],[b,"price-b"]]){const raw=$(id).value;if(raw&&Number(raw)>0)prices[p.id]=Number(raw);else delete prices[p.id]}save("prices",prices);$("price-status").textContent=t("Preços guardados só neste navegador.","Prices saved on this device only.");render()});
$("best-match").addEventListener("click",()=>{const a=find($("product-a").value);if(!a)return;const choices=P.filter(b=>b.id!==a.id&&b.type===a.type&&(a.retailEUR==null||b.retailEUR==null||b.retailEUR/b.size<a.retailEUR/a.size)).map(b=>({b,score:compare(a.inci,b.inci).percent})).sort((x,y)=>y.score-x.score);if(!choices.length)return;$("product-b").value=choices[0].b.id;$("match-status").textContent=t("Alternativa para investigar — não equivalência garantida.","Possible alternative to investigate, not proven equivalence.");render()});
render();
})(window.FL);