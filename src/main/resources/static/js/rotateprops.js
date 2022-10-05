
//前后旋转
$("#chairrotationx").on("change mousemove", function() {
    $(this).next().val($(this).val());
    chairmesh.rotation.x=THREE.MathUtils.degToRad($("#chairrotationx").val());
    chairmesh.rotation.y=THREE.MathUtils.degToRad($("#chairrotationy").val());
    chairmesh.rotation.z=THREE.MathUtils.degToRad($("#chairrotationz").val());
    renderer.render(scene, camera);
});
//水平旋转
$("#chairrotationy").on("change mousemove", function() {
    $(this).next().val($(this).val());
    // console.log("width"+cube.scale.x);
    chairmesh.rotation.x=THREE.MathUtils.degToRad($("#chairrotationx").val());
    chairmesh.rotation.y=THREE.MathUtils.degToRad($("#chairrotationy").val());
    chairmesh.rotation.z=THREE.MathUtils.degToRad($("#chairrotationz").val());
    renderer.render(scene, camera);
});
//左右旋转
$("#chairrotationz").on("change mousemove", function() {
    $(this).next().val($(this).val());
    chairmesh.rotation.x=THREE.MathUtils.degToRad($("#chairrotationx").val());
    chairmesh.rotation.y=THREE.MathUtils.degToRad($("#chairrotationy").val());
    chairmesh.rotation.z=THREE.MathUtils.degToRad($("#chairrotationz").val());
    renderer.render(scene, camera);
});


//前后旋转
$("#bikerotationx").on("change mousemove", function() {
    $(this).next().val($(this).val());
    bikemesh.rotation.x=THREE.MathUtils.degToRad($("#bikerotationx").val());
    bikemesh.rotation.y=THREE.MathUtils.degToRad($("#bikerotationy").val());
    bikemesh.rotation.z=THREE.MathUtils.degToRad($("#bikerotationz").val());
    renderer.render(scene, camera);
});
//水平旋转
$("#bikerotationy").on("change mousemove", function() {
    $(this).next().val($(this).val());
    // console.log("width"+cube.scale.x);
    bikemesh.rotation.x=THREE.MathUtils.degToRad($("#bikerotationx").val());
    bikemesh.rotation.y=THREE.MathUtils.degToRad($("#bikerotationy").val());
    bikemesh.rotation.z=THREE.MathUtils.degToRad($("#bikerotationz").val());
    renderer.render(scene, camera);
});
//左右旋转
$("#bikerotationz").on("change mousemove", function() {
    $(this).next().val($(this).val());
    bikemesh.rotation.x=THREE.MathUtils.degToRad($("#bikerotationx").val());
    bikemesh.rotation.y=THREE.MathUtils.degToRad($("#bikerotationy").val());
    bikemesh.rotation.z=THREE.MathUtils.degToRad($("#bikerotationz").val());
    renderer.render(scene, camera);
});




//前后旋转
$("#cuberotationx").on("change mousemove", function() {
    $(this).next().val($(this).val());
    cube.rotation.x=THREE.MathUtils.degToRad($("#cuberotationx").val());
    cube.rotation.y=THREE.MathUtils.degToRad($("#cuberotationy").val());
    cube.rotation.z=THREE.MathUtils.degToRad($("#cuberotationz").val());
    renderer.render(scene, camera);
});
//水平旋转
$("#cuberotationy").on("change mousemove", function() {
    $(this).next().val($(this).val());
    // console.log("width"+cube.scale.x);
    cube.rotation.x=THREE.MathUtils.degToRad($("#cuberotationx").val());
    cube.rotation.y=THREE.MathUtils.degToRad($("#cuberotationy").val());
    cube.rotation.z=THREE.MathUtils.degToRad($("#cuberotationz").val());
    renderer.render(scene, camera);
});
//左右旋转
$("#cuberotationz").on("change mousemove", function() {
    $(this).next().val($(this).val());
    cube.rotation.x=THREE.MathUtils.degToRad($("#cuberotationx").val());
    cube.rotation.y=THREE.MathUtils.degToRad($("#cuberotationy").val());
    cube.rotation.z=THREE.MathUtils.degToRad($("#cuberotationz").val());
    renderer.render(scene, camera);
});


//前后旋转
$("#cylinderrotationx").on("change mousemove", function() {
    $(this).next().val($(this).val());
    cylinder.rotation.x=THREE.MathUtils.degToRad($("#cylinderrotationx").val());
    cylinder.rotation.y=THREE.MathUtils.degToRad($("#cylinderrotationy").val());
    cylinder.rotation.z=THREE.MathUtils.degToRad($("#cylinderrotationz").val());
    renderer.render(scene, camera);
});
//水平旋转
$("#cylinderrotationy").on("change mousemove", function() {
    $(this).next().val($(this).val());
    // console.log("width"+cube.scale.x);
    cylinder.rotation.x=THREE.MathUtils.degToRad($("#cylinderrotationx").val());
    cylinder.rotation.y=THREE.MathUtils.degToRad($("#cylinderrotationy").val());
    cylinder.rotation.z=THREE.MathUtils.degToRad($("#cylinderrotationz").val());
    renderer.render(scene, camera);
});
//左右旋转
$("#cylinderrotationz").on("change mousemove", function() {
    $(this).next().val($(this).val());
    cylinder.rotation.x=THREE.MathUtils.degToRad($("#cylinderrotationx").val());
    cylinder.rotation.y=THREE.MathUtils.degToRad($("#cylinderrotationy").val());
    cylinder.rotation.z=THREE.MathUtils.degToRad($("#cylinderrotationz").val());
    renderer.render(scene, camera);
});

//前后旋转
$("#conerotationx").on("change mousemove", function() {
    $(this).next().val($(this).val());
    cone.rotation.x=THREE.MathUtils.degToRad($("#conerotationx").val());
    cone.rotation.y=THREE.MathUtils.degToRad($("#conerotationy").val());
    cone.rotation.z=THREE.MathUtils.degToRad($("#conerotationz").val());
    renderer.render(scene, camera);
});
//水平旋转
$("#conerotationy").on("change mousemove", function() {
    $(this).next().val($(this).val());
    cone.rotation.x=THREE.MathUtils.degToRad($("#conerotationx").val());
    cone.rotation.y=THREE.MathUtils.degToRad($("#conerotationy").val());
    cone.rotation.z=THREE.MathUtils.degToRad($("#conerotationz").val());
    renderer.render(scene, camera);
});
//左右旋转
$("#conerotationz").on("change mousemove", function() {
    $(this).next().val($(this).val());
    cone.rotation.x=THREE.MathUtils.degToRad($("#conerotationx").val());
    cone.rotation.y=THREE.MathUtils.degToRad($("#conerotationy").val());
    cone.rotation.z=THREE.MathUtils.degToRad($("#conerotationz").val());
    renderer.render(scene, camera);
});

//前后旋转
$("#vaserotationx").on("change mousemove", function() {
    $(this).next().val($(this).val());
    vasemesh.rotation.x=THREE.MathUtils.degToRad($("#vaserotationx").val());
    vasemesh.rotation.y=THREE.MathUtils.degToRad($("#vaserotationy").val());
    vasemesh.rotation.z=THREE.MathUtils.degToRad($("#vaserotationz").val());
    renderer.render(scene, camera);
});
//水平旋转
$("#vaserotationy").on("change mousemove", function() {
    $(this).next().val($(this).val());
    vasemesh.rotation.x=THREE.MathUtils.degToRad($("#vaserotationx").val());
    vasemesh.rotation.y=THREE.MathUtils.degToRad($("#vaserotationy").val());
    vasemesh.rotation.z=THREE.MathUtils.degToRad($("#vaserotationz").val());
    renderer.render(scene, camera);
});
//左右旋转
$("#vaserotationz").on("change mousemove", function() {
    $(this).next().val($(this).val());
    vasemesh.rotation.x=THREE.MathUtils.degToRad($("#vaserotationx").val());
    vasemesh.rotation.y=THREE.MathUtils.degToRad($("#vaserotationy").val());
    vasemesh.rotation.z=THREE.MathUtils.degToRad($("#vaserotationz").val());
    renderer.render(scene, camera);
});

//前后旋转
$("#treerotationx").on("change mousemove", function() {
    $(this).next().val($(this).val());
    treemesh.rotation.x=THREE.MathUtils.degToRad($("#treerotationx").val());
    treemesh.rotation.y=THREE.MathUtils.degToRad($("#treerotationy").val());
    treemesh.rotation.z=THREE.MathUtils.degToRad($("#treerotationz").val());
    renderer.render(scene, camera);
});
//水平旋转
$("#treerotationy").on("change mousemove", function() {
    $(this).next().val($(this).val());
    treemesh.rotation.x=THREE.MathUtils.degToRad($("#treerotationx").val());
    treemesh.rotation.y=THREE.MathUtils.degToRad($("#treerotationy").val());
    treemesh.rotation.z=THREE.MathUtils.degToRad($("#treerotationz").val());
    renderer.render(scene, camera);
});
//左右旋转
$("#treerotationz").on("change mousemove", function() {
    $(this).next().val($(this).val());
    treemesh.rotation.x=THREE.MathUtils.degToRad($("#treerotationx").val());
    treemesh.rotation.y=THREE.MathUtils.degToRad($("#treerotationy").val());
    treemesh.rotation.z=THREE.MathUtils.degToRad($("#treerotationz").val());
    renderer.render(scene, camera);
});

//前后旋转
$("#truckrotationx").on("change mousemove", function() {
    $(this).next().val($(this).val());
    truckmesh.rotation.x=THREE.MathUtils.degToRad($("#truckrotationx").val());
    truckmesh.rotation.y=THREE.MathUtils.degToRad($("#truckrotationy").val());
    truckmesh.rotation.z=THREE.MathUtils.degToRad($("#truckrotationz").val());
    renderer.render(scene, camera);
});
//水平旋转
$("#truckrotationy").on("change mousemove", function() {
    $(this).next().val($(this).val());
    truckmesh.rotation.x=THREE.MathUtils.degToRad($("#truckrotationx").val());
    truckmesh.rotation.y=THREE.MathUtils.degToRad($("#truckrotationy").val());
    truckmesh.rotation.z=THREE.MathUtils.degToRad($("#truckrotationz").val());
    renderer.render(scene, camera);
});
//左右旋转
$("#truckrotationz").on("change mousemove", function() {
    $(this).next().val($(this).val());
    truckmesh.rotation.x=THREE.MathUtils.degToRad($("#truckrotationx").val());
    truckmesh.rotation.y=THREE.MathUtils.degToRad($("#truckrotationy").val());
    truckmesh.rotation.z=THREE.MathUtils.degToRad($("#truckrotationz").val());
    renderer.render(scene, camera);
});


