<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
<title>Neon Clicker X</title>
<style>
  :root{
    --bg1:#050816;
    --bg2:#0a1230;
    --bg3:#101b45;
    --card: rgba(12, 18, 42, .68);
    --card2: rgba(8, 14, 33, .82);
    --line: rgba(255,255,255,.10);
    --txt:#ecf4ff;
    --muted:#9fb0d0;
    --accent:#62f5ff;
    --accent2:#7c5cff;
    --good:#6dff9a;
    --warn:#ffd36d;
    --bad:#ff6d8e;
    --shadow: 0 20px 60px rgba(0,0,0,.45);
    --radius: 28px;
  }

  * { box-sizing: border-box; }
  html, body {
    width: 100%;
    min-height: 100%;
    margin: 0;
    color: var(--txt);
    background:
      radial-gradient(circle at 20% 20%, rgba(98,245,255,.16), transparent 22%),
      radial-gradient(circle at 80% 15%, rgba(124,92,255,.17), transparent 18%),
      radial-gradient(circle at 50% 85%, rgba(109,255,154,.12), transparent 24%),
      linear-gradient(160deg, var(--bg1), var(--bg2) 50%, var(--bg3));
    overflow-x: hidden;
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  }

  .bg-orb {
    position: fixed;
    inset: auto;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    filter: blur(18px);
    opacity: .32;
    pointer-events: none;
    animation: floaty 12s ease-in-out infinite;
  }
  .orb1 { left: -180px; top: -150px; background: radial-gradient(circle, rgba(98,245,255,.8), rgba(98,245,255,.08) 55%, transparent 70%); }
  .orb2 { right: -160px; top: 120px; background: radial-gradient(circle, rgba(124,92,255,.78), rgba(124,92,255,.08) 55%, transparent 70%); animation-delay: -4s; }
  .orb3 { left: 20%; bottom: -220px; background: radial-gradient(circle, rgba(109,255,154,.65), rgba(109,255,154,.08) 55%, transparent 70%); animation-delay: -7s; }

  @keyframes floaty {
    0%,100% { transform: translate3d(0,0,0) scale(1); }
    50% { transform: translate3d(0,-24px,0) scale(1.03); }
  }

  .wrap {
    width: min(1100px, calc(100% - 20px));
    margin: 0 auto;
    padding: 14px 0 24px;
    position: relative;
    z-index: 2;
  }

  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    margin-top: 6px;
    border: 1px solid var(--line);
    border-radius: 22px;
    background: linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.04));
    box-shadow: var(--shadow);
    backdrop-filter: blur(16px);
  }

  .brand {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .brand h1 {
    margin: 0;
    font-size: clamp(22px, 3vw, 34px);
    letter-spacing: .4px;
    text-shadow: 0 0 24px rgba(98,245,255,.25);
  }
  .brand small { color: var(--muted); font-size: 12px; }

  .status {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--muted);
    font-size: 13px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--good);
    box-shadow: 0 0 14px rgba(109,255,154,.9);
  }

  .grid {
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    gap: 14px;
    margin-top: 14px;
  }

  .card {
    position: relative;
    overflow: hidden;
    border: 1px solid var(--line);
    background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.04));
    box-shadow: var(--shadow);
    backdrop-filter: blur(16px);
    border-radius: var(--radius);
  }

  .hero {
    padding: 18px;
    min-height: 430px;
  }

  .heroTop {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 12px;
  }

  .statStack {
    display: grid;
    gap: 10px;
  }

  .statGrid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .stat {
    padding: 12px 14px;
    border-radius: 18px;
    background: rgba(0,0,0,.18);
    border: 1px solid rgba(255,255,255,.08);
  }
  .stat .label { color: var(--muted); font-size: 12px; }
  .stat .value { font-size: 22px; font-weight: 800; margin-top: 4px; }
  .stat .mini { color: var(--muted); font-size: 12px; margin-top: 2px; }

  .xpBox {
    margin-top: 10px;
    padding: 12px 14px;
    border-radius: 18px;
    background: rgba(0,0,0,.18);
    border: 1px solid rgba(255,255,255,.08);
  }
  .xpTop {
    display:flex;
    justify-content: space-between;
    font-size: 12px;
    color: var(--muted);
    margin-bottom: 8px;
  }
  .xpBar {
    height: 12px;
    width: 100%;
    background: rgba(255,255,255,.08);
    border-radius: 999px;
    overflow: hidden;
  }
  .xpFill {
    height: 100%;
    width: 0%;
    border-radius: inherit;
    background: linear-gradient(90deg, var(--accent), var(--accent2), var(--good));
    box-shadow: 0 0 22px rgba(98,245,255,.4);
    transition: width .22s ease;
  }

  .clickZone {
    margin-top: 18px;
    display: grid;
    place-items: center;
    gap: 14px;
    min-height: 250px;
    position: relative;
  }

  .ring {
    position: absolute;
    width: min(350px, 80vw);
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,.08);
    box-shadow:
      inset 0 0 36px rgba(98,245,255,.08),
      0 0 50px rgba(124,92,255,.08);
    animation: ringPulse 6s linear infinite;
  }
  @keyframes ringPulse {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.02); }
    100% { transform: rotate(360deg) scale(1); }
  }

  .coreBtn {
    width: min(220px, 58vw);
    aspect-ratio: 1;
    border: 0;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    position: relative;
    z-index: 2;
    background:
      radial-gradient(circle at 30% 25%, rgba(255,255,255,.9), rgba(255,255,255,.18) 11%, transparent 12%),
      radial-gradient(circle at 50% 50%, rgba(98,245,255,.98), rgba(98,245,255,.35) 30%, rgba(124,92,255,.9) 68%, rgba(9,14,29,1) 100%);
    box-shadow:
      0 0 0 12px rgba(98,245,255,.04),
      0 18px 40px rgba(0,0,0,.5),
      0 0 30px rgba(98,245,255,.35),
      inset 0 0 18px rgba(255,255,255,.22);
    transition: transform .07s ease, box-shadow .2s ease, filter .2s ease;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    overflow: hidden;
  }
  .coreBtn:active { transform: scale(.93); }
  .coreBtn .emoji {
    font-size: clamp(52px, 9vw, 72px);
    filter: drop-shadow(0 0 18px rgba(255,255,255,.15));
    animation: coinSpin 3.4s linear infinite;
    display: inline-block;
  }
  @keyframes coinSpin {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
  }

  .coreBtn::after {
    content: '';
    position: absolute;
    inset: -30%;
    background: radial-gradient(circle, rgba(255,255,255,.25), transparent 50%);
    transform: translateX(-60%) rotate(25deg);
    animation: shine 4.5s ease-in-out infinite;
  }
  @keyframes shine {
    0% { transform: translateX(-70%) rotate(25deg); opacity: 0; }
    25% { opacity: .7; }
    50% { transform: translateX(20%) rotate(25deg); opacity: 0; }
    100% { transform: translateX(20%) rotate(25deg); opacity: 0; }
  }

  .subline {
    color: var(--muted);
    font-size: 13px;
    text-align: center;
    line-height: 1.4;
  }

  .actions {
    margin-top: 12px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .btn {
    appearance: none;
    border: 0;
    cursor: pointer;
    color: white;
    font-weight: 700;
    border-radius: 18px;
    padding: 12px 14px;
    background: linear-gradient(180deg, rgba(255,255,255,.11), rgba(255,255,255,.06));
    border: 1px solid rgba(255,255,255,.08);
    box-shadow: 0 12px 24px rgba(0,0,0,.24);
    transition: transform .12s ease, filter .15s ease, background .15s ease;
  }
  .btn:hover { filter: brightness(1.08); }
  .btn:active { transform: translateY(1px) scale(.985); }
  .btn.primary {
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    color: #07101c;
  }
  .btn.good {
    background: linear-gradient(90deg, #6dff9a, #48d1ff);
    color: #07101c;
  }
  .btn.warn {
    background: linear-gradient(90deg, #ffd36d, #ff8d6d);
    color: #231006;
  }
  .btn.ghost {
    background: rgba(255,255,255,.06);
  }

  .rightCol {
    display: grid;
    gap: 14px;
  }

  .section {
    padding: 16px;
  }

  .tabs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-bottom: 12px;
  }

  .tab {
    padding: 12px 8px;
    border-radius: 16px;
    background: rgba(255,255,255,.05);
    border: 1px solid rgba(255,255,255,.08);
    color: var(--muted);
    font-weight: 700;
    cursor: pointer;
    transition: .16s ease;
  }
  .tab.active {
    color: #08131f;
    background: linear-gradient(90deg, var(--accent), var(--good));
    box-shadow: 0 0 20px rgba(98,245,255,.22);
  }

  .panel {
    display: none;
    animation: panelIn .2s ease;
  }
  .panel.active { display: block; }
  @keyframes panelIn {
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .list {
    display: grid;
    gap: 10px;
  }

  .item {
    padding: 13px;
    border-radius: 18px;
    background: rgba(0,0,0,.18);
    border: 1px solid rgba(255,255,255,.08);
  }

  .itemTop {
    display:flex;
    justify-content: space-between;
    gap: 10px;
    align-items: flex-start;
  }
  .itemTitle { font-size: 15px; font-weight: 800; }
  .itemDesc { color: var(--muted); font-size: 12px; margin-top: 4px; line-height: 1.45; }
  .itemMeta { color: #cfe5ff; font-size: 12px; margin-top: 6px; }
  .itemActions { margin-top: 10px; display:flex; gap: 8px; flex-wrap: wrap; }

  .skinGrid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .skinCard {
    padding: 14px;
    border-radius: 18px;
    background: rgba(0,0,0,.18);
    border: 1px solid rgba(255,255,255,.08);
    cursor: pointer;
    transition: transform .14s ease, border-color .14s ease;
  }
  .skinCard:hover { transform: translateY(-1px); }
  .skinCard.active { border-color: rgba(98,245,255,.7); box-shadow: 0 0 18px rgba(98,245,255,.13); }
  .skinPreview {
    height: 74px;
    border-radius: 18px;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.08);
  }

  .skinPreview::after {
    content:'';
    position:absolute;
    inset:-30%;
    background: radial-gradient(circle, rgba(255,255,255,.3), transparent 40%);
    animation: shine 3.8s ease-in-out infinite;
  }

  .sk-neon { background: radial-gradient(circle at 35% 30%, rgba(255,255,255,.9), rgba(255,255,255,.18) 10%, transparent 12%), linear-gradient(135deg, #00eaff, #7c5cff); }
  .sk-fire { background: linear-gradient(135deg, #ff6d8e, #ffb36d); }
  .sk-royal { background: linear-gradient(135deg, #ffd36d, #9f7dff); }
  .sk-void { background: linear-gradient(135deg, #1f1d3a, #0b1023); }
  .sk-gold { background: linear-gradient(135deg, #ffef9a, #d5a100); }
  .sk-emerald { background: linear-gradient(135deg, #6dff9a, #0eb8a2); }

  .footerRow {
    margin-top: 14px;
    display:flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .toastWrap {
    position: fixed;
    right: 14px;
    bottom: 14px;
    display: grid;
    gap: 8px;
    z-index: 50;
    pointer-events: none;
  }
  .toast {
    min-width: 220px;
    max-width: 320px;
    padding: 12px 14px;
    border-radius: 16px;
    background: rgba(7, 12, 28, .88);
    border: 1px solid rgba(255,255,255,.08);
    box-shadow: var(--shadow);
    color: #fff;
    animation: toastIn .22s ease;
  }
  .toast small { display:block; color: var(--muted); margin-top: 3px; }
  @keyframes toastIn {
    from { opacity: 0; transform: translateY(10px) scale(.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  .floating {
    position: fixed;
    pointer-events: none;
    z-index: 40;
    font-weight: 900;
    text-shadow: 0 0 16px rgba(255,255,255,.2);
    animation: floatUp .85s ease forwards;
    will-change: transform, opacity;
  }
  @keyframes floatUp {
    0% { opacity: 0; transform: translate3d(0,0,0) scale(.8); }
    15% { opacity: 1; }
    100% { opacity: 0; transform: translate3d(0,-90px,0) scale(1.18); }
  }

  .pulse {
    animation: pulse .4s ease;
  }
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.035); }
    100% { transform: scale(1); }
  }

  .shake {
    animation: shake .25s linear;
  }
  @keyframes shake {
    0%,100% { transform: translateX(0); }
    20% { transform: translateX(-6px); }
    40% { transform: translateX(6px); }
    60% { transform: translateX(-4px); }
    80% { transform: translateX(4px); }
  }

  .tiny {
    font-size: 12px;
    color: var(--muted);
  }

  .divider {
    height: 1px;
    background: rgba(255,255,255,.08);
    margin: 12px 0;
  }

  @media (max-width: 900px) {
    .grid { grid-template-columns: 1fr; }
    .hero { min-height: unset; }
  }
</style>
</head>
<body>
  <div class="bg-orb orb1"></div>
  <div class="bg-orb orb2"></div>
  <div class="bg-orb orb3"></div>

  <div class="wrap">
    <div class="topbar">
      <div class="brand">
        <h1>NEON CLICKER X</h1>
        <small>Mini App • передача данных в бот • анимации • автодобыча</small>
      </div>
      <div class="status">
        <span class="dot" id="netDot"></span>
        <span id="connText">WebApp готов</span>
        <span>•</span>
        <span id="saveText">Автосейв включён</span>
      </div>
    </div>

    <div class="grid">
      <div class="card hero">
        <div class="heroTop">
          <div class="statStack">
            <div class="statGrid">
              <div class="stat">
                <div class="label">Баланс</div>
                <div class="value" id="balanceText">0</div>
                <div class="mini">💎 монет</div>
              </div>
              <div class="stat">
                <div class="label">За клик</div>
                <div class="value" id="clickPowerText">1</div>
                <div class="mini">нажатий</div>
              </div>
              <div class="stat">
                <div class="label">В секунду</div>
                <div class="value" id="perSecText">0</div>
                <div class="mini">автодоход</div>
              </div>
              <div class="stat">
                <div class="label">Уровень</div>
                <div class="value" id="levelText">1</div>
                <div class="mini" id="xpMini">XP 0 / 25</div>
              </div>
            </div>

            <div class="xpBox">
              <div class="xpTop">
                <span>Прогресс уровня</span>
                <span id="xpPct">0%</span>
              </div>
              <div class="xpBar"><div class="xpFill" id="xpFill"></div></div>
            </div>
          </div>
        </div>

        <div class="clickZone">
          <div class="ring"></div>
          <button class="coreBtn" id="clickBtn" aria-label="Клик">
            <span class="emoji" id="skinEmoji">💎</span>
          </button>
          <div class="subline" id="subline">
            Жми в центр, прокачивайся, отправляй прогресс в бот и забирай оффлайн-доход.
          </div>
        </div>

        <div class="actions">
          <button class="btn primary" id="saveBtn">💾 Сохранить в бот</button>
          <button class="btn good" id="dailyBtn">🎁 Ежедневный бонус</button>
          <button class="btn warn" id="claimOfflineBtn">🌙 Забрать оффлайн</button>
          <button class="btn ghost" id="soundBtn">🔊 Звук: ON</button>
        </div>

        <div class="footerRow">
          <div class="tiny">Лучший клик: <span id="bestClickText">0</span></div>
          <div class="tiny">Всего кликов: <span id="totalClicksText">0</span></div>
          <div class="tiny">Скин: <span id="skinNameText">Neon Core</span></div>
        </div>
      </div>

      <div class="card section">
        <div class="tabs">
          <button class="tab active" data-tab="shop">Магазин</button>
          <button class="tab" data-tab="skins">Скины</button>
          <button class="tab" data-tab="stats">Статы</button>
          <button class="tab" data-tab="ach">Достижения</button>
        </div>

        <div class="panel active" id="tab-shop">
          <div class="list" id="shopList"></div>
        </div>

        <div class="panel" id="tab-skins">
          <div class="skinGrid" id="skinGrid"></div>
        </div>

        <div class="panel" id="tab-stats">
          <div class="list" id="statsList"></div>
        </div>

        <div class="panel" id="tab-ach">
          <div class="list" id="achList"></div>
        </div>

        <div class="divider"></div>

        <div class="tiny">
          Данные отправляются в бот через <b>Telegram.WebApp.sendData()</b>.
          В боте это ловится через <b>ctx.message.web_app_data.data</b>.
        </div>
      </div>
    </div>
  </div>

  <div class="toastWrap" id="toastWrap"></div>

<script>
(() => {
  const tg = window.Telegram?.WebApp || null;
  if (tg) {
    try {
      tg.ready();
      tg.expand();
      document.getElementById('connText').textContent = 'Telegram WebApp подключён';
    } catch (e) {}
  } else {
    document.getElementById('connText').textContent = 'Запущено вне Telegram';
  }

  const LS_KEY = 'neon_clicker_x_state_v1';
  const AUTO_SAVE_MS = 5000;
  const OFFLINE_CAP_MS = 8 * 60 * 60 * 1000;

  const skins = {
    neon:    { name: 'Neon Core', emoji: '💎', className: 'sk-neon', price: 0, bonus: 0 },
    fire:     { name: 'Fire Pulse', emoji: '🔥', className: 'sk-fire', price: 5000, bonus: 0.08 },
    royal:    { name: 'Royal Prism', emoji: '👑', className: 'sk-royal', price: 15000, bonus: 0.18 },
    void:     { name: 'Void Reactor', emoji: '🕳️', className: 'sk-void', price: 40000, bonus: 0.3 },
    gold:     { name: 'Gold Crown', emoji: '🪙', className: 'sk-gold', price: 80000, bonus: 0.45 },
    emerald:  { name: 'Emerald Wave', emoji: '🟢', className: 'sk-emerald', price: 120000, bonus: 0.65 }
  };

  const upgrades = [
    {
      id: 'power',
      title: 'Усилитель клика',
      desc: 'Добавляет силу клика. Чем выше уровень, тем дороже следующий апгрейд.',
      base: 100,
      growth: 1.38,
      max: 999,
      getLevel: s => s.upg.power,
      apply: s => { s.power += 1; s.upg.power += 1; }
    },
    {
      id: 'auto',
      title: 'Автодобыча',
      desc: 'Каждую секунду приносит алмазы без нажатий.',
      base: 1500,
      growth: 1.42,
      max: 999,
      getLevel: s => s.upg.auto,
      apply: s => { s.auto += 1; s.upg.auto += 1; }
    },
    {
      id: 'crit',
      title: 'Крит-усилитель',
      desc: 'Увеличивает шанс критического клика.',
      base: 2500,
      growth: 1.5,
      max: 20,
      getLevel: s => s.upg.crit,
      apply: s => { s.critChance = Math.min(.75, s.critChance + .03); s.upg.crit += 1; }
    },
    {
      id: 'mult',
      title: 'Крит-множитель',
      desc: 'Увеличивает множитель критического клика.',
      base: 5000,
      growth: 1.55,
      max: 20,
      getLevel: s => s.upg.mult,
      apply: s => { s.critMult = Math.min(12, s.critMult + .5); s.upg.mult += 1; }
    },
    {
      id: 'xp',
      title: 'Буст опыта',
      desc: 'Ускоряет рост уровня и прокачку.',
      base: 3000,
      growth: 1.44,
      max: 50,
      getLevel: s => s.upg.xp,
      apply: s => { s.xpBoost += .08; s.upg.xp += 1; }
    }
  ];

  const achievements = [
    { id:'c10', title:'Первые шаги', desc:'Сделай 10 кликов', check:s => s.totalClicks >= 10 },
    { id:'c100', title:'Серия', desc:'Сделай 100 кликов', check:s => s.totalClicks >= 100 },
    { id:'b1k', title:'Первые деньги', desc:'Накопи 1 000', check:s => s.balance >= 1000 },
    { id:'b25k', title:'Серьёзный баланс', desc:'Накопи 25 000', check:s => s.balance >= 25000 },
    { id:'p10', title:'Сила', desc:'Достигни 10 силы клика', check:s => s.power >= 10 },
    { id:'a10', title:'Автоматизация', desc:'Получай 10/сек', check:s => s.auto >= 10 },
    { id:'lv10', title:'Прокачка', desc:'Достигни 10 уровня', check:s => s.level >= 10 },
    { id:'sk1', title:'Стиль', desc:'Купи любой скин', check:s => s.ownedSkins.length > 1 }
  ];

  const defaultState = {
    balance: 0,
    totalEarned: 0,
    totalClicks: 0,
    bestClick: 0,
    power: 1,
    auto: 0,
    critChance: 0.08,
    critMult: 3,
    xp: 0,
    level: 1,
    xpBoost: 0,
    skin: 'neon',
    ownedSkins: ['neon'],
    selectedSkin: 'neon',
    lastSeen: Date.now(),
    lastDaily: 0,
    soundOn: true,
    streak: 0,
    upg: { power: 0, auto: 0, crit: 0, mult: 0, xp: 0 },
    unlocked: {},
    pendingOffline: 0
  };

  let state = loadState();
  let saveTimer = null;
  let autoTick = null;
  let uiTick = null;
  let levelToastLock = false;
  let isSyncedOnce = false;
  let burstCooldown = 0;

  const $ = (id) => document.getElementById(id);

  const ui = {
    balanceText: $('balanceText'),
    clickPowerText: $('clickPowerText'),
    perSecText: $('perSecText'),
    levelText: $('levelText'),
    xpMini: $('xpMini'),
    xpFill: $('xpFill'),
    xpPct: $('xpPct'),
    bestClickText: $('bestClickText'),
    totalClicksText: $('totalClicksText'),
    skinNameText: $('skinNameText'),
    skinEmoji: $('skinEmoji'),
    subline: $('subline'),
    clickBtn: $('clickBtn'),
    saveBtn: $('saveBtn'),
    dailyBtn: $('dailyBtn'),
    claimOfflineBtn: $('claimOfflineBtn'),
    soundBtn: $('soundBtn'),
    toastWrap: $('toastWrap'),
    shopList: $('shopList'),
    skinGrid: $('skinGrid'),
    statsList: $('statsList'),
    achList: $('achList'),
    netDot: $('netDot'),
    saveText: $('saveText'),
  };

  function loadState() {
    let s = structuredClone(defaultState);
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        s = deepMerge(s, parsed);
      }
    } catch (e) {}

    s.ownedSkins = Array.isArray(s.ownedSkins) ? s.ownedSkins : ['neon'];
    s.unlocked = s.unlocked && typeof s.unlocked === 'object' ? s.unlocked : {};
    s.upg = s.upg && typeof s.upg === 'object' ? s.upg : structuredClone(defaultState.upg);
    s.selectedSkin = skins[s.selectedSkin] ? s.selectedSkin : (s.skin && skins[s.skin] ? s.skin : 'neon');
    s.skin = s.selectedSkin;
    s.lastSeen = Number(s.lastSeen) || Date.now();
    return s;
  }

  function deepMerge(base, extra) {
    const out = Array.isArray(base) ? [...base] : { ...base };
    if (!extra || typeof extra !== 'object') return out;
    for (const k of Object.keys(extra)) {
      const bv = out[k];
      const ev = extra[k];
      if (Array.isArray(bv) && Array.isArray(ev)) out[k] = ev;
      else if (bv && typeof bv === 'object' && ev && typeof ev === 'object' && !Array.isArray(ev)) out[k] = deepMerge(bv, ev);
      else out[k] = ev;
    }
    return out;
  }

  function saveLocal() {
    state.lastSeen = Date.now();
    localStorage.setItem(LS_KEY, JSON.stringify(state));
    ui.saveText.textContent = 'Сохранено локально';
    setTimeout(() => ui.saveText.textContent = 'Автосейв включён', 800);
  }

  function sendTelegramData(action, extra = {}) {
    const payload = {
      action,
      ts: Date.now(),
      ...extra
    };
    const raw = JSON.stringify(payload);
    if (tg && typeof tg.sendData === 'function') {
      try {
        tg.sendData(raw);
        isSyncedOnce = true;
        toast('Отправлено в бот', 'Данные ушли через WebApp.sendData().');
        return true;
      } catch (e) {
        console.error(e);
      }
    } else {
      console.log('[sendData]', raw);
    }
    return false;
  }

  function syncFullState() {
    sendTelegramData('save_clicks', {
      clicks: state.totalClicks,
      balance: round1(state.balance),
      power: round1(state.power),
      auto: round1(state.auto),
      level: state.level,
      xp: round1(state.xp),
      skin: state.selectedSkin,
      bestClick: round1(state.bestClick),
      earned: round1(state.totalEarned)
    });
  }

  function saveAndSync() {
    saveLocal();
    syncFullState();
  }

  function round1(n) { return Math.round((Number(n) || 0) * 10) / 10; }
  function round2(n) { return Math.round((Number(n) || 0) * 100) / 100; }
  function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

  function upgradeCost(def) {
    const lv = def.getLevel(state);
    return Math.floor(def.base * Math.pow(def.growth, lv));
  }

  function skinBonus() {
    const skin = skins[state.selectedSkin] || skins.neon;
    return skin.bonus || 0;
  }

  function clickValue() {
    const base = state.power;
    const skin = 1 + skinBonus();
    return round1(base * skin);
  }

  function perSecValue() {
    const skin = 1 + (skinBonus() * 0.35);
    return round1(state.auto * (1 + state.level * 0.02) * skin);
  }

  function nextXpNeed() {
    return Math.floor(25 + (state.level - 1) * 12 + Math.pow(state.level, 1.12) * 6);
  }

  function addBalance(amount, source = 'click') {
    const v = round1(amount);
    if (v <= 0) return 0;
    state.balance += v;
    state.totalEarned += v;
    if (source === 'click') state.totalClicks += 1;
    return v;
  }

  function gainXp(amount) {
    state.xp += amount * (1 + state.xpBoost);
    const need = nextXpNeed();
    if (state.xp >= need) {
      state.xp -= need;
      state.level += 1;
      state.power += 1 + Math.floor(state.level / 6) * 0.2;
      toast('Уровень повышен!', `Теперь уровень ${state.level}.`);
      playTone(660, .09, 'triangle', .03);
      pulseCanvas();
    }
  }

  function maybeCrit() {
    return Math.random() < clamp(state.critChance, 0, .95);
  }

  function clickAt(x, y) {
    const base = clickValue();
    const crit = maybeCrit();
    const reward = crit ? round1(base * state.critMult) : base;

    addBalance(reward, 'click');
    state.bestClick = Math.max(state.bestClick, reward);
    gainXp(reward);

    if (state.soundOn) {
      playTone(crit ? 880 : 520, .05, crit ? 'square' : 'sine', .02);
    }

    spawnFloating(x, y, `+${formatNum(reward)}${crit ? ' крит' : ''}`, crit ? 'var(--warn)' : 'var(--accent)');
    burstParticles(x, y, crit ? 28 : 16, crit ? 'var(--warn)' : 'var(--accent)');
    updateUI();

    if (reward >= 1000) {
      toast('Большой клик!', `+${formatNum(reward)} за одно нажатие.`);
    }
    if (reward > burstCooldown) {
      burstCooldown = reward;
      setTimeout(() => { burstCooldown = 0; }, 800);
    }
  }

  function formatNum(n) {
    const x = Math.floor(Number(n) || 0);
    return x.toLocaleString('ru-RU');
  }

  function spawnFloating(x, y, text, color) {
    const el = document.createElement('div');
    el.className = 'floating';
    el.textContent = text;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.color = color;
    el.style.fontSize = text.includes('крит') ? '18px' : '16px';
    el.style.textShadow = `0 0 16px ${color}`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 900);
  }

  function burstParticles(x, y, count = 18, color = 'var(--accent)') {
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.style.position = 'fixed';
      p.style.left = `${x}px`;
      p.style.top = `${y}px`;
      p.style.width = `${6 + Math.random() * 8}px`;
      p.style.height = p.style.width;
      p.style.borderRadius = '50%';
      p.style.background = color;
      p.style.zIndex = 35;
      p.style.pointerEvents = 'none';
      p.style.boxShadow = `0 0 18px ${color}`;
      const angle = Math.random() * Math.PI * 2;
      const dist = 60 + Math.random() * 120;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist - 12;
      const rot = (Math.random() * 360) | 0;
      p.animate([
        { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)', opacity: 1 },
        { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0) rotate(${rot}deg)`, opacity: 0 }
      ], { duration: 650 + Math.random() * 350, easing: 'cubic-bezier(.12,.72,.2,1)' });
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1000);
    }
  }

  function toast(title, detail = '') {
    const box = document.createElement('div');
    box.className = 'toast';
    box.innerHTML = `<b>${escapeHtml(title)}</b>${detail ? `<small>${escapeHtml(detail)}</small>` : ''}`;
    ui.toastWrap.appendChild(box);
    setTimeout(() => {
      box.animate([{opacity:1, transform:'translateY(0)'}, {opacity:0, transform:'translateY(8px)'}], {duration:220, fill:'forwards'});
      setTimeout(() => box.remove(), 220);
    }, 1900);
  }

  function escapeHtml(s) {
    return String(s ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function playTone(freq = 440, dur = .06, type = 'sine', gain = .03) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!playTone.ctx) playTone.ctx = new AudioCtx();
      const ctxA = playTone.ctx;
      if (ctxA.state === 'suspended') ctxA.resume().catch(()=>{});
      const osc = ctxA.createOscillator();
      const g = ctxA.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      g.gain.value = gain;
      osc.connect(g);
      g.connect(ctxA.destination);
      osc.start();
      osc.stop(ctxA.currentTime + dur);
    } catch (e) {}
  }

  function pulseCanvas() {
    ui.clickBtn.classList.add('pulse');
    setTimeout(() => ui.clickBtn.classList.remove('pulse'), 360);
  }

  function shakeBody() {
    document.body.classList.add('shake');
    setTimeout(() => document.body.classList.remove('shake'), 280);
  }

  function renderShop() {
    const nodes = [];
    for (const def of upgrades) {
      const level = def.getLevel(state);
      const cost = upgradeCost(def);
      const maxed = level >= def.max;
      const canBuy = !maxed && state.balance >= cost;
      const title = def.title;
      const desc = def.desc;
      const meta = maxed ? 'Максимум достигнут' : `Следующий уровень: ${level + 1} • Цена: ${formatNum(cost)} 💎`;
      nodes.push(`
        <div class="item">
          <div class="itemTop">
            <div>
              <div class="itemTitle">${escapeHtml(title)}</div>
              <div class="itemDesc">${escapeHtml(desc)}</div>
              <div class="itemMeta">${escapeHtml(meta)}</div>
            </div>
            <div class="tiny">Lv ${level}</div>
          </div>
          <div class="itemActions">
            <button class="btn ${canBuy ? 'primary' : 'ghost'}" data-buy="${def.id}" ${maxed ? 'disabled' : ''}>
              ${maxed ? 'MAX' : 'Купить'}
            </button>
          </div>
        </div>
      `);
    }
    ui.shopList.innerHTML = nodes.join('');
    ui.shopList.querySelectorAll('[data-buy]').forEach(btn => {
      btn.onclick = () => buyUpgrade(btn.dataset.buy);
    });
  }

  function buyUpgrade(id) {
    const def = upgrades.find(u => u.id === id);
    if (!def) return;
    const cost = upgradeCost(def);
    const level = def.getLevel(state);
    if (level >= def.max) {
      toast('Уже максимум', def.title);
      return;
    }
    if (state.balance < cost) {
      shakeBody();
      toast('Недостаточно 💎', `Нужно ещё ${formatNum(cost - state.balance)}.`);
      return;
    }

    state.balance -= cost;
    def.apply(state);

    if (state.soundOn) playTone(740, .07, 'triangle', .03);
    toast('Покупка успешна', `${def.title} улучшен.`);
    updateUI();
    renderShop();
    renderStats();
    renderAchievements();
    saveAndSync();
    sendTelegramData('upgrade', {
      upgrade: id,
      level: level + 1,
      cost: cost,
      balance: round1(state.balance),
      power: round1(state.power),
      auto: round1(state.auto)
    });
  }

  function renderSkins() {
    const cards = Object.entries(skins).map(([id, sk]) => {
      const owned = state.ownedSkins.includes(id);
      const active = state.selectedSkin === id;
      const priceText = sk.price === 0 ? 'Бесплатно' : `${formatNum(sk.price)} 💎`;
      return `
        <div class="skinCard ${active ? 'active' : ''}" data-skin="${id}">
          <div class="skinPreview ${sk.className}"></div>
          <div style="display:flex;justify-content:space-between;gap:8px;align-items:flex-start;">
            <div>
              <div class="itemTitle">${escapeHtml(sk.name)}</div>
              <div class="itemDesc">Бонус: +${Math.round((sk.bonus || 0) * 100)}%</div>
            </div>
            <div class="tiny">${owned ? (active ? 'Активен' : 'Куплен') : priceText}</div>
          </div>
          <div class="itemActions">
            <button class="btn ${owned ? 'primary' : 'ghost'}" data-skin-action="${id}">
              ${owned ? (active ? 'Выбран' : 'Выбрать') : 'Купить'}
            </button>
          </div>
        </div>
      `;
    });
    ui.skinGrid.innerHTML = cards.join('');
    ui.skinGrid.querySelectorAll('[data-skin-action]').forEach(btn => {
      btn.onclick = () => chooseOrBuySkin(btn.dataset.skin);
    });
    ui.skinGrid.querySelectorAll('[data-skin]').forEach(card => {
      card.onclick = (e) => {
        if (e.target && e.target.matches('button')) return;
        const id = card.dataset.skin;
        chooseOrBuySkin(id);
      };
    });
  }

  function chooseOrBuySkin(id) {
    const sk = skins[id];
    if (!sk) return;

    if (!state.ownedSkins.includes(id)) {
      if (state.balance < sk.price) {
        shakeBody();
        toast('Скин недоступен', `Нужно ${formatNum(sk.price - state.balance)} 💎.`);
        return;
      }
      state.balance -= sk.price;
      state.ownedSkins.push(id);
      toast('Скин куплен', sk.name);
    }

    state.selectedSkin = id;
    state.skin = id;
    applySkin();
    updateUI();
    renderSkins();
    renderAchievements();
    saveAndSync();
    sendTelegramData('state_sync', {
      skin: id,
      balance: round1(state.balance),
      ownedSkins: state.ownedSkins.length
    });
  }

  function applySkin() {
    const sk = skins[state.selectedSkin] || skins.neon;
    ui.skinEmoji.textContent = sk.emoji;
    ui.skinNameText.textContent = sk.name;
    ui.clickBtn.style.filter = sk.className === 'sk-void' ? 'saturate(1.15) brightness(.95)' : 'none';
  }

  function renderStats() {
    const items = [
      ['Баланс', `${formatNum(state.balance)} 💎`],
      ['Всего заработано', `${formatNum(state.totalEarned)} 💎`],
      ['Всего кликов', formatNum(state.totalClicks)],
      ['Лучший клик', `${formatNum(state.bestClick)} 💎`],
      ['За клик', `${round1(clickValue())} 💎`],
      ['В секунду', `${round1(perSecValue())} 💎`],
      ['Крит-шанс', `${Math.round(clamp(state.critChance,0,1)*100)}%`],
      ['Крит-множитель', `x${round1(state.critMult)}`],
      ['Скин-бонус', `+${Math.round(skinBonus()*100)}%`],
      ['Оффлайн ожидает', `${formatNum(state.pendingOffline)} 💎`],
    ];
    ui.statsList.innerHTML = items.map(([a,b]) => `
      <div class="item">
        <div class="itemTop">
          <div>
            <div class="itemTitle">${escapeHtml(a)}</div>
            <div class="itemDesc">${escapeHtml(b)}</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderAchievements() {
    const nodes = achievements.map(a => {
      const ok = !!a.check(state);
      return `
        <div class="item" style="border-color:${ok ? 'rgba(109,255,154,.35)' : 'rgba(255,255,255,.08)'}">
          <div class="itemTop">
            <div>
              <div class="itemTitle">${ok ? '✅' : '🔒'} ${escapeHtml(a.title)}</div>
              <div class="itemDesc">${escapeHtml(a.desc)}</div>
            </div>
            <div class="tiny">${ok ? 'Выполнено' : 'В процессе'}</div>
          </div>
        </div>
      `;
    }).join('');
    ui.achList.innerHTML = nodes;
  }

  function updateUI() {
    const xpNeed = nextXpNeed();
    const xpPct = clamp((state.xp / xpNeed) * 100, 0, 100);

    ui.balanceText.textContent = formatNum(state.balance);
    ui.clickPowerText.textContent = round1(clickValue());
    ui.perSecText.textContent = round1(perSecValue());
    ui.levelText.textContent = formatNum(state.level);
    ui.xpMini.textContent = `XP ${formatNum(Math.floor(state.xp))} / ${formatNum(xpNeed)}`;
    ui.xpFill.style.width = `${xpPct}%`;
    ui.xpPct.textContent = `${Math.floor(xpPct)}%`;
    ui.bestClickText.textContent = formatNum(state.bestClick);
    ui.totalClicksText.textContent = formatNum(state.totalClicks);
    ui.soundBtn.textContent = `🔊 Звук: ${state.soundOn ? 'ON' : 'OFF'}`;
    ui.claimOfflineBtn.disabled = state.pendingOffline <= 0;
    ui.claimOfflineBtn.style.opacity = state.pendingOffline > 0 ? '1' : '.6';
    ui.dailyBtn.textContent = canClaimDaily() ? '🎁 Ежедневный бонус' : '⏳ Daily на кулдауне';
    applySkin();
    renderShop();
    renderSkins();
    renderStats();
    renderAchievements();
  }

  function canClaimDaily() {
    const now = Date.now();
    return now - (state.lastDaily || 0) >= 24 * 60 * 60 * 1000;
  }

  function claimDaily() {
    if (!canClaimDaily()) {
      const left = 24 * 60 * 60 * 1000 - (Date.now() - (state.lastDaily || 0));
      const h = Math.floor(left / 3600000);
      const m = Math.floor((left % 3600000) / 60000);
      toast('Daily ещё недоступен', `${h}ч ${m}м осталось.`);
      return;
    }
    const bonus = Math.floor(300 + Math.random() * 700);
    state.balance += bonus;
    state.totalEarned += bonus;
    state.lastDaily = Date.now();
    state.streak = (state.streak || 0) + 1;
    toast('Ежедневный бонус', `+${formatNum(bonus)} 💎`);
    if (state.soundOn) playTone(920, .08, 'sine', .03);
    updateUI();
    saveAndSync();
    sendTelegramData('daily', { bonus, streak: state.streak });
  }

  function computeOffline() {
    const now = Date.now();
    const diff = Math.max(0, now - (state.lastSeen || now));
    if (diff < 12000) {
      state.pendingOffline = 0;
      return;
    }
    const seconds = Math.min(diff, OFFLINE_CAP_MS) / 1000;
    const income = round1(perSecValue() * seconds * 0.7);
    state.pendingOffline = Math.max(0, income);
  }

  function claimOffline() {
    if (state.pendingOffline <= 0) {
      toast('Оффлайн дохода нет', 'Сейчас нечего забирать.');
      return;
    }
    const reward = round1(state.pendingOffline);
    state.balance += reward;
    state.totalEarned += reward;
    state.pendingOffline = 0;
    toast('Оффлайн доход', `+${formatNum(reward)} 💎`);
    if (state.soundOn) playTone(520, .08, 'triangle', .03);
    updateUI();
    saveAndSync();
    sendTelegramData('offline_claim', {
      reward,
      balance: round1(state.balance),
      auto: round1(state.auto)
    });
  }

  function autoLoop() {
    const gain = perSecValue();
    if (gain > 0) {
      state.balance += gain;
      state.totalEarned += gain;
      gainXp(gain * 0.3);
      if (Math.random() < .06) {
        burstParticles(
          window.innerWidth * (0.35 + Math.random() * 0.3),
          window.innerHeight * (0.22 + Math.random() * 0.22),
          6,
          'var(--good)'
        );
      }
    }
  }

  function bindTabs() {
    document.querySelectorAll('.tab').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.tab;
        document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t === btn));
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
        $('tab-' + id).classList.add('active');
      });
    });
  }

  function bindEvents() {
    ui.clickBtn.addEventListener('pointerdown', (e) => {
      if (state.soundOn) playTone(440, .02, 'sine', .02);
      clickAt(e.clientX, e.clientY);
      pulseCanvas();
      saveDebounced();
    });

    ui.clickBtn.addEventListener('click', (e) => {
      e.preventDefault();
    });

    ui.saveBtn.onclick = () => {
      saveAndSync();
      toast('Сохранено', 'Прогресс отправлен в бот.');
      pulseCanvas();
    };

    ui.dailyBtn.onclick = claimDaily;
    ui.claimOfflineBtn.onclick = claimOffline;
    ui.soundBtn.onclick = () => {
      state.soundOn = !state.soundOn;
      toast('Звук', state.soundOn ? 'Включён' : 'Выключен');
      updateUI();
      saveDebounced();
    };

    window.addEventListener('beforeunload', () => {
      saveLocal();
      syncFullState();
    });

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        saveLocal();
      } else {
        computeOffline();
        updateUI();
      }
    });
  }

  function saveDebounced() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      saveLocal();
    }, 500);
  }

  function initLoops() {
    autoTick = setInterval(() => {
      autoLoop();
      updateUI();
    }, 1000);

    uiTick = setInterval(() => {
      computeOffline();
      ui.claimOfflineBtn.disabled = state.pendingOffline <= 0;
      if (Date.now() - state.lastSeen > 30000) saveLocal();
    }, 2000);

    setInterval(() => {
      saveLocal();
      if (navigator.onLine) {
        document.getElementById('netDot').style.background = 'var(--good)';
        document.getElementById('netDot').style.boxShadow = '0 0 14px rgba(109,255,154,.9)';
      } else {
        document.getElementById('netDot').style.background = 'var(--bad)';
        document.getElementById('netDot').style.boxShadow = '0 0 14px rgba(255,109,142,.9)';
      }
    }, AUTO_SAVE_MS);
  }

  function firstLoadReward() {
    const now = Date.now();
    if (!state.unlocked.firstLoadBonus) {
      state.unlocked.firstLoadBonus = true;
      state.balance += 150;
      state.totalEarned += 150;
      toast('Добро пожаловать', '+150 💎 стартовый бонус.');
    }
    state.lastSeen = now;
  }

  function syncTelegramMeta() {
    if (!tg) return;
    try {
      const user = tg.initDataUnsafe?.user;
      if (user?.first_name) {
        ui.subline.textContent = `Привет, ${user.first_name}! Твой прогресс уже можно отправлять в бот.`;
      }
    } catch (e) {}
  }

  function init() {
    syncTelegramMeta();
    firstLoadReward();
    computeOffline();
    bindTabs();
    bindEvents();
    initLoops();
    updateUI();
    saveLocal();
    toast('Готово', 'Кликер запущен. Нажимай и прокачивайся.');
    setTimeout(() => {
      sendTelegramData('state_sync', {
        balance: round1(state.balance),
        level: state.level,
        power: round1(state.power),
        auto: round1(state.auto),
        skin: state.selectedSkin,
        totalClicks: state.totalClicks
      });
    }, 600);
  }

  function resizeHandler() {
    // Заглушка под будущие эффекты
  }

  window.addEventListener('resize', resizeHandler);

  init();
})();
</script>
</body>
</html>
