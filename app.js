function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;

/* ================= STORY ================= */
const STORY = [{
  title: "Meet Mr. Longnose",
  scene: "studio",
  text: ["Every Saturday night, families all over Hong Kong switched on their TVs to watch **Superstar Saturday**. The host wore a shiny blue suit, a white shirt and a red tie with black spots. He always held a silver microphone.", "His real name was Mr. Lung, but everybody called him **Mr. Longnose**. Why? Because his nose was so long that it reached the edge of the stage before the rest of him did!", "\"Good evening, Hong Kong!\" he would shout, and his nose would bob up and down with excitement."],
  vocab: [["host", "the person who introduces a TV show"], ["shiny", "bright and reflecting light"]]
}, {
  title: "SMACK!",
  scene: "lift",
  text: ["But Mr. Longnose's nose often got him into trouble. One afternoon, he turned around too quickly in the lift. **SMACK!** His nose hit the metal door.", "At lunch, his nose dipped right into his bowl of wonton noodles. Splash! Soup went everywhere.", "\"Oh dear,\" he **sighed**, wiping his nose with a napkin. \"Why can't I have a normal nose like everyone else?\""],
  vocab: [["sighed", "let out a long breath because you are sad or tired"]]
}, {
  title: "CLICK! CLICK!",
  scene: "news",
  text: ["Before the show, a newspaper photographer came backstage. **CLICK! CLICK!** His camera flashed again and again.", "The next morning, the **headline** said: \"Is This the Longest Nose in Hong Kong?\" At the MTR station, some children pointed at the picture and **giggled**.", "Mr. Longnose felt his cheeks turn red. He felt so **embarrassed** that he wanted to hide behind his microphone."],
  vocab: [["headline", "the title in big letters at the top of a news story"], ["giggled", "laughed in a silly, nervous way"], ["embarrassed", "shy and uncomfortable because people are looking at you"]]
}, {
  title: "A Tiny Fan",
  scene: "fan",
  text: ["That evening, a girl named Mei Mei was waiting at the stage door. She held up a drawing of Mr. Longnose with a huge smile.", "\"You are my favourite host!\" she said. \"Your nose is **special**. Nobody else in the world could ever be you.\"", "Mr. Longnose smiled for the first time that day. He folded the drawing carefully and kept it in his jacket pocket, close to his heart."],
  vocab: [["special", "different from others in a good way"]]
}, {
  title: "Sniff, Sniff... Danger!",
  scene: "smoke",
  text: ["In the middle of the live show, Mr. Longnose suddenly stopped talking. Sniff, sniff. His long nose could smell something nobody else could: **smoke**!", "A hot stage light behind the curtain had started to burn the cloth.", "\"Everybody, please walk **calmly** to the exits!\" he **announced** into his microphone. The crew put out the small fire quickly, and nobody was hurt."],
  vocab: [["calmly", "in a quiet, relaxed way without panic"], ["announced", "said something loudly so that everyone could hear"]]
}, {
  title: "WOW!",
  scene: "wow",
  text: ["The audience cheered and clapped. \"**WOW!** Mr. Longnose saved the show!\"", "The next day, the newspaper had a new headline: \"The Nose That Knows!\" Mr. Longnose stood **proudly** in front of the camera. CLICK! This time, he did not want to hide.", "\"Our differences make us special,\" he told the children watching at home. \"Be proud of who you are!\""],
  vocab: [["proudly", "feeling happy and confident about yourself"]]
}];

/* ================= QUESTIONS ================= */
const Q1 = [{
  q: "What was Mr. Longnose's job?",
  o: ["A TV show host", "A newspaper photographer", "A firefighter", "A noodle chef"],
  a: 0,
  why: "Page 1: He was the host of 'Superstar Saturday'."
}, {
  q: "What happened when he turned around too quickly in the lift?",
  o: ["He dropped his microphone", "His nose hit the door", "He fell asleep", "The lift stopped"],
  a: 1,
  why: "Page 2: SMACK! His nose hit the metal door."
}, {
  q: "What fell into his wonton noodles at lunch?",
  o: ["His tie", "His microphone", "His nose", "His newspaper"],
  a: 2,
  why: "Page 2: His nose dipped right into his bowl."
}, {
  q: "How did Mr. Longnose feel when the children giggled at the newspaper picture?",
  o: ["Proud", "Excited", "Sleepy", "Embarrassed"],
  a: 3,
  why: "Page 3: His cheeks turned red and he wanted to hide."
}, {
  q: "Who gave Mr. Longnose a drawing?",
  o: ["Mei Mei", "The photographer", "His mother", "A camera operator"],
  a: 0,
  why: "Page 4: Mei Mei waited at the stage door with a drawing."
}, {
  q: "What did his long nose smell during the live show?",
  o: ["Wonton noodles", "Smoke", "Flowers", "Perfume"],
  a: 1,
  why: "Page 5: A hot stage light started to burn the curtain."
}, {
  q: "In the story, the word 'calmly' means…",
  o: ["very quickly and noisily", "in a quiet, relaxed way", "in a sad way", "without listening"],
  a: 1,
  why: "'Calmly' means without panic — the safe way to leave during an emergency."
}, {
  q: "What is the main message of the story?",
  o: ["Long noses are dangerous", "Never go on TV", "Our differences make us special", "Always eat noodles slowly"],
  a: 2,
  why: "Page 6: \"Our differences make us special. Be proud of who you are!\""
}];
const SEQ = [{
  id: 1,
  t: "Mr. Longnose's nose hits the lift door. SMACK!"
}, {
  id: 2,
  t: "His nose dips into his wonton noodles."
}, {
  id: 3,
  t: "A photographer takes pictures of him backstage."
}, {
  id: 4,
  t: "Children at the MTR station giggle at the newspaper."
}, {
  id: 5,
  t: "Mei Mei gives him a drawing at the stage door."
}, {
  id: 6,
  t: "He smells smoke during the live show."
}, {
  id: 7,
  t: "The newspaper calls him 'The Nose That Knows!'"
}];
const TF = [{
  s: "Mr. Longnose's real name is Mr. Lung.",
  t: true,
  why: "Yes! Everybody called Mr. Lung 'Mr. Longnose'."
}, {
  s: "Superstar Saturday was on every Sunday morning.",
  t: false,
  why: "It was on every Saturday night."
}, {
  s: "His tie is red with black spots.",
  t: true,
  why: "Correct — a red tie with black polka dots!"
}, {
  s: "Mr. Longnose felt proud when the children giggled.",
  t: false,
  why: "He felt embarrassed and wanted to hide."
}, {
  s: "Mei Mei said his nose was special.",
  t: true,
  why: "She said, 'Your nose is special.'"
}, {
  s: "A big fire burnt down the whole studio.",
  t: false,
  why: "It was a small fire and the crew put it out quickly."
}, {
  s: "He told the audience to walk calmly to the exits.",
  t: true,
  why: "He announced it into his microphone."
}, {
  s: "At the end, Mr. Longnose still wanted to hide.",
  t: false,
  why: "This time he did NOT want to hide — he stood proudly!"
}];
const MAX = {
  p1: Q1.length,
  p2: SEQ.length,
  p3: TF.length,
  p4: 6
};
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzTsVE1p9cObYk16dtA-rRF88ZoufQ5a4IqP1QTYjsCOL7XG3psFJbx2CxEJm71Ihz0/exec";

/* ================= SOUND ================= */
const audio = {
  ctx: null
};
function beep(type) {
  try {
    if (!audio.ctx) audio.ctx = new (window.AudioContext || window.webkitAudioContext)();
    const c = audio.ctx;
    if (c.state === "suspended") c.resume();
    const notes = {
      good: [523, 659, 784],
      bad: [220, 150],
      click: [880],
      page: [600, 820],
      win: [523, 659, 784, 1046, 1318]
    }[type] || [440];
    notes.forEach((f, i) => {
      const o = c.createOscillator(),
        g = c.createGain();
      o.type = type === "bad" ? "sawtooth" : "square";
      o.frequency.value = f;
      const t = c.currentTime + i * 0.09;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.09, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
      o.connect(g);
      g.connect(c.destination);
      o.start(t);
      o.stop(t + 0.18);
    });
  } catch (e) {}
}

/* ================= HELPERS ================= */
function shuffle(a) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}
function rich(t) {
  return t.split(/(\*\*[^*]+\*\*)/g).map((s, i) => s.startsWith("**") ? /*#__PURE__*/React.createElement("mark", {
    key: i
  }, s.slice(2, -2)) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, s));
}
function plain(t) {
  return t.replace(/\*\*/g, "");
}
function downloadURL(url, name) {
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
}
function useUid() {
  return React.useId().replace(/[^a-zA-Z0-9]/g, "");
}
const NOSE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 80"><path d="M10 24 Q22 8 46 14 L188 22 Q214 28 208 46 Q200 64 178 58 L44 56 Q14 56 10 40 Z" fill="#f6c89f" stroke="#111" stroke-width="6" stroke-linejoin="round"/><circle cx="188" cy="40" r="11" fill="#ef8f7f" opacity=".7"/><path d="M56 26 L170 31" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".75"/><ellipse cx="172" cy="51" rx="7" ry="3" fill="#6b3b2a"/></svg>`;
const NOSE_URL = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(NOSE_SVG);
function burstPts(r1, r2, n) {
  const p = [];
  for (let i = 0; i < n * 2; i++) {
    const a = Math.PI * i / n;
    const r = i % 2 ? r2 : r1;
    p.push((Math.cos(a) * r).toFixed(1) + "," + (Math.sin(a) * r).toFixed(1));
  }
  return p.join(" ");
}
function Burst({
  x,
  y,
  r = 60,
  text,
  fill = "#ffd400",
  tc = "#d7262e",
  rot = -8,
  fs = 26
}) {
  return /*#__PURE__*/React.createElement("g", {
    transform: `translate(${x} ${y}) rotate(${rot})`
  }, /*#__PURE__*/React.createElement("polygon", {
    points: burstPts(r, r * 0.7, 13),
    fill: fill,
    stroke: "#111",
    strokeWidth: "5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("text", {
    textAnchor: "middle",
    dy: fs * 0.35,
    fontSize: fs,
    fontWeight: "900",
    fill: tc,
    stroke: "#111",
    strokeWidth: "2.5",
    style: {
      paintOrder: "stroke"
    },
    fontFamily: "Chalkboard SE, Comic Sans MS, sans-serif"
  }, text));
}

/* ================= MR LONGNOSE SVG ================= */
function MrLongnose({
  mood = "happy",
  talking = false,
  x,
  y,
  width,
  height,
  className,
  style
}) {
  const uid = useUid();
  const P = "p" + uid,
    D = "d" + uid,
    M = "m" + uid;
  const skin = "#f6c89f",
    hair = "#7a4521";
  const sad = mood === "sad",
    shock = mood === "shock";
  const stubble = [[170, 206], [178, 212], [188, 215], [198, 213], [207, 208], [213, 200], [164, 199], [182, 205], [203, 203], [192, 208], [172, 199], [210, 193]];
  return /*#__PURE__*/React.createElement("svg", {
    x: x,
    y: y,
    width: width,
    height: height,
    viewBox: "0 0 320 380",
    className: className,
    style: style,
    role: "img",
    "aria-label": "Mr. Longnose"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: P,
    width: "12",
    height: "12",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "12",
    height: "12",
    fill: "#d7262e"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.3",
    fill: "#111"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "2.3",
    fill: "#111"
  })), /*#__PURE__*/React.createElement("pattern", {
    id: D,
    width: "8",
    height: "8",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "4",
    r: "1.6",
    fill: "#0b1f5c"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: M,
    x1: "0",
    x2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#8d949c"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: ".45",
    stopColor: "#f4f6f8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#7c838b"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M108 96 Q82 150 96 212 Q106 238 134 240 L142 220 Q118 196 116 150 Z",
    fill: hair,
    stroke: "#111",
    strokeWidth: "5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M104 160 Q102 196 116 220",
    stroke: "#4a2a12",
    strokeWidth: "3",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "138",
    y: "190",
    width: "44",
    height: "56",
    fill: skin,
    stroke: "#111",
    strokeWidth: "5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30 380 L44 296 Q54 250 112 238 L208 238 Q266 250 276 296 L290 380 Z",
    fill: "#2453c7",
    stroke: "#111",
    strokeWidth: "5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30 380 L44 296 Q54 250 112 238 L208 238 Q266 250 276 296 L290 380 Z",
    fill: `url(#${D})`,
    opacity: ".35"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M126 238 L160 312 L194 238 Z",
    fill: "#fff",
    stroke: "#111",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M112 240 L128 238 L150 300 L160 334 L126 292 L136 276 Z",
    fill: "#1a3f9e",
    stroke: "#111",
    strokeWidth: "4",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M208 240 L192 238 L170 300 L160 334 L194 292 L184 276 Z",
    fill: "#1a3f9e",
    stroke: "#111",
    strokeWidth: "4",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M126 238 L160 258 L146 274 L120 246 Z",
    fill: "#fff",
    stroke: "#111",
    strokeWidth: "4",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M194 238 L160 258 L174 274 L200 246 Z",
    fill: "#fff",
    stroke: "#111",
    strokeWidth: "4",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M150 256 L170 256 L167 272 L153 272 Z",
    fill: `url(#${P})`,
    stroke: "#111",
    strokeWidth: "4",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M153 272 L167 272 L178 328 L160 348 L142 328 Z",
    fill: `url(#${P})`,
    stroke: "#111",
    strokeWidth: "4",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "160",
    cy: "140",
    rx: "56",
    ry: "68",
    fill: skin,
    stroke: "#111",
    strokeWidth: "5"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "108",
    cy: "148",
    rx: "12",
    ry: "18",
    fill: skin,
    stroke: "#111",
    strokeWidth: "5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M106 142 Q112 148 106 156",
    stroke: "#111",
    strokeWidth: "3",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M114 118 L128 118 L126 162 L116 158 Z",
    fill: hair,
    stroke: "#111",
    strokeWidth: "4",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M100 128 Q86 68 132 52 Q172 34 212 56 Q238 72 230 98 Q214 86 196 88 Q176 80 160 92 Q138 100 124 124 Z",
    fill: hair,
    stroke: "#111",
    strokeWidth: "5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M128 72 Q160 52 200 62",
    stroke: "#b5773f",
    strokeWidth: "5",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M118 96 Q140 74 176 72",
    stroke: "#4a2a12",
    strokeWidth: "3",
    fill: "none",
    strokeLinecap: "round"
  }), sad ? /*#__PURE__*/React.createElement("g", {
    stroke: "#4a2a12",
    strokeWidth: "6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M138 104 L162 112"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M178 112 L202 102"
  })) : shock ? /*#__PURE__*/React.createElement("g", {
    stroke: "#4a2a12",
    strokeWidth: "6",
    strokeLinecap: "round",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M136 100 Q150 90 164 98"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M176 96 Q190 86 204 94"
  })) : /*#__PURE__*/React.createElement("g", {
    stroke: "#4a2a12",
    strokeWidth: "6",
    strokeLinecap: "round",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M138 110 Q150 102 162 108"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M178 106 Q190 98 202 104"
  })), /*#__PURE__*/React.createElement("g", {
    className: "blink"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "150",
    cy: "130",
    rx: shock ? 11 : 9,
    ry: shock ? 14 : 12,
    fill: "#fff",
    stroke: "#111",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "190",
    cy: "128",
    rx: shock ? 11 : 9,
    ry: shock ? 14 : 12,
    fill: "#fff",
    stroke: "#111",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: sad ? 151 : 153,
    cy: sad ? 135 : 132,
    r: shock ? 4 : 5,
    fill: "#111"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: sad ? 191 : 193,
    cy: sad ? 133 : 130,
    r: shock ? 4 : 5,
    fill: "#111"
  })), sad && /*#__PURE__*/React.createElement("g", {
    fill: "#ff6b6b",
    opacity: ".55"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "140",
    cy: "166",
    rx: "13",
    ry: "7"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "206",
    cy: "160",
    rx: "9",
    ry: "6"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#6b4a33",
    opacity: ".5"
  }, stubble.map(([a, b], i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: a,
    cy: b,
    r: "1.6"
  }))), talking ? /*#__PURE__*/React.createElement("ellipse", {
    className: "talk",
    cx: "199",
    cy: "196",
    rx: "11",
    ry: "8",
    fill: "#6b1a1a",
    stroke: "#111",
    strokeWidth: "3"
  }) : shock ? /*#__PURE__*/React.createElement("ellipse", {
    cx: "199",
    cy: "198",
    rx: "8",
    ry: "11",
    fill: "#6b1a1a",
    stroke: "#111",
    strokeWidth: "3"
  }) : sad ? /*#__PURE__*/React.createElement("path", {
    d: "M182 204 Q200 190 216 204",
    stroke: "#111",
    strokeWidth: "4",
    fill: "none",
    strokeLinecap: "round"
  }) : /*#__PURE__*/React.createElement("path", {
    d: "M180 190 Q200 210 218 190 Z",
    fill: "#7a1d1d",
    stroke: "#111",
    strokeWidth: "4",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M170 178 Q184 170 198 176 Q212 170 226 178 Q212 186 198 182 Q184 188 170 178 Z",
    fill: "#4a2a12",
    stroke: "#111",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("g", {
    className: "nose"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M188 138 Q198 128 216 134 L298 142 Q318 146 314 160 Q308 172 290 168 L210 166 Q192 166 188 156 Z",
    fill: skin,
    stroke: "#111",
    strokeWidth: "5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "298",
    cy: "154",
    r: "9",
    fill: "#ef8f7f",
    opacity: ".65"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M222 142 L288 148",
    stroke: "#fff",
    strokeWidth: "4",
    opacity: ".75",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "286",
    cy: "163",
    rx: "5",
    ry: "2.5",
    fill: "#6b3b2a"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M232 380 Q234 320 230 290 Q228 276 240 268 L258 276 Q262 300 268 330 L276 380 Z",
    fill: "#2453c7",
    stroke: "#111",
    strokeWidth: "5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M232 380 Q234 320 230 290 Q228 276 240 268 L258 276 Q262 300 268 330 L276 380 Z",
    fill: `url(#${D})`,
    opacity: ".35"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M240 282 Q226 330 250 380",
    stroke: "#111",
    strokeWidth: "3",
    fill: "none",
    opacity: ".5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "232",
    y: "226",
    width: "16",
    height: "58",
    rx: "6",
    fill: `url(#${M})`,
    stroke: "#111",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "241",
    cy: "266",
    r: "15",
    fill: skin,
    stroke: "#111",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M228 260 L244 258 M228 268 L244 267",
    stroke: "#111",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "240",
    cy: "206",
    rx: "22",
    ry: "28",
    fill: `url(#${M})`,
    stroke: "#111",
    strokeWidth: "5"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "#555",
    strokeWidth: "2"
  }, [188, 194, 200, 212, 218, 224].map(yy => /*#__PURE__*/React.createElement("line", {
    key: yy,
    x1: yy < 194 || yy > 218 ? 228 : 222,
    y1: yy,
    x2: yy < 194 || yy > 218 ? 252 : 258,
    y2: yy
  }))), /*#__PURE__*/React.createElement("rect", {
    x: "219",
    y: "202",
    width: "42",
    height: "8",
    rx: "2",
    fill: "#333",
    stroke: "#111",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M226 190 Q230 184 236 182",
    stroke: "#fff",
    strokeWidth: "3",
    fill: "none",
    strokeLinecap: "round"
  }));
}
function MeiMei({
  x = 0,
  y = 0,
  s = 1
}) {
  return /*#__PURE__*/React.createElement("g", {
    transform: `translate(${x} ${y}) scale(${s})`
  }, /*#__PURE__*/React.createElement("rect", {
    x: "-14",
    y: "120",
    width: "10",
    height: "34",
    fill: "#f6c89f",
    stroke: "#111",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "120",
    width: "10",
    height: "34",
    fill: "#f6c89f",
    stroke: "#111",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-32 126 L0 50 L32 126 Z",
    fill: "#ff4d8d",
    stroke: "#111",
    strokeWidth: "5",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "-46",
    cy: "18",
    r: "13",
    fill: "#111"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "46",
    cy: "18",
    r: "13",
    fill: "#111"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "0",
    cy: "22",
    r: "34",
    fill: "#f6c89f",
    stroke: "#111",
    strokeWidth: "5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-34 18 Q-30 -16 0 -14 Q30 -16 34 18 Q20 2 0 6 Q-20 2 -34 18 Z",
    fill: "#111"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "-12",
    cy: "24",
    r: "4",
    fill: "#111"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "24",
    r: "4",
    fill: "#111"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-10 38 Q0 48 10 38",
    stroke: "#111",
    strokeWidth: "4",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "-22",
    cy: "34",
    r: "5",
    fill: "#ff8fa8",
    opacity: ".7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "22",
    cy: "34",
    r: "5",
    fill: "#ff8fa8",
    opacity: ".7"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(18 58) rotate(-8)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "70",
    height: "56",
    fill: "#fff",
    stroke: "#111",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "26",
    r: "12",
    fill: "none",
    stroke: "#2453c7",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 26 L62 26",
    stroke: "#d7262e",
    strokeWidth: "4",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 34 Q24 40 30 34",
    stroke: "#111",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("text", {
    x: "10",
    y: "52",
    fontSize: "9",
    fontWeight: "900"
  }, "\u2665 MR. L")));
}
function Scene({
  kind
}) {
  const uid = useUid();
  const dots = "ht" + uid;
  const rays = (cx, cy, n, c1, c2) => Array.from({
    length: n
  }).map((_, i) => {
    const a1 = i / n * Math.PI * 2,
      a2 = (i + 0.5) / n * Math.PI * 2;
    return /*#__PURE__*/React.createElement("polygon", {
      key: i,
      points: `${cx},${cy} ${cx + Math.cos(a1) * 700},${cy + Math.sin(a1) * 700} ${cx + Math.cos(a2) * 700},${cy + Math.sin(a2) * 700}`,
      fill: i % 2 ? c1 : c2
    });
  });
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 480 300",
    className: "scene",
    role: "img",
    "aria-label": "Comic panel: " + kind
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: dots,
    width: "10",
    height: "10",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "5",
    r: "2",
    fill: "#000",
    opacity: ".16"
  })), /*#__PURE__*/React.createElement("clipPath", {
    id: "c" + uid
  }, /*#__PURE__*/React.createElement("rect", {
    width: "480",
    height: "300"
  }))), /*#__PURE__*/React.createElement("g", {
    clipPath: `url(#c${uid})`
  }, kind === "studio" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    width: "480",
    height: "300",
    fill: "#6a2bb8"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "120,0 160,0 300,250 200,250",
    fill: "#ffe97a",
    opacity: ".45"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "380,0 420,0 340,250 250,250",
    fill: "#ffe97a",
    opacity: ".35"
  }), /*#__PURE__*/React.createElement("rect", {
    y: "250",
    width: "480",
    height: "50",
    fill: "#8a4a1f",
    stroke: "#111",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 0 L70 0 Q60 150 80 300 L0 300 Z",
    fill: "#d7262e",
    stroke: "#111",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M480 0 L410 0 Q420 150 400 300 L480 300 Z",
    fill: "#d7262e",
    stroke: "#111",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 0 Q16 150 28 300 M46 0 Q40 150 52 300 M456 0 Q462 150 450 300 M432 0 Q438 150 428 300",
    stroke: "#8e1219",
    strokeWidth: "4",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "480",
    height: "300",
    fill: `url(#${dots})`
  }), /*#__PURE__*/React.createElement(MrLongnose, {
    x: 150,
    y: 30,
    width: 220,
    height: 260,
    talking: true
  }), /*#__PURE__*/React.createElement(Burst, {
    x: 110,
    y: 70,
    r: 52,
    text: "TA-DA!",
    fs: 20
  })), kind === "lift" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    width: "480",
    height: "300",
    fill: "#cfd6de"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "300",
    y: "20",
    width: "180",
    height: "280",
    fill: "#9aa6b2",
    stroke: "#111",
    strokeWidth: "5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "390",
    y1: "20",
    x2: "390",
    y2: "300",
    stroke: "#111",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "350",
    y: "0",
    width: "80",
    height: "18",
    fill: "#222"
  }), /*#__PURE__*/React.createElement("text", {
    x: "390",
    y: "14",
    textAnchor: "middle",
    fill: "#ff4d4d",
    fontSize: "13",
    fontWeight: "900"
  }, "\u25B2 18"), /*#__PURE__*/React.createElement("rect", {
    width: "480",
    height: "300",
    fill: `url(#${dots})`
  }), /*#__PURE__*/React.createElement(MrLongnose, {
    x: 30,
    y: 30,
    width: 260,
    height: 290,
    mood: "shock"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "#111",
    strokeWidth: "4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "290",
    y1: "140",
    x2: "310",
    y2: "120"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "292",
    y1: "160",
    x2: "318",
    y2: "160"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "290",
    y1: "180",
    x2: "310",
    y2: "200"
  })), /*#__PURE__*/React.createElement(Burst, {
    x: 390,
    y: 90,
    r: 66,
    text: "SMACK!",
    fill: "#ff4d4d",
    tc: "#ffd400",
    fs: 26,
    rot: 10
  })), kind === "news" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    width: "480",
    height: "300",
    fill: "#bfe9ff"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(20 40) rotate(-6)"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "220",
    height: "200",
    fill: "#fdfbf2",
    stroke: "#111",
    strokeWidth: "5"
  }), /*#__PURE__*/React.createElement("text", {
    x: "110",
    y: "28",
    textAnchor: "middle",
    fontSize: "15",
    fontWeight: "900"
  }, "HK DAILY"), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "36",
    x2: "210",
    y2: "36",
    stroke: "#111",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("text", {
    x: "110",
    y: "60",
    textAnchor: "middle",
    fontSize: "15",
    fontWeight: "900"
  }, "LONGEST NOSE"), /*#__PURE__*/React.createElement("text", {
    x: "110",
    y: "78",
    textAnchor: "middle",
    fontSize: "15",
    fontWeight: "900"
  }, "IN HONG KONG?"), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "90",
    width: "110",
    height: "90",
    fill: "#ddd",
    stroke: "#111",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "130",
    r: "22",
    fill: "#f6c89f",
    stroke: "#111",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M74 128 L126 130",
    stroke: "#111",
    strokeWidth: "9",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M74 128 L126 130",
    stroke: "#f6c89f",
    strokeWidth: "4",
    strokeLinecap: "round"
  }), [96, 110, 124, 138, 152, 166].map(yy => /*#__PURE__*/React.createElement("line", {
    key: yy,
    x1: "140",
    y1: yy,
    x2: "205",
    y2: yy,
    stroke: "#999",
    strokeWidth: "4"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "480",
    height: "300",
    fill: `url(#${dots})`
  }), /*#__PURE__*/React.createElement(MrLongnose, {
    x: 240,
    y: 60,
    width: 200,
    height: 240,
    mood: "sad"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: burstPts(40, 14, 8),
    transform: "translate(420 70)",
    fill: "#fff",
    stroke: "#111",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement(Burst, {
    x: 330,
    y: 50,
    r: 46,
    text: "CLICK!",
    fs: 18,
    rot: -6,
    fill: "#2fd3ff",
    tc: "#fff"
  })), kind === "fan" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    width: "480",
    height: "300",
    fill: "#ffb3d1"
  }), rays(130, 150, 20, "#ffc6de", "#ffa0c8"), /*#__PURE__*/React.createElement("rect", {
    width: "480",
    height: "300",
    fill: `url(#${dots})`
  }), /*#__PURE__*/React.createElement(MeiMei, {
    x: 110,
    y: 110,
    s: 1.1
  }), /*#__PURE__*/React.createElement(MrLongnose, {
    x: 230,
    y: 30,
    width: 230,
    height: 270
  }), [[200, 60], [230, 30], [170, 30]].map(([a, b], i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    transform: `translate(${a} ${b}) scale(${1 - i * 0.2})`,
    d: "M0 8 C-12 -8 -28 6 0 26 C28 6 12 -8 0 8 Z",
    fill: "#d7262e",
    stroke: "#111",
    strokeWidth: "3"
  }))), kind === "smoke" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    width: "480",
    height: "300",
    fill: "#2b2b4a"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M480 0 L380 0 Q390 150 370 300 L480 300 Z",
    fill: "#a8141b",
    stroke: "#111",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "390",
    y: "10",
    width: "40",
    height: "30",
    fill: "#555",
    stroke: "#111",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M396 210 Q404 180 412 200 Q418 170 428 205 Q436 190 436 220 Z",
    fill: "#ff8a00",
    stroke: "#111",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M404 214 Q410 196 416 208 Q422 194 426 216 Z",
    fill: "#ffd400"
  }), [[380, 150, 30], [340, 110, 26], [300, 80, 22], [360, 60, 18], [410, 120, 24]].map(([a, b, r], i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: a,
    cy: b,
    r: r,
    fill: "#9aa0a6",
    stroke: "#111",
    strokeWidth: "3",
    opacity: ".9"
  })), /*#__PURE__*/React.createElement("rect", {
    width: "480",
    height: "300",
    fill: `url(#${dots})`
  }), /*#__PURE__*/React.createElement(MrLongnose, {
    x: 20,
    y: 40,
    width: 230,
    height: 260,
    mood: "shock",
    className: "twitchy"
  }), /*#__PURE__*/React.createElement(Burst, {
    x: 250,
    y: 60,
    r: 58,
    text: "SNIFF!",
    fs: 22,
    rot: -10
  })), kind === "wow" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    width: "480",
    height: "300",
    fill: "#ffd400"
  }), rays(240, 130, 24, "#ffb000", "#ffe14d"), /*#__PURE__*/React.createElement("rect", {
    width: "480",
    height: "300",
    fill: `url(#${dots})`
  }), /*#__PURE__*/React.createElement(MrLongnose, {
    x: 120,
    y: 10,
    width: 240,
    height: 270,
    talking: true
  }), Array.from({
    length: 11
  }).map((_, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: 20 + i * 45,
    cy: 290,
    r: 26,
    fill: ["#111", "#5a3b22", "#222", "#7a4521"][i % 4],
    stroke: "#111",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: `M${8 + i * 45} 266 L${2 + i * 45} 246 M${32 + i * 45} 266 L${38 + i * 45} 246`,
    stroke: "#f6c89f",
    strokeWidth: "7",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement(Burst, {
    x: 80,
    y: 70,
    r: 62,
    text: "WOW!",
    fs: 30,
    fill: "#ff4d4d",
    tc: "#ffd400"
  }), /*#__PURE__*/React.createElement(Burst, {
    x: 410,
    y: 80,
    r: 44,
    text: "CLAP!",
    fs: 18,
    rot: 10,
    fill: "#2fd3ff",
    tc: "#fff"
  }))));
}

/* ================= STORY MODAL ================= */
function StoryModal({
  page,
  setPage,
  onClose,
  sfx
}) {
  const [fs, setFs] = useState(22);
  const [speaking, setSpeaking] = useState(false);
  const [openVocab, setOpenVocab] = useState(true);
  const bodyRef = useRef(null);
  const swipe = useRef(null);
  const pg = STORY[page];
  const stopSpeak = () => {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
    setSpeaking(false);
  };
  const go = n => {
    if (n < 0 || n >= STORY.length) return;
    stopSpeak();
    setPage(n);
    sfx("page");
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
  };
  const speak = () => {
    if (!("speechSynthesis" in window)) return;
    if (speaking) {
      stopSpeak();
      return;
    }
    const u = new SpeechSynthesisUtterance(pg.title + ". " + pg.text.map(plain).join(" "));
    u.lang = "en-GB";
    u.rate = 0.9;
    u.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(u);
    setSpeaking(true);
  };
  useEffect(() => {
    const k = e => {
      if (e.key === "ArrowRight") go(page + 1);
      if (e.key === "ArrowLeft") go(page - 1);
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  });
  useEffect(() => () => stopSpeak(), []);
  const close = () => {
    stopSpeak();
    onClose();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Read the story",
    onPointerDown: e => {
      if (e.target === e.currentTarget) close();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reader"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reader-top"
  }, /*#__PURE__*/React.createElement("h2", null, "\uD83D\uDCD6 Mr. Longnose"), /*#__PURE__*/React.createElement("button", {
    className: "btn small",
    onClick: () => setFs(f => Math.max(16, f - 2)),
    "aria-label": "Smaller text"
  }, "A\u2212"), /*#__PURE__*/React.createElement("button", {
    className: "btn small",
    onClick: () => setFs(f => Math.min(34, f + 2)),
    "aria-label": "Bigger text"
  }, "A+"), /*#__PURE__*/React.createElement("button", {
    className: "btn small yellow",
    onClick: speak
  }, speaking ? "⏹ Stop" : "🔊 Read aloud"), /*#__PURE__*/React.createElement("button", {
    className: "btn red",
    onClick: close
  }, "\u2715 Back to Quiz")), /*#__PURE__*/React.createElement("div", {
    className: "reader-body",
    ref: bodyRef,
    onPointerDown: e => {
      swipe.current = {
        x: e.clientX,
        y: e.clientY
      };
    },
    onPointerUp: e => {
      if (!swipe.current) return;
      const dx = e.clientX - swipe.current.x,
        dy = e.clientY - swipe.current.y;
      swipe.current = null;
      if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) go(page + (dx < 0 ? 1 : -1));
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Scene, {
    kind: pg.scene,
    key: page
  }), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      textAlign: "center"
    }
  }, "Page ", page + 1, " of ", STORY.length, " \xB7 swipe to turn pages")), /*#__PURE__*/React.createElement("div", {
    className: "story",
    style: {
      fontSize: fs
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "chapter",
    style: {
      color: "#ffd400"
    }
  }, page + 1, ". ", pg.title), pg.text.map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, rich(t))), pg.vocab && /*#__PURE__*/React.createElement("div", {
    className: "vocab"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn small blue",
    onClick: () => setOpenVocab(v => !v)
  }, "\uD83D\uDCDA Word Box ", openVocab ? "▲" : "▼"), openVocab && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "8px 0 0",
      paddingLeft: 22
    }
  }, pg.vocab.map(([w, m]) => /*#__PURE__*/React.createElement("li", {
    key: w
  }, /*#__PURE__*/React.createElement("b", null, w), " \u2013 ", m)))))), /*#__PURE__*/React.createElement("div", {
    className: "reader-bottom"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => go(page - 1),
    disabled: page === 0
  }, "\u25C0 Prev"), /*#__PURE__*/React.createElement("div", {
    className: "dots"
  }, STORY.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "dot" + (i === page ? " on" : ""),
    onClick: () => go(i),
    "aria-label": "Page " + (i + 1)
  }))), page < STORY.length - 1 ? /*#__PURE__*/React.createElement("button", {
    className: "btn green",
    onClick: () => go(page + 1)
  }, "Next \u25B6") : /*#__PURE__*/React.createElement("button", {
    className: "btn green",
    onClick: close
  }, "Done \u2713"))));
}

/* ================= START ================= */
function Start({
  name,
  setName,
  number,
  setNumber,
  klass,
  setKlass,
  onStart,
  openStory
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MrLongnose, {
    className: "host floaty",
    talking: true,
    style: {
      width: "100%"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "title-big"
  }, "MR. LONGNOSE"), /*#__PURE__*/React.createElement("div", {
    className: "banner"
  }, "Comic Quiz Adventure!", /*#__PURE__*/React.createElement("small", null, "Primary 6 Reading Challenge")), /*#__PURE__*/React.createElement("div", {
    className: "bubble",
    style: {
      marginBottom: 26
    }
  }, "\"Good evening, superstar readers! Read my story first, then join my quiz show!\""), /*#__PURE__*/React.createElement("div", {
    className: "ink card"
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontWeight: 900,
      fontSize: 20
    }
  }, "Your name:"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    className: "name-in",
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "e.g. Chan Tai Man",
    maxLength: 30
  }), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 10,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontWeight: 900
    }
  }, "Class number:"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    className: "name-in",
    value: number,
    onChange: e => setNumber(e.target.value),
    placeholder: "e.g. 12",
    maxLength: 4,
    inputMode: "numeric"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontWeight: 900
    }
  }, "Class:"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    className: "name-in",
    value: klass,
    onChange: e => setKlass(e.target.value),
    placeholder: "e.g. 6A",
    maxLength: 6
  }))), /*#__PURE__*/React.createElement("ul", {
    className: "parts-list"
  }, /*#__PURE__*/React.createElement("li", null, "\uD83C\uDFA4 ", /*#__PURE__*/React.createElement("b", null, "Part 1"), " \u2013 Job Interview: drag the right person"), /*#__PURE__*/React.createElement("li", null, "\uD83E\uDDE9 ", /*#__PURE__*/React.createElement("b", null, "Part 2"), " \u2013 Feelings: swipe his face"), /*#__PURE__*/React.createElement("li", null, "\uD83D\uDC49 ", /*#__PURE__*/React.createElement("b", null, "Part 3"), " \u2013 Describe the Scene: fill the blank"), /*#__PURE__*/React.createElement("li", null, "\uD83C\uDFA8 ", /*#__PURE__*/React.createElement("b", null, "Part 4"), " \u2013 Creative Studio: draw, nose-selfie & write")), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, "Tip: tap ", /*#__PURE__*/React.createElement("b", null, "\uD83D\uDCD6 Read Story"), " in the red bar at any time. Your answers will stay safe!"), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn blue big",
    onClick: openStory
  }, "\uD83D\uDCD6 Read Story First"), /*#__PURE__*/React.createElement("button", {
    className: "btn green big",
    onClick: onStart,
    disabled: !name.trim() || !number.trim() || !klass.trim(),
    style: {
      opacity: !name.trim() || !number.trim() || !klass.trim() ? 0.5 : 1
    }
  }, "Start Quiz \u25B6")))));
}

/* ================= LAYOUT ================= */
function PartLayout({
  mood = "happy",
  talking = false,
  twitch = false,
  say,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "grid2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hostcol"
  }, /*#__PURE__*/React.createElement(MrLongnose, {
    className: "host" + (twitch ? " twitchy" : ""),
    mood: mood,
    talking: talking
  }), say && /*#__PURE__*/React.createElement("div", {
    className: "bubble"
  }, say)), /*#__PURE__*/React.createElement("div", null, children));
}

/* ================= PART 1 ================= */
/* ================= POOLS ================= */
MAX.p1 = 3;
MAX.p2 = 3;
MAX.p3 = 2;
const JOBS = [{
  k: "lawyer",
  label: "Lawyer"
}, {
  k: "doctor",
  label: "Doctor"
}, {
  k: "vet",
  label: "Vet"
}, {
  k: "astronaut",
  label: "Astronaut"
}, {
  k: "actress",
  label: "Actress"
}, {
  k: "designer",
  label: "Fashion Designer"
}, {
  k: "pilot",
  label: "Pilot"
}];
const P1_POOL = [{
  prompt: "I want to interview someone who helps sick animals get better!",
  answer: "vet",
  job: "vet"
}, {
  prompt: "Please bring me someone who flies planes high in the sky!",
  answer: "pilot",
  job: "pilot"
}, {
  prompt: "I'd love to interview a person who has travelled into space!",
  answer: "astronaut",
  job: "astronaut"
}, {
  prompt: "Find me someone who helps people in court with the law!",
  answer: "lawyer",
  job: "lawyer"
}, {
  prompt: "I need to talk to someone who looks after sick patients in hospital!",
  answer: "doctor",
  job: "doctor"
}, {
  prompt: "Bring me a star who acts in films and plays on stage!",
  answer: "actress",
  job: "actress"
}, {
  prompt: "I'd like to meet someone who designs beautiful clothes!",
  answer: "designer",
  job: "designer"
}];
const P2_POOL = [{
  prompt: "Mr. Longnose's nose hit the lift door. SMACK! How does he feel?",
  answer: "sad"
}, {
  prompt: "He smelled smoke during the live show. How does he feel?",
  answer: "afraid"
}, {
  prompt: "Mei Mei says, \"Your nose is special!\" How does he feel?",
  answer: "happy"
}, {
  prompt: "The children giggled at his picture. He is about to go on stage again. How does he feel?",
  answer: "nervous"
}, {
  prompt: "Someone spilled soup all over his new suit again! How does he feel?",
  answer: "angry"
}, {
  prompt: "The audience is cheering. He is about to be on the big show! How does he feel?",
  answer: "excited"
}];
const P3_POOL = [{
  scene: "smoke",
  sentence: "When he smelled smoke, Mr. Longnose stayed ___ and told everyone to walk to the exits.",
  answer: "calm"
}, {
  scene: "practice",
  sentence: "He practises his lines every night. He is very ___.",
  answer: "hard-working"
}, {
  scene: "suit",
  sentence: "In his shiny blue suit, everybody says the host is ___.",
  answer: "good-looking"
}, {
  scene: "listen",
  sentence: "Mr. Longnose looked at Mei Mei and listened carefully. He is ___.",
  answer: "attentive"
}, {
  scene: "ignore",
  sentence: "A host who walks past a sad fan without stopping is ___.",
  answer: "uncaring"
}, {
  scene: "draw",
  sentence: "Mei Mei made a lovely drawing of the host. She is very ___.",
  answer: "creative"
}];
const P3_WORDS = ["calm", "hard-working", "good-looking", "attentive", "uncaring", "creative"];
const EMOTIONS = ["happy", "sad", "nervous", "afraid", "angry", "excited"];
const EMO_ICON = {
  happy: "😄",
  sad: "😢",
  nervous: "😬",
  afraid: "😱",
  angry: "😠",
  excited: "🤩"
};

/* ================= JOB CHARACTERS ================= */
function JobChar({
  k,
  size = 110
}) {
  const skin = "#f6c89f";
  const S = {
    stroke: "#111",
    strokeWidth: 3,
    strokeLinejoin: "round"
  };
  const body = {
    lawyer: "#33384a",
    doctor: "#ffffff",
    vet: "#2fb67a",
    astronaut: "#f1f3f6",
    actress: "#ff4d8d",
    designer: "#8a4fd6",
    pilot: "#1f3b8a"
  }[k];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 130",
    width: size,
    height: size * 1.3,
    style: {
      display: "block",
      pointerEvents: "none"
    }
  }, k === "actress" && /*#__PURE__*/React.createElement("path", _extends({
    d: "M26 40 Q22 90 34 100 L66 100 Q78 90 74 40 Q50 6 26 40Z",
    fill: "#e7b100"
  }, S)), k === "actress" ? /*#__PURE__*/React.createElement("path", _extends({
    d: "M30 128 L38 62 L62 62 L72 128 Z",
    fill: body
  }, S)) : /*#__PURE__*/React.createElement("path", _extends({
    d: "M22 128 L26 70 Q50 56 74 70 L78 128 Z",
    fill: body
  }, S)), /*#__PURE__*/React.createElement("rect", _extends({
    x: "44",
    y: "50",
    width: "12",
    height: "14",
    fill: skin
  }, S)), k === "astronaut" && /*#__PURE__*/React.createElement("circle", _extends({
    cx: "50",
    cy: "36",
    r: "28",
    fill: "#dfe4ea"
  }, S)), /*#__PURE__*/React.createElement("circle", _extends({
    cx: "50",
    cy: "36",
    r: k === "astronaut" ? 21 : 18,
    fill: k === "astronaut" ? "#6fc3ff" : skin
  }, S)), k === "astronaut" && /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "36",
    r: "15",
    fill: skin,
    stroke: "#111",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "44",
    cy: "35",
    r: "2.4",
    fill: "#111"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "56",
    cy: "35",
    r: "2.4",
    fill: "#111"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M43 43 Q50 49 57 43",
    stroke: "#111",
    strokeWidth: "2.5",
    fill: "none",
    strokeLinecap: "round"
  }), k === "lawyer" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", _extends({
    d: "M32 30 Q50 8 68 30 Q50 20 32 30Z",
    fill: "#3b2a1e"
  }, S)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M44 64 L56 64 L53 100 L50 106 L47 100Z",
    fill: "#d7262e"
  }, S)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M44 64 L50 74 L56 64",
    fill: "#fff"
  }, S)), /*#__PURE__*/React.createElement("rect", _extends({
    x: "64",
    y: "100",
    width: "28",
    height: "22",
    rx: "3",
    fill: "#8a5a2b"
  }, S)), /*#__PURE__*/React.createElement("path", {
    d: "M72 100 V95 H84 V100",
    fill: "none",
    stroke: "#111",
    strokeWidth: "3"
  })), k === "doctor" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", _extends({
    d: "M32 30 Q50 8 68 30 Q50 20 32 30Z",
    fill: "#222"
  }, S)), /*#__PURE__*/React.createElement("circle", _extends({
    cx: "58",
    cy: "18",
    r: "6",
    fill: "#cfd6de"
  }, S)), /*#__PURE__*/React.createElement("rect", {
    x: "30",
    y: "20",
    width: "40",
    height: "5",
    fill: "#cfd6de",
    stroke: "#111",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M38 66 Q38 98 50 98 Q62 98 62 66",
    fill: "none",
    stroke: "#111",
    strokeWidth: "3.5"
  }), /*#__PURE__*/React.createElement("circle", _extends({
    cx: "50",
    cy: "100",
    r: "5",
    fill: "#9aa6b2"
  }, S)), /*#__PURE__*/React.createElement("rect", {
    x: "64",
    y: "84",
    width: "10",
    height: "14",
    fill: "#d7262e",
    stroke: "#111",
    strokeWidth: "2"
  })), k === "vet" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", _extends({
    d: "M32 30 Q50 8 68 30 Q50 20 32 30Z",
    fill: "#7a4521"
  }, S)), /*#__PURE__*/React.createElement("ellipse", _extends({
    cx: "68",
    cy: "100",
    rx: "17",
    ry: "12",
    fill: "#ff9b3d"
  }, S)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M56 92 L58 80 L66 88 M72 88 L80 80 L82 92",
    fill: "#ff9b3d"
  }, S)), /*#__PURE__*/React.createElement("circle", _extends({
    cx: "68",
    cy: "94",
    r: "10",
    fill: "#ff9b3d"
  }, S)), /*#__PURE__*/React.createElement("circle", {
    cx: "64",
    cy: "93",
    r: "1.8",
    fill: "#111"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "72",
    cy: "93",
    r: "1.8",
    fill: "#111"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M66 98 Q68 100 70 98",
    stroke: "#111",
    strokeWidth: "1.5",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M51 98 Q40 104 38 116",
    stroke: "#ff9b3d",
    strokeWidth: "6",
    fill: "none"
  })), k === "astronaut" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", _extends({
    x: "36",
    y: "86",
    width: "28",
    height: "18",
    rx: "4",
    fill: "#d7262e"
  }, S)), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "95",
    r: "4",
    fill: "#2fd3ff",
    stroke: "#111",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "68",
    y: "76",
    width: "14",
    height: "10",
    fill: "#2453c7",
    stroke: "#111",
    strokeWidth: "2"
  })), k === "actress" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", _extends({
    d: "M30 34 Q50 4 70 34 Q56 20 30 34Z",
    fill: "#e7b100"
  }, S)), /*#__PURE__*/React.createElement("polygon", _extends({
    points: "50,76 54,86 64,86 56,92 59,102 50,96 41,102 44,92 36,86 46,86",
    fill: "#ffd400"
  }, S)), /*#__PURE__*/React.createElement("circle", {
    cx: "38",
    cy: "42",
    r: "3.5",
    fill: "#ff8fa8",
    opacity: ".8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "62",
    cy: "42",
    r: "3.5",
    fill: "#ff8fa8",
    opacity: ".8"
  })), k === "designer" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", _extends({
    d: "M30 32 Q50 6 70 32 Q50 18 30 32Z",
    fill: "#111"
  }, S)), /*#__PURE__*/React.createElement("path", {
    d: "M36 62 Q34 96 40 100 M64 62 Q66 96 60 100",
    fill: "none",
    stroke: "#ffd400",
    strokeWidth: "6",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M36 62 Q34 96 40 100 M64 62 Q66 96 60 100",
    fill: "none",
    stroke: "#111",
    strokeWidth: "1.5",
    strokeDasharray: "3 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M70 86 L88 108 M88 86 L70 108",
    stroke: "#cfd6de",
    strokeWidth: "4",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "68",
    cy: "112",
    r: "4",
    fill: "none",
    stroke: "#111",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "90",
    cy: "112",
    r: "4",
    fill: "none",
    stroke: "#111",
    strokeWidth: "3"
  })), k === "pilot" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", _extends({
    d: "M30 28 Q50 4 70 28 Z",
    fill: "#14285f"
  }, S)), /*#__PURE__*/React.createElement("rect", _extends({
    x: "28",
    y: "26",
    width: "44",
    height: "7",
    rx: "2",
    fill: "#14285f"
  }, S)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M44 20 L50 12 L56 20 L50 24Z",
    fill: "#ffd400"
  }, S)), /*#__PURE__*/React.createElement("path", {
    d: "M30 80 L40 74 M70 80 L60 74",
    stroke: "#ffd400",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("path", _extends({
    d: "M44 64 L56 64 L53 90 L47 90Z",
    fill: "#fff"
  }, S)), /*#__PURE__*/React.createElement("path", _extends({
    d: "M26 82 L10 90 L26 94Z M74 82 L90 90 L74 94Z",
    fill: "#ffd400"
  }, S))));
}

/* ================= PART 1 ================= */
function Part1({
  addScore,
  fx,
  sfx,
  onDone
}) {
  const [qs] = useState(() => shuffle(P1_POOL).slice(0, 3));
  const [i, setI] = useState(0);
  const [drag, setDrag] = useState(null);
  const [msg, setMsg] = useState(null);
  const [locked, setLocked] = useState(false);
  const noseRef = useRef(null);
  const start = useRef(null);
  const timer = useRef(null);
  const q = qs[i];
  useEffect(() => () => clearTimeout(timer.current), []);
  const down = (e, k) => {
    if (locked) return;
    e.preventDefault();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (er) {}
    start.current = {
      x: e.clientX,
      y: e.clientY
    };
    setDrag({
      k,
      dx: 0,
      dy: 0
    });
  };
  const move = e => {
    if (!start.current) return;
    setDrag(d => d && {
      ...d,
      dx: e.clientX - start.current.x,
      dy: e.clientY - start.current.y
    });
  };
  const up = e => {
    if (!start.current || !drag) {
      start.current = null;
      return;
    }
    const k = drag.k;
    start.current = null;
    setDrag(null);
    const r = noseRef.current.getBoundingClientRect(),
      m = 12;
    const hit = e.clientX > r.left - m && e.clientX < r.right + m && e.clientY > r.top - m && e.clientY < r.bottom + m;
    if (!hit) return;
    if (k === q.answer) {
      setLocked(true);
      addScore("p1", 1);
      sfx("good");
      fx("GREAT!");
      setMsg({
        ok: true,
        t: "✅ Yes! The " + JOBS.find(j => j.k === k).label + " is perfect for the interview!"
      });
      timer.current = setTimeout(() => {
        setMsg(null);
        setLocked(false);
        if (i < qs.length - 1) setI(i + 1);else onDone();
      }, 1500);
    } else {
      sfx("bad");
      fx("OOPS!", true);
      setMsg({
        ok: false,
        t: "❌ Hmm, a " + JOBS.find(j => j.k === k).label + " isn't right. Try again!"
      });
    }
  };
  const shock = !!drag;
  return /*#__PURE__*/React.createElement("div", {
    className: "grid2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hostcol"
  }, /*#__PURE__*/React.createElement("div", {
    ref: noseRef,
    style: {
      width: "100%",
      maxWidth: 300,
      outline: drag ? "4px dashed #d7262e" : "none",
      outlineOffset: 4,
      borderRadius: 16
    }
  }, /*#__PURE__*/React.createElement(MrLongnose, {
    className: "host",
    mood: shock ? "shock" : "happy",
    talking: !shock && !msg
  })), /*#__PURE__*/React.createElement("div", {
    className: "bubble"
  }, q.prompt)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "banner"
  }, "Part 1 \xB7 Job Interview", /*#__PURE__*/React.createElement("small", null, "Drag the right person onto Mr. Longnose")), /*#__PURE__*/React.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: i / qs.length * 100 + "%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "ink card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qnum"
  }, "Question ", i + 1, " / ", qs.length), /*#__PURE__*/React.createElement("div", {
    className: "qtext"
  }, "Who should Mr. Longnose interview?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill,minmax(110px,1fr))",
      gap: 12
    }
  }, JOBS.map(j => {
    const isD = drag && drag.k === j.k;
    return /*#__PURE__*/React.createElement("div", {
      key: j.k,
      onPointerDown: e => down(e, j.k),
      onPointerMove: move,
      onPointerUp: up,
      onPointerCancel: () => {
        start.current = null;
        setDrag(null);
      },
      style: {
        touchAction: "none",
        userSelect: "none",
        WebkitUserSelect: "none",
        cursor: "grab",
        textAlign: "center",
        background: "#fff",
        border: "4px solid #111",
        borderRadius: 14,
        padding: "8px 4px",
        boxShadow: isD ? "10px 12px 0 rgba(0,0,0,.5)" : "4px 4px 0 #111",
        position: "relative",
        zIndex: isD ? 30 : 1,
        transform: isD ? `translate(${drag.dx}px,${drag.dy}px) scale(1.12) rotate(-3deg)` : "none",
        transition: isD ? "none" : "transform .2s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(JobChar, {
      k: j.k,
      size: 84
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 900,
        fontSize: 14
      }
    }, j.label));
  })), msg && /*#__PURE__*/React.createElement("div", {
    className: "explain",
    style: {
      background: msg.ok ? "#d9ffe2" : "#ffe0e0"
    }
  }, msg.t))));
}

/* ================= PART 2 ================= */
function Part2({
  addScore,
  fx,
  sfx,
  onDone
}) {
  const [qs] = useState(() => shuffle(P2_POOL).slice(0, 3));
  const [i, setI] = useState(0);
  const [e, setE] = useState(0);
  const [res, setRes] = useState(null);
  const sw = useRef(null);
  const q = qs[i];
  const emo = EMOTIONS[e];
  const go = d => {
    if (res) return;
    setE(x => (x + d + EMOTIONS.length) % EMOTIONS.length);
    sfx("click");
  };
  const mood = {
    happy: "happy",
    sad: "sad",
    nervous: "shock",
    afraid: "shock",
    angry: "happy",
    excited: "happy"
  }[emo];
  const filt = emo === "angry" ? "saturate(1.8) hue-rotate(-25deg) brightness(.95)" : emo === "afraid" ? "grayscale(.35) brightness(1.05)" : "none";
  const deco = {
    happy: "🌟",
    sad: "💧",
    nervous: "💦",
    afraid: "😨 !!",
    angry: "💢",
    excited: "✨✨"
  }[emo];
  const down = ev => {
    if (res) return;
    try {
      ev.currentTarget.setPointerCapture(ev.pointerId);
    } catch (er) {}
    sw.current = ev.clientX;
  };
  const upSw = ev => {
    if (sw.current === null) return;
    const dx = ev.clientX - sw.current;
    sw.current = null;
    if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
  };
  const confirm = () => {
    if (res) return;
    const ok = emo === q.answer;
    setRes({
      ok
    });
    if (ok) {
      addScore("p2", 1);
      sfx("good");
      fx("YES!");
    } else {
      sfx("bad");
      fx("OOPS!", true);
    }
  };
  const next = () => {
    sfx("click");
    if (i < qs.length - 1) {
      setI(i + 1);
      setRes(null);
      setE(0);
    } else onDone();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "grid2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hostcol"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bubble"
  }, q.prompt)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "banner"
  }, "Part 2 \xB7 Feelings", /*#__PURE__*/React.createElement("small", null, "Swipe \u25C0 \u25B6 to change his face")), /*#__PURE__*/React.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: (i + (res ? 1 : 0)) / qs.length * 100 + "%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "ink card",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "qnum"
  }, "Question ", i + 1, " / ", qs.length), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn big",
    onClick: () => go(-1),
    disabled: !!res,
    "aria-label": "Previous feeling"
  }, "\u25C0"), /*#__PURE__*/React.createElement("div", {
    onPointerDown: down,
    onPointerUp: upSw,
    onPointerCancel: () => {
      sw.current = null;
    },
    style: {
      touchAction: "none",
      userSelect: "none",
      WebkitUserSelect: "none",
      position: "relative",
      width: "min(300px,60vw)",
      cursor: "grab",
      filter: filt
    }
  }, /*#__PURE__*/React.createElement(MrLongnose, {
    key: emo,
    mood: mood,
    talking: emo === "excited",
    className: emo === "nervous" || emo === "afraid" ? "twitchy" : emo === "excited" ? "floaty" : "",
    style: {
      width: "100%",
      height: "auto",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 6,
      fontSize: 38,
      fontWeight: 900
    }
  }, deco)), /*#__PURE__*/React.createElement("button", {
    className: "btn big",
    onClick: () => go(1),
    disabled: !!res,
    "aria-label": "Next feeling"
  }, "\u25B6")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 900,
      margin: "8px 0",
      color: "#d7262e",
      textTransform: "uppercase"
    }
  }, EMO_ICON[emo], " ", emo), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "center",
      gap: 6
    }
  }, EMOTIONS.map((x, k) => /*#__PURE__*/React.createElement("span", {
    key: x,
    style: {
      width: 14,
      height: 14,
      borderRadius: "50%",
      border: "3px solid #111",
      background: k === e ? "#d7262e" : "#fff"
    }
  }))), res && /*#__PURE__*/React.createElement("div", {
    className: "explain",
    style: {
      textAlign: "left",
      background: res.ok ? "#d9ffe2" : "#ffe0e0"
    }
  }, res.ok ? "✅ Correct! He feels " + q.answer + "." : "❌ Not quite. He feels " + q.answer + " " + EMO_ICON[q.answer]), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: 14,
      justifyContent: "center"
    }
  }, !res ? /*#__PURE__*/React.createElement("button", {
    className: "btn yellow big",
    onClick: confirm
  }, "Confirm Feeling \u2714") : /*#__PURE__*/React.createElement("button", {
    className: "btn green big",
    onClick: next
  }, i < qs.length - 1 ? "Next ▶" : "On to Part 3 ▶")))));
}

/* ================= PART 3 ================= */
function Part3Scene({
  kind
}) {
  const bg = {
    smoke: "#2b2b4a",
    practice: "#cfe7ff",
    suit: "#6a2bb8",
    listen: "#ffb3d1",
    ignore: "#bfc8d2",
    draw: "#fff4b0"
  }[kind];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 480 300",
    className: "scene",
    role: "img",
    "aria-label": "Comic panel: " + kind
  }, /*#__PURE__*/React.createElement("rect", {
    width: "480",
    height: "300",
    fill: bg
  }), kind === "smoke" && /*#__PURE__*/React.createElement("g", null, [[380, 120, 30], [340, 80, 26], [410, 60, 22], [300, 50, 18]].map(([a, b, r], i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: a,
    cy: b,
    r: r,
    fill: "#9aa0a6",
    stroke: "#111",
    strokeWidth: "3"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M400 250 Q410 200 420 235 Q430 190 440 250Z",
    fill: "#ff8a00",
    stroke: "#111",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement(MrLongnose, {
    x: 60,
    y: 30,
    width: 230,
    height: 260
  }), /*#__PURE__*/React.createElement(Burst, {
    x: 330,
    y: 200,
    r: 50,
    text: "SNIFF!",
    fs: 20
  })), kind === "practice" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "250",
    width: "480",
    height: "50",
    fill: "#8a4a1f",
    stroke: "#111",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "320",
    y: "60",
    width: "130",
    height: "150",
    fill: "#fff",
    stroke: "#111",
    strokeWidth: "4"
  }), [90, 115, 140, 165, 190].map(y => /*#__PURE__*/React.createElement("line", {
    key: y,
    x1: "335",
    y1: y,
    x2: "435",
    y2: y,
    stroke: "#999",
    strokeWidth: "4"
  })), /*#__PURE__*/React.createElement("text", {
    x: "385",
    y: "82",
    textAnchor: "middle",
    fontWeight: "900",
    fontSize: "18"
  }, "SCRIPT"), /*#__PURE__*/React.createElement(MrLongnose, {
    x: 60,
    y: 30,
    width: 230,
    height: 260,
    talking: true
  }), /*#__PURE__*/React.createElement(Burst, {
    x: 330,
    y: 230,
    r: 42,
    text: "AGAIN!",
    fs: 16,
    fill: "#2fd3ff",
    tc: "#fff"
  })), kind === "suit" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
    points: "120,0 160,0 300,250 200,250",
    fill: "#ffe97a",
    opacity: ".45"
  }), /*#__PURE__*/React.createElement(MrLongnose, {
    x: 110,
    y: 20,
    width: 240,
    height: 270
  }), /*#__PURE__*/React.createElement(Burst, {
    x: 90,
    y: 70,
    r: 46,
    text: "SHINY!",
    fs: 17
  }), /*#__PURE__*/React.createElement(Burst, {
    x: 400,
    y: 90,
    r: 40,
    text: "WOW!",
    fs: 20,
    fill: "#ff4d4d",
    tc: "#ffd400",
    rot: 10
  })), kind === "listen" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement(MrLongnose, {
    x: 20,
    y: 30,
    width: 230,
    height: 260
  }), /*#__PURE__*/React.createElement(MeiMei, {
    x: 340,
    y: 110,
    s: 1.2
  }), /*#__PURE__*/React.createElement("path", {
    d: "M300 70 Q310 50 330 60",
    stroke: "#111",
    strokeWidth: "4",
    fill: "none"
  }), /*#__PURE__*/React.createElement("text", {
    x: "270",
    y: "70",
    fontSize: "30"
  }, "\uD83D\uDC42")), kind === "ignore" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement(MrLongnose, {
    x: 150,
    y: 30,
    width: 230,
    height: 260,
    mood: "sad"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(60 150) scale(.9)"
  }, /*#__PURE__*/React.createElement(MeiMei, null)), /*#__PURE__*/React.createElement("text", {
    x: "40",
    y: "120",
    fontSize: "34"
  }, "\uD83D\uDE22"), /*#__PURE__*/React.createElement(Burst, {
    x: 400,
    y: 70,
    r: 42,
    text: "HMPH!",
    fs: 18,
    fill: "#ff4d4d",
    tc: "#fff",
    rot: 10
  })), kind === "draw" && /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("polygon", {
    points: "260,260 320,80 360,260",
    fill: "none",
    stroke: "#7a4521",
    strokeWidth: "8"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "270",
    y: "60",
    width: "130",
    height: "110",
    fill: "#fff",
    stroke: "#111",
    strokeWidth: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "320",
    cy: "108",
    r: "22",
    fill: "#f6c89f",
    stroke: "#111",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M334 106 L388 110",
    stroke: "#111",
    strokeWidth: "8",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M334 106 L388 110",
    stroke: "#f6c89f",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(110 130) scale(.8)"
  }, /*#__PURE__*/React.createElement(MeiMei, null)), /*#__PURE__*/React.createElement(Burst, {
    x: 110,
    y: 60,
    r: 42,
    text: "ART!",
    fs: 20,
    fill: "#ff8fc7"
  })));
}
function Part3({
  addScore,
  fx,
  sfx,
  onDone
}) {
  const [qs] = useState(() => shuffle(P3_POOL).slice(0, 2));
  const [i, setI] = useState(0);
  const [pick, setPick] = useState(null);
  const q = qs[i];
  const parts = q.sentence.split("___");
  const choose = w => {
    if (pick) return;
    setPick(w);
    if (w === q.answer) {
      addScore("p3", 1);
      sfx("good");
      fx("NICE!");
    } else {
      sfx("bad");
      fx("OOPS!", true);
    }
  };
  const next = () => {
    sfx("click");
    if (i < qs.length - 1) {
      setI(i + 1);
      setPick(null);
    } else onDone();
  };
  const ok = pick === q.answer;
  return /*#__PURE__*/React.createElement(PartLayout, {
    mood: pick && !ok ? "sad" : "happy",
    talking: !pick,
    say: !pick ? "Look at the picture, then fill in the blank!" : ok ? "Brilliant! The perfect word!" : "Close! Check the right word below."
  }, /*#__PURE__*/React.createElement("div", {
    className: "banner"
  }, "Part 3 \xB7 Describe the Scene", /*#__PURE__*/React.createElement("small", null, "Pick the best word for the blank")), /*#__PURE__*/React.createElement("div", {
    className: "progress"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: (i + (pick ? 1 : 0)) / qs.length * 100 + "%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "ink card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qnum"
  }, "Panel ", i + 1, " / ", qs.length), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
      gap: 16,
      alignItems: "start",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Part3Scene, {
    kind: q.scene,
    key: i
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "qtext",
    style: {
      fontSize: 24
    }
  }, parts[0], /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      minWidth: 120,
      borderBottom: "4px solid #111",
      textAlign: "center",
      color: pick ? ok ? "#18a33f" : "#d7262e" : "#999"
    }
  }, pick || "\u00a0"), parts[1]), /*#__PURE__*/React.createElement("div", {
    className: "opts"
  }, P3_WORDS.map(w => {
    let cls = "btn";
    if (pick && w === q.answer) cls += " green";else if (pick && w === pick) cls += " red";
    return /*#__PURE__*/React.createElement("button", {
      key: w,
      className: cls,
      onClick: () => choose(w),
      disabled: !!pick && w !== q.answer && w !== pick
    }, w);
  })))), pick && /*#__PURE__*/React.createElement("div", {
    className: "explain",
    style: {
      background: ok ? "#d9ffe2" : "#ffe0e0"
    }
  }, ok ? "✅ Correct!" : "❌ The best word is “" + q.answer + "”."), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "spacer"
  }), pick && /*#__PURE__*/React.createElement("button", {
    className: "btn yellow big",
    onClick: next
  }, i < qs.length - 1 ? "Next ▶" : "On to Part 4 ▶"))));
}
function Part4({
  flags,
  setFlags,
  sfx,
  fx,
  onDone
}) {
  const [tab, setTab] = useState("draw");
  const [text, setText] = useState("");
  const padRef = useRef(null);
  const photoRef = useRef(null);
  useEffect(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const used = WORDS.filter(w => new RegExp("\\b" + w + "\\b", "i").test(text)).length;
    const w1 = words >= 30,
      w2 = used >= 2;
    if (w1 !== flags.w1 || w2 !== flags.w2) {
      if (w1 && !flags.w1 || w2 && !flags.w2) {
        fx("SUPER!");
        sfx("good");
      }
      setFlags(f => ({
        ...f,
        w1,
        w2
      }));
    }
  }, [text]);
  const drawProgress = n => {
    if (n >= 3 && !flags.draw) {
      setFlags(f => ({
        ...f,
        draw: true
      }));
      fx("ARTIST!");
      sfx("good");
    }
  };
  const selfieDone = () => {
    if (!flags.selfie) {
      setFlags(f => ({
        ...f,
        selfie: true
      }));
      fx("CLICK!");
      sfx("good");
    }
  };
  const finish = async () => {
    let drawing = null,
      photo = null;
    try {
      if (flags.draw && padRef.current) drawing = padRef.current.toDataURL("image/png");
    } catch (e) {}
    try {
      if (photoRef.current) photo = await photoRef.current();
    } catch (e) {}
    onDone({
      drawing,
      panel: drawing,
      photo,
      letter: text
    });
  };
  const pts = (flags.draw ? 2 : 0) + (flags.selfie ? 2 : 0) + (flags.w1 ? 1 : 0) + (flags.w2 ? 1 : 0);
  const sayMap = {
    draw: "Draw a comic panel of your favourite part of my story. Add a sound-effect stamp!",
    selfie: "Take a selfie and give yourself a nose just like mine! Drag it into place.",
    write: "Write me a letter! I love reading letters from my fans."
  };
  return /*#__PURE__*/React.createElement(PartLayout, {
    talking: true,
    say: sayMap[tab]
  }, /*#__PURE__*/React.createElement("div", {
    className: "banner"
  }, "Part 4 \xB7 Creative Studio", /*#__PURE__*/React.createElement("small", null, "Earn up to ", MAX.p4, " points \xB7 You have ", pts)), /*#__PURE__*/React.createElement("div", {
    className: "tabs"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn" + (tab === "draw" ? " on" : ""),
    onClick: () => {
      setTab("draw");
      sfx("click");
    }
  }, "\uD83C\uDFA8 Draw ", flags.draw ? "✅" : "(2)"), /*#__PURE__*/React.createElement("button", {
    className: "btn" + (tab === "selfie" ? " on" : ""),
    onClick: () => {
      setTab("selfie");
      sfx("click");
    }
  }, "\uD83E\uDD33 Nose Selfie ", flags.selfie ? "✅" : "(2)"), /*#__PURE__*/React.createElement("button", {
    className: "btn" + (tab === "write" ? " on" : ""),
    onClick: () => {
      setTab("write");
      sfx("click");
    }
  }, "\u270D\uFE0F Write ", (flags.w1 ? 1 : 0) + (flags.w2 ? 1 : 0), "/2")), /*#__PURE__*/React.createElement("div", {
    className: "ink card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: tab === "draw" ? "block" : "none"
    }
  }, /*#__PURE__*/React.createElement(DrawPad, {
    onProgress: drawProgress,
    padRef: padRef
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: tab === "selfie" ? "block" : "none"
    }
  }, /*#__PURE__*/React.createElement(SelfieBooth, {
    onDone: selfieDone,
    photoRef: photoRef
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: tab === "write" ? "block" : "none"
    }
  }, /*#__PURE__*/React.createElement(WriteBox, {
    text: text,
    setText: setText
  })), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, "You can switch tabs anytime \u2014 your work is kept."), /*#__PURE__*/React.createElement("span", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn green big",
    onClick: finish
  }, "\uD83C\uDFC6 Finish & See Results"))));
}

/* ================= RESULTS ================= */
function Results({
  name,
  number,
  klass,
  scores,
  extras,
  onRestart,
  openStory
}) {
  const total = scores.p1 + scores.p2 + scores.p3 + scores.p4;
  const max = MAX.p1 + MAX.p2 + MAX.p3 + MAX.p4;
  const pct = total / max;
  const stars = pct >= 0.85 ? 3 : pct >= 0.6 ? 2 : 1;
  const title = stars === 3 ? "SUPERSTAR READER!" : stars === 2 ? "GREAT READER!" : "RISING STAR!";
  useEffect(() => {
    beep("win");
  }, []);
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const [submit, setSubmit] = useState("idle");
  const clean = s => (s || "").replace(/[\/:*?"<>|]/g, "").trim();
  const fname = () => `${clean(name) || "Student"}_${clean(number) || "0"}_${clean(klass) || "NA"}_P6 Quiz1.pdf`;
  const makePdf = download => {
    try {
      const {
        jsPDF
      } = window.jspdf;
      const doc = new jsPDF({
        unit: "mm",
        format: "a4"
      });
      const now = new Date().toLocaleString("en-GB");
      doc.setFontSize(20);
      doc.text("Mr. Longnose – P6 Quiz 1", 15, 20);
      doc.setFontSize(12);
      doc.text(`Name: ${name}   Number: ${number}   Class: ${klass}`, 15, 32);
      doc.text(`Date: ${now}`, 15, 39);
      doc.text(`Auto score: ${scores.p1 + scores.p2 + scores.p3} / 8  (+1 teacher mark for face = out of 10)`, 15, 46);
      let y = 58;
      doc.setFontSize(11);
      doc.text("Breakdown:", 15, y);
      y += 6;
      doc.text(`Part 1 (jobs): ${scores.p1} / 3`, 15, y);
      y += 6;
      doc.text(`Part 2 (feelings): ${scores.p2} / 3`, 15, y);
      y += 6;
      doc.text(`Part 3 (describe): ${scores.p3} / 2`, 15, y);
      y += 6;
      doc.text(`Part 4 feeling: ${scores.p4} / 1   Face: PENDING TEACHER CHECK (+1)`, 15, y);
      y += 6;
      if (extras.feel) {
        doc.text(`Feeling word: ${extras.feel}`, 15, y);
        y += 6;
      }
      const shot = extras.panel || extras.photo;
      if (shot) {
        try {
          doc.addImage(shot, "JPEG", 15, y + 2, 80, 60);
        } catch (e) {}
      }
      if (download) doc.save(fname());
      return doc;
    } catch (e) {
      console.warn(e);
      return null;
    }
  };
  const doSubmit = async () => {
    setSubmit("busy");
    try {
      const doc = makePdf(false);
      if (!doc) throw new Error("pdf");
      const b64 = doc.output("datauristring").split(",")[1];
      const res = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify({
          filename: fname(),
          pdfBase64: b64
        })
      });
      if (!res.ok) throw new Error("http");
      setSubmit("done");
    } catch (e) {
      makePdf(true);
      setSubmit("fail");
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MrLongnose, {
    className: "host floaty",
    talking: true,
    style: {
      width: "100%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bubble",
    style: {
      marginTop: 10
    }
  }, "\"", stars === 3 ? "WOW! My nose knew you could do it!" : "Well done! Remember — our differences make us special!", "\"")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cert"
  }, /*#__PURE__*/React.createElement("div", {
    className: "halftone-tag"
  }, "CERTIFICATE OF AWESOME"), /*#__PURE__*/React.createElement("h1", {
    className: "title-big",
    style: {
      fontSize: 46,
      margin: "12px 0"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22
    }
  }, "This is to certify that"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 38,
      fontWeight: 900,
      borderBottom: "4px solid #111",
      display: "inline-block",
      padding: "0 20px",
      margin: "6px 0"
    }
  }, name.trim() || "Super Reader"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20
    }
  }, "completed the ", /*#__PURE__*/React.createElement("b", null, "Mr. Longnose"), " Comic Quiz"), /*#__PURE__*/React.createElement("div", {
    className: "stars"
  }, "⭐".repeat(stars), "☆".repeat(3 - stars)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 900
    }
  }, total, " / ", max, " points"), /*#__PURE__*/React.createElement("table", {
    className: "break"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\uD83C\uDFA4 Part 1 \xB7 Job Interview"), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("b", null, scores.p1, " / ", MAX.p1))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\uD83E\uDDE9 Part 2 \xB7 Feelings"), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("b", null, scores.p2, " / ", MAX.p2))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\uD83D\uDC49 Part 3 \xB7 Describe the Scene"), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("b", null, scores.p3, " / ", MAX.p3))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "\uD83C\uDFA8 Part 4 \xB7 Creative Studio"), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("b", null, scores.p4, " / ", MAX.p4))))), (extras.drawing || extras.photo) && /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "center",
      marginTop: 14
    }
  }, extras.drawing && /*#__PURE__*/React.createElement("img", {
    src: extras.drawing,
    alt: "My drawing",
    style: {
      width: 200,
      border: "4px solid #111",
      borderRadius: 10
    }
  }), extras.photo && /*#__PURE__*/React.createElement("img", {
    src: extras.photo,
    alt: "My nose selfie",
    style: {
      width: 200,
      border: "4px solid #111",
      borderRadius: 10
    }
  })), extras.letter && extras.letter.trim() && /*#__PURE__*/React.createElement("div", {
    className: "explain",
    style: {
      textAlign: "left",
      whiteSpace: "pre-wrap"
    }
  }, extras.letter), /*#__PURE__*/React.createElement("p", {
    className: "muted"
  }, today)), /*#__PURE__*/React.createElement("div", {
    className: "ink card",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 20,
      marginBottom: 8
    }
  }, "\uD83D\uDCE4 Send to Teacher"), submit === "idle" && /*#__PURE__*/React.createElement("button", {
    className: "btn green big",
    onClick: doSubmit
  }, "\uD83D\uDCE8 Submit to Teacher's Drive"), submit === "busy" && /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "spin"
  }), " ", /*#__PURE__*/React.createElement("b", null, "Sending\u2026")), submit === "done" && /*#__PURE__*/React.createElement("div", {
    className: "explain",
    style: {
      background: "#d9ffe2"
    }
  }, "\u2705 Submitted to Teacher's Google Drive!"), submit === "fail" && /*#__PURE__*/React.createElement("div", {
    className: "explain",
    style: {
      background: "#ffe0e0"
    }
  }, "\u26A0\uFE0F Upload failed (Wi-Fi?). PDF downloaded instead \u2014 tap Retry."), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: 8
    }
  }, submit !== "busy" && /*#__PURE__*/React.createElement("button", {
    className: "btn yellow",
    onClick: () => makePdf(true)
  }, "\uD83D\uDCBE Download PDF"), submit === "fail" && /*#__PURE__*/React.createElement("button", {
    className: "btn green",
    onClick: doSubmit
  }, "\uD83D\uDD01 Retry Upload"))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn blue",
    onClick: openStory
  }, "\uD83D\uDCD6 Read Story Again"), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => window.print()
  }, "\uD83D\uDDA8 Print"), extras.photo && /*#__PURE__*/React.createElement("button", {
    className: "btn pink",
    onClick: () => downloadURL(extras.photo, "my-longnose-selfie.jpg")
  }, "\uD83D\uDCBE Selfie"), /*#__PURE__*/React.createElement("span", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn yellow big",
    onClick: onRestart
  }, "\uD83D\uDD01 Play Again"))));
}

/* ================= APP ================= */
const EMPTY_SCORES = {
  p1: 0,
  p2: 0,
  p3: 0,
  p4: 0
};
const EMPTY_FLAGS = {
  draw: false,
  selfie: false,
  w1: false,
  w2: false
};
function App() {
  const [stage, setStage] = useState(0);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [klass, setKlass] = useState("");
  const [scores, setScores] = useState(EMPTY_SCORES);
  const [flags, setFlags] = useState(EMPTY_FLAGS);
  const [storyOpen, setStoryOpen] = useState(false);
  const [storyPage, setStoryPage] = useState(0);
  const [pops, setPops] = useState([]);
  const [muted, setMuted] = useState(false);
  const [extras, setExtras] = useState({});
  const [runId, setRunId] = useState(0);
  const mutedRef = useRef(muted);
  mutedRef.current = muted;
  const sfx = useCallback(t => {
    if (!mutedRef.current) beep(t);
  }, []);
  const fx = useCallback((text, bad) => {
    const id = Date.now() + Math.random();
    setPops(p => [...p, {
      id,
      text,
      bad
    }]);
    setTimeout(() => setPops(p => p.filter(x => x.id !== id)), 1000);
  }, []);
  const addScore = useCallback((k, n) => setScores(s => ({
    ...s,
    [k]: s[k] + n
  })), []);
  useEffect(() => {
    const p4 = (flags.draw ? 2 : 0) + (flags.selfie ? 2 : 0) + (flags.w1 ? 1 : 0) + (flags.w2 ? 1 : 0);
    setScores(s => s.p4 === p4 ? s : {
      ...s,
      p4
    });
  }, [flags]);
  useEffect(() => {
    document.body.style.overflow = storyOpen ? "hidden" : "";
  }, [storyOpen]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [stage]);
  const openStory = () => {
    sfx("page");
    setStoryOpen(true);
  };
  const openStoryAt = p => {
    setStoryPage(p);
    sfx("page");
    setStoryOpen(true);
  };
  const goNext = () => {
    setStage(s => s + 1);
    fx(["", "PART 2!", "PART 3!", "PART 4!", "DONE!"][stage] || "GO!");
  };
  const restart = () => {
    setScores(EMPTY_SCORES);
    setFlags(EMPTY_FLAGS);
    setExtras({});
    setRunId(r => r + 1);
    setStage(0);
  };
  const total = scores.p1 + scores.p2 + scores.p3 + scores.p4;
  const partNames = ["Quiz", "Order", "True/False", "Create"];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 70 60",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 30 Q6 6 30 6 Q50 6 52 22 Q40 16 30 20 Q18 22 12 34 Z",
    fill: "#7a4521",
    stroke: "#111",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "34",
    r: "20",
    fill: "#f6c89f",
    stroke: "#111",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 30 Q6 6 30 6 Q50 6 52 22 Q40 16 30 20 Q18 22 12 34 Z",
    fill: "#7a4521",
    stroke: "#111",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "28",
    cy: "30",
    r: "3",
    fill: "#111"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "40",
    cy: "29",
    r: "3",
    fill: "#111"
  }), /*#__PURE__*/React.createElement("g", {
    className: "nose"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M36 34 L64 35 Q68 38 64 41 L36 41 Z",
    fill: "#f6c89f",
    stroke: "#111",
    strokeWidth: "3",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M34 46 Q40 50 46 46",
    stroke: "#111",
    strokeWidth: "3",
    fill: "none"
  })), /*#__PURE__*/React.createElement("span", null, "MR. LONGNOSE")), /*#__PURE__*/React.createElement("div", {
    className: "pills"
  }, partNames.map((p, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    className: "pill" + (stage === k + 1 ? " on" : stage > k + 1 ? " done" : "")
  }, stage > k + 1 ? "✔" : k + 1, " ", /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, p)))), stage === 0 && /*#__PURE__*/React.createElement("span", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("span", {
    className: "scorebox"
  }, "\u2B50 ", total), /*#__PURE__*/React.createElement("button", {
    className: "btn small",
    onClick: () => setMuted(m => !m),
    "aria-label": "Sound on/off"
  }, muted ? "🔇" : "🔊"), /*#__PURE__*/React.createElement("button", {
    className: "btn read",
    onClick: openStory
  }, "\uD83D\uDCD6 Read Story")), /*#__PURE__*/React.createElement("main", {
    key: runId
  }, stage === 0 && /*#__PURE__*/React.createElement(Start, {
    name: name,
    setName: setName,
    number: number,
    setNumber: setNumber,
    klass: klass,
    setKlass: setKlass,
    onStart: () => {
      sfx("good");
      setStage(1);
      fx("LET'S GO!");
    },
    openStory: openStory
  }), stage === 1 && /*#__PURE__*/React.createElement(Part1, {
    addScore: addScore,
    fx: fx,
    sfx: sfx,
    onDone: goNext,
    openStoryAt: openStoryAt
  }), stage === 2 && /*#__PURE__*/React.createElement(Part2, {
    addScore: addScore,
    fx: fx,
    sfx: sfx,
    onDone: goNext
  }), stage === 3 && /*#__PURE__*/React.createElement(Part3, {
    addScore: addScore,
    fx: fx,
    sfx: sfx,
    onDone: goNext
  }), stage === 4 && /*#__PURE__*/React.createElement(Part4, {
    flags: flags,
    setFlags: setFlags,
    fx: fx,
    sfx: sfx,
    onDone: ex => {
      setExtras(ex);
      setStage(5);
    }
  }), stage === 5 && /*#__PURE__*/React.createElement(Results, {
    name: name,
    number: number,
    klass: klass,
    scores: scores,
    extras: extras,
    onRestart: restart,
    openStory: openStory
  })), pops.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    className: "popfx" + (p.bad ? " bad" : "")
  }, p.text)), storyOpen && /*#__PURE__*/React.createElement(StoryModal, {
    page: storyPage,
    setPage: setStoryPage,
    onClose: () => {
      setStoryOpen(false);
      sfx("click");
    },
    sfx: sfx
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));