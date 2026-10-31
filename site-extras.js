"use strict";
(function(F){
const {$,t,esc,split,norm}=F;
const science={
niacinamide:["Vitamina B3; ajuda a apoiar a barreira da pele.","Vitamin B3; helps support the skin barrier."],
glycerin:["Humectante que ajuda a atrair água para a pele.","Humectant that helps attract water to skin."],
"sodium hyaluronate":["Forma de ácido hialurónico que ajuda a reter água.","A form of hyaluronic acid that helps hold water."],
panthenol:["Pró-vitamina B5 usada para hidratar e suavizar.","Provitamin B5 used to hydrate and soothe."],
"zinc pca":["Ingrediente usado em produtos para pele oleosa.","Ingredient used in products for oily skin."],
"salicylic acid":["BHA que ajuda a remover células mortas. Fórmula e dose importam.","BHA that helps remove dead skin cells. Formula and dose matter."],
"glycolic acid":["AHA esfoliante; o pH e a concentração podem mudar o efeito.","Exfoliating AHA; pH and concentration affect results."],
"lactic acid":["AHA esfoliante com propriedades de hidratação.","Exfoliating AHA with moisturizing properties."],
squalane:["Emoliente que ajuda a suavizar a pele.","Emollient that helps soften skin."],
retinol:["Derivado de vitamina A; pode irritar. Não é igual a retinal.","Vitamin A derivative; can irritate. Different from retinal."],
retinal:["Retinoide diferente de retinol; exige cuidado na utilização.","Retinoid different from retinol; use with care."],
"ascorbic acid":["Vitamina C antioxidante; a estabilidade da fórmula importa.","Antioxidant vitamin C; formula stability matters."],
"alpha-arbutin":["Ingrediente usado para ajudar no aspeto de manchas.","Ingredient used to help the appearance of dark spots."],
"ceramide ng":["Lípido usado para ajudar a barreira da pele.","Lipid used to support the skin barrier."],
allantoin:["Ingrediente calmante usado em algumas fórmulas.","Soothing ingredient used in some formulas."],
phenoxyethanol:["Conservante que ajuda a proteger o produto de micróbios.","Preservative that helps protect the product from microbes."]
};
function decode(){const list=split($("inci-input").value);if(!list.length){$("decode-output").textContent=t("Cola uma lista de ingredientes.","Paste an ingredient list.");return}F.bump("decodes");$("decode-output").innerHTML='<h3>'+t("O que encontramos:","What we found:")+'</h3>'+list.map(x=>{const desc=science[norm(x)];return '<p><strong>'+esc(x)+'</strong><br>'+esc(desc?desc[F.EN?1:0]:t("Ainda não temos uma explicação verificada para este ingrediente.","No verified explanation for this ingredient yet."))+'</p>'}).join("")+'<p class="risk-note">'+t("Informação educativa, não uma avaliação de segurança.","Educational information, not a safety assessment.")+'</p>'}
$("decode-btn").addEventListener("click",decode);
$("sample-btn").addEventListener("click",()=>{$("inci-input").value=F.products[0]?.inci||"Aqua, Glycerin, Niacinamide";decode()});
const feedbackKey="feedback";
$("feedback-form").addEventListener("submit",e=>{e.preventDefault();const f=new FormData(e.target),saved=F.load(feedbackKey,[]);saved.push({date:new Date().toISOString(),search:f.get("search"),compare:f.get("compare"),comment:String(f.get("comment")||"").slice(0,1000)});F.save(feedbackKey,saved);$("feedback-status").textContent=t("Feedback guardado neste navegador. Obrigada! ♡","Feedback saved in this browser. Thank you! ♡");e.target.reset()});
function download(filename,object){const blob=new Blob([JSON.stringify(object,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),1500)}
$("export-feedback").addEventListener("click",()=>download("formulalab-feedback.json",F.load(feedbackKey,[])));
$("export-metrics").addEventListener("click",()=>download("formulalab-metrics.json",F.stats));
for(const img of document.querySelectorAll('img[src^="assets/"]')){if(img.complete&&img.naturalWidth===0&&img.style.display!=="none"){img.style.display="none";const s=document.createElement("span");s.className="no-avatar";s.textContent="♡";img.after(s)}}
})(window.FL);