/* Qaida continuation: app lessons 5–8, workbook lessons 6–9, pages 09–16.
   Every page array is in reading order: right to left, then down. */
(() => {
  'use strict';
  const roman={ء:'ʾ',ا:'ʾ',أ:'ʾ',إ:'ʾ',ب:'b',ت:'t',ث:'th',ج:'j',ح:'ḥ',خ:'kh',د:'d',ذ:'dh',ر:'r',ز:'z',س:'s',ش:'sh',ص:'ṣ',ض:'ḍ',ط:'ṭ',ظ:'ẓ',ع:'ʿ',غ:'gh',ف:'f',ق:'q',ك:'k',ل:'l',م:'m',ن:'n',ه:'h',و:'w',ي:'y'};
  const tanween=(list)=>list.flatMap(letter=>[
    {ar:letter+'ً'+(letter==='ء'?'':'ا'),reading:roman[letter]+'an',rule:'Fatḥatān · an'},
    {ar:letter+'ٍ',reading:roman[letter]+'in',rule:'Kasratān · in'},
    {ar:letter+'ٌ',reading:roman[letter]+'un',rule:'Ḍammatān · un'}]);
  const standing=(rows)=>rows.flatMap(row=>row.map(([letter,type])=>({ar:letter+({a:'ٰ',i:'ٖ',u:'ٗ'}[type]),reading:roman[letter]+({a:'ā',i:'ī',u:'ū'}[type]),rule:({a:'Standing fatḥah · ā',i:'Standing kasrah · ī',u:'Standing ḍammah · ū'}[type])})));
  const madd=(letters)=>letters.flatMap(letter=>[
    {ar:letter+'َا',reading:roman[letter]+'ā',rule:'Madd · ā · two counts'},
    {ar:letter+'ُوْ',reading:roman[letter]+'ū',rule:'Madd · ū · two counts'},
    {ar:letter+'ِيْ',reading:roman[letter]+'ī',rule:'Madd · ī · two counts'}]);
  const leen=(letters)=>letters.flatMap(letter=>[
    {ar:letter+'َوْ',reading:roman[letter]+'aw',rule:'Leen · aw · gentle glide'},
    {ar:letter+'َيْ',reading:roman[letter]+'ay',rule:'Leen · ay · gentle glide'}]);
  const words=(rows)=>rows.map(([ar,reading])=>({ar,reading,rule:'Connect the letters with their marks; keep tanween where written.'}));
  const lessons=[
    {n:5,title:'Tanween',arabic:'التَّنْوِينُ',source:6,goal:'Recognise double vowel marks and read an, in and un without adding a written nūn.',concepts:[
      {title:'Double vowels: an · in · un',explanation:'Fatḥatān (ً) gives an, kasratān (ٍ) gives in, and ḍammatān (ٌ) gives un when joining the reading. The n sound is pronounced but no ن is written. Read each cell as a syllable, not as a letter name. The support alif in forms such as بًا does not create an ā sound.',examples:['بًا · ban','بٍ · bin','بٌ · bun']},
      {title:'Tanween and the following letter',explanation:'Do not apply ikhfa automatically to isolated tanween cells. In connected Qur’anic reading, the next letter determines the rule. Before ء ه ع ح غ خ, nūn/tanween is clear (iẓhār). Other following letters may require idghām, iqlāb or ikhfāʾ; practise these connected rules with your teacher.',examples:['مٍ · min','فٌ · fun']}
    ],pages:[{label:'09 · Supplied opening section',columns:6,items:tanween(['م','ب','و','ف','ث','ذ','ظ','ز'])},{label:'10 · Complete page',columns:6,items:tanween(['س','ص','ه','ذ','ط','ر','ن','ل','ض','ي','ش','ج','ك','ق','خ','غ','ح','ع','ه','ء'])}]},
    {n:6,title:'Reading Practice · Harakat & Tanween',arabic:'تَدْرِيبُ الْقِرَاءَةِ',source:7,goal:'Join short vowelled letters into complete reading units while preserving every mark.',concepts:[
      {title:'Before connecting letters',explanation:'First recognise the letters and short vowels, then read right to left and join the syllables smoothly. Revise Harakat and Tanween if the marks are not secure. Do not rush ahead until you can read the practice correctly.',examples:['أَ + بَ + دًا → أَبَدًا','عَ + مَ + لٌ → عَمَلٌ']},
      {title:'Reading units, not vocabulary tests',explanation:'This is a decoding lesson. Some workbook units are reading drills rather than complete everyday words. Keep a, i and u short, read an/in/un where tanween appears, and use the model reading to check the letters—not to guess a meaning.',examples:['أَمَرَ · ʾamara','عَمَلٌ · ʿamalun']}
    ],pages:[{label:'11 · Complete supplied practice',columns:5,items:words([
      ['أَبَدًا','ʾabadan'],['أَحَدٌ','ʾaḥadun'],['أَخَذَ','ʾakhadha'],['أُذُنٌ','ʾudhunun'],['أَمَرَ','ʾamara'],
      ['أَنَا','ʾanā'],['عَزَلَ','ʿazala'],['بَرَرَةٍ','bararatin'],['حَوَلٌ','ḥawalun'],['جَمَعَ','jamaʿa'],
      ['حَسَنَ','ḥasana'],['حَشَرَ','ḥashara'],['خَشِيَ','khashiya'],['خَلَقَ','khalaqa'],['خُلِقَ','khuliqa'],
      ['ذُكِرَ','dhukira'],['رَفَعَ','rafaʿa'],['رَقَبَةٍ','raqabatin'],['سُرُرٌ','sururun'],['سَفَرَةٍ','safaratin'],
      ['صُحُفًا','ṣuḥufan'],['وَسَطًا','wasaṭan'],['طِينٍ','ṭīnin'],['طَبَقًا','ṭabaqan'],['طُوًى','ṭuwan'],
      ['عَبَسَ','ʿabasa'],['عَمَلٌ','ʿamalun'],['عَلَقٍ','ʿalaqin'],['عَمَدٍ','ʿamadin'],['عِنَبًا','ʿinaban']
    ])},{label:'12 · Reading practice before Standing Vowels',columns:5,items:words([
      ['عَبَرَةٌ','ʿabaratun'],['فَعَلَ','faʿala'],['قَتَرَةٌ','qataratun'],['قُتِلَ','qutila'],['قَدَرَ','qadara'],
      ['قُرِئَ','quriʾa'],['قَسَمٌ','qasamun'],['كَبِدٍ','kabidin'],['كُتُبٌ','kutubun'],['كَسَبَ','kasaba'],
      ['كَفَرَ','kafara'],['كُفُوًا','kufuwan'],['لَبَدًا','labadan'],['لُمَزَةٍ','lumazatin'],['لَهَبٍ','lahabin'],
      ['مَسَدٍ','masadin'],['عِبَرَةٌ','ʿibaratun'],['وَجَدَ','wajada'],['وَسَقَ','wasaqa'],['وَقَبَ','waqaba'],
      ['وَلَدًا','waladan'],['وَهَبَ','wahaba'],['هُمَزَةٍ','humazatin'],['هُدًى','hudan']
    ])}]},
    {n:7,title:'Standing Vowels',arabic:'الْحَرَكَاتُ الْقَائِمَةُ',source:8,goal:'Distinguish long ā, ī and ū signs from short a, i and u.',concepts:[
      {title:'Standing fatḥah: ā',explanation:'The small upright alif (ٰ) represents a long ā. Hold it for two vowel counts—the same basic duration as natural madd. Counts follow your reading pace; they are not fixed seconds.',examples:['بَ · ba','بٰ · bā']},
      {title:'Standing kasrah: ī',explanation:'The upright mark below the letter (ٖ) represents long ī. Keep it below the whole letter; do not confuse it with ordinary short kasrah (ِ).',examples:['عِ · ʿi','عٖ · ʿī']},
      {title:'Standing ḍammah: ū',explanation:'The inverted/standing ḍammah (ٗ) represents long ū in this workbook convention. Its shape varies by script. Read a steady two-count ū, not short u; a madd vowel by itself does not require nasalisation.',examples:['هُ · hu','هٗ · hū']}
    ],pages:[{label:'12 · Opening rows',columns:6,items:standing([
      [['ب','a'],['ي','a'],['ر','a'],['م','a'],['ل','a'],['و','a']],
      [['ن','a'],['ء','a'],['ه','a'],['ع','a'],['ح','a'],['غ','a']]
    ])},{label:'13 · Continuation before Madd',columns:6,items:standing([
      [['خ','a'],['ت','a'],['ث','a'],['ج','a'],['د','a'],['ذ','a']],
      [['ر','a'],['س','a'],['ش','a'],['ص','a'],['ض','a'],['ط','a']],
      [['ظ','a'],['ف','a'],['ق','a'],['ك','i'],['ا','a'],['ه','u']],
      [['و','a'],['ه','a'],['ع','i'],['ء','a']]
    ])}]},
    {n:8,title:'Madd & Leen',arabic:'الْمَدُّ وَاللِّينُ',source:9,goal:'Read natural madd as ā/ū/ī and distinguish the soft aw/ay glides of leen.',concepts:[],pages:[
      {label:'13 · Madd opening section',concept:'madd',columns:6,items:madd(['ب','ت','ث','ح','خ','ر'])},
      {label:'14 · Complete Madd page',concept:'madd',columns:6,items:madd(['ز','ط','ظ','ف','ه','ي','ء','ج','د','ذ','س','ش','ص','ض','ع','غ','ق','ك','ل','م'])},
      {label:'15 · Madd continuation above Leen instructions',concept:'madd',columns:6,items:madd(['ن','و'])},
      {label:'15 · Leen practice',concept:'leen',columns:6,items:leen(['ت','ث','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','و','ن','ء','ب','ج','ح','خ','غ','ف','ق','ك','ل'])},
      {label:'16 · Supplied Leen continuation',concept:'leen',columns:6,items:leen(['ص','و','ه','ي'])}
    ]}
  ];
  const maddInstructions=[
    {title:'Madd: alif after fatḥah → ā',explanation:'An alif without a vowel after fatḥah lengthens a to ā: بَا = bā. Read it for two vowel counts without adding a second syllable.',examples:['بَ · ba','بَا · bā']},
    {title:'Madd: wāw sākin after ḍammah → ū',explanation:'Wāw with sukūn after ḍammah lengthens u to ū: بُوْ = bū. Do not read a separate wa or wu.',examples:['بُ · bu','بُوْ · bū']},
    {title:'Madd: yā sākin after kasrah → ī',explanation:'Yā with sukūn after kasrah lengthens i to ī: بِیْ is displayed in standard Arabic as بِيْ = bī. Natural madd is two counts, measured by your reading tempo, not by seconds.',examples:['بِ · bi','بِيْ · bī']}
  ];
  const leenInstructions=[
    {title:'Leen: fatḥah + wāw/yā sākin → aw/ay',explanation:'The leen letters are وْ and يْ when the preceding letter has fatḥah. Wāw gives aw and yā gives ay: بَوْ = baw, بَيْ = bay. Glide gently without a jerk; in these isolated drills, do not turn them into two-count ū/ī.',examples:['بُوْ · bū (madd)','بَوْ · baw (leen)','بِيْ · bī (madd)','بَيْ · bay (leen)']},
    {title:'Before practising Leen',explanation:'Look at the vowel BEFORE وْ or يْ. Ḍammah + وْ and kasrah + يْ give madd; fatḥah + either gives leen. Alif is a madd letter, not a leen letter. Lengthening when stopping on complete Qur’anic words is a separate recitation rule.',examples:['خَوْ · khaw','خَيْ · khay']}
  ];
  const byNumber=n=>lessons.find(l=>l.n===Number(n));
  const allItems=l=>l.pages.flatMap(p=>p.items.map(x=>({...x,page:p.label,concept:p.concept||null})));
  const state=new Map(lessons.map(l=>[l.n,{mode:'learn',exercise:0,reveal:false,quizAt:0,answers:[],questions:[]} ]));
  function glyph(ar){
    // Separate kasrah/kasratān/standing kasrah from the shaped letter bowl.
    return ar.split(' ').map(word=>{
      const units=word.match(/[\u0621-\u064A][\u064B-\u065F\u0670]*/g);
      if(!units)return word;
      if(!/[ٍِٖ]/.test(word))return word;
      // Only isolate marks on a single consonant, optionally with a support alif.
      if(units.length>1&&!(units.length===2&&units[1]==='ا'&&units[0].includes('ٍ')))return word;
      const mark=(word.match(/[ٍِٖ]/)||[])[0];
      if(!mark)return word;
      return `<span class="qn-below qn-${mark==='ٍ'?'double':mark==='ٖ'?'standing':'single'}" role="img" aria-label="${word}"><span aria-hidden="true">${word.replace(mark,'')}</span></span>`;
    }).join(' ');
  }
  function btn(label,action,disabled=false,extra=''){return `<button type="button" class="qn-btn ${extra}" onclick="${action}" ${disabled?'disabled':''}>${label}</button>`;}
  function conceptCards(concepts){return `<div class="qn-concepts">${concepts.map(c=>`<article class="qn-card"><h3>${c.title}</h3><p>${c.explanation}</p><div class="qn-example-row" dir="rtl">${c.examples.map(x=>`<span>${x}</span>`).join('')}</div></article>`).join('')}</div>`;}
  function pageGrid(l,p){let offset=0;for(const page of l.pages){if(page===p)break;offset+=page.items.length;}
    return `<section class="qn-card"><h3>Page ${p.label}</h3><p class="qn-caption">${p.items.length} entries · read from the right, then move to the next row.</p><div class="qn-grid" style="--columns:${p.columns}" dir="rtl">${p.items.map((x,i)=>`<button type="button" class="qn-cell" onclick="qnDetail(${l.n},${offset+i})" aria-label="Show reading of ${x.ar}"><span class="qn-glyph" lang="ar">${glyph(x.ar)}</span></button>`).join('')}</div></section>`;
  }
  function learn(l){let body=`<section class="qn-card"><h3>Before you start</h3><p>${l.goal}</p><p class="qn-caption">Follow the workbook from right to left. Standard Arabic ك، ه، ي replaces handwriting variants. Repeated entries are retained. These are reading drills, not word-meaning exercises.</p></section>`;
    if(l.n===8){body+=`<h3 class="qn-section-title">Part A · Madd</h3>${conceptCards(maddInstructions)}`+l.pages.filter(p=>p.concept==='madd').map(p=>pageGrid(l,p)).join('');body+=`<h3 class="qn-section-title">Part B · Leen</h3>${conceptCards(leenInstructions)}`+l.pages.filter(p=>p.concept==='leen').map(p=>pageGrid(l,p)).join('');}
    else body+=conceptCards(l.concepts)+l.pages.map(p=>pageGrid(l,p)).join('');
    return body;
  }
  function exercise(l){const s=state.get(l.n),items=allItems(l),item=items[s.exercise];
    return `<section class="qn-card"><h3>Reading exercise ${s.exercise+1} / ${items.length}</h3><p>${l.n===8?'First identify madd or leen, then read the syllable.':'Read the marks carefully before revealing the model reading.'}</p><p class="qn-caption">Page ${item.page}</p><div class="qn-big qn-glyph" lang="ar" dir="rtl">${glyph(item.ar)}</div>${btn(s.reveal?'Hide model reading':'Reveal model reading',`qnReveal(${l.n})`)}<div class="qn-feedback" aria-live="polite">${s.reveal?`<b>${item.reading}</b><p>${item.rule}</p>`:'Try reading it yourself first.'}</div><div class="qn-actions">${btn('Previous',`qnExerciseStep(${l.n},-1)`,s.exercise===0)}${btn('Next',`qnExerciseStep(${l.n},1)`,s.exercise===items.length-1)}</div></section>`;
  }
  function buildQuiz(l){const all=allItems(l),qs=[];
    if(l.n===5){for(const [mark,answer] of [['ً','an'],['ٍ','in'],['ٌ','un']])qs.push({prompt:'Which ending does this double vowel give?',ar:'ب'+mark,answer,options:['an','in','un'],why:'Tanween adds the pronounced n sound: '+answer+'.'});}
    if(l.n===7){for(const [mark,answer] of [['ٰ','ā'],['ٖ','ī'],['ٗ','ū']])qs.push({prompt:'Which long vowel does this standing sign give?',ar:'ب'+mark,answer,options:['ā','ī','ū'],why:'A standing vowel gives a two-count long vowel, '+answer+'.'});}
    if(l.n===8){for(const x of [all.find(x=>x.reading==='bū'),all.find(x=>x.reading==='taw'),all.find(x=>x.reading==='thay')])qs.push({prompt:'Is this syllable madd or leen?',ar:x.ar,answer:x.concept==='madd'?'Madd':'Leen',options:['Madd','Leen'],why:x.rule+'. Check the preceding vowel.'});}
    const sample=all.filter((_,i)=>i%Math.max(1,Math.floor(all.length/12))===0).slice(0,12);
    sample.forEach((item,i)=>{const alternatives=[...new Set(all.filter(x=>x.reading!==item.reading).map(x=>x.reading))];const options=[item.reading,alternatives[(i*3)%alternatives.length],alternatives[(i*3+1)%alternatives.length]];qs.push({prompt:'Choose the correct model reading.',ar:item.ar,answer:item.reading,options,why:item.rule+' Model reading: '+item.reading+'.'});});
    qs.forEach((q,i)=>{q.options=[...new Set(q.options)];const shift=(i+1)%q.options.length;q.options=q.options.slice(shift).concat(q.options.slice(0,shift));});return qs;
  }
  function quiz(l){const s=state.get(l.n),qs=s.questions;if(s.quizAt===qs.length){const score=qs.filter((q,i)=>s.answers[i]===q.answer).length;return `<section class="qn-card"><h3>Quiz complete · ${score} / ${qs.length}</h3><p>Review your answers. You can return to earlier questions and change a selection.</p>${qs.map((q,i)=>`<div class="qn-review"><span class="qn-glyph" lang="ar">${glyph(q.ar)}</span><p>${q.prompt}</p><p class="${s.answers[i]===q.answer?'qn-good':'qn-wrong'}">${s.answers[i]===q.answer?'✓ Correct':'Review'} · Your answer: ${s.answers[i]||'Not answered'}</p><p><b>${q.answer}</b> — ${q.why}</p></div>`).join('')}<div class="qn-actions">${btn('Previous question',`qnQuizStep(${l.n},-1)`)}${btn('Restart quiz',`qnRestart(${l.n})`)}</div></section>`;}
    const q=qs[s.quizAt],saved=s.answers[s.quizAt];return `<section class="qn-card"><h3>Question ${s.quizAt+1} / ${qs.length}</h3><progress max="${qs.length}" value="${s.answers.filter(x=>x!==undefined).length}" aria-label="Answered questions"></progress><p>${q.prompt}</p><div class="qn-big qn-glyph" lang="ar" dir="rtl">${glyph(q.ar)}</div><div class="qn-options">${q.options.map((o,i)=>btn(o,`qnAnswer(${l.n},${i})`,false,saved===o?'qn-selected':'')).join('')}</div><div class="qn-feedback ${saved===undefined?'':saved===q.answer?'qn-good':'qn-wrong'}" aria-live="polite">${saved===undefined?'Choose an answer to continue.':(saved===q.answer?'Correct. ':'Not quite. ')+q.why}</div><div class="qn-actions">${btn('Previous',`qnQuizStep(${l.n},-1)`,s.quizAt===0)}${btn(s.quizAt===qs.length-1?'Finish & review':'Next',`qnQuizStep(${l.n},1)`,saved===undefined)}</div></section>`;
  }
  function render(n){const l=byNumber(n),s=state.get(l.n);const next=byNumber(l.n+1);
    document.getElementById('foundation-'+l.n).innerHTML=`<header class="qn-header"><p>Arabic Foundations · Lesson ${l.n}</p><h2>${l.title}</h2><div class="arabic-text" lang="ar">${l.arabic}</div><p>Workbook Lesson ${l.source} · ${allItems(l).length} practice entries</p></header><div class="qn-modes" aria-label="Lesson sections">${['learn','exercise','quiz'].map(m=>btn({learn:'Learn',exercise:'Exercises',quiz:'Lesson Quiz'}[m],`qnMode(${l.n},'${m}')`,false,s.mode===m?'qn-selected':'')).join('')}</div>${s.mode==='learn'?learn(l):s.mode==='exercise'?exercise(l):quiz(l)}<div class="qn-actions qn-lesson-nav">${btn('Previous lesson',`openWorkbookLesson(${l.n-1})`)}${next?btn('Next: '+next.title,`openWorkbookLesson(${next.n})`):btn('Practise Madd & Leen',`qnMode(8,'exercise')`)}</div>`;
  }
  window.qnMode=(n,mode)=>{const s=state.get(n);s.mode=mode;render(n);};
  window.qnReveal=n=>{state.get(n).reveal=!state.get(n).reveal;render(n);};
  window.qnExerciseStep=(n,d)=>{const s=state.get(n);s.exercise=Math.max(0,Math.min(allItems(byNumber(n)).length-1,s.exercise+d));s.reveal=false;render(n);};
  window.qnAnswer=(n,i)=>{const s=state.get(n);s.answers[s.quizAt]=s.questions[s.quizAt].options[i];render(n);};
  window.qnQuizStep=(n,d)=>{const s=state.get(n);if(d>0&&s.answers[s.quizAt]===undefined)return;s.quizAt=Math.max(0,Math.min(s.questions.length,s.quizAt+d));render(n);};
  window.qnRestart=n=>{const s=state.get(n);s.answers=[];s.quizAt=0;render(n);};
  window.qnDetail=(n,i)=>{const item=allItems(byNumber(n))[i],dlg=document.getElementById('qn-dialog');document.getElementById('qn-dialog-body').innerHTML=`<div class="qn-big qn-glyph" lang="ar" dir="rtl">${glyph(item.ar)}</div><p class="qn-model">${item.reading}</p><p>${item.rule}</p><p class="qn-caption">Page ${item.page}</p>`;dlg.showModal();};
  const oldOpen=window.openWorkbookLesson;
  window.openWorkbookLesson=n=>{const l=byNumber(n);if(!l){oldOpen(n);if(Number(n)===4)addTanweenLink();return;}openCourseMenu('foundations');['sidebar-nav','sidebar-nav-ch2','mobile-nav','mobile-nav-ch2'].forEach(id=>document.getElementById(id).classList.add('hidden'));render(l.n);switchTab('foundation-'+l.n);document.getElementById('mobile-menu').classList.add('hidden');};
  function addTanweenLink(){const next=document.createElement('div');next.innerHTML=btn('Next: Lesson 5 · Tanween','openWorkbookLesson(5)');document.getElementById('foundation-4').append(next);}
  const oldSwitch=window.switchTab;
  window.switchTab=id=>{oldSwitch(id);document.querySelectorAll('[data-qn-lesson]').forEach(b=>{const selected=id==='foundation-'+b.dataset.qnLesson;b.classList.toggle('qn-selected',selected);b.setAttribute('aria-current',selected?'page':'false');});};
  function mount(){
    const css=document.createElement('style');css.textContent=`.qn-header{margin-bottom:28px;color:#e0f2fe}.qn-header>p:first-child{color:#f59e0b;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.08em}.qn-header h2{color:white;font-size:clamp(28px,4vw,42px);font-weight:800;margin:8px 0}.qn-header .arabic-text{font-size:30px}.qn-header p:last-child{font-size:13px;margin-top:8px}.qn-card{background:white;border:1px solid #e2e8f0;border-radius:20px;padding:clamp(16px,3vw,26px);margin:20px 0;box-shadow:0 4px 15px #0c4a6e08}.qn-card h3{font-size:20px;font-weight:700;margin-bottom:10px}.qn-card p{line-height:1.75}.qn-caption{font-size:12px;color:#64748b;margin:8px 0 14px}.qn-concepts{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(min(280px,100%),1fr))}.qn-concepts .qn-card{margin:0;border-top:3px solid #f59e0b}.qn-btn{border:1px solid #cbd5e1;border-radius:12px;padding:10px 16px;min-height:44px;background:white;font-weight:600}.qn-btn:hover{background:#f0f9ff}.qn-btn:focus-visible,.qn-cell:focus-visible{outline:3px solid #f59e0b;outline-offset:3px}.qn-btn:disabled{opacity:.4;cursor:not-allowed}.qn-selected{background:#0369a1!important;color:white!important;border-color:#0369a1!important}.qn-modes,.qn-actions{display:flex;gap:10px;flex-wrap:wrap;margin:20px 0}.qn-actions{justify-content:space-between}.qn-options{display:grid;gap:12px;margin:20px 0}.qn-grid{display:grid;grid-template-columns:repeat(var(--columns),minmax(0,1fr));grid-auto-flow:row;direction:rtl!important;gap:1px;background:#c9cbae;border:1px solid #c9cbae}.qn-cell{background:#fffef3;min-height:106px;padding:10px 2px;color:#9d174d;width:100%;text-align:center}.qn-cell:nth-child(12n+7),.qn-cell:nth-child(12n+8),.qn-cell:nth-child(12n+9),.qn-cell:nth-child(12n+10),.qn-cell:nth-child(12n+11),.qn-cell:nth-child(12n+12){color:#047857}.qn-glyph{font-family:Amiri,'Scheherazade New',serif;font-size:clamp(28px,4.8vw,49px);line-height:1.9;direction:rtl;unicode-bidi:isolate}.qn-big{font-size:64px;text-align:center;margin:20px 0}.qn-example-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}.qn-example-row>span{padding:8px 12px;background:#f0f9ff;border-radius:10px;font-family:Amiri,serif;font-size:20px}.qn-feedback{padding:14px;background:#f8fafc;border-radius:12px;min-height:52px}.qn-good{color:#065f46;background:#ecfdf5}.qn-wrong{color:#9f1239;background:#fff1f2}.qn-review{border-bottom:1px solid #e2e8f0;padding:16px 0}.qn-section-title{font-size:26px;font-weight:800;margin:34px 0 18px}.qn-below{position:relative;display:inline-block;line-height:1.55;padding-bottom:.3em;min-width:.7em;text-align:center}.qn-below:after{content:'';position:absolute;background:currentColor;bottom:.12em;left:50%;width:.28em;height:.045em;transform:translateX(-50%) rotate(-18deg)}.qn-double:before{content:'';position:absolute;background:currentColor;bottom:.22em;left:50%;width:.28em;height:.045em;transform:translateX(-50%) rotate(-18deg)}.qn-standing:after{width:.035em;height:.25em;bottom:.03em;transform:translateX(-50%)}.qn-dialog{max-width:min(92vw,540px);width:100%;border:0;border-radius:22px;padding:24px;box-shadow:0 20px 70px #0005}.qn-dialog::backdrop{background:#082f49aa}.qn-model{font-size:26px;font-weight:700;text-align:center;margin:8px 0}.qn-card progress{width:100%;accent-color:#0369a1;margin:8px 0 20px}@media(max-width:420px){.qn-cell{min-height:88px}.qn-glyph{font-size:28px}.qn-big{font-size:54px}.qn-card{padding:14px}.qn-btn{padding:10px 12px}}`;
    document.head.append(css);
    const dlg=document.createElement('dialog');dlg.id='qn-dialog';dlg.className='qn-dialog';dlg.setAttribute('aria-label','Model reading');dlg.innerHTML=`<form method="dialog" class="text-right"><button class="qn-btn">Close</button></form><div id="qn-dialog-body"></div>`;document.body.append(dlg);
    for(const l of lessons){const s=state.get(l.n);s.questions=buildQuiz(l);const section=document.createElement('section');section.id='foundation-'+l.n;section.className='tab-content';document.getElementById('foundation-'+(l.n-1)).after(section);for(const suffix of ['', '-m']){const b=document.createElement('button');b.className='w-full text-left p-3 text-slate-300 hover:bg-brand-900 rounded-xl';b.dataset.qnLesson=l.n;b.textContent=String(l.n).padStart(2,'0')+' · '+l.title;b.onclick=()=>openWorkbookLesson(l.n);document.getElementById('qaida-menu'+suffix).append(b);}render(l.n);}
    addTanweenLink();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
})();
