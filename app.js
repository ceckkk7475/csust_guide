const categories = [
  { id: "all", label: "全部" },
  { id: "before", label: "报到前" },
  { id: "arrival", label: "到校当天" },
  { id: "dorm", label: "宿舍生活" },
  { id: "study", label: "学习事务" },
  { id: "services", label: "校园办事" },
  { id: "life", label: "吃住行" },
  { id: "growth", label: "社团成长" },
  { id: "safety", label: "安全健康" },
  { id: "pitfalls", label: "常见坑点" }
];

const sourceLinks = {
  undergraduateRules: {
    label: "2026 年普通高校招生章程",
    url: "https://www.csust.edu.cn/zsw/info/1055/2599.htm"
  },
  undergraduateHandbook: {
    label: "2024 年本科新生入学手册",
    url: "https://www.csust.edu.cn/zsw/info/1095/2326.htm"
  },
  graduateHandbook: {
    label: "2025 研究生手册",
    url: "https://www.csust.edu.cn/yjsy/info/1179/11426.htm"
  },
  graduateGuide: {
    label: "2026 年硕士研究生招生简章",
    url: "https://www.csust.edu.cn/yjsy/info/1113/11449.htm"
  },
  campusMap: {
    label: "校园方位",
    url: "https://www.csust.edu.cn/xxgk/xyfw.htm"
  },
  dormGuide: {
    label: "学生公寓入住指南",
    url: "https://www.csust.edu.cn/xsgzb/info/1071/8437.htm"
  }
};

const audienceLabels = {
  all: "全部新生",
  undergraduate: "本科",
  master: "硕士",
  doctor: "博士",
  parttime: "非全日制"
};

const campusLabels = {
  common: "通用",
  yuntang: "云塘",
  jinpenling: "金盆岭"
};

const cards = [
  {
    id: "materials",
    category: "before",
    title: "报到前要准备哪些证件和材料？",
    audience: ["all"],
    campus: ["common"],
    status: "待 2026 入学手册更新",
    keywords: "录取通知书 身份证 档案 党团组织关系 照片 户口 体检",
    steps: [
      "把录取通知书、身份证、高考或研究生录取相关材料放进随身包，不要托运。",
      "档案、党团组织关系、户口迁移等按通知书和学院要求办理，无法确认时先咨询学院辅导员或研究生秘书。",
      "准备一寸、两寸证件照及电子版，后续体检、学生证、社团报名都可能用到。",
      "把缴费截图、迎新系统填报截图、快递单号等保存到手机相册的固定文件夹。"
    ],
    sources: ["undergraduateHandbook", "graduateHandbook"]
  },
  {
    id: "campus-confirm",
    category: "arrival",
    title: "云塘和金盆岭怎么区分？我该去哪个校区？",
    audience: ["all"],
    campus: ["yuntang", "jinpenling"],
    status: "需按录取学院核验",
    keywords: "校区 云塘 金盆岭 学院 地址 报到地点",
    steps: [
      "先看录取通知书、迎新系统或学院通知里的报到校区，不要只按专业名称猜。",
      "导航时输入校区全称，并核对学校官方校园方位页面。",
      "同一学校不同学院可能分布在不同校区，家长订酒店和寄行李前先确认。",
      "如果通知与群内说法不一致，以学院或学校官方通知为准。"
    ],
    sources: ["campusMap", "undergraduateHandbook"]
  },
  {
    id: "payment-card",
    category: "before",
    title: "缴费、银行卡、校园卡要提前处理吗？",
    audience: ["all"],
    campus: ["common"],
    status: "待 2026 入学手册更新",
    keywords: "缴费 学费 住宿费 银行卡 校园卡 一卡通",
    steps: [
      "优先使用学校指定缴费渠道，不要点击陌生短信或群内个人收款链接。",
      "保留缴费凭证，报到现场遇到系统延迟时能快速说明情况。",
      "银行卡、校园卡、校园网等事项按当年入学手册办理，未确认前不要重复开通付费服务。",
      "家庭经济困难学生先查看绿色通道、助学贷款和奖助政策，不要因为暂时缴费问题放弃报到。"
    ],
    sources: ["undergraduateHandbook", "graduateHandbook"]
  },
  {
    id: "arrival-flow",
    category: "arrival",
    title: "到校当天的顺序怎么安排最稳？",
    audience: ["all"],
    campus: ["common"],
    status: "通用建议",
    keywords: "报到 流程 宿舍 家长 行李 校园卡",
    steps: [
      "先到指定报到点核验身份和材料，再处理宿舍入住、校园卡和其他现场事项。",
      "行李多时先确认宿舍楼和床位，再搬运行李，避免在校园里反复折返。",
      "当天不要急着办所有社团、电话卡或购物事项，先完成学校规定流程。",
      "把学院辅导员、班级群、宿舍楼服务点等信息置顶，后续问题优先从这些入口问。"
    ],
    sources: ["undergraduateHandbook", "graduateHandbook"]
  },
  {
    id: "dorm-move-in",
    category: "dorm",
    title: "宿舍入住先检查什么？",
    audience: ["all"],
    campus: ["common"],
    status: "参考公寓指南",
    keywords: "宿舍 公寓 入住 床位 维修 水电 空调 门禁",
    steps: [
      "进宿舍先拍照记录桌椅、床板、门锁、插座、空调遥控器等状态。",
      "发现损坏及时通过宿舍管理或维修渠道报修，不要自行拆改电器线路。",
      "床品尺寸、用电规则、空调水电等以公寓通知为准，购买前先核对。",
      "贵重物品随身或上锁，刚开学人流复杂，宿舍门不要长期敞开。"
    ],
    sources: ["dormGuide"]
  },
  {
    id: "packing",
    category: "before",
    title: "行李怎么带才不踩坑？",
    audience: ["all"],
    campus: ["common"],
    status: "通用建议",
    keywords: "行李 寄送 床品 衣物 充电 插排",
    steps: [
      "证件、电脑、药品、充电器、换洗衣物随身带，床品和生活用品可到校后补齐。",
      "长沙夏秋湿热，衣物以透气、易洗为主，同时准备一件薄外套应对空调教室。",
      "插线板、台灯、床帘等物品先确认宿舍规定，避免买了不能用。",
      "寄送行李要写清校区、宿舍楼或学院接收信息，并保存快递单号。"
    ],
    sources: ["dormGuide"]
  },
  {
    id: "course-selection",
    category: "study",
    title: "选课、课表和培养方案从哪里开始看？",
    audience: ["undergraduate", "master", "doctor"],
    campus: ["common"],
    status: "待学院通知确认",
    keywords: "选课 课表 培养方案 学分 教务系统 研究生系统",
    steps: [
      "入学后先看学院发布的培养方案和年级通知，弄清必修、选修、实践环节和毕业要求。",
      "本科生重点关注教务系统、选课时间、重修补修、转专业规则。",
      "研究生重点关注个人培养计划、课程学分、开题中期、论文节点和导师要求。",
      "对系统操作不确定时，先问班委、辅导员、研究生秘书或学院教务老师。"
    ],
    sources: ["graduateHandbook"]
  },
  {
    id: "graduate-start",
    category: "study",
    title: "研究生入学后第一周最该确认什么？",
    audience: ["master", "doctor"],
    campus: ["common"],
    status: "研究生重点",
    keywords: "导师 培养计划 课题组 奖助 实验室 非全日制",
    steps: [
      "主动和导师确认见面方式、课题组安排、近期阅读或实验任务。",
      "查看研究生手册中的培养计划、学籍注册、奖助、论文和学术规范要求。",
      "需要进入实验室的同学，先完成安全培训和门禁权限流程。",
      "非全日制同学额外确认上课时间、住宿安排、单位请假和培养节点。"
    ],
    sources: ["graduateHandbook", "graduateGuide"]
  },
  {
    id: "campus-services",
    category: "services",
    title: "校园办事入口太多，怎么不迷路？",
    audience: ["all"],
    campus: ["common"],
    status: "通用建议",
    keywords: "教务 学工 研究生院 图书馆 医务 校园网 办事",
    steps: [
      "把学院官网、教务处、学生工作部、研究生院、图书馆和信息化入口加入浏览器收藏。",
      "同一个问题优先找归口部门：课程找教务，奖助找学工或研究生院，住宿找公寓管理。",
      "办事前先看是否需要线上申请、纸质盖章或学院初审。",
      "重要申请留出提前量，不要卡在截止当天提交。"
    ],
    sources: ["undergraduateRules", "graduateHandbook"]
  },
  {
    id: "food-transport",
    category: "life",
    title: "刚到长沙，吃住行怎么快速稳定下来？",
    audience: ["all"],
    campus: ["yuntang", "jinpenling", "common"],
    status: "生活建议",
    keywords: "食堂 地铁 公交 长沙 天气 酒店 家长",
    steps: [
      "前几天优先熟悉宿舍、食堂、教学楼、快递点、校门和常用公交地铁路线。",
      "家长同行建议提前订可退改酒店，并确认离报到校区的实际通勤时间。",
      "长沙雨热同季，伞、防晒、驱蚊和透气衣物都很实用。",
      "夜间出行尽量结伴，陌生地点不要轻信低价住宿、兼职或租房推销。"
    ],
    sources: ["campusMap"]
  },
  {
    id: "clubs-growth",
    category: "growth",
    title: "社团、学生组织和竞赛怎么选？",
    audience: ["undergraduate", "master", "doctor"],
    campus: ["common"],
    status: "经验建议",
    keywords: "社团 学生会 竞赛 科研 实践 志愿",
    steps: [
      "先保证课程、作息和宿舍生活稳定，再决定加入几个组织。",
      "本科生可以用社团探索兴趣，用竞赛和实践建立作品经历。",
      "研究生要平衡课题组任务、论文节奏和社团投入，避免第一学期排得过满。",
      "报名时问清时间投入、考核方式和退出机制。"
    ],
    sources: []
  },
  {
    id: "safety-health",
    category: "safety",
    title: "安全和健康方面最该警惕什么？",
    audience: ["all"],
    campus: ["common"],
    status: "通用建议",
    keywords: "安全 健康 医院 心理 防诈骗 兼职 贷款",
    steps: [
      "任何收费、贷款、兼职、刷单、账号验证信息都先和辅导员或家人确认。",
      "身体不适及时就医，慢性病或长期用药同学提前准备病历和药品。",
      "遇到持续焦虑、失眠、人际冲突或适应困难，尽早联系辅导员或学校心理支持渠道。",
      "不要把身份证、银行卡、学生证照片随意发给陌生人。"
    ],
    sources: ["undergraduateHandbook", "graduateHandbook"]
  },
  {
    id: "pitfalls",
    category: "pitfalls",
    title: "哪些新生常见坑可以提前避开？",
    audience: ["all"],
    campus: ["common"],
    status: "经验建议",
    keywords: "避坑 电话卡 宽带 兼职 二手 群聊 推销",
    steps: [
      "不要急着办理电话卡、宽带、会员或培训课，至少等官方流程完成后再比较。",
      "群内自称老师、学长学姐、内部渠道的人，如果涉及转账或证件信息，一律先核验身份。",
      "二手交易尽量当面验货，贵重物品不要先款。",
      "遇到说法冲突时，以学校官网、学院通知和辅导员答复为准。"
    ],
    sources: []
  }
];

const checklist = [
  { id: "notice", title: "录取通知书与身份证", desc: "随身携带，拍照备份。" },
  { id: "files", title: "档案、党团组织关系", desc: "按通知书和学院要求办理。" },
  { id: "photos", title: "证件照与电子版", desc: "准备一寸、两寸及白底电子照。" },
  { id: "payment", title: "缴费凭证", desc: "只用官方渠道，截图留存。" },
  { id: "campus", title: "确认报到校区", desc: "核对学院通知，避免走错校区。" },
  { id: "route", title: "交通路线与住宿", desc: "家长同行提前确认通勤时间。" },
  { id: "dorm", title: "宿舍入住检查", desc: "门锁、桌椅、插座、空调先拍照。" },
  { id: "bedding", title: "床品和生活用品", desc: "床位规格待官方确认后再购买。" },
  { id: "systems", title: "加入官方通知渠道", desc: "学院群、辅导员、研究生秘书信息置顶。" },
  { id: "week", title: "入学后一周任务", desc: "课表、培养方案、体检、校园卡、图书馆。" }
];

const state = {
  query: "",
  audience: "all",
  campus: "all",
  category: "all",
  saved: new Set(JSON.parse(localStorage.getItem("csustSavedCards") || "[]")),
  checked: new Set(JSON.parse(localStorage.getItem("csustChecklist") || "[]"))
};

const nodes = {
  searchInput: document.querySelector("#searchInput"),
  categoryNav: document.querySelector("#categoryNav"),
  cardsContainer: document.querySelector("#cardsContainer"),
  resultSummary: document.querySelector("#resultSummary"),
  emptyState: document.querySelector("#emptyState"),
  cardCount: document.querySelector("#cardCount"),
  savedCount: document.querySelector("#savedCount"),
  checklistContainer: document.querySelector("#checklistContainer"),
  printButton: document.querySelector("#printButton")
};

function includesAny(values, selected) {
  return selected === "all" || values.includes("all") || values.includes(selected);
}

function getCategoryLabel(id) {
  return categories.find((category) => category.id === id)?.label || id;
}

function getCardText(card) {
  return [
    card.title,
    card.keywords,
    card.status,
    getCategoryLabel(card.category),
    ...card.steps
  ].join(" ").toLowerCase();
}

function getFilteredCards() {
  const query = state.query.trim().toLowerCase();
  return cards.filter((card) => {
    const matchesQuery = !query || getCardText(card).includes(query);
    const matchesAudience = includesAny(card.audience, state.audience);
    const matchesCampus = includesAny(card.campus, state.campus);
    const matchesCategory = state.category === "all" || card.category === state.category;
    return matchesQuery && matchesAudience && matchesCampus && matchesCategory;
  });
}

function renderCategories() {
  nodes.categoryNav.innerHTML = categories.map((category) => {
    const count = category.id === "all"
      ? cards.length
      : cards.filter((card) => card.category === category.id).length;
    return `
      <button class="category-button ${state.category === category.id ? "is-active" : ""}" type="button" data-category="${category.id}">
        <span>${category.label}</span>
        <span>${count}</span>
      </button>
    `;
  }).join("");
}

function renderCards() {
  const visibleCards = getFilteredCards();
  nodes.cardCount.textContent = String(cards.length);
  nodes.savedCount.textContent = String(state.saved.size);
  nodes.resultSummary.textContent = `显示 ${visibleCards.length} / ${cards.length} 条`;
  nodes.emptyState.hidden = visibleCards.length !== 0;
  nodes.cardsContainer.innerHTML = visibleCards.map((card) => {
    const isSaved = state.saved.has(card.id);
    const sourceHtml = card.sources.length
      ? card.sources.map((sourceId) => {
        const source = sourceLinks[sourceId];
        return `<a href="${source.url}" target="_blank" rel="noopener">${source.label}</a>`;
      }).join("<span>·</span>")
      : "<span>经验建议，待官方信息补充</span>";

    return `
      <article class="qa-card" id="card-${card.id}">
        <div class="card-top">
          <div>
            <h3>${card.title}</h3>
            <div class="tag-row">
              <span class="tag">${getCategoryLabel(card.category)}</span>
              ${card.audience.map((item) => `<span class="tag">${audienceLabels[item]}</span>`).join("")}
              ${card.campus.map((item) => `<span class="tag">${campusLabels[item]}</span>`).join("")}
              <span class="tag warn">${card.status}</span>
            </div>
          </div>
          <button class="save-button ${isSaved ? "is-saved" : ""}" type="button" data-save="${card.id}" title="收藏" aria-label="收藏 ${card.title}">
            ${isSaved ? "★" : "☆"}
          </button>
        </div>
        <ol class="steps">
          ${card.steps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
        <div class="source-row">
          <span>来源：</span>${sourceHtml}
          <span>·</span>
          <span>更新：2026-05-31</span>
        </div>
      </article>
    `;
  }).join("");
}

function renderChecklist() {
  nodes.checklistContainer.innerHTML = checklist.map((item) => `
    <label class="check-item">
      <input type="checkbox" data-check="${item.id}" ${state.checked.has(item.id) ? "checked" : ""}>
      <span>
        <strong>${item.title}</strong>
        <span>${item.desc}</span>
      </span>
    </label>
  `).join("");
}

function persistSet(key, set) {
  localStorage.setItem(key, JSON.stringify([...set]));
}

function updateActiveChip(group, value) {
  document.querySelectorAll(`[data-filter-group="${group}"]`).forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filterValue === value);
  });
}

function renderAll() {
  renderCategories();
  renderCards();
  renderChecklist();
}

nodes.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderCards();
});

document.addEventListener("click", (event) => {
  const filterButton = event.target.closest("[data-filter-group]");
  if (filterButton) {
    const { filterGroup, filterValue } = filterButton.dataset;
    state[filterGroup] = filterValue;
    updateActiveChip(filterGroup, filterValue);
    renderCards();
    return;
  }

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    state.category = categoryButton.dataset.category;
    renderCategories();
    renderCards();
    return;
  }

  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    const id = saveButton.dataset.save;
    if (state.saved.has(id)) {
      state.saved.delete(id);
    } else {
      state.saved.add(id);
    }
    persistSet("csustSavedCards", state.saved);
    renderCards();
  }
});

nodes.checklistContainer.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-check]");
  if (!checkbox) return;

  if (checkbox.checked) {
    state.checked.add(checkbox.dataset.check);
  } else {
    state.checked.delete(checkbox.dataset.check);
  }
  persistSet("csustChecklist", state.checked);
});

nodes.printButton.addEventListener("click", () => {
  window.print();
});

renderAll();
