layui.define(["jquery"], function (exprots) {
  var $ = layui.jquery;
  var okUtils = {
    getBodyWidth: function () {
      return document.body.scrollWidth;//body的总宽度
    },
    echartsResize(...elemnt) {
      /*
      * 主要用于对echart视图自动适应宽度
      * elemnt:可变参数
      * eg:
      * var mapTree = echarts.init($("#mapOne")[0], "mytheme");
      * var mapTree2 = echarts.init($("#mapOne")[0], "mytheme");
      * resize(mapTree,mapTree2);
      * */
      window.addEventListener("resize", () => {
        for (var i = 0; i < elemnt.length; i++) {
          elemnt[i].resize();
        }
      });
    }
  };
  exprots("okUtils", okUtils);
});

