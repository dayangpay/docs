import{_ as l,e as p,g as t,f as d,h as a,i as e,r,o}from"./app-DafxwyWQ.js";const i={},c={id:"http头参数",tabindex:"-1"},u={class:"header-anchor",href:"#http头参数"},h={id:"路径参数",tabindex:"-1"},b={class:"header-anchor",href:"#路径参数"},v={id:"查询参数",tabindex:"-1"},k={class:"header-anchor",href:"#查询参数"};function m(g,n){const s=r("Badge");return o(),p("div",null,[n[3]||(n[3]=t("h1",{id:"代收查询",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#代收查询"},[t("span",null,"代收查询")])],-1)),n[4]||(n[4]=t("p",null,[a("GET "),t("code",null,"/api/v1/trades/:trade")],-1)),t("h3",c,[t("a",u,[t("span",null,[n[0]||(n[0]=a("HTTP头参数 ")),e(s,{type:"tip",text:"Header",vertical:"top"})])])]),n[5]||(n[5]=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"参数"),t("th",null,"说明")])]),t("tbody",null,[t("tr",null,[t("td",null,"Accept"),t("td",null,[t("code",null,"application/json")])])])],-1)),t("h3",h,[t("a",b,[t("span",null,[n[1]||(n[1]=a("路径参数 ")),e(s,{type:"tip",text:"Path",vertical:"top"})])])]),n[6]||(n[6]=d("<table><thead><tr><th>参数</th><th>类型</th><th>必填</th><th>参与签名</th><th>说明</th></tr></thead><tbody><tr><td>trade</td><td>string</td><td>是</td><td>否</td><td>大洋支付订单号 或 商户订单号</td></tr></tbody></table>",1)),t("h3",v,[t("a",k,[t("span",null,[n[2]||(n[2]=a("查询参数 ")),e(s,{type:"tip",text:"Query",vertical:"top"})])])]),n[7]||(n[7]=d(`<table><thead><tr><th>参数</th><th>类型</th><th>必填</th><th>参与签名</th><th>说明</th></tr></thead><tbody><tr><td>client_key</td><td>string</td><td>是</td><td>是</td><td>商户标识。由大洋支付颁发。</td></tr><tr><td>signature</td><td>string</td><td>是</td><td>否</td><td>签名值。</td></tr></tbody></table><h3 id="请求示例" tabindex="-1"><a class="header-anchor" href="#请求示例"><span>请求示例</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET <span class="token punctuation">\\</span></span>
<span class="line">  https://example.com/api/v1/trades/20230101000000?client_key<span class="token operator">=</span>01h6tn69wfcpy5q5x3vpb3x9me<span class="token operator">&amp;</span><span class="token assign-left variable">signature</span><span class="token operator">=</span>ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">&quot;Accept: application/json&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="响应参数" tabindex="-1"><a class="header-anchor" href="#响应参数"><span>响应参数</span></a></h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>client_key</td><td>string</td><td>商户标识。由大洋支付颁发。</td></tr><tr><td>amount</td><td>string</td><td>代收金额。单位：<code>元</code>。</td></tr><tr><td>trade_no</td><td>string</td><td>代收订单号。</td></tr><tr><td>out_trade_no</td><td>string</td><td>商户代收订单号。</td></tr><tr><td>payment_url</td><td>string</td><td>支付网址。</td></tr><tr><td>created_at</td><td>string</td><td>下单时间。UTC 时间。</td></tr><tr><td>paid_at</td><td>string</td><td>付款时间。UTC 时间。未付款订单响应 <code>null</code> 。</td></tr><tr><td>status</td><td>integer</td><td>订单状态。</td></tr></tbody></table><h4 id="订单状态状态码" tabindex="-1"><a class="header-anchor" href="#订单状态状态码"><span>订单状态状态码</span></a></h4><table><thead><tr><th>status</th><th>描述</th></tr></thead><tbody><tr><td>0</td><td>待支付</td></tr><tr><td>1</td><td>成功</td></tr></tbody></table><h3 id="响应示例" tabindex="-1"><a class="header-anchor" href="#响应示例"><span>响应示例</span></a></h3><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;client_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;01h6tn69wfcpy5q5x3vpb3x9me&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100.00&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;trade_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100000012023072123389872&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;out_trade_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1698896652712&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01T01:01:01.000000Z&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;paid_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01T01:02:03.000000Z&quot;</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9))])}const q=l(i,[["render",m],["__file","payment-query.html.vue"]]),f=JSON.parse('{"path":"/zh/guide/payment-query.html","title":"代收查询","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"HTTP头参数","slug":"http头参数","link":"#http头参数","children":[]},{"level":3,"title":"路径参数","slug":"路径参数","link":"#路径参数","children":[]},{"level":3,"title":"查询参数","slug":"查询参数","link":"#查询参数","children":[]},{"level":3,"title":"请求示例","slug":"请求示例","link":"#请求示例","children":[]},{"level":3,"title":"响应参数","slug":"响应参数","link":"#响应参数","children":[]},{"level":3,"title":"响应示例","slug":"响应示例","link":"#响应示例","children":[]}],"git":{},"filePathRelative":"zh/guide/payment-query.md"}');export{q as comp,f as data};
