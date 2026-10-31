'use strict';
// Run: node test_core.js. Pure-logic validation without a browser.
const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const sandbox={window:{},document:{documentElement:{lang:'pt-AO'},addEventListener:()=>{}},console,localStorage:{getItem:()=>null,setItem:()=>{}},Intl};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(__dirname+'/data.js','utf8'),sandbox);
vm.runInContext(fs.readFileSync(__dirname+'/app.js','utf8'),sandbox);
const core=sandbox.window.FormulaLabCore;
const ps=Array.from(core.products);
assert.equal(ps.length,20);
assert.equal(new Set(ps.map(p=>p.id)).size,20);
for(const p of ps){
 assert.ok(/^https:\/\//.test(p.source),`source ${p.id}`);
 assert.ok(p.size>0 && ['serum','moisturizer','exfoliant','cleanser'].includes(p.type),`data ${p.id}`);
 assert.ok(core.split(p.inci).length>=6,`ingredients ${p.id}`);
 assert.ok(p.retailEUR===null||p.retailEUR>0,`price ${p.id}`);
}
assert.equal(core.norm('Aqua (Water)'),core.norm('Aqua/Water/Eau'));
assert.equal(core.norm('(L-)Ascorbic Acid'),'ascorbic acid');
const r=core.compareINCI('Aqua (Water), Niacinamide, Glycerin','Aqua/Water/Eau, Zinc PCA, Niacinamide');
assert.equal(r.percent,50);
assert.equal(r.shared.length,2);
assert.equal(r.union,4);
assert.equal(core.compareINCI('Aqua','Aqua').percent,100);
assert.equal(core.compareINCI('Aqua','Glycerin').percent,0);
const niac=core.compareINCI(ps.find(p=>p.id==='ordinary-niac').inci,ps.find(p=>p.id==='gg-bbomb').inci);
assert.ok(niac.shared.includes('niacinamide')&&niac.shared.includes('zinc pca'));
const ha=core.compareINCI(ps.find(p=>p.id==='ordinary-ha').inci,ps.find(p=>p.id==='gg-ha-light').inci);
assert.ok(ha.shared.includes('sodium hyaluronate'));
console.log('PASS: 20 records, source URLs, safe pricing, INCI normalization, Jaccard calculation, niacinamide & HA matches');
