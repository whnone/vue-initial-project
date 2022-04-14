<template lang="jade">
    el-container.el_container
        .box-bk
            img(:src="bkUrl" mode="widthFix")
        
        .box-content
            .content-logo
                img(:src="logo" mode="widthFix")

            .content-form
                img(:src="contentBkUrl" mode="widthFix")
                div.form_content
                    .tips
                        div 恭喜这位音乐人获得
                        div {{awardType == 1 ?'全明星抗老九宫格':'QQ音乐绿钻会员'}}
                        div 请注册会员填写您的信息

                    el-form.el_form(
                        ref="ruleForm",
                        :model="form"
                    )
                        el-form-item(prop="userName")
                            span.form_label(slot="label") 姓名
                            el-input(
                                v-model="form.userName"
                                size="large"
                                placeholder="请输入您的姓名"
                            )
                        el-form-item(prop="mobile")
                            span.form_label(slot="label") 手机
                            el-input(
                                v-model="form.mobile"
                                size="small"
                                placeholder="请输入手机号码"
                            )
                        el-form-item(prop="birthday")
                            span.form_label(slot="label") 生日
                            el-date-picker(
                                v-model="form.birthday"
                                type="date"
                                placeholder="请输入您的生日"
                                format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd"
                                prefix-icon="a"
                            )
      
                        el-form-item(prop="password")
                            span.form_label(slot="label") 性别

                            el-checkbox(
                                v-model="form.sex",
                                :true-label="1",
                                :false-label="0"
                            )
                                span.form_label 男
                            el-checkbox(
                                v-model="form.sex",
                                :true-label="2",
                                :false-label="0"
                            )
                                span.form_label 女
                        el-form-item(prop="address" v-if="awardType == 1")
                            span.form_label(slot="label") 地址
                            el-input(
                                v-model="form.address"
                                size="small"
                                type="textarea"
                                placeholder="请输入您的地址"
                            )
                        el-form-item(prop="password")
                            el-checkbox(
                                class="info"
                                v-model="form.agreementInfo"
                            )
                                .word-break 
                                    a(
                                        href="https://policy.lorealchina.com/privacypolicy"
                                        target="_blank"
                                    ) 我同意依照本隐私政策对我的个人信息进行收集和使用；我已阅读并确认已被给予充分机会理解该使用条款和隐私政策的内容
                        el-form-item(prop="password")
                            el-checkbox(
                                class="info"
                                v-model="form.attendInfo"
                            )
                                .word-break.mrl10 我同意加入欧莱雅集团小美盒会员

            .content-submit(@click="submit") 提交

        el-dialog(
            :visible.sync="dialogVisible",
            width="80vw",
            :modal="false",
            top="26vh",
            :show-close="false",
            :close-on-click-modal="false"
        )
            .dialog-content
                img.content(:src="dialogBk")
                div.close
                    img(:src="close" @click="closeDialog")
        
</template>

<script>
import bkUrl from '../assets/images/bk.jpg'
import logo from '../assets/images/logo.png'
import dialogBk from '../assets/images/dialog-bk.png'
import dialogBk2 from '../assets/images/dialog-bk2.png'
import close from '../assets/images/close.png'
import contentBkUrl from '../assets/images/content-bk.png'
import api from '../api'
export default {
    data() {
        return {
            bkUrl,
            logo,
            contentBkUrl,
            dialogBk: dialogBk,
            close,
            loading: null,
            awardType: 1, // 1是礼盒，2是绿钻
            form: {
                userName: '',
                mobile: '',
                birthday: '',
                sex: 1,
                address: '',
                agreementInfo: false,
                attendInfo: false
            },
            dialogVisible: false
        }
    },
    mounted () {
        this.checkCode()
    },
    methods: {
        async checkCode() {
            const {cdkey} = this.$route.query
            if (!cdkey) return this.$message.info('活动不存在')
            this.loading = this.$loading({
                lock: true,
                text: '活动获取中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            const {awardName, code} = await api.checkSourceCode({code: cdkey})
            if (awardName && code) {
                this.awardType = awardName.indexOf('绿钻')>=0 ? 2 : 1
                this.loading.close()
            }
        },
        submit() {
            const {cdkey} = this.$route.query
            if (!cdkey) return this.$message.info('活动不存在')
            this.loading = this.$loading({
                lock: true,
                text: '提交中...',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            const checkOptions = JSON.parse(JSON.stringify(this.form))
            if (this.awardType != 1) delete checkOptions.address
            const values = Object.values(checkOptions)
            let validate = values.findIndex(v => {return !v}) < 0
            if (validate) {
                const options = {
                    ...this.form,
                    code: cdkey
                }
                this.$submit(options)
            } else {
                this.loading.close()
                this.$message.error('请完善全部信息后提交')
            }
        },

        async $submit(options) {
            api.addUser(options).then((res) => {
                console.log(res)
                this.loading.close()
                const {state,awardName} = res
                if (state) {
                    this.dialogBk = awardName == '小美盒' ? dialogBk : dialogBk2
                    this.dialogVisible = true
                } else {
                    this.$message.error('暂无领取资格')
                }
                this.loading = null
            }, err => {
                console.log('---')
                console.log(err)
                this.loading.close()
                this.$message.error('提交失败')
                this.loading = null
            })
        },

        closeDialog() {
            this.dialogVisible = false
        }
    }
}
</script>

<style scoped lang="scss">
/deep/ input::placeholder{
    color: #e792a9 !important;
}
/deep/ textarea::placeholder{
    color: #e792a9 !important;
}

.el_container{
    height: 100vh;
    width: 100vw;
    background-size: 100% 100%;
    position: fixed;
    top: 0;
    left: 0;

    .box-bk{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        img{
            width: 100vw;
            height: 100vh;
        }
    }
    .box-content{
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 2;

        .content-logo{
            width: 100%;
            width: 4.2933rem;
            height: 1.4rem;
            display: flex;
            justify-content: center;
            align-items: flex-start;

            img{
                width: 4.8rem;
                height: 1.21rem;
            }
        }

        .content-form{
            position: relative;
            width: 8.5866rem;
            height: 12.2666rem;
            .form_label{
                color: #eb3870;
                font-weight: 700;
                text-shadow: -1px 0 white,0 2px white, 2px 0 white, 0 2px white;
            }
            img{
                width: 100%;
                height: 12.2666rem;
                position: absolute;
            }
            .form_content{
                box-sizing: border-box;
                width: 100%;
                height: 12.2666rem;
                padding: 5% 5%;
                position: absolute;
                z-index: 3;
                font-size: 0.1866rem;

                .tips{
                    margin-top: 0.1333rem;
                    font-size: 0.36rem;
                    text-align: center;
                    line-height: 1.5;
                    color: #eb3870;
                    font-weight: 700;
                    text-shadow: -1px 0 white,0 2px white, 2px 0 white, 0 2px white;
                }
                .el_form{
                    height: 10.0000rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                }

            }

            .info {
                margin-top: 0.0533rem;
                padding-left: 0.1867rem;
                color: #fff !important;
                // text-shadow: -1px 0 white,0 2px white, 2px 0 white, 0 2px white !important;
                .word-break{
                    color: #fff !important;
                    word-wrap: break-word;
                    word-break:break-all;
                    white-space:pre-wrap;
                    max-width: 8.13rem;
                    font-size: 0.30rem;
                    transform: scale(0.9) translateX(-10px) translateY(-4px);
                    a{
                        color: #fff !important;
                    }
                }
                /deep/ {
                    &>span {
                        vertical-align: top;
                        padding-left: 0;
                    }
                }
                .mrl10{
                    margin-left: 0.1333rem;
                }
            }
        }

        .content-submit{
            position: relative;
            width: 7.6rem;
            height: 0.9333rem;
            background-color: #f5c8d6;
            border: 0.100rem solid #fff;
            border-radius: 0.1867rem;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.5rem;
            color: #eb3870;
            font-weight: 700;
        }
    }
}

.dialog-content{
    .content{
        width: 7rem;
        height: 3.6226rem;
    }
    .close{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 0.8rem;
            height: 0.8rem;
        }
    }
}


// 
.el-form-item{
    width: 100%;
    margin-bottom: 0.1067rem;
}
.form_label{
    margin: 0 0.3rem;
}
.el-form-item__content {
    display: inline-block;
    width: 4.8rem;
    .el-input, .el-textarea{
        width: 4.8rem;
        /deep/ input, textarea{
            border: 1px solid #fff;
            border-radius: 0.4rem;
            background-color: #f5c8d6;
        }
        /deep/ textarea{
            border: 1px solid #fff;
            border-radius: 0.3rem;
            background-color: #f5c8d6;
        }
    }
}
.el-checkbox{
    /deep/ .el-checkbox__inner{
        background-color: #f5c8d6;
        border-color: #fff !important;
        &::after{
            border-color: #333;
        }
    }
    /deep/ .el-checkbox__input.is-checked+.el-checkbox__label{
        color: #333;
    }
}
/deep/ .el-input__inner{
    height: 30px;
    line-height: 30px;
}
/deep/ .el-input--prefix .el-input__inner{
    padding-left: 0.40rem;
}
/deep/ .el-dialog{
    background: transparent;
    box-shadow: none;
}
</style>
