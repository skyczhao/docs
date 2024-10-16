import{_ as d,r as o,o as h,c as g,b as n,e as t,a,w as e,f as i}from"./app-yy2ACqkv.js";const _={},k=i('<h1 id="通用项" tabindex="-1"><a class="header-anchor" href="#通用项" aria-hidden="true">#</a> 通用项</h1><h2 id="挂载路径" tabindex="-1"><a class="header-anchor" href="#挂载路径" aria-hidden="true">#</a> <strong>挂载路径</strong></h2><p>唯一标识，即要挂载到的位置，如果要挂载到根目录，就是 <code>/</code></p><h2 id="序号" tabindex="-1"><a class="header-anchor" href="#序号" aria-hidden="true">#</a> <strong>序号</strong></h2><p>当有多个账户时，用于排序，越小越靠前，可以填写负数</p><h2 id="备注" tabindex="-1"><a class="header-anchor" href="#备注" aria-hidden="true">#</a> <strong>备注</strong></h2><p>随便你想填什么，只是提醒你这个存储是什么</p><h2 id="启用签名" tabindex="-1"><a class="header-anchor" href="#启用签名" aria-hidden="true">#</a> <strong>启用签名</strong></h2><p>对文件进行签名加密(不会需要密码)，仅对本驱动生效，如果别的没启用签名也没设置<code>签名全部</code>和<code>元信息加密</code>其他的不会进行签名</p><p>使用场景：不想开启全部签名，也不想设置元信息加密，只想对某驱动进行签名加密防止被扫</p><p>影响范围：<code>设置--&gt;全局--&gt;签名所有</code> &gt; <code>元信息目录加密</code> &gt; <code>单驱动签名</code></p><h2 id="缓存过期" tabindex="-1"><a class="header-anchor" href="#缓存过期" aria-hidden="true">#</a> <strong>缓存过期</strong></h2><p>目录结构的缓存时间。</p><h2 id="web-代理" tabindex="-1"><a class="header-anchor" href="#web-代理" aria-hidden="true">#</a> <strong>Web 代理</strong></h2>',14),b=i('<hr><ul><li>Web代理：是使用网页时候的策略，默认为本地代理，如果填写了代理URL并且启用了Web代理使用的是代理URL</li><li>WebDAV策略：是在使用WebDAV功能时候的选项， <ul><li>如果有302选项默认为302，如果没有302选项默认为本地代理，如果要使用代理URL请填写并且手动切换到代理URL策略</li></ul></li></ul><p>两者是不同的配置</p><h2 id="webdav-策略" tabindex="-1"><a class="header-anchor" href="#webdav-策略" aria-hidden="true">#</a> <strong>WebDAV 策略</strong></h2><ul><li>302 重定向：重定向到真实链接</li><li>使用代理 URL：重定向到代理 URL</li><li>本机代理：直接通过本地中转返回数据（最佳兼容性）</li></ul><hr><ul><li>302重定向：虽然不会消耗流量，但是不建议共享使用，有封禁账户的风险</li><li>代理URL：会消耗搭建代理URL的流量</li><li>本地代理：会消耗搭建AList设备的流量</li></ul><h3 id="三种模式说明" tabindex="-1"><a class="header-anchor" href="#三种模式说明" aria-hidden="true">#</a> <strong>三种模式说明</strong></h3>',8),m=n("h2",{id:"下载代理-url",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下载代理-url","aria-hidden":"true"},"#"),t(),n("strong",null,"下载代理 URL")],-1),f=n("p",null,"开启代理时不填写此字段，默认使用本机进行传输。提供了下面两种代理方式：",-1),x=n("p",null,"可以使用 Cloudflare Workers 做代理，这里填写 Workers 地址即可。",-1),v={href:"https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js",target:"_blank",rel:"noopener noreferrer"},L=n("ul",null,[n("li",null,[t("ADDRESS: 你的 AList 地址，必须加上协议头，后面不能跟 "),n("code",null,"/"),t("。如 "),n("code",null,"https://pan.nn.ci"),t("；")]),n("li",null,"TOKEN: 在 AList 管理页面中进入“其他设置”得到；"),n("li",null,[t("WORKER_ADDRESS: 你的 Worker 地址，通常与 "),n("strong",null,"下载代理URL"),t(" 相同。")])],-1),R=n("p",null,[t("⚠️ Cloudflare Workers 免费CDN支持兼容(不论国内还是国外)的只有 "),n("strong",null,"http80端口"),t(" 和 "),n("strong",null,"https443端口"),t("，来自群友测试")],-1),U=n("ul",null,[n("li",null,[t("在Alist后台挂载配置时 填写 "),n("strong",null,"下载代理URL"),t(" 时候的 链接结尾 不可以带 "),n("code",null,"/")])],-1),w={href:"https://anwen-anyi.github.io/index/11-durl.html",target:"_blank",rel:"noopener noreferrer"},E=n("strong",null,"有拆解详细",-1),A=n("p",null,null,-1),S={href:"https://github.com/alist-org/alist-proxy/releases",target:"_blank",rel:"noopener noreferrer"},W=n("code",null,"./alist-proxy -help",-1),y={href:"https://www.bilibili.com/video/BV17N411S7fg/",target:"_blank",rel:"noopener noreferrer"},N=n("strong",null,"视频教程",-1),T=i('<p>你甚至可以开发自己的代理程序，一般步骤是：</p><ul><li>下载时会请求 <code>PROXY_URL/path?sign=sign_value</code></li><li>在代理程序中验证 sign，sign 的计算方法为：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> to_sign <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>expireTimeStamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n<span class="token keyword">const</span> _sign <span class="token operator">=</span> <span class="token function">safeBase64</span><span class="token punctuation">(</span><span class="token function">hmac_sha256</span><span class="token punctuation">(</span>to_sign<span class="token punctuation">,</span> <span class="token constant">TOKEN</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> sign <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>_sign<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>expireTimeStamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),D=n("code",null,"TOKEN",-1),O=i('<ul><li>验证签名正确后，请求 <code>HOST/api/fs/link</code>，可以得到文件的 URL 和要携带的请求头</li><li>使用信息请求和返回</li></ul><h2 id="排序相关" tabindex="-1"><a class="header-anchor" href="#排序相关" aria-hidden="true">#</a> <strong>排序相关</strong></h2><ul><li>排序方式：按什么排序</li><li>排序方向：排序方向是升序还是降序</li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>有些驱动器使用自己的排序方法，可能会有所不同。</p></div><h2 id="提取文件夹" tabindex="-1"><a class="header-anchor" href="#提取文件夹" aria-hidden="true">#</a> <strong>提取文件夹</strong></h2><ul><li>提取到前面：排序时将所有文件夹放在前面</li><li>提取到后面：排序时将所有文件夹放在后面</li></ul>',6);function I(V,B){const c=o("RouterLink"),p=o("Mermaid"),s=o("ExternalLinkIcon"),u=o("Tabs");return h(),g("div",null,[k,n("p",null,[t("网页预览、下载和直接链接是否通过中转。如果你打开此项，建议你设置"),a(c,{to:"/zh/config/configuration.html#site_url"},{default:e(()=>[t("site_url")]),_:1}),t("，以帮助alist更好的工作。")]),b,a(p,{id:"mermaid-109",code:"eJylUU1LAlEUXTu/YpYGDUTtggIrF4GLEFpZi4giQQpMaNEEY35nfpFlqaChaeBHimKT49SP6d03M/+i9+apuZA2DQzcd949555znyAInM/t8xyt8itLy0YkAe08pDPfkh8pFS0d3vV6SI2LTSh2GMJRyrHn7OLw5MDr4x1OzmK3atlXHH3HdwmkFm0O97lP7wQIZtvZ5vdOeb1eg1RGK8gQ6hGItaEhQR7pNatw8gVnBxDtQEZFShVGEtTjOFbXn28XOIvNZWVtC/ucZcOK1DIBN11jk04HQbcuZ21eEVtra+s28ts5nny0ErVCn8xBSpKJoVFZU56IGJJbRq6Pc2WkKEi9x4mSLuWoN7IUPaAiOa6rKlTz8NWAThcXY6wWN5i0IKyLTBFCURLVkPxUd2JO3KQNEE5o2e4U1NUmXYo53lzSzBl9xCGdXDSN0claPmhIJRjWaCOkHiDcQ8Pk9IWM6wqSJa3xhuQbRiDBxnoT5t9WcboFytB8OcLQ259QjYhbv67n3f8/wIzqTASzPzggfBpnXhDuB/KHmYI="}),m,f,a(u,{id:"116",data:[{id:"cloudflare workers"},{id:"通用二进制"}]},{title0:e(({value:l,isActive:r})=>[t("cloudflare workers")]),title1:e(({value:l,isActive:r})=>[t("通用二进制")]),tab0:e(({value:l,isActive:r})=>[x,n("p",null,[t("Workers 代码可以在 "),n("a",v,[t("https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js"),a(s)]),t(" 找到，实际使用时需要替换其中的这两个变量：")]),L,R,U,n("p",null,[t("若看不懂"),n("a",w,[E,a(s)]),t("的教程")]),A]),tab1:e(({value:l,isActive:r})=>[n("p",null,[t("也可以使用另一台机器进行代理，在 "),n("a",S,[t("https://github.com/alist-org/alist-proxy/releases"),a(s)]),t(" 下载程序并通过 "),W,t(" 查看使用方法。")]),n("p",null,[t("如果不懂有详细"),n("a",y,[N,a(s)])])]),_:1}),T,n("p",null,[D,t("即管理员账户的"),a(c,{to:"/zh/config/other.html#token"},{default:e(()=>[t("token")]),_:1}),t(".")]),O])}const Q=d(_,[["render",I],["__file","common.html.vue"]]);export{Q as default};