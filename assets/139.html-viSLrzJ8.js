import{_ as n,a as s,b as d,c as h,d as c,e as u,f as p,g as m}from"./add_new_personal-n-JmiVmR.js";import{_ as g,r,o as f,c as w,b as e,e as o,a as t,f as l}from"./app-n186Splh.js";const y={},b=e("h1",{id:"_139yun",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_139yun","aria-hidden":"true"},"#"),o(" 139Yun")],-1),_={href:"https://yun.139.com/",target:"_blank",rel:"noopener noreferrer"},v=l('<ul><li>⚠️ The alist version must be greater than <code>v3.18.0</code> to use this tutorial (excluding v3.18.0)</li></ul><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Update the method of authentication, please get <code>Authorization</code> to fill in</p></div><br><h2 id="root-folder-id" tabindex="-1"><a class="header-anchor" href="#root-folder-id" aria-hidden="true">#</a> <strong>Root folder ID</strong></h2><ul><li><p>Personal cloud：It can be left blank and it will be filled in automatically. All will be listed, covering 18 items (check it yourself). Normal files are in <strong>My Folder</strong>.</p><ul><li>If you fill in the folder ID, the normal root directory folder is listed (this method is recommended)</li></ul></li><li><p>Family cloud：The root directory is empty is all files</p><ul><li>If you want to list a folder separately, get the directory ID method in the picture of the <a href="#family-cloud">family cloud</a> below</li></ul></li><li><p>Personal new：<code>/</code>，It can be left blank and it will be automatically filled in and everything will be listed.</p><ul><li>If you want to list a folder separately, get the directory ID method in the picture of the <a href="#personal-new">Personal new</a> below</li></ul></li></ul><br><h2 id="proxy-range" tabindex="-1"><a class="header-anchor" href="#proxy-range" aria-hidden="true">#</a> <strong>Proxy Range</strong></h2><p>You need to enable <code>Web Proxy</code> or<code> Webdav Native Proxy</code> to take effect</p>',8),x=e("code",null,"alias",-1),k=e("code",null,"139Yun",-1),C=e("code",null,"AList V3",-1),I={href:"https://github.com/alist-org/alist/pull/6496#issue-2309839607",target:"_blank",rel:"noopener noreferrer"},P=l('<br><h2 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> <strong>Type</strong></h2><ol><li><p>Personal Cloud: Choose Personal Cloud</p></li><li><p>Family Cloud: Choose Family Cloud</p></li><li><p>Personal new：New API</p><ul><li>Only newly registered accounts are available. You can distinguish them by searching for <code>getDisk</code> in the request. If it can be found, it is the old version. If it cannot be found, it is the new version.</li></ul></li></ol><p>If you have a new version of the API, you will not be able to use the <code>Personal Cloud</code> type. Although there is no error message, the file will not be loaded.</p><p>If there is a <code>getDisk</code> request, the <code>New Personal</code> type cannot be used, otherwise it will prompt <code>User does not exist</code></p><br><h2 id="other" tabindex="-1"><a class="header-anchor" href="#other" aria-hidden="true">#</a> <strong>Other</strong></h2><ol><li><p>Other information is taken from the request, which has changed from cookie to obtaining <code>Authorization</code></p><ol><li>The new personal cloud can be obtained in another way. See the picture example of <a href="#personal-new">Personal new</a></li></ol></li><li><p>If you can&#39;t find the load on the bottom of the request information, go to the top `on the top of the upper row, marked the purple highlight</p></li></ol><br><h3 id="cloud-id" tabindex="-1"><a class="header-anchor" href="#cloud-id" aria-hidden="true">#</a> <strong>Cloud ID</strong></h3><p>Personal cloud does not need to fill in, <strong>Family cloud is dedicated</strong>.</p><br><h3 id="search-keywords" tabindex="-1"><a class="header-anchor" href="#search-keywords" aria-hidden="true">#</a> <strong>Search keywords</strong></h3><p>Pay attention to the keywords, use it below to get <strong><code>authorization</code></strong></p><ul><li>Personal Cloud：<strong>getDisk</strong></li><li>Family Cloud：<strong>queryContentList</strong></li></ul><br><h3 id="personal-cloud" tabindex="-1"><a class="header-anchor" href="#personal-cloud" aria-hidden="true">#</a> <strong>Personal cloud：</strong></h3><div class="image-preview"><img src="'+n+'" alt="Other Browser" title="Other Browser"><img src="'+s+'" alt="Chrome Browser" title="Chrome Browser"></div><br><p>Note: Family cloud does not support renames, movement, copying and uploading.</p><h3 id="family-cloud" tabindex="-1"><a class="header-anchor" href="#family-cloud" aria-hidden="true">#</a> <strong>Family cloud：</strong></h3><p>Note: Family cloud does not support renames, movement, copying and uploading.</p><div class="image-preview"><img src="'+d+'" alt="Other Browser" title="Other Browser"><img src="'+h+'" alt="Chrome Browser" title="Chrome Browser"></div>',23),F={class:"hint-container details"},B=e("summary",null,"Teaching video",-1),A=e("p",null,"Although the video is V2 version, the way to obtain the directory ID and the cloud ID is the same.",-1),D={href:"https://www.bilibili.com/video/BV1US4y1w79a",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,[o("From the previous way to get cookies, now replaced it with "),e("code",null,"Authorization"),o("，You can see the "),e("a",{href:"#alist-fill-in-examples"},"Fill in the Example"),o(" tutorial below")],-1),N=l('<br><h3 id="personal-new" tabindex="-1"><a class="header-anchor" href="#personal-new" aria-hidden="true">#</a> <strong>Personal new：</strong></h3><div class="image-preview"><img src="'+c+'" alt="Personal new" title="Personal new"></div><br><h3 id="alist-fill-in-examples" tabindex="-1"><a class="header-anchor" href="#alist-fill-in-examples" aria-hidden="true">#</a> <strong>AList fill in examples：</strong></h3><ul><li><mark><code>Authorization</code>Just fill in the content of the start after the basic space</mark></li><li>The new personal cloud folder ID will automatically change after you enter the folder. Just open whichever folder you need, and then get the value of <code>currentCatalogID</code><sup>Figure_3</sup></li></ul><div class="image-preview"><img src="'+u+'" alt="Personal Cloud" title="Personal Cloud"><img src="'+p+'" alt="Family Cloud" title="Family Cloud"><img src="'+m+'" alt="Personal new" title="Personal new"></div><br><h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used" aria-hidden="true">#</a> <strong>The default download method used</strong></h3>',9);function O(z,Y){const i=r("ExternalLinkIcon"),a=r("Mermaid");return f(),w("div",null,[b,e("p",null,[o("Cloud disk address："),e("strong",null,[e("a",_,[o("https://yun.139.com/"),t(i)])])]),v,e("ul",null,[e("li",null,[o("Currently only applicable to："),x,o("、"),k,o("、"),C,e("ul",null,[e("li",null,[o("Function Description："),e("strong",null,[e("a",I,[o("https://github.com/alist-org/alist/pull/6496#issue-2309839607"),t(i)])])])])])]),P,e("details",F,[B,A,e("p",null,[e("strong",null,[e("a",D,[o("https://www.bilibili.com/video/BV1US4y1w79a"),t(i)])])]),S]),N,t(a,{id:"mermaid-216",code:"eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"})])}const T=g(y,[["render",O],["__file","139.html.vue"]]);export{T as default};
