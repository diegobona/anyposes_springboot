const EPS = 0.00001;


var mouseInterface = false;
var touchInterface = false;


// create a scene with a better shadow
createScene();

scene.remove(light)
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// PointLight and DirectionaLight make problems with older GPU
var light = new THREE.SpotLight('white', 0.5);
light.position.set(0, 100, 50);
light.penumbra = 1;
light.shadow.mapSize.width = Math.min(2 * 1024, renderer.capabilities.maxTextureSize / 2);
light.shadow.mapSize.height = light.shadow.mapSize.width;
light.shadow.radius = 8;
light.castShadow = true;
scene.add(light);
//打开能在场景看见光源位置及辅助线：
var lightHelper = new THREE.CameraHelper(light.shadow.camera );


var controls = new THREE.OrbitControls(camera, renderer.domElement);





function deleteOldModel() {
	for(let i = 0; i<scene.children.length; i++){
		thisobj = scene.children[i];
		console.log(thisobj);
		if(thisobj.type==="Group"){
			scene.remove(thisobj);
		}
	}
}



$("#modelswitch").on('change', function() {

	//缓存当前下拉选项，因为reload后会恢复默认值
	localStorage.setItem('modelswitch', $('option:selected', this).index());

	deleteOldModel();


	//尝试重新加载posture-editor.js，是加载了，但没用：
	// $.getScript("js/posture-editor.js");


	//reload是解决切换后对新model的操作不生效，相当于重新加载js；但reload后下拉框会回到默认值；所以要把切换后的选项缓存起来，后面再读出来
	//所以切换时可以看到选项会先回到默认值male，但很快恢复为实际选的
	location.reload();

});



//从缓存里获取实际选择的下拉项，并设置为它
if (localStorage.getItem('modelswitch')) {
	$("#modelswitch option").eq(localStorage.getItem('modelswitch')).prop('selected', true);
}

//根据下拉选项生成新的model。
//这样就不需要全局初始化model：var model=new Male()
var options=$("#modelswitch option:selected" );
switch(options.text())
{
	case "简洁风格-男":
		var model=new Male();
		break;
	case "简洁风格-女":
		var model=new Female();
		break;
	case "简洁风格-小孩":
		var model=new Child();
		break;
	case "漫画风格-男(首次加载稍慢)":
		var model=new Male();
		animateMaleHeadReplace("js/libs/animatemale-head.stl");
		maleTorsoReplace("js/libs/male-torso.stl");
		break;
	case "漫画风格-女(首次加载稍慢)":
		var model=new Female();
		animateFemaleHeadReplace("js/libs/animatefemale-head.stl");
		femaleTorsoReplace("js/libs/female-torso.stl");
		break;
	case "真实风格-男(首次加载稍慢)":
		var model=new Male();
		detailMaleHeadReplace("js/libs/detailmale-head.stl");
		maleTorsoReplace("js/libs/male-torso.stl");
		break;
	case "真实风格-女(首次加载稍慢)":
		var model=new Female();
		detailFemaleHeadReplace("js/libs/detailfemale-head.stl");
		femaleTorsoReplace("js/libs/female-torso.stl");
		break;
	case "肌肉男(首次加载稍慢)":
		var model=new Male();
		detailMaleHeadReplace("js/libs/detailmale-head.stl");
		jirounanTorsoReplace("js/libs/jirounan-torso.stl");
		break;
	case "无人":
		break;
}
console.log("currentmodel:")
console.log(model)


model.l_tips = model.l_fingers.tips;
model.r_tips = model.r_fingers.tips;

// create gauge indicator
var gauge = new THREE.Mesh(
		new THREE.CircleBufferGeometry(10, 32, 9 / 4 * Math.PI, Math.PI / 2),
		new THREE.MeshPhongMaterial(
		{
			side: THREE.DoubleSide,
			color: '#2B2B2B',
			transparent: true,
			opacity: 0.75,
			alphaMap: gaugeTexture()
		})
	),
	gaugeMaterial = new THREE.MeshBasicMaterial(
	{
		color: '#2B2B2B'
	});

var movemodeldirection = "y";
var undoarray = [model.postureString];

gauge.add(new THREE.Mesh(new THREE.TorusBufferGeometry(10, 0.1, 8, 32, Math.PI / 2).rotateZ(Math.PI / 4), gaugeMaterial));
gauge.add(new THREE.Mesh(new THREE.ConeBufferGeometry(0.7, 2, 16).translate(-10, 0, 0).rotateZ(5 * Math.PI / 4), gaugeMaterial));
gauge.add(new THREE.Mesh(new THREE.ConeBufferGeometry(0.7, 2, 16).translate(10, 0, 0).rotateZ(3 * Math.PI / 4), gaugeMaterial));

function gaugeTexture(size = 1024) {
	var canvas = document.createElement('canvas');
	canvas.width = size;
	canvas.height = size;
	var r = size / 2;

	var ctx = canvas.getContext('2d');
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, size, size);

	var grd = ctx.createRadialGradient(r, r, r / 2, r, r, r);
	grd.addColorStop(0, "black");
	grd.addColorStop(1, "gray");

	// Fill with gradient
	ctx.fillStyle = grd;
	ctx.fillRect(1, 1, size - 2, size - 2);

	var start = Math.PI,
		end = 2 * Math.PI;

	ctx.strokeStyle = 'white';
	ctx.lineWidth = 5;
	ctx.beginPath();
	for (var rr = r; rr > 0; rr -= 70)
		ctx.arc(size / 2, size / 2, rr, start, end);

	for (var i = 0; i <= 12; i++)
	{
		ctx.moveTo(r, r);
		var a = start + i / 12 * (end - start);
		ctx.lineTo(r + r * Math.cos(a), r + r * Math.sin(a));
	}
	ctx.stroke();

	var texture = new THREE.CanvasTexture(canvas, THREE.UVMapping);
	texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
	texture.repeat.set(1, 1);

	return texture;
}

// name body parts and their motions
var names = [
	['body', 'tilt', 'turn', 'bend'],
	['pelvis', 'tilt', 'turn', 'bend'],
	['torso', 'tilt', 'turn', 'bend'],
	['neck', 'tilt', 'turn', 'nod'],
	['head', 'tilt', 'turn', 'nod'],
	['l_leg', 'straddle', 'turn', 'raise'],
	['l_knee', '', '', 'bend'],
	['l_ankle', 'tilt', 'turn', 'bend'],
	['l_arm', 'straddle', 'turn', 'raise'],
	['l_elbow', '', '', 'bend'],
	['l_wrist', 'tilt', 'turn', 'bend'],
	['l_fingers', '', '', 'bend'],
	['l_tips', '', '', 'bend'],
	['r_leg', 'straddle', 'turn', 'raise'],
	['r_knee', '', '', 'bend'],
	['r_ankle', 'tilt', 'turn', 'bend'],
	['r_arm', 'straddle', 'turn', 'raise'],
	['r_elbow', '', '', 'bend'],
	['r_wrist', 'tilt', 'turn', 'bend'],
	['r_fingers', '', '', 'bend'],
	['r_tips', '', '', 'bend']
];

for (var nameData of names) {
	var name = nameData[0];
	for (var part of model[name].children[0].children)
		part.name = name;
	for (var part of model[name].children[0].children[0].children)
		part.name = name;
	if (model[name].children[0].children[1])
		for (var part of model[name].children[0].children[1].children)
			part.name = name;
	model[name].nameUI = {
		x: nameData[1],
		y: nameData[2],
		z: nameData[3]
	};
}

var mouse = new THREE.Vector2(), // mouse 3D position
	mouseButton = undefined, // pressed mouse buttons
	raycaster = new THREE.Raycaster(), // raycaster to grab body part
	dragPoint = new THREE.Mesh(), // point of grabbing
	obj = undefined; // currently selected body part

var cbInverseKinematics = document.getElementById('inverse-kinematics'),
	cbBiologicalConstraints = document.getElementById('biological-constraints'),
	cbRotZ = document.getElementById('rot-z'),
	cbRotX = document.getElementById('rot-x'),
	cbRotY = document.getElementById('rot-y'),
	cbMovY = document.getElementById('mov-y'),
	btnGetPosture = document.getElementById('gp'),
	btnSetPosture = document.getElementById('sp');

// set up event handlers
document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);
document.addEventListener('mousemove', onMouseMove);

document.addEventListener('touchstart', onMouseDown);
document.addEventListener('touchend', onMouseUp);
document.addEventListener('touchcancel', onMouseUp);
document.addEventListener('touchmove', onMouseMove);

cbRotZ.addEventListener('click', processCheckBoxes);
cbRotX.addEventListener('click', processCheckBoxes);
cbRotY.addEventListener('click', processCheckBoxes);
cbMovY.addEventListener('click', processCheckBoxes);

controls.addEventListener('start', function () {
	renderer.setAnimationLoop(drawFrame);
});

controls.addEventListener('end', function () {
	renderer.setAnimationLoop(null);
	renderer.render(scene, camera);
});

window.addEventListener('resize', function () {
	renderer.render(scene, camera);
});

function undo() {
    setPostureStr(undoarray[undoarray.length-2]);
    undoarray.splice(-1);
}

//KEY SHORTCUTS
$(document).bind('keyup', 'z', function () {
	cbRotX.checked = cbRotY.checked = cbRotY.checked = cbRotZ.checked = cbMovY.checked = false;
	cbRotZ.checked = true;
	obj.rotation.reorder('XYZ');
});
$(document).bind('keyup', 'x', function () {
	cbRotX.checked = cbRotY.checked = cbRotY.checked = cbRotZ.checked = cbMovY.checked = false;
	cbRotX.checked = true;
	obj.rotation.reorder('YZX');
});
$(document).bind('keyup', 'y', function () {
	cbRotX.checked = cbRotY.checked = cbRotY.checked = cbRotZ.checked = cbMovY.checked = false;
	cbRotY.checked = true;
	obj.rotation.reorder('ZXY');
});
$(document).bind('keyup', 'm', function () {
	cbRotX.checked = cbRotY.checked = cbRotY.checked = cbRotZ.checked = cbMovY.checked = false;
	cbMovY.checked = true;
	// cbMovX.checked = true;
});
$(document).bind('keyup', 'ctrl+z', function () {
	undo();
});

// $(document).bind('keyup', 'ctrl+s', function () {
//
// });



function closeControlsHint() {
    $(".controlshint").fadeOut();
    document.cookie = "controlshint=false; max-age=31536000; path=/;";
}

function processCheckBoxes(event, key) {
	if (event) {
		if (event.target.checked) {
			cbRotX.checked = cbRotY.checked = cbRotY.checked = cbRotZ.checked = cbMovY.checked = false;
			event.target.checked = true;
			closeControlsHint();
		}
		if (touchInterface) event.target.checked = true;
	}

	if (!obj) return;

	if (cbRotZ.checked) {
		obj.rotation.reorder('XYZ');
	}
	if (cbRotX.checked) {
		obj.rotation.reorder('YZX');
	}
	if (cbRotY.checked) {
		obj.rotation.reorder('ZXY');
	}
}


function onMouseUp(event) {
	controls.enabled = true;
	mouseButton = undefined;
	deselect();
	renderer.setAnimationLoop(null);
	renderer.render(scene, camera);
}

function select(object) {
	deselect();
	obj = object;
	obj?.select(true);
}

function deselect() {
	if(obj) {
		undoarray.push(model.postureString);
		if(undoarray.length > 100) {
			undoarray.shift();
		}
	}

	gauge.parent?.remove(gauge);
	obj?.select(false);
	obj = undefined;
}

function onMouseDown(event){
	if (event.target.nodeName.toUpperCase() === 'CANVAS') {
		userInput(event);

		gauge.parent?.remove(gauge);
		dragPoint.parent?.remove(dragPoint);

		raycaster.setFromCamera(mouse, camera);

		var intersects = raycaster.intersectObject(model, true);
		console.log(intersects.length);
		console.log(intersects[0].object.name);
		if (intersects.length && (intersects[0].object.name || intersects[0].object.parent.name))
		{
			controls.enabled = false;
			console.log(controls.enabled);
			var name = intersects[0].object.name || intersects[0].object.parent.name;

			if (name == 'neck') name = 'head';
			if (name == 'pelvis') name = 'body';

			select(model[name]);

			document.getElementById('rot-x-name').innerHTML = model[name].nameUI.x || 'N/A';
			document.getElementById('rot-y-name').innerHTML = model[name].nameUI.y || 'N/A';
			document.getElementById('rot-z-name').innerHTML = model[name].nameUI.z || 'N/A';

			dragPoint.position.copy(obj.worldToLocal(intersects[0].point));
			obj.imageWrapper.add(dragPoint);

			if (!cbMovY.checked) obj.imageWrapper.add(gauge);
			gauge.position.y = (obj instanceof Ankle) ? 2 : 0;

			processCheckBoxes();
		}

		renderer.setAnimationLoop(drawFrame);
	}
}

function relativeTurn(joint, rotationalAngle, angle){
	if (!rotationalAngle) {
		// it is translation, not rotation --- move model
		if(movemodeldirection === "y") {
			joint.position.y += angle;
		}
		return;
	}

	if (joint.biologicallyImpossibleLevel) {
		if (cbBiologicalConstraints.checked) {
			// there is a dedicated function to check biological possibility of joint
			var oldImpossibility = joint.biologicallyImpossibleLevel();

			joint[rotationalAngle] += angle;
			joint.updateMatrix();
			joint.updateWorldMatrix(true); // ! important, otherwise get's stuck

			var newImpossibility = joint.biologicallyImpossibleLevel();

			if (newImpossibility > EPS && newImpossibility >= oldImpossibility - EPS)
			{
				// undo rotation
				joint[rotationalAngle] -= angle;
				return;
			}
		} else {
			joint.biologicallyImpossibleLevel();
			joint[rotationalAngle] += angle;
		}
		// keep the rotation, it is either possible, or improves impossible situation
	} else {
		// there is no dedicated function, test with individual rotation range

		var val = joint[rotationalAngle] + angle,
			min = joint.minRot[rotationalAngle],
			max = joint.maxRot[rotationalAngle];

		if (cbBiologicalConstraints.checked || min == max) {
			if (val < min - EPS && angle < 0) return;
			if (val > max + EPS && angle > 0) return;
			if (min == max) return;
		}

		joint[rotationalAngle] = val;
	}
	joint.updateMatrix();
	// console.log("relative turn")
} // relativeTurn

function kinematic2D(joint, rotationalAngle, angle, ignoreIfPositive){
	// returns >0 if this turn gets closer

	// swap Z<->X for wrist
	if (joint instanceof Wrist) {
		if (rotationalAngle == 'x')
			rotationalAngle = 'z';
		else if (rotationalAngle == 'z')
			rotationalAngle = 'x';
	}

	var screenPoint = new THREE.Vector3().copy(dragPoint.position);
	screenPoint = obj.localToWorld(screenPoint).project(camera);

	var distOriginal = mouse.distanceTo(screenPoint),
		oldAngle = joint[rotationalAngle];

	if (joint instanceof Head) { // head and neck
		oldParentAngle = joint.parentJoint[rotationalAngle];
		relativeTurn(joint, rotationalAngle, angle / 2);
		relativeTurn(joint.parentJoint, rotationalAngle, angle / 2);
		joint.parentJoint.updateMatrixWorld(true);
	} else {
		relativeTurn(joint, rotationalAngle, angle);
	}
	joint.updateMatrixWorld(true);

	screenPoint.copy(dragPoint.position);
	screenPoint = obj.localToWorld(screenPoint).project(camera);

	var distProposed = mouse.distanceTo(screenPoint),
		dist = distOriginal - distProposed;

	if (ignoreIfPositive && dist > 0) return dist;

	joint[rotationalAngle] = oldAngle;
	if (joint instanceof Head)
	{ // head and neck
		joint.parentJoint[rotationalAngle] = oldParentAngle;
	}
	joint.updateMatrixWorld(true);

	return dist;
}

function inverseKinematics(joint, rotationalAngle, step){
	// try going in postive or negative direction
	var kPos = kinematic2D(joint, rotationalAngle, 0.001),
		kNeg = kinematic2D(joint, rotationalAngle, -0.001);

	// if any of them improves closeness, then turn in this direction
	if (kPos > 0 || kNeg > 0)
	{
		if (kPos < kNeg) step = -step;
		kinematic2D(joint, rotationalAngle, step, true);
	}
}

function animate(time){
	// no selected object
	if (!obj || !mouseButton) return;

	var elemNone = !cbRotZ.checked && !cbRotX.checked && !cbRotY.checked && !cbMovY.checked,
		spinA = (obj instanceof Ankle) ? Math.PI / 2 : 0;

	gauge.rotation.set(0, 0, -spinA);
	if (cbRotX.checked || elemNone && mouseButton & 0x2) gauge.rotation.set(0, Math.PI / 2, 2 * spinA);
	if (cbRotY.checked || elemNone && mouseButton & 0x4) gauge.rotation.set(Math.PI / 2, 0, -Math.PI / 2);

	var joint = cbMovY.checked ? model.body : obj;
	do {
		for (var step = 5; step > 0.1; step *= 0.75)
		{
			if (cbRotZ.checked || elemNone && (mouseButton & 0x1))
				inverseKinematics(joint, 'z', step);
			if (cbRotX.checked || elemNone && (mouseButton & 0x2))
				inverseKinematics(joint, 'x', step);
			if (cbRotY.checked || elemNone && (mouseButton & 0x4))
				inverseKinematics(joint, 'y', step);
			if (cbMovY.checked)
				inverseKinematics(joint, '', step);
		}

		joint = joint.parentJoint;
	}
	while (joint && !(joint instanceof Mannequin) && !(joint instanceof Pelvis) && !(joint instanceof Torso) && cbInverseKinematics.checked);

	//scene.rotation.y = time / 400;
}

function onMouseMove(event){
	if (obj) userInput(event);

}

function userInput(event){
	if (event instanceof MouseEvent) {
		event.preventDefault();

		mouseInterface = true;
		mouseButton = event.buttons || 0x1;

		mouse.x = event.clientX / window.innerWidth * 2 - 1;
		mouse.y = -event.clientY / window.innerHeight * 2 + 1;
	}

	if (window.TouchEvent && event instanceof TouchEvent && event.touches.length == 1) {
		mouseButton = 0x1;

		touchInterface = true;
		mouse.x = event.touches[0].clientX / window.innerWidth * 2 - 1;
		mouse.y = -event.touches[0].clientY / window.innerHeight * 2 + 1;
	}
}

function getPosture(){
	prompt('The current posture is shown below. Copy it to the clipboard.', model.postureString);
}

function setPosture(){
	var string = prompt('Reset the posture to:', '{"version":6,"data":["0,[0,0,0],...]}');

	if (string) {
		var oldPosture = model.posture;

		try {
			model.postureString = string;
		} catch (error) {
			model.posture = oldPosture;
			if (error instanceof MannequinPostureVersionError)
				alert(error.message);
			else
				alert('The provided posture was either invalid or impossible to understand.');
			console.error(error);
		}
		renderer.render(scene, camera);
	}
}

function setPostureStr(string){
	if (string) {

		//model变量在posture-editor.js中定义：var model = new Male()，是mannequin.js的语法
		//posture是mannequin.js中的固有属性。示例代码：
		   // A = {"version":5,"data":[[90,-85,74.8],...]};
		   // B = {"version":5,"data":[[0,-90,0],...]};
		   // 	// set an intermediate posture
		   // man.posture = Mannequin.blend(A,B,0.5);

		var oldPosture = model.posture;

		try {

		//设置模型的姿势为传进来的姿势编号。postureString是函数，在mannequin.js中定义，作用是实现string和json的转换
			model.postureString = string;
		} catch (error) {
			model.posture = oldPosture;
			if (error instanceof MannequinPostureVersionError)
				alert(error.message);
			else
				alert('The provided posture was either invalid or impossible to understand.');
			//console.error(error);
		}
		renderer.render(scene, camera);
	}
	console.log("setposture has been excute")
}

for(let i = 0; i<scene.children.length; i++){
	thisobj = scene.children[i];
	console.log(thisobj);

	if(thisobj.type==="Group"){
		// console.log(thisobj.position.x+","+thisobj.position.y+","+thisobj.position.z);
		// console.log(thisobj.scale)
	}


}
