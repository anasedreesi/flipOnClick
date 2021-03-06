/*
FLIPPY jQuery plugin (http://guilhemmarty.com/flippy)
Released under MIT Licence (http://www.opensource.org/licenses/MIT)
@author : Guilhem MARTY (bonjour@guilhemmarty.com)
@version: 1.3
@changelog:
 May 21 2013 - v1.3 : added revert callbacks, direction option is not case sensitive
 
 Apr 06 2013 - v1.2 : can now use CSS3 transform property for better visual result in modern web browsers
 Apr 03 2013 - v1.1 : code cleanup (Object Oriented) + add Revert action + add onAnimation callback
 Mar 30 2013 - v1.0.3 : bug fix on IE8/IE9 with explorerCanvas + add multiple simultaneous flippy animations
 Mar 17 2013 - v1.0.2 : bug fix with IE10+. Can use rgba in color and color target
 Feb 11 2012 - v1.0.1 : bug fix with IE9
 Feb 11 2012 - v1.0 : First release
*/
(function(e) {
  function n() {
      e("document").ready(function() {
          var e = document.createElement("p"),
              t, n = {
                  webkitTransform: "-webkit-transform",
                  OTransform: "-o-transform",
                  msTransform: "-ms-transform",
                  MozTransform: "-moz-transform",
                  transform: "transform"
              };
          document.body.appendChild(e);
          for (var r in n) {
              if (e.style[r] !== undefined) {
                  e.style[r] = "rotateX(1deg)";
                  t = window.getComputedStyle(e).getPropertyValue(n[r])
              }
          }
          document.body.removeChild(e);
          s = t !== undefined && t.length > 0 && t !== "none"
      })
  }
  var t = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgrey: "#a9a9a9",
      darkgreen: "#006400",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      grey: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      "indianred ": "#cd5c5c",
      "indigo  ": "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgrey: "#d3d3d3",
      lightgreen: "#90ee90",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370d8",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#d87093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
  };
  var r = navigator.appName == "Microsoft Internet Explorer";
  var i = window.HTMLCanvasElement;
  var s = null;
  n();
  var o = Math.PI;
  var u = function(n, u, a) {
      this.animate = function(t) {
          if (t) {
              this._RBefore()
          } else {
              this._Before()
          }
          if (typeof t !== a && t) {
              var n = this._Recto;
              var r = this._Recto_color;
              this._Recto = this._Verso;
              this._Color = this._Recto_color = this._Verso_color;
              this._Verso = n;
              this._Color_target = this._Verso_color = r;
              this._Reversing = true;
              switch (this._Direction) {
                  case "TOP":
                      this._Direction = "BOTTOM";
                      break;
                  case "BOTTOM":
                      this._Direction = "TOP";
                      break;
                  case "LEFT":
                      this._Direction = "RIGHT";
                      break;
                  case "RIGHT":
                      this._Direction = "LEFT";
                      break
              }
          }
          if (this._noCSS || !s) {
              this.initiateFlippy();
              this.cvO = document.getElementById("flippy" + this._UID);
              this.jO.data("_oFlippy_", this);
              this._Int = setInterval(e.proxy(this.drawFlippy, this), this._Refresh_rate)
          } else {
              this.jO.addClass("flippy_active").parent().css({
                  perspective: this._nW + "px"
              });
              this.jO.data("_oFlippy_", this);
              this._Int = setInterval(e.proxy(this.drawFlippyCSS, this), this._Refresh_rate)
          }
      };
      this.drawFlippyCSS = function() {
          this._Ang = this._Direction == "RIGHT" || this._Direction == "TOP" ? this._Ang + this._Step_ang : this._Ang - this._Step_ang;
          var e = this._Direction == "RIGHT" || this._Direction == "LEFT" ? "Y" : "X";
          if ((this._Direction == "RIGHT" || this._Direction == "TOP") && this._Ang > 90 && this._Ang <= 90 + this._Step_ang || (this._Direction == "LEFT" || this._Direction == "BOTTOM") && this._Ang < -90 && this._Ang >= -90 - this._Step_ang) {
              if (this._Reversing) {
                  this._RMidway()
              } else {
                  this._Midway()
              }
              this.jO.css({
                  opacity: this._Color_target_alpha,
                  background: this._Color_target
              }).empty().append(this._Verso);
              this._Ang = this._Direction == "RIGHT" || this._Direction == "TOP" ? -90 : 90;
              this._Half = true
          }
          if (this._Direction == "RIGHT" || this._Direction == "TOP") {
              this._Ang = this._Ang > this._Step_ang && this._Half ? this._Ang - this._Step_ang : this._Ang
          } else {
              this._Ang = this._Ang < -this._Step_ang && this._Half ? this._Ang + this._Step_ang : this._Ang
          }
          if ((this._Direction == "RIGHT" || this._Direction == "TOP") && this._Ang > 0 && this._Half || (this._Direction == "LEFT" || this._Direction == "BOTTOM") && this._Ang < 0 && this._Half) {
              this.jO.removeClass("flippy_active").css({
                  "-webkit-transform": "rotate" + e + "(0deg)",
                  "-moz-transform": "rotate" + e + "(0deg)",
                  "-o-transform": "rotate" + e + "(0deg)",
                  "-ms-transform": "rotate" + e + "(0deg)",
                  transform: "rotate" + e + "(0deg)"
              }).find(".flippy_light").remove();
              clearInterval(this._Int);
              this._Half = false;
              if (this._Reversing) {
                  this._RAfter()
              } else {
                  this._After()
              }
              return
          } else {
              this.jO.css({
                  "-webkit-transform": "rotate" + e + "(" + this._Ang + "deg)",
                  "-moz-transform": "rotate" + e + "(" + this._Ang + "deg)",
                  "-o-transform": "rotate" + e + "(" + this._Ang + "deg)",
                  "-ms-transform": "rotate" + e + "(" + this._Ang + "deg)",
                  transform: "rotate" + e + "(" + this._Ang + "deg)"
              })
          }
          this.applyLight();
          if (this._Reversing) {
              this._RDuring()
          } else {
              this._During()
          }
      };
      this.applyLight = function() {
          if (this.jO.find(".flippy_light").size() === 0) {
              this.jO.append('<div class="flippy_light"></div>').find(".flippy_light").css({
                  position: "absolute",
                  top: "0",
                  left: "0",
                  "min-width": this._nW + "px",
                  "min-height": this._nH + "px",
                  width: this._nW + "px",
                  height: this._nH + "px",
                  "background-color": this._Direction == "LEFT" && this._Half || this._Direction == "RIGHT" && !this._Half || this._Direction == "TOP" && this._Half || this._Direction == "BOTTOM" && !this._Half ? "#000" : "#FFF",
                  opacity: Math.abs(this._Ang) * this._Light / 90 / 100
              })
          } else {
              this.jO.find(".flippy_light").css({
                  "background-color": this._Direction == "LEFT" && this._Half || this._Direction == "RIGHT" && !this._Half || this._Direction == "TOP" && this._Half || this._Direction == "BOTTOM" && !this._Half ? "#000" : "#FFF",
                  opacity: Math.abs(this._Ang) * this._Light / 90 / 100
              })
          }
      };
      this.initiateFlippy = function() {
          var e;
          this.jO.addClass("flippy_active").empty().css({
              opacity: this._Color_alpha,
              background: "none",
              position: "relative",
              overflow: "visible"
          });
          switch (this._Direction) {
              case "TOP":
                  this._CenterX = Math.sin(o / 2) * this._nW * this._Depth;
                  this._CenterY = this._H / 2;
                  e = '<canvas id="flippy' + this._UID + '" class="flippy" width="' + (this._W + 2 * this._CenterX) + '" height="' + this._H + '"></canvas>';
                  this.new_flippy(e);
                  this.jO.find("#flippy" + this._UID).css({
                      position: "absolute",
                      top: "0",
                      left: "-" + this._CenterX + "px"
                  });
                  break;
              case "BOTTOM":
                  this._CenterX = Math.sin(o / 2) * this._nW * this._Depth;
                  this._CenterY = this._H / 2;
                  e = '<canvas id="flippy' + this._UID + '" class="flippy" width="' + (this._W + 2 * this._CenterX) + '" height="' + this._H + '"></canvas>';
                  this.new_flippy(e);
                  this.jO.find("#flippy" + this._UID).css({
                      position: "absolute",
                      top: "0",
                      left: "-" + this._CenterX + "px"
                  });
                  break;
              case "LEFT":
                  this._CenterY = Math.sin(o / 2) * this._nH * this._Depth;
                  this._CenterX = this._W / 2;
                  e = '<canvas id="flippy' + this._UID + '" class="flippy" width="' + this._W + '" height="' + (this._H + 2 * this._CenterY) + '"></canvas>';
                  this.new_flippy(e);
                  this.jO.find("#flippy" + this._UID).css({
                      position: "absolute",
                      top: "-" + this._CenterY + "px",
                      left: "0"
                  });
                  break;
              case "RIGHT":
                  this._CenterY = Math.sin(o / 2) * this._nH * this._Depth;
                  this._CenterX = this._W / 2;
                  e = '<canvas id="flippy' + this._UID + '" class="flippy" width="' + this._W + '" height="' + (this._H + 2 * this._CenterY) + '"></canvas>';
                  this.new_flippy(e);
                  this.jO.find("#flippy" + this._UID).css({
                      position: "absolute",
                      top: "-" + this._CenterY + "px",
                      left: "0"
                  });
                  break
          }
      };
      this.drawFlippy = function() {
          this._Ang += this._Step_ang;
          if (this._Ang > 90 && this._Ang <= 90 + this._Step_ang) {
              if (this._Reversing) {
                  this._RMidway()
              } else {
                  this._Midway()
              }
              this.jO.css({
                  opacity: this._Color_target_alpha
              })
          }
          this._Ang = this._Ang > 180 + this._Step_ang ? this._Ang - (180 + this._Step_ang) : this._Ang;
          var e = this._Ang / 180 * o;
          if (this.cvO === null) {
              return
          }
          if (r && !i) {
              G_vmlCanvasManager.initElement(this.cvO)
          }
          var t = this.cvO.getContext("2d");
          t.clearRect(0, 0, this._W + 2 * this._CenterX, this._H + 2 * this._CenterY);
          t.beginPath();
          var n = Math.sin(e) * this._H * this._Depth;
          var s = Math.sin(e) * this._W * this._Depth;
          var u, a;
          switch (this._Direction) {
              case "LEFT":
                  u = Math.cos(e) * (this._W / 2);
                  t.fillStyle = this._Ang > 90 ? this.changeColor(this._Color_target, Math.floor(Math.sin(e) * this._Light)) : this.changeColor(this._Color, -Math.floor(Math.sin(e) * this._Light));
                  t.moveTo(this._CenterX - u, this._CenterY + n);
                  t.lineTo(this._CenterX + u, this._CenterY - n);
                  t.lineTo(this._CenterX + u, this._CenterY + this._H + n);
                  t.lineTo(this._CenterX - u, this._CenterY + this._H - n);
                  t.lineTo(this._CenterX - u, this._CenterY);
                  t.fill();
                  break;
              case "RIGHT":
                  u = Math.cos(e) * (this._W / 2);
                  t.fillStyle = this._Ang > 90 ? this.changeColor(this._Color_target, -Math.floor(Math.sin(e) * this._Light)) : this.changeColor(this._Color, Math.floor(Math.sin(e) * this._Light));
                  t.moveTo(this._CenterX + u, this._CenterY + n);
                  t.lineTo(this._CenterX - u, this._CenterY - n);
                  t.lineTo(this._CenterX - u, this._CenterY + this._H + n);
                  t.lineTo(this._CenterX + u, this._CenterY + this._H - n);
                  t.lineTo(this._CenterX + u, this._CenterY);
                  t.fill();
                  break;
              case "TOP":
                  a = Math.cos(e) * (this._H / 2);
                  t.fillStyle = this._Ang > 90 ? this.changeColor(this._Color_target, -Math.floor(Math.sin(e) * this._Light)) : this.changeColor(this._Color, Math.floor(Math.sin(e) * this._Light));
                  t.moveTo(this._CenterX + s, this._CenterY - a);
                  t.lineTo(this._CenterX - s, this._CenterY + a);
                  t.lineTo(this._CenterX + this._W + s, this._CenterY + a);
                  t.lineTo(this._CenterX + this._W - s, this._CenterY - a);
                  t.lineTo(this._CenterX, this._CenterY - a);
                  t.fill();
                  break;
              case "BOTTOM":
                  a = Math.cos(e) * (this._H / 2);
                  t.fillStyle = this._Ang > 90 ? this.changeColor(this._Color_target, Math.floor(Math.sin(e) * this._Light)) : this.changeColor(this._Color, -Math.floor(Math.sin(e) * this._Light));
                  t.moveTo(this._CenterX + s, this._CenterY + a);
                  t.lineTo(this._CenterX - s, this._CenterY - a);
                  t.lineTo(this._CenterX + this._W + s, this._CenterY - a);
                  t.lineTo(this._CenterX + this._W - s, this._CenterY + a);
                  t.lineTo(this._CenterX, this._CenterY + a);
                  t.fill();
                  break
          }
          if (this._Ang > 180) {
              this.jO.removeClass("flippy_active").css({
                  background: this._Color_target
              }).append(this._Verso).removeClass("flippy_container").find(".flippy").remove();
              clearInterval(this._Int);
              if (this._Reversing) {
                  this._RAfter()
              } else {
                  this._After()
              }
              return
          }
          if (this._Reversing) {
              this._RDuring()
          } else {
              this._During()
          }
      };
      this.new_flippy = function(e) {
          if (r && !i) {
              this.jO.addClass("flippy_container").attr("id", "flippy_container" + this._UID);
              var t = document.getElementById("flippy_container" + this._UID);
              var n = document.createElement(e);
              t.appendChild(n)
          } else {
              this.jO.append(e)
          }
      };
      this.convertColor = function(e) {
          var n = t.hasOwnProperty(e) ? t[e] : e;
          if (/^transparent$/i.test(n)) return "#ffffff";
          if (n.substr(0, 4) == "rgb(") {
              return ["#", this.toHex(n.substr(4, n.length).split(",")[0] >>> 0), this.toHex(n.substr(3, n.length).split(",")[1] >>> 0), this.toHex(n.substr(3, n.length - 4).split(",")[2] >>> 0)].join("")
          }
          if (n.substr(0, 5) == "rgba(") {
              return ["#", this.toHex(n.substr(5, n.length).split(",")[0] >>> 0), this.toHex(n.substr(3, n.length).split(",")[1] >>> 0), this.toHex(n.substr(3, n.length - 4).split(",")[2] >>> 0)].join("")
          }
          return n
      };
      this.toHex = function(e) {
          var t = [];
          while (Math.floor(e) > 16) {
              t.push(e % 16);
              e = Math.floor(e / 16)
          }
          var n, r;
          switch (e) {
              case 10:
                  n = "A";
                  break;
              case 11:
                  n = "B";
                  break;
              case 12:
                  n = "C";
                  break;
              case 13:
                  n = "D";
                  break;
              case 14:
                  n = "E";
                  break;
              case 15:
                  n = "F";
                  break;
              default:
                  n = "" + e;
                  break
          }
          for (r = t.length - 1; r >= 0; r--) {
              switch (t[r]) {
                  case 10:
                      n += "A";
                      break;
                  case 11:
                      n += "B";
                      break;
                  case 12:
                      n += "C";
                      break;
                  case 13:
                      n += "D";
                      break;
                  case 14:
                      n += "E";
                      break;
                  case 15:
                      n += "F";
                      break;
                  default:
                      n += "" + t[r];
                      break
              }
          }
          if (n.length == 1) {
              return "0" + n
          } else {
              return n
          }
      };
      this.changeColor = function(e, t) {
          var n = e.substr(1, 2);
          var r = e.substr(3, 2);
          var i = e.substr(5, 2);
          var s = parseInt(n, 16) + t > 255 ? 255 : parseInt(n, 16) + t;
          var o = parseInt(r, 16) + t > 255 ? 255 : parseInt(r, 16) + t;
          var u = parseInt(i, 16) + t > 255 ? 255 : parseInt(i, 16) + t;
          n = s <= 0 ? "00" : this.toHex(s);
          r = o <= 0 ? "00" : this.toHex(o);
          i = u <= 0 ? "00" : this.toHex(u);
          return "#" + n + r + i
      };
      u = e.extend({
          step_ang: 10,
          refresh_rate: 15,
          duration: 300,
          depth: .12,
          color_target: "white",
          light: 60,
          content: "",
          direction: "LEFT",
          noCSS: false,
          onStart: function() {},
          onMidway: function() {},
          onAnimation: function() {},
          onFinish: function() {},
          onReverseStart: function() {},
          onReverseMidway: function() {},
          onReverseAnimation: function() {},
          onReverseFinish: function() {}
      }, u);
      this._Reversing = false;
      this._Half = false;
      this._UID = Math.floor(Math.random() * 1e6);
      this.jO = n;
      this._noCSS = u.noCSS;
      this._Ang = 0;
      this._Step_ang = u.refresh_rate / u.duration * 200;
      this._Refresh_rate = u.refresh_rate;
      this._Duration = u.duration;
      this._Depth = u.depth;
      this._Color_target_is_rgba = u.color_target.substr(0, 5) == "rgba(";
      this._Color = n.css("background-color");
      this._Color_target_alpha = this._Color_target_is_rgba ? u.color_target.substr(3, u.color_target.length - 4).split(",")[3] >>> 0 : 1;
      this._Color_alpha = /^transparent$/i.test("" + this._Color) ? 0 : this._Color.substr(0, 5) == "rgba(" ? this._Color.substr(3, this._Color.length - 4).split(",")[3] >>> 0 : 1;
      this._Color_target = this.convertColor(u.color_target);
      this._Color = this.convertColor(this._Color);
      this._Direction = u.direction.toUpperCase();
      this._Light = u.light;
      this._Content = typeof u.content == "object" ? u.content.html() : u.content;
      this._Recto_color = this._Color;
      this._Verso_color = this._Color_target;
      this._Recto = u.recto !== a ? u.recto : this.jO.html();
      this._Verso = u.verso !== a ? u.verso : this._Content;
      this._Before = u.onStart;
      this._During = u.onAnimation;
      this._Midway = u.onMidway;
      this._After = u.onFinish;
      this._RBefore = u.onReverseStart;
      this._RDuring = u.onReverseAnimation;
      this._RMidway = u.onReverseMidway;
      this._RAfter = u.onReverseFinish;
      this._nW = this.jO.width();
      this._nH = this.jO.height();
      this._W = this.jO.outerWidth();
      this._H = this.jO.outerHeight();
      u = null
  };
  e.fn.flippy = function(t) {
      return this.each(function() {
          $t = e(this);
          if (!$t.hasClass("flippy_active")) {
              var n = new u($t, t);
              n.animate()
          }
      })
  };
  e.fn.flippyReverse = function() {
      return this.each(function() {
          $t = e(this);
          if (!$t.hasClass("flippy_active")) {
              var t = $t.data("_oFlippy_");
              t.animate(true)
          }
      })
  }
})(jQuery);
