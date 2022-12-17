package com.niche.anyposes_springboot.controller;

import com.niche.anyposes_springboot.entity.User;
import com.niche.anyposes_springboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.servlet.http.HttpSession;

/**
 * @Auther: jzhang
 * @Date: 2019/9/24 15:49
 * @Description: 用户控制器
 */
@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    //验证用户名是否存在
    @ResponseBody
    @RequestMapping("/checkUserName")
    public String checkUserName(String username){
        return userService.checkUser(username);
    }

    /**
     * 用户注册
     */
    @ResponseBody
    @RequestMapping("register")
    public String register(User user){
        userService.save(user);
        return "success";
    }

    /**
     * 用户登录
     */
    @ResponseBody
    @RequestMapping("/login")
    public String login(User user,HttpSession session){
        return userService.loginCheck(user,session);
    }

    /**
     * 安全退出
     */
    @RequestMapping("/logout")
    public String logout(HttpSession session){
        session.invalidate();
        return "redirect:/";
    }

    /**
     * 查询当前用户是否会员
     */
    @RequestMapping("/getMembertype")
    @ResponseBody
    public String getMembertype(HttpSession session, Model model){
        User user = (User) session.getAttribute("user");
        System.out.println("当前session中用户"+user);
        String memberType=userService.findMembertypeByUser(user.getId());
        System.out.println("返回页面的值"+memberType);
        model.addAttribute("memberType",memberType);  //html中   <div th:text="${memberType}"></div>--不需要，直接在页面加载的js中判断该值？
//        return "../static/index";
        return memberType;

    }


}
