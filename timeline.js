const timelineEvents=[
// start, end, lane, title, description, source page
['2026-09-11','2026-09-11',0,'加泰罗尼亚日','La Diada',5],['2026-09-24','2026-09-24',0,'梅尔塞节','La Mercè',5],['2026-09-25','2026-09-25',0,'学校休息日','Libre disposición',5],['2026-10-12','2026-10-12',0,'皮拉尔圣母节','El Pilar',5],['2026-12-08','2026-12-08',0,'圣母无原罪节','La Inmaculada',5],['2026-12-22','2027-01-07',0,'圣诞假期','Navidad；按通知起止日期，不额外推断返校日。',5],['2027-02-08','2027-02-08',0,'狂欢节休息日','Libre disposición · Carnaval',5],['2027-03-20','2027-03-29',0,'圣周假期','Semana Santa',5],['2027-05-17','2027-05-17',0,'圣灵降临节后的星期一','Segunda Pascua',5],
['2027-06-21','2027-06-21',1,'学年结束 · 13:00放学','Fin de curso；第三学期最后一天13:00结束课程，仍有食堂；当天食堂结束与接送时间未说明。',5],['2026-09-04','2026-09-04',1,'新生班主任面谈','上午；班主任另行预约具体时间。',5],['2026-09-08','2026-09-08',1,'小学家长会 · 18:00','教室内线下举行；这是家长会日期，不是已确认的开学日期。',5],
['2026-08-26','2026-08-26',2,'食堂表单截止','每个孩子都须填写，不论是否使用食堂；由 Secretaría LS Bonanova 通过APP或邮件发送。',2],['2026-07-01','2026-07-20',2,'外语教材网购期','一年级购买英语教材；NCA不含外语教材。订购时银行卡支付；学校渠道的教材开学第一天交付。',1],['2026-07-13','2026-07-17',2,'教育券到校办理','8:30–13:30；预先激活教育券，NCA：60 €教育券 + 170.50 €银行卡。',2],['2026-07-01','2026-07-31',2,'NCA材料 · 7月50%','仅精确到月份，条带不代表整月都可办理；不使用教育券的家庭按7月、8月各50%支付。',1],['2026-08-01','2026-08-31',2,'NCA材料 · 8月50%','仅精确到月份；一年级全年NCA材料230.50 €。',1],
['2026-06-15','2026-08-20',3,'校服下单期','一年级红色运动上衣；须穿全套新款运动服。uni4me.net。',3],['2026-06-21','2026-07-24',3,'暑期校服取货','此期间周三、周五8:00–14:00；主庭院体育部门办公室。',3],['2026-06-22','2026-07-24',3,'秘书处暑期开放','8:00–14:00，包含起止两日。',6],['2026-07-25','2026-08-26',3,'秘书处休假','包含起止两日。',6],['2026-08-01','2026-08-26',3,'学校关闭','暑期关闭，包含起止两日。',6],['2026-08-27','2026-09-07',3,'秘书处恢复开放','8:00–14:00；通知未给其余学期办公时间。',6]
];
for(let m=8;m<18;m++){const d=new Date(Date.UTC(2026,m,1)),end=new Date(Date.UTC(2026,m+1,0));timelineEvents.push([d.toISOString().slice(0,10),end.toISOString().slice(0,10),2,`${d.getUTCMonth()+1}月学习用品扣款`,'9月至次年6月分10期自动扣款；具体扣款日和金额未说明。条带表示月份范围，不代表每天扣款。',2]);}
// Separate the three calendar categories; preserve source dates and existing records.
for(const e of timelineEvents){
 if(e[2]===0)e[2]=e[3].includes('假期')?2:e[3].includes('休息日')?1:0;
 else e[2]+=2;
}
const officialCalendar2026='https://treball.gencat.cat/ca/ambits/relacions_laborals/ci/calendari_laboral/calendari-festes-2026/';
const officialCalendar2027='https://treball.gencat.cat/ca/ambits/relacions_laborals/ci/calendari_laboral/calendari-festes-2027/';
const barcelonaCalendar2027='https://bcnroc.ajuntament.barcelona.cat/jspui/bitstream/11703/148041/1/GM_DA_FestesLocals_BCN_2027.pdf';
// Merge official holidays by date without shifting existing event references.
const officialHolidays=[
 ['2026-10-12','西班牙国庆日（皮拉尔圣母节）','Fiesta Nacional de España · El Pilar；全国法定节假日。'],
 ['2026-12-08','圣母无原罪节','Inmaculada Concepción；全国法定节假日。'],
 ['2026-12-25','圣诞节','Navidad；全国法定节假日，位于学校圣诞假期内。'],
 ['2026-12-26','圣斯德望节','San Esteban (Sant Esteve)；加泰罗尼亚法定节假日，位于学校圣诞假期内；当天为周六。'],
 ['2027-01-01','元旦','Año Nuevo；全国法定节假日，位于学校圣诞假期内。'],
 ['2027-01-06','三王节','Reyes / Epifanía del Señor；全国法定节假日，位于学校圣诞假期内。'],
 ['2027-03-26','耶稣受难日','Viernes Santo；全国法定节假日，位于学校圣周假期内。'],
 ['2027-03-29','复活节星期一','Lunes de Pascua；加泰罗尼亚法定节假日，位于学校圣周假期内。'],
 ['2027-05-01','劳动节','Fiesta del Trabajo；全国法定节假日；当天为周六。'],
 ['2027-05-17','圣灵降临节后的星期一','Segunda Pascua；巴塞罗那市法定节假日。'],
 ['2027-06-24','圣胡安节','San Juan (Sant Joan)；加泰罗尼亚法定节假日；位于学校已公布的学年结束日之后。']
];
for(const [date,title,description] of officialHolidays){
 const source=date==='2027-05-17'?[barcelonaCalendar2027,'巴塞罗那市2027年地方节假日公告']:[date.startsWith('2026')?officialCalendar2026:officialCalendar2027,'加泰罗尼亚政府法定节假日日历'];
 const existing=timelineEvents.find(e=>e[0]===date&&e[2]===0);
 if(existing){existing[3]=title;existing[4]=description;existing[6]=source;}
 else timelineEvents.push([date,date,0,title,description,null,source]);
}
// School outings and cultural activities; source gives month/day, years follow the 2026–2027 school year.
const schoolActivities=[
 ['2026-10-26','2026-10-26','栗子节 · Can Mas','Castañada en Can Mas；学校栗子节活动，地点或活动场所为 Can Mas。'],
 ['2026-12-18','2026-12-18','低年级圣诞合唱','Cantata de Navidad del ciclo inicial；小学一、二年级圣诞合唱演出。'],
 ['2027-02-05','2027-02-05','狂欢节活动','Carnaval；学校狂欢节庆祝活动，服装要求未说明。与2月8日学校休息日为不同安排。'],
 ['2027-02-09','2027-02-09','校内英语戏剧','Teatro en inglés en el colegio: “Georgina and the dragon”；校内英语戏剧《Georgina 与龙》。'],
 ['2027-03-12','2027-03-12','马匹主题外出活动','Actividad sobre caballos en Esparraguera；原文项目名 Camins a cavall，地点 Esparraguera。是否实际骑马及具体形式需看详细通知。'],
 ['2027-05-21','2027-05-21','集体交流体验活动','Convivencias；集体交流与共同生活体验活动，地点及具体内容未说明。'],
 ['2027-06-14','2027-06-16','La Capella 校外营地','Colonias en La Capella；6月14–16日共三天。住宿晚数、接送和具体安排待学校通知。']
];
for(const [from,to,title,description] of schoolActivities){
 timelineEvents.push([from,to,6,title,description+' 图片未标年份，按2026–2027学年整理；具体时间及费用未提供。',null,['assets/school-cultural-activities.jpg','学校外出与文化活动安排原图']]);
}
// Date supplied by the family; no school notice or detailed timetable provided.
timelineEvents.push(['2026-10-20','2026-10-20',6,'秋季定向越野','Carrera de orientación de otoño；10月20日秋季定向越野。具体时间、地点及装备要求待补充。',null]);
// Recurring local celebrations: dates are traditions, not confirmed event programmes.
const cityTraditions='https://www.meet.barcelona/ca/esdeveniments-principals';
const autumnTraditions='https://www.barcelona.cat/barcelonacultura/ca/castanyada-festa-familiar-popular-activitats-joc-castanyes-moniatos-panellets-diversio-tradicio-teatre';
const christmasTraditions='https://bcnroc.ajuntament.barcelona.cat/jspui/bitstream/11703/90391/4/8246.pdf';
const localCelebrations=[
 ['2026-10-31','2026-10-31','万圣节前夜 · Halloween','Halloween / Noche de Halloween；10月31日晚常有装扮、亲子游戏等庆祝活动。本地也同时庆祝传统栗子节。',autumnTraditions],
 ['2026-10-31','2026-11-01','本地栗子节 · Castanyada','Castañada y Todos los Santos；传统围绕10月31日晚至11月1日，吃烤栗子、红薯和 panellets 糕点。各社区活动可能在其他日期举行，与学校10月26日活动分开记录。',autumnTraditions],
 ['2026-12-24','2026-12-25','平安夜与圣诞节','Nochebuena y Navidad；家庭聚会、圣诞装饰及加泰罗尼亚 Tió 传统。圣诞市集、亮灯与演出各有日期，此处不代表其开放期间。',christmasTraditions],
 ['2026-12-31','2026-12-31','跨年夜 · Nochevieja','Nochevieja / Fin de Año；12月31日晚迎接新年，常见传统是午夜吃12颗葡萄。城市庆典场地和时刻另行公布。','https://ajuntament.barcelona.cat/premsa/2018/12/28/celebracio-del-cap-dany-a-les-fonts-de-montjuic-6/'],
 ['2027-01-05','2027-01-06','三王夜与三王节','Noche de Reyes y Día de Reyes；传统1月5日迎接三王，1月6日送礼。此处标记传统日期，2027年游行路线和时刻待官方公告。',cityTraditions],
 ['2027-02-12','2027-02-12','圣欧拉莉亚节','Santa Eulalia；巴塞罗那冬季城市节庆，纪念日为2月12日，常见巨人巡游、人塔和民俗活动。2027年完整活动日期与场次待公布。','https://patrimonifestiu.cultura.gencat.cat/Festes-de-Santa-Eulalia-Barcelona-festa-major-d-Hivern-de-Barcelona'],
 ['2027-04-23','2027-04-23','圣乔治节 · Sant Jordi','Día de Sant Jordi；每年4月23日以书籍、玫瑰和龙的故事庆祝，街头常有书摊与花摊。2027年具体活动地点和时刻待公布。',cityTraditions],
 ['2027-06-23','2027-06-23','圣胡安之夜','Verbena de San Juan；6月23日晚有篝火、烟火、音乐和传统糕点等庆祝。此处为传统日期，2027年具体场地与节目待公布。','https://www.barcelona.cat/barcelonacultura/es/recomanem/todo-punto-para-la-verbena-de-sant-joan']
];
for(const [from,to,title,description,url] of localCelebrations){
 timelineEvents.push([from,to,7,title,description+' 仅作本地节庆提醒，不表示学校放假或已报名；来源用于核对传统日期，往年场次不套用于本学年。',null,[url,'官方节庆与传统介绍']]);
}
const calendarKinds=['假期　<span class="legend-school-break">● 学校假期</span>　<span class="legend-official">● 法定节假日</span>','活动与节庆　<span class="legend-school-activity">● 学校活动</span>　<span class="legend-local">● 巴塞罗那本地节庆</span>'];
// Keep source names in the detail view, with compact Chinese labels on the axis.
function calendarTitle(e){return e[3].replace(/ · (Halloween|Castanyada|Nochevieja|Sant Jordi)$/, '');}
function calendarIcon(e){
 const key=e[2]===6&&e[0]==='2026-10-26'?'chestnut':e[3].includes('Halloween')?'pumpkin':e[0]==='2026-12-24'?'tree':e[3].includes('Sant Jordi')?'book':null;
 if(key){
  const crop={chestnut:'32 35 110 125',pumpkin:'60 20 170 145',tree:'58 12 165 160',book:'179 27 66 135'};
  return `<span class="calendar-icon" aria-hidden="true">${cultureIllustration(key).replace('0 0 280 190',crop[key])}</span>`;
 }
 if(e[2]===6&&e[0]==='2026-10-20')return '<span class="calendar-icon" aria-hidden="true"><svg viewBox="0 0 32 32"><circle cx="16" cy="17" r="12" fill="#fdfbf6" stroke="#71899b" stroke-width="2"/><circle cx="16" cy="3" r="2" fill="none" stroke="#71899b"/><path d="M22 10L18 19L10 24L14 15Z" fill="#86a496"/><path d="M22 10L18 19L14 15Z" fill="#cfa4a1"/><circle cx="16" cy="17" r="1.5" fill="#496354"/></svg></span>';
 return '';
}
const dayMs=86400000;
const ts=s=>Date.parse(s+'T00:00:00Z');
const iso=n=>new Date(n).toISOString().slice(0,10);
const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Paris',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const start=ts('2026-10-07'),end=ts('2027-07-31');
const totalDays=Math.round((end-start)/dayMs)+1;
let viewDays=totalDays;
let dailyViewOpen=false;
let selectedTimelineEvent=null;
let viewStart=Math.max(start,Math.min(ts(today),end-(viewDays-1)*dayMs));
function renderTimeline(){
 const count=Math.round((end-start)/dayMs)+1;
 const viewportWidth=Math.max(240,document.querySelector('main').clientWidth-(innerWidth<=760?50:98));
 const scale=viewportWidth/viewDays,width=count*scale;
 const lanes=calendarKinds;
 // School dates take precedence, including both boundaries of vacation ranges.
 const schoolEvents=timelineEvents.filter(e=>(e[2]>=1&&e[2]<=3)||e[2]===6);
 const visible=timelineEvents.filter(e=>(e[2]<4||e[2]===6||e[2]===7)&&ts(e[0])<=end&&ts(e[1])>=start&&
  !(e[2]===0&&schoolEvents.some(s=>e[0]<=s[1]&&e[1]>=s[0]))
 ).sort((a,b)=>a[0].localeCompare(b[0]));
 let months='';for(let d=new Date(start);d.getTime()<=end;){let next=Date.UTC(d.getUTCFullYear(),d.getUTCMonth()+1,1);const stop=Math.min(next,end+dayMs);months+=`<div style="width:${(stop-d.getTime())/dayMs*scale}px">${String(d.getUTCFullYear()).slice(-2)}/${d.getUTCMonth()+1}</div>`;d=new Date(next);}
 const content=lanes.map((name,l)=>{
  let occupied=[];const items=visible.filter(e=>l===0?e[2]<4:e[2]===6||e[2]===7).map(e=>{const kind=e[2]===0?0:e[2]<=3?1:e[2]===6?2:3;const x=(Math.max(ts(e[0]),start)-start)/dayMs*scale;const duration=(Math.min(ts(e[1]),end)-Math.max(ts(e[0]),start))/dayMs+1;const labelX=Math.min(x,width-166);let row=occupied.findIndex(v=>v<=labelX);if(row<0)row=occupied.length;occupied[row]=labelX+Math.max(duration*scale,160)+14;return `<button class="timeline-event lane-${kind}" style="left:${x}px;top:${row*85+12}px;width:${Math.max(duration*scale,8)}px" data-event="${timelineEvents.indexOf(e)}"><span class="event-label">${calendarIcon(e)}<strong>${calendarTitle(e)}</strong><small>${e[0]===e[1]?e[0]:e[0]+' 至 '+e[1]}</small></span></button>`;}).join('');
  return `<div class="timeline-lane" style="height:${Math.max(occupied.length,1)*85+20}px"><div class="lane-title">${name}</div>${items||'<span class="lane-empty">所选日期内没有已提供的记录</span>'}</div>`;
 }).join('');
 document.querySelector('main').innerHTML=`<div class="intro"><div><div class="eyebrow">1.º DE PRIMARIA · CRONOLOGÍA</div><h1>一年级时间轴</h1><p class="muted">日常上学、午餐、假期与学校活动 · 年度时间轴不含课外班</p></div></div><div class="mobile-only mobile-shortcuts"><a href="#school-day">当天课程</a><a href="#annual-calendar">年度日程 ↓</a></div><section class="panel" id="school-day"><h2>上学日的一天</h2><div id="mobile-school-day" class="mobile-only"></div><div class="desktop-school-day">${dailyTimetable()}<div class="timeline-controls"><button type="button" id="toggle-daily-view" aria-expanded="${dailyViewOpen}" aria-controls="daily-view-content">${dailyViewOpen?'收起':'展开'}按天查看 · 课程与课外活动</button></div><div id="daily-view-content" ${dailyViewOpen?'':'hidden'}></div></div></section><section class="panel annual" id="annual-calendar"><div class="sectionhead"><div><h2>一年总览</h2><p>2026年10月7日至2027年7月31日。默认显示整个学年；可切换到从今天起约3个月的视窗。</p></div></div><div class="timeline-controls" aria-label="时间轴范围"><button id="full-year" aria-pressed="${viewDays===totalDays}">整个学年</button><button id="near-months" aria-pressed="${viewDays!==totalDays}">近3个月</button></div><div class="mobile-only" id="mobile-agenda">${mobileAgenda(visible)}</div><div class="timeline-scroll" tabindex="0" role="region" aria-label="一年级年度横向时间轴"><div class="timeline-canvas" style="width:${width}px"><div class="timeline-months">${months}</div>${content}</div></div><div class="event-detail" id="event-detail" aria-live="polite">${selectedTimelineEvent===null?'点击时间轴上的日期事件，查看由来、习俗、食物和活动安排。':renderCultureDetail(timelineEvents[selectedTimelineEvent])}</div></section>`;
 renderMobileDay();
 const dailyContent=document.getElementById('daily-view-content');
 function renderDayView(){
  dailyContent.innerHTML=dayView();
  dailyContent.querySelectorAll('[data-day]').forEach(button=>button.onclick=()=>{
   selected=Number(button.dataset.day);
   renderDayView();
   dailyContent.querySelector(`[data-day="${selected}"]`).focus({preventScroll:true});
  });
 }
 if(dailyViewOpen)renderDayView();
 document.getElementById('toggle-daily-view').onclick=event=>{
  dailyViewOpen=!dailyViewOpen;
  dailyContent.hidden=!dailyViewOpen;
  event.currentTarget.setAttribute('aria-expanded',String(dailyViewOpen));
  event.currentTarget.textContent=`${dailyViewOpen?'收起':'展开'}按天查看 · 课程与课外活动`;
  if(dailyViewOpen)renderDayView();
 };
 const scroller=document.querySelector('.timeline-scroll');
 const actualWidth=scroller.clientWidth;
 if(actualWidth>0){
 // Match the requested date span to the available width on every screen.
 const actualScale=actualWidth/viewDays;
 document.querySelector('.timeline-canvas').style.width=`${count*actualScale}px`;
 // The small border-width difference is applied consistently to all date positions.
 const ratio=actualScale/scale;
 document.querySelectorAll('.timeline-months>div').forEach(el=>el.style.width=`${parseFloat(el.style.width)*ratio}px`);
 document.querySelectorAll('[data-event]').forEach(el=>{
  const left=parseFloat(el.style.left)*ratio;
  el.style.left=`${left}px`;el.style.width=`${Math.max(8,parseFloat(el.style.width)*ratio)}px`;
  const label=el.querySelector('.event-label');
  label.style.left=`${Math.min(0,count*actualScale-left-label.offsetWidth-6)}px`;
 });
 // Month guide lines use the same exact date scale as the month ruler.
 let monthOffset=0;
 const guides=[...document.querySelectorAll('.timeline-months>div')].slice(0,-1).map(el=>{
  monthOffset+=parseFloat(el.style.width);
  return `linear-gradient(to right,transparent ${monthOffset-.5}px,#eae5d9 ${monthOffset-.5}px,#eae5d9 ${monthOffset+.5}px,transparent ${monthOffset+.5}px)`;
 }).join(',');
 document.querySelectorAll('.timeline-lane').forEach(el=>el.style.backgroundImage=guides);
 function updateWindow(){
  viewStart=Math.max(start,Math.min(end-(viewDays-1)*dayMs,start+Math.round(scroller.scrollLeft/actualScale)*dayMs));
 }
 scroller.scrollLeft=(viewStart-start)/dayMs*actualScale;
 scroller.addEventListener('scroll',updateWindow,{passive:true});
 updateWindow();
 }
 function zoom(days,reset,focusId){
  viewDays=Math.max(30,Math.min(totalDays,days));
  viewStart=Math.max(start,Math.min(reset?ts(today):viewStart,end-(viewDays-1)*dayMs));
  renderTimeline();
  document.getElementById(focusId).focus({preventScroll:true});
 }
 document.getElementById('near-months').onclick=()=>zoom(92,true,'near-months');
 document.getElementById('full-year').onclick=()=>zoom(totalDays,false,'full-year');
 document.querySelectorAll('[data-event]').forEach(b=>b.onclick=()=>{
  selectedTimelineEvent=Number(b.dataset.event);
  document.querySelector('#event-detail').innerHTML=renderCultureDetail(timelineEvents[selectedTimelineEvent]);
 });
 bindMobileAgenda();
 document.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>{
  const event=document.querySelector(`[data-event="${b.dataset.jump}"]`);
  event.click();event.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});event.focus({preventScroll:true});
 });
}
renderTimeline();

let timelineResize, timelineWidth=innerWidth;
window.addEventListener('resize',()=>{if(innerWidth===timelineWidth)return;timelineWidth=innerWidth;clearTimeout(timelineResize);timelineResize=setTimeout(renderTimeline,150);});

document.addEventListener('school-day-change',()=>{if(dailyViewOpen||innerWidth<=760)renderTimeline();});
