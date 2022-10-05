/**
 * 3D场景中进行平移，在不旋转的情况下，只看到物体跟随鼠标以平行于窗口的轨迹运动
 */
let mesh;

// function initGui() {
//     //声明一个保存需求修改的相关数据的对象
//     let gui = {};
//     let datGui = new dat.GUI();
//     //将设置属性添加到gui当中，gui.add
// }

function init() {
    // initGui();//GUI.执行的话右上角会出现一个按钮 close controls
    addEvent();
    window.onresize = onWindowResize;
}

let ac,//当前活动对象
    plane,//平移平面由活动对象初始位置和当前相机方向向量确定
    startPosition,//目标位置,使用终末位置计算平移量，当然也可以使用递增量
    startMouseWorldPosition,//拖动起始点射线与平移平面的交点
    endMouseWorldPosition;//拖动结束点射线与平移平面的交点

function addEvent() {

    //PC端鼠标按下
    renderer.domElement.addEventListener('mousedown', function (e) {
        if(e.which===3){ //鼠标右键才可移动，左键移动的问题是当人和道具重叠时操作可能有问题
            let raycaster = screenToWorld(e.clientX, e.clientY);
            //获取射线经过的在指定范围内的物体集合
            let objCanMove=[];
            for(i=0;i<scene.children.length;i++){
                console.log(scene.children[i]);
                // if(scene.children[i].posture===undefined){
                // 	objCanMove.push(scene.children[i]);
                // }
                //地面不允许移动：
                if(scene.children[i].name!=="Ground" && scene.children[i].name!=="Grid"){
                    objCanMove.push(scene.children[i]);
                }
            }
            // console.log("允许移动的物体："+objCanMove.length);
            //let intersect = raycaster.intersectObjects(scene.children);
            let intersect = raycaster.intersectObjects(objCanMove);
            if (intersect.length > 0) {
                ac = intersect[0].object;
                //创建经过物体中心点的垂直于相机方向的平面
                plane = new THREE.Plane();
                plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(plane.normal), ac.position);
                //如果使用世界原点构建平面会导致物体位移和鼠标位移不对等，应该使用物体的初始位置中心作为视角切面平面
                // plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(plane.normal), new THREE.Vector3());
                startMouseWorldPosition = new THREE.Vector3();
                raycaster.ray.intersectPlane(plane, startMouseWorldPosition);
                //备份物体初始点
                startPosition = ac.position.clone();
            }
            // }
            // else{
            // 	console.log("camera position"+camera.position.x);
            // }

        }
    });




//pc端鼠标移动
    renderer.domElement.addEventListener('mousemove', function (e) {
        if (ac) {
            e.preventDefault();
            e.stopPropagation();
            //鼠标移动点处创建射线
            let raycaster = screenToWorld(e.clientX, e.clientY);
            endMouseWorldPosition = new THREE.Vector3();
            //目标点射线与平移平面的焦点即为平移目标点
            raycaster.ray.intersectPlane(plane, endMouseWorldPosition);
            //计算平移向量
            let addVector3 = endMouseWorldPosition.sub(startMouseWorldPosition);
            let target = startPosition.clone().add(addVector3).clone();
            ac.position.copy(target)
        }
    });




//pc端手指抬起
    renderer.domElement.addEventListener('mouseup', function (e) {
        if(e.which===3) { //鼠标右键才可移动，左键移动的问题是当人和道具重叠时操作可能有问题
            console.log("obj position:"+ac.position.x+","+ac.position.y+","+ac.position.z);
            ac = false
        }
    });



    //手机端手指按下
    renderer.domElement.addEventListener('touchstart', function (e) {
        // if(e.touches.length > 1){ //至少两根手指才能移动道具--问题：有时和缩放冲突
            let raycaster = screenToWorld(e.touches[0].pageX, e.touches[0].pageY);
            //获取射线经过的在指定范围内的物体集合
            let objCanMove=[];
            for(i=0;i<scene.children.length;i++){
                console.log(scene.children[i]);
                // if(scene.children[i].posture===undefined){
                // 	objCanMove.push(scene.children[i]);
                // }
                //地面不允许移动：
                if(scene.children[i].name!=="Ground" && scene.children[i].name!=="Grid" ){
                    objCanMove.push(scene.children[i]);
                }
            }
            // console.log("允许移动的物体："+objCanMove.length);
            //let intersect = raycaster.intersectObjects(scene.children);
            let intersect = raycaster.intersectObjects(objCanMove);
        if (intersect.length > 0) {
            ac = intersect[0].object;
            // ac.material.color.set(0x000000);
            console.log(ac.type);
            //创建经过物体中心点的垂直于相机方向的平面
            plane = new THREE.Plane();
            plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(plane.normal), ac.position);
            //如果使用世界原点构建平面会导致物体位移和鼠标位移不对等，应该使用物体的初始位置中心作为视角切面平面
            // plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(plane.normal), new THREE.Vector3());
            startMouseWorldPosition = new THREE.Vector3();
            raycaster.ray.intersectPlane(plane, startMouseWorldPosition);
            //备份物体初始点
            startPosition = ac.position.clone();
            console.log(startMouseWorldPosition);
            //lookDirection = camera.getWorldDirection();
        }
            // }
            // else{
            // 	console.log("camera position"+camera.position.x);
            // }

        // }
    });



//手机端手指移动
    renderer.domElement.addEventListener('touchmove', function (e) {
        if (ac) {
            // e.preventDefault();
            // e.stopPropagation();

            //posture-editors.js可看出，对camera或场景？的旋转和移动使用了orbitcontrols.js，只要关闭，拖拽对camera或场景？就无效。
            //这样移动道具时，camera或场景？就不会旋转了：
            controls.enabled=false;//controls在posture-editors.js中定义

            //鼠标移动点处创建射线
            let raycaster = screenToWorld(e.touches[0].pageX, e.touches[0].pageY);
            endMouseWorldPosition = new THREE.Vector3();
            //目标点射线与平移平面的焦点即为平移目标点
            raycaster.ray.intersectPlane(plane, endMouseWorldPosition);
            //计算平移向量
            let addVector3 = endMouseWorldPosition.sub(startMouseWorldPosition);
            let target = startPosition.clone().add(addVector3).clone();
            ac.position.copy(target)
        }
    });


//手机端手指抬起
    renderer.domElement.addEventListener('touchend', function (e) {
        // if(e.touches.length > 1) { //至少两根手指才能移动道具--问题：有时和缩放冲突
        //     console.log("obj position:"+ac.position.x+","+ac.position.y+","+ac.position.z);
            ac = false
        // }
    });


}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

/**
 *
 * @param offsetX 鼠标相对于画布左上角横向坐标
 * @param offsetY 鼠标相对于画布左上角纵向坐标
 * @returns {Raycaster|Raycaster}
 */
function screenToWorld(offsetX, offsetY) {
    let x = (offsetX / window.innerWidth) * 2 - 1,
        y = -(offsetY / window.innerHeight) * 2 + 1;
    let raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
    return raycaster;
}


