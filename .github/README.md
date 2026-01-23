# 规则转换

通过 GitHub Actions（`rules-converter.yml`）自动从原作者仓库同步最新 YAML 规则，并转换为 Shadowrocket（小火箭）可直接使用的纯规则列表（`.list` 文件）。

- 原作者更新后，会自动跟随同步（每天检查一次）
- 支持域名、IP、混合（Classical）规则
- IP 规则已自动添加 `,no-resolve`

所有转换后的规则文件位于自定义目录（可自行修改 workflow 中的输出路径），可直接通过 raw 链接在小火箭中使用。

## 致谢

- 原规则来源：[Accademia/Additional_Rule_For_Clash](https://github.com/Accademia/Additional_Rule_For_Clash)
- 项目脚本由 Grok AI 生成
