### 安装

- 安装 vue： npm install -g @vue/cli
- 确认 vue 版本：vue -V
- 创建项目：vue create newProject (newProject 为项目名称)
- 选择模板或默认配置
  > default (默认配置，只包含 babel 和 eslint)<br/>
  > Manually select features (自定义配置，用户自己选择)
- 自定义配置 (上下键移动，space 键选中，enter 键确认)
  > Babel - ES6 to ES5<br/>
  > TypeScript - TypeScript<br/>
  > Progressive Web App (PWA) Support - 渐进式 Web 应用<br/>
  > Router - 路由<br/>
  > Vuex - 仓库<br/>
  > CSS Pre-processors - css 预处理<br/>
  > Linter / Formatter - 规范类型<br/>
  > Unit Testing - 测试方式<br/>
  > E2E Testing - 测试方式<br/>
- 否使用 babel 做转义
  > User class-style compinent syntax? <br/>
  > Use Babel alongside TypeScript (required for \*\*\*\*)?
- vue-route 是否使用 history 模式
  > User history mode for router?
- 选择 CSS 预处理类型
  > Sass/SCSS (with dart-sass)
  > Sass/SCSS (with node-sass)
  > Less
  > Stylus
- 选择语法检测规范
  > TSLint <br/>
  > EsSLint with error prevent only <br/>
  > ESLint + Airbnb config <br/>
  > ESLint + Standard config <br/>
  > ESLint + Prettier <br/>
- 选择语法检测方式（保存时检查 / 提交时检查）
  > Lint on save<br/>
  > Lint and fix on commit
- 选择配置信息存放位置（单独存放 / 并入 package.json）
  > In dedicated config files<br/>
  > In package.json
- 是否保存当前预设
  > Save this as a preset for future projects?

### 配置

如果要更改 webpack 的配置，直接在根目录下添加 vue.config.js
