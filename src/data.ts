import { LocationBubble, MemoryCard, DetailSong, PostcardTemplate, TimelineNode, ReportSlide } from './types';

export const locationBubbles: LocationBubble[] = [
  {
    city: "北京",
    count: 182,
    bubblesize: 54,
    colorClass: "bg-purple-600",
    bgColorClass: "bg-purple-500/20",
    tcColorClass: "text-purple-500",
    icon: "theater_comedy",
    top: "22%",
    left: "58%",
    delay: "0s",
    cityImageUrl: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&q=80&w=150"
  },
  {
    city: "厦门",
    count: 45,
    bubblesize: 60,
    colorClass: "bg-blue-600",
    bgColorClass: "bg-blue-500/20",
    tcColorClass: "text-blue-500",
    icon: "music_note",
    top: "52%",
    left: "76%",
    delay: "0.5s",
    cityImageUrl: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=150"
  },
  {
    city: "杭州",
    count: 12,
    bubblesize: 48,
    colorClass: "bg-emerald-500",
    bgColorClass: "bg-emerald-500/20",
    tcColorClass: "text-emerald-500",
    icon: "waves",
    top: "43%",
    left: "64%",
    delay: "1.5s",
    cityImageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80&w=150"
  },
  {
    city: "成都",
    count: 94,
    bubblesize: 52,
    colorClass: "bg-pink-500",
    bgColorClass: "bg-pink-500/20",
    tcColorClass: "text-pink-500",
    icon: "restaurant",
    top: "55%",
    left: "34%",
    delay: "2s",
    cityImageUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&q=80&w=150"
  },
  {
    city: "深圳",
    count: 247,
    bubblesize: 68,
    colorClass: "bg-orange-500",
    bgColorClass: "bg-orange-500/20",
    tcColorClass: "text-orange-500",
    icon: "graphic_eq",
    top: "74%",
    left: "54%",
    delay: "1s",
    cityImageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=150"
  }
];

export const recentMemories: MemoryCard[] = [
  {
    id: "m1",
    location: "厦门 · 鼓浪屿",
    song_title: "晴天",
    artist: "周杰伦",
    date: "2026.04.03",
    coverUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400",
    weather: "wb_sunny",
    city: "厦门"
  },
  {
    id: "m2",
    location: "深圳 · 福田区",
    song_title: "Midnight City",
    artist: "M83",
    date: "2026.03.28",
    coverUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=400",
    weather: "nights_stay",
    city: "深圳"
  },
  {
    id: "m3",
    location: "杭州 · 西湖",
    song_title: "平凡之路",
    artist: "朴树",
    date: "2024.08.15",
    coverUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80&w=400",
    weather: "wb_twilight",
    city: "杭州"
  }
];

export const detailSongs: DetailSong[] = [
  {
    title: "晴天",
    artist: "周杰伦",
    repeats: 5,
    coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCap9EvkXiQuzX9ljaQhYlPbMbmJEDL-TXWa3L7t2JBFP2XsKg5H7f5mLdQHufBYE5VrZFiVAtBMlzGjdxVtBAnlJr3evLW_c5993XUIO2-otR3184OfVRYcukwf2dyZF-uvqh06KFLg6-XepKfXB8e3UMcSKr-FEJSsYrhS6gaV7_KJODYcsMNMCMcWdfZFb67DlcLtwow_nyGzrLcJ6SkvZwanxWftxLNqG68lPIUVkoJ_Xk75DAMUarVUeDafPjqK6Z6r21_2Ui5"
  },
  {
    title: "七里香",
    artist: "周杰伦",
    repeats: 2,
    coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoU1WYRieRYEPc9HOlC_nTo2O2Nf-NdW__iWIbki_QDZ3-7m0KiU4izMTndpukkkcXZSr8Wn9lmSCfY5lb3-flcxXIDSABiNpdPircwslok58gXVmXRCsaZd68eqlygq-MfFNXgr377hsRwarCbXzO-vt2v7mZea1EFHHlbAz_OjHhb2bWZdXGQUt88xbFG6-5tgk0Wy9-jqeD8znYgJwziRCxQGBsHOa7ekSheyBhSA8CplWmU267nAg36ehTSYpy5Woydfu30iMh"
  },
  {
    title: "岛屿来信",
    artist: "蒋敬生",
    repeats: 1,
    coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAAoAfxATkMY-lcQhSSe66LCBpKLehdMWjcLbgzbnYHG6vWzRBTLpA_fSsquV61cmS3BhuXcNpU1MPY15g5xmGKfURZ1jAo-M-7Dz4Bw7GVuwindyEvyl29Gw2y6drLqvPaqVimBJ3yLbonGsGJZCX9FrNsG-ajce-8JgiGjHJ2Vl-nkXxRDQqhDLTNKCUVP3jKi2inl8PRTIYpMgascW8DaaHDo4ft4VjyMcC105PSgjjDg_rA7fDLMKTMen-ggEBLioFO0IHSUEc"
  }
];

export const postcardTemplates: PostcardTemplate[] = [
  {
    id: "t1",
    name: "日落",
    gradient: "from-orange-200 to-indigo-300",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWnhDw5eQVA0EYBVsQohaAWaGZIj7v3L_4TEKSZkxALfyjzmSzMveyzFH5qqjA7V1CUaYoC3yL4CQcN8kXp3m4GCvkQ-0O0XQCIHBwFt1hzMb1ceqKh4b-UPrQVqBceGe_w8aupAJbjJeIdkXWfBV8rai5pkLWON_MlU5dhKC_tOGFUQ_450MTzDCKCAYaxaNYXopShIA_e0LSJo7PTpK_zUE5ZSeptID-62TwKJYwrVt72udeInI-QSzaiWT0weIoHks1bVeyt4Y8"
  },
  {
    id: "t2",
    name: "夜晚",
    gradient: "from-indigo-900 to-slate-900",
    imageUrl: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "t3",
    name: "森林",
    gradient: "from-emerald-200 to-teal-800",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "t4",
    name: "海洋",
    gradient: "from-blue-100 to-blue-500",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600"
  }
];

export const timelineNodes: TimelineNode[] = [
  {
    day: 1,
    stageName: "出发",
    title: "抵达与铁轨的律动",
    icon: "train",
    aiDescription: "深圳到厦门的高铁上，你听了3遍《起风了》与《旅行的意义》。也许每段旅程都需要特定的声波律动，来宣告身体与空间的移交开始。",
    songs: ["起风了", "旅行的意义"],
    weather: "cloudy",
    colorHex: "#4648d4"
  },
  {
    day: 2,
    stageName: "探索",
    title: "鼓浪屿的回响",
    icon: "sailing",
    aiDescription: "四月的鼓浪屿，阳光穿透榕树叶缝。你在日光岩最高楼阁最高处听了5次《晴天》、2次《七里香》和《岛屿来信》——那天刚好也是26度，是恰到好处、微风不燥的晴天。",
    songs: ["晴天 (5次)", "七里香", "岛屿来信"],
    weather: "wb_sunny",
    infoLabel: "今日你累计在耳机里停留了 3小时42分钟，音乐替你记住了那个不曾拍照的午后。",
    colorHex: "#fea619"
  },
  {
    day: 3,
    stageName: "告别",
    title: "雨中的道别",
    icon: "rainy",
    aiDescription: "最后一天下起了细雨。你在曾厝垵和中山路临行前的小铺里循环着《后来》与《再见》。有些潮湿和告别是不需要高声呼说出的，一首歌的结尾，就能承装一整座海岛的小雨。",
    songs: ["后来", "再见"],
    weather: "rainy",
    colorHex: "#b55d00"
  }
];

export const reportSlides: ReportSlide[] = [
  {
    id: 1,
    title: "小林，2026年",
    subtitle: "你的音乐足迹跨越了很多地方",
    content: "那是一些你不曾留意，但是由声音替你篆刻在灵魂褶皱里的专属时钟。往上滑动，重温今年你和这些地点的声波共鸣。",
    bgColor: "from-indigo-950 via-slate-900 to-violet-950 text-white",
    imageTheme: "space",
    footerTag: "向上滑动, 唤醒这一年",
    imageUrl: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "足迹跨越 12 城市",
    subtitle: "你走过的每条路，都被赋予音波",
    content: "这一年, 你的耳朵走过了深圳、厦门、杭州、北京、成都、大理、重庆、丽江、上海、长沙、北海道、首尔等12座城市。足迹跨越4个国家，你的步履从未停下，耳机里也是。",
    bgColor: "from-teal-950 via-cyan-900 to-emerald-950 text-white",
    imageTheme: "tokyo",
    footerTag: "12个坐标 · 847首心动旋律",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "最遥远的回声 4,218km",
    subtitle: "北海道 · 小樽 的风雪夜",
    content: "2026年冬天，你在距离家乡 4,218公里的北海道小樽海运河桥头，在零下4度的夜雪中，你正听着《夜に駆ける》。这首歌成了这场白夜里最明亮且独特的烙印，后来被你循环了89次。",
    bgColor: "from-blue-950 via-indigo-950 to-slate-900 text-white",
    imageTheme: "otaru",
    footerTag: "4,218公里外 · 《夜に駆ける》",
    imageUrl: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    title: "楼下全家便利店 187次",
    subtitle: "最恋旧的角落，也有专属BGM",
    content: "在公司楼下的全家便利店，你居然触发了187次EchoFilm。在货架转弯挑咖啡、等待结账快节奏的清晨与疲惫的雨夜，你都在塞着耳机。那是你为自己圈出的，长达187次、世界为你退避片刻的迷你乌托邦。",
    bgColor: "from-amber-950 via-orange-950 to-zinc-950 text-white",
    imageTheme: "convenience",
    footerTag: "187 次呼吸 · 在全家的货架间",
    imageUrl: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    title: "你的情绪极坐标",
    subtitle: "用律动启程，用平缓疗愈",
    content: "数据显现：你出发前往某处时，高昂激荡的旋律占 78%；而在归家或倦息归航时，温柔、微凉的舒缓轻音乐占了 64%。你是一个把期待留给远方，把治愈留给回宿的浪漫聆听者。",
    bgColor: "from-rose-950 via-purple-950 to-neutral-950 text-white",
    imageTheme: "mood",
    footerTag: "78% 高昂启程 · 64% 温暖收港",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    title: "EchoFilm",
    subtitle: "声觉引擎，替你记住每一段路的温度",
    content: "普鲁斯特用一口玛德琳蛋糕唤回儿时。而EchoFilm，用一段弦律，替你保留你踏过的每一段日光与雨幕。在2027年, 继续勇敢地出发, 继续骄傲地唱诵吧。",
    bgColor: "from-indigo-950 via-indigo-900 to-black text-white",
    imageTheme: "vinyl",
    footerTag: "EchoFilm · 2027 继续出发",
    imageUrl: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=600"
  }
];
