// Phone presentation reuses the same lessons, dates and detail content as desktop.
function renderMobileDay(){
 const host=document.getElementById('mobile-school-day');
 const extraOpen=host.querySelector('.mobile-extras')?.open;
 host.innerHTML=`<p class="mobile-routine">7:30 起早到托管 · 8:30–8:45 入班 · 16:45 放学</p>${dayButtons()}<p class="mobile-day-caption">${dayNames[selected]}课程 · 按巴塞罗那日期默认选择，周末显示周一</p>${lessons().replace('左侧为','以下为')}<details class="mobile-extras" ${extraOpen?'open':''}><summary>课外活动与接送 ${selected<4?'· 16:45–17:45':''}</summary>${activityList()}</details><details><summary>查看完整周课表</summary>${dailyTimetable()}</details><a class="source-link" href="assets/timetable.jpg" target="_blank" rel="noopener">查看课表原图与课程缩写</a><details><summary>课程缩写说明</summary><p>des / Des. 含义待确认；T. 暂按工作坊翻译。PSICO 暂译心理运动，HHSS 暂译社交技能，均待学校确认。</p></details>`;
 host.querySelectorAll('[data-day]').forEach(b=>b.onclick=()=>{selected=Number(b.dataset.day);renderMobileDay();host.querySelector(`[data-day="${selected}"]`).focus({preventScroll:true});});
}
function mobileAgenda(events){
 const names=['法定节假日','学校假期','学校活动','本地节庆'];
 const items=events.filter(e=>ts(e[0])<=viewStart+(viewDays-1)*dayMs&&ts(e[1])>=viewStart);
 const groups=new Map();
 for(const e of items){const month=iso(Math.max(ts(e[0]),viewStart)).slice(0,7);if(!groups.has(month))groups.set(month,[]);groups.get(month).push(e);}
 return [...groups].map(([month,list])=>`<section class="agenda-month"><h3>${month.slice(2,4)} / ${Number(month.slice(5))}<span>月</span></h3>${list.map(e=>{
  const id=timelineEvents.indexOf(e),kind=e[2]===0?0:e[2]<=3?1:e[2]===6?2:3;
  const date=s=>`${Number(s.slice(5,7))}/${Number(s.slice(8))}`;
  const open=selectedTimelineEvent===id;
  return `<article class="agenda-card kind-${kind}"><button class="agenda-trigger" data-mobile-event="${id}" aria-expanded="${open}" aria-controls="mobile-detail-${id}"><span class="agenda-date">${date(e[0])}${e[0]!==e[1]?`<small>至 ${date(e[1])}</small>`:''}</span><span class="agenda-title"><small>${names[kind]}</small><strong>${calendarIcon(e)}${calendarTitle(e)}</strong></span><span class="agenda-chevron" aria-hidden="true">${open?'−':'+'}</span></button><div class="agenda-detail" id="mobile-detail-${id}" ${open?'':'hidden'}>${open?renderCultureDetail(e):''}</div></article>`;
 }).join('')}</section>`).join('')||'<p class="muted">这段时间没有已提供的安排。</p>';
}
function bindMobileAgenda(){
 document.querySelectorAll('[data-mobile-event]').forEach(b=>b.onclick=()=>{
  const id=Number(b.dataset.mobileEvent),opening=b.getAttribute('aria-expanded')!=='true';
  const before=b.getBoundingClientRect().top;
  document.querySelectorAll('[data-mobile-event]').forEach(other=>{
   const active=other===b&&opening;
   other.setAttribute('aria-expanded',String(active));
   other.querySelector('.agenda-chevron').textContent=active?'−':'+';
   const panel=document.getElementById(other.getAttribute('aria-controls'));
   panel.hidden=!active;panel.innerHTML=active?renderCultureDetail(timelineEvents[id]):'';
  });
  selectedTimelineEvent=opening?id:null;
  document.getElementById('event-detail').innerHTML=opening?renderCultureDetail(timelineEvents[id]):'点击日期事件查看详情。';
  // Keep the tapped row in place when an earlier, long article closes.
  window.scrollBy(0,b.getBoundingClientRect().top-before);
 });
}
