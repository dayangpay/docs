import{_ as e,e as p,f as a,g as n,h as l,i as o,r as i,o as r}from"./app-DafxwyWQ.js";const c={},d={id:"业务参数",tabindex:"-1"},u={class:"header-anchor",href:"#业务参数"};function k(v,s){const t=i("Badge");return r(),p("div",null,[s[1]||(s[1]=a(`<h1 id="南非" tabindex="-1"><a class="header-anchor" href="#南非"><span>南非</span></a></h1><h2 id="代收" tabindex="-1"><a class="header-anchor" href="#代收"><span>代收</span></a></h2><h3 id="代收通道" tabindex="-1"><a class="header-anchor" href="#代收通道"><span>代收通道</span></a></h3><table><thead><tr><th>ID</th><th>说明</th></tr></thead><tbody><tr><td>1046</td><td>银行</td></tr></tbody></table><h3 id="代收下单" tabindex="-1"><a class="header-anchor" href="#代收下单"><span>代收下单</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token punctuation">\\</span></span>
<span class="line">  https://example.com/api/v1/trades <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">&quot;Accept: application/json&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-d</span> <span class="token string">&#39;{</span>
<span class="line">    &quot;client_key&quot;: &quot;01h6tn69wfcpy5q5x3vpb3x9me&quot;,</span>
<span class="line">    &quot;amount&quot;: &quot;100.00&quot;,</span>
<span class="line highlighted">    &quot;channel_id&quot;: &quot;1046&quot;,</span>
<span class="line">    &quot;out_trade_no&quot;: &quot;20230101000000&quot;,</span>
<span class="line">    &quot;notify_url&quot;: &quot;https://your-domain.com/webhook&quot;,</span>
<span class="line">    &quot;signature&quot;: &quot;ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082&quot;</span>
<span class="line">  }&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;client_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;01h6tn69wfcpy5q5x3vpb3x9me&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100.00&quot;</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">&quot;trade_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100000012023072123389872&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;out_trade_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20230101000000&quot;</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">&quot;payment_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com/cashier&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01T01:01:01.000000Z&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代收查单" tabindex="-1"><a class="header-anchor" href="#代收查单"><span>代收查单</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET <span class="token punctuation">\\</span></span>
<span class="line">  https://example.com/api/v1/trades/20230101000000?client_key<span class="token operator">=</span>01h6tn69wfcpy5q5x3vpb3x9me<span class="token operator">&amp;</span><span class="token assign-left variable">signature</span><span class="token operator">=</span>ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">&quot;Accept: application/json&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;client_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;01h6tn69wfcpy5q5x3vpb3x9me&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100.00&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;trade_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100000012023072123389872&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;out_trade_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1698896652712&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01T01:01:01.000000Z&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;paid_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01T01:02:03.000000Z&quot;</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代付" tabindex="-1"><a class="header-anchor" href="#代付"><span>代付</span></a></h2><h3 id="代付通道" tabindex="-1"><a class="header-anchor" href="#代付通道"><span>代付通道</span></a></h3><table><thead><tr><th>ID</th><th>说明</th></tr></thead><tbody><tr><td>5052</td><td>银行</td></tr></tbody></table>`,13)),n("h3",d,[n("a",u,[n("span",null,[s[0]||(s[0]=l("业务参数 ")),o(t,{type:"warning",text:"extra",vertical:"top"})])])]),s[2]||(s[2]=a(`<p><code>extra</code></p><table><thead><tr><th>参数</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>bank_code</td><td>是</td><td><a href="#%E9%93%B6%E8%A1%8C%E7%BC%96%E7%A0%81">银行编码</a></td></tr></tbody></table><h3 id="代付下单" tabindex="-1"><a class="header-anchor" href="#代付下单"><span>代付下单</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token punctuation">\\</span></span>
<span class="line">  https://example.com/api/v1/transfers <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">&quot;Accept: application/json&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-d</span> <span class="token string">&#39;{</span>
<span class="line">    &quot;client_key&quot;: &quot;01hcd0d0c2qh9wy5efm5sxrk38&quot;,</span>
<span class="line">    &quot;amount&quot;: &quot;100.00&quot;,</span>
<span class="line highlighted">    &quot;channel_id&quot;: &quot;5052&quot;,</span>
<span class="line">    &quot;out_transfer_no&quot;: &quot;20230101000000&quot;,</span>
<span class="line">    &quot;notify_url&quot;: &quot;https://your-domain.com/webhook&quot;,</span>
<span class="line">    &quot;payee_account&quot;: &quot;1234567890&quot;,</span>
<span class="line">    &quot;payee_name&quot;: &quot;Sammy Shark&quot;,</span>
<span class="line highlighted">    &quot;extra&quot;: &quot;{\\&quot;bank_code\\&quot;:\\&quot;10010\\&quot;}&quot;,</span>
<span class="line">    &quot;signature&quot;: &quot;ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082&quot;</span>
<span class="line">  }&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;client_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;01hcd0d0c2qh9wy5efm5sxrk38&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100.00&quot;</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">&quot;transfer_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100000012023072123389872&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;out_transfer_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20230101000000&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;channel_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5052&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;payee_account&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234567890&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;payee_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sammy Shark&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01T01:01:01.000000Z&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代付查单" tabindex="-1"><a class="header-anchor" href="#代付查单"><span>代付查单</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET <span class="token punctuation">\\</span></span>
<span class="line">  https://example.com/api/v1/transfers/20230101000000?client_key<span class="token operator">=</span>01h6tn69wfcpy5q5x3vpb3x9me<span class="token operator">&amp;</span><span class="token assign-left variable">signature</span><span class="token operator">=</span>ba5df26991273c746960ce5238c6479e8ca6116381ac46cea96ffd30fafed082 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-H</span> <span class="token string">&quot;Accept: application/json&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;client_key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;01hcd0d0c2qh9wy5efm5sxrk38&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100.00&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;transfer_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100000012023072123389872&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;out_transfer_no&quot;</span><span class="token operator">:</span> <span class="token string">&quot;20230101000000&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;channel_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5052&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;payee_account&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234567890&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;payee_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sammy Shark&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;created_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01T01:01:01.000000Z&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;paid_at&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-01-01T01:02:03.000000Z&quot;</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="银行编码" tabindex="-1"><a class="header-anchor" href="#银行编码"><span>银行编码</span></a></h3><p><code>extra.bank_code</code></p><table><thead><tr><th>银行编码</th><th>银行名称</th></tr></thead><tbody><tr><td>10010</td><td>Absa</td></tr><tr><td>10011</td><td>NedBank</td></tr><tr><td>10012</td><td>Capitec</td></tr><tr><td>10013</td><td>Standard</td></tr><tr><td>10014</td><td>Fnb</td></tr><tr><td>10015</td><td>African Bank</td></tr><tr><td>10016</td><td>Bidvest Bank</td></tr><tr><td>10017</td><td>Discovery</td></tr><tr><td>10018</td><td>FirstRand Bank</td></tr><tr><td>10019</td><td>Grindrod Bank</td></tr><tr><td>10020</td><td>Imperial Bank</td></tr><tr><td>10021</td><td>Investec Bank</td></tr><tr><td>10022</td><td>Sasfin Bank</td></tr><tr><td>10023</td><td>Ubank</td></tr><tr><td>10024</td><td>TymeBank</td></tr><tr><td>10025</td><td>Mercantile Bank</td></tr><tr><td>10026</td><td>Albaraka Bank</td></tr><tr><td>10027</td><td>HBZ Bank</td></tr><tr><td>10028</td><td>Habib Overseas Bank</td></tr><tr><td>10029</td><td>Wesbank</td></tr><tr><td>10030</td><td>Rand Merchant Bank</td></tr><tr><td>10031</td><td>Bank of Athens</td></tr><tr><td>10032</td><td>Access Bank</td></tr></tbody></table>`,11))])}const h=e(c,[["render",k],["__file","south-africa.html.vue"]]),m=JSON.parse('{"path":"/zh/reference/south-africa.html","title":"南非","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"代收","slug":"代收","link":"#代收","children":[{"level":3,"title":"代收通道","slug":"代收通道","link":"#代收通道","children":[]},{"level":3,"title":"代收下单","slug":"代收下单","link":"#代收下单","children":[]},{"level":3,"title":"代收查单","slug":"代收查单","link":"#代收查单","children":[]}]},{"level":2,"title":"代付","slug":"代付","link":"#代付","children":[{"level":3,"title":"代付通道","slug":"代付通道","link":"#代付通道","children":[]},{"level":3,"title":"业务参数","slug":"业务参数","link":"#业务参数","children":[]},{"level":3,"title":"代付下单","slug":"代付下单","link":"#代付下单","children":[]},{"level":3,"title":"代付查单","slug":"代付查单","link":"#代付查单","children":[]},{"level":3,"title":"银行编码","slug":"银行编码","link":"#银行编码","children":[]}]}],"git":{},"filePathRelative":"zh/reference/south-africa.md"}');export{h as comp,m as data};
