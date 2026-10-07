// Cultural background is separate from the school's confirmed dates and programme.
const cultureSources={
 jordi:['加泰罗尼亚文化部门：圣乔治节与图书日','https://patrimoni.gencat.cat/es/coleccion/sant-jordi-y-el-dia-del-libro'],
 dragon:['巴塞罗那市政府：圣乔治传说','https://www.barcelona.cat/culturapopular/ca/festes-i-tradicions/personatges-i-elements-festius/llegenda-de-sant-jordi'],
 bread:['巴塞罗那旅游局：圣乔治面包','https://bid.barcelonaturisme.com/wv3/es/page/3145/pa-de-sant-jordi.html'],
 cake:['加泰罗尼亚节庆遗产：圣乔治节','https://patrimonifestiu.cultura.gencat.cat/Festa-de-Sant-Jordi-Barcelona-Dia-del-Llibre'],
 autumn:['巴塞罗那市政府：栗子节传统','https://www.barcelona.cat/barcelonacultura/ca/castanyada-festa-familiar-popular-activitats-joc-castanyes-moniatos-panellets-diversio-tradicio-teatre'],
 chestnut:['博盖利亚市场：诸圣节餐桌','https://www.boqueria.barcelona/index.php/en/la-taula-de-tots-sants-n-154-ca'],
 halloween:['爱尔兰官方门户：Samhain 与万圣节传统','https://api.ireland.ie/en/halloween/6-halloween-traditions-that-come-from-irelands-samhain-festival/'],
 pumpkin:['戈尔韦城市博物馆：萝卜灯传统','https://galwaycitymuseum.ie/blog/turnip-lantern-tradition/'],
 christmas:['巴塞罗那市政府：圣诞餐桌','https://ajuntament.barcelona.cat/sarria-santgervasi/es/noticias/neules-torrons-escudella-i-canelons-que-no-pot-faltar-a-taula-per-nadal-442156'],
 tio:['加泰罗尼亚旅游局：Tió 圣诞传统','https://www.catalunya.com/es/continguts/article/caga-tio-nadal-1731507242824'],
 newyear:['巴塞罗那市政府：跨年与葡萄传统','https://ajuntament.barcelona.cat/premsa/2018/12/28/celebracio-del-cap-dany-a-les-fonts-de-montjuic-6/'],
 kings:['巴塞罗那市政府：三王与愿望信','https://ajuntament.barcelona.cat/sants-montjuic/ca/noticies/els-reis-mags-arriben-a-santsmontjuic-1587726'],
 eulalia:['加泰罗尼亚节庆遗产：圣欧拉莉亚节','https://patrimonifestiu.cultura.gencat.cat/Festes-de-Santa-Eulalia-Barcelona-festa-major-d-Hivern-de-Barcelona'],
 aspas:['巴塞罗那市政府：Aspes 节日点心','https://www.barcelona.cat/culturapopular/en/festivals-and-traditions/food-and-drink/aspes-de-santa-eulalia'],
 joan:['巴塞罗那市政府：圣胡安之夜','https://www.barcelona.cat/barcelonacultura/es/recomanem/todo-punto-para-la-verbena-de-sant-joan'],
 carnival:['巴塞罗那省政府：狂欢节与儿童活动','https://www.diba.cat/es/web/sala-de-premsa/-/el-carnestoltes-ja-%C3%A9s-aqu%C3%AD-'],
 easter:['巴塞罗那市场：圣周饮食传统','https://ajuntament.barcelona.cat/mercats/es/una-mirada-las-tradiciones-gastronomicas-de-la-semana-santa'],
 mona:['巴塞罗那旅游局：Mona de Pascua','https://thisisbarcelona.com/es/agenda/semana-santa-la-mona-de-pascua'],
 pentecost:['巴塞罗那市政府：跨文化日历','https://ajuntament.barcelona.cat/horta-guinardo/sites/default/files/documents/calendari_a4_h_02.pdf'],
 immaculate:['梵蒂冈：圣母无原罪节的含义','https://www.vatican.va/content/john-paul-ii/es/angelus/1990/documents/hf_jp-ii_ang_19901208.html'],
 national:['西班牙政府：国庆庆典','https://www.lamoncloa.gob.es/multimedia/galeriasfotograficas/presidente/paginas/2019/121019-12octubre.aspx?galf1er=0&galf2r=1'],
 labour:['国际劳工组织：八小时工作制的历史','https://www.ilo.org/resource/article/convention-no-1-landmark-workers%E2%80%99-rights']
};
const cultureGuides={
 jordi:{name:'书、玫瑰与龙的一天',es:'Sant Jordi · Libros, rosas y dragones',art:'book',tags:['玫瑰 Rosa','书 Libro','龙 Dragón'],
 origin:['Sant Jordi 是圣乔治的加泰罗尼亚语名称。每年4月23日，人们把守护圣人的纪念、赠花和阅读结合在一起；它是重要的文化节日，但本身不等于学校休息日。','传说中，一条龙威胁村民，圣乔治挺身救下公主；龙血落地的地方长出玫瑰，他摘花相赠。这是民间传说，不是可验证的历史事件。加泰罗尼亚流传的版本常把故事放在 Montblanc。','赠玫瑰的习俗比现代图书日更早。20世纪的出版与书商推广活动，让书籍逐渐成为主角，后来又与4月23日世界图书和版权日相呼应。'],
 customs:['街头书摊、玫瑰花摊和作者签售是最鲜明的景象。家庭成员、朋友和伴侣都可以互赠书与花，不必按性别分配礼物。','学校、图书馆常围绕龙、骑士、玫瑰讲故事或做手工。这里是一般文化背景，并不表示本校已安排当日活动。'],
 food:['Pa de Sant Jordi：切开有红黄条纹的节日面包，常以奶酪、sobrasada 猪肉软香肠和核桃面团组合，呼应加泰罗尼亚旗帜。这是现代烘焙传统，不是中世纪传说中的食物。','Pastís de Sant Jordi：常做成书本造型的层叠海绵蛋糕。节日的核心仍是书与玫瑰，没有必须吃的统一菜单。'],
 family:['可以让孩子选一本插画书、做一朵纸玫瑰，再用自己的话讲一遍“勇敢帮助别人”的故事。','练习一句：«Un libro y una rosa, por favor.»（请给我一本书和一朵玫瑰。）逛摊或签售的地点、时间以2027年公告为准。'],sources:['jordi','dragon','bread','cake']},
 castanyada:{name:'秋天的栗子与小甜点',es:'Castañada · Castanyada i Tots Sants',art:'chestnut',tags:['栗子 Castañas','红薯 Boniatos','杏仁点心 Panellets'],
 origin:['Castanyada 是加泰罗尼亚的秋季传统，与11月1日诸圣节、追思逝者以及秋收时节相联系。如今许多家庭、学校和社区把它过成温暖的聚会。','关于“敲钟人吃栗子补充体力”的说法是常见民俗解释，不能当作唯一确定起源。现在的活动往往提前到10月底，所以学校10月26日庆祝并不奇怪。'],
 customs:['烤栗子的香味、秋季摊位和“栗子婆婆”（castanyera）的故事很有代表性。学校常借这个主题认识秋季果实、唱歌和做手工，但本校 Can Mas 行程仍以通知为准。','诸圣节也有人给逝者献花、探访墓园。它与万圣节前夜时间相邻，却有不同文化背景；本地家庭可以同时参与两种庆祝。'],
 food:['Castanyes / castañas：烤栗子；moniatos / boniatos：烤红薯，都是秋季的代表食物。','Panellets：以杏仁和糖为主的小点心，经典款外裹松子，也有其他口味。购买时可问 «¿Lleva frutos secos?»（含坚果吗？）；每家配方可能不同。'],
 family:['一起观察带刺的栗子壳、画秋叶，或少量品尝几种 panellets，比单纯记住节名更直观。','可以教孩子区分“学校提前举办栗子节”和“城市传统节日日期”；不要据此推断学校提供点心或要求带食物。'],sources:['autumn','chestnut']},
 halloween:{name:'从萝卜灯到南瓜灯',es:'Halloween · Noche de Halloween',art:'pumpkin',tags:['南瓜 Calabaza','装扮 Disfraz','糖果 Caramelos'],
 origin:['Halloween 的名称与诸圣节前夜有关，其发展也与爱尔兰等地的 Samhain 季节转换传统相连，后来融合基督教节日、移民文化和现代大众娱乐。','爱尔兰过去会把萝卜挖空做灯。移民把这类习俗带到北美，较容易雕刻的南瓜逐渐成为著名象征；今天常见的样貌经历了长期变化。'],
 customs:['10月31日晚常见变装、南瓜灯、游戏和主题派对；西语“不给糖就捣蛋”是 «Truco o trato»。','巴塞罗那有社区与文化中心办主题活动，但不应假定每家住户都接待敲门讨糖，或所有儿童活动都是恐怖主题。当地 Castanyada 仍有自己的传统。'],
 food:['糖果和南瓜造型饼干是现代庆祝中常见的东西，并没有巴塞罗那统一规定的“万圣节正餐”。','若想体验更本地的秋季味道，可同时认识烤栗子、红薯和 panellets；这些属于栗子节传统，不要混写成源自 Halloween。'],
 family:['可选友善的小幽灵、动物或童话装扮，用彩纸做南瓜灯；用电池灯代替真火，是适合家庭手工的做法。','参加前核对活动年龄和惊吓程度。孩子不喜欢恐怖装扮也可以选择普通秋季手工。'],sources:['halloween','pumpkin','autumn']},
 christmas:{name:'加泰罗尼亚的圣诞餐桌',es:'Navidad · Nadal',art:'tree',tags:['圣诞木头 Tió','杏仁糖 Turrón','蛋卷 Neules'],
 origin:['圣诞节在基督教传统中纪念耶稣诞生。今天也有许多非宗教家庭把它作为团聚、交换祝福和送礼的节日；家庭做法并不完全相同。','加泰罗尼亚很有特色的是 Tió：一根画上笑脸、盖着毯子的木头。孩子在圣诞前“喂”它，节日时唱歌并用木棒敲击，让它“送出”糖果和小礼物。'],
 customs:['Pessebre / belén 是耶稣诞生场景模型；圣诞歌西语叫 villancicos、加泰语叫 nadales。圣诞市集、灯饰和合唱也是认识本地文化的入口。','12月24日平安夜、25日圣诞节、26日 Sant Esteve 以及1月三王节各有不同重点。整段学校假期并不意味着每天都有城市庆典。'],
 food:['Escudella i carn d’olla：传统肉汤与炖肉，圣诞汤里常见大贝壳形意面 galets。','12月26日常吃 canelons（肉馅卷面）；甜食包括 torrons / turrones（不同口味的糖块）和 neules（细脆蛋卷）。这些是常见节日餐桌食物，并非学校合唱当天的供餐承诺。'],
 family:['可做一个纸筒 Tió、学一首短圣诞歌，或者在橱窗中找出 belén 的人物。用故事和手工介绍文化，不需要要求孩子接受宗教信仰。','学校圣诞合唱是否邀请家长、穿什么服装、几点入场，应看班级通知，不能照搬城市音乐会信息。'],sources:['christmas','tio']},
 newyear:{name:'用十二声钟响迎接新年',es:'Nochevieja · Fin de Año',art:'clock',tags:['钟声 Campanadas','葡萄 Uvas','新年 Año Nuevo'],
 origin:['Nochevieja 是12月31日辞旧迎新的夜晚；Cap d’Any 是当地常见的加泰语说法。它的重点是日历转换、家人朋友相聚以及对新年的期望。','午夜随着十二声钟响吃十二颗葡萄，是西班牙著名习俗。关于这一习俗如何形成，存在不同历史解释，不宜简单断言完全由某一次葡萄丰收造成。'],
 customs:['很多家庭围着电视听钟声，城市也可能有音乐、灯光或烟火庆典。旧新闻可帮助理解传统，但其地点、入场规则和表演时间不能当作2026年末的安排。','«¡Feliz Año Nuevo!» 是“新年快乐”。可以给亲友写一句祝福，也可以写下新一年想学习的小本领。'],
 food:['主角是 doce uvas（十二颗葡萄），正式午夜钟声与前面的提示钟声不同。成年人有时用 cava 起泡酒举杯，儿童可用水或其他无酒精饮品。','家庭晚餐没有全市统一菜式；跨年期间也常继续分享圣诞甜点。'],
 family:['不必让六岁的孩子熬夜，可以提前做一次“家庭倒计时”，画十二颗葡萄或许十二个小愿望。','给孩子吃葡萄时由大人处理成适合食用的小块，不边跑动边吃，也不要求赶着钟声吞咽。'],sources:['newyear','christmas']},
 kings:{name:'三位国王与孩子的愿望信',es:'Reyes Magos · Reis d’Orient',art:'crown',tags:['愿望信 Carta','游行 Cabalgata','三王面包 Roscón'],
 origin:['三王传统源于基督教中东方贤士向婴儿耶稣献礼的故事。西班牙习俗中的名字是 Melchor、Gaspar、Baltasar；在加泰语资料中会看到 Melcior 等对应写法。','对很多家庭来说，1月5日晚和6日早晨是孩子收礼物的重要时刻。现代城市游行也吸引不同文化背景的家庭参与。'],
 customs:['孩子写信给三王或交给使者 paje / patge；1月5日传统上举行 cabalgata / cavalcada，花车、音乐与表演营造迎接三王的气氛。','1月6日家庭拆礼物、聚餐。书信可包含希望得到的礼物，也可以写希望家人健康、交到朋友等愿望。'],
 food:['Roscón de Reyes / tortell de Reis：环形甜面包，常有糖渍水果，也有奶油等夹馅。传统上内藏小人偶和一颗蚕豆。','常见游戏规则是找到人偶者戴纸王冠、找到蚕豆者“付面包钱”，各家做法不同。分给孩子前先检查隐藏物，不把它们当作可吃的配料。'],
 family:['可以用图画制作愿望信，练习 «Queridos Reyes Magos…»（亲爱的三王……），不必写很长。','2027年市中心及社区游行的线路、时间和是否预约，需要查看当年公告；时间轴标的是传统日期。'],sources:['kings','christmas']},
 eulalia:{name:'认识巴塞罗那的冬季城市节',es:'Santa Eulalia · Santa Eulàlia',art:'star',tags:['巨人 Gigantes','人塔 Castellers','点心 Aspes'],
 origin:['Santa Eulàlia 是巴塞罗那的守护圣人之一，2月12日是她的纪念日。有关她年轻时坚守信仰的故事属于宗教与地方传说。','今天的冬季节庆把城市记忆与民俗表演结合起来。节目经常分布在纪念日前后，而不是只在2月12日一天举行。'],
 customs:['Gegants / gigantes 是由人操控的巨型人偶；castellers 是叠人塔团队；sardanes 是环形民间舞。Laies 游行以女性巨人形象为特色。','有些年份也安排 correfoc（火舞巡游）与亲子节目。具体哪些活动适合儿童、有没有火花与巨响，要看当年单项说明。'],
 food:['Aspes de Santa Eulàlia：X形的甜面包点心，常撒糖并饰以糖渍樱桃；造型来自圣人的传统象征。部分旧城和 Sarrià 的面包店会制作。','传统活动中有搭配热巧克力的做法，但不能据此保证2027年每个场次都会派发。'],
 family:['可先在照片或图书中认识巨人与人塔，现场观察人物衣服、音乐和团队配合，让孩子挑一个最喜欢的巨人。','想轻松参与时优先挑白天的游行或静态展览；本页不会把往年节目表当成本学年预约信息。'],sources:['eulalia','aspas']},
 joan:{name:'火光、夏夜与分享的甜面包',es:'Verbena de San Juan · Revetlla de Sant Joan',art:'fire',tags:['篝火 Hogueras','甜面包 Coca','夏夜 Verbena'],
 origin:['圣胡安之夜有古老的迎夏、太阳与火的庆祝背景，后来与6月24日施洗者约翰的纪念日结合。庆祝通常从6月23日晚开始；不要把它当作每年天文学夏至的精确日期。','在加泰罗尼亚，火象征更新与共同庆祝。Flama del Canigó 是传递火种的地方传统之一。'],
 customs:['邻里、家人和朋友相聚吃饭、听音乐，一些地点有篝火和烟火。23日夜晚的庆祝与24日法定节假日是相连而不同的两个日期。','城市内各区的规则、篝火位置与节目会变化；是否能看到表演、是否需要预约，应核对2027年公告。'],
 food:['Coca de Sant Joan 是标志性的长形甜面包或糕点，常见糖渍水果和松子，也有奶油或其他版本，适合切块分享。','成年人可能配 cava；给孩子选无酒精饮品即可。没有要求每个家庭都购买同一种口味。'],
 family:['可以一起挑选一小块 coca，讲讲“为什么大家在夏天点火庆祝”，或在安全距离外看公共表演。','带孩子参加时遵守现场隔离线；孩子若怕巨响，可选择白天活动，不必亲自燃放烟火。'],sources:['joan']},
 carnival:{name:'装扮、游戏与一段热闹的日子',es:'Carnaval · Carnestoltes',art:'mask',tags:['装扮 Disfraces','煎蛋 Tortilla','鸡蛋香肠 Botifarra'],
 origin:['Carnaval 与进入基督教四旬期之前的庆祝周期有关，也吸收了更早的季节性民俗。进入较节制的时期前，盛装、食物、游戏与社会角色的倒置构成节日特色。','在加泰罗尼亚也叫 Carnestoltes，节日期间可出现象征玩笑与欢乐的狂欢节国王。现代学校通常把它作为创作、装扮和集体活动的主题。'],
 customs:['常见内容是主题服装、花车巡游和音乐；Dijous Gras（肥胖星期四）与最后的“埋葬沙丁鱼”也属于传统周期。具体哪天举办校内活动，由学校另行安排。','本校2月5日庆祝活动与2月8日休息日已经分别列出。不能因为休息日写着 Carnaval 就把它当成当天有校内表演。'],
 food:['Dijous Gras 常见 truita / tortilla（煎蛋）与 botifarra d’ou（鸡蛋香肠）；也可见 coca de llardons（带猪油渣的酥点）。','这些是文化背景，不表示学校会供应，也不表示孩子必须携带。饮食限制应依实际配料处理。'],
 family:['可先用纸做一个面具，再练习 «Voy disfrazada de…»（我装扮成……）。是否必须跟随班级主题、能否带配件，以学校通知为准。','在休息日可以延续绘画、故事等家庭活动；不把城市游行的时间推定为学校集合时间。'],sources:['carnival']},
 easter:{name:'春天、复活节与巧克力橱窗',es:'Semana Santa · Pascua',art:'egg',tags:['复活节 Pascua','巧克力 Chocolate','蛋糕 Mona'],
 origin:['圣周在基督教传统中纪念耶稣受难、死亡与复活，复活节日期每年变化。学校假期是学校公布的一段放假区间，范围可以比单个宗教节日更长。','这段时间也承载春天、新生和家庭团聚的文化主题；不同家庭可以选择宗教活动或普通春日休闲。'],
 customs:['部分地方举行圣枝、游行或受难剧；巴塞罗那的活动因社区而异。街头宗教仪式不等于全城统一节目。','加泰罗尼亚的 Mona de Pascua 与长辈或教父母赠给孩子的传统有关，如今家庭分享和观看甜品店的巧克力造型也很常见。'],
 food:['Mona de Pascua：有蛋糕、彩蛋和巧克力装饰等形式，现代橱窗里也常见精巧的巧克力模型。鸡蛋常被解释为春天与新生的象征。','四旬期与圣周可见鳕鱼菜、甜炸面团等传统；饮食做法因家庭而异，不能据此认定学校假期内仍提供午餐。'],
 family:['可逛一家甜品店观察巧克力造型，画自己的“春天蛋糕”，或读一本有关春天的绘本。','本校已给的假期为3月20–29日；不要把其他年份游行或店铺营业时间复制为2027年的安排。'],sources:['easter','mona']},
 national:{name:'理解西班牙国庆日',es:'Fiesta Nacional de España · 12 de octubre',art:'flag',tags:['国庆 Fiesta Nacional','历史 Historia'],
 origin:['10月12日是西班牙国庆日，也与哥伦布1492年航行抵达美洲的历史记忆相关。不同群体对这段历史的理解不同，介绍给孩子时可以同时谈航海、文化交流以及殖民给原住民带来的伤害。','同一天也是皮拉尔圣母纪念日，但宗教纪念与国家庆典是两个不同层面的意义，不能把萨拉戈萨的地方庆典直接当作巴塞罗那活动。'],customs:['国家层面的仪式和阅兵主要与马德里相关；巴塞罗那当天是否有具体活动，需要查当年的本地公告。'],food:['没有巴塞罗那普遍统一的国庆“必吃食物”。一般家庭可以聚餐，但不能把普通西班牙菜写成当天专属传统。'],family:['可以在地图上找西班牙、地中海和美洲，用适合年龄的方式讨论“出海探索”与“尊重不同地方的人”。'],sources:['national']},
 immaculate:{name:'这个宗教节日纪念什么',es:'Inmaculada Concepción',art:'star',tags:['12月8日','宗教传统 Tradición religiosa'],
 origin:['圣母无原罪节属于天主教传统，纪念的是玛利亚从受孕之初免于原罪的信念。它并不是说耶稣在12月8日出生，也不是圣诞节本身。'],customs:['信众可能参加弥撒或宗教庆典；其他家庭也可能把法定休息日用于普通家庭活动。是否有连休要看校历，不能自动把12月7日算作放假。'],food:['没有统一的巴塞罗那专属应节食物。此时常能见到圣诞甜品，但它们属于圣诞季，而不是这一节日规定的菜单。'],family:['可用“不同文化有不同纪念日”向孩子解释；参观宗教建筑时尊重现场礼仪即可。'],sources:['immaculate']},
 labour:{name:'劳动与休息为什么都重要',es:'Día del Trabajo · Primero de Mayo',art:'flag',tags:['工作 Trabajo','休息 Descanso','权利 Derechos'],
 origin:['劳动节与工人争取合理工时和劳动权益的历史相关。八小时工作制是这一运动的重要诉求，后来也成为国际劳工标准发展的重要内容。'],customs:['工会集会、游行和公共讨论是常见形式；对很多家庭也是休息日。2027年5月1日是周六，不能自行推定周一补休。'],food:['没有统一的劳动节传统菜肴；野餐、家庭聚餐属于个人安排，不是节日要求。'],family:['可以请孩子说出学校和社区中帮助大家的人，例如老师、厨师、清洁人员，再聊聊每个人为什么都需要休息。'],sources:['labour']},
 pentecost:{name:'“第二复活节”是什么意思',es:'Segunda Pascua · Pascua Granada',art:'star',tags:['圣灵降临 Pentecostés','地方节假日 Festivo local'],
 origin:['Segunda Pascua 与基督教圣灵降临节相关，该节日在复活节之后约五十天。巴塞罗那放假的是其后的星期一；名称中的“第二”不是再次举行春季复活节。'],customs:['宗教团体可有相应礼仪，城市和社区也可能有民俗活动；并没有要求所有市民参加同一场庆典。它是地方节假日，不能推及西班牙所有城市。'],food:['未核实到巴塞罗那全市统一的专属食物，不把春季 Mona 蛋糕自动当作这一天的必吃食品。'],family:['可在日历上比较“圣周假期”“复活节”和“第二复活节”，帮助孩子理解相近的名字为何出现在不同月份。'],sources:['pentecost']}
};

const schoolActivityGuides={
 '2027-02-09':{name:'在熟悉的环境里接触英语戏剧',es:'Teatro en inglés · Georgina and the dragon',art:'mask',tags:['戏剧 Teatro','英语 Inglés','龙 Dragon'],origin:['学校公布的项目是在校内开展英语戏剧《Georgina and the dragon》。仅凭名称不能确定剧本细节，也不能认定它就是圣乔治传说的改编。'],customs:['可以把它理解为一次语言与表演体验；演员、时长、是否邀请孩子互动以及家长能否观看，原通知均未说明。'],food:['这是教学文化活动，不是带有固定节日食品的庆典。零食、午餐及需带物品以学校通知为准。'],family:['可先玩“龙 dragon、朋友 friend、帮助 help”的词语游戏，让孩子凭表情和动作理解故事；不必预先背诵未经确认的剧情。','回家后可以问“你看到什么角色？哪一幕最有趣？”，鼓励孩子画出来。'],sources:[]},
 '2027-03-12':{name:'认识马匹与户外环境',es:'Camins a cavall · Esparraguera',art:'tent',tags:['马匹 Caballos','自然 Naturaleza'],origin:['Camins a cavall 是学校通知中的活动名称，地点为 Esparraguera；这是学校安排的外出项目，不是当地每年固定的公共节日。'],customs:['可从动物观察与户外学习角度理解主题，但是否真的骑马、接触哪些动物、由谁带领和具体线路都未在图片中说明。'],food:['没有固定的节庆食品。是否学校备餐、需要带三明治或水壶，须看此次活动清单。'],family:['可以先认识马的身体部位、讨论如何尊重动物，画一张想问老师的问题卡。','不要因为名称含“骑马”就自行购买装备，先等学校给出服装和器材要求。'],sources:[]},
 '2027-05-21':{name:'学习一起生活与合作',es:'Convivencias',art:'tent',tags:['合作 Cooperación','同伴 Compañeros'],origin:['Convivencias 在学校语境中常用来指共同相处、团队交流与集体体验。这张学校通知只给出5月21日，并没有说明具体活动内容。'],customs:['一般教育目的可包括认识同伴、相互帮助、遵守共同规则；本次是否有游戏、宗教环节、外出或其他项目，需要学校说明。不能仅凭这个词判断要过夜。'],food:['没有固定节日菜式。用餐地点、自带午餐与否以及过敏信息提交方式，都以学校此次通知为准。'],family:['在家可以练习轮流发言、一起收拾物品，或者请孩子想一个能让新同学加入的游戏。'],sources:[]},
 '2027-06-14':{name:'三天校外集体体验',es:'Colonias · La Capella',art:'tent',tags:['营地 Colonias','独立 Autonomía','同伴 Compañeros'],origin:['学校通知列出 La Capella 和6月14、15、16日。Colonias 通常与多日校外集体生活有关，但原图未明确住宿晚数、集合时间和地点。'],customs:['这类教育活动可帮助孩子在日常教室之外练习独立和协作；本次具体是否有自然观察、运动或夜间节目，不能预先写成已确认项目。'],food:['营地并没有“节庆必吃食物”。菜单、零食、饮水及特殊饮食安排需要查看学校或营地方的实际资料。'],family:['可逐步让孩子练习整理衣物、辨认自己的物品，以及需要帮助时清楚告诉老师。','收到学校清单后再准备行李；睡袋、床单、药品管理、联系办法及付款授权等不从活动名称推断。'],sources:[]},
 '2027-06-21':{name:'一个学年的结束',es:'Fin de curso',art:'book',tags:['13:00放学','学年结束 Fin de curso'],origin:['这是本校公布的学年结束日，属于校历安排，不是全市共同的民俗节日。'],customs:['学校通知明确第三学期最后一天13:00结束课程，仍有食堂服务。没有明确当天食堂结束与接送时间；也未在现有资料中列出闭幕演出或聚会。'],food:['没有学年结束专属的传统食物。本校当天仍提供食堂服务，但不能据此假定有特别菜单。'],family:['可以和孩子整理一张“这一年学会了什么”的小卡片，给老师或朋友写一句感谢。','当天实际接送应按学校补充通知安排。'],sources:[]}
};

function cultureGuideFor(e){
 if(e[2]===6){
  if(e[0]==='2026-10-26')return cultureGuides.castanyada;
  if(e[0]==='2026-12-18')return cultureGuides.christmas;
  if(e[0]==='2027-02-05')return cultureGuides.carnival;
  return schoolActivityGuides[e[0]];
 }
 if(e[2]===7){
  if(e[3].includes('Halloween'))return cultureGuides.halloween;
  if(e[3].includes('Castanyada'))return cultureGuides.castanyada;
  return cultureGuides[{'2026-12-24':'christmas','2026-12-31':'newyear','2027-01-05':'kings','2027-02-12':'eulalia','2027-04-23':'jordi','2027-06-23':'joan'}[e[0]]];
 }
 if(e[0]==='2027-06-21')return schoolActivityGuides[e[0]];
 return cultureGuides[{'2026-10-12':'national','2026-12-08':'immaculate','2026-12-22':'christmas','2027-02-08':'carnival','2027-03-20':'easter','2027-05-01':'labour','2027-05-17':'pentecost','2027-06-24':'joan'}[e[0]]];
}

// Original vector illustrations, symbolic rather than documentary photographs.
function cultureIllustration(kind){
 const shapes={
  book:'<path d="M30 57Q66 44 101 61V139Q66 121 30 135Z" fill="#fff"/><path d="M101 61Q137 44 173 57V135Q137 121 101 139Z" fill="#fff4d5"/><path d="M101 62V139M43 76L82 76M43 90L82 90M119 77L157 77M119 91L150 91" stroke="#b6bfcd" stroke-width="3"/><path d="M215 148V71M215 113Q189 90 189 114Q202 123 215 125" fill="#70aa84" stroke="#478561" stroke-width="4"/><circle cx="215" cy="58" r="24" fill="#ce6576"/><path d="M201 58Q215 36 230 56Q221 73 207 67Q198 61 213 54" fill="none" stroke="#9f3d54" stroke-width="4"/>',
  chestnut:'<path d="M51 125Q33 83 90 49Q145 84 126 126Z" fill="#996346"/><path d="M51 125Q83 108 126 126Q100 156 65 144Z" fill="#e0b983"/><ellipse cx="207" cy="117" rx="42" ry="29" fill="#e6bd79"/><g fill="#fff0c5"><ellipse cx="183" cy="106" rx="7" ry="4"/><ellipse cx="203" cy="99" rx="7" ry="4"/><ellipse cx="224" cy="106" rx="7" ry="4"/><ellipse cx="194" cy="119" rx="7" ry="4"/><ellipse cx="218" cy="124" rx="7" ry="4"/></g>',
  pumpkin:'<path d="M144 52Q132 25 150 30" fill="none" stroke="#56856c" stroke-width="10"/><ellipse cx="145" cy="105" rx="73" ry="52" fill="#e5a05c"/><ellipse cx="145" cy="105" rx="40" ry="52" fill="#efb46d"/><path d="M105 94L117 76L128 96M160 96L173 76L185 94M116 116Q145 145 176 115" fill="#695140"/>',
  tree:'<path d="M140 32L78 101H109L63 139H217L171 101H204Z" fill="#629c84"/><path d="M133 139H150V166H133Z" fill="#a67a58"/><circle cx="130" cy="87" r="6" fill="#ffe0a0"/><circle cx="162" cy="111" r="7" fill="#d96e7b"/><circle cx="114" cy="126" r="6" fill="#ffe0a0"/><path d="M140 17L145 29L159 29L148 37L152 50L140 42L128 50L132 37L121 29L135 29Z" fill="#e9bc60"/>',
  clock:'<circle cx="137" cy="93" r="64" fill="#fff" stroke="#7794b4" stroke-width="7"/><path d="M137 47V93L169 112" fill="none" stroke="#3d5877" stroke-width="7" stroke-linecap="round"/><path d="M137 35V43M137 146V151M80 93H87M188 93H194" stroke="#7794b4" stroke-width="4"/><g fill="#93a776"><circle cx="220" cy="127" r="10"/><circle cx="235" cy="140" r="10"/><circle cx="211" cy="148" r="10"/><circle cx="226" cy="163" r="10"/></g>',
  crown:'<path d="M60 73L85 97L110 53L140 95L173 47L197 96L223 69L211 141H72Z" fill="#ebc673"/><path d="M73 127H211" stroke="#b88a42" stroke-width="5"/><circle cx="110" cy="109" r="7" fill="#cf6e7b"/><circle cx="175" cy="109" r="7" fill="#669aa5"/>',
  star:'<path d="M145 25L165 70L216 74L179 109L190 159L145 135L100 159L111 109L73 74L124 70Z" fill="#d9b46b"/><path d="M39 58H57M48 49V67M228 127H246M237 118V136" stroke="#93a9b8" stroke-width="4"/>',
  fire:'<path d="M147 24Q161 64 192 86Q219 115 188 149Q163 175 116 152Q82 134 100 95Q118 74 121 55Q126 86 140 88Q160 73 147 24Z" fill="#dc885d"/><path d="M145 88Q184 123 164 149Q135 167 120 141Q115 119 145 88Z" fill="#f4cf7c"/><path d="M96 168L189 158M108 157L182 172" stroke="#946750" stroke-width="8"/>',
  mask:'<path d="M41 69Q92 39 141 73Q193 39 245 69L224 129Q182 152 142 113Q100 152 61 129Z" fill="#9e88b8"/><path d="M68 85Q90 67 117 91Q94 112 68 85M166 91Q193 67 218 85Q192 112 166 91" fill="#fff6e4"/><path d="M142 113V76" stroke="#79628e" stroke-width="3"/>',
  egg:'<path d="M141 30C96 30 67 106 89 140Q141 187 193 140C217 108 184 30 141 30Z" fill="#d7a5b5"/><path d="M96 79Q141 101 184 79M84 110Q140 135 199 110" fill="none" stroke="#ffefd1" stroke-width="9"/><circle cx="120" cy="142" r="6" fill="#fff"/><circle cx="160" cy="142" r="6" fill="#fff"/>',
  tent:'<path d="M142 42L242 151H39Z" fill="#76a798"/><path d="M142 42L169 151H112Z" fill="#f4ddaa"/><path d="M142 68L155 151H124Z" fill="#637a74"/><circle cx="224" cy="44" r="17" fill="#e4bb70"/>',
  flag:'<path d="M77 31V163" stroke="#6f839b" stroke-width="7"/><path d="M82 40Q125 19 164 42Q199 58 225 39V119Q193 139 159 117Q119 99 82 120Z" fill="#e7b966"/><path d="M82 42Q125 21 164 44Q199 60 225 41V62Q193 79 159 62Q119 41 82 63Z" fill="#c77978"/>'
 };
 return `<svg class="culture-art" viewBox="0 0 280 190" role="img" aria-label="节庆主题示意插图"><rect width="280" height="190" rx="22" fill="#f6f1e8"/>${shapes[kind]||shapes.star}</svg>`;
}
function renderCultureDetail(e){
 const g=cultureGuideFor(e);
 const source=e[6]?`<a href="${e[6][0]}" target="_blank" rel="noopener">${e[6][1]}</a>`:e[5]==null?'家长补充':`学校入学说明，原件第${e[5]}页`;
 const heading=`<h3>${e[3]}</h3><p class="culture-date">${e[0]===e[1]?e[0]:e[0]+' 至 '+e[1]}</p>`;
 if(!g)return `${heading}<p>${e[4]}</p><small>安排来源：${source}</small>`;
 const sections=[['由来与故事','Origen e historia',g.origin],['当地怎样过','Costumbres',g.customs],['常见食物','Qué se come',g.food],['亲子参与建议','Ideas en familia',g.family]];
 return `<article class="culture-guide">${heading}<div class="culture-hero">${cultureIllustration(g.art)}<div><h4>${g.name}</h4><p lang="es">${g.es}</p><div class="culture-tags">${g.tags.map(t=>`<span>${t}</span>`).join('')}</div><small>主题示意插图 · 非活动现场照片</small></div></div><div class="culture-grid">${sections.map(([zh,es,paragraphs])=>`<section><h4>${zh}<small lang="es">${es}</small></h4>${paragraphs.map(t=>`<p>${t}</p>`).join('')}</section>`).join('')}</div><details class="culture-evidence"><summary>本次安排与资料来源</summary><p>${e[4]}</p><p>安排来源：${source}</p>${g.sources.length?`<p>文化背景参考（用于传统介绍，往年节目不作为本次活动安排）：</p><ul>${g.sources.map(key=>`<li><a href="${cultureSources[key][1]}" target="_blank" rel="noopener">${cultureSources[key][0]}</a></li>`).join('')}</ul>`:''}<p>亲子参与部分为家庭建议；学校项目的服装、费用、用餐及集合要求以学校后续通知为准。</p></details></article>`;
}
