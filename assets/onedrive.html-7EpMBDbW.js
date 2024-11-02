import{_ as d,a as l,b as c,c as h}from"./od_share_add-tOIa4ODi.js";import{_,r as i,o as u,c as p,b as e,e as n,a as t,w as m,f as o}from"./app-n186Splh.js";const b={},v=e("h1",{id:"onedrive-分享",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#onedrive-分享","aria-hidden":"true"},"#"),n(" OneDrive / 分享")],-1),g=e("br",null,null,-1),f=e("h2",{id:"正常-onedrive-挂载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#正常-onedrive-挂载","aria-hidden":"true"},"#"),n(),e("strong",null,"正常 OneDrive 挂载")],-1),x={class:"hint-container tip"},k=e("p",{class:"hint-container-title"},"提示",-1),C={href:"https://alist.nn.ci/tool/onedrive/request",target:"_blank",rel:"noopener noreferrer"},K=e("h3",{id:"创建应用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#创建应用","aria-hidden":"true"},"#"),n(),e("strong",null,"创建应用")],-1),q=e("blockquote",null,[e("p",null,"你也可以选择跳过此步，使用默认提供的client，但是需要组织管理员批准。")],-1),F=e("li",null,"在打开的页面，选择所在区域，点击创建应用",-1),W={href:"https://alist.nn.ci/tool/onedrive/callback",target:"_blank",rel:"noopener noreferrer"},R=e("code",null,"client_id",-1),P=e("br",null,null,-1),E=e("img",{src:d,alt:"client_id"},null,-1),A=e("li",null,[n('注册好应用程序之后，选择"证书和密码"，点击"新客户端密码"，输入一串密码，选择时间为最长的那个，点击"添加"'),e("br"),n(" （注：在添加之后输入的密码之后会消失，请记录下来 "),e("code",null,"client_secret"),n(" 的值）"),e("br"),e("img",{src:l,alt:"client_secret"})],-1),J=e("li",null,[n('选择 "API 权限"，点击 "Microsoft Graph"，在"选择权限"中输入 '),e("code",null,"file"),n("，勾选 "),e("code",null,"Files.read"),n('（注：Files.read 是只读最小权限，图中权限较大，也同样可以），点击"确定"'),e("br"),e("img",{src:c,alt:"api"})],-1),S=e("h3",{id:"获取刷新令牌",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#获取刷新令牌","aria-hidden":"true"},"#"),n(),e("strong",null,"获取刷新令牌")],-1),M=e("code",null,"client_id",-1),N=e("code",null,"client_secret",-1),U={href:"https://alist.nn.ci/tool/onedrive/request",target:"_blank",rel:"noopener noreferrer"},z=o('<h3 id="获取-sharepoint-site-id" tabindex="-1"><a class="header-anchor" href="#获取-sharepoint-site-id" aria-hidden="true">#</a> <strong>获取 SharePoint site_id</strong></h3><p>如果需要挂载 SharePoint，完成上一步后，在显示刷新令牌的界面会出现一个输入站点地址，输入站点地址后点击获取 <code>site_id</code> 即可。</p><h3 id="添加账号" tabindex="-1"><a class="header-anchor" href="#添加账号" aria-hidden="true">#</a> <strong>添加账号</strong></h3><p>将上述过程中获取得到的值依次填入即可。</p><h3 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id" aria-hidden="true">#</a> <strong>根文件夹ID</strong></h3><p>默认为 <code>/</code>，如果需要自定义，就填路径就行，从根路径开始，和本地路径一样，比如 <code>/test</code></p><h4 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式" aria-hidden="true">#</a> <strong>默认使用的下载方式</strong></h4>',7),D=o('<br><h2 id="onedrive-分享-1" tabindex="-1"><a class="header-anchor" href="#onedrive-分享-1" aria-hidden="true">#</a> <strong>Onedrive 分享</strong></h2><p><img src="'+h+`" alt="api"></p><br><h3 id="链接" tabindex="-1"><a class="header-anchor" href="#链接" aria-hidden="true">#</a> <strong>链接</strong></h3><p>分享链接是这样的可以挂载，来自E3、E5、A1、A1P等</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>https://connecthkuhk-my.sharepoint.com/:f:/g/personal/jhyang13_connect_hku_hk/EsEgHtGOWbJImxop6tF15FIBIH-ihrjuDclbrbmwWfY_RA?e=s6fitN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是OneDrive个人版的就不行，链接如下</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>https://onedrive.live.com/?cid=64EA5FCC7735E8C6&amp;id=64EA5FCC7735E8C6%2117289
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><h3 id="密码" tabindex="-1"><a class="header-anchor" href="#密码" aria-hidden="true">#</a> <strong>密码</strong></h3><p>就是提取码，如果有就写，如果没有就不用谢</p><br><h4 id="默认使用的下载方式-1" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式-1" aria-hidden="true">#</a> <strong>默认使用的下载方式</strong></h4>`,14);function I(L,Q){const s=i("RouterLink"),r=i("ExternalLinkIcon"),a=i("Mermaid");return u(),p("div",null,[v,g,f,e("div",x,[k,e("p",null,[n("如果你的账号不支持 API，（比如学校账号没有验证管理员，或者管理员禁用了 API），那么你也可以通过 WebDAV 挂载。 有关详细信息，请参阅 "),t(s,{to:"/zh/guide/drivers/webdav.html"},{default:m(()=>[n("WebDAV 页面")]),_:1})])]),e("p",null,[n("首先打开 "),e("a",C,[n("https://alist.nn.ci/tool/onedrive/request"),t(r)])]),K,q,e("ul",null,[F,e("li",null,[n('登陆后选择"注册应用程序"，输入"名称"，选择"任何组织目录中的账户和个人"（注意这里不要看位置选择而是看文字，部分人可能是中间那个选项，不要选成单一租户或者其他选项，否则会导致登陆时出现问题），输入重定向 URL 为 '),e("a",W,[n("https://alist.nn.ci/tool/onedrive/callback"),t(r)]),n(" ，点击注册即可，然后可以得到 "),R,P,E]),A,J]),S,e("p",null,[n("将上一步骤中获得的 "),M,n(" 和 "),N,n(" 填入 "),e("a",U,[n("https://alist.nn.ci/tool/onedrive/request"),t(r)]),n(' ，点击"获取刷新令牌"即可')]),z,t(a,{id:"mermaid-72",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="}),D,t(a,{id:"mermaid-103",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFZEOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqQ90QiqPS3N3NTcFG6CsbExqgkmBRUQbaVJ6UWJBRkKmSmphgrRCrFg0WRDMJWalwLlRj+bs+bZnF1Pdi9+PqEt1srKqjg/NzU5J7G42NYW4mVbW1u7RKNooLefdWx/sW7f0yXtULNAqlxS0xTgWmBOtDQDK0gyjIaYGxrkE6urB9T4sqFTTxeXaZnJ2UAtCkp6evopRZllqUXF+sn5ubn5eXoZJbk5yuWpSSmJZbrP1057PnWpEpIeYMgSqQcAEWS3Rg=="})])}const B=_(b,[["render",I],["__file","onedrive.html.vue"]]);export{B as default};
