function dailyTimetable(){
 const headings=timetable.headers.slice(1).map(h=>{const [zh,es]=h.split('\n');return `<th scope="col">${zh}<small lang="es">${es}</small></th>`}).join('');
 const rows=timetable.rows.map((row,i)=>{
  if(i===5)return '<tr class="week-pause"><th scope="row">12:30–14:30<small>午餐时段</small></th><th scope="row">午餐</th><td colspan="5">午餐服务 / Servicio de comedor</td></tr>';
  let time='';
  if(i===0)time='<th rowspan="5" scope="rowgroup" class="day-time">8:45–12:30<small>上午课程<br>含课间</small></th>';
  if(i===6)time='<th rowspan="3" scope="rowgroup" class="day-time">14:30–16:45<small>下午课程</small></th>';
  const cells=row.slice(1).map((key,d)=>{
   if(i===8&&[0,1,4].includes(d))return '';
   const item=timetable.subjects[key];
   return `<td class="${item[2]}"${i===7&&[0,1,4].includes(d)?' rowspan="2"':''}><strong>${item[0]}</strong><small lang="es">${item[1]}</small></td>`;
  }).join('');
  return `<tr>${time}<th scope="row">${row[0]}</th>${cells}</tr>`;
 }).join('');
 return `<p class="muted">7:30起早到托管 · 8:30–8:45入班 · 16:45课程结束</p><p class="week-hint">手机上可左右滑动查看完整课表。</p><div class="week-scroll" tabindex="0" role="region" aria-label="一年级周课表与作息时间"><table class="week-table daily-week-table"><colgroup><col class="time-column"><col class="order-column"><col span="5"></colgroup><thead><tr><th scope="col">时间区间</th><th scope="col">课程顺序</th>${headings}</tr></thead><tbody>${rows}</tbody></table></div>`;
}
