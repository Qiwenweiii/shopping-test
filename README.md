# 🛒 电商系统自动化测试项目

## 📌 项目简介

本项目是基于 Playwright 实现的电商系统自动化测试项目，主要模拟真实业务场景，对电商网站的核心流程进行端到端自动化测试。

通过该项目，构建了一套完整的测试体系，包括：

* UI 自动化测试
* Page Object 模式封装
* 参数化测试（数据驱动）
* 测试报告（截图 / 视频 / Trace）
* CI 自动化执行（GitHub Actions）

---

## 🎯 测试目标

覆盖电商系统核心业务流程：

* 用户登录
* 商品浏览
* 添加购物车
* 提交订单
* 下单成功验证

---

## 🧱 技术栈

* Playwright（自动化测试框架）
* Node.js
* JavaScript
* GitHub Actions（CI/CD）

---

## 📁 项目结构

```
project-root/
├── tests/                # 测试用例
│   ├── login.spec.js
│   └── order.spec.js
│
├── pages/                # Page Object 封装
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── data/                 # 测试数据
│   └── loginData.js
│
├── playwright.config.js  # 配置文件
├── package.json
└── .github/workflows     # CI 配置
```

---

## 🚀 快速开始

### 1️⃣ 安装依赖

```
npm install
```

### 2️⃣ 安装浏览器

```
npx playwright install
```

### 3️⃣ 运行测试

```
npx playwright test
```

### 4️⃣ 查看测试报告

```
npx playwright show-report
```

---

## 🧪 核心测试用例

### ✅ 登录测试（参数化）

* 正确账号登录成功
* 错误账号登录失败
* 被锁定用户登录失败

### ✅ 完整下单流程

* 登录系统
* 添加商品到购物车
* 进入购物车
* 提交订单
* 校验订单成功页面

---

## 🧠 关键设计

### 1. Page Object 模式

将页面元素和操作封装，提高代码复用性和可维护性。

### 2. 数据驱动测试

通过独立数据文件，实现多场景测试覆盖。

### 3. 自动等待机制

利用 Playwright 自动等待能力，提高测试稳定性。

### 4. 失败分析能力

* 自动截图
* 自动保存视频
* Trace 回放定位问题

---

## ⚙️ CI 自动化

已接入 GitHub Actions：

* 代码提交自动触发测试
* 自动执行测试脚本
* 自动生成并上传测试报告

---

## 📊 测试报告

测试执行后会生成 HTML 报告，包含：

* 测试结果（通过 / 失败）
* 执行步骤
* 截图
* 视频
* Trace 调试信息

---

## 💥 项目亮点（面试重点）

* 完整业务流程自动化（非单点测试）
* 使用 Page Object 提升结构化能力
* 参数化测试提升覆盖率
* Trace + 截图提升问题定位能力
* CI 自动执行测试，贴近企业开发流程

---

## 📌 后续可扩展

* 接口自动化测试
* Mock 数据
* 测试覆盖率分析
* 性能测试

---

## 👨‍💻 作者

用于自动化测试学习与求职项目展示
