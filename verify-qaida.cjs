const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const nodes=new Map();let serial=0;
function node(id){if(!nodes.has(id))nodes.set(id,{innerHTML:'',dataset:{},classList:{add(){},toggle(){}},append(){},after(){},setAttribute(){},showModal(){}});return nodes.get(id);}
const ctx={document:{readyState:'complete',head:{append(){}},body:{append(){}},createElement:()=>node('generated-'+serial++),getElementById:node,querySelectorAll:()=>[]},openCourseMenu(){},switchTab(){}};ctx.window=ctx;vm.createContext(ctx);
const source=fs.readFileSync('qaida-lessons.js','utf8');
new vm.Script(source);
assert(source.includes('id=\\"alphabets\\"'));
assert(source.includes('id=\\"ch2-learn\\"'));
vm.runInContext(source.slice(source.indexOf('// All Qaida continuation')),ctx);
for(const [n,cells,questions,pages] of [[5,84,15,2],[6,54,12,2],[7,118,15,3],[8,140,15,5]]){
  const html=()=>node('foundation-'+n).innerHTML;
  ctx.openWorkbookLesson(n);
  assert.equal((html().match(/class="qn-cell"/g)||[]).length,cells);
  assert.equal((html().match(/class="qn-grid"/g)||[]).length,pages);
  assert.equal((html().match(/dir="rtl"/g)||[]).length>=pages,true);
  if(n===7){for(const letter of [...'ابتثجحخدذرزسشصضطظعغفقكلمنهوي'])for(const mark of ['ٰ','ٖ','ٗ'])assert(html().includes('aria-label="Show reading of '+letter+mark+'"'));}
  if(n===8){assert(html().indexOf('Madd: alif')<html().indexOf('Page 13'));assert(html().indexOf('Leen: fatḥah')<html().indexOf('Page 15 · Leen'));}
  ctx.qnMode(n,'exercise');ctx.qnReveal(n);assert(!html().includes('Try reading it yourself first.'));
  ctx.qnExerciseStep(n,1);assert(html().includes('Reading exercise 2 /'));ctx.qnExerciseStep(n,-1);assert(html().includes('Reading exercise 1 /'));
  ctx.qnMode(n,'quiz');ctx.qnQuizStep(n,1);assert(html().includes('Question 1 /'));
  let at=0;while(!html().includes('Quiz complete')){assert(at<20);const choices=[...html().matchAll(/onclick="qnAnswer\(\d+,\d+\)"[^>]*>([^<]*)<\/button>/g)].map(m=>m[1]);assert.equal(new Set(choices).size,choices.length);assert(choices.length>=2);ctx.qnAnswer(n,0);ctx.qnQuizStep(n,1);at++;}
  assert.equal(at,questions);assert(html().includes('Your answer:'));ctx.qnQuizStep(n,-1);assert(html().includes('qn-selected'));ctx.qnRestart(n);assert(html().includes('Question 1 /'));assert(html().includes('Choose an answer to continue.'));
}
for(const [n,total] of [[9,101],[10,48]]){
  const html=()=>node('foundation-'+n).innerHTML;
  ctx.openWorkbookLesson(n);assert(html().includes('Workbook instructions'));assert(html().includes(total+' reading entries'));
  assert.equal((html().match(/class="qw-text-cell"/g)||[]).length,total);
  assert(!/<image|<img|<svg/.test(html()));
  ctx.qwMode(n,'practice');ctx.qwPracticeStep(n,1);assert(html().includes('2 / '+total));ctx.qwPracticeStep(n,-1);assert(html().includes('1 / '+total));
  ctx.qwMode(n,'quiz');ctx.qwQuizStep(n,1);assert(html().includes('1 / 12'));
  for(let i=0;i<12;i++){ctx.qwAnswer(n,0);ctx.qwQuizStep(n,1);}
  assert(html().includes('quiz ·'));ctx.qwQuizStep(n,-1);assert(html().includes('12 / 12'));ctx.qwRestart(n);assert(html().includes('Choose an answer.'));
}
assert(!source.includes('assets/qaida/'));
const html=fs.readFileSync('index.html','utf8');assert.equal((html.match(/<!DOCTYPE html>/g)||[]).length,1);
for(const m of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g))new vm.Script(m[1]);
for(const m of html.matchAll(/<script src="([^"https:]+)"/g))assert(fs.existsSync(m[1]));
console.log('PASS: central lessons and syntax; 84 full-alphabet standing-vowel forms; lessons 9–10 with 149 Arabic text entries; RTL rows, reading quizzes, practice navigation and review/restart. No workbook images.');
