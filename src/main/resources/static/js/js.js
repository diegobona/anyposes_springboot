
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
    ,JSON.stringify(postureTitanic),JSON.stringify(postureHarrypoter),JSON.stringify(postureStarWar),JSON.stringify(postureSuperman),JSON.stringify(postureShenqinvxia)]




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