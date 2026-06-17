import { LocationBubble, MemoryCard, DetailSong, PostcardTemplate, TimelineNode, TimelineTrip, ReportSlide, SongPreviewMap } from './types';

// 全局歌曲预览音频映射（网易云音乐外链）
export const songPreviewMap: SongPreviewMap = {
  "晴天": {
    artist: "周杰伦",
    previewUrl: "https://music.163.com/song/media/outer/url?id=186016.mp3",
    coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCap9EvkXiQuzX9ljaQhYlPbMbmJEDL-TXWa3L7t2JBFP2XsKg5H7f5mLdQHufBYE5VrZFiVAtBMlzGjdxVtBAnlJr3evLW_c5993XUIO2-otR3184OfVRYcukwf2dyZF-uvqh06KFLg6-XepKfXB8e3UMcSKr-FEJSsYrhS6gaV7_KJODYcsMNMCMcWdfZFb67DlcLtwow_nyGzrLcJ6SkvZwanxWftxLNqG68lPIUVkoJ_Xk75DAMUarVUeDafPjqK6Z6r21_2Ui5"
  },
  "七里香": {
    artist: "周杰伦",
    previewUrl: "https://music.163.com/song/media/outer/url?id=186001.mp3",
    coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoU1WYRieRYEPc9HOlC_nTo2O2Nf-NdW__iWIbki_QDZ3-7m0KiU4izMTndpukkkcXZSr8Wn9lmSCfY5lb3-flcxXIDSABiNpdPircwslok58gXVmXRCsaZd68eqlygq-MfFNXgr377hsRwarCbXzO-vt2v7mZea1EFHHlbAz_OjHhb2bWZdXGQUt88xbFG6-5tgk0Wy9-jqeD8znYgJwziRCxQGBsHOa7ekSheyBhSA8CplWmU267nAg36ehTSYpy5Woydfu30iMh"
  },
  "岛屿来信": {
    artist: "蒋敬生",
    previewUrl: "https://music.163.com/song/media/outer/url?id=1974443814.mp3",
    coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAAoAfxATkMY-lcQhSSe66LCBpKLehdMWjcLbgzbnYHG6vWzRBTLpA_fSsquV61cmS3BhuXcNpU1MPY15g5xmGKfURZ1jAo-M-7Dz4Bw7GVuwindyEvyl29Gw2y6drLqvPaqVimBJ3yLbonGsGJZCX9FrNsG-ajce-8JgiGjHJ2Vl-nkXxRDQqhDLTNKCUVP3jKi2inl8PRTIYpMgascW8DaaHDo4ft4VjyMcC105PSgjjDg_rA7fDLMKTMen-ggEBLioFO0IHSUEc"
  },
  "起风了": {
    artist: "买辣椒也用券",
    previewUrl: "https://music.163.com/song/media/outer/url?id=1330348068.mp3"
  },
  "旅行的意义": {
    artist: "陈绮贞",
    previewUrl: "https://music.163.com/song/media/outer/url?id=413077.mp3"
  },
  "后来": {
    artist: "刘若英",
    previewUrl: "https://music.163.com/song/media/outer/url?id=254574.mp3"
  },
  "再见": {
    artist: "张震岳",
    previewUrl: "https://music.163.com/song/media/outer/url?id=188491.mp3"
  },
  "西湖": {
    artist: "痛仰乐队",
    previewUrl: "https://music.163.com/song/media/outer/url?id=27646205.mp3"
  },
  "Midnight City": {
    artist: "M83",
    previewUrl: "https://music.163.com/song/media/outer/url?id=1696042.mp3"
  },
  "夜空中最亮的星": {
    artist: "逃跑计划",
    previewUrl: "https://music.163.com/song/media/outer/url?id=25706282.mp3"
  },
  "深夜港湾": {
    artist: "张敬轩",
    previewUrl: "https://music.163.com/song/media/outer/url?id=5240022.mp3"
  },
  "光年之外": {
    artist: "邓紫棋",
    previewUrl: "https://music.163.com/song/media/outer/url?id=449818741.mp3"
  },
  "春风十里": {
    artist: "鹿先森乐队",
    previewUrl: "https://music.163.com/song/media/outer/url?id=461011098.mp3"
  },
  "南山南": {
    artist: "马頔",
    previewUrl: "https://music.163.com/song/media/outer/url?id=29567189.mp3"
  },
  "成都": {
    artist: "赵雷",
    previewUrl: "https://music.163.com/song/media/outer/url?id=436514312.mp3"
  },
  "断桥残雪": {
    artist: "许嵩",
    previewUrl: "https://music.163.com/song/media/outer/url?id=167882.mp3"
  },
  "烟花易冷": {
    artist: "周杰伦",
    previewUrl: "https://music.163.com/song/media/outer/url?id=327408.mp3"
  }
};

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
    city: "厦门",
    previewUrl: "https://music.163.com/song/media/outer/url?id=186016.mp3"
  },
  {
    id: "m2",
    location: "深圳 · 福田区",
    song_title: "Midnight City",
    artist: "M83",
    date: "2026.03.28",
    coverUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=400",
    weather: "nights_stay",
    city: "深圳",
    previewUrl: "https://music.163.com/song/media/outer/url?id=1696042.mp3"
  },
  {
    id: "m3",
    location: "杭州 · 西湖",
    song_title: "西湖",
    artist: "痛仰乐队",
    date: "2024.08.15",
    coverUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80&w=400",
    weather: "wb_twilight",
    city: "杭州",
    previewUrl: "https://music.163.com/song/media/outer/url?id=27646205.mp3"
  }
];

export const detailSongs: DetailSong[] = [
  {
    title: "晴天",
    artist: "周杰伦",
    repeats: 5,
    coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCap9EvkXiQuzX9ljaQhYlPbMbmJEDL-TXWa3L7t2JBFP2XsKg5H7f5mLdQHufBYE5VrZFiVAtBMlzGjdxVtBAnlJr3evLW_c5993XUIO2-otR3184OfVRYcukwf2dyZF-uvqh06KFLg6-XepKfXB8e3UMcSKr-FEJSsYrhS6gaV7_KJODYcsMNMCMcWdfZFb67DlcLtwow_nyGzrLcJ6SkvZwanxWftxLNqG68lPIUVkoJ_Xk75DAMUarVUeDafPjqK6Z6r21_2Ui5",
    previewUrl: "https://music.163.com/song/media/outer/url?id=186016.mp3"
  },
  {
    title: "七里香",
    artist: "周杰伦",
    repeats: 2,
    coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoU1WYRieRYEPc9HOlC_nTo2O2Nf-NdW__iWIbki_QDZ3-7m0KiU4izMTndpukkkcXZSr8Wn9lmSCfY5lb3-flcxXIDSABiNpdPircwslok58gXVmXRCsaZd68eqlygq-MfFNXgr377hsRwarCbXzO-vt2v7mZea1EFHHlbAz_OjHhb2bWZdXGQUt88xbFG6-5tgk0Wy9-jqeD8znYgJwziRCxQGBsHOa7ekSheyBhSA8CplWmU267nAg36ehTSYpy5Woydfu30iMh",
    previewUrl: "https://music.163.com/song/media/outer/url?id=186001.mp3"
  },
  {
    title: "岛屿来信",
    artist: "蒋敬生",
    repeats: 1,
    coverUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAAoAfxATkMY-lcQhSSe66LCBpKLehdMWjcLbgzbnYHG6vWzRBTLpA_fSsquV61cmS3BhuXcNpU1MPY15g5xmGKfURZ1jAo-M-7Dz4Bw7GVuwindyEvyl29Gw2y6drLqvPaqVimBJ3yLbonGsGJZCX9FrNsG-ajce-8JgiGjHJ2Vl-nkXxRDQqhDLTNKCUVP3jKi2inl8PRTIYpMgascW8DaaHDo4ft4VjyMcC105PSgjjDg_rA7fDLMKTMen-ggEBLioFO0IHSUEc",
    previewUrl: "https://music.163.com/song/media/outer/url?id=1974443814.mp3"
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
    aiDescription: "深圳到厦门的高铁窗外全是灰蓝色的隧道和田野。你把《起风了》循环了三遍，又切到《旅行的意义》——车厢里没人说话，耳机里的风声替你完成了出发的仪式。",
    songs: ["起风了", "旅行的意义"],
    weather: "cloudy",
    colorHex: "#4648d4"
  },
  {
    day: 2,
    stageName: "探索",
    title: "鼓浪屿的回响",
    icon: "sailing",
    aiDescription: "日光岩顶上风很大，你把帽子按住才没被吹跑。《晴天》放到副歌的时候你看到了对岸的厦门，海面碎成一整片金箔。那天气温26度，微风不燥，你在最高处站了很久，没拍照。",
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
    aiDescription: "最后一天下起了小雨。你在曾厝垵的文艺小店里循环《后来》，又在回程的高铁上放了《再见》。有些告别不需要说出口，一首歌就够了。",
    songs: ["后来", "再见"],
    weather: "rainy",
    colorHex: "#b55d00"
  }
];

export const timelineTrips: TimelineTrip[] = [
  {
    id: "xiamen",
    city: "厦门",
    title: "厦门三日 · 音乐日记",
    subtitle: "2026.04.02 - 04.04 · 3天 · 12个地点 · 18首歌",
    dateRange: "2026.04",
    coverUrl: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=600",
    quote: "你没拍照的那个下午，耳机替你记住了。",
    nodes: [
      {
        day: 1,
        stageName: "出发",
        title: "抵达与铁轨的律动",
        icon: "train",
        aiDescription: "深圳到厦门的高铁窗外全是灰蓝色的隧道和田野。你把《起风了》循环了三遍，又切到《旅行的意义》——车厢里没人说话，耳机里的风声替你完成了出发的仪式。",
        songs: ["起风了", "旅行的意义"],
        weather: "cloudy",
        colorHex: "#4648d4"
      },
      {
        day: 2,
        stageName: "探索",
        title: "鼓浪屿的回响",
        icon: "sailing",
        aiDescription: "日光岩顶上风很大，你把帽子按住才没被吹跑。《晴天》放到副歌的时候你看到了对岸的厦门，海面碎成一整片金箔。那天气温26度，微风不燥，你在最高处站了很久，没拍照。",
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
        aiDescription: "最后一天下起了小雨。你在曾厝垵的文艺小店里循环《后来》，又在回程的高铁上放了《再见》。有些告别不需要说出口，一首歌就够了。",
        songs: ["后来", "再见"],
        weather: "rainy",
        colorHex: "#b55d00"
      }
    ]
  },
  {
    id: "shenzhen",
    city: "深圳",
    title: "深圳夜行 · 音乐日记",
    subtitle: "2026.03.27 - 03.29 · 3天 · 8个地点 · 14首歌",
    dateRange: "2026.03",
    coverUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600",
    quote: "凌晨两点的便利店，是你唯一不用摘耳机的地方。",
    nodes: [
      {
        day: 1,
        stageName: "入夜",
        title: "福田CBD的霓虹",
        icon: "train",
        aiDescription: "加完班从写字楼出来已经九点半。地铁站里人潮退了大半，你塞上耳机，《Midnight City》的合成器前奏刚好接上扶梯的节奏。城市变成一条发光的隧道，你是唯一不赶路的人。",
        songs: ["Midnight City", "夜空中最亮的星"],
        weather: "nights_stay",
        colorHex: "#6366f1"
      },
      {
        day: 2,
        stageName: "漫步",
        title: "深圳湾的潮汐",
        icon: "sailing",
        aiDescription: "周六下午骑车到深圳湾，风里有咸味。你把车停在栈道尽头，坐在石栏上看对岸的香港渐渐亮起灯。《深夜港湾》放到一半的时候，有只白鹭贴着水面飞过去，翅膀尖差点碰到浪花。",
        songs: ["深夜港湾", "光年之外"],
        weather: "wb_sunny",
        infoLabel: "今日骑行12.6km，海风与音乐让你忘记了时间。",
        colorHex: "#0ea5e9"
      },
      {
        day: 3,
        stageName: "深夜",
        title: "南山的独处时刻",
        icon: "rainy",
        aiDescription: "凌晨两点从朋友家出来，街上空无一人。便利店的灯是整条路唯一的暖色。你站在门口喝完一罐啤酒，《南山南》刚好唱到'你在南方的艳阳里大雪纷飞'。深圳没有雪，但那一刻你觉得有。",
        songs: ["南山南", "春风十里"],
        weather: "nights_stay",
        colorHex: "#f59e0b"
      }
    ]
  },
  {
    id: "hangzhou",
    city: "杭州",
    title: "杭州两日 · 音乐日记",
    subtitle: "2024.08.14 - 08.15 · 2天 · 6个地点 · 9首歌",
    dateRange: "2024.08",
    coverUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&q=80&w=600",
    quote: "跑过六座桥那天，你觉得自己真的可以变成一条鱼。",
    nodes: [
      {
        day: 1,
        stageName: "抵达",
        title: "断桥边的黄昏",
        icon: "train",
        aiDescription: "下了高铁直奔西湖，赶上最后一抹晚霞。断桥上人很多，但你走到最边上找了个没人的角落，靠着栏杆看夕阳一点点沉进山后面。《断桥残雪》放出来的时候你笑了——太应景了，连许嵩自己站这儿可能都会觉得巧。",
        songs: ["断桥残雪", "烟花易冷"],
        weather: "wb_twilight",
        colorHex: "#dc2626"
      },
      {
        day: 2,
        stageName: "沉浸",
        title: "苏堤晨跑的风",
        icon: "sailing",
        aiDescription: "早上六点的苏堤几乎没人。你跑过六座桥，湖面上薄雾还没散，远处雷峰塔像水墨画里的剪影。痛仰的《西湖》循环了整个跑程——'我愿意化作一条鱼'——跑到花港观鱼的时候你停下来，真的看了一会儿鱼。",
        songs: ["西湖 (6次)", "成都"],
        weather: "wb_sunny",
        infoLabel: "晨跑6.8km，苏堤六桥全程与音乐为伴。",
        colorHex: "#059669"
      }
    ]
  }
];

export const reportSlides: ReportSlide[] = [
  {
    id: 1,
    title: "小王，2026年",
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
