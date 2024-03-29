function ZoomPic() {
    this.initialize.apply(this, arguments)
}
ZoomPic.prototype = {
    initialize: function(t) {
        var e = this;
        this.wrap = "string" == typeof t ? document.getElementById(t) : t, this.oUl = this.wrap.getElementsByTagName("ul")[0], this.aLi = this.wrap.getElementsByTagName("li"), this.prev = this.wrap.getElementsByTagName("span")[0], this.next = this.wrap.getElementsByTagName("span")[1], this.timer = 1e3, this.aSort = [], this.iCenter = 1, this._doPrev = function() {
            return e.doPrev.apply(e)
        }, this._doNext = function() {
            return e.doNext.apply(e)
        }, this.options = [{
            width: 266,
            height: 942,
            top: 30,
            left: 0,
            zIndex: 1
        }, {
            width: 266,
            height: 942,
            top: 00,
            left: 131,
            zIndex: 2
        }, {
            width: 266,
            height: 942,
            top: 30,
            left: 296,
            zIndex: 1
        }];
        for (var i = 0; i < this.aLi.length; i++) this.aSort[i] = this.aLi[i];
        this.aSort.unshift(this.aSort.pop()), this.setUp(), this.addEvent(this.prev, "click", this._doPrev), this.addEvent(this.next, "click", this._doNext), this.doImgClick(), this.timer = setInterval(function() {
            e.doNext()
        }, 4e3), this.wrap.onmouseover = function() {
            clearInterval(e.timer)
        }, this.wrap.onmouseout = function() {
            e.timer = setInterval(function() {
                e.doNext()
            }, 4e3)
        }
    },
    doPrev: function() {
        this.aSort.unshift(this.aSort.pop()), this.setUp()
    },
    doNext: function() {
        this.aSort.push(this.aSort.shift()), this.setUp()
    },
    doImgClick: function() {
        for (var t = this, e = 0; e < this.aSort.length; e++) this.aSort[e].onclick = function() {
            if (this.index > t.iCenter) {
                for (var e = 0; e < this.index - t.iCenter; e++) t.aSort.push(t.aSort.shift());
                t.setUp()
            } else if (this.index < t.iCenter) {
                for (var e = 0; e < t.iCenter - this.index; e++) t.aSort.unshift(t.aSort.pop());
                t.setUp()
            }
        }
    },
    setUp: function() {
        var t = this,
            e = 0;
        for (e = 0; e < this.aSort.length; e++) this.oUl.appendChild(this.aSort[e]);
        for (e = 0; e < this.aSort.length; e++) this.aSort[e].index = e, e < 5 ? (this.css(this.aSort[e], "display", "block"), this.doMove(this.aSort[e], this.options[e], function() {
            t.doMove(t.aSort[t.iCenter].getElementsByTagName("img")[0], {
                opacity: 100
            }, function() {
                t.doMove(t.aSort[t.iCenter].getElementsByTagName("img")[0], {
                    opacity: 100
                }, function() {
                    t.aSort[t.iCenter].onmouseover = function() {
                        t.doMove(this.getElementsByTagName("div")[0], {
                            bottom: 0
                        })
                    }, t.aSort[t.iCenter].onmouseout = function() {
                        t.doMove(this.getElementsByTagName("div")[0], {
                            bottom: -100
                        })
                    }
                })
            })
        })) : (this.css(this.aSort[e], "display", "none"), this.css(this.aSort[e], "width", 0), this.css(this.aSort[e], "height", 0), this.css(this.aSort[e], "top", 37), this.css(this.aSort[e], "left", this.oUl.offsetWidth / 2)), e < this.iCenter || e > this.iCenter ? (this.css(this.aSort[e].getElementsByTagName("img")[0], "opacity", 100), this.css(this.aSort[e].getElementsByTagName("img")[0], "height", 822)) : (this.aSort[e].onmouseover = this.aSort[e].onmouseout = null, this.css(this.aSort[e].getElementsByTagName("img")[0], "height", 942))
    },
    addEvent: function(t, e, i) {
        return t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent("on" + e, i)
    },
    css: function(t, e, i) {
        if (2 == arguments.length) return t.currentStyle ? t.currentStyle[e] : getComputedStyle(t, null)[e];
        if (3 == arguments.length) switch (e) {
            case "width":
            case "height":
            case "top":
            case "left":
            case "bottom":
                t.style[e] = i + "px";
                break;
            case "opacity":
                console.log("设置opacity====>"), t.style.filter = "alpha(opacity=" + i + ")", t.style.opacity = i / 100;
                break;
            default:
                t.style[e] = i
        }
    },
    doMove: function(t, e, i) {
        var o = this;
        try {
            clearInterval(t.timer), t.timer = setInterval(function() {
                var s = !0;
                for (var n in e) {
                    var a = parseFloat(o.css(t, n));
                    "opacity" == n && (a = parseInt(100 * a.toFixed(2)));
                    var h = (e[n] - a) / 5;
                    h = h > 0 ? Math.ceil(h) : Math.floor(h), a != e[n] && (s = !1, o.css(t, n, a + h))
                }
                s && (clearInterval(t.timer), i && i.apply(o, arguments))
            }, 100)
        } catch (t) {}
    }
}, window.onload = function() {
    new ZoomPic("focus_Box")
};