<template>
    <div class="version">
        <!-- 1、页面标题 -->
		<div class="pageTitle">
			<p>版本控制</p>
		</div>
        <!-- 2、版本控制 -->
        <div class="versionCard">
            <Timeline>
                <TimelineItem class="oneContent" v-for="(item,index) in versionList" :key="index">
                    <span>{{ item.versionCode }}</span>
                    <ul class="fixContent">
                        <li class="twoContent" v-for="(info,index) in item.fixContent" :key="index">{{ info.fixInfo }}</li>
                    </ul>
                </TimelineItem>
            </Timeline>
        </div>
    </div>
</template>

<script>
    export default {
        'name' : 'version',
        data(){
            return {
                versionList : [
                    {
                        versionCode: '发布1.0版本',  // 版本号
                        fixContent: [
                            {
                                fixInfo: '相关规范整理',   // 修改信息
                                weights : 0
                            },
                            {
                                fixInfo: 'xcloud问题排错整理',   // 修改信息
                                weights : 0
                            },
                            {
                                fixInfo: '组件相关技术整理',   // 修改信息
                                weights : 0
                            }
                        ]

                    }
                ]
            }    
        },
        created(){
            this.versionList = this.versionList.reverse();
        }

    }
</script>

<style lang="less" scoped>
    .version{
        /* ---- 1、页面标题 ---- */
        .pageTitle{
			margin-bottom: 20px;
			p{
				font-size: 24px;
				text-align: center;
			}
        }
        /* ---- 2、版本控制面板 ---- */ 
        .versionCard{
            padding:  0 40px;
            .oneContent{
                .ivu-timeline-item-content{
                    top: -8px;;
                    >span{
                        display: inline-block;
                        color: #333;
                        font-size: 18px;
                        cursor: pointer;
                    }
                    .fixContent{
                        padding-left: 20px;
                        li{
                            margin: 10px 0;
                            color: #666;
                            font-size: 16px;
                        }
                    }
                }
            }

        }
    }
</style>


