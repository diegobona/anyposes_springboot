


//---------------------------------------------生成cube
function addCube(){
    cube = new THREE.Mesh(
        new THREE.BoxGeometry(20,20,20),
        new THREE.MeshPhongMaterial({color: 'crimson', shininess: 200})
    );
    cube.castShadow = true;

    cube.position.x =-28;
    cube.position.y =-20;
    cube.position.z =-22;
    cube.name="fangkuai";
    scene.add(cube);
    renderer.render(scene, camera);
    return cube;
}

//左手拿棍checkbox状态切换
$("#toggle-cube").change(function() {
    if(this.checked) {
        //$("#toggle-stick-r").prop('checked', false);
        //alert("y_l:"+model.l_fingers.y);
        let cube=addCube();
        console.log(cube.type);
    } else {
        // console.log('查看Scene的子对象',scene.children);
        try{
            cube.material.visible=false;
            renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }
    }
});

//---------------------------------------------生成立方柱
function addHighCube(){
    highcube = new THREE.Mesh(
        new THREE.BoxGeometry(20,60,20),
        new THREE.MeshPhongMaterial({color: 'crimson', shininess: 200})
    );
    highcube.castShadow = true;

    highcube.position.x =28;
    highcube.position.y =0.28;
    highcube.position.z =-22;
    scene.add(highcube);
    renderer.render(scene, camera);
    return highcube;
}

$("#toggle-highcube").change(function() {
    if(this.checked) {
        //$("#toggle-stick-r").prop('checked', false);
        //alert("y_l:"+model.l_fingers.y);
        let highcube=addHighCube();
        // console.log(cube.type);
    } else {
        // console.log('查看Scene的子对象',scene.children);
        try{
            highcube.material.visible=false;
            renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }
    }
});

//---------------------------------------------生成锥形
function addCone(){
    cone = new THREE.Mesh(
        new THREE.ConeGeometry(5,20,32),
        new THREE.MeshPhongMaterial({color: 'crimson', shininess: 200})
    );
    cone.castShadow = true;

    cone.position.x =-32;
    cone.position.y =-19.3;
    cone.position.z =0;
    scene.add(cone);
    renderer.render(scene, camera);
    return cone;
}

$("#toggle-cone").change(function() {
    if(this.checked) {
        //$("#toggle-stick-r").prop('checked', false);
        //alert("y_l:"+model.l_fingers.y);
        let cone=addCone();
        // console.log(cube.type);
    } else {
        // console.log('查看Scene的子对象',scene.children);
        try{
            cone.material.visible=false;
            renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }
    }
});

//---------------------------------------------生成圆柱体
function addCylinder(){
    cylinder = new THREE.Mesh(
        new THREE.CylinderGeometry(5,5,20,32),
        new THREE.MeshPhongMaterial({color: 'crimson', shininess: 200})
    );
    cylinder.castShadow = true;

    cylinder.position.x =-32;
    cylinder.position.y =-19.3;
    cylinder.position.z =10;
    scene.add(cylinder);
    renderer.render(scene, camera);
    return cylinder;
}

$("#toggle-cylinder").change(function() {
    if(this.checked) {
        //$("#toggle-stick-r").prop('checked', false);
        //alert("y_l:"+model.l_fingers.y);
        let cylinder=addCylinder();
        // console.log(cube.type);
    } else {
        // console.log('查看Scene的子对象',scene.children);
        try{
            cylinder.material.visible=false;
            renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }
    }
});

//---------------------------------------------生成球体
function addSphere(){
    sphere = new THREE.Mesh(
        new THREE.SphereGeometry(8,32,32),
        new THREE.MeshPhongMaterial({color: 'crimson', shininess: 200})
    );
    sphere.castShadow = true;

    sphere.position.x =3.5;
    sphere.position.y =-21.47;
    sphere.position.z =14;
    scene.add(sphere);
    renderer.render(scene, camera);
    return sphere;
}

$("#toggle-sphere").change(function() {
    if(this.checked) {
        //$("#toggle-stick-r").prop('checked', false);
        //alert("y_l:"+model.l_fingers.y);
        let sphere=addSphere();
        // console.log(cube.type);
    } else {
        // console.log('查看Scene的子对象',scene.children);
        try{
            sphere.material.visible=false;
            renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }
    }
});



//---------------------------------------------生成棍子(圆柱)
function addStickL(joint){
  lstick = new THREE.Mesh(
  new THREE.CylinderGeometry(0.5, 0.5, 30, 16),
  new THREE.MeshPhongMaterial({color: 'crimson', shininess: 200})
  );
  lstick.castShadow = true;
  lstick.rotateX( Math.PI / 2 ); //让棍沿Z轴方向放置
  //以下数据都是经过调试，最符合棍的，不要改：
  //lstick.position.x = joint.x-0.5;
  // lstick.position.y = joint.y+1;
  // lstick.position.z = joint.z-22;
  lstick.position.x =-0.5;
  lstick.position.y =1;
  lstick.position.z =-12;
  
  console.log("lstick before:"+lstick.position.x,lstick.position.y,lstick.position.z);
  joint.attach(lstick);
  renderer.render(scene, camera);
  return lstick;
}


function addStickR(joint){
  rstick = new THREE.Mesh(
  new THREE.CylinderGeometry(0.5, 0.5, 30, 16),
  new THREE.MeshPhongMaterial({color: 'crimson', shininess: 200})
  );
  rstick.castShadow = true;
  rstick.rotateX( Math.PI / 2 ); //让棍沿Z轴方向放置
  //以下数据都是经过调试，最符合棍的，不要改：
  // rstick.position.x = joint.x-0.5;
  // rstick.position.y = joint.y+1;
  // rstick.position.z = joint.z-22;
  rstick.position.x =-0.5;
  rstick.position.y =1;
  rstick.position.z =12;
  console.log("rstick before:"+rstick.position.x,rstick.position.y,rstick.position.z);
  joint.attach(rstick);
  renderer.render(scene, camera);
  return rstick;
}



//用按钮测试添加棒子：
// $("#teststickButton").on('click',function() { 
          
//           addStick(model.l_fingers); 
//           console.log("添加棍子代码执行了");
// }); 


//左手拿棍checkbox状态切换
    $("#toggle-stick-l").change(function() {  
    if(this.checked) {
         //$("#toggle-stick-r").prop('checked', false);
         //alert("y_l:"+model.l_fingers.y);
        let lstick=addStickL(model.l_fingers); 
        console.log("lstick after attach:"+lstick.position.x,lstick.position.y,lstick.position.z);
    } else {
        // console.log('查看Scene的子对象',scene.children);        
        try{
            lstick.material.visible=false;
            renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }  
    }
});



    $("#toggle-stick-r").change(function() {  
    if(this.checked) {
        //$("#toggle-stick-l").prop('checked', false);
        //alert("y_r:"+model.r_fingers.y);
        let rstick=addStickR(model.r_fingers);  
        console.log("rstick after attach:"+rstick.position.x,rstick.position.y,rstick.position.z);
    } else {
        try{
            rstick.material.visible=false;
            renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }       

    }
});

//---------------------------------------------生成篮球

function addBasketBallL(joint){
  lsphere = new THREE.Mesh(
  new THREE.SphereGeometry( 4.5, 32, 32 ),
  new THREE.MeshPhongMaterial({color: 'crimson', shininess: 200})
  );
  lsphere.castShadow = true;
  lsphere.position.x =-4.5;
  lsphere.position.y =0;
  lsphere.position.z =1.2;
  joint.attach(lsphere);
  renderer.render(scene, camera);
  return lsphere;
}

function addBasketBallR(joint){
  rsphere = new THREE.Mesh(
  new THREE.SphereGeometry( 4.5, 32, 32 ),
  new THREE.MeshPhongMaterial({color: 'crimson', shininess: 200})
  );
  rsphere.castShadow = true;
  rsphere.position.x =-4.5;
  rsphere.position.y =0;
  rsphere.position.z =1.2;
  joint.attach(rsphere);
  renderer.render(scene, camera);
  return rsphere;
}




$("#toggle-basketball-l").change(function() {  
    if(this.checked) {
         //$("#toggle-stick-r").prop('checked', false);
         //alert("y_l:"+model.l_fingers.y);
        let lsphere=addBasketBallL(model.l_fingers);
        console.log("lsphere after attach:"+lsphere.position.x,lsphere.position.y,lsphere.position.z);
    } else {
        console.log('查看Scene的子对象',scene.children);  
        console.log("lsphere after attach2:"+lsphere.position.x,lsphere.position.y,lsphere.position.z);      
        try{
            lsphere.material.visible=false;
            renderer.render(scene, camera);
            // lsphere.traverse(function(obj) {
            //     if (obj.type === 'Mesh') {
            //     obj.geometry.dispose();
            //     obj.material.dispose();
            //   }
            // })
 
            // // 删除场景对象scene的子对象group
            // scene.remove(lsphere);
            // renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }  
    }
});

$("#toggle-basketball-r").change(function() {  
    if(this.checked) {
         //$("#toggle-stick-r").prop('checked', false);
         //alert("y_l:"+model.l_fingers.y);
        let rsphere=addBasketBallR(model.r_fingers); 
        console.log("rsphere after attach:"+rsphere.position.x,rsphere.position.y,rsphere.position.z);
    } else {
        // console.log('查看Scene的子对象',scene.children);  
        console.log("rsphere after attach2:"+rsphere.position.x,rsphere.position.y,rsphere.position.z);      
        try{
            rsphere.material.visible=false;
            renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }  
    }
});


//---------------------------------------------生成小球

function addSmallBallL(joint){
    lsmallsphere = new THREE.Mesh(
        new THREE.SphereGeometry( 1, 32, 32 ),
        new THREE.MeshPhongMaterial({color: 'crimson', shininess: 200})
    );
    lsmallsphere.castShadow = true;
    lsmallsphere.position.x =-1.2;
    lsmallsphere.position.y =0;
    lsmallsphere.position.z =0;
    joint.attach(lsmallsphere);
    renderer.render(scene, camera);
    return lsmallsphere;
}
function addSmallBallR(joint){
    rsmallsphere = new THREE.Mesh(
        new THREE.SphereGeometry( 1, 32, 32 ),
        new THREE.MeshPhongMaterial({color: 'crimson', shininess: 200})
    );
    rsmallsphere.castShadow = true;
    rsmallsphere.position.x =-1.2;
    rsmallsphere.position.y =0;
    rsmallsphere.position.z =0;
    joint.attach(rsmallsphere);
    renderer.render(scene, camera);
    return rsmallsphere;
}



$("#toggle-smallball-l").change(function() {
    if(this.checked) {
        //$("#toggle-stick-r").prop('checked', false);
        //alert("y_l:"+model.l_fingers.y);
        let lsmallsphere=addSmallBallL(model.l_fingers);
        // console.log("lsphere after attach:"+lsphere.position.x,lsphere.position.y,lsphere.position.z);
    } else {
        // console.log('查看Scene的子对象',scene.children);
        // console.log("lsphere after attach2:"+lsphere.position.x,lsphere.position.y,lsphere.position.z);
        try{
            lsmallsphere.material.visible=false;
            renderer.render(scene, camera);
            // lsphere.traverse(function(obj) {
            //     if (obj.type === 'Mesh') {
            //     obj.geometry.dispose();
            //     obj.material.dispose();
            //   }
            // })

            // // 删除场景对象scene的子对象group
            // scene.remove(lsphere);
            // renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }
    }
});

$("#toggle-smallball-r").change(function() {
    if(this.checked) {
        //$("#toggle-stick-r").prop('checked', false);
        //alert("y_l:"+model.l_fingers.y);
        let rsmallsphere=addSmallBallR(model.r_fingers);
        // console.log("lsphere after attach:"+lsphere.position.x,lsphere.position.y,lsphere.position.z);
    } else {
        // console.log('查看Scene的子对象',scene.children);
        // console.log("lsphere after attach2:"+lsphere.position.x,lsphere.position.y,lsphere.position.z);
        try{
            rsmallsphere.material.visible=false;
            renderer.render(scene, camera);
            // lsphere.traverse(function(obj) {
            //     if (obj.type === 'Mesh') {
            //     obj.geometry.dispose();
            //     obj.material.dispose();
            //   }
            // })

            // // 删除场景对象scene的子对象group
            // scene.remove(lsphere);
            // renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }
    }
});



//----------------加载外部3D模型--------------------------------------------------------------------------------

var objLoader = new THREE.OBJLoader();
var stlLoader = new THREE.STLLoader();//创建stL模型加载器对象

//加载椅子3D模型
 function addChair(){
     stlLoader.load("js/libs/chair/chair.stl", stlMesh); //加载stL完成后执行回调函数stLMesh()
     function stlMesh(stlGeometry) { //定义回调函数
        chairmesh=new THREE.Mesh(
        stlGeometry,
        new THREE.MeshPhongMaterial({color: 'crimson', shininess: 200})
        );//网格模型对象
        chairmesh.castShadow = true;
        chairmesh.scale.set(8,8,8);
        chairmesh.position.x=-0.5;
        chairmesh.position.y=-30;
        chairmesh.position.z=-5;
        
        chairmesh.rotateX(Math.PI/2);
        chairmesh.rotateZ(-Math.PI/2);
        chairmesh.rotateX(Math.PI);
        scene.add (chairmesh);//网格模型添加到场景中
        renderer.render(scene, camera); //没这一句需要再click一下模型才出来！
        return chairmesh;
     }

 }   


$("#toggle-chair").change(function() {  
    if(this.checked) {

        let chairmesh=addChair(); 
        //console.log("MESH checked"+mesh.material.color);
        console.log(scene.children);
        
    } else { 
        try{
            //console.log("MESH unchecked"+mesh.material.color);
            //console.log(scene.children);
            chairmesh.material.visible=false;//根据console情况，如果此句执行成功，物体不再在children中
            renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }  
    }
});

//加载自行车3D模型
 
 function addBike(){
     stlLoader.load("js/libs/bike.stl", stlMesh); //加载stL完成后执行回调函数stLMesh()
     function stlMesh(stlGeometry) { //定义回调函数
        bikemesh=new THREE.Mesh(
        stlGeometry,
        new THREE.MeshLambertMaterial({color:'crimson'})
        );//网格模型对象
        bikemesh.castShadow = true;
        bikemesh.scale.set(8,8,8);
        bikemesh.position.x=0;
        bikemesh.position.y=-30;
        bikemesh.position.z=12;
        
        // bikemesh.rotateX(Math.PI/2);
        // bikemesh.rotateZ(-Math.PI/2);
        // bikemesh.rotateX(Math.PI);
        // bikemesh.rotateZ(Math.PI/2);
        bikemesh.rotateX(-Math.PI/2);
        scene.add (bikemesh);//网格模型添加到场景中
        renderer.render(scene, camera); //没这一句需要再click一下模型才出来！
        return bikemesh;
     }

 }   
 

$("#toggle-bike").change(function() {  
    if(this.checked) {

        let bikemesh=addBike(); 
        //console.log("MESH checked"+mesh.material.color);
        
    } else { 
        try{
            //console.log("MESH unchecked"+mesh.material.color);
            //console.log(scene.children);
            bikemesh.material.visible=false;//根据console情况，如果此句执行成功，物体不再在children中
            renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }  
    }
});


//加载ak47 3D模型
 
 function addAK47(joint){
     stlLoader.load("js/libs/ak47.stl", stlMesh); //加载stL完成后执行回调函数stLMesh()
     function stlMesh(stlGeometry) { //定义回调函数
        ak47mesh=new THREE.Mesh(
        stlGeometry,
        new THREE.MeshLambertMaterial({color:'crimson'})
        );//网格模型对象
        ak47mesh.castShadow = true;
        ak47mesh.scale.set(17,17,17);
        ak47mesh.position.x=-1;
        ak47mesh.position.y=1;
        ak47mesh.position.z=-0.5;
        
     
        ak47mesh.rotateZ(-Math.PI/2);
        ak47mesh.rotateZ(-Math.PI/6);
        ak47mesh.rotateX(Math.PI/15);
        
        scene.add (ak47mesh);//网格模型添加到场景中
        joint.attach(ak47mesh);
        renderer.render(scene, camera); //没这一句需要再click一下模型才出来！
        console.log("done");
        return ak47mesh;
     }

 }   
 

$("#toggle-ak47").change(function() {  
    if(this.checked) {

        let ak47mesh=addAK47(model.r_fingers); 
        console.log("MESH checked");
        
    } else { 
        try{
            //console.log("MESH unchecked"+mesh.material.color);
            //console.log(scene.children);
            ak47mesh.material.visible=false;//根据console情况，如果此句执行成功，物体不再在children中
            renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }  
    }
});


//加载sword 3D模型
 
 function addSwordL(joint){
     stlLoader.load("js/libs/sword.stl", stlMesh); //加载stL完成后执行回调函数stLMesh()
     function stlMesh(stlGeometry) { //定义回调函数
        lswordmesh=new THREE.Mesh(
        stlGeometry,
        new THREE.MeshLambertMaterial({color:'crimson'})
        );//网格模型对象
        lswordmesh.castShadow = true;
        lswordmesh.scale.set(19,19,19);
        // lswordmesh.position.x=-0.5;
        // lswordmesh.position.y=0;
        // lswordmesh.position.z=-22;
         lswordmesh.position.x=-1;
         lswordmesh.position.y=1;
         lswordmesh.position.z=-22.5;

        lswordmesh.rotateZ(-Math.PI/2);
    
        scene.add (lswordmesh);//网格模型添加到场景中
        joint.attach(lswordmesh);
        renderer.render(scene, camera); //没这一句需要再click一下模型才出来！
        console.log("done");
        return lswordmesh;
     }

 } 
  function addSwordR(joint){
     stlLoader.load("js/libs/sword.stl", stlMesh); //加载stL完成后执行回调函数stLMesh()
     function stlMesh(stlGeometry) { //定义回调函数
        rswordmesh=new THREE.Mesh(
        stlGeometry,
        new THREE.MeshLambertMaterial({color:'crimson'})
        );//网格模型对象
        rswordmesh.castShadow = true;
        rswordmesh.scale.set(19,19,19);
        rswordmesh.position.x=-1;
        rswordmesh.position.y=1;
        rswordmesh.position.z=22.5;

        rswordmesh.rotateX(-Math.PI);
         rswordmesh.rotateZ(-Math.PI/2);
    
        scene.add (rswordmesh);//网格模型添加到场景中
        joint.attach(rswordmesh);
        renderer.render(scene, camera); //没这一句需要再click一下模型才出来！
        console.log("done");
        return rswordmesh;
     }

 }    
 

$("#toggle-sword-l").change(function() {  
    if(this.checked) {

        let lswordmesh=addSwordL(model.l_fingers); 
        console.log("MESH checked");
        
    } else { 
        try{
            //console.log("MESH unchecked"+mesh.material.color);
            //console.log(scene.children);
            lswordmesh.material.visible=false;//根据console情况，如果此句执行成功，物体不再在children中
            renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }  
    }
});

$("#toggle-sword-r").change(function() {  
    if(this.checked) {

        let rswordmesh=addSwordR(model.r_fingers);
        console.log("MESH checked");
        
    } else { 
        try{
            //console.log("MESH unchecked"+mesh.material.color);
            //console.log(scene.children);
            rswordmesh.material.visible=false;//根据console情况，如果此句执行成功，物体不再在children中
            renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }  
    }
});

//加载弓箭 3D模型

function addBowL(joint){
    stlLoader.load("js/libs/bow.stl", stlMesh); //加载stL完成后执行回调函数stLMesh()
    function stlMesh(stlGeometry) { //定义回调函数
        lbowmesh=new THREE.Mesh(
            stlGeometry,
            new THREE.MeshLambertMaterial({color:'crimson'})
        );//网格模型对象
        lbowmesh.castShadow = true;
        lbowmesh.scale.set(5,5,5);
        lbowmesh.position.x=0;
        lbowmesh.position.y=6;
        lbowmesh.position.z=0;

        lbowmesh.rotateZ(-Math.PI/15);

        scene.add (lbowmesh);//网格模型添加到场景中
        joint.attach(lbowmesh);
        renderer.render(scene, camera); //没这一句需要再click一下模型才出来！
        console.log("done");
        return lbowmesh;
    }

}
function addBowR(joint){
    stlLoader.load("js/libs/bow.stl", stlMesh); //加载stL完成后执行回调函数stLMesh()
    function stlMesh(stlGeometry) { //定义回调函数
        rbowmesh=new THREE.Mesh(
            stlGeometry,
            new THREE.MeshLambertMaterial({color:'crimson'})
        );//网格模型对象
        rbowmesh.castShadow = true;
        rbowmesh.scale.set(5,5,5);
        rbowmesh.position.x=-5.8;
        rbowmesh.position.y=0;
        rbowmesh.position.z=0;

        rbowmesh.rotateZ(Math.PI/2);

        scene.add (rbowmesh);//网格模型添加到场景中
        joint.attach(rbowmesh);
        renderer.render(scene, camera); //没这一句需要再click一下模型才出来！
        console.log("done");
        return rbowmesh;
    }

}


$("#toggle-bow-l").change(function() {
    if(this.checked) {

        let lbowmesh=addBowL(model.l_fingers);
        console.log("MESH checked");

    } else {
        try{
            //console.log("MESH unchecked"+mesh.material.color);
            //console.log(scene.children);
            lbowmesh.material.visible=false;//根据console情况，如果此句执行成功，物体不再在children中
            renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }
    }
});

$("#toggle-bow-r").change(function() {
    if(this.checked) {

        let rbowmesh=addBowR(model.r_fingers);
        console.log("MESH checked");

    } else {
        try{
            //console.log("MESH unchecked"+mesh.material.color);
            //console.log(scene.children);
            rbowmesh.material.visible=false;//根据console情况，如果此句执行成功，物体不再在children中
            renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }
    }
});

//加载网球拍 3D模型

function addRacketL(joint){
    stlLoader.load("js/libs/racket.stl", stlMesh); //加载stL完成后执行回调函数stLMesh()
    function stlMesh(stlGeometry) { //定义回调函数
        lracketmesh=new THREE.Mesh(
            stlGeometry,
            new THREE.MeshLambertMaterial({color:'crimson'})
        );//网格模型对象
        lracketmesh.castShadow = true;
        lracketmesh.scale.set(1/8,1/8,1/8);
        lracketmesh.position.x=-0.5;
        lracketmesh.position.y=0;
        lracketmesh.position.z=2;

        lracketmesh.rotateX(Math.PI);
        lracketmesh.rotateZ(Math.PI/2);

        scene.add (lracketmesh);//网格模型添加到场景中
        joint.attach(lracketmesh);
        renderer.render(scene, camera); //没这一句需要再click一下模型才出来！
        console.log("done");
        return lracketmesh;
    }
}

function addRacketR(joint){
    stlLoader.load("js/libs/racket.stl", stlMesh); //加载stL完成后执行回调函数stLMesh()
    function stlMesh(stlGeometry) { //定义回调函数
        rracketmesh=new THREE.Mesh(
            stlGeometry,
            new THREE.MeshLambertMaterial({color:'crimson'})
        );//网格模型对象
        rracketmesh.castShadow = true;
        rracketmesh.scale.set(1/8,1/8,1/8);
        // rracketmesh.position.x=-0.5;
        // rracketmesh.position.y=0;
        // rracketmesh.position.z=-2;
        rracketmesh.position.x=-0.8;
        rracketmesh.position.y=0.8;
        rracketmesh.position.z=-2;

        // rracketmesh.rotateX(Math.PI);
        rracketmesh.rotateZ(Math.PI/2);
        // rracketmesh.rotateX(-Math.PI);

        scene.add (rracketmesh);//网格模型添加到场景中
        joint.attach(rracketmesh);
        renderer.render(scene, camera); //没这一句需要再click一下模型才出来！
        console.log("done");
        return rracketmesh;
    }
}


$("#toggle-racket-l").change(function() {
    if(this.checked) {

        let lracketmesh=addRacketL(model.l_fingers);
        console.log("MESH checked");

    } else {
        try{
            //console.log("MESH unchecked"+mesh.material.color);
            //console.log(scene.children);
            lracketmesh.material.visible=false;//根据console情况，如果此句执行成功，物体不再在children中
            renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }
    }
});
$("#toggle-racket-r").change(function() {
    if(this.checked) {

        let rracketmesh=addRacketR(model.r_fingers);
        console.log("MESH checked");

    } else {
        try{
            //console.log("MESH unchecked"+mesh.material.color);
            //console.log(scene.children);
            rracketmesh.material.visible=false;//根据console情况，如果此句执行成功，物体不再在children中
            renderer.render(scene, camera);

        }catch(e){
            console.log(e.name + ": " + e.message);
        }
    }
});


