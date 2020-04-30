<template>
  <div class="index-container">
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <el-card>
          <div slot="header">
            愿景
            <!--<el-button style="float: right; padding: 3px 0;" type="text"-->
            <!--&gt;永久免费</el-button-->
            <!--&gt;-->
          </div>
          <div>
            <ul>
              <li>成为柳州的潮流风向标</li>
            </ul>
            <!--<img src="@/assets/ewm.png" alt="" />-->
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <el-card>
          <div slot="header">
            使命
            <!--<el-button style="float: right; padding: 3px 0;" type="text"-->
            <!--&gt;￥199</el-button-->
            <!--&gt;-->
          </div>
          <div>
            <ul>
              <li>把最好的带给大家，让人人成为潮流的量推官</li>
            </ul>
            <!--<img src="@/assets/ewm_vip.png" alt="" />-->
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <el-card>
          <div slot="header">
            价值观
            <!--<el-button style="float: right; padding: 3px 0;" type="text"-->
            <!--&gt;￥1999</el-button-->
            <!--&gt;-->
          </div>
          <div>
            <ul>
              <li>坚持不懈 从无到有 从0到N</li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.index-container {
  ::v-deep {
    .el-card__body {
      > div {
        padding: 20px;
        min-height: 100px;
        > ul {
          > li {
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>
