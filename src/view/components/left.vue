<template>
  <div class="letWrap">
    <div class="leftContentWrap">
      <div class="jiaofeiB">缴费业务安全</div>
      <div class="onlignQd">
        <div class="tabBWrap"><div class="tabBb"></div><div class="tabBc">线上渠道</div></div>
        <div class="ziyouWrap">
          <div class="ziyouB">自 有</div>
          <div class="ziyouTopWrap">
            <img src="@/assets/img/wsgw.png" class="oneLineImg1">
            <div class="oneLineB1 wsgw">网上国网</div>
            <img src="@/assets/img/lianxian1.png" class="oneLineImg2">
            <div class="oneLineC1">
              <div class="baiColor">缴费笔数</div>
              <div>43461笔</div>
            </div>
            <div class="oneLineC2">
              <div class="baiColor">缴费金额</div>
              <div>1222222元</div>
            </div>
            <div class="oneLineC3">
              <div class="size18">接口成功率</div>
              <div class="lvImgWrap">
                <div>95.5</div>
                <div>%</div>
              </div>
            </div>
            <div class="oneLineC4">
              <div class="size18s">业务关键接口</div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">欠费查询</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">交费对账</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">销账反馈</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="jinPro"></el-progress>
              </div>
            </div>
            <img src="@/assets/img/yhdk.png" class="oneLineImg3">
            <div class="oneLineB2 yhdk">银行代扣</div>
            <img src="@/assets/img/lianxian1.png" class="oneLineImg4">
            <div class="oneLineC5">
              <div class="baiColor">缴费笔数</div>
              <div>43461笔</div>
            </div>
            <div class="oneLineC6">
              <div class="baiColor">缴费金额</div>
              <div>1222222元</div>
            </div>
            <div class="oneLineC7">
              <div class="size18">接口成功率</div>
              <div class="lvImgWrap">
                <div>95.5</div>
                <div>%</div>
              </div>
            </div>
            <div class="oneLineC8">
              <div class="size18s">业务关键接口</div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">欠费查询</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="jinPro"></el-progress>
              </div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">交费对账</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">销账反馈</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
            </div>
          </div>
          <div class="ziyouTopWrap">
            <img src="@/assets/img/zsdl.png" class="oneLineImg1">
            <div class="oneLineB1 zsdl">掌上电力SD</div>
            <img src="@/assets/img/lianxian1.png" class="oneLineImg2">
            <div class="oneLineC1">
              <div class="baiColor">缴费笔数</div>
              <div>43461笔</div>
            </div>
            <div class="oneLineC2">
              <div class="baiColor">缴费金额</div>
              <div>1222222元</div>
            </div>
            <div class="oneLineC3">
              <div class="size18">接口成功率</div>
              <div class="lvImgWrap lvImgWrapLan">
                <div>95.5</div>
                <div>%</div>
              </div>
            </div>
            <div class="oneLineC4">
              <div class="size18s">业务关键接口</div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">欠费查询</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">交费对账</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">销账反馈</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
            </div>
            <img src="@/assets/img/dyb.png" class="oneLineImg3">
            <div class="oneLineB2 dyb">电e宝</div>
            <img src="@/assets/img/lianxian1.png" class="oneLineImg4">
            <div class="oneLineC5">
              <div class="baiColor">缴费笔数</div>
              <div>43461笔</div>
            </div>
            <div class="oneLineC6">
              <div class="baiColor">缴费金额</div>
              <div>1222222元</div>
            </div>
            <div class="oneLineC7">
              <div class="size18">接口成功率</div>
              <div class="lvImgWrap lvImgWrapLan">
                <div>95.5</div>
                <div>%</div>
              </div>
            </div>
            <div class="oneLineC8">
              <div class="size18s">业务关键接口</div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">欠费查询</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">交费对账</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">销账反馈</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
            </div>
          </div>
        </div>
        <div class="ziyouWrap">
          <div class="ziyouBs">第三方</div>
          <div class="ziyouTopWrap">
            <img src="@/assets/img/weixin.png" class="oneLineImg1">
            <div class="oneLineB1 wxB">微信</div>
            <img src="@/assets/img/lianxian1.png" class="oneLineImg2">
            <div class="oneLineC1">
              <div class="baiColor">缴费笔数</div>
              <div>43461笔</div>
            </div>
            <div class="oneLineC2">
              <div class="baiColor">缴费金额</div>
              <div>1222222元</div>
            </div>
            <div class="oneLineC3">
              <div class="size18">接口成功率</div>
              <div class="lvImgWrap">
                <div>95.5</div>
                <div>%</div>
              </div>
            </div>
            <div class="oneLineC4">
              <div class="size18s">业务关键接口</div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">欠费查询</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">交费对账</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">销账反馈</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="jinPro"></el-progress>
              </div>
            </div>
            <img src="@/assets/img/dxyzf.png" class="oneLineImg3">
            <div class="oneLineB2 dxyzf">电信翼支付</div>
            <img src="@/assets/img/lianxian1.png" class="oneLineImg4">
            <div class="oneLineC5">
              <div class="baiColor">缴费笔数</div>
              <div>43461笔</div>
            </div>
            <div class="oneLineC6">
              <div class="baiColor">缴费金额</div>
              <div>1222222元</div>
            </div>
            <div class="oneLineC7">
              <div class="size18">接口成功率</div>
              <div class="lvImgWrap">
                <div>95.5</div>
                <div>%</div>
              </div>
            </div>
            <div class="oneLineC8">
              <div class="size18s">业务关键接口</div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">欠费查询</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="jinPro"></el-progress>
              </div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">交费对账</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">销账反馈</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
            </div>
          </div>
          <div class="ziyouTopWrap">
            <img src="@/assets/img/zsdl.png" class="oneLineImg1">
            <div class="oneLineB1 zfb">支付宝</div>
            <img src="@/assets/img/lianxian1.png" class="oneLineImg2">
            <div class="oneLineC1">
              <div class="baiColor">缴费笔数</div>
              <div>43461笔</div>
            </div>
            <div class="oneLineC2">
              <div class="baiColor">缴费金额</div>
              <div>1222222元</div>
            </div>
            <div class="oneLineC3">
              <div class="size18">接口成功率</div>
              <div class="lvImgWrap lvImgWrapLan">
                <div>95.5</div>
                <div>%</div>
              </div>
            </div>
            <div class="oneLineC4">
              <div class="size18s">业务关键接口</div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">欠费查询</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">交费对账</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">销账反馈</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
            </div>
            <img src="@/assets/img/dyb.png" class="oneLineImg3">
            <div class="oneLineB2">线上银行</div>
            <img src="@/assets/img/lianxian1.png" class="oneLineImg4">
            <div class="oneLineC5">
              <div class="baiColor">缴费笔数</div>
              <div>43461笔</div>
            </div>
            <div class="oneLineC6">
              <div class="baiColor">缴费金额</div>
              <div>1222222元</div>
            </div>
            <div class="oneLineC7">
              <div class="size18">接口成功率</div>
              <div class="lvImgWrap lvImgWrapLan">
                <div>95.5</div>
                <div>%</div>
              </div>
            </div>
            <div class="oneLineC8">
              <div class="size18s">业务关键接口</div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">欠费查询</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">交费对账</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
              <div class="oneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">销账反馈</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="xianXiaQd">
        <div class="tabBWrap"><div class="tabBb"></div><div class="tabBc">线下渠道</div></div>
        <div class="xianxiaWrap">
          <div class="ziyouTopWrap">
            <img src="@/assets/img/zyzd.png" class="zyzdImg">
            <div class="oneLineB1 zyzdB">自有终端</div>
            <img src="@/assets/img/lianxian2.png" class="lianxian2Img1">
            <div class="oneLineC1">
              <div class="baiColor">缴费笔数</div>
              <div>43461笔</div>
            </div>
            <div class="oneLineC2 jfjeXx">
              <div class="baiColor">缴费金额</div>
              <div>1222222元</div>
            </div>
            <div class="oneLineC3">
              <div class="size18 xxjkcgl1">接口成功率</div>
              <div class="lvImgWrap">
                <div>95.5</div>
                <div>%</div>
              </div>
            </div>
            <div class="oneLineC4">
              <div class="size18s">业务关键接口</div>
              <div class="oneLineC4List xsoneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">欠费查询</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="jinPro"></el-progress>
              </div>
              <div class="oneLineC4List xsoneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">交费对账</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
              <div class="oneLineC4List xsoneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">销账反馈</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
            </div>
            <img src="@/assets/img/ydpos.png" class="ydposImg">
            <div class="oneLineB2 ydposB">移动POS</div>
            <img src="@/assets/img/lianxian2.png" class="lianxian2Img2">
            <div class="oneLineC5">
              <div class="baiColor">缴费笔数</div>
              <div>43461笔</div>
            </div>
            <div class="oneLineC6 jfjeXs">
              <div class="baiColor">缴费金额</div>
              <div>1222222元</div>
            </div>
            <div class="oneLineC7">
              <div class="size18 xxjkcgl1">接口成功率</div>
              <div class="lvImgWrap">
                <div>95.5</div>
                <div>%</div>
              </div>
            </div>
            <div class="oneLineC8">
              <div class="size18s">业务关键接口</div>
              <div class="oneLineC4List xsoneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">欠费查询</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
              <div class="oneLineC4List xsoneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">交费对账</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="jinPro"></el-progress>
              </div>
              <div class="oneLineC4List xsoneLineC4List">
                <div class="oneLineC4ListB">
                  <div><span class="size18s baiColor">销账反馈</span><span class="size18s yellowColor">245678 次</span></div>
                  <div>98.9%</div>
                </div>
                <el-progress :percentage="98.9" :show-text="false" :stroke-width="14" class="qfcxPro"></el-progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    props: {
      
    },
    mounted() {
      
    },
    methods: {
      
    }
  }
</script>

<style scoped>
.letWrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.leftContentWrap {
  width: 2170px;
  height: 1570px;
  background-image: url("../../assets/img/leftBg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.onlignQd {
  width: 2110px;
  height: 1012px;
  background-image: url("../../assets/img/mohuceng.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 160px 0 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.xianXiaQd {
  width: 2110px;
  height: 321px;
  background-image: url("../../assets/img/mohuceng.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tabBWrap {
  width: 2035px;
  height: 100px;
  display: flex;
  align-items: center;
}
.tabBb {
  width: 5px;
  height: 35px;
  background: #289afd;
  margin-right: 10px;
}
.tabBc {
  font-size: 32px;
  color: #ffffff;
}
.jiaofeiB {
  position: absolute;
  left: 1000px;
  top: 60px;
  width: 300px;
  font-size: 48px;
  font-weight: bold;
  font-family: '苹方';
  z-index: 10;
}
.ziyouWrap {
  width: 2043px;
  height: 441px;
  position: relative;
  /*border: 1px solid white;*/
  background-image: url("../../assets/img/xsqdBg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.xianxiaWrap {
  width: 2043px;
  height: 321px;
  position: relative;
}
.oneLineImg1 {
  position: absolute;
  left: 77px;
  top: 55px;
  width: 100px;
  height: 60px;
}
.oneLineB1 {
  color: #ffffff;
  position: absolute;
  left: 77px;
  top: 118px;
}
.oneLineImg2 {
  position: absolute;
  left: 192px;
  top: 40px;
  width: 67px;
  height: 110px;
}
.oneLineC1 {
  position: absolute;
  left: 274px;
  top: 30px;
}
.oneLineC2 {
  position: absolute;
  left: 274px;
  top: 130px;
}
.baiColor {
  color: #ffffff;
}
.oneLineC3 {
  position: absolute;
  left: 460px;
  top: 15px;
}
.size18 {
  font-size: 18px;
  width: 150px;
  text-align: center;
  margin-bottom: 10px;
}
.size18s {
  font-size: 18px;
}
.lvImg {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.lvImgWrap {
  width: 141px;
  height: 141px;
  background-image: url("../../assets/img/yuan1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.lvImgWrap > div {
  font-size: 30px;
  color: #fed700;
}
.lvImgWrapLan {
  background-image: url("../../assets/img/yuan2.png");
}
.lvImgWrapLan > div {
  color: #67ffd6;
}
.oneLineC4 {
  position: absolute;
  left: 670px;
  top: 15px;
  font-size: 18px;
}
.oneLineC4List {
  width: 320px;
  padding: 5px 0;
}
.oneLineC4ListB {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.yellowColor {
  color: #eda709;
  margin-left: 7px;
}
.oneLineImg3 {
  position: absolute;
  left: 1080px;
  top: 55px;
  width: 100px;
  height: 60px;
}
.oneLineB2 {
  color: #ffffff;
  position: absolute;
  left: 1088px;
  top: 117px;
}
.oneLineImg4 {
  position: absolute;
  left: 1208px;
  top: 40px;
  width: 67px;
  height: 110px;
}
.oneLineC5 {
  position: absolute;
  left: 1298px;
  top: 30px;
}
.oneLineC6 {
  position: absolute;
  left: 1298px;
  top: 130px;
}
.oneLineC7 {
  position: absolute;
  left: 1465px;
  top: 15px;
}
.oneLineC8 {
  position: absolute;
  left: 1685px;
  top: 15px;
  font-size: 18px;
}
.ziyouTopWrap {
  width: 100%;
  height: 50%;
  position: relative;
}
.ziyouB {
  width: 30px;  
  margin: 0 auto;  
  line-height: 60px;  
  font-size: 30px;
  color: #ffffff;
  position: absolute;
  left: 10px;
  top: 160px;
}
.ziyouBs {
  width: 28px;  
  margin: 0 auto;  
  line-height: 36px;  
  font-size: 28px;
  color: #ffffff;
  position: absolute;
  left: 12px;
  top: 165px;
}
.wsgw {
  left: 82px;
}
.yhdk {
  left: 1085px;
}
.zsdl {
  left: 67px;
}
.dyb {
  left: 1100px;
}
.wxB {
  left: 103px;
}
.dxyzf {
  left: 1075px
}
.zfb {
  left: 92px;
}
.zyzdImg {
  position: absolute;
  left: 43px;
  top: 45px;
  width: 140px;
  height: 140px;
}
.lianxian2Img1 {
  position: absolute;
  left: 192px;
  top: 40px;
  width: 67px;
  height: 140px;
}
.lianxian2Img2 {
  position: absolute;
  left: 1208px;
  top: 40px;
  width: 67px;
  height: 140px;
}
.ydposImg {
  position: absolute;
  left: 1050px;
  top: 45px;
  width: 140px;
  height: 140px;
}
.zyzdB {
  left: 67px;
  top: 180px;
}
.jfjeXx {
  top: 160px;
}
.xxjkcgl1 {
  margin-bottom: 35px;
}
.xsoneLineC4List {
  padding: 9px 0;
}
.ydposB {
  left: 1080px;
  top: 180px
}
.jfjeXs {
  top:  160px;
}
</style>