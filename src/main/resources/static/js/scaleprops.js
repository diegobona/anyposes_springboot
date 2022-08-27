



$("#cubewidth").on("change mousemove", function() {
    $(this).next().val($(this).val());
    cube.scale.x=$("#cubewidth").val();
    cube.scale.y=$("#cubehigh").val();
    cube.scale.z=$("#cubedepth").val();
    renderer.render(scene, camera);
});
$("#cubehigh").on("change mousemove", function() {
    $(this).next().val($(this).val());
    console.log("width"+cube.scale.x);
    cube.scale.x=$("#cubewidth").val();
    cube.scale.y=$("#cubehigh").val();
    cube.scale.z=$("#cubedepth").val();
    renderer.render(scene, camera);
});
$("#cubedepth").on("change mousemove", function() {
    $(this).next().val($(this).val());
    cube.scale.x=$("#cubewidth").val();
    cube.scale.y=$("#cubehigh").val();
    cube.scale.z=$("#cubedepth").val();
    renderer.render(scene, camera);
});




$("#cylinderwidth").on("change mousemove", function() {
    $(this).next().val($(this).val());
    cylinder.scale.x=$("#cylinderwidth").val();
    cylinder.scale.y=$("#cylinderhigh").val();
    cylinder.scale.z=$("#cylinderdepth").val();
    renderer.render(scene, camera);
});
$("#cylinderhigh").on("change mousemove", function() {
    $(this).next().val($(this).val());
    console.log("width"+cylinder.scale.x);
    cylinder.scale.x=$("#cylinderwidth").val();
    cylinder.scale.y=$("#cylinderhigh").val();
    cylinder.scale.z=$("#cylinderdepth").val();
    renderer.render(scene, camera);
});
$("#cylinderdepth").on("change mousemove", function() {
    $(this).next().val($(this).val());
    cylinder.scale.x=$("#cylinderwidth").val();
    cylinder.scale.y=$("#cylinderhigh").val();
    cylinder.scale.z=$("#cylinderdepth").val();
    renderer.render(scene, camera);
});




$("#spherewidth").on("change mousemove", function() {
    $(this).next().val($(this).val());
    sphere.scale.x=$("#spherewidth").val();
    sphere.scale.y=$("#spherehigh").val();
    sphere.scale.z=$("#spheredepth").val();
    renderer.render(scene, camera);
});
$("#spherehigh").on("change mousemove", function() {
    $(this).next().val($(this).val());
    sphere.scale.x=$("#spherewidth").val();
    sphere.scale.y=$("#spherehigh").val();
    sphere.scale.z=$("#spheredepth").val();
    renderer.render(scene, camera);
});
$("#spheredepth").on("change mousemove", function() {
    $(this).next().val($(this).val());
    sphere.scale.x=$("#spherewidth").val();
    sphere.scale.y=$("#spherehigh").val();
    sphere.scale.z=$("#spheredepth").val();
    renderer.render(scene, camera);
});





$("#conewidth").on("change mousemove", function() {
    $(this).next().val($(this).val());
    cone.scale.x=$("#conewidth").val();
    cone.scale.y=$("#conehigh").val();
    cone.scale.z=$("#conedepth").val();
    renderer.render(scene, camera);
});
$("#conehigh").on("change mousemove", function() {
    $(this).next().val($(this).val());
    cone.scale.x=$("#conewidth").val();
    cone.scale.y=$("#conehigh").val();
    cone.scale.z=$("#conedepth").val();
    renderer.render(scene, camera);
});
$("#conedepth").on("change mousemove", function() {
    $(this).next().val($(this).val());
    cone.scale.x=$("#conewidth").val();
    cone.scale.y=$("#conehigh").val();
    cone.scale.z=$("#conedepth").val();
    renderer.render(scene, camera);
});




