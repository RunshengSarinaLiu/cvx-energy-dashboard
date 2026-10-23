# CVX 能源因子看板

每日盘前研究的可视化看板：跟踪 CVX 投资判断依赖的几个因子——油价曲线结构、远月是否跟涨、霍尔木兹有效供应、美国库存，以及股价是否确认油价。

## 打开方式

直接双击 `index.html` 用浏览器打开即可，不需要服务器。图表库 d3 从 cdnjs 加载，需要联网。

## 文件结构

```
index.html          看板页面（布局、图表、因子计算）
lib/dash-shim.js    让页面脱离 Claude 看板环境独立运行的小工具
data/daily.js       每日因子：油价、曲线、霍尔木兹、EIA 库存、CVX/XLE/S&P
data/curve.js       每期 Brent / WTI 各交割月报价
data/peers.js       能源股前一交易日收盘与涨跌
data/targets.js     CVX 分析师目标价
data/scenarios.js   Bull / Base / Bear 情景
data/calls.js       条件式判断
```

## 每天更新

1. 在 `data/daily.js` 末尾追加一行（复制上一行改数字，`date` 用报告日）。
2. 在 `data/curve.js` 追加当天各交割月报价（`date` 相同）；`data/peers.js` 追加当天收盘。
3. 目标价、情景、判断有变化时再改对应文件。
4. 提交并推送。

看板会自动用最新一期作为当前值，并和前一期比较：期货曲线叠加上一期虚线，"远月跟涨"和霍尔木兹"较上期"从第二期开始有读数，指数化走势随记录增加成形。

## 数据口径

- 原油为报告日盘前期货最近成交价（非官方结算价）；股票与 ETF 为前一交易日收盘，两者不是同一时点。
- 霍尔木兹运输量单位为万桶/日（Kpler，经 WSJ）；EIA 库存单位为百万桶。
- 来源：Reuters、WSJ/Kpler、OilPrice.com、EIA、MarketWatch、Benzinga。

研究性条件判断，不是交易指令或投资建议。
