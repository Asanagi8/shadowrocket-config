# 自用 Clash & Shadowrocket 规则

本仓库主要为个人自用配置：

- **Clash覆写脚本 & Shadowrocket配置**位于 `Config/` 目录。
- 可防止 DNS 泄露

## 附带功能：规则自动转换

通过 GitHub Actions（`rules-converter.yml`）自动从原作者仓库同步最新`.yaml` 规则，并转换生成纯规则列表（`.list` 文件），便于在Shadowrocket配置中直接引用。

- 原作者更新后自动跟随（每天检查一次）
- 支持域名、IP、混合规则
- IP 规则已加 `,no-resolve`

生成的纯规则文件位于 `Ruleset/` 目录（可修改 workflow 自定义路径），可直接通过 raw 链接在小火箭中使用。

## 致谢

- 原规则来源：[Accademia/Additional_Rule_For_Clash](https://github.com/Accademia/Additional_Rule_For_Clash)
- 转换脚本由 Grok AI 生成
