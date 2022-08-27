
var objLoader = new THREE.OBJLoader();
var stlLoader = new THREE.STLLoader();

let modelUrl;

function animateMaleHeadReplace(modelUrl){
    model.head.hide();//头部为什么直接hide就可以呢？--说明怎么操作都行能操作到原来的头。--说明原来的头比现在的头任何一个方向都大
    stlLoader.load(modelUrl, stlMesh); //加载stL完成后执行回调函数stLMesh()
    function stlMesh(stlGeometry) { //定义回调函数
        var material=new THREE.MeshPhongMaterial({color: 'white'});

        animateMaleHeadMesh=new THREE.Mesh(
            stlGeometry,
            material
        );//网格模型对象
        animateMaleHeadMesh.castShadow = true;

        animateMaleHeadMesh.scale.set(1,1,1);
        animateMaleHeadMesh.rotateY(-Math.PI/2);
        animateMaleHeadMesh.rotateZ(-Math.PI);

        animateMaleHeadMesh.position.x=model.head.position.x-1;
        animateMaleHeadMesh.position.y=model.head.position.y+0.3;
        animateMaleHeadMesh.position.z=model.head.position.z;


        model.head.attach(animateMaleHeadMesh);
        // scene.add (animateMaleHeadMesh);//网格模型添加到场景中
        renderer.render(scene, camera); //没这一句需要再click一下模型才出来！
        return animateMaleHeadMesh;
    }
}


// function animateMaleHeadReplace(modelUrl) {
//     objLoader.load(modelUrl, function (animateMaleHeadMesh) {
//
//
//         // var material = new THREE.MeshPhongMaterial({
//         //     color: 'white'
//         //
//         // });
//         //
//         // animateMaleHeadMesh.children.forEach(function (child) {
//         //     child.material = material;
//         //     // child.geometry.computeVertexNormals();
//         //     // child.geometry.computeFaceNormals();
//         // });
//
//         //animateMaleHeadMesh.castShadow = true;
//         animateMaleHeadMesh.scale.set(1, 1, 1);
//         // animateMaleHeadMesh.rotateY(-Math.PI/2);
//         // animateMaleHeadMesh.rotateZ(-Math.PI);
//
//         animateMaleHeadMesh.position.x = model.head.position.x;
//         animateMaleHeadMesh.position.y = model.head.position.y;
//         animateMaleHeadMesh.position.z = model.head.position.z;
//
//
//         model.head.hide();
//         model.head.attach(animateMaleHeadMesh);
//         //scene.add (animateMaleHeadMesh);//网格模型添加到场景中
//         renderer.render(scene, camera); //没这一句需要再click一下模型才出来！
//         return animateMaleHeadMesh;
//     });
// }

function detailMaleHeadReplace(modelUrl){
    model.head.hide();//头部为什么直接hide就可以呢？--说明怎么操作都行能操作到原来的头。--说明原来的头比现在的头任何一个方向都大
    stlLoader.load(modelUrl, stlMesh); //加载stL完成后执行回调函数stLMesh()
    function stlMesh(stlGeometry) { //定义回调函数
        var material=new THREE.MeshPhongMaterial({color: 'white'});

        detailMaleHeadMesh=new THREE.Mesh(
            stlGeometry,
            material
        );//网格模型对象
        detailMaleHeadMesh.castShadow = true;

        detailMaleHeadMesh.scale.set(1,1,1);
        detailMaleHeadMesh.rotateY(-Math.PI/2);
        detailMaleHeadMesh.rotateZ(-Math.PI);

        detailMaleHeadMesh.position.x=model.head.position.x-1;
        detailMaleHeadMesh.position.y=model.head.position.y+0.3;
        detailMaleHeadMesh.position.z=model.head.position.z;


        model.head.attach(detailMaleHeadMesh);
        // scene.add (animateMaleHeadMesh);//网格模型添加到场景中
        renderer.render(scene, camera); //没这一句需要再click一下模型才出来！
        return detailMaleHeadMesh;
    }
}



function maleTorsoReplace(modelUrl){
    //把原来胸部设为透明不可见：
    console.log(model.torso.type);//group
    console.log(model.torso.children[0].children[0].children[0].material.transparent);
    console.log(model.torso.children[0].children[0].children[0].material.opacity);
    model.torso.children[0].children[0].children[0].material.transparent=true;
    model.torso.children[0].children[0].children[0].material.opacity=0;//0：不可见，1：可见。 可用这条调试。

    //把原来胸部加厚和加宽，这样自定义模型attach后，保证鼠标始终操作的是原来的胸部
    model.torso.children[0].children[0].children[0].scale.set(2,1,1.2);//必须是children的scale，直接torso的scale，自定义模型会等比例变化


    stlLoader.load(modelUrl, stlMesh); //加载stL完成后执行回调函数stLMesh()
    function stlMesh(stlGeometry) { //定义回调函数
        maleTorsoMesh=new THREE.Mesh(
            stlGeometry,
            new THREE.MeshPhongMaterial({color: 'white'})
        );//网格模型对象
        maleTorsoMesh.castShadow = true;
        maleTorsoMesh.scale.set(0.63,0.61,0.6); //3个方向的值是一点点试出来的。其中X表示厚度，厚一点也没关系,后面会把原来胸部加厚且透明，这样操作的始终是原胸部
        maleTorsoMesh.position.x=model.head.position.x-1;
        maleTorsoMesh.position.y=model.head.position.y+5.5;
        maleTorsoMesh.position.z=model.head.position.z;

        maleTorsoMesh.rotateX(-Math.PI/2);

        //model.torso.hide();

        model.torso.attach(maleTorsoMesh);

        renderer.render(scene, camera); //没这一句需要再click一下模型才出来！
        return maleTorsoMesh;
    }
}

function animateFemaleHeadReplace(modelUrl){
    model.head.hide();//头部为什么直接hide就可以呢？--说明怎么操作都行能操作到原来的头。--说明原来的头比现在的头任何一个方向都大
    stlLoader.load(modelUrl, stlMesh); //加载stL完成后执行回调函数stLMesh()
    function stlMesh(stlGeometry) { //定义回调函数
        var material=new THREE.MeshPhongMaterial({color: 'white'});

        animateFemaleHeadMesh=new THREE.Mesh(
            stlGeometry,
            material
        );//网格模型对象
        animateFemaleHeadMesh.castShadow = true;

        animateFemaleHeadMesh.scale.set(1,1,1);
        animateFemaleHeadMesh.rotateY(-Math.PI/2);
        animateFemaleHeadMesh.rotateZ(-Math.PI);

        animateFemaleHeadMesh.position.x=model.head.position.x-1;
        animateFemaleHeadMesh.position.y=model.head.position.y+0.3;
        animateFemaleHeadMesh.position.z=model.head.position.z;


        model.head.attach(animateFemaleHeadMesh);
        // scene.add (animateMaleHeadMesh);//网格模型添加到场景中
        renderer.render(scene, camera); //没这一句需要再click一下模型才出来！
        return animateFemaleHeadMesh;
    }
}

function detailFemaleHeadReplace(modelUrl){
    model.head.hide();//头部为什么直接hide就可以呢？--说明怎么操作都行能操作到原来的头。--说明原来的头比现在的头任何一个方向都大
    stlLoader.load(modelUrl, stlMesh); //加载stL完成后执行回调函数stLMesh()
    function stlMesh(stlGeometry) { //定义回调函数
        var material=new THREE.MeshPhongMaterial({color: 'white'});

        detailFemaleHeadMesh=new THREE.Mesh(
            stlGeometry,
            material
        );//网格模型对象
        detailFemaleHeadMesh.castShadow = true;

        detailFemaleHeadMesh.scale.set(1,1,1);
        detailFemaleHeadMesh.rotateY(-Math.PI/2);
        detailFemaleHeadMesh.rotateZ(-Math.PI);

        detailFemaleHeadMesh.position.x=model.head.position.x-1;
        detailFemaleHeadMesh.position.y=model.head.position.y+0.3;
        detailFemaleHeadMesh.position.z=model.head.position.z;


        model.head.attach(detailFemaleHeadMesh);
        // scene.add (animateMaleHeadMesh);//网格模型添加到场景中
        renderer.render(scene, camera); //没这一句需要再click一下模型才出来！
        return detailFemaleHeadMesh;
    }
}


function femaleTorsoReplace(modelUrl){
    //把原来胸部设为透明不可见：
    console.log(model.torso.type);//group
    console.log(model.torso.children[0].children[0].children[0].material.transparent);
    console.log(model.torso.children[0].children[0].children[0].material.opacity);
    model.torso.children[0].children[0].children[0].material.transparent=true;
    model.torso.children[0].children[0].children[0].material.opacity=0;//0：不可见，1：可见。 可用这条调试。

    //把原来胸部加厚和加宽，这样自定义模型attach后，保证鼠标始终操作的是原来的胸部
    model.torso.children[0].children[0].children[0].scale.set(2,1,1.4);//必须是children的scale，直接torso的scale，自定义模型会等比例变化


    stlLoader.load(modelUrl, stlMesh); //加载stL完成后执行回调函数stLMesh()
    function stlMesh(stlGeometry) { //定义回调函数
        femaleTorsoMesh=new THREE.Mesh(
            stlGeometry,
            new THREE.MeshPhongMaterial({color: 'white'})
        );//网格模型对象
        femaleTorsoMesh.castShadow = true;
        femaleTorsoMesh.scale.set(0.63,0.55,0.6); //3个方向的值是一点点试出来的。其中X表示厚度，厚一点也没关系,后面会把原来胸部加厚且透明，这样操作的始终是原胸部
        femaleTorsoMesh.position.x=model.head.position.x-1;
        femaleTorsoMesh.position.y=model.head.position.y+5.5;
        femaleTorsoMesh.position.z=model.head.position.z;

        femaleTorsoMesh.rotateX(-Math.PI/2);

        //model.torso.hide();

        model.torso.attach(femaleTorsoMesh);

        renderer.render(scene, camera); //没这一句需要再click一下模型才出来！
        return femaleTorsoMesh;
    }
}

function jirounanTorsoReplace(modelUrl){
    //把原来胸部设为透明不可见：
    console.log(model.torso.type);//group
    console.log(model.torso.children[0].children[0].children[0].material.transparent);
    console.log(model.torso.children[0].children[0].children[0].material.opacity);
    model.torso.children[0].children[0].children[0].material.transparent=true;
    model.torso.children[0].children[0].children[0].material.opacity=0;//0：不可见，1：可见。 可用这条调试。

    //把原来胸部加厚和加宽，这样自定义模型attach后，保证鼠标始终操作的是原来的胸部
    model.torso.children[0].children[0].children[0].scale.set(2,1,1.2);//必须是children的scale，直接torso的scale，自定义模型会等比例变化


    stlLoader.load(modelUrl, stlMesh); //加载stL完成后执行回调函数stLMesh()
    function stlMesh(stlGeometry) { //定义回调函数
        jirounanTorsoMesh=new THREE.Mesh(
            stlGeometry,
            new THREE.MeshPhongMaterial({color: 'white'})
        );//网格模型对象
        jirounanTorsoMesh.castShadow = true;
        jirounanTorsoMesh.scale.set(0.65,0.57,0.6); //3个方向的值是一点点试出来的。其中X表示厚度，厚一点也没关系,后面会把原来胸部加厚且透明，这样操作的始终是原胸部
        jirounanTorsoMesh.position.x=model.head.position.x-1;
        jirounanTorsoMesh.position.y=model.head.position.y+5;
        jirounanTorsoMesh.position.z=model.head.position.z;

        jirounanTorsoMesh.rotateX(-Math.PI/2);

        //model.torso.hide();

        model.torso.attach(jirounanTorsoMesh);

        renderer.render(scene, camera); //没这一句需要再click一下模型才出来！
        return jirounanTorsoMesh;
    }
}



