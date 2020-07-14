<template>
  <el-card class="box" shadow="always">
    <ul class="list">
      <li v-for="(item,index) in 8" :key="index" class="item">
        <div class="imgBox">
          <img src="@/assets/image/test/dxw/bjjtdx.png" alt="">
        </div>
        <div class="contentBox">
          <div class="info">
            <div class="left">
              <div class="num">148</div>
              <div class="font">参访人数</div>
            </div>
            <div class="mid"></div>
            <div class="right">
              <div class="icon">
                <img src="@/assets/image/test/dxw/ppt.png" alt="">
              </div>
              <div class="link">宣讲ppt</div>
            </div>
          </div>
          <div class="btn">了解详情></div>
        </div>
      </li>
    </ul>
  </el-card>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  created(){
    document.title = '都学网小测试'
  }
}
</script>
<style lang="less" scoped>
.box{
  width: 990px;
  margin: 100px auto;
  background: rgba(0,0,0,0.7);
  .list{
    width: 950px;
    height: 662px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content:space-between;
    justify-content: space-between;
    .item{
      width: 230px;
      height: 326px;
      background-color: #fff;
      .imgBox{
        width: 230px;
        height: 185px;
        display: flex;
        img{
          width: 147px;
          height: 121px;
          margin: auto;
        }
      }
      .contentBox{
        width: 230px;
        height: 141px;
        .info{
          box-sizing: border-box;
          width: 230px;
          height: 44px;
          padding: 5px 40px 0 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .left{
            width: 57px;
            color: #999;
            .num{
              font-size: 16px;
              line-height: 14px;
            }
            .font{
              font-size: 14px;
              line-height: 14px;
              margin-top: 10px;
            }
          }
          .mid{
            width: 1px;
            height: 36px;
            background: linear-gradient(to bottom,#fff 0%, #D0D0D0 50%,#ffffff 100%);
          }
          .right{
            width: 60px;
            text-align: center;
            .icon{
              width: 18px;
              height:18px;
              margin: 0 auto;
            }
            .link{
              margin-top: 8px;
              text-align: left;
              font-size:14px;
              line-height: 14px;
              height: 14px;
              border-bottom: 1px solid #fff;
              color: #666;
              cursor: pointer;
              &:hover{
                border-color: #101010;
                color: #101010;
              }
            }
          }
        }
        .btn{
          cursor: pointer;
          box-sizing: border-box;
          width: 150px;
          height: 40px;
          border:1px solid #999999;
          background-color: #fff;
          color: #101010;
          text-align: center;
          line-height: 40px;
          border-radius: 20px;
          margin: 25px auto 0;
          font-size: 16px;
          &:hover{
            border-color: #E8E8E8;
            background-color: #E8E8E8;
          }
        }
      }
    }
  }
}
</style>