// Phone presentation reuses the same lessons, dates and detail content as desktop.
function renderMobileDay(){
 const host=document.getElementById('mobile-school-day');
 const extraOpen=host.querySelector('.mobile-extras')?.open;
 host.innerHTML=`<p class="mobile-routine">7:30 起早到托管 · 8:30–8:45 入班 · 16:45 放学</p>${dayButtons()}<p class="mobile-day-caption">${dayNames[selected]}课程 · 按巴塞罗那日期默认选择，周末显示周一</p>${lessons().replace('左侧为','以下为')}<details class="mobile-extras" ${extraOpen?'open':''}><summary>课外活动与接送 ${selected<4?'· 16:45–17:45':''}</summary>${activityList()}</details><details><summary>查看完整周课表</summary>${dailyTimetable()}</details><a class="source-link" href="assets/timetable.jpg" target="_blank" rel="noopener">查看课表原图与课程缩写</a><details><summary>课程缩写说明</summary><p>des / Des. 含义待确认；T. 暂按工作坊翻译。PSICO 暂译心理运动，HHSS 暂译社交技能，均待学校确认。</p></details>`;
 host.querySelectorAll('[data-day]').forEach(b=>b.onclick=()=>{selected=Number(b.dataset.day);renderMobileDay();host.querySelector(`[data-day="${selected}"]`).focus({preventScroll:true});});
}
// Mobile has its own month cursor; desktop range and zoom remain independent.
let mobileMonth=null;
let mobileMonthEvents=[];
function mobileAgenda(events){
 mobileMonthEvents=events;
 const first=iso(start).slice(0,7),last=iso(end).slice(0,7);
 if(!mobileMonth)mobileMonth=[first,today.slice(0,7),last].sort()[1];
 const [year,month]=mobileMonth.split('-').map(Number);
 const from=Date.UTC(year,month-1,1),to=Date.UTC(year,month,0),days=new Date(to).getUTCDate();
 const items=events.filter(e=>ts(e[0])<=to&&ts(e[1])>=from);
 const ticks=[1,5,10,15,20,25,days];
 const date=d=>`${Number(d.slice(5,7))}/${Number(d.slice(8))}`;
 return `<div class="month-pager"><button type="button" id="month-prev" aria-label="上个月" ${mobileMonth===first?'disabled':''}>‹</button><strong id="month-heading" aria-live="polite">${year}年${month}月</strong><button type="button" id="month-next" aria-label="下个月" ${mobileMonth===last?'disabled':''}>›</button></div><p class="month-hint">左右滑动切换月份 · 点击活动查看详情</p><div class="month-swipe"><div class="month-ruler" aria-label="本月日期刻度">${ticks.map(d=>`<span style="left:${(d-1)/(days-1)*100}%">${d}</span>`).join('')}</div>${[0,1].map(lane=>{
  const row=items.filter(e=>lane===0?e[2]<4:e[2]===6||e[2]===7);
  return `<section class="month-lane"><div class="month-lane-heading"><h3>${lane===0?'假期':'活动与节庆'}</h3><span>${lane===0?'<span class="legend-school-break">● 学校假期</span>　<span class="legend-official">● 法定节假日</span>':'<span class="legend-school-activity">● 学校活动</span>　<span class="legend-local">● 本地节庆</span>'}</span></div><div class="month-track">${row.map(e=>{
   const id=timelineEvents.indexOf(e),kind=e[2]===0?0:e[2]<=3?1:e[2]===6?2:3;
   const x=(Math.max(from,ts(e[0]))-from)/dayMs/(days-1);
   const stop=(Math.min(to,ts(e[1]))-from)/dayMs/(days-1);
   return `<div class="month-event kind-${kind}" data-start="${x}" data-stop="${stop}"><span class="month-marker" aria-hidden="true"></span>${e[0]!==e[1]?`<span class="month-duration" aria-hidden="true">${ts(e[0])<from?'<i class="continues-before">‹</i>':''}${ts(e[1])>to?'<i class="continues-after">›</i>':''}</span>`:''}<button type="button" data-mobile-event="${id}" aria-haspopup="dialog">${calendarIcon(e)}<strong>${calendarTitle(e)}</strong><small>${date(e[0])}${e[0]!==e[1]?' — '+date(e[1]):''}</small>${ts(e[0])<from||ts(e[1])>to?'<small class="month-continuation">'+(ts(e[0])<from?'上月延续':'')+(ts(e[0])<from&&ts(e[1])>to?' · ':'')+(ts(e[1])>to?'延续至下月':'')+'</small>':''}</button></div>`;
  }).join('')||'<p class="month-empty">本月暂无已提供的安排</p>'}</div></section>`;
 }).join('')}</div><div class="month-footer"><button type="button" id="month-today">回到本月</button></div><dialog class="month-detail-dialog" aria-label="活动详情"><div class="month-detail-toolbar"><button type="button" id="month-detail-close">关闭详情 ×</button></div><div class="month-detail-body"></div></dialog>`;
}
function bindMobileAgenda(){
 const host=document.getElementById('mobile-agenda');
 if(!host||!host.clientWidth)return;
 // Cards stay close to their markers; packing prevents overlap near month-end.
 host.querySelectorAll('.month-track').forEach(track=>{
  const width=track.clientWidth,pad=8,cardWidth=Math.min(148,width-2*pad),rows=[];
  const positioned=[...track.querySelectorAll('.month-event')].map(el=>{
   const x=pad+Number(el.dataset.start)*(width-2*pad),stop=pad+Number(el.dataset.stop)*(width-2*pad);
   const left=Math.max(pad,Math.min(x-16,width-pad-cardWidth));
   const button=el.querySelector('button');button.style.width=cardWidth+'px';button.style.left=left+'px';
   const marker=el.querySelector('.month-marker');marker.style.left=(x-4)+'px';
   const bar=el.querySelector('.month-duration');if(bar){bar.style.left=x+'px';bar.style.width=Math.max(2,stop-x)+'px';}
   const right=Math.max(left+cardWidth,stop);
   let row=rows.findIndex(r=>r.right+12<=Math.min(left,x-4));
   if(row<0){row=rows.length;rows.push({right:0,height:0});}
   rows[row].right=right;rows[row].height=Math.max(rows[row].height,button.offsetHeight+30);
   return {el,row};
  });
  let height=10;const tops=rows.map(r=>{const top=height;height+=r.height;return top;});
  positioned.forEach(({el,row})=>el.style.top=tops[row]+'px');
  track.style.height=Math.max(72,height+6)+'px';
 });
 function moveMonth(delta){
  const [year,month]=mobileMonth.split('-').map(Number);
  const next=iso(Date.UTC(year,month-1+delta,1)).slice(0,7);
  if(next<iso(start).slice(0,7)||next>iso(end).slice(0,7))return;
  mobileMonth=next;host.innerHTML=mobileAgenda(mobileMonthEvents);bindMobileAgenda();
 }
 host.querySelector('#month-prev').onclick=()=>moveMonth(-1);
 host.querySelector('#month-next').onclick=()=>moveMonth(1);
 host.querySelector('#month-today').onclick=()=>{mobileMonth=null;host.innerHTML=mobileAgenda(mobileMonthEvents);bindMobileAgenda();};
 let touch=null,ignoreClick=false;
 const swipe=host.querySelector('.month-swipe');
 swipe.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')touch={x:e.clientX,y:e.clientY};});
 swipe.addEventListener('pointercancel',()=>touch=null);
 swipe.addEventListener('pointerup',e=>{
  if(!touch)return;const dx=e.clientX-touch.x,dy=e.clientY-touch.y;touch=null;
  if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5){ignoreClick=true;moveMonth(dx<0?1:-1);}
 });
 const dialog=host.querySelector('dialog');
 host.querySelector('#month-detail-close').onclick=()=>dialog.close();
 host.querySelectorAll('[data-mobile-event]').forEach(button=>button.onclick=()=>{
  if(ignoreClick)return;
  const e=timelineEvents[Number(button.dataset.mobileEvent)];
  dialog.querySelector('.month-detail-body').innerHTML=renderCultureDetail(e);dialog.showModal();
 });
}
