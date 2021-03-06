// Generated by LiveScript 1.2.0
(function(){
  var MyRobot, tr;
  importScripts('../base-robot.js');
  MyRobot = (function(superclass){
    var mode, prototype = extend$((import$(MyRobot, superclass).displayName = 'MyRobot', MyRobot), superclass).prototype, constructor = MyRobot;
    mode = 0;
    prototype.onIdle = function(){
      if (this.mode === 0) {
        this.turn_right(308 - this.me.tank_angle);
        this.move_forwards(100);
        this.shoot();
        this.turn_turret_right(45);
      } else if (this.mode === 1) {
        this.turn_turret_right(2);
        this.turn_left(0);
        this.shoot();
        if (this.me.turret_angle > 235) {
          this.mode = 2;
        }
      } else if (this.mode === 2) {
        this.turn_turret_left(2);
        this.turn_right(0);
        this.shoot();
        if (this.me.turret_angle < 135) {
          this.mode = 1;
        }
      } else {
        this.shoot();
        this.turn_turret_right(45);
        this.mode = 0;
      }
    };
    prototype.onWallCollide = function(){
      this.mode = 1;
      this.shoot();
    };
    prototype.onHit = function(){
      this.shoot();
    };
    prototype.onEnemySpot = function(){
      this.shoot();
      if (this.mode === 1) {
        this.mode = 2;
      } else if (this.mode === 2) {
        this.mode = 1;
      }
    };
    function MyRobot(){
      MyRobot.superclass.apply(this, arguments);
    }
    return MyRobot;
  }(BaseRobot));
  tr = new MyRobot("MyRobot");
  function extend$(sub, sup){
    function fun(){} fun.prototype = (sub.superclass = sup).prototype;
    (sub.prototype = new fun).constructor = sub;
    if (typeof sup.extended == 'function') sup.extended(sub);
    return sub;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
