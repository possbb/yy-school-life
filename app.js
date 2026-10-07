const root=document.querySelector('main');
const page=document.body.dataset.page;
const dayNames=['周一','周二','周三','周四','周五'];
const dayEs=['Lunes','Martes','Miércoles','Jueves','Viernes'];
const schoolDate=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Madrid',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const schoolWeekday=()=>Math.max(0,['Mon','Tue','Wed','Thu','Fri'].indexOf(new Intl.DateTimeFormat('en-US',{timeZone:'Europe/Madrid',weekday:'short'}).format(new Date())));
let selected=schoolWeekday();
let selectedDate=schoolDate();
function syncSchoolDay(){
 const date=schoolDate();
 if(date===selectedDate)return;
 selectedDate=date;
 selected=schoolWeekday();
 document.dispatchEvent(new Event('school-day-change'));
 if(page==='appendix')appendix();
}
setInterval(syncSchoolDay,30000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)syncSchoolDay();});
const intro=(title,es,desc)=>`<div class="intro"><div><div class="eyebrow">${es}</div><h1>${title}</h1><p class="muted">${desc}</p></div><span class="label">家庭资料 · 本地版</span></div>`;
function dayButtons(){return `<div class="days" role="group" aria-label="选择星期">${dayNames.map((n,i)=>`<button type="button" data-day="${i}" aria-pressed="${selected===i}">${n}<small lang="es">${dayEs[i]}</small></button>`).join('')}</div>`}
function lessons(){
 const slots=(from,to)=>timetable.rows.slice(from,to).map((r,j)=>{
  const i=from+j,k=r[selected+1];if(!k)return '';
  const subject=timetable.subjects[k];
  const label=i===7&&[0,1,4].includes(selected)?'下午 2–3':r[0];
  return `<div class="slot"><span>${label}</span><div class="lesson ${subject[2]}"><strong>${subject[0]}</strong><small lang="es">${subject[1]}</small></div></div>`;
 }).join('');
 return `<div class="lesson-period"><div class="period-time"><strong>8:45–12:30</strong><small>上午 · 含课间</small></div><div>${slots(0,5)}</div></div><div class="lesson-period lunch-period"><div class="period-time"><strong>12:30–14:30</strong></div><div>午餐服务 / Comedor</div></div><div class="lesson-period"><div class="period-time"><strong>14:30–16:45</strong><small>下午</small></div><div>${slots(6,9)}</div></div><p class="lesson-time-note">左侧为已确认的时段；每节课及课间的具体起止时间尚未提供。</p>`;
}
function activityList(){const d=extras[selected];if(!d)return '<div class="empty"><strong>周五资料尚未提供</strong><p class="muted">不代表周五没有课外活动。</p></div>';return `<p class="muted">原图将小学一、二年级合并列出。以下是可选活动安排，不代表已报名。</p>${d.rows.filter(r=>r[1]==='1.º y 2.º').map(r=>`<div class="activity"><div><strong>${r[3]}</strong><small lang="es">${r[4]}</small></div><span class="point">${r[2]} 号点</span></div>`).join('')}<details><summary>查看${d.zh}接送位置原图</summary><p>绿色编号对应接送点，不是教室号。点击图片可放大查看。</p><a href="assets/source${d.source}.png" target="_blank" rel="noopener"><img class="map" src="assets/source${d.source}.png" alt="${d.zh}17:45离校接送点原图" loading="lazy"></a></details>`}
function dayView(){return `<h2 id="daily-view">按天查看</h2><p class="day-default-note">按巴塞罗那当地日期自动选择星期；周末默认显示周一，可手动切换。</p>`+dayButtons()+`<div class="layout"><section class="panel"><div class="sectionhead"><div><h2>${dayNames[selected]} · 日常课程</h2><p>Horario de clases · 按原图课程顺序</p></div></div>${lessons()}<details><summary>课程缩写与说明</summary><p>des / Des. 含义待确认；T. 暂按工作坊翻译。PSICO 暂译心理运动，HHSS 暂译社交技能，均待学校确认。原图星号与圆点不作含义推断。</p></details><a class="source-link" href="assets/timetable.jpg" target="_blank" rel="noopener">查看日常课表原图</a></section><section class="panel"><div class="sectionhead"><div><h2>一年级课外活动</h2><p>Actividades extraescolares</p></div>${selected<4?'<span class="label">16:45–17:45</span>':''}</div>${activityList()}${selected<4?'<p class="muted">17:45 是离校接送时间，课外活动时段为16:45–17:45；活动费用未提供。</p>':''}</section></div>`;}
function bindDays(fn){root.querySelectorAll('[data-day]').forEach(b=>b.addEventListener('click',()=>{selected=Number(b.dataset.day);fn();root.querySelector(`[data-day="${selected}"]`).focus({preventScroll:true})}))}
function appendix(){const d=extras[selected];root.innerHTML='<p><a href="publications.html">返回刊物和其他资料</a></p>'+intro('其他年级附录','ANEXO · OTROS CURSOS','保留高年级活动与接送点，便于需要时查阅。')+`<div class="notice">小学二年级与一年级合并列在原图中，可在<a href="timeline.html">一年级时间轴</a>的“上学日的一天”底部展开“按天查看”。以下为三至六年级，以及周二单列的四年级教理课。</div>`+dayButtons()+`<section class="panel"><div class="sectionhead"><div><h2>${dayNames[selected]} · 其他年级安排</h2><p>${d?'17:45 离校 · Salida a las 17:45':'周五尚无资料'}</p></div></div>${d?`<table class="appendix-table"><thead><tr><th scope="col">年级</th><th scope="col">活动 / Actividad</th><th scope="col">接送点</th></tr></thead><tbody>${d.rows.filter(r=>r[1]!=='1.º y 2.º').map(r=>`<tr><td>${r[0]}<small>${r[1]}</small></td><td>${r[3]}<small lang="es">${r[4]}</small></td><td>${r[2]} 号</td></tr>`).join('')}</tbody></table><a class="source-link" target="_blank" rel="noopener" href="assets/source${d.source}.png">查看当天接送位置原图</a>`:'<div class="empty">未提供周五图片，暂不推断活动安排。</div>'}</section><p class="muted">Artmania、Esport360 保留原项目名；具体活动内容以学校说明为准。</p>`;bindDays(appendix)}
if(page==='appendix')appendix();
