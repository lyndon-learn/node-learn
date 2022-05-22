# node-learn

## 🛠️ 开发进阶

### 研发规范

#### CSS 规范
CSS 命名规范推荐使用 [BEM](http://getbem.com/) 规范。

##### CSS Modules

> 项目中 SCSS 文件默认使用 CSS Modules，约定 `[name].bem.scss` 不使用 CSS Modules，CSS Modules 允许你在不同的文件中使用相同的 CSS classname，从而保证唯一性，而无需担心命名冲突。

- 页面和业务组件使用 `CSS Modules`，防止样式冲突；
- 公共组件不使用 `CSS Modules`，方便进行样式覆盖。

##### 代码命名规范

1. `React` 组件名、`class` 名使用 `PascalCase`，比如：

```ts
// react component
export default function MyComponent() {
  // ...
}

// class
class MyClass {
  // ...
}
```

2. `Enum` 变量的名字使用 `PascalCase`，`Enum` 成员使用全大写 `SNAKE_CASE`，比如：

```ts
enum UserStatus {
  DEFAULT = 0,
  HISTORY_CERTIFICATIONS_NOT_EXIST = 1,
  HISTORY_CERTIFICATIONS_NOT_SUCCESS = 2,
  HISTORY_CERTIFICATIONS_HAS_SUCCESS = 3
}
```

3. 最外层作用域定义的常量，使用全大写 `SNAKE_CASE`，比如：

```ts
const USER_STATUS = 0
```

4. 其他情况下的所有的函数、常量、变量都一律使用 `lowerCamelCase`，比如：

```ts
const userStatus = 0
```

5. 文件夹、文件名一律使用连字符 + 小写字母命名，比如：

```text
my-component
├─ custom-component.tsx
├─ index.tsx
└─ index.scss
```

#### 提交信息

提交信息需要遵守[约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0-beta.4/)规范，保持项目的一致性，也方便自动化生成 CHANGELOG。

##### 规范

```sh
# 类型说明
build：主要目的是修改项目构建系统（例如 gulp，webpack，rollup 的配置等）的提交
ci：主要目的是修改项目继续集成流程（例如 Travis，Jenkins，GitLab CI，Circle等）的提交
docs：文档更新
feat：新增功能
fix：bug 修复
perf：性能优化
refactor：重构代码（既没有新增功能，也没有修复 bug）
style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等）
test：新增测试用例或是更新现有测试
revert：回滚某个更早之前的提交
chore：不属于以上类型的其他类型
```

`git commit -m` 提交代码时需手写出符合上述规范的提交信息，如果不想手写可以使用 [commitizen](http://commitizen.github.io/cz-cli/) 工具交互式选择 `type`、`scope` 等自动生成符合规范的提交信息。

##### commitizen 使用

```sh
# 全局安装 commitizen 和 cz-conventional-changelog 规范适配器
$ npm install commitizen cz-conventional-changelog -g

# 配置适配器
$ echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

安装完成后，使用 `git cz` 代替 `git commit` 完成提交操作。

```sh
$ git cz
cz-cli@4.2.4, cz-conventional-changelog@3.0.2

? Select the type of change that you're committing: (Use arrow keys)
❯ feat:     A new feature
  fix:      A bug fix
  docs:     Documentation only changes
  style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
  refactor: A code change that neither fixes a bug nor adds a feature
  perf:     A code change that improves performance
  test:     Adding missing tests or correcting existing tests
(Move up and down to reveal more choices)
```