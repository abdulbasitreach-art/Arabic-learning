// Qaida lessons 1 onward: markup, learning logic and workbook continuation.
(() => {
 const markup = "<section id=\"alphabets\" class=\"tab-content active\">\r\n                <div class=\"mb-10 text-center md:text-left mt-8 md:mt-0\">\r\n                    <span class=\"inline-block py-1 px-3 rounded-full bg-accent-500/20 text-accent-500 font-bold text-xs uppercase tracking-widest mb-3 border border-accent-500/30\">Arabic Foundations · Lesson 1</span>\r\n                    <h2 class=\"text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 shadow-sm\">Arabic Alphabets (الحروف)</h2>\r\n                    <p class=\"text-brand-100 text-lg max-w-2xl\">Master the building blocks of Arabic. Toggle between Learning Mode (with pronunciation) and Test Mode (Arabic only). Then test your memory!</p>\r\n                </div>\r\n\r\n                <div class=\"relative z-10\">\r\n                    <!-- Controls -->\r\n                    <div class=\"glass-card rounded-2xl p-4 mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white/90\">\r\n                        <div class=\"flex items-center gap-3\">\r\n                            <span class=\"font-bold text-slate-700\">Display:</span>\r\n                            <div class=\"bg-slate-100 p-1 rounded-xl flex border border-slate-200\">\r\n                                <button id=\"btn-mode-learn\" onclick=\"setAlphaMode('learn')\" class=\"px-4 py-2 rounded-lg text-sm font-bold bg-brand-500 text-white shadow-sm transition-all\">Learn (Roman)</button>\r\n                                <button id=\"btn-mode-test\" onclick=\"setAlphaMode('test')\" class=\"px-4 py-2 rounded-lg text-sm font-bold text-slate-500 hover:text-slate-700 transition-all\">Test (Arabic Only)</button>\r\n                            </div>\r\n                        </div>\r\n                        <button onclick=\"startAlphaQuiz()\" class=\"bg-accent-500 hover:bg-accent-600 text-white font-bold py-2 px-6 rounded-xl shadow-md transition-all flex items-center gap-2\">\r\n                            <i class=\"fa-solid fa-gamepad\"></i> Play Alphabet Quiz\r\n                        </button>\r\n                    </div>\r\n\r\n                    <!-- Alphabet Grid -->\r\n                    <div id=\"alphabet-grid\" class=\"grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 mb-12\" dir=\"rtl\">\r\n                        <!-- Rendered via JS -->\r\n                    </div>\r\n\r\n                    <!-- Alphabet Quiz Section -->\r\n                    <div id=\"alpha-quiz-container\" class=\"hidden bg-slate-900 rounded-3xl p-8 shadow-2xl border-2 border-brand-500 relative overflow-hidden mt-8 mb-12\">\r\n                        <div class=\"absolute top-0 right-0 p-4\">\r\n                            <button onclick=\"closeAlphaQuiz()\" class=\"text-slate-400 hover:text-white transition w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center\"><i class=\"fa-solid fa-xmark\"></i></button>\r\n                        </div>\r\n                        <div class=\"text-center mb-8\">\r\n                            <span class=\"text-brand-400 font-bold uppercase tracking-widest text-sm\">Interactive Challenge</span>\r\n                            <h3 class=\"text-3xl font-bold text-white mt-2\">Which letter is this?</h3>\r\n                        </div>\r\n                        <div class=\"bg-slate-800 rounded-2xl p-6 text-center max-w-md mx-auto mb-8 shadow-inner border border-slate-700\">\r\n                            <p class=\"text-slate-400 mb-2 font-medium\">Find the letter matching the sound:</p>\r\n                            <p id=\"quiz-target-name\" class=\"text-5xl font-extrabold text-accent-500 font-sans tracking-wider capitalize\">Jeem</p>\r\n                        </div>\r\n                        \r\n                        <div id=\"alpha-quiz-options\" class=\"grid grid-cols-2 gap-4 max-w-md mx-auto\" dir=\"rtl\">\r\n                            <!-- Options rendered via JS -->\r\n                        </div>\r\n                        \r\n                        <div id=\"alpha-quiz-feedback\" class=\"mt-6 text-center text-lg font-bold min-h-[30px] rounded-lg py-2 max-w-md mx-auto\"></div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"mt-8 flex justify-end\">\r\n                    <button onclick=\"switchChapter(2)\" class=\"text-brand-700 font-semibold hover:text-brand-500 transition-all flex items-center gap-2\">\r\n                        Next: Foundations Lesson 2 <i class=\"fa-solid fa-arrow-right\"></i>\r\n                    </button>\r\n                </div>\r\n            </section>\n<section id=\"ch2-intro\" class=\"tab-content\">\r\n                <div class=\"mb-10 text-center md:text-left mt-8 md:mt-0\">\r\n                    <span class=\"inline-block py-1 px-3 rounded-full bg-accent-500/20 text-accent-500 font-bold text-xs uppercase tracking-widest mb-3 border border-accent-500/30\">Arabic Foundations · Lesson 2</span>\r\n                    <h2 class=\"text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 shadow-sm\">Joined Letters</h2>\r\n                    <p class=\"text-brand-100 text-lg max-w-2xl\">These are joint letters. We still read every alphabet separately — never as one English-style word.</p>\r\n                </div>\r\n\r\n                <div class=\"glass-card rounded-2xl p-6 md:p-8 bg-white mb-8\">\r\n                    <h3 class=\"text-lg font-bold text-slate-800 mb-3 flex items-center gap-2\"><i class=\"fa-solid fa-circle-info text-brand-500\"></i> How to read</h3>\r\n                    <p class=\"text-slate-600 leading-relaxed mb-4\">Look at the joined shape, then name each letter separately from right to left.</p>\r\n                    <div class=\"grid grid-cols-1 sm:grid-cols-2 gap-3\">\r\n                        <div class=\"bg-slate-50 rounded-xl p-4 border border-slate-100\">\r\n                            <p class=\"arabic-text font-arabic text-4xl text-brand-800 mb-1\" dir=\"rtl\">لا</p>\r\n                            <p class=\"text-sm font-bold text-emerald-700\">Laam, Alif</p>\r\n                            <p class=\"text-xs text-slate-500\">Not “laa” as one word</p>\r\n                        </div>\r\n                        <div class=\"bg-slate-50 rounded-xl p-4 border border-slate-100\">\r\n                            <p class=\"arabic-text font-arabic text-4xl text-brand-800 mb-1\" dir=\"rtl\">بلب</p>\r\n                            <p class=\"text-sm font-bold text-emerald-700\">Baa, Laam, Baa</p>\r\n                            <p class=\"text-xs text-slate-500\">Not “balb”</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"grid grid-cols-1 md:grid-cols-3 gap-6\">\r\n                    <div class=\"glass-card rounded-2xl p-6 bg-white\">\r\n                        <div class=\"w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-4\"><i class=\"fa-solid fa-link\"></i></div>\r\n                        <h3 class=\"text-lg font-bold text-slate-800 mb-2\">Read letter by letter</h3>\r\n                        <p class=\"text-slate-600 text-sm\">Tap a join to hear Alif, Baa, Laam… with a pause after each name.</p>\r\n                    </div>\r\n                    <div class=\"glass-card rounded-2xl p-6 bg-white\">\r\n                        <div class=\"w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-xl mb-4\"><i class=\"fa-solid fa-shapes\"></i></div>\r\n                        <h3 class=\"text-lg font-bold text-slate-800 mb-2\">Same letter, different drawing</h3>\r\n                        <p class=\"text-slate-600 text-sm\">Workbook handwriting and screen fonts look different on purpose, so you can still recognise Baa, Jeem, Kaaf, and the rest.</p>\r\n                    </div>\r\n                    <div class=\"glass-card rounded-2xl p-6 bg-white\">\r\n                        <div class=\"w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center text-xl mb-4\"><i class=\"fa-solid fa-list-check\"></i></div>\r\n                        <h3 class=\"text-lg font-bold text-slate-800 mb-2\">Practice the same way</h3>\r\n                        <p class=\"text-slate-600 text-sm\">Quizzes ask you to name the letters in order, not to pronounce a joined word.</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"mt-10 flex justify-center md:justify-end\">\r\n                    <button onclick=\"switchTab('ch2-learn')\" class=\"bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg shadow-brand-500/30 transition-all flex items-center gap-2\">\r\n                        Start Joint Letters <i class=\"fa-solid fa-arrow-right\"></i>\r\n                    </button>\r\n                </div>\r\n            </section>\n<section id=\"ch2-learn\" class=\"tab-content\">\r\n                <div class=\"mb-8 mt-8 md:mt-0\">\r\n                    <span class=\"text-accent-500 font-bold text-sm uppercase tracking-widest\">Arabic Foundations · Lesson 2</span>\r\n                    <h2 class=\"text-3xl md:text-4xl font-extrabold text-white drop-shadow-md\">Practice Joined Forms</h2>\r\n                    <p class=\"text-brand-100 mt-2\">Workbook order, including repeats. Tap a join — it opens the exact constituent letters in sequence.</p>\r\n                </div>\r\n\r\n                <div class=\"bg-white rounded-2xl p-4 mb-6 flex flex-wrap gap-2 items-center shadow-sm border border-slate-100\" id=\"ch2-letter-filters\"></div>\r\n                <div id=\"ch2-learn-grid\" class=\"mb-8 space-y-8\"></div>\r\n\r\n                <div id=\"ch2-word-detail\" class=\"hidden bg-slate-900 rounded-3xl p-6 md:p-8 text-white shadow-2xl\">\r\n                    <div class=\"flex justify-between items-start gap-4\">\r\n                        <div>\r\n                            <p class=\"text-brand-300 text-xs font-bold uppercase tracking-widest mb-2\">Joined shape — read separately</p>\r\n                            <p id=\"ch2-detail-word\" class=\"arabic-text font-arabic text-6xl md:text-7xl leading-none\" dir=\"rtl\"></p>\r\n                            <p id=\"ch2-detail-read\" class=\"text-accent-500 font-bold mt-3 text-lg\"></p>\r\n                        </div>\r\n                    </div>\r\n                    <p class=\"text-slate-400 mt-6 mb-3 font-medium\">Name each letter. Do not blend them into one word.</p>\r\n                    <div id=\"ch2-detail-letters\" class=\"flex flex-wrap gap-3\" dir=\"rtl\"></div>\r\n                </div>\r\n\r\n                <div class=\"mt-8 flex justify-end\">\r\n                    <button onclick=\"switchTab('ch2-shapes')\" class=\"text-brand-700 font-semibold hover:text-brand-500 transition-all flex items-center gap-2\">\r\n                        Next: Letter Shapes <i class=\"fa-solid fa-arrow-right\"></i>\r\n                    </button>\r\n                </div>\r\n            </section>\n<section id=\"ch2-shapes\" class=\"tab-content\">\r\n                <div class=\"mb-8 mt-8 md:mt-0\">\r\n                    <span class=\"text-accent-500 font-bold text-sm uppercase tracking-widest\">Arabic Foundations · Lesson 2 · Positional Forms</span>\r\n                    <h2 class=\"text-3xl md:text-4xl font-extrabold text-white drop-shadow-md\">Arabic Letter Shapes</h2>\r\n                    <p class=\"text-brand-100 mt-2\">Letters are arranged from Alif to Yaa. Arabic order shows the beginning form on the right and the final form on the left.</p>\r\n                </div>\r\n\r\n                <div class=\"bg-white rounded-2xl p-4 mb-5 flex flex-wrap items-center justify-between gap-3 shadow-sm border border-slate-100\">\r\n                    <div><p class=\"font-bold text-slate-800\">Shape direction</p><p class=\"text-xs text-slate-500\">Switch the four positional forms without changing alphabet order.</p></div>\r\n                    <div class=\"bg-slate-100 p-1 rounded-xl flex border border-slate-200\">\r\n                        <button id=\"shape-dir-rtl\" onclick=\"setShapeDirection('rtl')\" class=\"px-4 py-2 rounded-lg text-sm font-bold bg-brand-500 text-white\">Arabic RTL</button>\r\n                        <button id=\"shape-dir-ltr\" onclick=\"setShapeDirection('ltr')\" class=\"px-4 py-2 rounded-lg text-sm font-bold text-slate-500\">LTR practice</button>\r\n                    </div>\r\n                </div>\r\n                <div id=\"ch2-shapes-grid\" class=\"grid grid-cols-1 md:grid-cols-2 gap-4 mb-8\" dir=\"rtl\"></div>\r\n\r\n                <div class=\"bg-white rounded-2xl p-6 md:p-8 shadow-md border-t-4 border-t-accent-500\">\r\n                    <div class=\"flex items-center gap-3 mb-6\">\r\n                        <div class=\"w-10 h-10 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center\"><i class=\"fa-solid fa-pen\"></i></div>\r\n                        <h3 class=\"text-2xl font-bold text-slate-800\">Exercise: Pick the matching form</h3>\r\n                    </div>\r\n                    <div id=\"ch2-shape-quiz\"></div>\r\n                    <div class=\"pt-4 flex flex-wrap items-center gap-3\">\r\n                        <button onclick=\"previousShapeQuestion()\" class=\"border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium py-2 px-5 rounded-lg\"><i class=\"fa-solid fa-arrow-left mr-2\"></i>Previous</button>\r\n                        <button onclick=\"nextShapeQuestion()\" class=\"bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 px-5 rounded-lg\">Next <i class=\"fa-solid fa-arrow-right ml-2\"></i></button>\r\n                        <span id=\"ch2-shape-feedback\" class=\"font-bold\"></span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"mt-8 flex justify-end\">\r\n                    <button onclick=\"switchTab('ch2-identify')\" class=\"text-brand-700 font-semibold hover:text-brand-500 transition-all flex items-center gap-2\">\r\n                        Next: Identify Letters <i class=\"fa-solid fa-arrow-right\"></i>\r\n                    </button>\r\n                </div>\r\n            </section>\n<section id=\"ch2-identify\" class=\"tab-content\">\r\n                <div class=\"mb-8 mt-8 md:mt-0\">\r\n                    <span class=\"text-accent-500 font-bold text-sm uppercase tracking-widest\">Arabic Foundations · Lesson 2 · Exercise</span>\r\n                    <h2 class=\"text-3xl md:text-4xl font-extrabold text-white drop-shadow-md\">Identify Every Letter</h2>\r\n                    <p class=\"text-brand-100 mt-2\">Name the letters in order. For بلب choose Baa, then Laam, then Baa — not “balb”.</p>\r\n                </div>\r\n\r\n                <div class=\"bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100\">\r\n                    <div class=\"flex justify-between items-center mb-6\">\r\n                        <p class=\"text-sm font-bold text-slate-500 uppercase tracking-widest\">Read this join letter by letter</p>\r\n                    </div>\r\n                    <p id=\"identify-word\" class=\"arabic-text font-arabic text-7xl text-center text-brand-800 mb-8\" dir=\"rtl\"></p>\r\n                    <div id=\"identify-built\" class=\"flex justify-center gap-2 min-h-[4.5rem] mb-6 flex-wrap\" dir=\"rtl\"></div>\r\n                    <div id=\"identify-bank\" class=\"flex flex-wrap justify-center gap-3 mb-8\" dir=\"rtl\"></div>\r\n                    <div class=\"flex flex-wrap gap-3 justify-center\">\r\n                        <button onclick=\"resetIdentify()\" class=\"px-5 py-2 rounded-lg border border-slate-300 text-slate-600 font-semibold\">Clear</button>\r\n                        <button onclick=\"checkIdentify()\" class=\"px-5 py-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-semibold\">Check</button>\r\n                        <button onclick=\"previousIdentify()\" class=\"px-5 py-2 rounded-lg border border-slate-300 text-slate-700 font-semibold\"><i class=\"fa-solid fa-arrow-left mr-2\"></i>Previous</button>\r\n                        <button onclick=\"startIdentify()\" class=\"px-5 py-2 rounded-lg bg-slate-800 text-white font-semibold\">Next <i class=\"fa-solid fa-arrow-right ml-2\"></i></button>\r\n                    </div>\r\n                    <p id=\"identify-feedback\" class=\"text-center font-bold mt-5 min-h-[1.5rem]\"></p>\r\n                </div>\r\n\r\n                <div class=\"mt-8 flex justify-end\">\r\n                    <button onclick=\"switchTab('ch2-quiz')\" class=\"text-brand-700 font-semibold hover:text-brand-500 transition-all flex items-center gap-2\">\r\n                        Next: Lesson Quiz <i class=\"fa-solid fa-arrow-right\"></i>\r\n                    </button>\r\n                </div>\r\n            </section>\n<section id=\"ch2-quiz\" class=\"tab-content\">\r\n                <div class=\"mb-8 mt-8 md:mt-0\">\r\n                    <span class=\"text-accent-500 font-bold text-sm uppercase tracking-widest\">Arabic Foundations · Lesson 2 · Assessment</span>\r\n                    <h2 class=\"text-3xl md:text-4xl font-extrabold text-white drop-shadow-md\">Lesson 2 Quiz</h2>\r\n                    <p class=\"text-brand-100 mt-2\">10 questions: name the letters in order and recognise their shapes, using the same workbook sequence.</p>\r\n                </div>\r\n\r\n                <div id=\"ch2-quiz-start\" class=\"bg-white rounded-3xl p-10 text-center shadow-xl\">\r\n                    <div class=\"w-16 h-16 bg-brand-50 text-brand-500 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto\"><i class=\"fa-solid fa-clipboard-question\"></i></div>\r\n                    <h3 class=\"text-2xl font-bold text-slate-800 mb-2\">Ready?</h3>\r\n                    <p class=\"text-slate-500 mb-6\">Read joins as separate letters. Example: <span class=\"arabic-text font-arabic text-2xl\">بلب</span> is Baa, Laam, Baa.</p>\r\n                    <button onclick=\"startCh2Quiz()\" class=\"bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg\">Start Quiz</button>\r\n                </div>\r\n\r\n                <div id=\"ch2-quiz-play\" class=\"hidden bg-white rounded-3xl p-6 md:p-10 shadow-xl\">\r\n                    <div class=\"flex justify-between items-center mb-6\">\r\n                        <span id=\"ch2-quiz-progress\" class=\"text-sm font-bold text-slate-500\"></span>\r\n                        <span id=\"ch2-quiz-score\" class=\"text-sm font-bold text-brand-600\"></span>\r\n                    </div>\r\n                    <p id=\"ch2-quiz-question\" class=\"text-lg font-bold text-slate-800 mb-2\"></p>\r\n                    <p id=\"ch2-quiz-prompt\" class=\"arabic-text font-arabic text-6xl text-center text-brand-800 my-6\" dir=\"rtl\"></p>\r\n                    <div id=\"ch2-quiz-options\" class=\"grid grid-cols-1 sm:grid-cols-2 gap-3\"></div>\r\n                    <p id=\"ch2-quiz-feedback\" class=\"text-center font-bold mt-5 min-h-[1.5rem]\"></p>\r\n                    <div class=\"mt-6 flex justify-between gap-3\">\r\n                        <button id=\"ch2-quiz-prev\" onclick=\"previousCh2QuizQuestion()\" class=\"border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold py-2 px-5 rounded-xl\"><i class=\"fa-solid fa-arrow-left mr-2\"></i>Previous</button>\r\n                        <button id=\"ch2-quiz-next\" onclick=\"nextCh2QuizQuestion()\" class=\"bg-brand-500 hover:bg-brand-600 text-white font-semibold py-2 px-5 rounded-xl\">Next <i class=\"fa-solid fa-arrow-right ml-2\"></i></button>\r\n                    </div>\r\n                </div>\r\n\r\n                <div id=\"ch2-quiz-end\" class=\"hidden bg-slate-900 rounded-3xl p-10 text-center text-white shadow-xl\">\r\n                    <p class=\"text-brand-300 font-bold uppercase tracking-widest text-sm mb-2\">Quiz complete</p>\r\n                    <p id=\"ch2-quiz-final\" class=\"text-5xl font-extrabold text-accent-500 mb-4\"></p>\r\n                    <p id=\"ch2-quiz-message\" class=\"text-slate-300 mb-8\"></p>\r\n                    <div class=\"flex flex-wrap justify-center gap-3\">\r\n                        <button onclick=\"previousCh2QuizQuestion()\" class=\"border border-slate-600 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl\"><i class=\"fa-solid fa-arrow-left mr-2\"></i>Review previous</button>\r\n                        <button onclick=\"startCh2Quiz()\" class=\"bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-8 rounded-xl\">Try again</button>\r\n                    </div>\r\n                </div>\r\n            </section>";
 const host = document.querySelector('main > div.relative.z-10');
 host.insertAdjacentHTML('beforeend', markup);
})();

        const practicalLessons = [
            {n:2, icon:'fa-id-card', title:'Introductions', ar:'التَّعَارُف', goal:'Give a complete personal and professional introduction and ask the same information respectfully.',
             phrases:[
              ['مَا اسْمُكَ؟ / مَا اسْمُكِ؟','Mā-smuka? / Mā-smuki?','What is your name?','مَا (what) + اسْمُ (name) + ـكَ male / ـكِ female'],
              ['كَمْ عُمْرُكَ؟ / كَمْ عُمْرُكِ؟','Kam ʿumruka? / Kam ʿumruki?','How old are you?','كَمْ (how much) + عُمْرُ (age) + ـكَ / ـكِ (your)'],
              ['أَيْنَ تَسْكُنُ؟ / أَيْنَ تَسْكُنِينَ؟','Ayna taskunu? / Ayna taskunīna?','Where do you live?','أَيْنَ (where) + تَسْكُنُ male / تَسْكُنِينَ female'],
              ['مَا جِنْسِيَّتُكَ؟ / مَا جِنْسِيَّتُكِ؟','Mā jinsiyyatuka? / Mā jinsiyyatuki?','What is your nationality?','جِنْسِيَّة (nationality) + ـكَ / ـكِ'],
              ['مَاذَا تَعْمَلُ؟ / مَاذَا تَعْمَلِينَ؟','Mādhā taʿmalu? / Mādhā taʿmalīna?','What do you do?','تَعْمَلُ male / تَعْمَلِينَ female'] ],
             vocab:[['اِسْم','أَسْمَاء','name'],['بَلَد','بُلْدَان','country'],['جِنْسِيَّة','جِنْسِيَّات','nationality'],['مُوَظَّف / مُوَظَّفَة','مُوَظَّفُون / مُوَظَّفَات','employee (m/f)']],
             dialogue:[['Worker','السَّلَامُ عَلَيْكُمْ، اسْمِي سَارَةُ. أَعْمَلُ فِي مُنَظَّمَةٍ إِنْسَانِيَّةٍ.','As-salāmu ʿalaykum, ismī Sārah. Aʿmalu fī munaẓẓamatin insāniyyah.','Peace be upon you. My name is Sarah. I work for a humanitarian organization.'],['Resident','وَعَلَيْكُمُ السَّلَامُ، أَهْلًا وَسَهْلًا.','Wa ʿalaykumu s-salām, ahlan wa-sahlan.','And peace be upon you. Welcome.'],['Worker','مَا اسْمُكِ وَأَيْنَ تَسْكُنِينَ؟','Mā-smuki wa-ayna taskunīna?','What is your name and where do you live?'],['Resident','اسْمِي مَرْيَمُ، وَأَسْكُنُ فِي هَذَا الْمُخَيَّمِ.','Ismī Maryam, wa-askunu fī hādhā al-mukhayyam.','My name is Maryam, and I live in this camp.']]},
            {n:3,icon:'fa-user-doctor',title:'Humanitarian Roles',ar:'الْمِهَنُ الْإِنْسَانِيَّة',goal:'Describe roles, organizations, teams and sectors accurately.',phrases:[['مَا عَمَلُكَ؟ / مَا عَمَلُكِ؟','Mā ʿamaluka? / Mā ʿamaluki?','What is your job?','عَمَل (work) + ـكَ / ـكِ'],['أَعْمَلُ مُوَظَّفًا مَيْدَانِيًّا / مُوَظَّفَةً مَيْدَانِيَّةً','Aʿmalu muwaẓẓafan / muwaẓẓafatan maydāniyyah','I work as a field officer (m/f).','أَعْمَلُ (I work) + job title'],['فِي أَيِّ قِطَاعٍ تَعْمَلُ / تَعْمَلِينَ؟','Fī ayyi qiṭāʿin taʿmalu / taʿmalīna?','Which sector do you work in?','فِي أَيِّ (in which) + قِطَاع (sector)']],vocab:[['مُتَطَوِّع / مُتَطَوِّعَة','مُتَطَوِّعُون / مُتَطَوِّعَات','volunteer'],['مُتَرْجِم / مُتَرْجِمَة','مُتَرْجِمُون / مُتَرْجِمَات','interpreter'],['فَرِيق','فِرَق','team'],['قِطَاع','قِطَاعَات','sector']]},
            {n:4,icon:'fa-people-arrows',title:'Meeting a Beneficiary',ar:'مُقَابَلَةُ الْمُسْتَفِيد',goal:'Open a respectful interview, explain your role and request consent.',phrases:[['هَلْ تَسْمَحُ / تَسْمَحِينَ لِي بِبَعْضِ الْأَسْئِلَةِ؟','Hal tasmaḥu / tasmaḥīna lī bi-baʿḍi al-asʾilah?','May I ask you some questions?','هَلْ (question) + تَسْمَحُ m / تَسْمَحِينَ f'],['مَعْلُومَاتُكَ سَرِّيَّةٌ','Maʿlūmātuka sirriyyah','Your information is confidential.','مَعْلُومَات (information) + ـكَ + سَرِّيَّة (confidential)'],['مَا الَّذِي تَحْتَاجُ إِلَيْهِ؟','Mā alladhī taḥtāju ilayhi?','What do you need?','تَحْتَاجُ (you need) + إِلَيْهِ (to it)']],vocab:[['مُسْتَفِيد / مُسْتَفِيدَة','مُسْتَفِيدُون / مُسْتَفِيدَات','beneficiary'],['سُؤَال','أَسْئِلَة','question'],['مُقَابَلَة','مُقَابَلَات','interview'],['مُوَافَقَة','مُوَافَقَات','consent']]},
            {n:5,icon:'fa-clipboard-list',title:'Registration & Assessment',ar:'التَّسْجِيلُ وَالتَّقْيِيم',goal:'Collect essential household information and assess needs clearly.',phrases:[['كَمْ عَدَدُ أَفْرَادِ الْأُسْرَةِ؟','Kam ʿadadu afrādi al-usrah?','How many family members are there?','كَمْ (how many) + عَدَد (number) + أَفْرَاد (members)'],['هَلْ لَدَيْكَ وَثِيقَةُ هُوِيَّةٍ؟','Hal ladayka wathīqatu huwiyyah?','Do you have an identity document?','لَدَيْكَ (you have) + وَثِيقَة (document)'],['سَأُسَجِّلُ هَذِهِ الْمَعْلُومَاتِ','Sa-usajjilu hādhihi al-maʿlūmāt','I will record this information.','سَـ (will) + أُسَجِّلُ (I record)']],vocab:[['اِسْتِمَارَة','اِسْتِمَارَات','form'],['وَثِيقَة','وَثَائِق','document'],['حَاجَة','اِحْتِيَاجَات','need'],['أُسْرَة','أُسَر','household']]},
            {n:6,icon:'fa-box-open',title:'Essential Needs',ar:'الِاحْتِيَاجَاتُ الْأَسَاسِيَّة',goal:'Identify, prioritize and confirm urgent basic needs.',phrases:[['نَحْنُ بِحَاجَةٍ إِلَى الْمَاءِ','Naḥnu bi-ḥājatin ilā al-māʾ','We need water.','بِحَاجَةٍ إِلَى (in need of) + الْمَاء'],['مَا أَكْثَرُ شَيْءٍ تَحْتَاجُونَ إِلَيْهِ؟','Mā aktharu shayʾin taḥtājūna ilayhi?','What do you need most?','أَكْثَرُ شَيْء (the most important thing)'],['هَذِهِ حَاجَةٌ عَاجِلَةٌ','Hādhihi ḥājatun ʿājilah','This is an urgent need.','حَاجَة (need) + عَاجِلَة (urgent)']],vocab:[['حَاجَة','اِحْتِيَاجَات','need'],['غِطَاء','أَغْطِيَة','blanket'],['حَقِيبَةُ نَظَافَةٍ','حَقَائِبُ نَظَافَةٍ','hygiene kit'],['وَجْبَة','وَجَبَات','meal']]},
            {n:7,icon:'fa-kit-medical',title:'Health & Medical Support',ar:'الصِّحَّةُ وَالدَّعْمُ الطِّبِّي',goal:'Ask about symptoms, medication and urgent referral without diagnosing.',phrases:[['أَيْنَ الْأَلَمُ؟','Ayna al-alam?','Where is the pain?','أَيْنَ (where) + الْأَلَم (the pain)'],['مُنْذُ مَتَى؟','Mundhu matā?','Since when?','مُنْذُ (since) + مَتَى (when)'],['سَنُحِيلُكَ / سَنُحِيلُكِ إِلَى الطَّبِيبِ','Sanuḥīluka / sanuḥīluki ilā aṭ-ṭabīb','We will refer you to the doctor.','سَـ (will) + نُحِيلُ (we refer) + ـكَ / ـكِ']],vocab:[['مَرِيض / مَرِيضَة','مَرْضَى','patient'],['دَوَاء','أَدْوِيَة','medicine'],['عَرَض','أَعْرَاض','symptom'],['عِيَادَة','عِيَادَات','clinic']]},
            {n:8,icon:'fa-shield-heart',title:'Protection & Safeguarding',ar:'الْحِمَايَةُ وَصَوْنُ السَّلَامَة',goal:'Use safe, confidential and consent-based language for protection concerns.',phrases:[['هَلْ تَشْعُرُ / تَشْعُرِينَ بِالْأَمَانِ؟','Hal tashʿuru / tashʿurīna bil-amān?','Do you feel safe?','تَشْعُرُ m / تَشْعُرِينَ f + بِالْأَمَان'],['لَنْ نُشَارِكَ مَعْلُومَاتِكَ دُونَ إِذْنِكَ','Lan nushārika maʿlūmātika dūna idhnika','We will not share your information without permission.','لَنْ (will not) + نُشَارِكَ (we share)'],['هَلْ تُرِيدُ / تُرِيدِينَ التَّحَدُّثَ عَلَى انْفِرَادٍ؟','Hal turīdu / turīdīna at-taḥaddutha ʿalā infirād?','Would you like to speak privately?','تُرِيدُ m / تُرِيدِينَ f']],vocab:[['خَطَر','أَخْطَار','risk'],['طِفْل','أَطْفَال','child'],['إِحَالَة','إِحَالَات','referral'],['شَكْوَى','شَكَاوَى','complaint']]},
            {n:9,icon:'fa-tents',title:'Shelter & Displacement',ar:'الْمَأْوَى وَالنُّزُوح',goal:'Discuss displacement history, current shelter and damage.',phrases:[['مِنْ أَيْنَ نَزَحْتُمْ؟','Min ayna nazaḥtum?','Where were you displaced from?','نَزَحْتُمْ (you plural were displaced)'],['أَيْنَ تُقِيمُونَ الآنَ؟','Ayna tuqīmūna al-āna?','Where are you staying now?','تُقِيمُونَ (you plural stay) + الآن (now)'],['الْمَنْزِلُ مُتَضَرِّرٌ','Al-manzilu mutaḍarrir','The house is damaged.','الْمَنْزِل (house) + مُتَضَرِّر (damaged)']],vocab:[['مَنْزِل','مَنَازِل','house'],['خَيْمَة','خِيَام','tent'],['نَازِح / نَازِحَة','نَازِحُون / نَازِحَات','displaced person'],['مُخَيَّم','مُخَيَّمَات','camp']]},
            {n:10,icon:'fa-wheat-awn',title:'Food & Distribution',ar:'الْغِذَاءُ وَالتَّوْزِيع',goal:'Explain eligibility, quantities, queues and distribution procedures.',phrases:[['مَوْعِدُ التَّوْزِيعِ غَدًا','Mawʿidu at-tawzīʿi ghadan','Distribution is tomorrow.','مَوْعِد (time) + التَّوْزِيع (distribution)'],['يُرْجَى إِحْضَارُ الْبِطَاقَةِ','Yurjā iḥḍāru al-biṭāqah','Please bring the card.','يُرْجَى (please) + إِحْضَار (bringing)'],['لِكُلِّ أُسْرَةٍ حِصَّةٌ وَاحِدَةٌ','Li-kulli usratin ḥiṣṣatun wāḥidah','Each household receives one allocation.','لِكُلِّ (for each) + حِصَّة (allocation)']],vocab:[['حِصَّة','حِصَص','allocation'],['سَلَّة','سِلَال','basket'],['بِطَاقَة','بِطَاقَات','card'],['طَابُور','طَوَابِير','queue']]},
            {n:11,icon:'fa-route',title:'Directions & Field Movement',ar:'الِاتِّجَاهَاتُ وَالتَّنَقُّل',goal:'Give and understand clear directions, routes and meeting points.',phrases:[['اِذْهَبْ / اِذْهَبِي مُسْتَقِيمًا','Idhhab / idhhabī mustaqīman','Go straight (m/f).','اِذْهَبْ m / اِذْهَبِي f + مُسْتَقِيمًا'],['اِنْعَطِفْ يَمِينًا عِنْدَ الْمَدْرَسَةِ','Inʿaṭif yamīnan ʿinda al-madrasah','Turn right at the school.','اِنْعَطِفْ (turn) + يَمِينًا (right)'],['نُقْطَةُ اللِّقَاءِ أَمَامَ الْعِيَادَةِ','Nuqṭatu al-liqāʾi amāma al-ʿiyādah','The meeting point is in front of the clinic.','نُقْطَةُ اللِّقَاء (meeting point)']],vocab:[['طَرِيق','طُرُق','road'],['نُقْطَة','نِقَاط','point'],['مَرْكَز','مَرَاكِز','center'],['مَرْكَبَة','مَرْكَبَات','vehicle']]},
            {n:12,icon:'fa-calendar-days',title:'Time, Dates & Appointments',ar:'الْوَقْتُ وَالْمَوَاعِيد',goal:'Arrange, confirm and reschedule appointments accurately.',phrases:[['مَوْعِدُكَ يَوْمَ الثُّلَاثَاءِ','Mawʿiduka yawma ath-thulāthāʾ','Your appointment is Tuesday.','مَوْعِد + ـكَ (your appointment)'],['فِي السَّاعَةِ الْعَاشِرَةِ صَبَاحًا','Fī as-sāʿati al-ʿāshirati ṣabāḥan','At ten in the morning.','فِي السَّاعَة (at the hour)'],['هَلْ يُمْكِنُ تَغْيِيرُ الْمَوْعِدِ؟','Hal yumkinu taghyīru al-mawʿid?','Can the appointment be changed?','يُمْكِنُ (is possible) + تَغْيِير (changing)']],vocab:[['مَوْعِد','مَوَاعِيد','appointment'],['يَوْم','أَيَّام','day'],['أُسْبُوع','أَسَابِيع','week'],['تَارِيخ','تَوَارِيخ','date']]},
            {n:13,icon:'fa-circle-info',title:'Explaining Services',ar:'شَرْحُ الْخَدَمَات',goal:'Explain available services, eligibility, documents and referrals honestly.',phrases:[['هَذِهِ الْخِدْمَةُ مَجَّانِيَّةٌ','Hādhihi al-khidmatu majjāniyyah','This service is free.','الْخِدْمَة (service) + مَجَّانِيَّة (free)'],['يَجِبُ تَقْدِيمُ هَذِهِ الْوَثَائِقِ','Yajibu taqdīmu hādhihi al-wathāʾiq','These documents must be submitted.','يَجِبُ (must) + تَقْدِيم (submission)'],['لَا أَسْتَطِيعُ أَنْ أَعِدَكَ بِالْمُوَافَقَةِ','Lā astaṭīʿu an aʿidaka bil-muwāfaqah','I cannot promise approval.','لَا أَسْتَطِيعُ (I cannot) + أَعِدَكَ (promise you)']],vocab:[['خِدْمَة','خَدَمَات','service'],['شَرْط','شُرُوط','requirement'],['طَلَب','طَلَبَات','application'],['مُرَاجَعَة','مُرَاجَعَات','follow-up/review']]},
            {n:14,icon:'fa-comment-dots',title:'Complaints & Feedback',ar:'الشَّكَاوَى وَالْمُلَاحَظَات',goal:'Receive complaints respectfully, clarify facts and explain follow-up.',phrases:[['أَفْهَمُ أَنَّ هَذَا الْأَمْرَ مُزْعِجٌ','Afhamu anna hādhā al-amra muzʿij','I understand that this is upsetting.','أَفْهَمُ (I understand) + مُزْعِج (upsetting)'],['سَأُسَجِّلُ شَكْوَاكَ / شَكْوَاكِ','Sa-usajjilu shakwāka / shakwāki','I will record your complaint (m/f).','شَكْوَى + ـكَ / ـكِ'],['سَنَتَابِعُ الْمَوْضُوعَ وَنُبْلِغُكَ','Sanatābiʿu al-mawḍūʿa wa-nublighuka','We will follow up and inform you.','سَنَتَابِعُ (we will follow up)']],vocab:[['شَكْوَى','شَكَاوَى','complaint'],['مُلَاحَظَة','مُلَاحَظَات','feedback/note'],['مُشْكِلَة','مُشْكِلَات','problem'],['حَلّ','حُلُول','solution']]},
            {n:15,icon:'fa-triangle-exclamation',title:'Emergencies & Safety',ar:'الطَّوَارِئُ وَالسَّلَامَة',goal:'Use short, unambiguous Arabic during urgent incidents and evacuation.',phrases:[['اِبْقَ هَادِئًا / اِبْقَيْ هَادِئَةً','Ibqa hādiʾan / ibqay hādiʾatan','Stay calm (m/f).','اِبْقَ m / اِبْقَيْ f'],['غَادِرُوا الْمَكَانَ فَوْرًا','Ghādirū al-makāna fawran','Leave the area immediately.','غَادِرُوا (leave, plural) + فَوْرًا'],['اِتَّصِلُوا بِالْإِسْعَافِ','Ittaṣilū bil-isʿāf','Call the ambulance.','اِتَّصِلُوا (call, plural)']],vocab:[['حَرِيق','حَرَائِق','fire'],['فَيْضَان','فَيَضَانَات','flood'],['إِصَابَة','إِصَابَات','injury'],['مَخْرَجُ طَوَارِئ','مَخَارِجُ طَوَارِئ','emergency exit']]},
            {n:16,icon:'fa-comments',title:'Field Conversations',ar:'حِوَارَاتٌ مَيْدَانِيَّة',goal:'Combine introductions, assessment, services and closing language in realistic exchanges.',phrases:[['أَنَا مِنْ فَرِيقِ التَّسْجِيلِ','Anā min farīqi at-tasjīl','I am from the registration team.','مِنْ فَرِيق (from the team of)'],['سَأَشْرَحُ لَكَ الْخُطُوَاتِ','Sa-ashraḥu laka al-khuṭuwāt','I will explain the steps to you.','سَـ + أَشْرَحُ (I will explain)'],['شُكْرًا لِوَقْتِكَ / لِوَقْتِكِ','Shukran li-waqtika / li-waqtiki','Thank you for your time (m/f).','لِوَقْتِ + ـكَ / ـكِ']],vocab:[['حِوَار','حِوَارَات','dialogue'],['خُطْوَة','خُطُوَات','step'],['قَائِد / قَائِدَة','قَادَة','leader'],['مُجْتَمَع','مُجْتَمَعَات','community']]},
            {n:17,icon:'fa-spell-check',title:'Core Grammar for Field Arabic',ar:'الْقَوَاعِدُ الْعَمَلِيَّة',goal:'Control the grammar patterns that change meaning in field communication.',phrases:[['ـي / ـكَ / ـكِ / ـهُ / ـهَا / ـنَا','-ī / -ka / -ki / -hu / -hā / -nā','my / your m / your f / his / her / our','Attached possessive pronouns'],['هَلْ / مَا / مَنْ / أَيْنَ / مَتَى / كَمْ','hal / mā / man / ayna / matā / kam','yes-no / what / who / where / when / how many','Essential question words'],['لَا أَفْهَمُ، مِنْ فَضْلِكَ أَعِدْ','Lā afhamu, min faḍlika aʿid','I do not understand; please repeat.','لَا (not) + أَفْهَمُ (I understand)']],vocab:[['ضَمِير','ضَمَائِر','pronoun'],['فِعْل','أَفْعَال','verb'],['اِسْم','أَسْمَاء','noun'],['سُؤَال','أَسْئِلَة','question']]},
            {n:18,icon:'fa-flag-checkered',title:'Final Field Simulation',ar:'الْمُحَاكَاةُ الْمَيْدَانِيَّة',goal:'Complete a full humanitarian interaction from greeting to safe referral and closing.',phrases:[['سَأَتَأَكَّدُ مِنْ بَيَانَاتِكَ أَوَّلًا','Sa-ataʾakkadu min bayānātika awwalan','I will verify your details first.','سَـ + أَتَأَكَّدُ (I will verify)'],['الْأَوْلَوِيَّةُ لِلْحَالَاتِ الْعَاجِلَةِ','Al-awlawiyyatu lil-ḥālāti al-ʿājilah','Priority is given to urgent cases.','الْأَوْلَوِيَّة (priority) + الْحَالَات (cases)'],['سَنُحِيلُ الْحَالَةَ إِلَى الْفَرِيقِ الْمُخْتَصِّ','Sanuḥīlu al-ḥālata ilā al-farīqi al-mukhtaṣṣ','We will refer the case to the specialist team.','نُحِيلُ (we refer) + الْفَرِيق الْمُخْتَصّ']],vocab:[['حَالَة','حَالَات','case'],['أَوْلَوِيَّة','أَوْلَوِيَّات','priority'],['تَقْيِيم','تَقْيِيمَات','assessment'],['خُطَّة','خُطَط','plan']]}
        ];

        function lessonByNumber(n) { return practicalLessons.find(item => item.n === Number(n)); }

        function renderPracticalNavigation() {
            const nav = document.getElementById('arabic-menu');
            nav.innerHTML = practicalLessons.map(item => `<button onclick="openPracticalLesson(${item.n})" class="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all hover:bg-brand-900 hover:text-white text-left"><span class="w-7 text-xs font-bold text-brand-300">${String(item.n).padStart(2,'0')}</span><i class="fa-solid ${item.icon} w-4 text-center"></i><span>${item.title}</span></button>`).join('');
        }

        function renderPracticalLesson(item) {
            const phraseCards = item.phrases.map((p,i) => `<article class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100"><div class="flex items-start justify-between gap-3"><span class="text-xs font-bold text-brand-600 bg-brand-50 rounded-full px-3 py-1">${i+1}</span><p class="arabic-text text-3xl text-brand-800 font-bold text-right" dir="rtl">${p[0]}</p></div><p class="font-semibold text-slate-800 mt-4">${p[1]}</p><p class="text-brand-600 font-medium">${p[2]}</p><div class="mt-3 bg-slate-50 border border-slate-100 rounded-xl p-3 text-sm"><strong>Breakdown:</strong> ${p[3]}</div></article>`).join('');
            const vocabRows = item.vocab.map(v => `<tr><td class="p-3 arabic-text text-xl font-bold text-right">${v[0]}</td><td class="p-3 arabic-text text-xl text-right">${v[1]}</td><td class="p-3">${v[2]}</td></tr>`).join('');
            const dialogue = (item.dialogue || [['Field worker',item.phrases[0][0],item.phrases[0][1],item.phrases[0][2]],['Community member',item.phrases[1][0],item.phrases[1][1],item.phrases[1][2]]]).map((d,i)=>`<div class="flex ${i%2?'justify-start':'justify-end'}"><div class="max-w-[88%] ${i%2?'bg-slate-100 text-slate-800':'bg-brand-600 text-white'} rounded-2xl p-4 shadow-sm"><p class="text-xs font-bold uppercase opacity-70 mb-1">${d[0]}</p><p class="arabic-text text-2xl font-bold" dir="rtl">${d[1]}</p><p class="text-sm mt-1 opacity-90">${d[2]}</p><p class="text-sm mt-1 border-t border-current/20 pt-1">${d[3]}</p></div></div>`).join('');
            const prev = lessonByNumber(item.n-1), next = lessonByNumber(item.n+1);
            document.getElementById('practical-lesson-content').innerHTML = `<header class="mb-8 mt-8 md:mt-0"><span class="text-accent-500 font-bold text-sm uppercase tracking-widest">Practical Arabic · Lesson ${String(item.n).padStart(2,'0')}</span><h2 class="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md">${item.title}</h2><p class="arabic-text text-3xl text-brand-100 mt-2" dir="rtl">${item.ar}</p></header><section class="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl mb-8"><p class="text-brand-300 text-xs font-bold uppercase tracking-widest mb-2">Field outcome</p><p class="text-xl font-semibold">${item.goal}</p><div class="mt-5 flex flex-wrap gap-2 text-xs"><span class="bg-white/10 px-3 py-1 rounded-full">Male & female forms</span><span class="bg-white/10 px-3 py-1 rounded-full">Natural reading</span><span class="bg-white/10 px-3 py-1 rounded-full">Word breakdown</span><span class="bg-white/10 px-3 py-1 rounded-full">Field practice</span></div></section><h3 class="text-2xl font-bold mb-4">Essential Expressions</h3><div class="grid grid-cols-1 lg:grid-cols-2 gap-4">${phraseCards}</div><section class="mt-10 bg-white rounded-2xl shadow-md overflow-hidden"><div class="p-5 border-b"><h3 class="text-2xl font-bold">Key Vocabulary</h3><p class="text-sm text-slate-500">Singular, plural and gender-aware forms</p></div><div class="overflow-x-auto"><table class="w-full text-left"><thead class="bg-slate-100 text-sm"><tr><th class="p-3 text-right">مُفْرَد / Gender forms</th><th class="p-3 text-right">جَمْع</th><th class="p-3">Meaning</th></tr></thead><tbody class="divide-y">${vocabRows}</tbody></table></div></section><section class="mt-10"><h3 class="text-2xl font-bold mb-4">Field Dialogue</h3><div class="bg-white rounded-2xl p-5 space-y-4 shadow-md">${dialogue}</div></section><section class="mt-10 grid md:grid-cols-2 gap-5"><div class="bg-white rounded-2xl p-6 border-t-4 border-accent-500 shadow-md"><h3 class="text-xl font-bold mb-3">Practice</h3><p class="text-slate-600 mb-4">Build a two-person exchange. Change the highlighted gender ending, one detail and one need.</p><textarea class="w-full min-h-32 rounded-xl border border-slate-300 p-3 focus:ring-2 focus:ring-brand-500 outline-none" placeholder="Write the Arabic exchange here…" dir="rtl"></textarea></div><div class="bg-white rounded-2xl p-6 border-t-4 border-brand-500 shadow-md"><h3 class="text-xl font-bold mb-3">Quick Check</h3><p class="text-slate-700 mb-4">Which expression best achieves this field outcome?</p><div class="space-y-2">${item.phrases.slice(0,3).map((p,i)=>`<button onclick="checkPracticalAnswer(this,${i===0})" class="w-full text-right border rounded-xl p-3 hover:bg-slate-50 arabic-text text-xl">${p[0]}</button>`).join('')}</div><p class="lesson-feedback mt-3 min-h-6 font-bold"></p></div></section><nav class="mt-10 flex justify-between gap-3">${prev?`<button onclick="openPracticalLesson(${prev.n})" class="px-5 py-3 rounded-xl border border-slate-300 bg-white font-semibold"><i class="fa-solid fa-arrow-left mr-2"></i>${prev.title}</button>`:'<span></span>'}${next?`<button onclick="openPracticalLesson(${next.n})" class="px-5 py-3 rounded-xl bg-brand-600 text-white font-semibold">${next.title}<i class="fa-solid fa-arrow-right ml-2"></i></button>`:'<span class="px-5 py-3 rounded-xl bg-emerald-100 text-emerald-800 font-bold">Curriculum complete</span>'}</nav>`;
        }

        let currentPracticalLessonNumber = 2;
        function openPracticalLesson(n) { const item=lessonByNumber(n); if(!item)return; currentPracticalLessonNumber=Number(n); openCourseMenu('practical'); lastPracticalTab='practical-lesson'; renderPracticalLesson(item); switchTab('practical-lesson'); updatePracticalNav(); document.getElementById('mobile-menu').classList.add('hidden'); }
        function updatePracticalNav() { ['arabic-menu','arabic-menu-m'].forEach(id=>document.getElementById(id)?.querySelectorAll('button').forEach(btn=>btn.classList.toggle('active',(btn.getAttribute('onclick')||'').includes(`openPracticalLesson(${currentPracticalLessonNumber})`)))); }
        function checkPracticalAnswer(btn, correct) { const box=btn.parentElement; box.querySelectorAll('button').forEach(b=>b.classList.remove('bg-emerald-50','border-emerald-500','bg-rose-50','border-rose-500')); btn.classList.add(correct?'bg-emerald-50':'bg-rose-50',correct?'border-emerald-500':'border-rose-500'); box.nextElementSibling.textContent=correct?'Correct — this is the target expression.':'Review the first essential expression and try again.'; box.nextElementSibling.className=`lesson-feedback mt-3 min-h-6 font-bold ${correct?'text-emerald-600':'text-rose-600'}`; }

        // Setup Mobile Navigation by cloning desktop nav
        document.addEventListener('DOMContentLoaded', () => {
            renderPracticalNavigation();
            const bindMobileClose = (nav) => {
                nav.querySelectorAll('button').forEach(btn => {
                    btn.addEventListener('click', () => {
                        document.getElementById('mobile-menu').classList.add('hidden');
                    });
                });
            };
            const mobNav = document.getElementById('mobile-nav');
            const mobNav2 = document.getElementById('mobile-nav-ch2');
            const mobArabic = document.getElementById('arabic-menu-m');
            mobNav.innerHTML = document.getElementById('sidebar-nav').innerHTML;
            mobNav2.innerHTML = document.getElementById('sidebar-nav-ch2').innerHTML;
            mobArabic.innerHTML = document.getElementById('arabic-menu').innerHTML;
            bindMobileClose(mobNav);
            bindMobileClose(mobNav2);
            bindMobileClose(mobArabic);
            
            renderAlphabets();
            renderJointLesson();
            renderShapeCards();
            nextShapeQuestion();
            startIdentify();
            openPracticalLesson(2);
        });

        let currentChapter = 1;
        let lastFoundationTab = 'alphabets';
        let lastPracticalTab = 'intro';

        function setCourseRootActive(type) {
            ['foundations-root', 'foundations-root-m'].forEach(id => document.getElementById(id)?.classList.toggle('active', type === 'foundations'));
            ['practical-root', 'practical-root-m'].forEach(id => document.getElementById(id)?.classList.toggle('active', type === 'practical'));
        }

        function setCourseMenu(menuId, open) {
            const menu = document.getElementById(menuId);
            const suffix = menuId.endsWith('-m') ? '-m' : '';
            const isFoundations = menuId.startsWith('qaida');
            const chevron = document.getElementById(`${isFoundations ? 'qaida' : 'arabic'}-chevron${suffix}`);
            const button = document.querySelector(`[aria-controls="${menuId}"]`);
            menu?.classList.toggle('hidden', !open);
            if (chevron) chevron.className = `fa-solid ${open ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs`;
            button?.setAttribute('aria-expanded', String(open));
        }

        function openCourseMenu(type) {
            const foundationsOpen = type === 'foundations';
            setCourseMenu('qaida-menu', foundationsOpen);
            setCourseMenu('qaida-menu-m', foundationsOpen);
            setCourseMenu('arabic-menu', !foundationsOpen);
            setCourseMenu('arabic-menu-m', !foundationsOpen);
            setCourseRootActive(type);
        }

        function toggleQaidaMenu(mobile = false) {
            const menu = document.getElementById(mobile ? 'qaida-menu-m' : 'qaida-menu');
            const isOpen = !menu.classList.contains('hidden');
            setCourseMenu(menu.id, !isOpen);
            if (!isOpen) {
                setCourseMenu(mobile ? 'arabic-menu-m' : 'arabic-menu', false);
                setCourseRootActive('foundations');
                switchTab(lastFoundationTab);
            }
        }

        function toggleArabicMenu(mobile = false) {
            const menu = document.getElementById(mobile ? 'arabic-menu-m' : 'arabic-menu');
            const isOpen = !menu.classList.contains('hidden');
            setCourseMenu(menu.id, !isOpen);
            if (!isOpen) {
                setCourseMenu(mobile ? 'qaida-menu-m' : 'qaida-menu', false);
                setCourseRootActive('practical');
                switchTab(lastPracticalTab);
            }
        }

        function openArabicTab(tabId) {
            openCourseMenu('practical');
            switchTab(tabId);
            document.getElementById('mobile-menu').classList.add('hidden');
        }

        function switchChapter(n) {
            currentChapter = n;
            openCourseMenu('foundations');
            const ch1Nav = document.getElementById('sidebar-nav');
            const ch2Nav = document.getElementById('sidebar-nav-ch2');
            const mob1 = document.getElementById('mobile-nav');
            const mob2 = document.getElementById('mobile-nav-ch2');
            const btn1 = document.getElementById('btn-ch-1');
            const btn2 = document.getElementById('btn-ch-2');
            const btn1m = document.getElementById('btn-ch-1-m');
            const btn2m = document.getElementById('btn-ch-2-m');

            const activeBtn = 'w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold bg-brand-500 text-white shadow-sm transition-all';
            const idleBtn = 'w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-slate-400 hover:text-white hover:bg-brand-900 transition-all';

            if (n === 1) {
                ch1Nav.classList.remove('hidden');
                ch2Nav.classList.add('hidden');
                mob1.classList.remove('hidden');
                mob2.classList.add('hidden');
                btn1.className = activeBtn;
                btn2.className = idleBtn;
                if (btn1m) { btn1m.className = activeBtn; btn2m.className = idleBtn; }
                btn1.querySelector('i:last-child').className = 'fa-solid fa-chevron-down text-xs';
                btn2.querySelector('i:last-child').className = 'fa-solid fa-chevron-right text-xs';
                if (btn1m) { btn1m.querySelector('i:last-child').className = 'fa-solid fa-chevron-down text-xs'; btn2m.querySelector('i:last-child').className = 'fa-solid fa-chevron-right text-xs'; }
                switchTab('alphabets');
            } else {
                ch1Nav.classList.add('hidden');
                ch2Nav.classList.remove('hidden');
                mob1.classList.add('hidden');
                mob2.classList.remove('hidden');
                btn2.className = activeBtn;
                btn1.className = idleBtn;
                if (btn1m) { btn2m.className = activeBtn; btn1m.className = idleBtn; }
                btn2.querySelector('i:last-child').className = 'fa-solid fa-chevron-down text-xs';
                btn1.querySelector('i:last-child').className = 'fa-solid fa-chevron-right text-xs';
                if (btn1m) { btn2m.querySelector('i:last-child').className = 'fa-solid fa-chevron-down text-xs'; btn1m.querySelector('i:last-child').className = 'fa-solid fa-chevron-right text-xs'; }
                switchTab('ch2-intro');
            }
            document.getElementById('mobile-menu').classList.add('hidden');
        }

        // Tab Switching Logic
        function switchTab(tabId) {
            const foundationTabs = ['alphabets', 'ch2-intro', 'ch2-learn', 'ch2-shapes', 'ch2-identify', 'ch2-quiz', 'foundation-3', 'foundation-4'];
            if (foundationTabs.includes(tabId) || /^foundation-\d+$/.test(tabId)) lastFoundationTab = tabId;
            else lastPracticalTab = tabId;
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            // Show selected tab
            document.getElementById(tabId).classList.add('active');
            
            // Update active state in navs
            updateNavActiveState(document.getElementById('sidebar-nav'), tabId);
            updateNavActiveState(document.getElementById('sidebar-nav-ch2'), tabId);
            updateNavActiveState(document.getElementById('mobile-nav'), tabId);
            updateNavActiveState(document.getElementById('mobile-nav-ch2'), tabId);
            updateNavActiveState(document.getElementById('arabic-menu'), tabId);
            updateNavActiveState(document.getElementById('arabic-menu-m'), tabId);
            
            // Scroll to top
            document.querySelector('main').scrollTop = 0;
        }

        function updateNavActiveState(navContainer, tabId) {
            if(!navContainer) return;
            navContainer.querySelectorAll('button').forEach(btn => {
                btn.classList.remove('active', 'bg-brand-900', 'text-white', 'font-semibold');
                const oc = btn.getAttribute('onclick') || '';
                if(oc.includes(`switchTab('${tabId}')`)) {
                    btn.classList.add('active', 'text-white', 'font-semibold');
                }
            });
        }

    // --- ALPHABET LOGIC START ---
    const arabicAlphabet = [
        { ar: 'ا', name: 'Alif', roman: 'a / ā' },
        { ar: 'ب', name: 'Bāʼ', roman: 'b' },
        { ar: 'ت', name: 'Tāʼ', roman: 't' },
        { ar: 'ث', name: 'Thāʼ', roman: 'th' },
        { ar: 'ج', name: 'Jīm', roman: 'j' },
        { ar: 'ح', name: 'Ḥāʼ', roman: 'ḥ' },
        { ar: 'خ', name: 'Khāʼ', roman: 'kh' },
        { ar: 'د', name: 'Dāl', roman: 'd' },
        { ar: 'ذ', name: 'Dhāl', roman: 'dh' },
        { ar: 'ر', name: 'Rāʼ', roman: 'r' },
        { ar: 'ز', name: 'Zāy', roman: 'z' },
        { ar: 'س', name: 'Sīn', roman: 's' },
        { ar: 'ش', name: 'Shīn', roman: 'sh' },
        { ar: 'ص', name: 'Ṣād', roman: 'ṣ' },
        { ar: 'ض', name: 'Ḍād', roman: 'ḍ' },
        { ar: 'ط', name: 'Ṭāʼ', roman: 'ṭ' },
        { ar: 'ظ', name: 'Ẓāʼ', roman: 'ẓ' },
        { ar: 'ع', name: 'ʿAyn', roman: 'ʿ' },
        { ar: 'غ', name: 'Ghayn', roman: 'gh' },
        { ar: 'ف', name: 'Fāʼ', roman: 'f' },
        { ar: 'ق', name: 'Qāf', roman: 'q' },
        { ar: 'ك', name: 'Kāf', roman: 'k' },
        { ar: 'ل', name: 'Lām', roman: 'l' },
        { ar: 'م', name: 'Mīm', roman: 'm' },
        { ar: 'ن', name: 'Nūn', roman: 'n' },
        { ar: 'ه', name: 'Hāʼ', roman: 'h' },
        { ar: 'و', name: 'Wāw', roman: 'w / ū' },
        { ar: 'ي', name: 'Yāʼ', roman: 'y / ī' }
    ];

    let currentAlphaMode = 'learn';
    let currentQuizLetter = null;

    function renderAlphabets() {
        const grid = document.getElementById('alphabet-grid');
        if(!grid) return;
        grid.innerHTML = '';
        
        arabicAlphabet.forEach(letter => {
            const card = document.createElement('div');
            card.className = "bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all duration-300 hover:border-brand-300";
            
            const arText = document.createElement('span');
            arText.className = "arabic-text text-5xl text-brand-700 font-bold mb-2";
            arText.textContent = letter.ar;
            card.appendChild(arText);
            
            if (currentAlphaMode === 'learn') {
                const romText = document.createElement('span');
                romText.className = "text-sm font-bold text-slate-800 uppercase tracking-wider mt-1";
                romText.textContent = letter.name;
                
                const soundDesc = document.createElement('span');
                soundDesc.className = "text-xs font-mono text-slate-500 bg-slate-50 border border-slate-100 px-2 py-1 rounded mt-1 text-center";
                soundDesc.textContent = letter.roman;
                
                card.appendChild(romText);
                card.appendChild(soundDesc);
            }
            
            grid.appendChild(card);
        });
    }

    function setAlphaMode(mode) {
        currentAlphaMode = mode;
        const btnLearn = document.getElementById('btn-mode-learn');
        const btnTest = document.getElementById('btn-mode-test');
        
        if(mode === 'learn') {
            btnLearn.className = 'px-4 py-2 rounded-lg text-sm font-bold bg-brand-500 text-white shadow-sm transition-all';
            btnTest.className = 'px-4 py-2 rounded-lg text-sm font-bold text-slate-500 hover:text-slate-700 transition-all';
        } else {
            btnTest.className = 'px-4 py-2 rounded-lg text-sm font-bold bg-brand-500 text-white shadow-sm transition-all';
            btnLearn.className = 'px-4 py-2 rounded-lg text-sm font-bold text-slate-500 hover:text-slate-700 transition-all';
        }
        
        renderAlphabets();
    }

    function startAlphaQuiz() {
        const container = document.getElementById('alpha-quiz-container');
        container.classList.remove('hidden');
        container.scrollIntoView({behavior: "smooth", block: "center"});
        generateAlphaQuiz();
    }

    function closeAlphaQuiz() {
        document.getElementById('alpha-quiz-container').classList.add('hidden');
    }

    function generateAlphaQuiz() {
        const feedback = document.getElementById('alpha-quiz-feedback');
        feedback.textContent = '';
        feedback.className = 'mt-6 text-center text-lg font-bold min-h-[30px] rounded-lg py-2 max-w-md mx-auto';

        const shuffled = [...arabicAlphabet].sort(() => 0.5 - Math.random());
        const options = shuffled.slice(0, 4);
        currentQuizLetter = options[Math.floor(Math.random() * 4)];
        
        document.getElementById('quiz-target-name').textContent = currentQuizLetter.name;
        
        const optsContainer = document.getElementById('alpha-quiz-options');
        optsContainer.innerHTML = '';
        
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = "bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-xl py-6 arabic-text text-5xl font-bold text-brand-700 transition-all focus:outline-none focus:ring-4 focus:ring-brand-500/50 shadow-sm";
            btn.textContent = opt.ar;
            btn.onclick = () => checkAlphaAnswer(opt, btn);
            optsContainer.appendChild(btn);
        });
        
    }

    function checkAlphaAnswer(selectedLetter, btnElement) {
        const feedback = document.getElementById('alpha-quiz-feedback');
        const buttons = document.getElementById('alpha-quiz-options').querySelectorAll('button');
        buttons.forEach(b => b.disabled = true);
        
        if (selectedLetter.ar === currentQuizLetter.ar) {
            btnElement.classList.replace('border-slate-200', 'border-emerald-500');
            btnElement.classList.replace('bg-white', 'bg-emerald-50');
            btnElement.classList.replace('text-brand-700', 'text-emerald-600');
            
            feedback.textContent = '🎉 Excellent! That is correct.';
            feedback.classList.add('bg-emerald-500/20', 'text-emerald-400');
            
            setTimeout(() => {
                generateAlphaQuiz();
            }, 1500);
        } else {
            btnElement.classList.replace('border-slate-200', 'border-rose-500');
            btnElement.classList.replace('bg-white', 'bg-rose-50');
            btnElement.classList.replace('text-brand-700', 'text-rose-600');
            
            feedback.textContent = '❌ Not quite. Keep trying!';
            feedback.classList.add('bg-rose-500/20', 'text-rose-400');
            
            setTimeout(() => {
                btnElement.classList.replace('border-rose-500', 'border-slate-200');
                btnElement.classList.replace('bg-rose-50', 'bg-white');
                btnElement.classList.replace('text-rose-600', 'text-brand-700');
                feedback.textContent = '';
                feedback.className = 'mt-6 text-center text-lg font-bold min-h-[30px] rounded-lg py-2 max-w-md mx-auto';
                buttons.forEach(b => b.disabled = false);
            }, 1200);
        }
    }
    // --- ALPHABET LOGIC END ---

    // Exercise 1 Validation
    function checkEx1() {
            const q1 = document.getElementById('ex1-q1').value.trim().toLowerCase();
            const q2 = document.getElementById('ex1-q2').value.trim().toLowerCase();
            const q3 = document.getElementById('ex1-q3').value.trim().toLowerCase();
            
            let correct = 0;
            if(q1 === 'assalamu' || q1 === 'as-salamu' || q1 === 'assalam') correct++;
            if(q2 === 'haluk' || q2 === 'haluk?') correct++;
            if(q3 === 'bikhair' || q3 === 'bi-khair') correct++;
            
            const feedback = document.getElementById('ex1-feedback');
            if(correct === 3) {
                feedback.innerHTML = '<span class="text-emerald-500"><i class="fa-solid fa-check-circle"></i> Perfect! Well done.</span>';
            } else {
                feedback.innerHTML = `<span class="text-accent-600"><i class="fa-solid fa-circle-exclamation"></i> You got ${correct}/3. Keep trying! (Hint: Assalamu, haluk, bikhair)</span>`;
            }
        }

        // Exercise 2 Generator
        function generateIntro() {
            let name = document.getElementById('ex2-name').value.trim();
            let country = document.getElementById('ex2-country').value.trim();
            let city = document.getElementById('ex2-city').value.trim();
            
            if(!name) name = "Sarah";
            if(!country) country = "Canada";
            if(!city) city = "Amman";
            
            document.getElementById('ex2-result').innerHTML = `
                <p class="animate-pulse duration-75">Ismi <span class="text-brand-300 font-bold border-b border-brand-500 px-1">${name}</span>.</p>
                <p class="animate-pulse duration-150 delay-75">Ana min <span class="text-brand-300 font-bold border-b border-brand-500 px-1">${country}</span>.</p>
                <p class="animate-pulse duration-300 delay-150">A'ishu fi <span class="text-brand-300 font-bold border-b border-brand-500 px-1">${city}</span>.</p>
            `;
        }

        // Exercise 3 Multiple Choice
        function selectAnswer(qNumber, btnElement, isCorrect) {
            // Get parent block
            const block = document.getElementById(`qblock-${qNumber}`);
            // Reset all buttons in this block
            const buttons = block.querySelectorAll('button');
            buttons.forEach(b => {
                b.classList.remove('bg-emerald-50', 'border-emerald-400', 'text-emerald-700', 'bg-rose-50', 'border-rose-400', 'text-rose-700');
                // Remove icons if they exist
                const icon = b.querySelector('i');
                if(icon) icon.remove();
            });
            
            // Style selected button
            if(isCorrect) {
                btnElement.classList.add('bg-emerald-50', 'border-emerald-400', 'text-emerald-700', 'font-semibold');
                btnElement.innerHTML += ' <i class="fa-solid fa-check text-emerald-600 ml-2 float-right mt-1"></i>';
            } else {
                btnElement.classList.add('bg-rose-50', 'border-rose-400', 'text-rose-700');
                btnElement.innerHTML += ' <i class="fa-solid fa-xmark text-rose-600 ml-2 float-right mt-1"></i>';
            }
        }

        // Applied Conversation Player
        const conversationData = [
            { role: 'user', arabic: 'وعليكم السلام، أهلاً بك.', translit: 'Wa Alaikum Assalam, Ahlan bik.', eng: 'Peace be upon you too, welcome.' },
            { role: 'interlocutor', arabic: 'كيف حالك؟', translit: 'Kaifa haluk?', eng: 'How are you?' },
            { role: 'user', arabic: 'أنا بخير، الحمد لله.', translit: 'Ana bikhair, Alhamdulillah.', eng: 'I am fine, praise be to Allah.' },
            { role: 'interlocutor', arabic: 'ما اسمك؟', translit: 'Ma ismuk?', eng: 'What is your name?' },
            { role: 'user', arabic: 'اسمي جون.', translit: 'Ismi John.', eng: 'My name is John.' },
            { role: 'interlocutor', arabic: 'من أين أنت؟', translit: 'Min aina anta?', eng: 'Where are you from?' },
            { role: 'user', arabic: 'أنا من كندا.', translit: 'Ana min Canada.', eng: 'I am from Canada.' },
            { role: 'interlocutor', arabic: 'أين تعيش؟', translit: 'Aina ta\'ish?', eng: 'Where do you live?' },
            { role: 'user', arabic: 'أعيش في المخيم.', translit: 'A\'ishu fi al-mukhayyam.', eng: 'I live in the camp.' },
            { role: 'interlocutor', arabic: 'ما عملك؟', translit: 'Ma \'amalak?', eng: 'What is your job?' },
            { role: 'user', arabic: 'أعمل في المجال الإنساني.', translit: 'A\'mal fi al-majal al-insani.', eng: 'I work in the humanitarian field.' },
            { role: 'interlocutor', arabic: 'ماذا تفعل في عملك؟', translit: 'Madha taf\'alu fi \'amalik?', eng: 'What do you do in your work?' },
            { role: 'user', arabic: 'أساعد الناس.', translit: 'Usa\'idu al-nas.', eng: 'I help people.' },
            { role: 'interlocutor', arabic: 'من تساعد؟', translit: 'Man tusa\'id?', eng: 'Who do you help?' },
            { role: 'user', arabic: 'أساعد الأطفال والنساء والمحتاجين.', translit: 'Usa\'idu al-atfal wa al-nisa\' wa al-muhtajin.', eng: 'I help children, women, and people in need.' },
            { role: 'interlocutor', arabic: 'ممتاز! بارك الله فيك. 👏', translit: 'Mumtaz! Barak Allahu fik.', eng: 'Excellent! God bless you.' }
        ];

        let chatInterval;
        let chatIndex = 0;

        function autoPlayChat() {
            const container = document.getElementById('chat-container');
            if(chatIndex === 0) {
                container.innerHTML = ''; // Clear prompt
            }
            
            clearInterval(chatInterval);
            
            chatInterval = setInterval(() => {
                if (chatIndex >= conversationData.length) {
                    clearInterval(chatInterval);
                    
                    // Add replay button
                    const replayDiv = document.createElement('div');
                    replayDiv.className = "text-center mt-6 mb-4";
                    replayDiv.innerHTML = `<button onclick="chatIndex=0; autoPlayChat();" class="text-brand-500 font-semibold hover:text-brand-600 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200"><i class="fa-solid fa-rotate-right mr-2"></i> Replay Conversation</button>`;
                    container.appendChild(replayDiv);
                    container.scrollTop = container.scrollHeight;
                    return;
                }

                const msg = conversationData[chatIndex];
                const msgDiv = document.createElement('div');
                
                if (msg.role === 'user') {
                    msgDiv.className = "flex justify-end mb-4 animate-[fadeIn_0.3s_ease-out]";
                    msgDiv.innerHTML = `
                        <div class="max-w-[75%] md:max-w-[60%] chat-bubble-user rounded-2xl p-4 shadow-sm relative">
                            <p class="arabic-text text-xl font-bold mb-1 text-right" dir="rtl">${msg.arabic}</p>
                            <p class="text-xs text-brand-100 font-mono mb-1 text-right">${msg.translit}</p>
                            <p class="text-sm font-medium text-right text-brand-50 border-t border-brand-400 pt-1 mt-1">${msg.eng}</p>
                        </div>
                    `;
                } else {
                    msgDiv.className = "flex justify-start mb-4 animate-[fadeIn_0.3s_ease-out]";
                    msgDiv.innerHTML = `
                        <div class="max-w-[75%] md:max-w-[60%] chat-bubble-other rounded-2xl p-4 shadow-sm border border-slate-200 relative">
                            <p class="arabic-text text-xl font-bold mb-1 text-brand-900" dir="rtl">${msg.arabic}</p>
                            <p class="text-xs text-slate-500 font-mono mb-1">${msg.translit}</p>
                            <p class="text-sm font-medium text-slate-600 border-t border-slate-200 pt-1 mt-1">${msg.eng}</p>
                        </div>
                    `;
                }

                container.appendChild(msgDiv);
                container.scrollTop = container.scrollHeight;
                
                chatIndex++;
            }, 1500); // 1.5 second delay between messages
        }

        // Vocabulary Search Filter
        function filterVocab() {
            const input = document.getElementById('vocabSearch');
            const filter = input.value.toLowerCase();
            const table = document.getElementById('vocabTable');
            const trs = table.getElementsByTagName('tr');

            for (let i = 1; i < trs.length; i++) { // Skip header
                const tr = trs[i];
                // Skip category headers
                if(tr.children.length === 1) continue; 
                
                const arabic = tr.children[0]?.textContent || "";
                const translit = tr.children[1]?.textContent || "";
                const meaning = tr.children[2]?.textContent || "";
                
                if (arabic.toLowerCase().indexOf(filter) > -1 || 
                    translit.toLowerCase().indexOf(filter) > -1 || 
                    meaning.toLowerCase().indexOf(filter) > -1) {
                    tr.style.display = "";
                } else {
                    tr.style.display = "none";
                }
            }
        }

        // --- CHAPTER 2: JOINT LETTERS ---
        const LETTER_NAME_EN = {
            'ا':'Alif','أ':'Alif','ب':'Bāʼ','ت':'Tāʼ','ث':'Thāʼ','ج':'Jīm','ح':'Ḥāʼ','خ':'Khāʼ',
            'د':'Dāl','ذ':'Dhāl','ر':'Rāʼ','ز':'Zāy','س':'Sīn','ش':'Shīn','ص':'Ṣād','ض':'Ḍād',
            'ط':'Ṭāʼ','ظ':'Ẓāʼ','ع':'ʿAyn','غ':'Ghayn','ف':'Fāʼ','ق':'Qāf','ك':'Kāf','ک':'Kāf',
            'ل':'Lām','م':'Mīm','ن':'Nūn','ه':'Hāʼ','ہ':'Hāʼ','ھ':'Hāʼ','ة':'Tāʼ marbūṭah','ۃ':'Tāʼ marbūṭah',
            'و':'Wāw','ي':'Yāʼ','ی':'Yāʼ','ئ':'Yāʼ','ء':'Hamzah'
        };
        const LETTER_NAME_AR = {
            'ا':'ألف','أ':'ألف','ب':'باء','ت':'تاء','ث':'ثاء','ج':'جيم','ح':'حاء','خ':'خاء',
            'د':'دال','ذ':'ذال','ر':'راء','ز':'زاي','س':'سين','ش':'شين','ص':'صاد','ض':'ضاد',
            'ط':'طاء','ظ':'ظاء','ع':'عين','غ':'غين','ف':'فاء','ق':'قاف','ك':'كاف','ک':'كاف',
            'ل':'لام','م':'ميم','ن':'نون','ه':'هاء','ہ':'هاء','ھ':'هاء','ة':'تاء مربوطة',
            'ۃ':'تاء مربوطة','و':'واو','ي':'ياء','ی':'ياء','ئ':'ياء','ء':'همزة'
        };
        function letterNameEn(ch) { return LETTER_NAME_EN[ch] || ch; }
        function letterNameAr(ch) { return LETTER_NAME_AR[ch] || ch; }
        function readAloud(letters) { return letters.map(letterNameEn).join(', '); }

        function splitJointLetters(display) {
            const standardArabic = { 'ک': 'ك', 'ی': 'ي', 'ہ': 'ه', 'ھ': 'ه', 'ۃ': 'ة' };
            return [...display]
                .filter(ch => /[\u0600-\u06FF]/.test(ch))
                .map(ch => standardArabic[ch] || ch);
        }
        function jc(word) {
            const letters = splitJointLetters(word);
            return {
                word,
                letters,
                group: letters[0] || '',
                isolated: letters.length === 1,
                read: readAloud(letters)
            };
        }
        function cells(...tokens) {
            return tokens.map(t => (t ? jc(t) : null));
        }

        // Exact workbook sequence supplied for "Learn the Joins".
        // The order is authoritative: every dependent Chapter 2 activity reads from this array.
        const jointPages = [
            {
                page: '04',
                title: 'Page 04',
                rows: [
                    cells('ا', 'لا', 'با', 'لا', 'لا'),
                    cells('ل', 'لا', 'لح', 'لا', 'بلب'),
                    cells('ک', 'ک', 'کب', 'كب', 'کا'),
                    cells('کا', 'بکت', 'تكث', 'ب', 'ت'),
                    cells('ث', 'ن', 'ی', 'با', 'نا'),
                    cells('تا', 'یا', 'ثا', 'بس', 'یس'),
                    cells('نس', 'تس', 'ثس', 'ثج', 'تح')
                ]
            },
            {
                page: '05',
                title: 'Page 05',
                rows: [
                    cells('نخ', 'یح', 'بج', 'یم', 'بم'),
                    cells('نم', 'تم', 'ثم', 'بی', 'یی'),
                    cells('نی', 'تی', 'ثی', 'نبل', 'تنل'),
                    cells('بیل', 'یتل', 'ثثل', 'نبن', 'بنن'),
                    cells('تین', 'یتن', 'ثثن', 'ج', 'ح'),
                    cells('خ', 'حث', 'خب', 'جت', 'تحت'),
                    cells('یجب', 'بخت', 'ۃ', 'ہ', 'بۃ'),
                    cells('یہ', 'تہ', 'نۃ', 'ھ', 'یھب'),
                    cells('بھا', 'بہم', 'د', 'ذ', 'جد'),
                    cells('خذ', 'ر', 'ز', 'جر', 'خز')
                ]
            },
            {
                page: '06',
                title: 'Page 06',
                rows: [
                    cells('ر', 'ز', 'یر', 'تر', 'س'),
                    cells('ش', 'سل', 'شل', 'ص', 'ض'),
                    cells('ط', 'ظ', 'صب', 'طب', 'ضا'),
                    cells('ظا', 'ع', 'غ', 'ء', 'عز'),
                    cells('غر', 'صع', 'ضغ', 'بعد', 'تغذ'),
                    cells('ا', 'و', 'ی', 'ف', 'ق'),
                    cells('و', 'قو', 'فو', 'فقل', 'قفل'),
                    cells('یف', 'م', 'م', 'حم', 'لم'),
                    cells('تم', 'تمت', null, null, null)
                ]
            }
        ];

        const jointItems = jointPages.flatMap(p => p.rows.flat()).filter(Boolean);
        let currentJointItem = null;

        /*
         * Shape data is generated from letters that actually occur in jointItems.
         * This keeps Shape Changes aligned with the exact workbook sequence while
         * preserving the existing card/quiz UI.
         */
        const SHAPE_TEMPLATES = {
            'ا': { name: 'Alif', isolated: 'ا', initial: 'ا', medial: 'ـا', final: 'ـا', connecting: false },
            'ب': { name: 'Bāʼ', isolated: 'ب', initial: 'بـ', medial: 'ـبـ', final: 'ـب', connecting: true },
            'ت': { name: 'Tāʼ', isolated: 'ت', initial: 'تـ', medial: 'ـتـ', final: 'ـت', connecting: true },
            'ث': { name: 'Thāʼ', isolated: 'ث', initial: 'ثـ', medial: 'ـثـ', final: 'ـث', connecting: true },
            'ج': { name: 'Jīm', isolated: 'ج', initial: 'جـ', medial: 'ـجـ', final: 'ـج', connecting: true },
            'ح': { name: 'Ḥāʼ', isolated: 'ح', initial: 'حـ', medial: 'ـحـ', final: 'ـح', connecting: true },
            'خ': { name: 'Khāʼ', isolated: 'خ', initial: 'خـ', medial: 'ـخـ', final: 'ـخ', connecting: true },
            'د': { name: 'Dāl', isolated: 'د', initial: 'د', medial: 'ـد', final: 'ـد', connecting: false },
            'ذ': { name: 'Dhāl', isolated: 'ذ', initial: 'ذ', medial: 'ـذ', final: 'ـذ', connecting: false },
            'ر': { name: 'Rāʼ', isolated: 'ر', initial: 'ر', medial: 'ـر', final: 'ـر', connecting: false },
            'ز': { name: 'Zāy', isolated: 'ز', initial: 'ز', medial: 'ـز', final: 'ـز', connecting: false },
            'س': { name: 'Sīn', isolated: 'س', initial: 'سـ', medial: 'ـسـ', final: 'ـس', connecting: true },
            'ش': { name: 'Shīn', isolated: 'ش', initial: 'شـ', medial: 'ـشـ', final: 'ـش', connecting: true },
            'ص': { name: 'Ṣād', isolated: 'ص', initial: 'صـ', medial: 'ـصـ', final: 'ـص', connecting: true },
            'ض': { name: 'Ḍād', isolated: 'ض', initial: 'ضـ', medial: 'ـضـ', final: 'ـض', connecting: true },
            'ط': { name: 'Ṭāʼ', isolated: 'ط', initial: 'طـ', medial: 'ـطـ', final: 'ـط', connecting: true },
            'ظ': { name: 'Ẓāʼ', isolated: 'ظ', initial: 'ظـ', medial: 'ـظـ', final: 'ـظ', connecting: true },
            'ع': { name: 'ʿAyn', isolated: 'ع', initial: 'عـ', medial: 'ـعـ', final: 'ـع', connecting: true },
            'غ': { name: 'Ghayn', isolated: 'غ', initial: 'غـ', medial: 'ـغـ', final: 'ـغ', connecting: true },
            'ء': { name: 'Hamza', isolated: 'ء', initial: 'ء', medial: 'ء', final: 'ء', connecting: false },
            'ف': { name: 'Fāʼ', isolated: 'ف', initial: 'فـ', medial: 'ـفـ', final: 'ـف', connecting: true },
            'ق': { name: 'Qāf', isolated: 'ق', initial: 'قـ', medial: 'ـقـ', final: 'ـق', connecting: true },
            'ک': { name: 'Kāf', isolated: 'ک', initial: 'کـ', medial: 'ـکـ', final: 'ـک', connecting: true },
            'ك': { name: 'Kāf', isolated: 'ك', initial: 'كـ', medial: 'ـكـ', final: 'ـك', connecting: true },
            'ل': { name: 'Lām', isolated: 'ل', initial: 'لـ', medial: 'ـلـ', final: 'ـل', connecting: true },
            'م': { name: 'Mīm', isolated: 'م', initial: 'مـ', medial: 'ـمـ', final: 'ـم', connecting: true },
            'ن': { name: 'Nūn', isolated: 'ن', initial: 'نـ', medial: 'ـنـ', final: 'ـن', connecting: true },
            'ه': { name: 'Hāʼ', isolated: 'ه', initial: 'هـ', medial: 'ـهـ', final: 'ـه', connecting: true },
            'ہ': { name: 'Haa', isolated: 'ہ', initial: 'ہـ', medial: 'ـہـ', final: 'ـہ', connecting: true },
            'ھ': { name: 'Haa', isolated: 'ھ', initial: 'ھـ', medial: 'ـھـ', final: 'ـھ', connecting: true },
            'ۃ': { name: 'Taa Marbuta', isolated: 'ۃ', initial: 'ۃ', medial: 'ۃ', final: 'ۃ', connecting: false },
            'و': { name: 'Wāw', isolated: 'و', initial: 'و', medial: 'ـو', final: 'ـو', connecting: false },
            'ي': { name: 'Yāʼ', isolated: 'ي', initial: 'يـ', medial: 'ـيـ', final: 'ـي', connecting: true },
            'ی': { name: 'Yāʼ', isolated: 'ی', initial: 'یـ', medial: 'ـیـ', final: 'ـی', connecting: true }
        };

        const ARABIC_ALPHABET_ORDER = [
            'ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص',
            'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'ه', 'و', 'ي'
        ];
        const letterShapes = ARABIC_ALPHABET_ORDER
            .map(letter => SHAPE_TEMPLATES[letter] ? ({ letter, ...SHAPE_TEMPLATES[letter] }) : null)
            .filter(Boolean);

        let jointFilter = 'all';

        function renderJointCard(item) {
            const btn = document.createElement('button');
            btn.className = 'bg-amber-50 hover:bg-white border-2 border-amber-100 hover:border-brand-400 rounded-xl py-5 px-2 shadow-sm transition-all min-h-[6.5rem]';
            btn.innerHTML = `<span class="arabic-text font-arabic text-4xl text-brand-800 block">${item.word}</span>
                <span class="text-[10px] font-bold ${item.isolated ? 'text-accent-600' : 'text-slate-500'}">${item.read}</span>`;
            btn.onclick = () => showJointDetail(item);
            return btn;
        }

        function renderJointLesson() {
            const filters = document.getElementById('ch2-letter-filters');
            const grid = document.getElementById('ch2-learn-grid');
            if (!filters || !grid) return;
            const groups = ['all', ...Array.from(new Set(jointItems.map(i => i.group)))];
            filters.innerHTML = groups.map(g => {
                const label = g === 'all' ? 'All' : g;
                const active = jointFilter === g ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200';
                return `<button onclick="setJointFilter('${g}')" class="arabic-text font-arabic px-3 py-1.5 rounded-lg text-sm font-bold ${active}">${label}</button>`;
            }).join('');

            grid.innerHTML = '';
            if (jointFilter === 'all') {
                jointPages.forEach(page => {
                    const wrap = document.createElement('div');
                    wrap.innerHTML = `<p class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">${page.title} · ${page.rows.flat().filter(Boolean).length} cells</p>`;
                    const pageGrid = document.createElement('div');
                    pageGrid.className = 'grid grid-cols-5 gap-2 sm:gap-3';
                    pageGrid.dir = 'rtl';
                    page.rows.forEach(row => {
                        row.forEach(item => {
                            if (!item) {
                                const spacer = document.createElement('div');
                                pageGrid.appendChild(spacer);
                                return;
                            }
                            pageGrid.appendChild(renderJointCard(item));
                        });
                    });
                    wrap.appendChild(pageGrid);
                    grid.appendChild(wrap);
                });
            } else {
                const items = jointItems.filter(i => i.group === jointFilter);
                const pageGrid = document.createElement('div');
                pageGrid.className = 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3';
                pageGrid.dir = 'rtl';
                items.forEach(item => pageGrid.appendChild(renderJointCard(item)));
                grid.appendChild(pageGrid);
            }
        }

        function setJointFilter(g) {
            jointFilter = g;
            renderJointLesson();
        }

        function showJointDetail(item) {
            currentJointItem = item;
            const box = document.getElementById('ch2-word-detail');
            box.classList.remove('hidden');
            document.getElementById('ch2-detail-word').textContent = item.word;
            const row = document.getElementById('ch2-detail-letters');
            row.innerHTML = item.letters.map((ltr, i) => `
                <div class="joint-letter-chip bg-slate-800 border border-slate-600 rounded-2xl px-5 py-3 text-center min-w-[4.5rem]">
                    <p class="arabic-text font-arabic text-4xl text-accent-500">${ltr}</p>
                    <p class="text-[10px] text-slate-400 mt-1">${i + 1}</p>
                </div>
            `).join('') + (item.note ? `<p class="w-full text-brand-300 text-sm mt-2">${item.note}</p>` : '');
            box.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        let shapeDirection = 'rtl';

        function setShapeDirection(direction) {
            shapeDirection = direction;
            document.getElementById('shape-dir-rtl').className = direction === 'rtl'
                ? 'px-4 py-2 rounded-lg text-sm font-bold bg-brand-500 text-white'
                : 'px-4 py-2 rounded-lg text-sm font-bold text-slate-500';
            document.getElementById('shape-dir-ltr').className = direction === 'ltr'
                ? 'px-4 py-2 rounded-lg text-sm font-bold bg-brand-500 text-white'
                : 'px-4 py-2 rounded-lg text-sm font-bold text-slate-500';
            renderShapeCards();
        }

        function renderShapeCards() {
            const grid = document.getElementById('ch2-shapes-grid');
            if (!grid) return;
            grid.innerHTML = letterShapes.map(s => `
                <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100" dir="ltr">
                    <div class="flex justify-between items-center mb-3">
                        <h4 class="font-bold text-slate-800">${s.name} <span class="arabic-text font-arabic text-2xl text-brand-700">${s.letter}</span></h4>
                        <span class="text-[10px] font-bold uppercase tracking-wider ${s.connecting ? 'text-emerald-600' : 'text-amber-600'}">${s.connecting ? 'Connects both ways' : 'Does not connect after'}</span>
                    </div>
                    <div class="shape-form-row grid grid-cols-4 gap-2 text-center" dir="${shapeDirection}">
                        <div class="bg-slate-50 rounded-lg py-3"><p class="arabic-text font-arabic text-3xl">${s.isolated}</p><p class="text-[10px] text-slate-500 mt-1"><span class="arabic-text">منفصل</span><br>Isolated</p></div>
                        <div class="bg-slate-50 rounded-lg py-3"><p class="arabic-text font-arabic text-3xl">${s.initial}</p><p class="text-[10px] text-slate-500 mt-1"><span class="arabic-text">أول</span><br>Initial</p></div>
                        <div class="bg-slate-50 rounded-lg py-3"><p class="arabic-text font-arabic text-3xl">${s.medial}</p><p class="text-[10px] text-slate-500 mt-1"><span class="arabic-text">وسط</span><br>Medial</p></div>
                        <div class="bg-slate-50 rounded-lg py-3"><p class="arabic-text font-arabic text-3xl">${s.final}</p><p class="text-[10px] text-slate-500 mt-1"><span class="arabic-text">آخر</span><br>Final</p></div>
                    </div>
                </div>
            `).join('');
        }

        let currentShapeQ = null;
        let shapeQuestionIndex = -1;
        function nextShapeQuestion(direction = 1) {
            const host = document.getElementById('ch2-shape-quiz');
            const feedback = document.getElementById('ch2-shape-feedback');
            if (!host) return;
            if (feedback) feedback.textContent = '';
            shapeQuestionIndex = (shapeQuestionIndex + direction + letterShapes.length) % letterShapes.length;
            const s = letterShapes[shapeQuestionIndex];
            const forms = [
                { key: 'isolated', label: 'Isolated', value: s.isolated },
                { key: 'initial', label: 'Initial', value: s.initial },
                { key: 'medial', label: 'Medial', value: s.medial },
                { key: 'final', label: 'Final', value: s.final }
            ];
            const groupedForms = Object.values(forms.reduce((groups, form) => {
                if (!groups[form.value]) groups[form.value] = { key: form.key, label: form.label, value: form.value };
                else {
                    groups[form.value].key += `-${form.key}`;
                    groups[form.value].label += ` / ${form.label}`;
                }
                return groups;
            }, {}));
            const target = groupedForms[shapeQuestionIndex % groupedForms.length];
            currentShapeQ = { ...s, target };
            const shuffled = [...groupedForms].sort((a, b) => a.key.localeCompare(b.key));
            host.innerHTML = `
                <p class="font-medium text-slate-700 mb-4">Select the <strong>${target.label}</strong> shape of <span class="arabic-text font-arabic text-3xl text-brand-700">${s.letter}</span> (${s.name}). Identical forms are grouped together.</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3" dir="rtl">
                    ${shuffled.map(f => `<button onclick="checkShapeForm('${f.key}', this)" class="border-2 border-slate-200 hover:border-brand-400 rounded-xl py-6 arabic-text font-arabic text-4xl text-brand-800 bg-white">${f.value}</button>`).join('')}
                </div>
            `;
        }

        function previousShapeQuestion() {
            nextShapeQuestion(-1);
        }

        function checkShapeForm(key, btn) {
            const feedback = document.getElementById('ch2-shape-feedback');
            const host = document.getElementById('ch2-shape-quiz');
            host.querySelectorAll('button').forEach(b => b.disabled = true);
            if (key === currentShapeQ.target.key) {
                btn.classList.add('border-emerald-500', 'bg-emerald-50');
                feedback.innerHTML = '<span class="text-emerald-600"><i class="fa-solid fa-check-circle"></i> Correct!</span>';
            } else {
                btn.classList.add('border-rose-500', 'bg-rose-50');
                feedback.innerHTML = `<span class="text-rose-600">The ${currentShapeQ.target.label} form is <span class="arabic-text font-arabic text-2xl">${currentShapeQ.target.value}</span></span>`;
            }
        }

        let identifyTarget = null;
        let identifyPicked = [];
        let identifyIndex = -1;

        function startIdentify(direction = 1) {
            const joined = jointItems.filter(i => i.letters.length > 1);
            identifyIndex = (identifyIndex + direction + joined.length) % joined.length;
            identifyTarget = joined[identifyIndex];
            identifyPicked = [];
            document.getElementById('identify-word').textContent = identifyTarget.word;
            document.getElementById('identify-feedback').textContent = '';
            renderIdentifyBuilt();
            const availableLetters = [...new Set(jointItems.flatMap(item => item.letters))];
            const distractors = availableLetters
                .filter(l => !identifyTarget.letters.includes(l))
                .sort(() => 0.5 - Math.random())
                .slice(0, 4);
            const bank = [...identifyTarget.letters, ...distractors].sort(() => 0.5 - Math.random());
            const bankEl = document.getElementById('identify-bank');
            bankEl.innerHTML = '';
            bank.forEach(l => {
                const b = document.createElement('button');
                b.className = 'w-14 h-14 rounded-xl border-2 border-slate-200 bg-white arabic-text font-arabic text-3xl text-brand-800 hover:border-brand-400';
                b.textContent = l;
                b.onclick = () => {
                    identifyPicked.push(l);
                    renderIdentifyBuilt();
                };
                bankEl.appendChild(b);
            });
        }

        function previousIdentify() {
            startIdentify(-1);
        }

        function renderIdentifyBuilt() {
            const el = document.getElementById('identify-built');
            if (!identifyPicked.length) {
                el.innerHTML = '<p class="text-slate-400 text-sm">Tap letters below…</p>';
                return;
            }
            el.innerHTML = identifyPicked.map(l => `<span class="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-50 border border-brand-200 arabic-text font-arabic text-2xl text-brand-800">${l}</span>`).join('<span class="text-slate-300 self-center">+</span>');
        }

        function resetIdentify() {
            identifyPicked = [];
            renderIdentifyBuilt();
            document.getElementById('identify-feedback').textContent = '';
        }

        function checkIdentify() {
            const fb = document.getElementById('identify-feedback');
            const ok = identifyPicked.length === identifyTarget.letters.length &&
                identifyPicked.every((l, i) => l === identifyTarget.letters[i]);
            if (ok) {
                fb.innerHTML = '<span class="text-emerald-600"><i class="fa-solid fa-check-circle"></i> Perfect — those letters join to make this word.</span>';
            } else {
                fb.innerHTML = `<span class="text-accent-600">Not quite. Answer: ${identifyTarget.letters.join(' + ')}</span>`;
            }
        }

        let ch2QuizIndex = 0;
        let ch2QuizScore = 0;
        let ch2QuizSet = [];
        let ch2QuizAnswers = [];

        function buildCh2Quiz() {
            const joined = jointItems.filter(i => i.letters.length > 1);
            const qs = [];
            const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
            const uniqueJoined = [...new Map(joined.map(item => [item.word + '|' + item.letters.join(''), item])).values()];

            // Split questions are sampled only from the new sequential dataset.
            const splitPool = [...uniqueJoined].sort(() => 0.5 - Math.random()).slice(0, 6);
            for (const item of splitPool) {
                const wrongPool = uniqueJoined.filter(w =>
                    w.word !== item.word || w.letters.join('') !== item.letters.join('')
                );
                const wrong = wrongPool.length ? pick(wrongPool) : item;
                const options = [
                    { text: item.letters.join(' + '), correct: true },
                    { text: [...item.letters].reverse().join(' + '), correct: false },
                    { text: wrong.letters.join(' + '), correct: false },
                    { text: item.letters.slice(0, -1).join(' + ') || item.letters[0], correct: false }
                ].filter((o, idx, a) => a.findIndex(x => x.text === o.text) === idx);

                // If a malformed/duplicate option set occurs, keep the question valid.
                if (!options.some(o => o.correct)) continue;
                qs.push({
                    type: 'split',
                    question: 'Which letters make this join?',
                    prompt: item.word,
                    options
                });
            }

            // Shape questions use unique letters in Alif-to-Yaa order data.
            const shapePool = [...letterShapes].sort(() => 0.5 - Math.random()).slice(0, 3);
            for (const s of shapePool) {
                const forms = [
                    { key: 'Isolated', value: s.isolated },
                    { key: 'Initial', value: s.initial },
                    { key: 'Medial', value: s.medial },
                    { key: 'Final', value: s.final }
                ];
                const groupedForms = Object.values(forms.reduce((groups, form) => {
                    if (!groups[form.value]) groups[form.value] = { key: form.key, value: form.value };
                    else groups[form.value].key += ` / ${form.key}`;
                    return groups;
                }, {}));
                const t = pick(groupedForms);
                qs.push({
                    type: 'shape',
                    question: `Which is the ${t.key.toLowerCase()} form of ${s.name}?`,
                    prompt: s.letter,
                    options: groupedForms.map(f => ({
                        text: f.value,
                        correct: f.value === t.value
                    }))
                });
            }

            // Count question also comes directly from the new dataset.
            if (joined.length) {
                const wordQ = pick(joined.filter(w => w.letters.length >= 3).length
                    ? joined.filter(w => w.letters.length >= 3)
                    : joined);
                qs.push({
                    type: 'count',
                    question: 'How many letters are joined in this item?',
                    prompt: wordQ.word,
                    options: [1, 2, 3, 4, 5].map(n => ({
                        text: String(n),
                        correct: n === wordQ.letters.length
                    }))
                });
            }

            // Always return up to 10 valid questions, preserving dataset alignment.
            return qs.sort(() => 0.5 - Math.random()).slice(0, 10);
        }

        function startCh2Quiz() {
            ch2QuizIndex = 0;
            ch2QuizScore = 0;
            ch2QuizSet = buildCh2Quiz();
            ch2QuizAnswers = new Array(ch2QuizSet.length).fill(null);
            document.getElementById('ch2-quiz-start').classList.add('hidden');
            document.getElementById('ch2-quiz-end').classList.add('hidden');
            document.getElementById('ch2-quiz-play').classList.remove('hidden');
            renderCh2QuizQuestion();
        }

        function renderCh2QuizQuestion() {
            const q = ch2QuizSet[ch2QuizIndex];
            document.getElementById('ch2-quiz-progress').textContent = `Question ${ch2QuizIndex + 1} of ${ch2QuizSet.length}`;
            document.getElementById('ch2-quiz-score').textContent = `Score: ${ch2QuizScore}`;
            document.getElementById('ch2-quiz-question').textContent = q.question;
            document.getElementById('ch2-quiz-prompt').textContent = q.prompt || '';
            const savedAnswer = ch2QuizAnswers[ch2QuizIndex];
            const feedback = document.getElementById('ch2-quiz-feedback');
            feedback.innerHTML = savedAnswer === null ? '' : (q.options[savedAnswer].correct
                ? '<span class="text-emerald-600">Correct!</span>'
                : '<span class="text-rose-600">Not quite. The correct answer is highlighted.</span>');
            const opts = document.getElementById('ch2-quiz-options');
            opts.innerHTML = '';
            q.options.forEach((opt, optionIndex) => {
                const btn = document.createElement('button');
                const isArabic = /[\u0600-\u06FF]/.test(opt.text);
                btn.className = `text-left px-4 py-3 border-2 border-slate-200 rounded-xl hover:bg-slate-50 ${isArabic ? 'arabic-text font-arabic text-2xl text-right' : ''}`;
                btn.textContent = opt.text;
                if (savedAnswer !== null && opt.correct) btn.classList.add('border-emerald-500', 'bg-emerald-50', 'text-emerald-700');
                if (savedAnswer === optionIndex && !opt.correct) btn.classList.add('border-rose-500', 'bg-rose-50', 'text-rose-700');
                btn.onclick = () => answerCh2Quiz(optionIndex);
                opts.appendChild(btn);
            });
            document.getElementById('ch2-quiz-prev').disabled = ch2QuizIndex === 0;
            document.getElementById('ch2-quiz-prev').classList.toggle('opacity-40', ch2QuizIndex === 0);
            document.getElementById('ch2-quiz-next').innerHTML = ch2QuizIndex === ch2QuizSet.length - 1
                ? 'Finish <i class="fa-solid fa-flag-checkered ml-2"></i>'
                : 'Next <i class="fa-solid fa-arrow-right ml-2"></i>';
        }

        function answerCh2Quiz(optionIndex) {
            ch2QuizAnswers[ch2QuizIndex] = optionIndex;
            ch2QuizScore = ch2QuizAnswers.reduce((score, answer, index) =>
                score + (answer !== null && ch2QuizSet[index].options[answer].correct ? 1 : 0), 0);
            renderCh2QuizQuestion();
        }

        function previousCh2QuizQuestion() {
            document.getElementById('ch2-quiz-end').classList.add('hidden');
            document.getElementById('ch2-quiz-play').classList.remove('hidden');
            if (ch2QuizIndex > 0) ch2QuizIndex--;
            renderCh2QuizQuestion();
        }

        function nextCh2QuizQuestion() {
            if (ch2QuizAnswers[ch2QuizIndex] === null) {
                document.getElementById('ch2-quiz-feedback').innerHTML = '<span class="text-amber-600">Choose an answer before continuing.</span>';
                return;
            }
            if (ch2QuizIndex < ch2QuizSet.length - 1) {
                ch2QuizIndex++;
                renderCh2QuizQuestion();
                return;
            }
            document.getElementById('ch2-quiz-play').classList.add('hidden');
            document.getElementById('ch2-quiz-end').classList.remove('hidden');
            document.getElementById('ch2-quiz-final').textContent = `${ch2QuizScore} / ${ch2QuizSet.length}`;
            const msg = ch2QuizScore >= 8 ? 'Excellent joining skills!' : ch2QuizScore >= 5 ? 'Good work - review the words you missed.' : 'Keep practicing the joined forms.';
            document.getElementById('ch2-quiz-message').textContent = msg;
        }
    
// All Qaida continuation lessons belong in this file.
// Future workbook entries must preserve supplied text and reading order.
(() => {
  const mu=['الٓمٓ','الٓمٓصٓ','الٓر','الٓمٓر','كٓهيعٓصٓ','طه','طسٓمٓ','طسٓ','يسٓ','صٓ','حمٓ','حمٓ عٓسٓقٓ','قٓ','نٓ'];
  const names={ا:'Alif',ل:'Lām',م:'Mīm',ص:'Ṣād',ر:'Rā',ك:'Kāf',ه:'Hā',ي:'Yā',ع:'ʿAyn',ط:'Ṭā',س:'Sīn',ح:'Ḥā',ق:'Qāf',ن:'Nūn'};
  const marks=['َ','ِ','ُ'],sounds=['a','i','u'];
  const letters=['أ','ه','ع','ح','غ','خ','ق','ك','ج','ش','ي','ض','ل','ن','ر','ط','د','ت','ص','س','ز','ظ','ذ','ث','ف','و','ب','م'];
  const roman=['ʾ','h','ʿ','ḥ','gh','kh','q','k','j','sh','y','ḍ','l','n','r','ṭ','d','t','ṣ','s','z','ẓ','dh','th','f','w','b','m'];
  const items={3:mu.map(ar=>({ar,answer:[...ar].filter(x=>names[x]).map(x=>names[x]).join(' · ')})),4:letters.flatMap((l,j)=>marks.map((m,i)=>({ar:(l==='أ'&&i===1?'إ':l)+m,answer:roman[j]+sounds[i]})))};
  const state={3:{mode:'learn',index:0,answers:[]},4:{mode:'learn',index:0,answers:[]}};
  const title={3:'Muqattaʿat Letters',4:'Harakat · Short Vowels'};
  function glyph(ar){return ar.includes('ِ')?`<span class="wb-kasrah" role="img" aria-label="${ar}"><span aria-hidden="true">${ar.replace('ِ','')}</span></span>`:ar;}
  const css=document.createElement('style');css.textContent='.wb-grid{display:grid;direction:rtl!important;gap:1px;background:#cbd5e1;grid-template-columns:repeat(6,minmax(0,1fr))}.wb-grid.mu{grid-template-columns:repeat(4,minmax(0,1fr))}.wb-cell{background:#fffef3;padding:18px 4px;text-align:center;color:#9d174d;min-height:110px}.wb-ar{font-family:Amiri,"Scheherazade New",serif;font-size:48px;line-height:1.9;direction:rtl}.wb-kasrah{display:inline-block;position:relative;line-height:1.55;padding-bottom:.25em;min-width:.65em}.wb-kasrah:after{content:"";position:absolute;width:.28em;height:.045em;background:currentColor;bottom:.1em;left:50%;transform:translateX(-50%) rotate(-18deg)}.wb-box{background:white;border-radius:20px;padding:24px;margin:20px 0}.wb-btn{border:1px solid #cbd5e1;padding:12px 16px;border-radius:12px;margin:4px;background:white}.wb-btn:disabled{opacity:.4}.wb-btn:focus-visible{outline:3px solid #f59e0b}.wb-correct{color:#047857}.wb-wrong{color:#be123c}.wb-actions{display:flex;direction:ltr;justify-content:space-between;flex-wrap:wrap}@media(max-width:420px){.wb-ar{font-size:32px}.wb-cell{min-height:85px}}';document.head.append(css);
  function button(label,action){return `<button type="button" class="wb-btn" onclick="${action}">${label}</button>`;}
  function render(n){const s=state[n],all=items[n],item=all[s.index];const score=s.answers.reduce((a,x,i)=>a+(x===all[i].answer?1:0),0);
    let body='';
    if(s.mode==='learn')body=`<p>Read from the right. ${n===3?'Name each letter separately; madd signs follow the workbook.':'Fatḥah = a, kasrah = i, ḍammah = u. Keep each vowel short. Kasrah is shown below the entire letter.'}</p><div class="wb-grid ${n===3?'mu':''}" dir="rtl">${all.map((x,i)=>`<button class="wb-cell" style="${n===3&&(i===4||i===11)?'grid-column:span 2':''}" onclick="workbookSelect(${n},${i})"><span class="wb-ar">${glyph(x.ar)}</span></button>`).join('')}</div><p id="wb-detail-${n}" class="mt-4">Select a cell to reveal the reading.</p>`;
    else if(s.index===all.length)body=`<h3>Quiz complete: ${score} / ${all.length}</h3>${all.map((x,i)=>`<p class="${s.answers[i]===x.answer?'wb-correct':'wb-wrong'}">${x.ar}: ${s.answers[i]||'Not answered'} — Correct: ${x.answer}</p>`).join('')}${button('Review previous',`workbookStep(${n},-1)`)}${button('Restart',`workbookRestart(${n})`)}`;
    else {const options=n===3?[item.answer,all[(s.index+1)%all.length].answer,all[(s.index+4)%all.length].answer]:sounds.map(x=>item.answer.slice(0,-1)+x);const shift=s.index%3;options.push(...options.splice(0,shift));body=`<p>${s.mode==='quiz'?'Question':'Practice'} ${s.index+1} / ${all.length}</p><p class="wb-ar text-center">${glyph(item.ar)}</p>${s.mode==='practice'?button('Reveal reading',`workbookSelect(${n},${s.index})`):options.map((x,i)=>button(x,`workbookAnswer(${n},${i})`)).join('')}<p id="wb-detail-${n}" aria-live="polite">${s.answers[s.index]===undefined?'':(s.answers[s.index]===item.answer?'Correct. ':'Review. ')+item.answer}</p><div class="wb-actions">${s.index?button('Previous',`workbookStep(${n},-1)`):'<span></span>'}${button(s.index===all.length-1?'Finish & review':'Next',`workbookStep(${n},1)`)}</div>`;}
    document.getElementById('foundation-'+n).innerHTML=`<header><p class="text-accent-500 font-bold">Arabic Foundations · Lesson ${n} · Workbook Lesson ${n+1}</p><h2 class="text-white text-4xl font-bold">${title[n]}</h2></header><div class="wb-box">${['learn','practice','quiz'].map(m=>button(m[0].toUpperCase()+m.slice(1),`workbookMode(${n},'${m}')`)).join('')}<div class="mt-5">${body}</div></div><div class="wb-actions">${button('Previous lesson',n===3?'switchChapter(2)':'openWorkbookLesson(3)')}${n===3?button('Next: Harakat','openWorkbookLesson(4)'):''}</div>`;
  }
  window.workbookMode=(n,m)=>{state[n].mode=m;state[n].index=0;render(n);};
  window.workbookSelect=(n,i)=>{document.getElementById('wb-detail-'+n).textContent=items[n][i].answer;};
  window.workbookAnswer=(n,i)=>{const s=state[n],item=items[n][s.index];const opts=n===3?[item.answer,items[n][(s.index+1)%items[n].length].answer,items[n][(s.index+4)%items[n].length].answer]:sounds.map(x=>item.answer.slice(0,-1)+x);opts.push(...opts.splice(0,s.index%3));s.answers[s.index]=opts[i];render(n);};
  window.workbookStep=(n,d)=>{const s=state[n];if(d>0&&s.mode==='quiz'&&s.answers[s.index]===undefined){document.getElementById('wb-detail-'+n).textContent='Choose an answer first.';return;}s.index=Math.max(0,Math.min(items[n].length-(s.mode==='practice'?1:0),s.index+d));render(n);};
  window.workbookRestart=n=>{state[n].answers=[];state[n].index=0;render(n);};
  window.openWorkbookLesson=n=>{openCourseMenu('foundations');render(n);switchTab('foundation-'+n);document.getElementById('mobile-menu').classList.add('hidden');};
  function mount(){for(const n of [3,4]){const section=document.createElement('section');section.id='foundation-'+n;section.className='tab-content';document.getElementById('ch2-quiz').after(section);for(const suffix of ['', '-m']){const b=document.createElement('button');b.className='w-full text-left p-3 text-slate-300 hover:bg-brand-900 rounded-xl';b.textContent='0'+n+' · '+title[n];b.onclick=()=>openWorkbookLesson(n);document.getElementById('qaida-menu'+suffix).append(b);}render(n);}}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
})();

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
    ],pages:[{label:'Full alphabet · Alif to Yaa · all three standing vowels',columns:6,items:standing(
      [...'ابتثجحخدذرزسشصضطظعغفقكلمنهوي'].map(letter=>[[letter,'a'],[letter,'i'],[letter,'u']])
    )},{label:'12 · Opening rows',columns:6,items:standing([
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

// Lessons 9–10: clean Arabic text, preserving workbook reading order.
(() => {
  'use strict';
  const records = pairs => pairs.map(([ar,reading])=>({ar,reading}));
  const p16=records([
    ['اٰمَنَ','āmana'],['اَوٰى','awā'],['اٰنِيَةٍ','āniyatin'],['اَلْفَ','alfa'],['اَيْنَ','ayna'],
    ['بِهٖ','bihī'],['جَآءَ','jāʾa'],['جِيٓءَ','jīʾa'],['جُوْعٍ','jūʿin'],['خَوْفٍ','khawfin'],
    ['خَيْرٌ','khayrun'],['دَاوٗدُ','dāwūdu'],['ذٰلِكَ','dhālika'],['رَضُوْا','raḍū'],['شَآءَ','shāʾa']
  ]);
  const p17=records([
    ['مَلِكِ','maliki'],['شَيْءٍ','shayʾin'],['طَغٰى','ṭaghā'],['طَغَوْا','ṭaghaw'],['طَيْرًا','ṭayran'],
    ['عَادٍ','ʿādin'],['عَلٰى','ʿalā'],['عَيْنٌ','ʿaynun'],['فِيْهِ','fīhi'],['قَالَ','qāla'],
    ['قَوْلٌ','qawlun'],['كَانَ','kāna'],['كَيْدًا','kaydan'],['كَيْفَ','kayfa'],['لَوْحٍ','lawḥin'],
    ['لَيْسَ','laysa'],['مَالًا','mālan'],['نَارًا','nāran'],['مَآءٍ','māʾin'],['وَيْلٌ','waylun'],
    ['يَوْمِ','yawmi'],['يَرَهٗ','yarahū'],['حَاسِدٍ','ḥāsidin'],['حَافِظٌ','ḥāfiẓun'],
    ['دَافِقٍ','dāfiqin'],['شَاهِدٍ','shāhidin'],['عَابِدٌ','ʿābidun'],['عَابِدًا','ʿābidan'],
    ['عَاتِقٍ','ʿātiqin'],['نَاصِرٍ','nāṣirin'],['وَالِدٍ','wālidin'],['اَعُوْذُ','aʿūdhu'],
    ['اَلْكَيْلُ','al-kaylu'],['يَخَافُ','yakhāfu'],['يَدٰهُ','yadāhu'],['يُقَالُ','yuqālu'],
    ['تُرَابًا','turāban'],['حِسَابًا','ḥisāban'],['سُبَاتًا','subātan'],['سِرَاجًا','sirājan'],
    ['سَلَامٌ','salāmun'],['شِدَادًا','shidādan'],['شَرَابًا','sharāban'],['صَوَابًا','ṣawāban']
  ]);
  const p18=records([
    ['طَعَامٍ','ṭaʿāmin'],['عَذَابٌ','ʿadhābun'],['عَطَآءٍ','ʿaṭāʾin'],['غُثَآءٍ','ghuthāʾin'],
    ['كِتَابًا','kitāban'],['كِرَامًا','kirāman'],['لِبَاسًا','libāsan'],['لِسَانًا','lisānan'],
    ['مَآبًا','maʾāban'],['مَتَاعًا','matāʿan'],['مُطَاعٍ','muṭāʿin'],['مَعَاشًا','maʿāshan'],
    ['مَفَازًا','mafāzan'],['مِهَادًا','mihādan'],['نَبَاتًا','nabātan'],['وِفَاقًا','wifāqan'],
    ['نُجُوْمًا','nujūman'],['رَسُوْلٌ','rasūlun'],['شُهُوْدٌ','shuhūdun'],['قُعُوْدٌ','quʿūdun'],
    ['وُجُوْهٌ','wujūhun'],['اَثِيْمِ','athīmi'],['اَلِيْمِ','alīmi'],['بَصِيْرًا','baṣīran'],
    ['خَبِيْرًا','khabīran'],['رَحِيْمٍ','raḥīmin'],['شَهِيْدٌ','shahīdun'],['عَظِيْمٌ','ʿaẓīmun'],
    ['قَرِيْبًا','qarīban'],['كَرِيْمٍ','karīmin'],['مَجِيْدٌ','majīdun'],['مُحِيْطٌ','muḥīṭun'],
    ['نَعِيْمِ','naʿīmi'],['يَتِيْمًا','yatīman'],['يَسِيْرًا','yasīran'],['رُوَيْدًا','ruwaydan'],
    ['قُرَيْشٍ','qurayshin'],['عِيْشَةٍ','ʿīshatin'],['الْمَوْعُوْدَةُ','al-mawʿūdatu']
  ]);
  const p19=records([['مَوْضُوْعَةٌ','mawḍūʿatun'],['مَوَازِيْنُهٗ','mawāzīnuhū'],['يَوْمَئِذٍ','yawmaʾidhin']]);
  function sukoon(list) {const short=['َ','ِ','ُ'],names=['a','i','u'];return list.flatMap(([letter,roman])=>short.map((v,i)=>({ar:'ا'+v+letter+'ْ',reading:names[i]+roman}))); }
  const closed=sukoon([['ب','b'],['ت','t'],['ث','th'],['ج','j'],['ح','ḥ'],['خ','kh'],['د','d'],['ذ','dh'],['ر','r'],['ز','z'],['س','s'],['ش','sh'],['ص','ṣ'],['ض','ḍ'],['ط','ṭ'],['ظ','ẓ']]);
  const sheet=(page,items,columns,rowSizes)=>({page,items,columns,rowSizes,label:'Page '+page});
  // New workbook entries: no guessed text is placed in unclear cells.
  const pending = label => ({ar:'',reading:'',pending:label});
  function splitWrittenLetters(ar){
    return ar.split(/\s+/).map(word=>{
      const units=word.match(/[\u0621-\u064A][\u064B-\u065F\u0670]*/g)||[];
      return units.flatMap(unit=>unit.includes('ّ')?[unit[0]+'ْ',unit.replace('ّ','')]:[unit]).join(' + ');
    }).join(' | ');
  }
  const typedRows=(page,rows)=>sheet(page,rows.flat().map(value=>typeof value==='string'?{ar:value,reading:splitWrittenLetters(value)}:value),Math.max(...rows.map(r=>r.length)),rows.map(r=>r.length));
  const exercise20=typedRows(20,[
    ['اَنْتَ','اَهْلِ','بَعْدُ','بَطْشَ','سَعْيَ'],
    ['كُنْتَ','لَسْتَ','اَمْرٍ','بَرْدًا','جَمْعًا']
  ]);
  const exercise21=typedRows(21,[
    ['حَبْلٌ','خُسْرٍ','خَلْقًا','سَبْحًا','سَبْقًا'],
    ['شَأْنٌ','صُبْحًا','ضَبْحًا','عَبْدًا'],
    ['عَدْنٍ','عَشْرٍ','عَصْفٍ','غَرْقًا','غَلْبًا'],
    ['فَصْلٌ','قَدْحًا','نَقْبًا','كَأْسًا','كَدْحًا'],
    ['لَغْوًا','مِسْكٌ','عُذْلًا','نَشْطًا','نَفْسٌ'],
    ['نَقْعًا','يَسْرًا','اَبْقٰى','تَرْضٰى','تَنْسٰى'],
    ['يَخْشٰى','يَسْعٰى','يَتْلُوْا','يَدْعُوْا','اَلْجَرْيِ'],
    ['يَهْدِي','يَغْنِي','اَنْتَ','اَمْهِلْ','اِقْرَأْ'],
    ['فَارْغَبْ','فَانْصَبْ','وَانْحَرْ','اَخْرِجْ'],
    ['اَرْسَلَ','اَغْطَشَ','اَفْلَحَ','اَكْرَمَ']
  ]);
  const exercise22=typedRows(22,[
    ['اَلْحَمْ','اَنْشَرَ','اَنْقَضَ','دَمْدَمَ'],
    ['عَسْعَسَ','اَعْبُدُ','نَعْبُدُ','يَعْرُجُ'],
    ['يَحْسَبُ','شَرِبَ','شَهِدَ','تَرْهَقُ'],
    ['تَعْرِفُ','اَقْسِمُ','يُبْدِي','يُنْفَخُ'],
    ['يَنْقَلِبُ','يُوَسْوِسُ','نُقِلَتْ','حُشِرَتْ'],
    ['سُطِحَتْ','كُشِطَتْ','نُشِرَتْ'],
    ['نُصِبَتْ','اَثَرْنَ','وَسَطْنَ','فَرَغْتَ'],
    ['تَأْتُوْنَ','يَسْقُوْنَ','يَفْعَلُوْنَ'],
    ['يَعْمَلُوْنَ','يَعْلَمُوْنَ','يَضْحَكُوْنَ'],
    ['يَكْسِبُونَ','يَدْخُلُوْنَ','يَنْظُرُوْنَ']
  ]);
  const exercise23=typedRows(23,[
    ['تَعْبُدُوْنَ','اَنْعَمْتَ','اَنْذَرْنَا','اَنْزَلْنَا'],
    ['خَلَقْنَا','رَفَعْنَا','وَضَعْنَا','نُطْفَةٍ'],
    ['عِبْرَةٌ','عَجْرَةٌ','تَذْكِرَةٌ','مُسْفِرَةٌ'],
    ['مُوْصَدَةٌ ۝','مَسْغَبَةٍ','مَقْرَبَةٍ'],
    ['مَتْرَبَةٍ','تَضْلِيْلٍ','تَقْوِيْمٍ','تَكْذِيْبِ'],
    ['تَسْنِيْمٍ ۝','مِسْكِيْنًا','مَمْنُونٍ'],
    ['مَحْفُوْظٌ','مَخْتُوْمٍ','مَسْرُوْرًا ۝'],
    ['مَشْهُوْدٍ','اَبْوَابًا','مَصْفُوْفَةٍ','اَزْوَاجًا'],
    ['اَشْتَاتًا','اَطْعَمَ','اَعْنَابًا','اَفْوَاجًا'],
    ['اَلْهٰنَا ۝','قُرْاٰنٌ','اَلْحَمْدُ','وَالْفَجْرِ']
  ]);
  const exercise24=typedRows(24,[
    ['وَالْفَتْحُ وَالْعَصْرِ مِنَ الْمُعْصِرٰتِ'],
    ['مَعَ الْعُسْرِ مَا الْقَارِعَةُ ۝ وَاِذَا'],
    ['الْمَوْعُوْدَةُ يَنْظُرُ الْمَرْءُ كَالْفَرَاشِ'],
    ['الْمَبْثُوْثِ كَالْعِهْنِ الْمَنْفُوْشِ ۝'],
    ['لَيْلَةُ الْقَدْرِ اُخْرِجَتِ الْاَرْضُ'],
    ['مِنْ اَهْلِ الْكِتٰبِ عِنْدَ ذِي'],
    ['الْعَرْشِ يَمْنَعُوْنَ الْمَاعُوْنَ ۝ وَهُوَ'],
    ['الْغَفُوْرُ الْوَدُوْدُ ذُو الْعَرْشِ الْمَجِيْدُ'],
    ['لَقَدْ خَلَقْنَا الْاِنْسَانَ فِيْ اَحْسَنِ'],
    ['تَقْوِيْمٍ ۝ اَعْطَيْنٰكَ الْكَوْثَرَ ۝','اَلْعَنْ']
  ]);
  function doubledDrills(letter){
    const initial=['َ','ِ','ُ'],ending=['َ','ِ','ُ','ً','ٍ','ٌ'];
    // Workbook order: all three initial vowels per short ending, then tanween per initial vowel.
    const entries=[];
    for(const vowel of ending.slice(0,3))for(const first of initial)entries.push('ا'+first+letter+'ّ'+vowel);
    for(const first of initial)for(const vowel of ending.slice(3))entries.push('ا'+first+letter+'ّ'+vowel+(vowel==='ً'?'ا':''));
    return entries.map(ar=>({ar,reading:splitWrittenLetters(ar)}));
  }
  const doubled=[...doubledDrills('ب'),...doubledDrills('ت'),...doubledDrills('ث'),...doubledDrills('ج').slice(0,15)];
  const tashdeed25=sheet(25,doubled.slice(0,35),5);
  const tashdeed26=sheet(26,doubled.slice(35),5,[5,5,5,5,5,5,4]);
  const tashdeedOpening=typedRows(26,[['بِرًّا','حُصِّلَ','صَدَّقَ','عَدَّ','قَدَّرَ']]);
  const tashdeed27=typedRows(27,[
    ['كُذِّبَ','ثُمَّ','يَظُنُّ','يَحُضُّ','جَنَّةٍ'],
    ['ذَرَّةٍ','قُوَّةٍ','كَرَّةٍ','سُعِّرَتْ','قُدِّمَتْ'],
    ['كُذِّبَتْ','زُوِّجَتْ','سُيِّرَتْ','فُجِّرَتْ'],
    ['سُيِّرَتْ','عُطِّلَتْ','كُوِّرَتْ','نَظَّامٌ'],
    ['تُحَدِّثُ','نُيَسِّرُ','هُمْ','اَلْبَيِّنَةُ'],
    ['قَيِّمَةٌ','عَشِيَّةً','مُنَكَّرٌ','اَيَّانَ'],
    ['اِيَّاكَ','لِلّٰهِ','تَجَلّٰى','تَصَدّٰى','تَرَدّٰى'],
    ['تَوَلّٰى','تَوَّابًا ۝','ثَجَّاجًا','غَسَّاقًا'],
    ['فَعَّالٌ','كَذَّابًا','وَهَّاجًا','مُمَدَّدَةٍ ۝'],
    ['مُكَرَّمَةٍ','مُطَهَّرَةٍ','وَالسَّمَآءِ']
  ]);
  const tashdeed28=typedRows(28,[
    ['وَالتُّرَابِ','وَالنَّشِطٰتِ','وَالنّٰزِعٰتِ'],
    ['وَالسَّبِحٰتِ','فَالسّٰبِقٰتِ','فَالْمُدَبِّرٰتِ'],
    ['تَبْلٰى','السَّرَآئِرُ','فَهَلِ','الْكٰفِرِيْنَ'],
    ['بِالْخُنَّسِ','الْجَوَارِ','الْكُنَّسِ ۝','اِهْدِنَا'],
    ['الصِّرَاطَ','الْمُسْتَقِيْمَ ۝']
  ]);
  const lessons=[
    {n:9,title:'Combined Reading Exercise',source:10,
      instructions:{text:'Practise the standing vowels, madd, leen and tanween in these workbook words. Read from right to left and preserve every written mark. When hamzah follows a madd letter in the same word, the rule is madd muttaṣil; when it begins the next word, madd munfaṣil. A following original sukūn can give madd lāzim; a sukūn caused by stopping can give madd ʿāriḍ. These lengths depend on the recitation rule and reading tradition: confirm the counts with your teacher rather than measuring fixed seconds.'},
      sheets:[sheet(16,p16,5),sheet(17,p17,5,[5,5,5,5,4,4,4,4,4,4]),sheet(18,p18,4,[4,4,4,4,4,4,4,4,4,3]),sheet(19,p19,3)],
      entries:[...p16,...p17,...p18,...p19]},
    {n:10,title:'Sukoon & Jazm',source:11,
      instructions:{text:'Memorise the name and shape of jazm/sukūn (ْ). A letter carrying sukūn is called sākin. It has no vowel of its own: connect it to the vowelled letter before it and pronounce it once, without adding a, i or u. Practise distinguishing similar sounds: ث / س / ص and ذ / ز / ظ.'},
      sheets:[sheet(19,closed.slice(0,30),5),sheet(20,closed.slice(30),5)],
      entries:closed},
    {n:11,title:'Sukoon Exercise',source:12,breakdown:true,
      instructions:{text:'Read the vowelled letter together with the sākin letter after it; do not add a vowel to the sākin letter. Distinguish the heavy letters ص ض ط ظ غ خ ق. Rā is heavy with fatḥah or ḍammah; the rules for a sākin rā depend on what precedes it. Nūn sākin/tanween before throat letters ء ه ع ح غ خ is clear; ikhfa applies before its specific 15 letters, not every other letter. The workbook introduces stop signs: م (necessary stop), ج (permissible stop), ط (absolute stop), and a verse-end circle. Practise stops with your teacher.'},
      sheets:[exercise20,exercise21,exercise22,exercise23,exercise24],
      entries:[exercise20,exercise21,exercise22,exercise23,exercise24].flatMap(p=>p.items).filter(x=>!x.pending)},
    {n:12,title:'Tashdeed · Doubled Letters',source:13,breakdown:true,
      instructions:{text:'Tashdeed/shaddah (ّ) marks a doubled consonant. A letter carrying it is called mushaddad. Read it as two consonant positions: the first is sākin and the second carries the written vowel. Join them firmly without inserting an extra vowel or making two detached sounds. In the breakdown, the first position is shown with sukūn and the second with its vowel. Every repeated workbook entry is retained.'},
      sheets:[tashdeed25,tashdeed26],entries:doubled},
    {n:13,title:'Tashdeed Exercise',source:14,breakdown:true,
      instructions:{text:'Apply the doubled-consonant reading in these workbook words and phrases. Mīm and nūn with shaddah (مّ، نّ) require ghunnah—a steady nasal sound for two vowel counts. Do not apply this nasal hold automatically to every other doubled consonant. Read from the right and keep the short vowels, long vowels and stop marks distinct.'},
      sheets:[tashdeedOpening,tashdeed27,tashdeed28],entries:[tashdeedOpening,tashdeed27,tashdeed28].flatMap(p=>p.items).filter(x=>!x.pending)}
  ];
  // Source pages 20 onward use continuous rows, not separate word boxes.
  for(const page of [exercise20,exercise21,exercise22,exercise23,tashdeedOpening,tashdeed27,tashdeed28]){
    let at=0;page.items=page.rowSizes.map(size=>{const ar=page.items.slice(at,at+size).map(x=>x.ar).join(' ');at+=size;return {ar,reading:splitWrittenLetters(ar)};});page.layout='lines';page.rowSizes=page.items.map(()=>1);
  }
  exercise24.items.splice(-2,2,{ar:exercise24.items.slice(-2).map(x=>x.ar).join(' '),reading:splitWrittenLetters(exercise24.items.slice(-2).map(x=>x.ar).join(' '))});
  exercise24.layout='lines';
  for(const n of [11,13]){const lesson=lessons.find(l=>l.n===n);lesson.entries=lesson.sheets.flatMap(p=>p.items);}
  const lines=(page,rows)=>({...typedRows(page,rows.map(ar=>[ar])),layout:'lines'});
  const final14a=lines(28,[
    'مَرُّوْا رَبِّيْ مُدَّتْ حُقَّتْ خَفَّتْ',
    'تَبَّتْ تَخَلَّتْ قَدَّمَتْ وَالصُّبْحِ',
    'وَالشَّمْسِ وَالشَّفْعِ بِالصَّبْرِ ۝'
  ]);
  const final14b=lines(29,[
    'وَالصَّيْفِ وَاللَّيْلِ وَالتِّيْنِ وَالزَّيْتُوْنِ',
    'سِجِّيْلٍ سِجِّيْنٍ مُنْفَكِّيْنَ فَاِنَّ',
    'الْجَنَّةَ لِحُبِّ الْخَيْرِ اِذَا السَّمَآءُ',
    'اِنْشَقَّتْ مَا الطَّارِقُ النَّجْمُ الثَّاقِبُ ۝',
    'مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝'
  ]);
  const final15=lines(29,[
    'يَزَّكّٰى يَذَّكَّرُ الْمُدَّثِّرُ الْمُزَّمِّلُ',
    'عِلِّيِّيْنَ ۝ عِلِّيُّوْنَ ۝ اِنَّ الَّذِيْنَ',
    'اِلَّا الَّذِيْنَ مِنْ شَرِّ النَّفّٰثٰتِ',
    'فَعَّالٌ لِمَا يُرِيْدُ ۝'
  ]);
  const final16=lines(30,[
    'ضَآلًّا دَآبَّةٍ حَآجَّكَ حَآجُّوْكَ',
    'اَضَآلُّوْنَ وَلَا الضَّآلِّيْنَ اَتُحَآجُّوْنِّيْ',
    'وَلَا تَحٰٓضُّوْنَ وَالصّٰٓفّٰتِ جَآءَتْ',
    'الصَّآخَّةُ ۝ فَاِذَا جَآءَتِ الطَّآمَّةُ',
    'الْكُبْرٰى ۝'
  ]);
  const final17a=lines(31,[
    'جَزَآءً لِلْمَلٰٓئِكَةِ اِنَّا اَعْطَيْنَا اَلَيْتَ',
    'اَيَّامٍ ۝ خَيْرًا يَرَهٗ ۝ شَرًّا يَرَهٗ ۝',
    'مِنْ فَانَّا يَوْمٍ فَمَنْ يَّعْمَلْ يَوْمَئِذٍ',
    'قَصَبٍ ۝ النَّاسِ مِنْ رَّبِّكَ رَسُوْلٌ',
    'مِنَ اللّٰهِ صُحُفًا مُّطَهَّرَةً صَفًّا ۝',
    'لَا يَتَكَلَّمُوْنَ قَلْبٍ يَوْمَئِذٍ وَاجِفَةٌ',
    'اَبْصَارُهَا سِرَاجًا وَهَّاجًا ۝ وَاَنْزَلْنَا',
    'اَكَلًا لَّمًّا ۝ وَتُحِبُّوْنَ الْمَالَ حُبًّا'
  ]);
  const final17b=lines(32,[
    'جَمًّا ۝ غُثَآءً اَحْوٰى ۝ مُعْتَلٍ اَنْتِجٍ',
    'اِذَا تُتْلٰى نَارًا حَامِيَةً ۝ تُسْقٰى مِنْ',
    'عَيْنٍ اٰنِيَةٍ ۝ مَنْ يَبْخَلْ لَيُنْبَذَنَّ',
    'مَنْ يَعْدِلْ مِنْ بَيْنِ الصُّلْبِ لَنَسْفَعًا',
    'بِالنَّاصِيَةِ نَوْمٍ مُّطَهَّرَةٍ ۝ بِاَيْدِيْ',
    'سَفَرَةٍ كِرَامٍ بَرَرَةٍ هُمْ فِيْهَا لَكُمْ',
    'دِيْنُكُمْ وَلِيَ دِيْنِ ۝ اِنَّ رَّبَّهُمْ بِهِمْ',
    'تَرْمِيْهِمْ بِحِجَارَةٍ لَهُمْ مَّا يَشَآءُوْنَ',
    'مِنْهُمُ اللّٰهُمَّ'
  ]);
  // Page 33 is intentionally omitted at the user's request.
  const addFinal=(n,title,source,text,sheets)=>lessons.push({n,title,source,breakdown:true,instructions:{text},sheets,entries:sheets.flatMap(p=>p.items).filter(x=>!x.pending)});
  addFinal(14,'Tashdeed with Sukoon',15,'Connect each doubled consonant to the following sākin letter without inserting another vowel. Preserve the complete phrases and pause at the written stop signs.',[final14a,final14b]);
  addFinal(15,'Tashdeed with Tashdeed',16,'Read each shaddah as a sākin consonant followed by its vowelled counterpart. Keep both doubled consonants distinct when they occur together.',[final15]);
  addFinal(16,'Tashdeed with Madd Letters',17,'Connect the madd letter to the doubled consonant after it. Practise the required length with your recitation teacher; keep madd signs and shaddah distinct.',[final16]);
  addFinal(17,'Concluding Reading Rules',18,'Nūn sākin and tanween merge before ي ر م ل و ن, with ghunnah before ي ن م و and without ghunnah before ل ر. Before ب, apply iqlāb. Mīm sākin before ب has ikhfa shafawi; before م it merges with ghunnah. The lām of Allah is light after kasrah. Apply these rules in connected reading with your teacher.',[final17a,final17b]);
  const states=new Map(lessons.map(l=>[l.n,{mode:'learn',at:0,quizAt:0,answers:[],show:false}]));
  const get=n=>lessons.find(l=>l.n===Number(n));
  function cleanGlyph(ar){if(!/[ِٖ]/.test(ar)||[...ar.replace(/[\u064B-\u065F\u0670]/g,'')].length!==1)return ar;const mark=ar.includes('ٖ')?'ٖ':'ِ';return '<span class="qn-below qn-'+(mark==='ٖ'?'standing':'single')+'" role="img" aria-label="'+ar+'"><span aria-hidden="true">'+ar.replace(mark,'')+'</span></span>'; }
  function artwork(r,css=''){
    if(r.text)return '<p class="qw-instructions">'+r.text+'</p>';
    if(r.items){
      if(r.layout==='lines')return '<div class="qw-reading-lines" dir="rtl" lang="ar">'+r.items.map(x=>x.pending?'<p class="qw-review-cell">'+x.pending+'</p>':'<p class="qw-reading-line">'+x.ar+'</p>').join('')+'</div>';
      const cell=x=>x.pending?'<div class="qw-review-cell" role="note"><strong>Needs confirmation</strong><p>'+x.pending+'</p></div>':'<button type="button" class="qw-text-cell" onclick="qwShowReading(\''+x.reading+'\')" aria-label="Show reading of '+x.ar+'"><span class="qw-ar" lang="ar">'+cleanGlyph(x.ar)+'</span></button>';
      if(r.rowSizes){let at=0;return r.rowSizes.map(count=>{const row=r.items.slice(at,at+count);at+=count;return '<div class="qw-text-grid" dir="rtl" style="--columns:'+count+';margin:0">'+row.map(cell).join('')+'</div>';}).join('');}
      return '<div class="qw-text-grid" dir="rtl" style="--columns:'+r.columns+'">'+r.items.map(cell).join('')+'</div>';
    }
    return '<div class="qw-ar '+css+'" lang="ar" dir="rtl">'+cleanGlyph(r.ar)+'</div>';
  }
  window.qwShowReading=reading=>{const dlg=document.getElementById('qn-dialog'),body=document.getElementById('qn-dialog-body');body.textContent=reading;body.dir=/[\u0621-\u064A]/.test(reading)?'rtl':'ltr';body.className=body.dir==='rtl'?'arabic-text text-2xl':'';dlg.showModal();};
  function btn(label,action,disabled=false,selected=false){return '<button type="button" class="qw-btn '+(selected?'qw-selected':'')+'" onclick="'+action+'" '+(disabled?'disabled':'')+'>'+label+'</button>';}
  function options(l,i){const answer=l.entries[i],pool=[...new Map(l.entries.filter(x=>x.reading!==answer.reading).map(x=>[x.reading,x])).values()];const opts=[answer,pool[i%pool.length],pool[(i+1)%pool.length]];const shift=(i+1)%3;return opts.slice(shift).concat(opts.slice(0,shift));}
  function render(n){const l=get(n),s=states.get(l.n);let body='';
    if(s.mode==='learn')body='<section class="qw-panel"><h3>Workbook instructions</h3>'+artwork(l.instructions)+'</section>'+(l.sheets.some(p=>p.items.some(x=>x.pending))?'<div class="qw-panel" role="note">A few small-print entries are awaiting confirmation. Their places are retained; unconfirmed text is excluded from practice and quizzes.</div>':'')+l.sheets.map(r=>'<section class="qw-panel"><h3>'+r.label+'</h3>'+artwork(r)+'</section>').join('');
    if(s.mode==='practice')body='<section class="qw-panel"><h3>Reading practice · '+(s.at+1)+' / '+l.entries.length+'</h3><p>Read the Arabic text, then reveal the model reading.</p>'+artwork(l.entries[s.at],'qw-prompt')+btn(s.show?'Hide reading':'Reveal reading','qwContext('+n+')')+(s.show?'<p class="qw-model">'+l.entries[s.at].reading+'</p>':'')+'<div class="qw-actions">'+btn('Previous','qwPracticeStep('+n+',-1)',s.at===0)+btn('Next','qwPracticeStep('+n+',1)',s.at===l.entries.length-1)+'</div></section>';
    if(s.mode==='quiz'){
      const total=12;
      if(s.quizAt===total){const score=s.answers.filter(x=>x===true).length;body='<section class="qw-panel"><h3>Reading quiz · '+score+' / '+total+'</h3><p>Review the model readings and practise the words you missed.</p>'+btn('Previous question','qwQuizStep('+n+',-1)')+btn('Restart quiz','qwRestart('+n+')')+'</section>';}
      else {const index=Math.floor(s.quizAt*l.entries.length/total),opts=options(l,index),saved=s.answers[s.quizAt];body='<section class="qw-panel"><h3>Reading quiz · '+(s.quizAt+1)+' / '+total+'</h3><p>Choose the correct reading. Check every letter and vowel mark.</p>'+artwork(l.entries[index],'qw-prompt')+'<div class="qw-options">'+opts.map((r,i)=>'<button type="button" class="qw-btn" onclick="qwAnswer('+n+','+i+')" aria-label="Choice '+(i+1)+'">'+r.reading+'</button>').join('')+'</div><p class="qw-feedback" aria-live="polite">'+(saved===undefined?'Choose an answer.':saved?'Correct reading.':'Review the vowels and try another reading.')+'</p><div class="qw-actions">'+btn('Previous','qwQuizStep('+n+',-1)',s.quizAt===0)+btn(s.quizAt===total-1?'Finish':'Next','qwQuizStep('+n+',1)',saved===undefined)+'</div></section>';}
    }
    document.getElementById('foundation-'+n).innerHTML='<header class="qw-header"><p>Arabic Foundations · Lesson '+n+' · Workbook Lesson '+l.source+'</p><h2>'+l.title+'</h2><p>Workbook text · '+l.entries.length+' reading entries'+(l.breakdown?' · Arabic letter breakdown':'')+'</p></header><nav class="qw-actions" aria-label="Lesson sections">'+['learn','practice','quiz'].map(m=>btn({learn:'Learn',practice:'Reading Practice',quiz:'Reading Quiz'}[m],"qwMode("+n+",'"+m+"')",false,s.mode===m)).join('')+'</nav>'+body+'<nav class="qw-actions">'+btn('Previous lesson','openWorkbookLesson('+(n-1)+')')+(get(n+1)?btn('Next: '+get(n+1).title,'openWorkbookLesson('+(n+1)+')'):'')+'</nav>';
    if(l.breakdown){const host=document.getElementById('foundation-'+n);host.innerHTML=host.innerHTML.replaceAll('Read the Arabic text, then reveal the model reading.','Read the word, then check its written-letter breakdown. A doubled letter is expanded into sākin + vowelled positions.').replaceAll('Reveal reading','Reveal breakdown').replaceAll('Hide reading','Hide breakdown').replaceAll('Choose the correct reading. Check every letter and vowel mark.','Choose the matching written-letter breakdown. Check the letters, marks and doubled consonants.');}
  }
  window.qwMode=(n,m)=>{states.get(n).mode=m;render(n);};
  window.qwContext=n=>{states.get(n).show=!states.get(n).show;render(n);};
  window.qwPracticeStep=(n,d)=>{const s=states.get(n);s.at=Math.max(0,Math.min(get(n).entries.length-1,s.at+d));s.show=false;render(n);};
  window.qwAnswer=(n,i)=>{const s=states.get(n),l=get(n),index=Math.floor(s.quizAt*l.entries.length/12);s.answers[s.quizAt]=options(l,index)[i]===l.entries[index];render(n);};
  window.qwQuizStep=(n,d)=>{const s=states.get(n);if(d>0&&s.answers[s.quizAt]===undefined)return;s.quizAt=Math.max(0,Math.min(12,s.quizAt+d));render(n);};
  window.qwRestart=n=>{const s=states.get(n);s.answers=[];s.quizAt=0;render(n);};
  const oldOpen=window.openWorkbookLesson;
  window.openWorkbookLesson=n=>{if(!get(n)){oldOpen(n);if(Number(n)===8){const link=document.createElement('div');link.innerHTML=btn('Next: Combined Reading Exercise','openWorkbookLesson(9)');document.getElementById('foundation-8').append(link);}return;}openCourseMenu('foundations');render(Number(n));switchTab('foundation-'+n);document.getElementById('mobile-menu').classList.add('hidden');};
  function mount(){const style=document.createElement('style');style.textContent='.qw-text-grid{display:grid;grid-template-columns:repeat(var(--columns),minmax(0,1fr));direction:rtl!important;gap:1px;background:#cbd5e1;margin:16px 0}.qw-text-cell{background:#fffef7;padding:16px 3px;min-height:104px;color:#075985;text-align:center}.qw-ar{font-family:Amiri,\"Scheherazade New\",serif;font-size:clamp(28px,4vw,46px);line-height:2.1;direction:rtl;unicode-bidi:isolate}.qw-text-cell:focus-visible{outline:3px solid #f59e0b}.qw-model{font-size:24px;text-align:center;font-weight:700;margin:20px}.qw-instructions{line-height:1.9}.qw-prompt{margin:20px auto;text-align:center;font-size:60px}.qw-header{color:#e0f2fe;margin-bottom:24px}.qw-header h2{font-size:36px;font-weight:800;color:white}.qw-header p:first-child{color:#f59e0b;font-size:13px;font-weight:700}.qw-header p:last-child{font-size:13px}.qw-panel{background:white;border:1px solid #e2e8f0;border-radius:20px;padding:20px;margin:20px 0}.qw-panel h3{font-size:20px;font-weight:700;margin-bottom:16px}.qw-art{display:block;width:100%;height:auto;max-width:640px;margin:16px auto}.qw-prompt{width:180px;max-height:200px}.qw-btn{background:white;border:1px solid #cbd5e1;border-radius:12px;padding:12px;min-height:44px;font-weight:600}.qw-btn:disabled{opacity:.4}.qw-btn:focus-visible{outline:3px solid #f59e0b}.qw-selected{background:#0369a1;color:white}.qw-actions{display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;margin:20px 0}.qw-options{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;direction:rtl}.qw-options .qw-art{max-width:130px}.qw-feedback{min-height:48px;margin-top:20px}';document.head.append(style);
    style.textContent+='.qw-prompt{width:100%;max-height:none;overflow-wrap:anywhere}.qw-model{font-family:Amiri,"Scheherazade New",serif;direction:rtl;unicode-bidi:plaintext;line-height:1.9}.qw-model:not(:has(*)){unicode-bidi:plaintext}.qw-review-cell{background:#fffbeb;color:#92400e;padding:14px;font-size:12px;min-height:100px;text-align:center}.qw-review-cell p{font-size:11px}.qw-options .qw-btn{unicode-bidi:plaintext;overflow-wrap:anywhere;line-height:1.9}';
    style.textContent+='.qw-reading-lines{direction:rtl;text-align:right}.qw-reading-line{font-family:Amiri,"Scheherazade New",serif;font-size:clamp(28px,4vw,46px);line-height:2.2;padding:12px 0;margin:0;border:0;background:transparent;unicode-bidi:plaintext;overflow-wrap:normal}';
    for(const l of lessons){const section=document.createElement('section');section.id='foundation-'+l.n;section.className='tab-content';document.getElementById('foundation-'+(l.n-1)).after(section);for(const suffix of ['','-m']){const b=document.createElement('button');b.className='w-full text-left p-3 text-slate-300 hover:bg-brand-900 rounded-xl';b.textContent=String(l.n).padStart(2,'0')+' · '+l.title;b.onclick=()=>openWorkbookLesson(l.n);document.getElementById('qaida-menu'+suffix).append(b);}render(l.n);}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
})();

