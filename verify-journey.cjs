const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('qaida-lessons.js','utf8');
const storage=new Map();
function boot(){
  const nodes=new Map(),listeners=[];let serial=0;
  function node(id){if(!nodes.has(id)){const classes=new Set();nodes.set(id,{id,innerHTML:'',textContent:'',style:{},dataset:{},children:[],classList:{add(...x){x.forEach(c=>classes.add(c));},remove(...x){x.forEach(c=>classes.delete(c));},contains(c){return classes.has(c);},toggle(c,on){if(on===undefined)on=!classes.has(c);on?classes.add(c):classes.delete(c);}},append(...x){this.children.push(...x);},appendChild(x){this.append(x);},after(){},before(){},insertAdjacentHTML(){},setAttribute(k,v){this[k]=v;},addEventListener(){},querySelectorAll(){return [];},querySelector(){return null;},showModal(){this.open=true;},close(){this.open=false;}});}return nodes.get(id);}
  const ctx={document:{readyState:'loading',head:node('head'),body:node('body'),createElement:()=>node('generated-'+serial++),getElementById:node,querySelectorAll:()=>[],querySelector:selector=>node(selector),addEventListener:(event,fn)=>listeners.push(fn)},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},setTimeout(){},setInterval(){},clearInterval(){},console};ctx.window=ctx;vm.createContext(ctx);vm.runInContext(source,ctx);for(const fn of listeners)fn();return {ctx,node,html:()=>node('qaida-journey').innerHTML};
}
let {ctx,node,html}=boot(),j=ctx.qaidaJourney;
assert.equal(j.data.length,17);assert.equal(j.stages.length,6);assert(html().includes('Your reading journey'));
assert.equal(j.decode('بَ بِ بُ'),'ba bi bu');assert.equal(j.decode('بًا بٍ بٌ'),'ban bin bun');assert.equal(j.decode('بٰ بٖ بٗ'),'bā bī bū');assert.equal(j.decode('اَبَّ'),'ʾabba');assert.equal(j.decode('بَا بِيْ بُوْ'),'bā bī bū');assert.equal(j.breakdown('اَبَّ'),'اَ + بْ + بَ');
for(let n=1;n<=17;n++){
  j.open(n);assert(html().includes('Lesson '+n+' / 17'));assert.equal(j.status(n),'In progress');j.mode('sheet');assert(html().includes('qj-cell')||html().includes('qj-line'));j.detail(0);assert(node('qn-dialog-body').innerHTML.includes(n<=3?'Letter names':'Written reading'));j.mode('practice');j.reveal();assert(html().includes('qj-detail'));j.step(1);j.step(-1);j.mode('quiz');const before=html();j.quizStep(1);assert.equal(html(),before);assert(html().includes('disabled'));
}
j.open(11);j.mode('sheet');assert(html().includes('qj-line'));assert(!html().includes('class="qj-cell"'));j.word(0,'اَنْتَ');assert(node('qn-dialog-body').innerHTML.includes('Explain complete row'));
j.open(12);j.mode('sheet');assert(html().includes('class="qj-cell"'));assert(!html().includes('class="qj-line"'));
j.open(2);j.mode('sheet');assert(html().includes('Letter shapes'));assert.equal((html().match(/<h4>/g)||[]).length,28);
j.open(4);j.mode('quiz');
function choose(correct=true){const markup=html(),ar=markup.match(/data-ar="([^"]*)"/)[1];const expected=j.model({ar},4);const choices=[...markup.matchAll(/onclick="qaidaJourney.answer\((\d+)\)">([^<]*)</g)];assert.equal(new Set(choices.map(x=>x[2])).size,choices.length);const choice=choices.find(x=>correct?x[2]===expected:x[2]!==expected);assert(choice);j.answer(Number(choice[1]));}
choose(false);assert(html().includes('try again'));choose();j.quizStep(1);j.quizStep(-1);assert(html().includes('qj-selected'));j.restart();for(let i=0;i<10;i++){choose();j.quizStep(1);}assert(html().includes('10 / 10'));j.complete();assert.equal(j.status(4),'Completed');
j.open(10);j.rememberPractice(0);j.home();assert(html().includes('Practise again'));
({ctx,node,html}=boot());j=ctx.qaidaJourney;assert.equal(j.status(4),'Completed');assert(html().includes('Practise again'));j.revise(10,0);j.mastered(0);assert(html().includes('Removed from your revision list'));
ctx.openWorkbookLesson(5);assert(html().includes('Lesson 5 / 17'));ctx.switchChapter(1);assert(html().includes('Lesson 1 / 17'));
ctx.openArabicTab('vocabulary');assert(!node('arabic-menu').classList.contains('hidden'));
console.log('PASS: complete app startup; all 17 shared lesson flows; letter shapes; clickable rows and cells; hints, quiz gating, retries, answer review, completion, persistence, revision and separate Practical Arabic navigation.');


