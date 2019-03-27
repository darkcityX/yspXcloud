# 定制化样式组件封装

<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前言：在Xcloud平台实际项目开发时,IDE平台所提供的组件已经可以很大便利性的提高了适配人员的开发效率，但针对大多少定制化不高的项目，仍有大量需要我们重复进行书写的代码。所以面对很多复用性的样式进行了封装,只需调用less函数跟参即可进行复用。<br>

<br>

## 一、页头组件二次封装

<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明：<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、必须注意先进行全局基础样式的引入<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、在调用时需要注意组件主题及参数的设定<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、与侧滑横排组件配合使用时,当有搜索小图标时且菜单栏小图标在头部时,需要设定其的偏移量<br>

<br>

<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;less函数封装:</b>

```less

/*
 * 页头组件二次封装
 * 说明：调用less函数不可跳过传参
 * 约束：主题——简约风格;其他参数默认
 * type: 类型——可选封装组件类型
 * [
 *   { // 类型1 ———— 白底主色调icon   
 *      type1           参数说明：白底主色调icon 【必填】
 *      @iconC          参数说明: 图标颜色 【选填】 默认@mc主色调 单位 rgba/16进制
 *      @blockHeight    参数说明：头部整体高度 【选填】 默认60px    单位 px/rem/em; 
 *      @logoWidth      参数说明：logo宽度占比 【选填】 默认60%     单位 %
 *      @offsetSearch:  参数说明：第一个icon偏移偏移量 【选填】 默认14% 单位 %
 *   },
 *   { // 类型2 ———— 主色调底icon白色
 *      type1           参数说明：白底主色调icon 【必填】
 *      @iconC          参数说明: 图标颜色 【选填】 默认@mc主色调 单位 rgba/16进制
 *      @blockHeight    参数说明：头部整体高度 【选填】 默认60px    单位 px/rem/em; 
 *      @logoWidth      参数说明：logo宽度占比 【选填】 默认60%     单位 %
 *      @offsetSearch:  参数说明：第一个icon偏移偏移量 【选填】 默认14% 单位 %
 *   },
 *   { // 类型3 ———— 全背景logo
 *      type3           参数说明：白底主色调icon 【必填】
 *      @bgImg          参数说明：背景地址(取附加资源中的图片路径即可) 【必填】 接收string类型
 *      @iconC          参数说明: 图标颜色 【选填】 默认@mc主色调 单位 rgba/16进制
 *      @blockHeight    参数说明：头部整体高度 【选填】 默认60px    单位 px/rem/em; 
 *      @logoWidth      参数说明：logo宽度占比 【选填】 默认60%     单位 %
 *      @offsetSearch:  参数说明：第一个icon偏移偏移量 【选填】 默认14% 单位 %
 *   },
 * ]
**/
.DheaderPublicSet(@blockHeight,@logoWidth,@offsetSearch){
    .resize;
    height: @blockHeight;
    // logo
    .am-header-left{
        position: static;
        height: @blockHeight;
        a{
            padding-left: 10px;
            display: flex;
            align-items: center;
            height: @blockHeight;
            img{
                width: @logoWidth;
                height: auto;
            }
        }
    }
    // icon
    .am-header-right{
        right: @offsetSearch;
        height: @blockHeight;
        a{
            display: block;
            height: @blockHeight;
            overflow: hidden;
            i{
                display: block;
                height: @blockHeight;
                line-height: @blockHeight;
                &:before{
                    font-size: 20px;
                }
            }
        }
    }    
}
.DheaderPublicType1(@iconC){ // 头部组件类型1——白底主色调icon
    background-color: #fff;
    .am-header-right{
        i{
            &:before{
                color: @iconC;
            }
        }
    }
}
.DheaderPublicType2(@iconC){ // 头部组件类型2——主色调底icon白色
    background-color: @iconC;
    .am-header-right{
        i{
            &:before{
                color: #fff;
            }
        }
    }
}
.DheaderPublicType3(@bgImg,@iconC){ // 头部组件类型3——全背景logo:增加参数背景图 string类型
    background: url(@bgImg) no-repeat center center;
    background-size: 100%;   
    .am-header-right{
        i{
            &:before{
                color: @iconC;
            }
        }
    }
}


.DheaderPublic(@type,@iconC:@mc,@blockHeight:60px,@logoWidth:60%,@offsetSearch:14%) when ( @type = type1 ){
    .DheaderPublicType1(@iconC);
    .DheaderPublicSet(@blockHeight,@logoWidth,@offsetSearch);    
}
.DheaderPublic(@type,@iconC:@mc,@blockHeight:60px,@logoWidth:60%,@offsetSearch:14%) when ( @type = type2 ){
    .DheaderPublicType2(@iconC);
    .DheaderPublicSet(@blockHeight,@logoWidth,@offsetSearch);    
}
.DheaderPublic(@type,@bgImg,@iconC:@mc,@blockHeight:60px,@logoWidth:60%,@offsetSearch:14%) when ( @type = type3 ){
    .DheaderPublicType3(@bgImg,@iconC);
    .DheaderPublicSet(@blockHeight,@logoWidth,@offsetSearch);    
}


```

<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;方法调用:</b>

```less

.Dheader-1{ // type1 调用
    .DheaderPublic(type1);
}

.Dheader-2{ // type2 调用
    .DheaderPublic(type2,@mc,80px,80%,4%);    
}

.Dheader-3{ // type3 调用
   .DheaderPublic(type3,"logo2.png",red,60px,60%,4%); 
}


```

<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;效果展示:</b>

<br>

![规范9](./../../../assets/images/IdePlatformImages/bc.jpg "规范") 

<br>

## 二、侧滑横排菜单二次封装

## 三、轮播图组件二次封装

## 四、列表组件二次封装

## 五、选项卡组件二次封装



