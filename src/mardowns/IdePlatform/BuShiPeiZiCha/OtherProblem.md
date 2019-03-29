# 不常见问题分析及处理思路

<br>

## 一、动态脚本插入一句话代码

<br>

<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;背景：</b>有些用户觉得加载云适配网站后影响了PC端的加载速度。对于此敏感用户，我们可以使用动态脚本判断当前设备进行一句话代码的添加。

```javascript

<!-- 云适配脚本式的一句话代码添加 -->
<script>
        var yspInfo = [
                {
                        name: "script",
                        id: "allmobilize",
                        charset: "utf-8",
                        src: "http://a.yunshipei.com/b2c9c795b09a756251dcab4e67ef4593/allmobilize.min.js"
                },
                {
                        name: "meta",
                        "http-equiv": "Cache-Control",
                        content : "no-siteapp",
                },
                {
                        name: "meta",
                        "http-equiv": "Cache-Control",
                        content: "no-transform"
                },
                {
                        name: "link",
                        rel : "alternate",
                        media : "handheld",
                        href: "#"
                }
        ];
        var nowViewWidth = document.documentElement.clientWidth;

        if(nowViewWidth <= 992){
                var script = document.createElement(yspInfo[0].name);
                script.id = yspInfo[0].id;
                script.charset = yspInfo[0].charset;
                script.src = yspInfo[0].src;

                var meta1 = document.createElement(yspInfo[1].name);
                meta1.setAttribute("http-equiv", yspInfo[1]["http-equiv"]);
                meta1.setAttribute("content", yspInfo[1].content);

                var meta2 = document.createElement(yspInfo[2].name);
                meta2.setAttribute("http-equiv", yspInfo[2]["http-equiv"]);
                meta2.setAttribute("content", yspInfo[2].content);

                var link = document.createElement(yspInfo[3].name);
                link.rel = yspInfo[3].rel;
                link.media = yspInfo[3].media;
                link.href = yspInfo[3].href;

                var tar = document.getElementsByTagName("head")[0].firstChild;

                document.head.insertBefore(script,tar);
                document.head.insertBefore(meta1,tar);
                document.head.insertBefore(meta2,tar);
                document.head.insertBefore(link,tar);
        }
</script>


```

<br>

## 二、同时满足多个域名/地址段的内容匹配

<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、问题描述：</b>PC端某部分内容部署在多个机房，在不同的地址段打开，则跳转到不同的IP地址，但网站本身的DOM结构是一致的。

<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、解决方案：</b>针对这种情况，我们可以在IDE模板中加入匹配多个IP或域名的正则，(\/\w.*)? 就可以都满足了。另外还需要加入域名别名。

<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、栗子：</b>中科院继续教育网 (\/\w.*)?\/\list