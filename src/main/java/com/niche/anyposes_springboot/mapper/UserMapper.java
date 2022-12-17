package com.niche.anyposes_springboot.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.niche.anyposes_springboot.entity.User;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

/**
 * @Auther: jzhang
 * @Date: 2019/9/24 15:51
 * @Description:
 */
@Repository
public interface UserMapper extends BaseMapper<User> {


    @Select("SELECT permanent_member FROM user WHERE user.id = #{userId}")
    String findMemebertypeByUserId(Integer userId);



}
