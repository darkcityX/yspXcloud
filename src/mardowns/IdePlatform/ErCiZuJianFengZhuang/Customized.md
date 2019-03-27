# 定制化样式组件封装

<br>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前言：<br>

<br>

## 一、页头组件

<br>

<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;函数封装:</b>

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

## 一、页头组件

## 一、页头组件

## 一、页头组件

## 一、页头组件

## 一、页头组件