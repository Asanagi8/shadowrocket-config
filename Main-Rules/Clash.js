// 常量定义
const test_interval = 600;
const test_tolerance = 50;
const groupBaseOption = {
  "interval": 600,
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 1,
  "hidden": false
};
const regionConfig = [
  {
      name: "🇭🇰 香港 📶",
      matcher: "香港|🇭🇰|HK|Hong Kong|HongKong",
      icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png"
  },
  {
      name: "🇹🇼 台湾 📶",
      matcher: "台湾|🇹🇼|tw|taiwan|tai wan",
      icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png"
  },
  {
      name: "🇯🇵 日本 📶",
      matcher: "日本|🇯🇵|JP|Japan",
      icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png"
  },
  {
      name: "🇰🇷 韩国 📶",
      matcher: "韩|🇰🇷|kr|korea",
      icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Korea.png"
  },
  {
      name: "🇸🇬 新加坡 📶",
      matcher: "新加坡|🇸🇬|SG|狮城|Singapore",
      icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png"
  },
  {
      name: "🇺🇸 美国 📶",
      matcher: "美国|🇺🇸|US|United States|America",
      icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png"
  },
  {
      name: "🌐 其他 📶",
      icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Area.png"
  }
];
// 国内DNS服务器
const domesticNameservers = [
  "https://223.5.5.5/dns-query", // 阿里DoH
  "https://doh.pub/dns-query" // 腾讯DoH
];
// 国外DNS服务器
const foreignNameservers = [
  "https://208.67.222.222/dns-query", // OpenDNS
  "https://77.88.8.8/dns-query", //YandexDNS
  "https://1.1.1.1/dns-query", // CloudflareDNS
  "https://8.8.4.4/dns-query", // GoogleDNS  
];
// DNS配置
const dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": false,
  "prefer-h3": false,
  "respect-rules": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    // 本地主机/设备
    "+.lan",
    "+.local",
    // // Windows网络出现小地球图标
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    // QQ快速登录检测失败
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
      // 追加以下条目
    "+.in-addr.arpa", 
    "+.ip6.arpa",
    "time.*.com",
    "time.*.gov",
    "pool.ntp.org",
    // 微信快速登录检测失败
    "localhost.work.weixin.qq.com"
  ],
  "default-nameserver": ["223.5.5.5","1.2.4.8"],//可修改成自己ISP的DNS
  "nameserver": [...foreignNameservers],
  "proxy-server-nameserver":[...domesticNameservers],
  "direct-nameserver":[...domesticNameservers],
  "nameserver-policy": {
  "geosite:private,cn": domesticNameservers
  }
};
// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400
};
// 规则集配置
const ruleProviders = {
  "reject": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Advertising/Advertising_Classical.yaml",
    "path": "./ruleset/blackmatrix7/reject.yaml"
  },
  "apple": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Apple/Apple_Classical.yaml",
    "path": "./ruleset/blackmatrix7/apple.yaml"
  },
  "google": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Google/Google.yaml",
    "path": "./ruleset/blackmatrix7/google.yaml"
  },
  "proxy": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/ProxyLite/ProxyLite.yaml",
    "path": "./ruleset/blackmatrix7/proxy.yaml"
  },
  "gfw": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Global/Global_Classical.yaml",
    "path": "./ruleset/blackmatrix7/gfw.yaml"
  },
  "direct": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Direct/Direct.yaml",
    "path": "./ruleset/blackmatrix7/direct.yaml"
  },
  "gov-cn": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/GovCN/GovCN.yaml",
    "path": "./ruleset/blackmatrix7/gov-cn.yaml"
  },
  "private": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    "path": "./ruleset/loyalsoldier/private.yaml"
  },
  "telegram": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Telegram/Telegram.yaml",
    "path": "./ruleset/blackmatrix7/telegram.yaml"
  },
  "lancidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/loyalsoldier/lancidr.yaml"
  },
  "applications": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/loyalsoldier/applications.yaml"
  },
  "YouTube": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/YouTube/YouTube.yaml",
    "path": "./ruleset/blackmatrix7/YouTube.yaml"
  },
  "Netflix": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Netflix/Netflix_Classical.yaml",
    "path": "./ruleset/blackmatrix7/Netflix.yaml"
  },
  "Spotify": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Spotify/Spotify.yaml",
    "path": "./ruleset/blackmatrix7/Spotify.yaml"
  },
  "twitter": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Twitter/Twitter.yaml",
    "path": "./ruleset/blackmatrix7/Twitter.yaml"
  },
  "Claude": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Claude/Claude.yaml",
    "path": "./ruleset/blackmatrix7/Claude.yaml"
  },
 "Copilot": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Copilot/Copilot.yaml",
    "path": "./ruleset/blackmatrix7/Copilot.yaml"    
  },
"Gemini": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Gemini/Gemini.yaml",
    "path": "./ruleset/blackmatrix7/Gemini.yaml"    
  },
"OpenAI": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI.yaml",
    "path": "./ruleset/blackmatrix7/OpenAI.yaml"    
  },
  "TikTok": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/TikTok/TikTok.yaml",
    "path": "./ruleset/blackmatrix7/TikTok.yaml"    
  },
  "Emby": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Emby/Emby.yaml",
    "path": "./ruleset/blackmatrix7/Emby.yaml"    
  },
  "my-Emby": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Asanagi8/shadowrocket-config@main/Ruleset/Emby.yaml",
    "path": "./ruleset/Asanagi8/my-Emby.yaml"  
  },
  "Microsoft": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/Microsoft/Microsoft.yaml",
    "path": "./ruleset/blackmatrix7/Microsoft.yaml" 
  },
};
// 规则
const rules = [
  // 1. 【核心直连】最高优先级 (防止误杀与内网失联)
  "GEOIP,LAN,全局直连,no-resolve",           // 物理层局域网兜底
  "RULE-SET,private,全局直连",               // 局域网域名/常用地址
  "RULE-SET,direct,全局直连",                // 通用直连白名单
  "RULE-SET,gov-cn,全局直连",                // 政府/教育网
  "RULE-SET,lancidr,全局直连,no-resolve",     // 局域网 IP 段

  // 2. 【广告过滤】（放在核心直连后，防止拦截了必要的系统请求）
  "RULE-SET,reject,广告过滤",

  // 3. 【系统级应用】（确保系统更新、下载、P2P 不走代理）
  "RULE-SET,applications,全局直连",

  // 4. 【流媒体服务】（精准拦截，防止被下方的通用代理规则抢走流量）
  "RULE-SET,my-Emby,Emby",                  // 你的私有 Emby 优先级最高
  "RULE-SET,Emby,Emby",                     // 公益 Emby
  "RULE-SET,TikTok,TikTok",
  "RULE-SET,Netflix,Netflix",
  "RULE-SET,YouTube,YouTube",
  "RULE-SET,Spotify,Spotify",

  // 5. 【AI 服务】（独立分组，方便针对不同 AI 切换节点）
  "RULE-SET,OpenAI,AI",
  "RULE-SET,Claude,AI",
  "RULE-SET,Gemini,AI",
  "RULE-SET,Copilot,AI",

  // 6. 【社交与服务】（常用大厂分流）
  "RULE-SET,telegram,Telegram",
  "RULE-SET,twitter,X",
  "RULE-SET,google,谷歌服务",
  "RULE-SET,apple,苹果服务",
  "RULE-SET,Microsoft,微软服务",

  // 7. 【大陆域名兜底】（在此拦截掉绝大部分国内 App 流量，提升速度）
  "GEOSITE,CN,全局直连",                     // 国内常用域名大网

  // 8. 【全球加速代理】（GFW 列表名单）
  "RULE-SET,proxy,节点选择",
  "RULE-SET,gfw,节点选择",

  // 9. 【最终兜底】（最后的物理地理位置判定）
  "GEOIP,CN,全局直连,no-resolve",           // 只要服务器在中国，强制直连
  "MATCH,漏网之鱼"                           // 剩下的海外冷门/未知流量
];

 // 添加地区分组：支持 proxies & proxy-providers
function addRegions(config) {
  let regions = [];  // 用来存储地区名称
  let usedNodes = []; // 用来存储已使用的节点名称
  let isProviderMode = !config.proxies || config.proxies.length === 0;

  // 1. 生成地区分组
  if (isProviderMode) {
    // 情况 1：处理 proxy-providers 模式
    if (!config["proxy-providers"]) return;
    const providers = Object.keys(config["proxy-providers"]);
    if (providers.length === 0) return;

    for (const region of regionConfig) {
      let regionNodes = [];
      for (const pname of providers) {
        const provider = config["proxy-providers"][pname];
        if (!provider || !provider.proxies) continue;
        for (const p of provider.proxies) {
          if (!p || !p.name) continue;
          
          if (!region.matcher) {
            // 如果没有 matcher，表示是“其他地区”，排除已指定地区的节点
            if (!usedNodes.includes(p.name)) {  // 用 usedNodes 来排除已使用的节点
              regionNodes.push(p.name);
              usedNodes.push(p.name); // 将该节点加入已使用节点列表
            }    
          } else {
            const parts = region.matcher.split("|");
            if (parts.some(m => p.name.includes(m))) {
              regionNodes.push(p.name);
              usedNodes.push(p.name); // 将该节点加入已使用节点列表
            }
          }
        }
      }
      if (regionNodes.length === 0) continue;
      config["proxy-groups"].push({
        ...groupBaseOption,
        name: region.name,
        type: "select",
        proxies: regionNodes,
        icon: region.icon,
      });
      regions.push(region.name);
    }
  } else {
    // 情况 2：处理静态 proxies 模式
    const names = config.proxies.map(p => p.name).filter(Boolean);
    for (const region of regionConfig) {
      let regionNodes = [];

      if (!region.matcher) {
        // 如果没有 matcher，表示“其他”地区，只排除已存在的地区
        regionNodes = names.filter(name => !regions.includes(name) && !usedNodes.includes(name));
      } else {
        const parts = region.matcher.split("|");
        regionNodes = names.filter(name => parts.some(m => name.includes(m)) && !usedNodes.includes(name));
      }
      if (regionNodes.length === 0) continue;
      config["proxy-groups"].push({
        ...groupBaseOption,
        name: region.name,
        type: "select",
        proxies: regionNodes,
        icon: region.icon,
      });
      regions.push(region.name);
      usedNodes.push(...regionNodes); // 将当前地区的节点加入已使用节点列表
    }
  }

  if (regions.length === 0) return;

  // 2. 统一插入“地区选择”总组
  config["proxy-groups"].splice(2, 0, {
    ...groupBaseOption,
    name: "地区选择",
    type: "select",
    proxies: regions,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Global.png",
  });

  // 3. 统一注入逻辑 (黑名单防御)
  for (const entry of config["proxy-groups"]) {
    if (!entry || !entry.proxies) continue;

    // A. 节点选择组
    if (entry.name === "节点选择") {
      entry.proxies.splice(1, 0, "地区选择");
    } 
    
    // B. 其他分流组：注入地区列表
    else if (entry.type === "select" && !entry.hasOwnProperty("include-all")) {
      
      const skipGroups = [
        "地区选择",
        "全局直连",
        "全局拦截", 
        "广告过滤", 
        "手动选择",
        ...regions // 必须包含这个，防止地区组自包含导致 loop 环路报错
      ];

      if (!skipGroups.includes(entry.name)) {
        entry.proxies.push(...regions);
      }
    }
  }
}
// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new 错误("配置文件中未找到任何代理");
  }


  // 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;

  // 覆盖原配置中的代理组
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "节点选择",
      "type": "select",
      "proxies": ["手动选择", "延迟选优", "故障转移","全局直连"],
      "filter": "^(?!.*(官网|套餐|流量|异常|剩余)).*$",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Available_1.png"
    },
    {
    ...groupBaseOption,
        name: "手动选择",
        type: "select",
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png"
    },
    {
    ...groupBaseOption,
      "name": "延迟选优",
      "type": "url-test",
      interval: test_interval,
      tolerance: test_tolerance,
      "include-all": true,
      "filter": "^(?!.*(官网|套餐|流量|异常|剩余)).*$",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Auto.png"
    },
    {
      ...groupBaseOption,
      "name": "故障转移",
      "type": "fallback",
      "include-all": true,
      "filter": "^(?!.*(官网|套餐|流量|异常|剩余)).*$",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Bypass.png"
    },
    {
      ...groupBaseOption,
      "name": "YouTube",
      "type": "select",
      "proxies": ["节点选择", "地区选择", "延迟选优", "故障转移","全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png"
    },
    {
      ...groupBaseOption,
      "name": "Telegram",
      "type": "select",
      "proxies": ["节点选择", "地区选择", "延迟选优", "故障转移", "全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram.png"
    },
    {
      ...groupBaseOption,
      "name": "AI",
      "type": "select",
      "proxies": ["节点选择", "地区选择", "延迟选优", "故障转移","全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png"
    },
    {
      ...groupBaseOption,
      "name": "TikTok",
      "type": "select",
      "proxies": ["节点选择", "地区选择", "延迟选优", "故障转移","全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/TikTok_1.png"
    },
    {
      ...groupBaseOption,
      "name": "X",
      "type": "select",
      "proxies": ["节点选择", "地区选择", "延迟选优", "故障转移","全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Twitter.png"
    },
    {
      ...groupBaseOption,
      "name": "Emby",
      "type": "select",
      "proxies": ["节点选择", "地区选择", "延迟选优", "故障转移", "全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Emby.png"
    },
    {
      ...groupBaseOption,
      "name": "Netflix",
      "type": "select",
      "proxies": ["节点选择", "地区选择", "延迟选优", "故障转移", "全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netflix.png"
    },
    {
      ...groupBaseOption,
      "name": "Spotify",
      "type": "select",
      "proxies": ["节点选择", "地区选择", "延迟选优", "故障转移","全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Spotify.png"
    },
    {
      ...groupBaseOption,
      "name": "微软服务",
      "type": "select",
      "proxies": ["节点选择", "地区选择", "延迟选优", "故障转移","全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png"
    },
    {
      ...groupBaseOption,
      "name": "苹果服务",
      "type": "select",
      "proxies": ["节点选择", "地区选择", "延迟选优", "故障转移","全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple.png"
    },
    {
      ...groupBaseOption,
      "name": "谷歌服务",
      "type": "select",
      "proxies": ["节点选择", "地区选择", "延迟选优", "故障转移","全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google_Search.png"
    },
    {
      ...groupBaseOption,
      "name": "广告过滤",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/AdBlack.png"
    },
    {
      ...groupBaseOption,
      "name": "全局直连",
      "type": "select",
      "proxies": ["DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Direct.png"
    },
    {
      ...groupBaseOption,
      "name": "全局拦截",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Reject.png"
    },
    {
      ...groupBaseOption,
      "name": "漏网之鱼",
      "type": "select",
      "proxies": ["节点选择","全局直连", "地区选择"],
      "filter": "^(?!.*(官网|套餐|流量|异常|剩余)).*$",
      "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Final.png"
    }
  ];

  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;
  // 地区分组
  addRegions(config);
  config["proxies"].forEach(proxy => {
    // 为每个节点设置 udp = true
    proxy.udp = true

  })
  // 返回修改后的配置
  return config;
}
