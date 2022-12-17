//验证用户名是否已经存在
function checkUser(obj) {
    // alert(obj.value);
    $.ajax({
        // url: contextPath + "/user/checkUserName",
        url: "/user/checkUserName",
        data:{"username":obj.value},
        method:"post",
        success:function (data) {
            $("#msg").css("display","block");
            if (data == 102) {//用户存在
                $("#tip").html("用户名已存在");
                $("#tip").removeClass("alert-success");
                $("#tip").addClass("alert-danger");
                //如果用户名已存在，“注册”按钮disable掉：
                $("#regForm>div.modal-footer > input").attr('disabled',true);
            } else {
                $("#tip").html("用户名可以注册");
                $("#tip").removeClass("alert-danger");
                $("#tip").addClass("alert-success");
                //如果用户名可注册，“注册”按钮取消disable状态：
                $("#regForm>div.modal-footer > input").attr('disabled',false);
            }
        }
    })
}

//用户注册
function register() {
    var datas = $("#regForm").serialize();
    $.ajax({
        url: "/user/register",
        data:datas,
        method:"post",
        success:function (data) {
            if(data == 'success'){
                alert("注册成功，请登录！");
                $("#register").modal('hide');
            }
        }
    })
}

//用户登录
function login() {
    var datas = $("#loginForm").serialize();
    $.ajax({
        // url: contextPath + "/user/login",
        url:"/user/login",
        data:datas,
        method:"post",
        success:function (data) {
            $("#userTip").css("display","none");
            $("#pwdTip").css("display","none");
            if(data == 100){
                $("#loginModal").modal('hide');
                // window.location.href = contextPath + "/book/index";
                window.location.href = "/";
            }  else if(data == 101) {
                $("#userTip").css("display","block");
            } else {
                $("#pwdTip").css("display","block");
            }
        }
    })

}





