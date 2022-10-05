package com.niche.anyposes_springboot.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
//@RequestMapping("/pose")  //不能加，加了加载js和css的路径前都会加上pose，导致加载不了
public class poseDetailPage {

    @RequestMapping("/")
    public String index(){
        return "../static/index";
    }

    @RequestMapping("pose-ball-kick")
    public String ballKick(){
        return "../static/ball-kick";
    }

    @RequestMapping("pose-ballet-arabesque")
    public String balletarabesque(){
        return "../static/ballet-arabesque";
    }

    @RequestMapping("pose-ballet-attitude")
    public String balletattitude(){
        return "../static/ballet-attitude";
    }

    @RequestMapping("pose-ballet-croise")
    public String balletcroise(){
        return "../static/ballet-croise";
    }

    @RequestMapping("pose-basketball-dribble")
    public String basketballdribble(){
        return "../static/basketball-dribble";
    }

    @RequestMapping("pose-basketball-dunk")
    public String basketballdunk(){
        return "../static/basketball-dunk";
    }

    @RequestMapping("pose-basketball-jumpshot")
    public String basketballjumpshot(){
        return "../static/basketball-jumpshot";
    }

    @RequestMapping("pose-bike")
    public String bike(){ return "../static/bike";}

    @RequestMapping("pose-bodybuilding-1")
    public String bodybuilding1(){
        return "../static/bodybuilding1";
    }

    @RequestMapping("pose-bodybuilding-2")
    public String bodybuilding2(){
        return "../static/bodybuilding2";
    }

    @RequestMapping("pose-bodybuilding-3")
    public String bodybuilding3(){
        return "../static/bodybuilding3";
    }

    @RequestMapping("pose-bodybuilding-4")
    public String bodybuilding4(){
        return "../static/bodybuilding4";
    }

    @RequestMapping("pose-bodybuilding-5")
    public String bodybuilding5(){
        return "../static/bodybuilding5";
    }

    @RequestMapping("pose-cartwheel")
    public String cartwheel(){
        return "starwar";
    }

    @RequestMapping("pose-celebratory")
    public String celebratory(){
        return "../static/celebratory";
    }

    @RequestMapping("pose-bodybuilding-6")
    public String bodybuilding6(){
        return "../static/bodybuilding6";
    }

    @RequestMapping("pose-bodybuilding-7")
    public String bodybuilding7(){
        return "../static/bodybuilding7";
    }

    @RequestMapping("pose-crossed-arms")
    public String crossedarms(){
        return "../static/crossed-arms";
    }

    @RequestMapping("pose-digging")
    public String digging(){
        return "../static/digging";
    }

    @RequestMapping("pose-dive")
    public String dive(){
        return "../static/dive";
    }

    @RequestMapping("pose-disgusted")
    public String disgusted(){
        return "../static/disgusted";
    }

    @RequestMapping("pose-downward-facing-dog")
    public String downwardfacingdog(){
        return "wonderwoman";
    }

    @RequestMapping("pose-elbow-stand")
    public String elbowstand(){
        return "../static/elbow-stand";
    }

    @RequestMapping("pose-excited")
    public String excited(){
        return "../static/excited";
    }

    @RequestMapping("pose-falling-backwards")
    public String fallingbackwards(){
        return "../static/falling-backwards";
    }

    @RequestMapping("pose-forearm-stand")
    public String forearmstand(){
        return "superman";
    }

    @RequestMapping("pose-goalkeeping")
    public String goalkeeping(){
        return "../static/goalkeeping";
    }

    @RequestMapping("pose-handstand")
    public String handstand(){
        return "../static/handstand";
    }

    @RequestMapping("pose-hanging-bar")
    public String hangingbar(){
        return "../static/hanging-bar";
    }

    @RequestMapping("pose-high-kick")
    public String highkick(){
        return "../static/high-kick";
    }

    @RequestMapping("pose-hip-shooting")
    public String hipshooting(){
        return "../static/hip-shooting";
    }

    @RequestMapping("pose-karate-kick")
    public String karatekick(){
        return "../static/karate-kick";
    }

    @RequestMapping("pose-kneeled-archery")
    public String neeledarchery(){
        return "../static/kneeled-archery";
    }

    @RequestMapping("pose-kneeling")
    public String kneeling(){
        return "../static/kneeling";
    }

    @RequestMapping("pose-looking-away-disgusted")
    public String lookingawaydisgusted(){
        return "../static/looking-away-disgusted";
    }

    @RequestMapping("pose-lying-on-the-floor")
    public String lyingonthefloor(){
        return "../static/lying-on-the-floor";
    }

    @RequestMapping("pose-lyingdown-with-feet-in-air")
    public String lyingdownwithfeetinair(){
        return "../static/lyingdown-with-feet-in-air";
    }

    @RequestMapping("pose-sitting-back")
    public String sittingback(){
        return "../static/sitting-back";
    }

    @RequestMapping("pose-sitting-cross-legged")
    public String sittingcrosslegged(){
        return "../static/sitting-cross-legged";
    }

    @RequestMapping("pose-sitting-cross-legged-on-chair")
    public String sittingcrossleggedonchair(){
        return "../static/sitting-cross-legged-on-chair";
    }

    @RequestMapping("pose-sitting-on-chair")
    public String sittingonchair(){
        return "../static/sitting-on-chair";
    }

    @RequestMapping("pose-sitting-on-ground")
    public String sittingonground(){
        return "../static/sitting-on-ground";
    }

    @RequestMapping("pose-sitting-on-ground-cross")
    public String sittingongroundcross(){
        return "../static/sitting-on-ground-cross";
    }

    @RequestMapping("pose-slow-run")
    public String slowrun(){
        return "../static/slow-run";
    }

    @RequestMapping("pose-sword-block")
    public String swordblock(){
        return "../static/sword-block";
    }

    @RequestMapping("pose-sword-diagonalblow")
    public String sworddiagonalblow(){
        return "../static/sword-diagonalblow";
    }

    @RequestMapping("pose-sword-highblow")
    public String swordhighblow(){
        return "../static/sword-highblow";
    }

    @RequestMapping("pose-sword-lunge")
    public String swordlunge(){
        return "../static/sword-lunge";
    }

    @RequestMapping("pose-sword-sideblow")
    public String swordsideblow(){
        return "../static/sword-sideblow";
    }

    @RequestMapping("pose-matrix")
    public String matrix(){
        return "../static/matrix";
    }

    @RequestMapping("pose-titanic")
    public String titanic(){
        return "../static/titanic";
    }

    @RequestMapping("pose-harrypotter")
    public String harrypotter(){
        return "../static/harrypotter";
    }

    @RequestMapping("pose-starwar")
    public String starwar(){
        return "../static/starwar";
    }

    @RequestMapping("pose-superman")
    public String superman(){
        return "../static/superman";
    }

    @RequestMapping("pose-wonderwoman")
    public String wonderwoman(){
        return "../static/wonderwoman";
    }

    @RequestMapping("pose-tennis-forehand")
    public String tennisforehand(){
        return "../static/tennis-forehand";
    }

    @RequestMapping("pose-tennis-backhand")
    public String tennisbackhand(){
        return "../static/tennis-backhand";
    }

    @RequestMapping("pose-tennis-serve")
    public String tennisserve(){
        return "../static/tennis-serve";
    }

    @RequestMapping("pose-golf")
    public String golf(){
        return "../static/golf";
    }

    @RequestMapping("pose-golf-huigan")
    public String golfHuigan(){
        return "../static/golf-huigan";
    }

    @RequestMapping("pose-push")
    public String push(){
        return "../static/push";
    }

    @RequestMapping("pose-pull")
    public String pull(){
        return "../static/pull";
    }
}
