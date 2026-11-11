
const $=s=>document.querySelector(s),E=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e};
const S={get(k,d){try{const v=localStorage.getItem('rk_'+k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem('rk_'+k,JSON.stringify(v))}catch(e){}}};
let cur=S.get('ch',0),found=S.get('found',[]),fav=S.get('fav',[]),snd=false,AC;
function tone(f){if(!snd)return;try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();const o=AC.createOscillator(),g=AC.createGain(),t=AC.currentTime;o.frequency.value=f||520;g.gain.setValueAtTime(.05,t);g.gain.exponentialRampToValueAtTime(.001,t+.9);o.connect(g);g.connect(AC.destination);o.start();o.stop(t+.9)}catch(e){}}
const M=["كل مرة بفتكر ضحكتك، يومي بيتظبط لوحده.","وجودك في حياتي مش صدفة، ده أجمل ترتيب حصلي.","مهما الدنيا زحمت، مكانك عندي فاضي ومحفوظ.","إنتي الإحساس اللي بيخليني أقول الحمد لله من غير سبب.","بحب إزاي بتهتمي بالتفاصيل اللي محدش بياخد باله منها.","لو الأيام كانت كتاب، إنتي أحلى صفحة فيه.","هدوءك بيطمّني أكتر من ألف كلمة.","أنا مش بقول كتير، بس كل اللي بقوله بجد.","عايزك تبقي كويسة، ده أهم حاجة عندي.","في أيام صعبة، فكرة إنك موجودة بتفرق.","طيبتك نادرة، حافظي عليها واحمي نفسك بيها.","مش لازم تبقي قوية طول الوقت، أنا هنا.","اسمك لوحده بيخليني أبتسم.","أحلى حاجة فيكي إنك مش بتحاولي تبقي حد غير نفسك.","كل نجاح بتحققيه بيفرحني كأنه ليا.","لو تعبتي، استندي عليا، مش هتقلي.","في عنيكي حاجة بتخلي الكلام يسكت.","بتمنالك أيام هادية وقلب مرتاح.","شكرًا إنك موجودة بالشكل ده.","ولسه في كلام كتير… بس إحساسه أكبر من الكلام."];
const OW=[["افتحي لما تكوني زعلانة","الزعل بيعدّي يا بسبووووستييي، وإنتي أقوى منه. خدي نفس عميق، وافتكري إن في حد بيحبك وبيفكر فيكي حتى لو مش شايفاه."],["افتحي لما تكوني مبسوطة","الله! كمّلي ضحك. أنا بحب أشوفك كده، وعايزك تحفظي الإحساس ده كويس."],["افتحي لما تفتقديني","أنا قريب حتى لو المسافة بعيدة. كل مرة بتفتكريني فيها، اعرفي إني بفتكرك أنا كمان."],["افتحي لما تحتاجي حد يسمعك","احكي براحتك. مش هقاطعك ولا هحكم عليكي، هسمع وبس."],["افتحي لما تحسي إنك مش كفاية","إنتي كفاية، وزيادة. اللي بيقولك غير كده مش شايفك زي ما أنا شايفك."],["افتحي لما تكوني محتاجة تبتسمي","فكّري في آخر مرة ضحكتي من قلبك… شوفتي؟ ابتسمتي."],["افتحي لما يومك يكون صعب","اليوم الصعب مش بيتحسب عليكي. استريحي، وبكرة يوم تاني، وأنا في ضهرك."],["افتحي لما تحبي تعرفي مكانتك عندي","مكانتك عندي مش بتتقاس بكلام، بس اعرفي إنه مكان مفيش حد غيرك يقف فيه."]];
const C=[
{t:"البداية",e:"The Beginning",k:"l",d:["مش عارف أبدأ منين، بس عارف إن في كلام كتير جوايا يستاهل يتقالك.","فكتبت، ومسحت، وكتبت تاني، لحد ما فهمت إن الصدق مش محتاج مقدمة."]},
{t:"عزيزتي بسبووووستييي",e:"Dear Basboooooostiii",k:"l",d:["عزيزتي بسبووووستييي،","في ناس بتعدّي في الحياة وتعدّي، وفي ناس بتغيّر شكل الأيام وهي ماشية. وإنتي من النوع التاني.","أنا مش بكتب علشان أقولك كلام حلو وبس، أنا بكتب علشان أقولك إن وجودك فارق معايا أكتر مما تتخيلي.","اقري براحتك وخدي وقتك. كل حرف هنا اتكتب وأنا بفكر فيكي.","أحمد"]},
{t:"حاجات بحبها فيكي",e:"Things I Adore",k:"c",d:["ضحكتك بتصلّح يومي من غير ما تحاولي.","طريقتك في الاهتمام بالتفاصيل الصغيرة.","هدوءك اللي بيطمّن.","صوتك لما بتحكيلي حاجة بتحبيها.","إنك قوية حتى وإنتي مش واخدة بالك.","ذوقك في كل حاجة بتختاريها.","طيبتك اللي من غير مقابل.","عنيكي لما بتتحمسي.","إنك بتسمعي بجد.","خفة دمك المفاجئة.","إصرارك على اللي بتحبيه.","إنك بتبقي نفسك من غير تمثيل."]},
{t:"افتحي لما…",e:"Open When You Need Me",k:"e",d:OW},
{t:"حاجات عمري ما قلتها",e:"Things I Never Said",k:"c",d:["كتير كنت بكتبلك رسايل وبمسحها قبل ما أبعتها.","في أيام كان كل اللي بتمناه إنك تبقي كويسة وبس.","كنت بخاف أقول أكتر من اللازم، فبسكت.","وجودك بيهديني أكتر مما تتخيلي.","أنا ممتن لكل مرة اهتميتي فيها."]},
{t:"لو تشوفي نفسك بعيوني",e:"Through My Eyes",k:"l",d:["لو تشوفي نفسك بعيوني، هتشوفي إنسانة هادية وقوية وقلبها واسع.","هتشوفي ضحكة بتنوّر المكان، وعينين فيها حكايات.","وهتفهمي ليه كل ما أفتكرك بتبسم من غير سبب."]},
{t:"رسايل صغيرة",e:"Little Messages",k:"m",d:M},
{t:"كوننا الصغير",e:"Our Little Universe",k:"s",d:["نجمة تقول: إنتي النور اللي بدوّر عليه.","نجمة تقول: كل ليلة بدعيلك قبل ما أنام.","نجمة تقول: ضحكتك أحلى من السما كلها.","نجمة تقول: مش محتاج أبعد علشان أحس بالأمان، كفاية إنك موجودة.","نجمة تقول: أحلامك تستاهل تتحقق.","نجمة تقول: خليكي دايمًا كده.","نجمة تقول: أنا هنا.","نجمة تقول: وإنتي أجمل حاجة حصلت."]},
{t:"الرسالة اللي ماخلصتهاش",e:"The Letter I Couldn’t Finish",k:"l",d:["بسبووووستييي،","كتبت الرسالة دي أكتر من مرة، وكل مرة أحس إن الكلام ناقص.","أنا عايز أقولك إنك علّمتيني أهتم بالتفاصيل، وإن في بساطتك حاجة بتخليني أشوف الدنيا أهدى.","مش عايز منك حاجة غير إنك تفضلي كويسة، وتعرفي إن في حد بيقدّرك بصدق.","ولسه في كلام… بس هسيبه لوقته."]},
{t:"ألف أمنية",e:"A Thousand Wishes",k:"c",d:["أتمنالك سعادة هادية ومستمرة.","أتمنالك نجاح يوصلك لكل اللي بتحلمي بيه.","أتمنالك راحة بال في كل يوم.","أتمنالك ناس بتحبك زي ما تستاهلي.","أتمنالك ضحك من القلب أكتر من الدموع.","وأتمنالك أيام حلوة من غير عدد."]},
{t:"لو الوقت وقف",e:"If Time Could Stop",k:"t",d:["لو الوقت وقف، كنت اخترت أوقفه عند لحظة بنضحك فيها.","في لحظات صغيرة بتفضل معانا العمر كله، وإنتي كنتي سبب كتير منها.","فخلي بالك من اللحظات دي، إنها أغلى من أي حاجة."]},
{t:"الغرفة السرية",e:"The Secret Room",k:"x",d:["مبروك يا بسبووووستييي، لقيتي القلوب كلها.","السر إني من أول مرة اتكلمنا فيها وأنا حاسس إنك مختلفة، وإن الكلام معاكي مريح.","ومش محتاج حاجة تتغير، كفاية إنك زي ما إنتي."]},
{t:"التفاصيل الصغيرة",e:"Little Things Matter",k:"c",d:["إنك بتفتكري التفاصيل اللي بقولها.","إنك بتسألي عليا في وقتها.","نبرة صوتك لما تكوني مبسوطة.","طريقتك في الاعتذار والتسامح.","إنك بتشجعيني من غير ما أطلب.","كلمة صغيرة منك بتفرق معايا."]},
{t:"رسالة لنفسك في المستقبل",e:"For Your Future Self",k:"l",d:["بسبووووستييي بتاعة المستقبل،","لو بتقري ده في يوم تعبانة، فأنا عايزك تفتكري إنك عدّيتي أيام أصعب.","إنتي أقوى وأجمل وأحن من اللي بتتخيلي.","ارجعي للرسالة دي أي وقت. هتلاقيني هنا."]},
{t:"المظروف الذهبي",e:"The Golden Envelope",k:"g",d:[["افتحي المظروف الذهبي","أهم حاجة عايز أقولها: أنا بقدّرك جدًا، ومش هنسى إنك كنتي سبب إن أيامي بقت أحلى. شكرًا إنك إنتي."]]},
{t:"بيني وبينك",e:"Just Between Us",k:"c",d:["مش بقول كتير، بس كل اللي بقوله صادق.","إنتي في بالي أكتر مما بظهر.","بحترم مشاعرك وقراراتك دايمًا.","مهما حصل، هفضل أتمنالك الخير.","وده وعد."]},
{t:"مفاجأة أخيرة",e:"One Last Surprise",k:"b",d:["آخر مفاجأة، وهي أبسط حاجة: شكرًا إنك قريتي كل ده. ووجودك هدية. أتمنى تكوني حسيتي إن كل كلمة طالعة من قلبي."]},
{t:"للأبد في اللحظة دي",e:"Forever In This Moment",k:"f",d:["لو كان الكلام يقدر يوصف كل اللي جوايا، كنت فضلت أكتب لحد ما الكلام يخلص... بس في حاجات إحساسها أكبر من أي كلام."]}];
const H={
1:"top:30px;left:20px",
4:"bottom:30px;right:14px",
7:"top:100px;right:10px",
10:"bottom:20px;left:30px",
13:"top:60%;left:10px"
};
const R={
l(s,d){const p=E('div','paperc');d.forEach((x,i)=>{const e=E('p','ln',x);e.style.animationDelay=i*.6+'s';p.append(e)});s.append(p)},
c(s,d){const g=E('div','grid');d.forEach((x,i)=>{const b=E('button','card');b.append(E('b','',i+1),E('span','',x));b.onclick=()=>{b.classList.add('on');tone(400+i*30)};g.append(b)});s.append(g)},
e(s,d,gold){const w=E('div',gold?'gold':'');d.forEach(([l,t])=>{const b=E('button','eb','✉ '+l),p=E('div','pn',t);p.hidden=1;b.onclick=()=>{p.hidden=!p.hidden;tone(330)};w.append(b,p)});s.append(w)},
g(s,d){R.e(s,d,1)},
m(s,d){let i=0;const m=E('div','msg'),a=E('div','acts'),n=E('button','btn','التالية'),sh=E('button','btn','عشوائي'),cp=E('button','btn','نسخ'),f=E('button','btn','♡');
const sw=()=>{m.textContent=d[i];m.className='msg';void m.offsetWidth;m.className='msg in';f.textContent=fav.includes(d[i])?'♥':'♡';tone(500+i*10)};
n.onclick=()=>{i=(i+1)%d.length;sw()};sh.onclick=()=>{let j;do j=Math.floor(Math.random()*d.length);while(j==i);i=j;sw()};
cp.onclick=()=>{try{navigator.clipboard.writeText(d[i]).then(()=>cp.textContent='تم النسخ').catch(()=>cp.textContent='تعذّر النسخ')}catch(e){cp.textContent='تعذّر النسخ'}setTimeout(()=>cp.textContent='نسخ',1500)};
f.onclick=()=>{const k=fav.indexOf(d[i]);k<0?fav.push(d[i]):fav.splice(k,1);S.set('fav',fav);sw()};
a.append(n,sh,cp,f);s.append(m,a);sw()},
s(s,d){const k=E('div','sky'),m=E('div','pn','المس نجمة…');d.forEach((x,i)=>{const b=E('button','star','✦');b.setAttribute('aria-label','نجمة');b.style.left=(i*37+10)%78+6+'%';b.style.top=(i*53)%66+8+'%';b.style.animationDelay=i*.4+'s';b.onclick=()=>{m.textContent=x;tone(600+i*40)};k.append(b)});s.append(k,m)},
t(s,d){const c=E('div','clock');c.append(E('i','a'),E('i','b'));s.append(c);R.l(s,d)},
x(s,d){if(found.length<5){const p=E('div','paperc');p.append(E('p','',"🔒 الغرفة مقفولة. في 5 قلوب صغيرة مستخبية جوه الفصول (♡ باهتة في الأركان). اللي لقيتيه: "+found.length+" من 5."));s.append(p)}else R.l(s,d)},
b(s,d){const b=E('button','box','');b.append(E('div','lid'));b.setAttribute('aria-label','افتحي الهدية');const p=E('div','paperc');p.hidden=1;p.append(E('p','',d[0]));b.onclick=()=>{b.classList.add('open');tone(700);setTimeout(()=>p.hidden=0,900)};s.append(b,p)},
f(s,d){const w=E('div','fin');w.append(E('h2','','AHMED ♡ بسبووووستييي'),E('p','',d[0]),E('p','sig','With all my heart,\nAhmed.'),E('p','sig','To Basboooooostiii,\nFrom Ahmed,\nWith a heart full of words. ♡'));w.querySelectorAll('.sig').forEach(e=>e.style.whiteSpace='pre-line');s.append(w)}};
function upd(){$('#cnt').textContent='♡ '+found.length+'/5'}
function show(i){cur=Math.max(0,Math.min(17,i));S.set('ch',cur);const c=C[cur],st=$('#stage');st.innerHTML='';st.className='stage in';
st.append(E('div','no','الفصل '+(cur+1)+' · '+c.e),E('h2','',c.t));R[c.k](st,c.d);
if(H[cur]&&!found.includes(cur)){const b=E('button','sh','♡');b.setAttribute('aria-label','قلب سري');b.style.cssText=H[cur];b.onclick=()=>{found.push(cur);S.set('found',found);tone(880);b.remove();upd()};st.append(b)}
$('#bar').style.width=(cur+1)/18*100+'%';$('#sel').value=cur;$('#pv').disabled=cur==0;$('#nx').disabled=cur==17;upd();scrollTo(0,0)}
C.forEach((c,i)=>{const o=E('option','',(i+1)+'. '+c.t);o.value=i;$('#sel').append(o)});
$('#sel').onchange=e=>show(+e.target.value);$('#nx').onclick=()=>{tone(450);show(cur+1)};$('#pv').onclick=()=>show(cur-1);
$('#snd').onclick=e=>{snd=!snd;e.target.textContent=snd?'🔊':'🔇';e.target.setAttribute('aria-label',snd?'كتم الصوت':'تشغيل الصوت');tone(520)};
$('#dbtn').onclick=()=>{const l=$('#dl');l.innerHTML='';(fav.length?fav:['لسه ما حفظتيش رسايل. اضغطي ♡ في فصل الرسايل الصغيرة.']).forEach(x=>l.append(E('div','pn',x)));$('#dia').hidden=0};
$('#dc').onclick=()=>$('#dia').hidden=1;
$('#rp').onclick=()=>{S.set('ch',0);location.reload()};
$('#open').onclick=()=>{$('#env').classList.add('open');$('#open').disabled=true;setTimeout(()=>{$('#intro').classList.add('out');$('#app').hidden=0;show(cur)},3200)};
for(let i=0;i<18;i++){const p=E('i','pt');p.style.left=Math.random()*100+'%';p.style.animationDuration=14+Math.random()*16+'s';p.style.animationDelay=-Math.random()*20+'s';document.body.append(p)}
