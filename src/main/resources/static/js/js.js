
function getCookieValue(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}
function closeControlsHint() {
    $(".controlshint").fadeOut();
    document.cookie = "controlshint=false; max-age=31536000; path=/;";
}


//页面加载时，初始化人物分辨率和视野大小？是jquery的语法
$(document).ready(function() {
    $("#resrange").next().val(renderer.getPixelRatio() + 'x');
    $("#resrange").val(renderer.getPixelRatio());
    $("#fovrange").next().val(30);
    $("#fovrange").val(30);
});

$(function() {
    $('.lazy').Lazy();
});





// 0
 let postureDefault={"version":6,"data":[0,[0,-90,0],[0,0,-2],[0,0,5],[6,0,0],[0],[-6,-6,-0.6],[-6,0,0],[0],[6,6,-0.6],[7,-0.6,-5],[15],[-15,0,0],[10,10],[-7,0.6,-5],[15],[15,0,0],[10,10]]};
 let postureWalk={"version":6,"data":[0,[0,-90,0],[0,0,3.2],[0,0,5],[0.1,1.2,-11.1],[18.4],[-6,-6,-1.8],[-2.5,1.9,29],[0.1],[6,6,-22.8],[7,-0.6,17.4],[34],[-15,0,0],[10,10],[-7,0.6,-35.1],[18],[15.4,0,0],[10,10]]};
 let postureStand1={"version":6,"data":[-0.2,[0,-90,0],[3.2,8.9,-2.5],[0,0,5],[3.4,16.8,15.7],[18.5],[-6,-6,2.8],[-1.5,-3,-4.7],[0],[6,6,-8.7],[-0.5,-64.3,-37.4],[91.2],[-51.8,11.2,3.1],[38,10],[17.3,75.3,-57.3],[88.7],[82.8,0,0],[41.6,10]]};
 let postureStand2={"version":6,"data":[-0.2,[0,-90,0],[3.2,8.9,-2.5],[0,0,5],[3.4,16.8,15.7],[18.5],[-6,-6,2.8],[3.2,-3.3,-5.4],[0],[-0.3,7.2,-4.7],[2.1,-43.8,-15.2],[47.1],[-33.3,-6,-10.8],[3.8,10],[-4.3,51.9,-15.8],[42.5],[21.2,9,-2.4],[12.8,1.8]]};
 let postureBackwards={"version":6,"data":[0,[-93.1,-90,0],[6.1,-1.3,-25.6],[0,0,-20.5],[12.5,19.7,50.6],[15],[-6,-6,16],[2.5,-11.9,68.8],[16.6],[3.4,15.3,15.6],[32.1,-11.3,47],[27.1],[-35.7,36.1,20.8],[10,10],[-66.5,-3.4,74.1],[15],[15,-21.8,5.8],[10,10]]};
 let postureCrossArm={"version":6,"data":[-0.3,[-83.7,-84.7,-90],[9.8,2.3,15.6],[3.4,0,0.4],[8.7,16.6,23.1],[32.7],[-6,-6,-5.7],[2.1,-1.3,10.3],[11.9],[6,6,-4.1],[39.3,-71.2,45.4],[102.4],[18.6,3.3,0.4],[46.3,100],[-89.8,65.4,86.8],[103.3],[-89.9,22.2,27.2],[28.9,-10]]};
 let postureKneeling={"version":6,"data":[-16.2,[36.3,-90,0],[-8.8,-0.5,0.7],[0.3,0,14.9],[-3,11.5,127.9],[89.8],[-6.6,1.9,4.2],[-6,0,38.4],[100],[6,6,31.7],[46.1,-35.7,51.7],[44.2],[55.6,62.7,-56.9],[10,10],[-17.8,21.5,25.5],[25.7],[-1.5,-2.1,1.1],[22,10]]};
 let postureSquatting={"version":6,"data":[-24.2,[11,-90,0],[-0.5,0.2,-17.1],[0.7,0.1,13],[-1.9,16.2,127.4],[150],[-6,-6,-32.9],[2.2,-19.1,125.5],[150],[6,6,-35],[54.4,-33.8,62.2],[33.8],[57.4,58.7,-49.1],[10,10],[-71.4,34.1,60.6],[65.3],[-56,-36.9,-44.3],[10,10]]};
 let posturePush={"version":6,"data":[-9.3,[38.1,-90,0],[0,0,-10.7],[0,0,-7.7],[-11.6,7.9,95.3],[92],[-6,-6,-17.5],[-6.9,-8.4,-6],[0],[17.5,-4.2,-41.4],[47.6,39.1,118.1],[5.5],[-90,0,0],[10,10],[-58.9,-42.9,108.3],[8.4],[90,0,0],[10,10]]};
 let posturePull={"version":6,"data":[-9.3,[-30.5,-90,0],[-5,7.8,-0.1],[2.9,-5,-14.1],[-4,-3.2,35.4],[48.1],[1.7,-3.4,19],[-6.9,-8.4,7.1],[103.4],[11.5,2.2,-34.8],[-21.9,-8.6,44.1],[5.5],[-15.6,16.5,-72.6],[116.3,65.3],[3.1,7.5,46.9],[8.4],[19.8,-7.5,-75.8],[120,75.2]]};
 let postureSlowrun={"version":6,"data":[-0.3,[5.5,-90,0],[0,0,1.3],[0,0,7.2],[-0.3,1.4,-20.9],[48.7],[-6,-6,16.3],[-1.2,3.7,28.1],[2.3],[6,6,-9.4],[17.4,4.4,25.4],[108.4],[-2.4,0,0],[120,100],[-8.9,3.6,-58.4],[102.6],[5.2,0,0],[120,99.9]]};
 let postureFastrun={"version":6,"data":[-7.2,[-55.4,-88.8,-84.7],[-1.5,-9.3,-9.4],[0,0,2.4],[-3.8,2.2,-11],[13.5],[-6,-6,0.2],[-4,8.3,105.6],[110],[6,6,-8.7],[10.2,5.8,80.4],[94.1],[-15,0,0],[42.1,10],[9.6,11,-66.8],[37.7],[5.2,0,0],[19.7,10]]};
 let postureDance={"version":6,"data":[1.2,[141.5,-86.7,89.2],[5.4,-28.6,64.8],[-0.8,23.2,0.6],[-14,1.8,51.3],[3.6],[2.9,-5.8,70.1],[-58.5,-37.2,-60],[72.5],[-3.4,9.7,68.9],[-7.6,57,155.6],[30.2],[23.6,-46.1,29.9],[19.9,26.7],[-83.6,-9.4,-28.7],[51.7],[-20,3.1,2.2],[10,10]]};
 let postureDive={"version":6,"data":[3.8,[109.5,-90,0],[0,0,-8.2],[0,0,-10.3],[-4.6,0,0],[0],[-6,-6,75.8],[5.7,0,0],[0],[6,6,66.8],[43.6,52.9,145.2],[0.1],[-1.9,0,0],[10,10],[-52.6,-59.4,137.5],[0],[-5,0,0],[10,10]]};
 let postureKick={"version":6,"data":[-8.8,[14.8,-90,0],[5.4,-28.3,6.6],[3.8,-7.5,-14.1],[-14.1,-4.9,68.6],[22.4],[-6,-6,-0.6],[-29.1,-16.8,-52.5],[46],[6,6,47.9],[103,-4.4,-11.9],[35.3],[-15,0,0],[20,20.6],[-87.1,-40.8,-56.3],[15],[15,0,0],[27.8,17.8]]};
 let postureYunQiu={"version":6,"data":[-6.9,[90,-69.1,70.4],[-7.9,15.3,-30.1],[2,-21.8,15],[-13.8,21.8,53.6],[61.8],[-17.7,-3.2,-21.2],[-6,0,2.4],[90.3],[6,6,32.1],[7,-0.6,13.4],[93.4],[-45.2,20.4,49.3],[9.2,10],[-84.9,31,47.6],[60],[15,0,0],[10,10]]};
 let postureSlamDunk={"version":6,"data":[11.6,[33.3,-90,0],[-10.3,9.4,31.2],[3.2,-25.7,14.9],[1.7,33.8,65.9],[21.3],[-6,-6,-10.6],[-30.3,-8,9.9],[14.4],[6,6,56.1],[43.1,-53.6,-20],[15],[-15,0,0],[10,10],[89.1,-86.6,-117.9],[21.8],[15,0,0],[22.5,20.4]]};
 let postureBike={"version":6,"data":[3.7,[37.9,-90,0],[0,0,-15.5],[0,0,11.5],[4.7,-3.6,69.9],[49.4],[-6,-6,-0.6],[-6.7,1.7,111.1],[107.6],[6,6,-20.8],[41.4,-2.6,44],[79.6],[-28.1,58.5,2.3],[120,81],[-33.1,3.6,43],[79.7],[43.4,-54,20.3],[107.3,100]]};
 let postureChongLang={"version":6,"data":[0,[-90.7,-71.1,-156.1],[1.1,-10,-24.2],[22.1,-13.6,23.7],[-18.5,34.1,120.2],[120.1],[-9.2,-2.9,-54.8],[-10.7,-14,125.6],[69.7],[25.1,-6.4,8.4],[67.1,4.2,57.8],[15],[-15,0,0],[48.6,10],[-64.6,-22.5,15.8],[32.2],[-5.7,0,0],[10,10]]};
 let postureFire={"version":6,"data":[-15.4,[-155.9,-87.4,-151.4],[-14.8,-9.8,-19.2],[0,0,-16.8],[16.8,30.9,79.8],[86.1],[-6,-6,8.9],[-15.6,0.3,-2],[93.3],[6,6,49.9],[64.8,24.8,59.7],[58.4],[-133.8,-39.7,169.2],[97.7,36],[-67.2,9.9,75.6],[103.7],[58.9,35,-60.5],[119.9,99.9]]};
 let postureGaoTiTui={"version":6,"data":[2.8,[-68.6,-34.3,-54.9],[16.4,14.6,8.6],[6.7,-18.6,-10.1],[63.1,60.6,-6.1],[7.2],[-12.6,4.6,8.1],[-54.1,-39.1,29.6],[10.4],[12.3,-34,58.3],[57.6,-28.6,52.5],[117.9],[-15,0,0],[120,99.9],[-24.5,30.4,-47],[48.4],[15,0,0],[115.3,99.9]]};
 let postureSit1={"version":6,"data":[-12.3,[-9.1,-90,0],[0,0,-6.5],[0,0,5],[6,0,76.6],[78.6],[-6,-6,18.6],[-6,0,76.5],[87.9],[6,6,10],[29.4,-44,32.1],[19.8],[-42.6,14.3,15.8],[10,10],[-5.5,0.5,-5.3],[15.3],[15,0,0],[10,10]]};
 let postureSit2={"version":6,"data":[-12.3,[-9.1,-90,0],[0,0,-7],[0,0,5],[-9.4,-13.1,73.1],[78.6],[-6.8,-3.7,18.5],[22,16.9,85.3],[69.2],[11.5,1,47.2],[29.4,-44,38.2],[34.9],[-35.9,33,21.8],[0.5,10],[-53.7,54.8,60.7],[29],[47.7,-24.8,15.1],[10,10]]};
 let postureSad={"version":6,"data":[0,[6.3,-90,0],[0,0,-6.1],[0,0,-12.8],[-3,13.1,18.5],[21.9],[-6,-6,-5.7],[-1.1,-1.9,10.2],[11.9],[6,6,-4.1],[5.1,-21.2,10.8],[12.1],[-15,0,0],[10,10],[-3.7,34.1,10.4],[12.2],[8,-14.8,0.7],[10,10]]};
 let postureHappy={"version":6,"data":[-1.4,[13.2,-90,0],[0,0,24.9],[0,0,9.9],[3.8,20.3,32.5],[26.5],[-6,-6,-6.2],[-3,-13.3,3.5],[17.3],[6,6,-19.2],[2.1,68.8,91.3],[110.6],[-15,-30.5,0],[103.1,100],[-16.7,-78.5,110.3],[81],[28.6,69.6,-24.5],[119.9,98.3]]};
 let postureJiDong={"version":6,"data":[4.7,[11.7,-90,0],[7.2,-15.1,25.9],[-1.2,13.1,5.1],[16.5,22.8,8.4],[103.6],[-6,-6,35.6],[-27.8,-19.8,-7.7],[115.9],[6,6,27.1],[89.5,80.1,20.6],[104.9],[-15,0,0],[120,89.6],[-67.2,-50.7,-6.5],[131.7],[15,0,0],[120,100]]};
 let postureSurprise={"version":6,"data":[0,[0,-90,0],[5.4,-0.2,16.4],[0,0,-2.8],[3.5,0,-9.7],[12.8],[-6,-6,-7],[-5.9,-0.2,3.1],[9.3],[6,6,-5.6],[42.9,1.8,52.7],[142.2],[-1.3,-63,-4.5],[10,10],[-35.6,17.1,51.6],[143.1],[15,45.3,-9.8],[10,10]]};
 let posturePa={"version":6,"data":[-32.4,[-87.6,89.8,-7.1],[0,0,30.2],[0,0,30.6],[-2.9,4.7,6.1],[107.9],[-6,-6,46.8],[3.6,-5.2,6.9],[81.5],[6,6,-16.9],[77.6,18.9,67.1],[105.6],[5.4,0,0],[10,10],[-81.7,-20.3,71.8],[107.5],[-4.9,-2.7,-1],[12.5,10]]};
 let postureSleep={"version":6,"data":[-27.8,[-87.3,4.4,-13.2],[7.1,10.1,-24.6],[-10.9,4.3,-18.4],[-2,-1.6,81.7],[99.8],[1.6,-6.7,24.6],[0.9,20.3,107.5],[104.5],[-9.3,-10.4,34.1],[-4.7,-18.4,34.1],[146.4],[-2.6,17.1,0.5],[10,10],[-23.6,53.3,54.8],[123.2],[-1.4,-44.5,6.5],[-10,-9.9]]};
 let postureZhi={"version":6,"data":[-12.3,[0,-60.9,0],[1.6,39.2,-12.4],[2.9,-30,5.8],[53.6,28.3,-45.2],[29.2],[10.8,2.4,87.7],[-6,0,76.9],[56.5],[6,6,20],[136.9,52.7,-70.3],[28.6],[-15,-65.3,0],[45.4,33.7],[-91.6,13,57.7],[25.9],[15,0,0],[104.8,83.7]]};
 let postureFaQiu={"version":6,"data":[-8.2,[0,-48.9,0],[-0.1,-3.5,-0.2],[-5.7,37.6,22],[-9.5,40.2,59.2],[87.2],[0.3,-9.9,-31.6],[-24.8,26.7,50.7],[86],[6,6,-27.5],[-16.1,11,172.3],[15],[-15,0,0],[10,10],[-51.1,7.3,-25.7],[48.9],[15,-21.2,0],[108.4,90.9]]};
 let postureYinTi={"version":6,"data":[33.1,[-5.6,-90,0],[0,0,-2],[0,0,21.6],[1.4,30.9,17],[106.8],[-8.6,-5.9,55.8],[-2.3,-27,14.8],[98.6],[9.8,5.9,37.6],[-10.5,69.8,51.1],[125.4],[0.9,28,9.2],[100,100],[23,-63.3,61.4],[131.4],[4.1,-19.8,8.4],[108.8,100]]};
 let postureYouGouQuan={"version":6,"data":[-1.3,[23.1,-90,0],[3.8,41.7,-4.6],[-2.6,-16.8,9.2],[-3.2,7.8,41.3],[14.6],[-6,-6,0.7],[-3.9,-5.4,1.3],[14.2],[6,6,39.6],[21.9,-44.5,15.5],[138.5],[-15,0,0],[120,99.9],[-75.8,-29.1,34.3],[50.7],[15,0,0],[115.3,99.9]]};
 let postureShangGouQuan={"version":6,"data":[-1.6,[0,-90,0],[-13.3,-5.4,15.8],[-0.3,38.6,0.5],[15.1,21.6,13.9],[20.8],[-13.4,-5.9,-1.4],[-13.6,-7.3,-12.7],[9.4],[6,6,-17],[51.7,54.3,-7.4],[112.4],[84.9,-67.9,89.6],[107,100],[-62.1,33.1,44.3],[138.2],[15,0,0],[105.9,100]]};
 let postureZuoCiQuan={"version":6,"data":[-0.3,[7.7,-90,0],[-24.7,-4.4,1.5],[-0.3,38.6,0.5],[0.9,19.9,9.4],[10.5],[-5.2,-6,-8.3],[-17.4,-23.6,2.6],[9.4],[6,6,9],[117.5,15.2,12.3],[6.9],[-4.4,-33.2,-12.3],[125.1,97],[-43.9,44.5,54.6],[138.2],[15,0,0],[105.9,100]]};
 let postureJianZhiCi={"version":6,"data":[-10.1,[15.7,-90,0],[7.8,41,-13.9],[2.7,-28.6,5.7],[30.6,39,-38],[12.3],[-39.4,-7.2,-38],[-6,0,85.6],[68.6],[6,6,-0.6],[75,73.4,-19.7],[23.4],[-15,-29.2,0],[10,10],[-20,-48.7,107],[0.6],[3.4,11.7,-85.9],[113.8,74.1]]};
 let postureJianPiKan={"version":6,"data":[-3.8,[15.7,-90,0],[-8.9,12.4,31.1],[-0.1,-17.4,-2.7],[4.9,-0.9,-4.1],[15.4],[-22.7,-17,-38.4],[-6,0,54.6],[39.6],[6,6,-0.6],[29,4.7,131.7],[57.4],[-15,-16.6,7.2],[119.9,100],[-28,-37.2,114.5],[66.6],[37.7,12.7,-1.5],[113.8,87.6]]};
 let postureJianXieJi={"version":6,"data":[-3.8,[15.7,-90,0],[-12.5,10.2,25.4],[1.4,-17.5,-2.3],[4.9,-0.9,-4.1],[15.4],[-22.7,-17,-38.4],[-6,0,54.6],[39.6],[6,6,-0.6],[-1.9,14.5,71.2],[113.5],[-7.7,-26.2,-8],[119.9,100],[-49.3,16.2,110.1],[66.6],[37.7,-19,0],[113.8,87.6]]};
 let postureHeiKeDiGuo={"version":6,"data":[-11.7,[-64.5,-90,0],[0,-0.1,18.2],[-2.9,20.5,8.1],[12.2,1.2,10.5],[59.6],[-6,-6,18.5],[-25.7,0.5,1.2],[107.7],[6,6,-19.4],[89.9,51.7,33.3],[52.1],[64.3,36.3,-21.2],[10,10],[-62.7,4.5,-37.7],[74.6],[-17.3,0,0],[10,10]]};
 let postureTitanic={"version":6,"data":[1.8,[8.6,-90,0],[0,0,11.6],[0,0,9.1],[-3.1,0,0],[0],[-3.1,-4.8,22.3],[4.7,-0.1,-0.5],[0],[2,11.3,23.6],[90,23,0],[4.6],[-4,0,0],[30.5,10],[-90,-24.6,0],[5.8],[1.2,19.4,0],[27.5,15.4]]};
 let postureHarrypoter={"version":6,"data":[0.3,[3.1,-21.6,1.1],[5.4,-6.3,-5.7],[6.1,-25.3,-0.3],[21,0,0],[0],[-6,-6,48.7],[-6.8,-20.9,4.9],[9.6],[1.3,6,-0.1],[28.3,-2.4,-33.1],[71.4],[-2.2,-23.1,0],[29,10],[-47.4,-77.8,67.8],[6.6],[1.1,0,-54.3],[120,100]]};
 let postureStarWar={"version":6,"data":[-4.7,[-179.6,-40.2,-180],[-4.8,-20.8,-10.4],[0.2,24.4,-3.4],[12.3,43.3,38],[53.9],[-6,-6,-4.8],[-12.5,-1.6,30.7],[65.3],[14.1,1.1,-31.4],[4.4,-18.4,81.8],[68.4],[19.2,4.7,70.8],[36.1,71.5],[-86,-31.7,66.9],[97.1],[12,-17.3,-6.5],[120,100]]};
 let postureSuperman={"version":6,"data":[6.6,[155,-52.8,130.6],[-9,-19.2,23.6],[-13.5,23.8,25.7],[-12.2,18.4,12],[19.5],[-6,-6,51.3],[1.9,-22.6,-0.8],[21.4],[6,6,42.7],[-74.2,83.4,-132.3],[22.5],[-10.2,0,0],[120,100],[-7.3,-45.7,7.6],[18.2],[-11.1,-28.7,-6.9],[119.9,84.8]]};
 let postureShenqinvxia={"version":6,"data":[-19.6,[15.8,-90,0],[0,0,5.2],[0,0,-1.3],[12.9,12.7,119],[100],[-14.4,-5.8,8.4],[-37,-28.5,14.9],[123.8],[-1.5,-8.6,-2.5],[63.6,-3.6,77.9],[105.1],[-15,-89.9,-13.1],[120,100],[-62.4,7.3,87.6],[106.6],[15,71.2,-7.2],[120,100]]};
 //44
 // let postureJianShen1={"version":6,"data":[[0,-1.5,0],[0,-90,0],[0,0,-2],[0,0,5],[10.3,12.3,6.3],[41.6],[-14.2,-3.7,-15.9],[-6,-34.6,16.8],[38.8],[6,6,-16.3],[89.6,85.6,14.5],[103.7],[75,-19,90],[120,100],[-89.7,-85,13.6],[104.8],[-75,21.1,90],[120,100]]};
let postureJianShen1={"version":6,"data":[0,[0,-90,0],[0,0,-2],[0,0,0.6],[6,10.8,12.4],[34.5],[-6,-6,-0.6],[-1.4,-19.9,17.2],[37.5],[6,7.2,-0.6],[-89.8,84.7,-169.2],[108.5],[74.9,-47,89.9],[119.9,100],[89.7,-84.9,-171.3],[110.2],[-74.9,50.9,89.8],[120,99.9]]};
 //45
 // let postureJianShen2={"version":6,"data":[[0,0,0],[0,-90,0],[0,0,15.1],[0,0,-7.7],[6,8.4,-3.2],[0],[-6,-6,-0.6],[-6,-8.5,-3.8],[0],[6,6,-0.6],[135.3,-65.4,92.3],[113.5],[-38,18.4,21.2],[119.9,98.8],[-136.8,65.4,93.3],[111.7],[45.5,-25.9,40.9],[122.2,84.7]]};
let postureJianShen2={"version":6,"data":[0,[0,-90,0],[0.2,-0.8,13.7],[0,0,-8.6],[6,0,0],[0],[-6,-6,-0.6],[-6,0,0],[0],[6,6,-0.6],[100.3,-73.5,57.3],[118.4],[-33.7,50.2,18.4],[120,100],[-89.6,72.1,43.7],[121.2],[-6.1,-49,0],[120,100]]}
 //46
 // let postureJianShen3={"version":6,"data":[[0,0,0],[-179.3,-48.8,174.6],[-11.6,22.8,15],[-2.5,26.5,5.6],[5.1,13.8,21.1],[45.1],[-6,-6,4.6],[-1.2,0.5,9.6],[7.9],[6,6,-1.4],[4.2,-29.3,-5.7],[94],[16.4,-61.6,28.3],[113.1,100.5],[-92.9,57.1,92.1],[83.7],[13.2,-33.3,-3.2],[73.7,41]]};
let postureJianShen3={"version":6,"data":[0,[-180,-66.9,-180],[-12,-4.2,-2.9],[-2.7,15.5,10.1],[1.6,-28.3,26.8],[56],[-6,-6,13.1],[-6,0,0],[0],[6,6,-0.6],[4.8,-44.4,-7.3],[89.7],[61.3,-50.1,72.4],[120,100],[-29.6,68.1,13.7],[98.7],[20.7,-43.1,8.3],[100.7,66.4]]}
//47
// let postureJianShen4={"version":6,"data":[[0,-0.2,0],[0,87.3,0],[0,0,-2],[0,0,5],[5.7,19.4,3.1],[15.7],[-10.5,-4.5,-9.5],[-6,-34.6,3.6],[16.1],[6,6,-8.2],[89.6,85.6,14.5],[103.7],[75,-19,90],[120,100],[-89.7,-85,13.6],[104.8],[-75,21.1,90],[120,100]]};
let postureJianShen4={"version":6,"data":[0,[-180,87.7,-180],[0,0,-2],[0,0,5],[6,0,0],[0],[-6,-6,-0.6],[-4.4,-43.6,7.4],[19.8],[6,6,-0.6],[49.4,-86.8,-59.3],[-95.7],[-74.3,-7.5,-90.6],[-113.8,-119],[77.4,73.2,174.7],[-101.2],[-131.1,-10.8,-126.8],[126.5,95.7]]}
 //48
 // let postureJianShen5={"version":6,"data":[[0,-5.5,0],[-1.9,-16.7,-20.7],[19,-18.6,6.3],[9.6,-28.4,6.1],[4.1,4.1,66.1],[63],[-6,-6,-16.1],[0.4,-36.4,54.1],[83.9],[8.3,-8.9,35.9],[124.8,-32.9,104.7],[77.9],[-4.4,-34.5,-6.4],[129.5,85.9],[-36.8,31.5,11.3],[3.2],[15,19.8,-2.3],[107.7,105]]};
let postureJianShen5={"version":6,"data":[0,[0,-49.2,-2.3],[22.7,-2.1,-25.1],[1.6,-18.2,10.8],[-8.4,15.5,40.1],[54.4],[5.9,-7.9,-15.6],[-6,0,23.8],[74.1],[6,6,-0.6],[82.7,-61.8,59.2],[81.9],[36.2,-12.3,-10.5],[120,100],[-25.9,17.3,1.7],[6.5],[25.7,3.6,5.5],[110.5,100]]}
 //49
 // let postureJianShen6={"version":6,"data":[[0,0,0],[-10.9,-90,0],[0,0,-23.2],[0,0,6.5],[6.5,10.3,-2.6],[21.6],[-6,-6,-7.9],[-5.6,-14.5,1.3],[27.9],[6,6,-9.1],[28.9,45.4,116.8],[136],[-15,0,0],[29.2,10],[-26.9,-51.6,118.7],[135.9],[14.8,-0.1,-1.7],[33.3,10]]};
let postureJianShen6={"version":6,"data":[0,[0,-90,0],[0,0,-9.1],[-0.5,5.8,5],[6,0,8.5],[29.4],[-6.2,-17.5,-0.7],[-6,0,9.2],[26.6],[6.2,16.3,-0.7],[11.1,47,121.7],[147.4],[6,30.4,-11],[25.2,26.9],[-11.6,-32.4,127.5],[146],[-57.3,-20.4,-23.1],[8.3,29.3]]}
 //50
// let postureJianShen7={"version":6,"data":[[0,-1.6,0],[29.6,-90,0],[0,0,-2],[0,0,12.1],[-17.3,31.9,51.7],[23.7],[-6,-6,-8],[7.5,-22.9,49.5],[13.2],[6,6,6.9],[70,-40.6,44.2],[91.5],[81.1,-37.7,56.6],[120,99.9],[-84.5,46.3,54.4],[92.5],[-83.7,45.1,81.4],[110,100]]};
let postureJianShen7={"version":6,"data":[0,[0,-90,0],[0.2,-0.8,-36.3],[0,0,14.1],[6,0,11.7],[12],[-9.2,-46.1,-1.2],[-6,0,17.5],[11.6],[6,6,10.1],[81.5,-46.6,43.7],[103],[101.3,-46.2,88.5],[120,100],[-76.2,49.5,38.2],[103.5],[-90.5,39.4,87.1],[120,100]]}
 //51
 let postureTennisZHandHitBall={"version":6,"data":[-6.7,[5.8,-48.8,4.4],[-6.9,-32.1,-19.8],[-12,34.5,6.7],[17.6,14.7,2.8],[68.1],[0.3,-9.9,-14.5],[-15.9,-15.8,44],[78],[9.2,-0.7,-24.9],[36.1,16.9,53.8],[40.3],[-4,9,0.1],[14.3,35.6],[-89.7,-75.6,-12.9],[49.8],[18.6,-9.8,0.9],[120,90.9]]};
//52
let postureTennisFHandHitBall={"version":6,"data":[-6.9,[5.8,-48.8,4.4],[6,14.6,-18.8],[4.7,-33.4,9.4],[0.1,3.4,19.6],[89.2],[0.3,-9.9,0.3],[-8.8,-8,57.1],[64],[6,6,-5.4],[36.1,16.9,39],[128],[-70.4,-13.6,-28.2],[20.3,35.6],[-43.2,29.5,86.6],[72.4],[35.7,-9.1,3.7],[108.4,90.9]]};
//53
let postureBalletArabesque={"version":6,"data":[1.2,[52,-90,0],[0,0,50.3],[0,0,16.8],[1.6,5.2,-49.9],[0],[-6,-6,72.9],[1.2,8.1,54.2],[0],[6,6,67.6],[48.9,0.9,-88.1],[7.2],[-15,0,0],[10,10],[-7,0.6,107.3],[19.6],[15,-47.1,0],[10,10]]};
//54
let postureBalletCroise={"version":6,"data":[1.7,[0,-40.4,-12.9],[9.5,-28.4,24.9],[-4,31.5,13.2],[0.9,14.4,-6.6],[0],[-6,-6,60.7],[11.5,-13.2,26.7],[0],[6,6,63.9],[-17.9,59.9,139.4],[49.7],[28.4,-70.1,31.6],[30,10],[-89.9,-63.5,-38.9],[15],[15,0,0],[10,10]]};
//55
let postureDiaoGang={"version":6,"data":[15,[0,-90,0],[0,0,-2],[0,0,5],[1,0,0],[0],[-8.6,-5.9,46],[-1.3,0,0],[0],[9.8,5.9,37.6],[54,89,99.4],[15],[-9.4,0.6,8.5],[92.9,100],[13.2,-69.5,168.2],[15],[11.4,-15.7,15.4],[108.8,100]]};
//56
let postureGoalKeep={"version":6,"data":[0,[-90,-16,-90],[11.7,-0.4,-3.3],[12.6,19.9,14.9],[5.3,25.9,6.9],[17],[-6,-6,47.6],[-11.3,-32.1,-9.8],[6.5],[6,6,31.8],[15.7,60.1,166.1],[15],[-15,0,0],[10,10],[-21.8,-71.1,153.6],[15],[23.6,35.1,-5],[13.8,10]]};
//57
let postureBasketballJumpShort={"version":6,"data":[8.2,[0,-90,0],[1,-18.3,3.2],[0,0,10.7],[13.9,25.2,-3.4],[10.9],[-6,-6,17.7],[-4.4,1.7,2.8],[11.2],[6,6,47.2],[13.5,4.7,122],[86.1],[-15,0,0],[25.3,10],[-15.3,-2.4,110],[113.1],[90,-64.6,87.6],[24.8,10]]};
//58
let postureGuiShe={"version":6,"data":[-15.4,[-155.9,-87.4,-151.3],[3,-20.5,-2.7],[0,0,5],[16.8,30.9,79.8],[86.1],[-6,-6,8.9],[-15.6,0.3,-2],[93.3],[6,6,49.9],[6.1,40.3,82.2],[0],[-29.7,0.5,5.8],[117.9,100],[-90,6.6,110.9],[57.7],[14.5,81,-9.9],[10,99.9]]};
//59
let postureSkySheJian={"version":6,"data":[8,[156.2,-87.6,161.1],[-1.6,-21.8,-25.4],[-2.1,22.5,4.4],[13,-1.4,21.6],[91.4],[-6,-6,25.5],[-30.1,-51.7,40.2],[134.3],[6,6,49.9],[6.1,40.3,82.2],[0],[-29.7,0.5,5.8],[117.9,100],[-90,6.6,110.9],[57.7],[14.5,81,-9.9],[10,99.9]]};
//60
let postureDaoLi={"version":6,"data":[7.9,[-3.4,-89.2,154.5],[0,0,24.9],[0,0,25],[-4,-3.4,19.7],[0],[1.1,-12,57],[2.1,2.5,19],[0],[10.1,3.1,54.3],[-5.4,53.4,174.8],[15],[-81.1,0,0],[-10,10],[2.6,-52.9,171.9],[15],[89.9,0,0],[10,10]]};
//61
let postureZhouXingZhiJia={"version":6,"data":[-2.6,[-3.4,-89.2,146.4],[0,0,42.3],[0,0,42],[-4,-3.4,-37.6],[8],[1.1,-12,57],[2.1,2.5,64.8],[134.6],[10.1,3.1,47.9],[-7.9,27.9,166.5],[94.1],[0.9,57.3,12.6],[4.7,2.2],[7.2,-21.2,165.2],[93.5],[0,-59.4,8.6],[1,10]]};
//62
let postureTunBuSheJi={"version":6,"data":[-3.8,[-155.9,-87.4,-151.4],[4.5,10.4,-10.2],[3,15.3,2.1],[16.8,30.9,28.6],[36.6],[-14.2,-7,6.6],[-15.6,0.3,0.2],[42],[20.5,-3.4,-32.3],[20.3,-6.8,43.3],[31.5],[52.2,-27.1,15.8],[76.8,36],[-5.8,39,12.2],[69.1],[7.6,7.5,15],[119.9,99.9]]};
//63
let postureKongShouDaoTiTui={"version":6,"data":[2,[-68.6,-34.3,-54.9],[6.7,13,10.9],[6.7,-18.6,-10.1],[63.1,60.6,-6.1],[7.2],[-12.6,4.6,0.1],[-58.5,-39.1,34.5],[10.4],[31.3,-29.8,19.7],[57.6,-28.6,52.5],[117.9],[-15,0,0],[120,99.9],[-19.3,54.3,-10.9],[103.7],[15,0,0],[115.3,99.9]]};
//64
let postureJianCeJi={"version":6,"data":[-3.8,[15.7,-90,0],[-6.7,22.2,11.3],[1.4,-17.1,0.3],[4.9,-0.9,-4.1],[15.4],[-22.7,-17,-38.4],[-6,0,54.6],[39.6],[6,6,-0.6],[-9.9,0.8,29.8],[95.8],[-1.3,-52.8,38.7],[119.9,100],[-83.9,10.7,88.1],[66.6],[22.7,-10.3,-3],[113.8,87.6]]};
//65
let postureSwordBlock={"version":6,"data":[-3.8,[15.7,-90,0],[-6.7,22.2,11.3],[1.4,-17.1,0.3],[4.9,-0.9,-4.1],[15.4],[-22.7,-17,-38.4],[-6,0,54.6],[39.6],[6,6,-0.6],[32.7,-42.7,77.1],[39.9],[18.3,-22.4,39.5],[120,99.4],[-64.8,12.9,24.1],[87.4],[8.2,19.7,-6.8],[113.8,87.6]]};
//66
let postureDigging={"version":6,"data":[-6.4,[70.6,-90,0],[4,-26.3,2.3],[-15.4,34.1,29.7],[-39.1,13.5,117.6],[30.3],[-1.3,-5.8,13.8],[24.5,-16.3,116],[36.3],[9,-14.5,10.1],[11.6,18.6,49.3],[17.5],[-89.3,-83.6,-111.4],[120,100],[-32.7,5.9,32.1],[79.2],[22.7,-73.9,6.2],[104.8,100]]};
//67
let postureSit3={"version":6,"data":[-29.6,[8.6,-90,0],[0,0,-8.2],[0,0,5],[6,0,154.1],[112],[-6,-6,36.7],[-6,0,133.5],[73.4],[6,6,-3.9],[25.1,-24.5,51.1],[17],[5.7,1.9,4.9],[83,109.7],[-29,21.7,52.6],[37.3],[-45.2,-29.1,-21.3],[21.8,10]]};
//68
let postureSit4={"version":6,"data":[-29.6,[-41.1,-90,0],[0,0,-9.2],[0,0,-15.9],[6,0,49.5],[0],[-6,-6,17.7],[-6,0,110.9],[123.4],[6,6,26.8],[25.1,-24.5,-36.3],[0],[-59.4,-8.1,-2.7],[4.9,-2.2],[-29,21.7,-37],[8.5],[49.2,12.5,40.7],[10.3,11.4]]};
//69
let postureSit5={"version":6,"data":[-30.1,[-0.2,-90,0],[0,0,-16.2],[0,0,5],[-71.7,-21.6,131.7],[156.1],[-49.7,-30.7,21.4],[65.8,12.9,129.7],[147.4],[36.8,1.8,53.7],[25.1,-24.5,32.1],[42.3],[8.3,47.9,-3.6],[40.5,20.5],[-29,21.7,35.1],[37.3],[-45.2,-29.1,-15.6],[21.8,10]]};
//70
let postureSit6={"version":6,"data":[-30.4,[8.6,-90,0],[0,0,-11.1],[0,0,5],[-7.5,-9.9,153.8],[112],[2.4,4.3,36.5],[57.5,21.9,132.4],[114.3],[22.4,15,39.2],[27.5,-27.6,31.7],[58.3],[21,42.9,9.4],[11.8,46.9],[-29,21.7,41.6],[51.4],[-45.2,-29.1,-21.3],[21.8,10]]};
//71
let postureSit7={"version":6,"data":[[0,-27.9,0],[-108.1,-67.6,-81.7],[27.8,24.7,-16.6],[2.2,-22.2,-5.4],[-50.2,26.6,126.6],[143.9],[-29.9,-10.6,44.4],[-56.1,31.4,99.5],[121.2],[-4.9,-2.6,34.8],[17.1,-24.1,-12.6],[3.5],[-76.6,-6.2,-19.5],[4.9,1.6],[-23.9,34.6,12.2],[39.3],[53.1,-61.6,62],[13.1,13]]};

//72
let postureSit8={"version":6,"data":[[0,-29.5,0],[-10.5,-90,0],[0,0,-23.7],[0,0,-8.1],[-76.6,-2.2,107.4],[136.7],[-22.3,-3.7,19.7],[-1.8,0,147.9],[138.7],[1.6,4.3,21.4],[39.4,-49.4,62.8],[21.4],[-14.5,43.2,23.2],[21.5,10],[-33.9,36.7,35.6],[40.4],[-9.8,-66.9,38.6],[30.8,10]]};

//73
let postureSit9={"version":6,"data":[[0,-29.6,0],[8.6,-90,0],[0,0,-8.2],[0,0,-6.6],[2.3,32.1,151],[112],[-6.8,-6.4,33.2],[-2.4,-27.2,149.3],[107],[7,6.4,35.6],[83.4,-35.9,68.9],[40.1],[8.9,19.2,-4.5],[25.1,29],[-88.3,35.7,72],[37.3],[-19.7,-30.2,-3.6],[21.8,10]]};
//74
let postureLying1={"version":6,"data":[-32.4,[-87.6,89.8,-7.1],[0,0,30.2],[0,0,30.6],[-2.9,4.7,6.1],[107.9],[-6,-6,46.8],[3.6,-5.2,6.9],[81.5],[6,6,-16.9],[77.6,18.9,67.1],[105.6],[5.4,0,0],[10,10],[-81.7,-20.3,71.8],[107.5],[-4.9,-2.7,-1],[12.5,10]]};

//75
let postureLying2={"version":6,"data":[-29.9,[-71.7,-90,0],[-5,-4,-12.8],[0,0,-19.6],[2.1,12.6,18.2],[2.8],[-6,-6,-0.6],[-2.2,-8.8,74.9],[113.5],[-9.3,-10.4,34.1],[-0.3,-23,-71.4],[105.4],[0.3,52.3,-0.5],[10,10],[4,43.9,-63.2],[99.1],[3.3,-21.4,-5.5],[0.4,10]]};

//76
let postureChairPose={"version":6,"data":[[0,-11.5,0],[43.9,-90,0],[0,0,12.9],[0,0,19.7],[-4.9,3.6,114.4],[84.9],[2,-6,-13.3],[4.1,-6.8,114],[86.8],[-2.5,6,-15.1],[-4.8,9.1,175.7],[2.7],[0.9,27.9,8.4],[-0.6,2.1],[4,4.1,177.4],[5.9],[-1.5,-25.3,9.4],[-2.1,1.7]]};

//77
let postureBridgePose={"version":6,"data":[[0,-17.2,0],[-108.4,-90,0],[0,0,25],[0,0,-23.5],[5.4,-2.1,-15.2],[93.2],[-6,-6,0.1],[-4.9,3.9,-15.9],[92.8],[6,6,-0.6],[-2.5,11.9,-53.3],[9.1],[8.7,0,0],[68.3,38.8],[4.9,-11.8,-53.2],[9.9],[-29.3,0,0],[49,82.4]]};

//78
let postureShuFuJiaoHuaiPose={"version":6,"data":[[0,-30.4,0],[0,-90,0],[0,0,7],[0,0,5],[-63,-8.9,155.2],[141.4],[-12.2,-7.6,11.6],[59.9,9.3,154.1],[142.2],[14.8,7,7.1],[4.9,0,-14.8],[6.4],[-92.2,-0.6,6.2],[10,10],[-5.5,0.3,-11.8],[0.3],[92.6,1.7,14.4],[10,10]]};
//79
let postureJuGongPose={"version":6,"data":[[0,-32.6,0],[101.3,-90,0],[0,0,43.8],[0,0,25],[10.1,-8.4,-27.3],[95.5],[-6,-6,48.6],[-13.1,7.6,-27.1],[95.8],[6,6,38.9],[7,-0.6,-58.5],[-0.5],[-15,5.4,-5.3],[52,63.2],[-7,0.6,-59.9],[0],[15,-4.4,-7.6],[54,63]]};

//80
let postureCamelPose={"version":6,"data":[[0,-15,0],[-27.2,-90,0],[0,0,32],[0,0,25],[10.1,-8.4,-27.3],[88.9],[-6,-6,58.2],[-13.1,7.6,-27.1],[89.4],[6,6,54.5],[7.5,-1.4,-57.8],[-0.5],[-15,5.4,-5.3],[16.7,13.1],[-7,0.6,-55.9],[0],[15,-4.4,-7.6],[13,2.2]]};

//81
let postureBoatPose={"version":6,"data":[[0,-30,0],[-38,-90,0],[0,0,1.1],[0,0,-7.8],[6.3,-1.1,103.9],[0],[-6,-6,38.9],[-6.2,0.9,103.9],[0],[6,6,40.7],[2.2,-6.7,51.8],[4.3],[-5.1,0,0],[10,10],[-2.5,6.1,51.1],[6],[3,0,0],[10,10]]};

//82
let postureWuYaPose={"version":6,"data":[[0,-14.6,0],[44.6,-90,0],[0,0,-60],[0,0,-8.6],[-17.1,9,141],[150],[-8.7,28.7,27.7],[15.3,-11,141.2],[149.9],[15.6,-25.5,29.7],[7,-0.6,72.2],[16.2],[-90,-11.6,0],[-0.5,10],[-7,0.6,73.1],[13.4],[90,19.4,0],[-1.9,10]]};

//83
let postureCartWheelPose={"version":6,"data":[[0,-5.9,0],[-78,-90,0],[0,0,36.7],[0,0,30],[16.3,-3.5,-28.3],[52.4],[-6,-6,-0.2],[-16.1,2.6,-28.8],[48.5],[6,6,3.2],[-46.9,26.1,-135.1],[26.5],[-104.5,0,0],[10,10],[30,-10.7,-139.8],[27.7],[97.5,0,0],[10,10]]};

//84
let postureDaoLiPose={"version":6,"data":[7.9,[-3.4,-89.2,154.5],[0,0,24.9],[0,0,25],[-4,-3.4,19.7],[0],[1.1,-12,57],[2.1,2.5,19],[0],[10.1,3.1,54.3],[-5.4,53.4,174.8],[15],[-81.1,0,0],[-10,10],[2.6,-52.9,171.9],[15],[89.9,0,0],[10,10]]};

//85
let postureYanwu={"version":6,"data":[0,[0,-90,0],[5.2,-12.1,-1.1],[8.8,-19.7,14.4],[9.3,-0.4,-7],[3.6],[-14,-5.9,-1.3],[-5.2,-11.3,5.4],[8.5],[6,6,-0.6],[43.7,-30.4,10.6],[15],[-82.5,0.4,58.3],[10,10],[-1.8,46.3,-7.2],[85],[33.6,-16,0],[10,10]]};
//86
let posturePicha={"version":6,"data":[-28.9,[17.9,-90,0],[0,0,19.6],[0.1,10.9,1.4],[-17.1,80,106.5],[0],[-6,-6,-0.6],[0.7,-81,90],[0],[6,6,-0.6],[26.5,-52.7,-7.4],[12.3],[-60.2,0,0],[30.1,10],[-29.9,62.5,-1.7],[12.9],[43,13.9,-23.7],[4,10]]};
//87
let postureYingla={"version":6,"data":[-11.1,[71.6,-90,0],[-0.8,-0.3,12.9],[0,0,15.4],[0.3,5.9,134.2],[68.5],[-8.5,-5.4,-9.5],[1.8,-7.6,136],[66.9],[6,6,-3.7],[38.7,-24.1,55.5],[10.1],[-15,49.6,7.1],[90.2,100],[-53.5,28.1,59.1],[8.4],[9.5,-25.3,8.9],[95,100]]};
//88
let postureJuzhong={"version":6,"data":[-14.2,[21.6,-90,0],[0,0,3.9],[0,0,21.7],[-2.9,34.8,91.5],[112.4],[-10.9,-4.3,-39],[6.9,-30.5,96.2],[111.7],[1,4.4,-34.8],[-39.7,16.4,-165],[1.6],[-63.6,-6.6,59.4],[76.1,51.9],[42.4,-22.9,-160.9],[-2.8],[67.3,9.5,60.9],[100.4,10]]};
//89
let postureGolf={"version":6,"data":[-1.2,[35.6,-90,0],[-0.3,0.1,-1.6],[2.7,-28.3,5.7],[9.3,1.4,41.9],[7.1],[-8.9,-6,0.4],[-7.6,-0.1,44.1],[4.9],[8.5,6,4.4],[-5.9,-13.8,38.1],[0],[-15,0,-55],[120,100],[9.3,13.7,35.4],[3.1],[12.3,7.2,-66.6],[120,100]]};
//90
let postureGolfHuigan={"version":6,"data":[0,[0,-90,0],[12.1,45,8.2],[0.6,-13.2,4.9],[-3.8,-5.9,1.3],[5.2],[1.6,-6.7,-3.5],[-1.7,21.8,-10.2],[23.8],[2.4,-2.2,40.3],[63.1,72.5,17.4],[139.5],[-23.5,-13.8,-19.9],[109.3,101.9],[-57.7,29,120.3],[96.7],[3.5,-5.5,18.6],[122.7,79.3]]};
//91
let postureFuwoSheji={"version":6,"data":[-31.9,[-155.9,-87.4,121.3],[-14.8,-9.8,3.8],[0,0,21.7],[16.8,30.9,-5.8],[0.1],[-6,-6,72.2],[-28.1,-25.3,-5.8],[0.1],[6,6,54.7],[63.3,61.8,92.7],[81.8],[-175.1,-24.7,146.3],[97.7,36],[-50.3,-34.5,87.9],[115.2],[72.9,13.9,-54],[120,99.9]]};
//92
let postureJingli={"version":6,"data":[0,[0,-90,0],[0,0,-2],[0,0,5],[-4.8,19.1,-1.8],[0],[3.8,-6,0.4],[2.5,-17.5,-2.3],[0],[0.3,6,0],[6.1,-48,-2.4],[15],[-14,-39.5,-9.7],[10,10],[-51.7,-60.7,51.8],[140.4],[-8.2,67,8.6],[4.8,1.6]]};
//93
let postureWashGround={"version":6,"data":[-23,[72.7,-90,0],[-6,-16,10],[-0.3,6.6,5.5],[-10.1,23.2,121],[147.8],[-6.6,1.9,28.1],[3.5,-15.9,121.3],[147.5],[6,6,28.4],[47.3,-4.3,51.5],[56],[-90,16.2,74.9],[50.5,63.9],[-86.2,13.9,101.4],[3],[79.5,0.8,-30.7],[15.6,-3.8]]};
//94


// function postureToStr(posture){
//     return JSON.stringify(posture)
// }

let posecodes=[JSON.stringify(postureDefault),JSON.stringify(postureWalk),JSON.stringify(postureStand1),JSON.stringify(postureStand2),JSON.stringify(postureBackwards)
,JSON.stringify(postureCrossArm),JSON.stringify(postureKneeling),JSON.stringify(postureSquatting),JSON.stringify(posturePush),JSON.stringify(posturePull),
JSON.stringify(postureSlowrun),JSON.stringify(postureFastrun),JSON.stringify(postureDance),JSON.stringify(postureDive),JSON.stringify(postureKick),
JSON.stringify(postureYunQiu),JSON.stringify(postureSlamDunk),JSON.stringify(postureBike),JSON.stringify(postureChongLang),JSON.stringify(postureFire),
JSON.stringify(postureGaoTiTui),JSON.stringify(postureSit1),JSON.stringify(postureSit2),JSON.stringify(postureSad),JSON.stringify(postureHappy),JSON.stringify(postureJiDong),
    JSON.stringify(postureSurprise),JSON.stringify(posturePa),JSON.stringify(postureSleep),JSON.stringify(postureZhi),JSON.stringify( postureFaQiu),JSON.stringify(postureYinTi),JSON.stringify(postureYouGouQuan)
    ,JSON.stringify(postureShangGouQuan),JSON.stringify(postureZuoCiQuan),JSON.stringify(postureJianZhiCi),JSON.stringify(postureJianPiKan),JSON.stringify(postureJianXieJi),JSON.stringify(postureHeiKeDiGuo)
    ,JSON.stringify(postureTitanic),JSON.stringify(postureHarrypoter),JSON.stringify(postureStarWar),JSON.stringify(postureSuperman),JSON.stringify(postureShenqinvxia),JSON.stringify(postureJianShen1)
    ,JSON.stringify(postureJianShen2),JSON.stringify(postureJianShen3),JSON.stringify(postureJianShen4),JSON.stringify(postureJianShen5),JSON.stringify(postureJianShen6)
    ,JSON.stringify(postureJianShen7),JSON.stringify(postureTennisZHandHitBall),JSON.stringify(postureTennisFHandHitBall),JSON.stringify(postureBalletArabesque),JSON.stringify(postureBalletCroise)
    ,JSON.stringify(postureDiaoGang),JSON.stringify(postureGoalKeep),JSON.stringify(postureBasketballJumpShort),JSON.stringify(postureGuiShe),JSON.stringify(postureSkySheJian)
    ,JSON.stringify(postureDaoLi),JSON.stringify(postureZhouXingZhiJia),JSON.stringify(postureTunBuSheJi),JSON.stringify(postureKongShouDaoTiTui),JSON.stringify(postureJianCeJi)
    ,JSON.stringify(postureSwordBlock),JSON.stringify(postureDigging),JSON.stringify(postureSit3),JSON.stringify(postureSit4),JSON.stringify(postureSit5)
    ,JSON.stringify(postureSit6),JSON.stringify(postureSit7),JSON.stringify(postureSit8),JSON.stringify(postureSit9),JSON.stringify(postureLying1),JSON.stringify(postureLying2)
    ,JSON.stringify(postureChairPose),JSON.stringify(postureBridgePose),JSON.stringify(postureShuFuJiaoHuaiPose),JSON.stringify(postureJuGongPose),JSON.stringify(postureCamelPose)
    ,JSON.stringify(postureBoatPose),JSON.stringify(postureWuYaPose),JSON.stringify(postureCartWheelPose),JSON.stringify(postureDaoLiPose),JSON.stringify(postureYanwu)
    ,JSON.stringify(posturePicha),JSON.stringify(postureYingla),JSON.stringify(postureJuzhong),JSON.stringify(postureGolf),JSON.stringify(postureGolfHuigan),JSON.stringify(postureFuwoSheji)
    ,JSON.stringify(postureJingli),JSON.stringify(postureWashGround)]




//预设姿势里每个姿势点击后的响应事件。
//虽然出现了“function”，但这里是匿名回调函数，会直接执行，不是函数定义
$(".setposebtn").each(function() {
    $(this).on('click', function() {
        //posecodes[]是从姿势code数组中取出当前姿势
        setPostureStr(posecodes[$(this).data("posecode")]);
        // currentPosename=$(this).children("span").text();
        // setUrl(currentPosename);
    });
});


function setUrl(posename){
    // var url = location.pathname +posecode
    var url = 'http://127.0.0.1:5000/pose/' +posename
    history.pushState({url: url, title: document.title}, document.title, url)
    console.log("seturl")
}

if(getCookieValue("controlshint") != "false") {
    $(".controlshint").css("display", "inline-block");
}

//关闭左侧的提示悬浮
$(".controlshint").click(function() {
    closeControlsHint();
});



//向场景添加地面
ground = new THREE.Mesh( new THREE.CircleGeometry(80, 64), new THREE.MeshPhongMaterial({ color: '#d9d9d9', shininess: 1 }) );
ground.receiveShadow = true;
ground.position.y = -29.5;
ground.rotation.x = -Math.PI / 2;
ground.name="Ground";//设置个名字，用鼠标移动判断时会用到
scene.add(ground);


gridHelper = new THREE.GridHelper( 2000, 100 );
gridHelper.position.y = -29.5;
gridHelper.material.opacity = 0.25;
gridHelper.material.transparent = true;
gridHelper.name="Grid";
scene.add( gridHelper );

//显示地面 checkbox状态切换
$("#toggle-floor").change(function() {
    if(this.checked) {
        scene.add(ground);
        renderer.render(scene, camera);
    } else {
        scene.remove(ground);
        renderer.render(scene, camera);
    }
});

//显示阴影 checkbox状态切换
$("#toggle-shadow").change(function() {
    if(this.checked) {
        light.castShadow = true;
        renderer.render(scene, camera);
    } else {
        light.castShadow = false;
        renderer.render(scene, camera);
    }
});


//显示光源及辅助线 checkbox状态切换
$("#toggle-lightHelper").change(function() {
    if(this.checked) {
        scene.add(lightHelper);
        renderer.render(scene, camera);
    } else {
        scene.remove(lightHelper);
        renderer.render(scene, camera);
    }
});


//视野滑块滑动的响应。mousemove是jquery的方法
$("#fovrange").on("change mousemove", function() { 
    $(this).next().val($(this).val()); 
    camera.fov = $(this).val();
    //updateprojectionmatrix方法是threejs的固有方法，更新相机的投影矩阵
    camera.updateProjectionMatrix();
});

//分辨率滑块滑动的响应。
$("#resrange").on("change mousemove", function() { 
    $(this).next().val($(this).val() + 'x');
    //setPixelRatio是threejs的固有方法 
    renderer.setPixelRatio($(this).val());
    renderer.render(scene, camera); 
});

$("#lightrange").on("change mousemove", function() { 
    $(this).next().val($(this).val()); 
    light.intensity = $(this).val();
    renderer.render(scene, camera); 
});
$("#lightpositionx").on("change mousemove", function() {
    $(this).next().val($(this).val());
    light.position.x = $(this).val();
    renderer.render(scene, camera);
});
$("#lightpositiony").on("change mousemove", function() {
    $(this).next().val($(this).val());
    light.position.y = $(this).val();
    renderer.render(scene, camera);
});
$("#lightpositionz").on("change mousemove", function() {
    $(this).next().val($(this).val());
    light.position.z = $(this).val();
    renderer.render(scene, camera);
});

$("#backcolor").on("input change", function() { 
    scene.background = new THREE.Color($(this).val());
    renderer.render(scene, camera); 
});


//头部尺寸、身体尺寸等一系列属性的滑块设置。model.head.scale、model.l_arm.scale等都是mannequin.js的固有属性
$("#headsizerange").on("change mousemove", function() { $(this).next().val($(this).val()); model.head.scale.set($(this).val(),$(this).val(),$(this).val()); renderer.render(scene, camera); });
$("#torsosizerange").on("change mousemove", function() { $(this).next().val($(this).val()); model.torso.scale.set($(this).val(),model.torso.scale["y"],model.torso.scale["z"]); renderer.render(scene, camera); });
$("#torsowidthrange").on("change mousemove", function() { $(this).next().val($(this).val()); model.torso.scale.set(model.torso.scale["x"],model.torso.scale["y"],$(this).val()); renderer.render(scene, camera); });
$("#torsoheightrange").on("change mousemove", function() { $(this).next().val($(this).val()); model.torso.scale.set(model.torso.scale["x"],$(this).val(),model.torso.scale["z"]); renderer.render(scene, camera); });
$("#armlsizerange").on("change mousemove", function() { $(this).next().val($(this).val()); model.l_arm.scale.set($(this).val(),$(this).val(),$(this).val()); renderer.render(scene, camera); });
$("#armrsizerange").on("change mousemove", function() { $(this).next().val($(this).val()); model.r_arm.scale.set($(this).val(),$(this).val(),$(this).val()); renderer.render(scene, camera); });
$("#leglsizerange").on("change mousemove", function() { $(this).next().val($(this).val()); model.l_leg.scale.set($(this).val(),$(this).val(),$(this).val()); renderer.render(scene, camera); });
$("#legrsizerange").on("change mousemove", function() { $(this).next().val($(this).val()); model.r_leg.scale.set($(this).val(),$(this).val(),$(this).val()); renderer.render(scene, camera); });

//右侧箭头控制 设置面板 的显示和隐藏
$(".opensettingsbtn, .hidepanelbtn").on('click', function() {
    if ($(window).width() < 759) {
        if($(".panel").hasClass("expanded")){ 
            $(".panel").removeClass("expanded");
            $("html").css("overflow-y", "auto");
        } else {
            $(".panel").addClass("expanded");
            $("html").css("overflow-y", "hidden");
        }
    } else {        
        if($(".panel").hasClass("hidden")){ 
            $(".panel, .hidepanelbtn").removeClass("hidden");
        } else {
            $(".panel, .hidepanelbtn").addClass("hidden");
        }
    }
});

//各预设姿势按钮上的i小svg图标悬浮信息：该姿势和'+ $(this).data("prop") +' 道具搭配使用效果最佳。
$('.setposebtn[data-prop]').each(function(){
    $(this).append('<img src="https://fakeclients.com/imgs/information-outline.svg" class="presetinfoicon"><div class="presetinfo">该姿势和'+ $(this).data("prop") +' 道具搭配使用效果最佳</div><span class="presetinfopointer"></span>');
});


$("#ss").on('click', function() {
    var image = renderer.domElement.toDataURL("image/png").replace("image/png", "image/octet-stream");
    $("#ssimg").attr("href", image);
    $("#ssimgprev").attr("src", image);
    //$("#ssimg")[0].click();
    //window.location.href=image;
});

//撤销上一步操作按钮：
$("#undo").on('click', function() {
    undo();
});