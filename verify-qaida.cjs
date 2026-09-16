const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const nodes=new Map();let serial=0;
function node(id){if(!nodes.has(id))nodes.set(id,{innerHTML:'',dataset:{},classList:{add(){},toggle(){}},append(){},after(){},setAttribute(){},showModal(){}});return nodes.get(id);}
const ctx={document:{readyState:'complete',head:{append(){}},body:{append(){}},createElement:()=>node('generated-'+serial++),getElementById:node,querySelectorAll:()=>[]},openCourseMenu(){},switchTab(){}};ctx.window=ctx;vm.createContext(ctx);
for(const file of ['foundation-lessons.js','qaida-next-lessons.js'])vm.runInContext(fs.readFileSync(file,'utf8'),ctx);
for(const [n,cells,questions,pages] of [[5,84,15,2],[6,54,12,2],[7,34,15,2],[8,140,15,5]]){
  const html=()=>node('foundation-'+n).innerHTML;
  ctx.openWorkbookLesson(n);
  assert.equal((html().match(/class="qn-cell"/g)||[]).length,cells);
  assert.equal((html().match(/class="qn-grid"/g)||[]).length,pages);
  assert.equal((html().match(/dir="rtl"/g)||[]).length>=pages,true);
  if(n===8){assert(html().indexOf('Madd: alif')<html().indexOf('Page 13'));assert(html().indexOf('Leen: fatḥah')<html().indexOf('Page 15 · Leen'));}
  ctx.qnMode(n,'exercise');ctx.qnReveal(n);assert(!html().includes('Try reading it yourself first.'));
  ctx.qnExerciseStep(n,1);assert(html().includes('Reading exercise 2 /'));ctx.qnExerciseStep(n,-1);assert(html().includes('Reading exercise 1 /'));
  ctx.qnMode(n,'quiz');ctx.qnQuizStep(n,1);assert(html().includes('Question 1 /'));
  let at=0;while(!html().includes('Quiz complete')){assert(at<20);const choices=[...html().matchAll(/onclick="qnAnswer\(\d+,\d+\)"[^>]*>([^<]*)<\/button>/g)].map(m=>m[1]);assert.equal(new Set(choices).size,choices.length);assert(choices.length>=2);ctx.qnAnswer(n,0);ctx.qnQuizStep(n,1);at++;}
  assert.equal(at,questions);assert(html().includes('Your answer:'));ctx.qnQuizStep(n,-1);assert(html().includes('qn-selected'));ctx.qnRestart(n);assert(html().includes('Question 1 /'));assert(html().includes('Choose an answer to continue.'));
}
const html=fs.readFileSync('index.html','utf8');assert.equal((html.match(/<!DOCTYPE html>/g)||[]).length,1);
for(const m of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g))new vm.Script(m[1]);
for(const m of html.matchAll(/<script src="([^"https:]+)"/g))assert(fs.existsSync(m[1]));
console.log('PASS: lessons 5–8; 312 cells on 11 page sections; 57 quiz questions; RTL, concepts before grids, unique options, navigation, answer review/restart, and script syntax.');
