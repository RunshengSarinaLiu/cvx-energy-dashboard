// scenarios — 每期追加一行，然后提交
window.CVX_DATA = window.CVX_DATA || {};
window.CVX_DATA.scenarios = [
  {
    "case": "Bull",
    "brent_low": 120,
    "brent_high": null,
    "assumption": "Brent 维持 $120 以上，实际出口持续受阻，远月油价上调",
    "impact": "上游 FCF 预期可能上升，估值获得支持"
  },
  {
    "case": "Base",
    "brent_low": 105,
    "brent_high": 115,
    "assumption": "Brent 回落至 $105–115，运输部分恢复，风险溢价仍存在",
    "impact": "FCF 维持较强，股价更多取决于财报"
  },
  {
    "case": "Bear",
    "brent_low": 90,
    "brent_high": 100,
    "assumption": "Brent 回落至 $90–100，供应恢复快于预期或需求走弱",
    "impact": "未来 FCF 预测可能下调，估值面临压力"
  }
];
