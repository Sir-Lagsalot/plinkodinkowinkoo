function initializeBoard() {
    canvas = new fabric.Canvas("board"), canvas.selection = !1;
    var e = $(".board-container").width() / config.table_width;
    if (console.log("adjustment:", e), e > 1) canvas.setDimensions({
        width: config.table_width,
        height: config.table_height
    });
    else {
        var t = config.table_width * e,
            o = config.table_height * e;
        canvas.setDimensions({
            width: t,
            height: o
        }), canvas.setZoom(e)
    }
    window.addEventListener("resize", function() {
        var e = $(".board-container").width() / config.table_width;
        if (console.log("adjustment:", e), e > 1) canvas.setDimensions({
            width: config.table_width,
            height: config.table_height
        }), canvas.setZoom(1);
        else {
            var t = config.table_width * e,
                o = config.table_height * e;
            canvas.setDimensions({
                width: t,
                height: o
            }), canvas.setZoom(e)
        }
    }, !0);
    for (var n = 0; n < config.n - 1; n++)
        for (var a = n + 1, r = (config.n - n) * config.puck_diameter / 2 +
            (config.n - n) * config.peg_diameter / 2, s = 0; a > s; s++) {
            var i = new fabric.Circle({
                left: config.side_margin + r + config.puck_diameter *
                    s + config.peg_diameter * s - 4,
                top: config.top_margin + .65 * config.puck_diameter *
                    n + .65 * config.peg_diameter * n,
                radius: config.peg_diameter,
                selectable: !1,
                fill: "white",
                stroke: "rgba(20, 212, 255, 1)",
                shadow: "rgba(0,0,0,1.0) 0px 4px 0px"
            });
            canvas.add(i)
        }
    var l = config.n,
        c = new fabric.Rect({
            top: config.top_margin + l * config.puck_diameter * .65 + l *
                config.peg_diameter * .65 - 22,
            left: config.side_margin,
            height: 2,
            selectable: !1,
            width: l * config.puck_diameter + l * config.peg_diameter
        });
    canvas.add(c);
    for (var d = 0; 17 >= d; ++d) {
        var l = config.n - 1,
            u = new fabric.Rect({
                top: config.top_margin + l * config.puck_diameter * .65 +
                    l * config.peg_diameter * .65,
                left: (config.puck_diameter + config.peg_diameter) * d,
                height: 10,
                selectable: !1,
                width: 2
            });
        0 !== d && canvas.add(u)
    }
    config.pay_tables.green.forEach(function(e, t) {
        var o = "#a8ebc4",
            n = "#2ecc71",
            a = "#27ae60",
            r = config.n - 1,
            s = new fabric.IText((e + String.fromCharCode(215) +
                "  ").slice(0, 4), {
                angle: 0,
                top: 1 * config.payTableRowHeight + config.top_margin +
                    r * config.puck_diameter * .65 + r * config
                    .peg_diameter * .65,
                left: config.side_margin + (config.puck_diameter +
                    config.peg_diameter) * t + 2,
                fontSize: config.payTableFontSize,
                stroke: parseFloat(e) > 1 ? a : n,
                fill: parseFloat(e) > 1 ? a : n,
                fontFamily: "Courier New",
                fontWeight: parseFloat(e) > 1 ? "bold" : "normal",
                selectable: !1,
                backgroundColor: parseFloat(e) > 1 ? o : ""
            });
        canvas.add(s)
    }), config.pay_tables.yellow.forEach(function(e, t) {
        var o = "#f9e8a0",
            n = "#f1c40f",
            a = "#f39c12",
            r = config.n - 1,
            s = new fabric.Text((e + String.fromCharCode(215) +
                "  ").slice(0, 4), {
                angle: 0,
                top: 2 * config.payTableRowHeight + config.top_margin +
                    r * config.puck_diameter * .65 + r * config
                    .peg_diameter * .65,
                left: config.side_margin + (config.puck_diameter +
                    config.peg_diameter) * t + 2,
                selectable: !1,
                fontSize: config.payTableFontSize,
                stroke: parseFloat(e) >= 1 ? a : n,
                fill: parseFloat(e) >= 1 ? a : n,
                fontFamily: "Courier New",
                fontWeight: parseFloat(e) >= 1 ? "bold" : "normal",
                backgroundColor: parseFloat(e) >= 1 ? o : ""
            });
        canvas.add(s)
    }), config.pay_tables.red.forEach(function(e, t) {
        var o = "#f8c9c4",
            n = "#e74c3c",
            a = "#c0392b",
            r = config.n - 1,
            s = new fabric.Text((e + String.fromCharCode(215) +
                "  ").slice(0, 4), {
                angle: 0,
                top: 3 * config.payTableRowHeight + config.top_margin +
                    r * config.puck_diameter * .65 + r * config
                    .peg_diameter * .65,
                left: config.side_margin + (config.puck_diameter +
                    config.peg_diameter) * t + 2,
                fontSize: config.payTableFontSize,
                stroke: parseFloat(e) >= 1 ? a : n,
                fill: parseFloat(e) >= 1 ? a : n,
                selectable: !1,
                fontFamily: "Courier New",
                fontWeight: parseFloat(e) >= 1 ? "bold" : "normal",
                backgroundColor: parseFloat(e) >= 1 ? o : ""
            });
        canvas.add(s)
    }), worldStore.state.pay_tables.dark.forEach(function(e, t) {
        var o = "green",
            n = config.n - 1,
            a = new fabric.Text((e + String.fromCharCode(215) +
                "  ").slice(0, 4), {
                angle: 0,
                top: 4 * config.payTableRowHeight + config.top_margin +
                    n * config.puck_diameter * .65 + n * config
                    .peg_diameter * .65,
                left: config.side_margin + (config.puck_diameter +
                    config.peg_diameter) * t + 2,
                fontSize: config.payTableFontSize,
                stroke: parseFloat(e) >= 1 ? config.hexColors.dark[
                    o] : config.hexColors.light[o],
                fill: parseFloat(e) >= 1 ? config.hexColors.dark[
                    o] : config.hexColors.light[o],
                selectable: !1,
                fontFamily: "Courier New",
                fontWeight: parseFloat(e) >= 1 ? "bold" : "normal",
                backgroundColor: parseFloat(e) >= 1 ? config.hexColors
                    .fade[o] : ""
            });
        canvas.add(a)
    })
}

function paint() {
    setTimeout(function() {
        requestAnimationFrame(paint), Object.keys(worldStore.state.renderedPucks)
            .length > 0 && canvas.renderAll()
    }, 1e3 / fps)
}

function onRecaptchaLoad() {
    Dispatcher.sendAction("GRECAPTCHA_LOADED", grecaptcha)
}

function connectToChatServer() {
    console.log("Connecting to chat server. AccessToken:", worldStore.state
        .accessToken), socket = io(config.chat_uri), socket.on(
        "connect", function() {
            console.log("[socket] Connected"), socket.on("disconnect",
                function() {
                    console.log("[socket] Disconnected")
                }), socket.on("system_message", function(e) {
                console.log("[socket] Received system message:",
                    e), Dispatcher.sendAction(
                    "NEW_SYSTEM_MESSAGE", e)
            }), socket.on("new_message", function(e) {
                console.log("[socket] Received chat message:",
                    e), Dispatcher.sendAction(
                    "NEW_CHAT_MESSAGE", e)
            }), socket.on("user_muted", function(e) {
                console.log("[socket] User muted:", e)
            }), socket.on("user_unmuted", function(e) {
                console.log("[socket] User unmuted:", e)
            }), socket.on("user_joined", function(e) {
                console.log("[socket] User joined:", e),
                    Dispatcher.sendAction("USER_JOINED", e)
            }), socket.on("user_left", function(e) {
                console.log("[socket] User left:", e),
                    Dispatcher.sendAction("USER_LEFT", e)
            }), socket.on("client_error", function(e) {
                console.warn("[socket] Client error:", e)
            });
            var e;
            worldStore.state.accessToken && (e = CryptoJS.SHA256(
                worldStore.state.accessToken).toString());
            var t = {
                app_id: config.app_id,
                hashed_token: e
            };
            socket.emit("auth", t, function(e, t) {
                return e ? void console.log(
                    "[socket] Auth failure:", e) : (console
                    .log("[socket] Auth success:", t), void Dispatcher
                    .sendAction("INIT_CHAT", t))
            })
        })
}
var helpers = {};
new buzz.sound("sounds/hit", {
    formats: ["ogg"]
}), new buzz.sound("sounds/knock", {
    formats: ["mp3"]
}), new buzz.sound("sounds/ping", {
    formats: ["mp3"]
});
var sounds = {
        playHit: function() {
            var e = new buzz.sound("sounds/hit", {
                formats: ["ogg"],
                volume: 8
            });
            e.play()
        },
        playMiss: function() {
            var e = new buzz.sound("sounds/knock", {
                formats: ["mp3"],
                volume: 48
            });
            e.play()
        },
        puckPing: function() {
            var e = new buzz.sound("sounds/ping", {
            formats: ["mp3"],
            volume: 10
            });
            e.play()
        }
    },
    socket, generateId = function() {
        var e = 0;
        return function() {
            return ++e
        }
    }(),
    config = {
        pay_table: [22, 5, 3, 2, 1.4, 1.2, 1.1, 1, .4, 1, 1.1, 1.2, 1.4, 2, 3,
            5, 22
        ],
        puck_diameter: 35,
        peg_diameter: 4,
        top_margin: 50,
        bottom_margin: 275,
        side_margin: 0,
        payTableFontSize: 15,
        payTableRowHeight: 20,
        app_id: 841,
        
        mp_api_uri: "https://api.moneypot.com",
        mp_browser_uri: "https://www.moneypot.com",
        redirect_uri: "https://cancerbola.github.io/plinkodinkowinko/",
        recaptcha_sitekey: "6LcTSxQTAAAAAIprLmflkjlgHbhlTGNS6OQlmN2z",
        chat_uri: "https://localhost:4000",
        hexColors: {
            fade: {
                green: "#a8ebc4",
                yellow: "#f9e8a0",
                red: "#f8c9c4"
            },
            light: {
                green: "#2ecc71",
                yellow: "#f1c40f",
                red: "#e74c3c",
                blue: "#14d4ff"
            },
            dark: {
                green: "#27ae60",
                yellow: "#f39c12",
                red: "#c0392b",
                blue: "#1290de"
            },
            neonBlue: "#2782f1",
            lightNeonBlue: "#00a8d6"
            
        },
        puckColors: {
            green: "#2ecc71",
            yellow: "#f1c40f",
            red: "#e74c3c"
        },
        n: 17,
        pay_tables: {
            green: [3, 1.5, 1.4, 1.3, 1.2, .2, 1.1, 1.1, 1.1, 1.1, 1.1, .2, 1.2,
                1.3, 1.4, 1.5, 3
            ],
            yellow: [23, 9, 3, 2, 1.5, 1.2, 1.1, 1, .4, 1, 1.1, 1.2, 1.5, 2, 3,
                9, 23
            ],
            red: [121, 47, 13, 5, 3, 1.4, 1, .5, .3, .5, 1, 1.4, 3, 5, 13, 47,
                121
            ]
        }
    };
config.levels = config.n - 1, config.table_height = config.top_margin + config.levels *
    config.puck_diameter + config.levels * config.peg_diameter - 120, config.table_width =
    2 * config.side_margin + config.n * config.puck_diameter + config.n *
    config.peg_diameter, config.mp_api_uri = "https://api.moneypot.com", config
    .mp_browser_uri = "https://www.moneypot.com", config.app_id = 841, config.redirect_uri =
    "https://cancerbola.github.io/plinko/", config.chat_uri =
    "https://a-chat-server.herokuapp.com", helpers.isValidPayout = function() {
        var e = /^(\d\.\d{0,2})$|^(\d\d\.\d{0,1})$|^(\d{1,3})$/;
        return function(t) {
            return e.test(t)
        }
    }();
var payoutQuery = function() {
        var e = URI(window.location.href).query(!0),
            t = {};
        return ["green", "yellow", "red"].forEach(function(o) {
            if (!e[o]) return void console.log(
                "[queryMap] missing color:", o);
            if (!_.isString(e[o])) return void console.log(
                "[queryMap] is not a string:", o);
            if (17 !== e[o].split(" ").length) return void console.log(
                "[queryMap] does not contain 17 items:", o);
            if (_.some(e[o].split(" "), _.negate(helpers.isValidPayout)))
                return void console.log(
                    "[queryMap] contains invalid payouts:", o);
            var n = e[o].split(" ").map(function(e) {
                return parseFloat(e, 10)
            });
            t[o] = n
        }), t
    }(),
    canvas, kanvas, Kanvas = function(e) {
        this.canvas = e;
        var t = this,
            o = function() {
                for (var e = config.n, o = config.puck_diameter, n = config.peg_diameter,
                        a = config.top_margin, r = config.side_margin, s = 0; e -
                    1 > s; s++)
                    for (var i = s + 1, l = (e - s) * o / 2 + (e - s) * n / 2,
                        c = a + .65 * o * s + .65 * n * s, d = 0; i > d; d++) t
                        .canvas.add(new fabric.Circle({
                            left: r + l + o * d + n * d - 4,
                            top: c,
                            radius: n,
                            selectable: !1,
                            fill: config.hexColors.neonBlue,
                            stroke: config.hexColors.lightNeonBlue,
                            shadow: "rgba(107, 238, 255, 1) 0px 0px 12px"
                        }))
            },
            n = function() {
                var e = config.n,
                    o = new fabric.Rect({
                        top: config.top_margin + e * config.puck_diameter *
                            .65 + e * config.peg_diameter * .65 - 22,
                        left: config.side_margin,
                        height: 2,
                        selectable: !1,
                        width: e * config.puck_diameter + e * config.peg_diameter
                    });
                t.canvas.add(o)
            },
            a = function() {
                for (var t = 0; 17 >= t; ++t) {
                    var o = config.n - 1,
                        n = new fabric.Rect({
                            top: config.top_margin + o * config.puck_diameter *
                                .65 + o * config.peg_diameter * .65,
                            left: (config.puck_diameter + config.peg_diameter) *
                                t,
                            height: 10,
                            selectable: !1,
                            width: 2
                        });
                    0 !== t && e.add(n)
                }
            },
            r = function(t) {
                var o = {
                    green: 1,
                    yellow: 2,
                    red: 3
                };
                console.log("[_drawPayout] color:", t), console.log(
                        "-- [KANVAS ...]", worldStore.state.pay_tables[t]),
                    worldStore.state.pay_tables[t].forEach(function(n, a) {
                        var r = config.n - 1,
                            s = new fabric.Text((n + String.fromCharCode(
                                215) + "  ").slice(0, 4), {
                                angle: 0,
                                top: config.payTableRowHeight * o[t] +
                                    config.top_margin + r * config.puck_diameter *
                                    .65 + r * config.peg_diameter * .65,
                                left: config.side_margin + (config.puck_diameter +
                                    config.peg_diameter) * a + 2,
                                fontSize: config.payTableFontSize,
                                stroke: parseFloat(n) >= 1 ? config.hexColors
                                    .dark[t] : config.hexColors.light[t],
                                fill: parseFloat(n) >= 1 ? config.hexColors
                                    .dark[t] : config.hexColors.light[t],
                                selectable: !1,
                                fontFamily: "Courier New",
                                fontWeight: parseFloat(n) >= 1 ? "bold" : "normal",
                                backgroundColor: parseFloat(n) >= 1 ?
                                    config.hexColors.fade[t] : ""
                            });
                        e.add(s)
                    })
            };
        this.renderAll = function() {
            t.canvas.dispose(), t.canvas.renderOnAddRemove = !1, o(), n(),
                a(), r("green"), r("yellow"), t.canvas.renderOnAddRemove = !
                0, r("red")
        }
    },
    generatePath = function() {
        for (var e = config.n - 1, t = [], o = ["L", "R"], n = 0; e > n; n++) {
            var a = o[Math.floor(2 * Math.random())];
            t.push(a)
        }
        return t
    },
    Puck = function(e) {
        switch (this.id = generateId(), this.bet = e.bet, this.isFair = e.isFair,
            this.row = -1, this.path = e.path, this.wager_satoshis = e.wager_satoshis,
            this.profit_satoshis = e.profit_satoshis, this.isTest = !!e.isTest,
            this.onComplete = e.onComplete || function() {}, this.onSlot = e.onSlot ||
            function() {}, this.onPeg = e.onPeg || function() {}, this.isRevealed = !
            1, this.color = e.color || getRandomColor(), this.color) {
            case "red":
                this.fill = "#e74c3c", this.stroke = "#c0392b";
                break;
            case "green":
                this.fill = "#2ecc71", this.stroke = "#27ae60";
                break;
            case "yellow":
                this.fill = "#f1c40f", this.stroke = "#f39c12";
                break;
            case "purple":
                this.fill = "#9b59b6", this.stroke = "#8e44ad";
                break;
            case "blue":
                this.fill = "#3498db", this.stroke = "#2980b9";
                break;
            case "dark":
                this.fill = "#34495e", this.stroke = "#2c3e50"
        }
        this._circle = new fabric.Circle({
            top: 1,
            left: 1,
            radius: config.puck_diameter / 2 - 3,
            hasControls: !1,
            hasRotatingPoint: !1,
            stroke: this.stroke,
            strokeWidth: 3,
            fill: this.fill
        }), this._text = new fabric.Text("B", {
            top: 5,
            left: 10.5,
            fontSize: 20,
            stroke: this.stroke,
            fontFamily: "Courier New"
        }), this._group = new fabric.Group([this._circle, this._text], {
            top: 11,
            left: config.top_margin + Math.floor(config.n / 2) * config
                .puck_diameter + Math.floor(config.n / 2) * config.peg_diameter -
                30,
            hasControls: !1,
            hasRotatingPoint: !1,
            selectable: !1,
            originX: "center",
            originY: "center"
        });
        var t = this;
        canvas.add(t._group), this.move = function(e, o) {
            switch (e) {
                case "L":
                    t._group.animate("left", "-=19.5", {
                        easing: fabric.util.ease.easeOutExpo
                    }), t._group.animate("angle", "-=90", {
                        easing: fabric.util.ease.easeOutQuad
                    });
                    break;
                case "R":
                    t._group.animate("left", "+=19.5", {
                        easing: fabric.util.ease.easeOutExpo
                    }), t._group.animate("angle", "+=90", {
                        easing: fabric.util.ease.easeOutQuad
                    })
            }
            var n = !1,
                a = function(e, t, o, a) {
                    return (e /= a) < 1 / 2.75 ? 7.5625 * o * e * e + t : 2 / 2.75 > e ? (n || (n = !0), o * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t) : 2.5 / 2.75 > e ? o * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : o * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
                };
            t._group.animate("top", "+=25.5", {
                easing: a,
                lol: setTimeout(sounds.puckPing(), 7000),
                onComplete: function() {
                    o()
                }
            })
        }, this.run = function() {
            var e = t.row++;
            if (-1 === e) t._group.animate("top", "+=24", {
                easing: fabric.util.ease.easeOutBounce,
                onComplete: t.run,
                lol: setTimeout(sounds.puckPing(), 250)
            });
            else if (e < t.path.length) t.move(t.path[e], t.run);
            else {
                var o = function(e) {
                        switch (e) {
                            case "green":
                                return 1 * config.payTableRowHeight + 20;
                            case "yellow":
                                return 2 * config.payTableRowHeight + 20;
                            case "red":
                                return 3 * config.payTableRowHeight + 20;
                            default:
                                alert("Unsupported puck color: " + e)
                        }
                    },
                    n = o(t.color);
                t._group.animate("top", "+=" + n, {
                    onComplete: function() {
                        t.isRevealed = !0, t.onSlot(t), t._group
                            .animate("angle", "+=1080", {
                                easing: fabric.util.ease.easeOutQuad,
                                duration: 2e3
                            }), t._group.animate("scaleX",
                                "+=0.5", {
                                    duration: 2e3,
                                    easing: fabric.util.ease.easeOutExpo
                                }), t._group.animate("scaleY",
                                "+=0.5", {
                                    duration: 2e3,
                                    easing: fabric.util.ease.easeOutExpo
                                })
                    }
                }), t._group.animate("opacity", 0, {
                    duration: 2e3,
                    onComplete: function() {
                        t.onComplete(t), canvas.remove(t._group)
                    }
                })
            }
        }
    },
    getRandomColor = function() {
        var e = ["green", "yellow", "red"];
        return e[Math.floor(Math.random() * e.length)]
    },
    MoneyPot = function() {
        var e = {};
        e.apiVersion = "v1";
        var t = function() {},
            o = function(o, n, a, r) {
                if (!worldStore.state.accessToken) throw new Error(
                    "Must have accessToken set to call MoneyPot API");
                var s = config.mp_api_uri + "/" + e.apiVersion + a +
                    "?access_token=" + worldStore.state.accessToken;
                $.ajax({
                    url: s,
                    dataType: "json",
                    method: o,
                    data: n ? JSON.stringify(n) : void 0,
                    headers: {
                        "Content-Type": "text/plain"
                    },
                    success: r.success || t,
                    error: r.error || t,
                    complete: r.complete || t
                })
            };
        return e.getBankroll = function(e) {
            var t = "/bankroll";
            o("GET", void 0, t, e)
        }, e.getTokenInfo = function(e) {
            var t = "/token";
            o("GET", void 0, t, e)
        }, e.generateBetHash = function(e) {
            var t = "/hashes";
            o("POST", void 0, t, e)
        }, e.getDepositAddress = function(e) {
            var t = "/deposit-address";
            o("GET", void 0, t, e)
        }, e.claimFaucet = function(e, t) {
            console.log("Hitting POST /claim-faucet");
            var n = "/claim-faucet",
                a = {
                    response: e
                };
            o("POST", a, n, t)
        }, e.placeSimpleDiceBet = function(e, t) {
            var n = "/bets/simple-dice";
            o("POST", e, n, t)
        }, e.placePlinkoBet = function(e, t) {
            var n = "/bets/plinko";
            o("POST", e, n, t)
        }, e
    }(),
    Dispatcher = new function() {
        this.callbacks = {};
        var e = this;
        this.registerCallback = function(t, o) {
            console.log("[Dispatcher] registering callback for:", t), e.callbacks[
                t] ? e.callbacks[t].push(o) : e.callbacks[t] = [o]
        }, this.sendAction = function(t, o) {
            if (console.log("[Dispatcher] received action:", t, o), !e.callbacks[
                t]) throw new Error("Unsupported actionName: " + t);
            e.callbacks[t].forEach(function(e) {
                e(o)
            })
        }
    },
    Store = function(e, t) {
        this.state = e.state, this.events = e.events || {}, this.emitter = new EventEmitter,
            t.call(this);
        var o = this;
        this.on = function(e, t) {
            o.emitter.on(e, t)
        }, this.off = function(e, t) {
            o.emitter.off(e, t)
        }
    };
helpers.toFloats = function(e) {
    return console.assert(_.isArray(e)), e.map(function(e) {
        return console.assert(_.isString(e)), parseFloat(e, 10)
    })
}, helpers.commafy = function(e) {
    var t = e.toString().split(".");
    return t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), t.join(".")
}, helpers.autolink = function() {
    var e = function() {
            var e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            };
            return function(t) {
                return String(t).replace(/[&<>"']/g, function(t) {
                    return e[t]
                })
            }
        }(),
        t = function(e, t) {
            if ("twitter" !== t.getType()) return !0;
            var o = t.getTwitterHandle();
            return '<a href="https://www.moneypot.com/users/' + o +
                '" target="_blank">@' + o + "</a>"
        };
    return function(o) {
        return Autolinker.link(e(o), {
            truncate: 50,
            replaceFn: t
        })
    }
}(), helpers.randomUint32 = function() {
    if (window.crypto && window.crypto.getRandomValues && Uint32Array) {
        var e = new Uint32Array(1);
        return window.crypto.getRandomValues(e), e[0]
    }
    return console.warn("Falling back to pseudo-random client seed"), Math.floor(
        Math.random() * Math.pow(2, 32))
}, helpers.roleToLabelElement = function(e) {
    switch (e) {
        case "mod":
            return el.span({
                className: "label label-info"
            }, "Mod");
        case "owner":
            return el.span({
                className: "label label-primary"
            }, "Owner");
        default:
            return ""
    }
}, helpers.colorPathToOutcome = function(e, t) {
    var o = e.length - 1;
    return t.forEach(function(e) {
        "L" === e && --o
    }), e[o]
};
var errorConstantToMessage = function(e) {
    var t = {
            NOT_INTEGER: "ClientSeed must be an integer",
            TOO_LOW: "ClientSeed must be >= 0",
            TOO_HIGH: "ClientSeed must be < 4,294,967,296"
        },
        o = {
            CANNOT_AFFORD_WAGER: "You cannot afford wager",
            INVALID_WAGER: "Invalid wager"
        };
    return t[e] || o[e]
};
helpers.payTableToEdge = function() {
    var e = function(e, t) {
        t = Math.min(t, e - t), console.assert(t >= 0);
        for (var o = 1, n = 0; t > n; ++n) o = o * (e - n) / (n + 1);
        return o
    };
    return function(t) {
        var o = Math.pow(2, t.length - 1),
            n = -1;
        return t.forEach(function(a, r) {
            var s = e(t.length - 1, r),
                i = s / o;
            n += i * a
        }), 100 * -n
    }
}(), helpers.calcMultiplier = function(e, t) {
    return helpers.round10((t + e) / e, -2)
}, helpers.decimalAdjust = function(e, t, o) {
    return "undefined" == typeof o || 0 === +o ? Math[e](t) : (t = +t, o = +
        o, isNaN(t) || "number" != typeof o || o % 1 !== 0 ? 0 / 0 : (t =
            t.toString().split("e"), t = Math[e](+(t[0] + "e" + (t[1] ?
                +t[1] - o : -o))), t = t.toString().split("e"), +(t[0] +
                "e" + (t[1] ? +t[1] + o : o))))
}, helpers.round10 = function(e, t) {
    return helpers.decimalAdjust("round", e, t)
}, helpers.floor10 = function(e, t) {
    return helpers.decimalAdjust("floor", e, t)
}, helpers.ceil10 = function(e, t) {
    return helpers.decimalAdjust("ceil", e, t)
}, helpers.getHashParams = function() {
    for (var e, t = {}, o = /\+/g, n = /([^&;=]+)=?([^&;]*)/g, a = function(
        e) {
        return decodeURIComponent(e.replace(o, " "))
    }, r = window.location.hash.substring(1); e = n.exec(r);) t[a(e[1])] =
        a(e[2]);
    return t
};
var access_token, expires_in, expires_at;
helpers.getHashParams().access_token ? (console.log(
            "[token manager] access_token in hash params"), access_token =
        helpers.getHashParams().access_token, expires_in = helpers.getHashParams()
        .expires_in, expires_at = new Date(Date.now() + 1e3 * expires_in),
        localStorage.setItem("access_token", access_token), localStorage.setItem(
            "expires_at", expires_at)) : localStorage.access_token ? (console.log(
            "[token manager] access_token in localStorage"), expires_at =
        localStorage.expires_at, expires_at && new Date(expires_at) > new Date(
            Date.now() + 6048e5) ? access_token = localStorage.access_token : (
            localStorage.removeItem("expires_at"), localStorage.removeItem(
                "access_token"))) : console.log(
        "[token manager] no access token"), window.history && window.history.replaceState ?
    window.history.replaceState({}, document.title, window.location.pathname +
        window.location.search) : window.location.hash = "#";
var initClientSeedNum = helpers.randomUint32(),
    initWagerNum;
initWagerNum = /^\d+$/.test(localStorage.getItem("wager_str") || "") ? parseInt(
    localStorage.getItem("wager_str"), 10) : 0;
var worldStore = new Store({
        events: {
            SESSION_STATS_UPDATE: "SESSION_STATS_UPDATE",
            HOTKEYS_CHANGED: "HOTKEYS_CHANGED",
            PAYOUT_EDITOR_TOGGLED: "PAYOUT_EDITOR_TOGGLED",
            RENDERED_PUCKS_CHANGED: "RENDERED_PUCKS_CHANGED",
            BANKROLL_CHANGED: "BANKROLL_CHANGED"
        },
        state: {
            pay_tables: {
                green: payoutQuery.green || [3, 1.8, 1.6, 1.45, 1.2, .2, 1.1,
                    1.1, 1.11, 1.1, 1.1, .2, 1.2, 1.45, 1.6, 1.8, 3
                ],
                yellow: payoutQuery.yellow || [23, 9, 3, 2, 1.5, 1.2, 1.1,
                    1, .43, 1, 1.1, 1.2, 1.5, 2, 3, 9, 23
                ],
                red: payoutQuery.red || [121, 47, 13, 5, 3.33, 1.3, 1, .5, .3,
                    .5, 1, 1.3, 3.33, 5, 13, 47, 121
                ]
            },
            showPayoutEditor: !1,
            bankroll: 15e7,
            wager: {
                str: initWagerNum.toString(),
                num: initWagerNum,
                error: void 0
            },
            sessionStats: {
                revealedBetCount: 0,
                totalBetCount: 0,
                profit: 0
            },
            isLoading: !0,
            user: void 0,
            accessToken: access_token,
            isRefreshingUser: !1,
            hotkeysEnabled: !1,
            currTab: "MY_BETS",
            activePucks: {},
            renderedPucks: {},
            canvas: void 0,
            nextHash: void 0,
            pucks: new CBuffer(50),
            clientSeed: {
                str: initClientSeedNum.toString(),
                num: initClientSeedNum,
                error: void 0
            }
        }
    }, function() {
        var e = this;
        e.getRevealedBalance = function() {
            if (!e.state.user) return void alert(
                "Called worldStore.getRevealedBalance when no user is logged in"
            );
            var t = 0,
                o = 0;
            _.values(e.state.activePucks).forEach(function(e) {
                o += e.bet.profit, t += e.wager_satoshis
            });
            var n = helpers.round10(e.state.user.balance - (t + o), -2);
            return console.log(n), n
        }, Dispatcher.registerCallback("UPDATE_PAY_TABLES", function(t) {
            e.state.pay_tables.green = t.green, e.state.pay_tables.yellow =
                t.yellow, e.state.pay_tables.red = t.red, kanvas.renderAll()
        }), Dispatcher.registerCallback("UPDATE_BANKROLL", function(t) {
            e.state.bankroll = t, e.emitter.emit(e.events.BANKROLL_CHANGED,
                e.state)
        }), Dispatcher.registerCallback("TOGGLE_PAYOUT_EDITOR",
            function() {
                e.state.showPayoutEditor = !e.state.showPayoutEditor, e
                    .emitter.emit(e.events.PAYOUT_EDITOR_TOGGLED, e.state)
            }), Dispatcher.registerCallback("GRECAPTCHA_LOADED",
            function(t) {
                e.state.grecaptcha = t, e.emitter.emit(
                    "grecaptcha_loaded")
            }), Dispatcher.registerCallback("TOGGLE_HOTKEYS", function() {
            e.state.hotkeysEnabled = !e.state.hotkeysEnabled, e.emitter
                .emit(e.events.HOTKEYS_CHANGED, e.state)
        }), Dispatcher.registerCallback("DISABLE_HOTKEYS", function() {
            e.state.hotkeysEnabled = !1, e.emitter.emit("change", e
                .state)
        }), Dispatcher.registerCallback("UPDATE_CLIENT_SEED", function(
            t) {
            e.state.clientSeed = _.merge({}, e.state.clientSeed, t);
            var o = e.state.clientSeed.str,
                n = parseInt(e.state.clientSeed.str, 10);
            isNaN(n) || /[^\d]/.test(o.toString()) ? e.state.clientSeed
                .error = "NOT_INTEGER" : 0 > n ? e.state.clientSeed
                .error = "TOO_LOW" : n > Math.pow(2, 32) - 1 ? e.state
                .clientSeed.error = "TOO_HIGH" : (e.state.clientSeed
                    .error = void 0, e.state.clientSeed.str = n.toString(),
                    e.state.clientSeed.num = n), e.emitter.emit(
                    "change", e.state)
        }), Dispatcher.registerCallback("USER_LOGOUT", function() {
            e.state.user = void 0, e.state.accessToken = void 0,
                localStorage.clear(), e.state.pucks.empty(), e.emitter
                .emit("change", e.state)
        }), Dispatcher.registerCallback("REFRESH_USER", function() {
            e.state.isRefreshingUser = !0, e.emitter.emit("change",
                e.state), MoneyPot.getTokenInfo({
                success: function(t) {
                    console.log(
                        "Successfully loaded user from tokens endpoint",
                        t);
                    var o = t.auth.user;
                    e.state.user = o, e.emitter.emit(
                        "user_change", o)
                },
                error: function(e) {
                    console.log("Error: ", e)
                },
                complete: function() {
                    e.state.isRefreshingUser = !1, e.emitter
                        .emit("change", e.state)
                }
            })
        }), Dispatcher.registerCallback("CHANGE_TAB", function(t) {
            e.state.currTab = t, e.emitter.emit("change", e.state)
        }), Dispatcher.registerCallback("SET_NEXT_HASH", function(t) {
            e.state.nextHash = t, e.emitter.emit(e.events.NEXT_HASH_CHANGED,
                t)
        }), Dispatcher.registerCallback("STOP_LOADING", function() {
            e.state.isLoading = !1, e.emitter.emit("change", e.state)
        }), Dispatcher.registerCallback("UPDATE_USER", function(t) {
            e._updateUser(t), e.emitter.emit("change", e.state)
        }), Dispatcher.registerCallback("UPDATE_SESSION_STATS",
            function(t) {
                e._updateSessionStats(t), e.emitter.emit(e.events.SESSION_STATS_UPDATE,
                    e.state.sessionStats)
            }), Dispatcher.registerCallback("UPDATE_WAGER", function(t) {
            e.state.wager = _.merge({}, e.state.wager, t);
            var o = parseInt(e.state.wager.str, 10);
            isNaN(o) || /[^\d]/.test(o.toString()) ? e.state.wager.error =
                "INVALID_WAGER" : 100 * o > worldStore.getRevealedBalance() ?
                (e.state.wager.error = "CANNOT_AFFORD_WAGER", e.state
                    .wager.num = o) : (e.state.wager.error = null,
                    e.state.wager.str = o.toString(), e.state.wager
                    .num = o, localStorage.setItem("wager_str", o.toString())
                ), e.emitter.emit("change", e.state)
        }), e._updateUser = function(t) {
            e.state.user = _.merge({}, e.state.user || {}, t)
        }, e._updateSessionStats = function(t) {
            e.state.sessionStats = _.merge({}, e.state.sessionStats, t)
        }, Dispatcher.registerCallback("SPAWN_PUCK", function(t) {
            t.isTest || e._updateSessionStats({
                totalBetCount: worldStore.state.sessionStats
                    .totalBetCount + 1
            });
            var o = t.path || generatePath(),
                n = new Puck({
                    path: o,
                    color: t.color,
                    wager_satoshis: t.wager_satoshis,
                    profit_satoshis: t.profit_satoshis,
                    isTest: t.isTest,
                    bet: t.bet,
                    isFair: t.isFair,
                    onPeg: function(e) {},
                    onSlot: function(t) {
                        helpers.colorPathToOutcome(
                                worldStore.state.pay_tables[
                                    t.color], t.path) < 1 ?
                            sounds.playMiss() : sounds.playHit(),
                            delete worldStore.state.activePucks[
                                t.id], t.isTest || (
                                Dispatcher.sendAction(
                                    "UPDATE_WAGER", {
                                        str: worldStore.state
                                            .wager.str
                                    }), e._updateSessionStats({
                                    revealedBetCount: worldStore
                                        .state.sessionStats
                                        .revealedBetCount +
                                        1,
                                    profit: worldStore.state
                                        .sessionStats.profit +
                                        t.profit_satoshis
                                }), e.emitter.emit(e.events
                                    .SESSION_STATS_UPDATE,
                                    e.state.sessionStats))
                    },
                    onComplete: function(t) {
                        delete worldStore.state.renderedPucks[
                                t.id], e.emitter.emit(e.events
                                .RENDERED_PUCKS_CHANGED), e
                            .emitter.emit("change", e.state)
                    }
                });
            n.isTest || worldStore.state.pucks.push(n), worldStore.state
                .activePucks[n.id] = n, worldStore.state.renderedPucks[
                    n.id] = n, e.emitter.emit(e.events.RENDERED_PUCKS_CHANGED),
                n.run(), e.emitter.emit("change", e.state)
        }), Dispatcher.registerCallback("SPAWN_PUCKS", function(e) {
            console.log("Spawning", e, "pucks...");
            var t = function(e, o) {
                Dispatcher.sendAction("SPAWN_PUCK", {
                    color: getRandomColor()
                }), e > 0 && setTimeout(function() {
                    t(e - 1)
                }, o || 200)
            };
            t(10)
        })
    }),
    chatStore = new Store({
        state: {
            messages: new CBuffer(250),
            userList: {},
            showUserList: !1,
            loadingInitialMessages: !0,
            waitingForServer: !1
        }
    }, function() {
        var e = this;
        e.events = {
            INITIALIZED: "INITIALIZED",
            NEW_CHAT_MESSAGE: "NEW_CHAT_MESSAGE",
            NEW_SYSTEM_MESSAGE: "NEW_SYSTEM_MESSAGE",
            USER_JOINED: "USER_JOINED",
            USER_LEFT: "USER_LEFT"
        }, Dispatcher.registerCallback("INIT_CHAT", function(t) {
            console.log("[ChatStore] received INIT_CHAT");
            var o = t.room.history.map(function(e) {
                return e.id = generateId(), e
            });
            e.state.messages.push.apply(e.state.messages, o), e.state
                .loadingInitialMessages = !1, e.state.userList = t.room
                .users, e.emitter.emit("change", e.state), e.emitter
                .emit(e.events.INITIALIZED, e.state)
        }), Dispatcher.registerCallback("NEW_CHAT_MESSAGE", function(t) {
            console.log("[ChatStore] received NEW_CHAT_MESSAGE"), t
                .id = generateId(), e.state.messages.push(t), e.emitter
                .emit("change", e.state), e.emitter.emit(e.events.NEW_CHAT_MESSAGE,
                    e.state)
        }), Dispatcher.registerCallback("TOGGLE_CHAT_USERLIST",
            function() {
                console.log("[ChatStore] received TOGGLE_CHAT_USERLIST"),
                    e.state.showUserList = !e.state.showUserList, e.emitter
                    .emit("change", e.state)
            }), Dispatcher.registerCallback("USER_JOINED", function(t) {
            console.log("[ChatStore] received USER_JOINED:", t), e.state
                .userList[t.uname] = t, e.emitter.emit("change", e.state),
                e.emitter.emit(e.events.USER_JOINED, e.state)
        }), Dispatcher.registerCallback("USER_LEFT", function(t) {
            console.log("[ChatStore] received USER_LEFT:", t),
                delete e.state.userList[t.uname], e.emitter.emit(
                    "change", e.state), e.emitter.emit(e.events.USER_LEFT,
                    e.state)
        }), Dispatcher.registerCallback("NEW_SYSTEM_MESSAGE", function(
            t) {
            console.log("[ChatStore] received NEW_SYSTEM_MESSAGE"),
                e.state.messages.push({
                    id: generateId(),
                    text: t,
                    user: {
                        uname: "[SYSTEM]"
                    }
                }), e.emitter.emit("change", e.state), e.emitter.emit(
                    e.events.NEW_SYSTEM_MESSAGE, e.state)
        }), Dispatcher.registerCallback("SEND_MESSAGE", function(t) {
            console.log("[ChatStore] received SEND_MESSAGE"), e.emitter
                .emit("change", e.state), socket.emit("new_message",
                    t)
        })
    }),
    fps = 60;
paint();
var el = React.DOM,
    Board = React.createClass({
        displayName: "Board",
        shouldComponentUpdate: function() {
            return !1
        },
        componentDidMount: function() {
            console.log("Mounting board..."), canvas = new fabric.Canvas(
                "board"), canvas.selection = !1, canvas.setDimensions({
                width: config.table_width,
                height: config.table_height
            }), kanvas = new Kanvas(canvas), kanvas.renderAll()
        },
        render: function() {
            return el.canvas({
                id: "board",
                style: {}
            }, null)
        }
    }),
    BetBoxButton = React.createClass({
        displayName: "BetBoxButton",
        _onStoreChange: function() {
            this.forceUpdate()
        },
        _onBalanceChange: function() {
            Dispatcher.sendAction("UPDATE_WAGER", {})
        },
        componentDidMount: function() {
            worldStore.on("change", this._onStoreChange), worldStore.on(
                "user_change", this._onBalanceChange), worldStore.on(
                worldStore.events.HOTKEYS_CHANGED, this._onStoreChange
            )
        },
        componentWillUnmount: function() {
            worldStore.off("change", this._onStoreChange), worldStore.off(
                "user_change", this._onBalanceChange), worldStore.off(
                worldStore.events.HOTKEYS_CHANGED, this._onStoreChange
            )
        },
        getInitialState: function() {
            return {
                waitingForServer: !1,
                latestColorClick: void 0
            }
        },
        _makeBetHandler: function(e) {
            var t = this;
            return function() {
                var o = worldStore.state.pay_tables[e];
                if (!o) return void alert(
                    "Unsupported pay table for color: " + e
                );
                var n = worldStore.state.wager.num,
                    a = worldStore.state.nextHash;
                if (0 === n) return void Dispatcher.sendAction(
                    "SPAWN_PUCK", {
                        color: e,
                        path: generatePath(),
                        wager_satoshis: 0,
                        profit_satoshis: 0,
                        isTest: !0
                    });
                t.setState({
                    waitingForServer: !0,
                    latestColorClick: e
                }), MoneyPot.placePlinkoBet({
                    hash: a,
                    client_seed: worldStore.state.clientSeed
                        .num,
                    wager: 100 * n,
                    pay_table: o
                }, {
                    success: function(t) {
                        console.log("Placed bet: ", t),
                            Dispatcher.sendAction(
                                "SET_NEXT_HASH", t.next_hash
                            ), Dispatcher.sendAction(
                                "UPDATE_USER", {
                                    balance: worldStore
                                        .state.user.balance +
                                        t.profit
                                });
                        var o = !0;
                        CryptoJS.SHA256(t.secret + "|" +
                                t.salt).toString() !==
                            a && (o = !1), helpers.calcMultiplier(
                                100 * n, t.profit) !==
                            helpers.colorPathToOutcome(
                                worldStore.state.pay_tables[
                                    e], t.outcome.split(
                                    "")) && (o = !1),
                            Dispatcher.sendAction(
                                "SPAWN_PUCK", {
                                    color: e,
                                    path: t.outcome.split(
                                        ""),
                                    wager_satoshis: 100 *
                                        n,
                                    profit_satoshis: t.profit,
                                    bet: t,
                                    isFair: o
                                })
                    },
                    error: function(e) {
                        console.error(
                                "Error placing bet:"),
                            alert(e.responseJSON ? e.responseJSON
                                .error :
                                "Internal error")
                    },
                    complete: function() {
                        t.setState({
                            waitingForServer: !
                                1
                        }), Dispatcher.sendAction(
                            "UPDATE_WAGER", {
                                str: worldStore.state
                                    .wager.str
                            })
                    }
                });
                var r = helpers.randomUint32();
                Dispatcher.sendAction("UPDATE_CLIENT_SEED", {
                    num: r,
                    str: r.toString()
                })
            }
        },
        render: function() {
            var e, t = worldStore.state.wager.error || worldStore.state
                .clientSeed.error;
            if (worldStore.state.isLoading) e = el.button({
                type: "button",
                disabled: "true",
                className: "btn btn-lg btn-block btn-default"
            }, "Loading...");
            else if (t) {
                var o = errorConstantToMessage(t);
                e = el.button({
                    type: "button",
                    disabled: !0,
                    className: "btn btn-lg btn-block btn-danger"
                }, o)
            } else e = el.div({}, el.div({
                className: "btn-group btn-group-justified"
            }, el.div({
                className: "btn-group"
            }, el.button({
                    type: "button",
                    className: "btn btn-default bet-btn",
                    id: "green-btn",
                    onClick: this._makeBetHandler(
                        "green"),
                    disabled: this.state.waitingForServer
                }, this.state.waitingForServer &&
                "green" === this.state.latestColorClick ?
                el.span({
                    className: "glyphicon glyphicon-refresh rotate"
                }) : "Green ", worldStore.state.hotkeysEnabled ?
                el.kbd(null, "J") : "")), el.div({
                className: "btn-group"
            }, el.button({
                    type: "button",
                    className: "btn btn-default bet-btn",
                    id: "yellow-btn",
                    onClick: this._makeBetHandler(
                        "yellow"),
                    disabled: this.state.waitingForServer
                }, this.state.waitingForServer &&
                "yellow" === this.state.latestColorClick ?
                el.span({
                    className: "glyphicon glyphicon-refresh rotate"
                }) : "Yellow ", worldStore.state.hotkeysEnabled ?
                el.kbd(null, "K") : "")), el.div({
                className: "btn-group"
            }, el.button({
                    type: "button",
                    className: "btn btn-default bet-btn",
                    id: "red-btn",
                    onClick: this._makeBetHandler("red"),
                    disabled: this.state.waitingForServer
                }, this.state.waitingForServer && "red" ===
                this.state.latestColorClick ? el.span({
                    className: "glyphicon glyphicon-refresh rotate"
                }) : "Red ", worldStore.state.hotkeysEnabled ?
                el.kbd(null, "L") : ""))));
            return e
        }
    }),
    BetBox = React.createClass({
        displayName: "BetBox",
        _onStoreChange: function() {
            this.forceUpdate()
        },
        componentDidMount: function() {
            worldStore.on("change", this._onStoreChange), worldStore.on(
                worldStore.events.HOTKEYS_CHANGED, this._onStoreChange
            )
        },
        componentWillUnmount: function() {
            worldStore.off("change", this._onStoreChange), worldStore.off(
                worldStore.events.HOTKEYS_CHANGED, this._onStoreChange
            )
        },
        _onWagerChange: function(e) {
            var t = e.target.value;
            Dispatcher.sendAction("UPDATE_WAGER", {
                str: t
            })
        },
        _onHalveWager: function() {
            var e = Math.max(1, Math.round(worldStore.state.wager.num /
                2));
            Dispatcher.sendAction("UPDATE_WAGER", {
                str: e.toString()
            })
        },
        _onDoubleWager: function() {
            var e = Math.max(1, 2 * worldStore.state.wager.num);
            Dispatcher.sendAction("UPDATE_WAGER", {
                str: e.toString()
            })
        },
        _onMaxWager: function() {
            var e;
            e = worldStore.state.user ? Math.floor(worldStore.getRevealedBalance() /
                100) : 42e3, Dispatcher.sendAction("UPDATE_WAGER", {
                str: e.toString()
            })
        },
        render: function() {
            return el.div({
                className: "panel panel-default no-select"
            }, el.div({
                className: "panel-body"
            }, el.form({
                    className: "form-horizontal"
                }, el.div({
                    className: "form-group"
                }, el.div({
                    className: "col-md-3 text-center"
                }, el.label({
                    htmlFor: "wager",
                    className: "lead control-label",
                    style: {
                        color: worldStore.state
                            .wager.error ?
                            "red" : "black"
                    }
                }, el.strong(null, "Wager: "))), el.div({
                    className: "col-md-9"
                }, el.div({
                    className: "input-group"
                }, el.input({
                    className: "input-md form-control",
                    type: "text",
                    placeholder: "bits",
                    value: worldStore.state
                        .user ? worldStore.state
                        .wager.str : 0,
                    disabled: !worldStore.state
                        .user,
                    onChange: this._onWagerChange
                }), el.span({
                    className: "input-group-btn"
                }, el.button({
                        className: "btn btn-default btn-md",
                        type: "button",
                        onClick: this._onHalveWager,
                        style: {
                            borderRadius: "0"
                        }
                    }, "1/2x ", worldStore.state
                    .hotkeysEnabled ? el.kbd(
                        null, "X") : "")), el.span({
                    className: "input-group-btn"
                }, el.button({
                        className: "btn btn-default btn-md",
                        type: "button",
                        onClick: this._onDoubleWager,
                        style: {
                            borderRadius: "0"
                        }
                    }, "2x ", worldStore.state
                    .hotkeysEnabled ? el.kbd(
                        null, "C") : "")), el.span({
                    className: "input-group-btn"
                }, el.button({
                    className: "btn btn-default btn-md",
                    type: "button",
                    onClick: this._onMaxWager
                }, "Max"))))), React.createElement(
                    BetBoxButton, null), worldStore.state.user ?
                el.hr() : null, React.createElement(
                    SessionStats, null))));

        }
    }),
    UserBox = React.createClass({
        displayName: "UserBox",
        _onStoreChange: function() {
            this.forceUpdate()
        },
        componentDidMount: function() {
            worldStore.on("change", this._onStoreChange)
        },
        componentWillUnmount: function() {
            worldStore.off("change", this._onStoreChange)
        },
        _onLogout: function() {
            Dispatcher.sendAction("USER_LOGOUT")
        },
        _onRefreshUser: function() {
            Dispatcher.sendAction("REFRESH_USER")
        },
        _openWithdrawPopup: function() {
            var e = config.mp_browser_uri + "/dialog/withdraw?app_id=" +
                config.app_id,
                t = "manage-auth",
                o = ["width=420", "height=350", "left=100", "top=100"].join(
                    ","),
                n = window.open(e, t, o);
            return n.focus(), !1
        },
        _openDepositPopup: function() {
            var e = config.mp_browser_uri + "/dialog/deposit?app_id=" +
                config.app_id,
                t = "manage-auth",
                o = ["width=420", "height=350", "left=100", "top=100"].join(
                    ","),
                n = window.open(e, t, o);
            return n.focus(), !1
        },
        render: function() {
            var e;
            return e = worldStore.state.isLoading ? el.p({
                className: "navbar-text"
            }, "Loading...") : worldStore.state.user ? el.div(null,
                el.div({
                    className: "btn-group navbar-left btn-group-xs"
                }, el.button({
                    type: "button",
                    className: "btn navbar-btn btn-xs " + (
                        "CANNOT_AFFORD_WAGER" ===
                        worldStore.state.wager.error ?
                        "btn-success" : "btn-default"),
                    onClick: this._openDepositPopup
                }, "Deposit"), el.button({
                    type: "button",
                    className: "btn btn-default navbar-btn btn-xs",
                    onClick: this._openWithdrawPopup
                }, "Withdraw")), el.span({
                    className: "navbar-text",
                    style: {
                        marginRight: "5px"
                    }
                }, helpers.round10(worldStore.getRevealedBalance() /
                    100, -2) + " bits"), el.button({
                    className: "btn btn-link navbar-btn navbar-left " +
                        (worldStore.state.isRefreshingUser ?
                            " rotate" : ""),
                    title: "Refresh Balance",
                    disabled: worldStore.state.isRefreshingUser,
                    onClick: this._onRefreshUser,
                    style: {
                        paddingLeft: 0,
                        paddingRight: 0,
                        marginRight: "10px"
                    }
                }, el.span({
                    className: "glyphicon glyphicon-refresh"
                })), el.span({
                    className: "navbar-text"
                }, "Logged in as ", el.code(null, worldStore.state
                    .user.uname)), el.button({
                    type: "button",
                    onClick: this._onLogout,
                    className: "navbar-btn btn btn-default"
                }, "Logout")) : el.p({
                className: "navbar-text"
            }, el.a({
                href: config.mp_browser_uri +
                    "/oauth/authorize?app_id=" + config.app_id +
                    "&redirect_uri=" + config.redirect_uri,
                className: "btn btn-default"
            }, "Login with Moneypot")), el.div({
                className: "navbar-right"
            }, e)
        }
    }),
    Navbar = React.createClass({
        displayName: "Navbar",
        render: function() {
            return el.div({
                className: "navbar"
            }, el.div({
                className: "container-fluid"
            }, el.div({
                className: "navbar-header"
            }, el.a({
                className: "navbar-brand",
                href: "/plinko"
            }, el.span({
                className: "label label-default"
            }, "Beta"), " PlinkoDinko")), el.ul({
                className: "nav navbar-nav"
            }, el.li(null, el.a({
                href: config.mp_browser_uri +
                    "/apps/" + config.app_id,
                target: "_blank"
            }, "View on Moneypot ", el.span({
                className: "glyphicon glyphicon-new-window"
            })))), React.createElement(UserBox, null)))
        }
    }),
    ChatUserList = React.createClass({
        displayName: "ChatUserList",
        render: function() {
            return el.div({
                className: "panel panel-default"
            }, el.div({
                className: "panel-heading"
            }, "UserList"), el.div({
                className: "panel-body"
            }, el.ul({}, _.values(chatStore.state.userList)
                .map(function(e) {
                    return el.li({
                        key: e.uname
                    }, helpers.roleToLabelElement(
                        e.role), " ", el.a({
                        href: config.mp_browser_uri +
                            "/users/" + e.uname
                            .toLowerCase(),
                        target: "__blank"
                    }, e.uname))
                }))))
        }
    }),
    ChatBoxInput = React.createClass({
        displayName: "ChatBoxInput",
        _onStoreChange: function() {
            this.forceUpdate()
        },
        componentDidMount: function() {
            chatStore.on("change", this._onStoreChange), worldStore.on(
                "change", this._onStoreChange)
        },
        getInitialState: function() {
            return {
                text: "",
                error: void 0
            }
        },
        _onChange: function(e) {
            var t;
            e.target.value.length > 350 && (t = "TEXT_TOO_LONG"), this.setState({
                text: e.target.value,
                error: t
            })
        },
        _onSend: function() {
            Dispatcher.sendAction("SEND_MESSAGE", this.state.text),
                this.setState({
                    text: "",
                    error: void 0
                })
        },
        _onFocus: function() {
            worldStore.state.hotkeysEnabled && Dispatcher.sendAction(
                "DISABLE_HOTKEYS")
        },
        _onKeyPress: function(e) {
            var t = 13;
            e.which === t && this.state.text.trim().length > 0 && !this
                .state.error && this._onSend()
        },
        render: function() {
            return el.div(null, el.div({
                className: "row"
            }, el.div({
                    className: "col-md-9"
                }, chatStore.state.loadingInitialMessages ?
                el.div({
                    style: {
                        marginTop: "7px"
                    },
                    className: "text-muted"
                }, el.span({
                    className: "glyphicon glyphicon-refresh rotate"
                }), " Loading...") : el.input({
                    id: "chat-input",
                    className: "form-control",
                    type: "text",
                    value: this.state.text,
                    placeholder: worldStore.state.user ?
                        "Click here and begin typing..." : "Login to chat",
                    onChange: this._onChange,
                    onKeyPress: this._onKeyPress,
                    onFocus: this._onFocus,
                    ref: "input",
                    disabled: !worldStore.state.user ||
                        chatStore.state.loadingInitialMessages
                })), el.div({
                className: "col-md-3"
            }, el.button({
                type: "button",
                className: "btn btn-default btn-block",
                disabled: !worldStore.state.user ||
                    chatStore.state.waitingForServer ||
                    0 === this.state.text.trim().length ||
                    this.state.error,
                onClick: this._onSend
            }, "Send"))), el.span({
                style: {
                    color: this.state.text.length > 350 ?
                        "red" : "#777"
                }
            }, this.state.text.length, "/350 chars"))
        }
    }),
    ChatBox = React.createClass({
        displayName: "ChatBox",
        _onStoreChange: function() {
            this.forceUpdate()
        },
        componentDidMount: function() {
            chatStore.on("change", this._onStoreChange), chatStore.on(
                    chatStore.events.INITIALIZED, this._scrollChat),
                chatStore.on(chatStore.events.NEW_CHAT_MESSAGE, this._onNewMessage),
                chatStore.on(chatStore.events.NEW_SYSTEM_MESSAGE, this._onNewMessage)
        },
        _onNewMessage: function() {
            var e = this.refs.chatListRef.getDOMNode(),
                t = function() {
                    var t = e.scrollHeight - ($(e).scrollTop() + $(e).innerHeight());
                    return console.log("DistanceFromBottom:", t), 100 >=
                        t
                };
            t() && this._scrollChat()
        },
        _scrollChat: function() {
            console.log("_scrollChat");
            var e = this.refs.chatListRef.getDOMNode();
            console.log("_scrollChat node.scrollHeight: ", e.scrollHeight),
                $(e).scrollTop(e.scrollHeight)
        },
        _onUserListToggle: function() {
            Dispatcher.sendAction("TOGGLE_CHAT_USERLIST")
        },
        render: function() {
            return el.div({
                id: "chat-box",
                className: ""
            }, el.div({
                className: "panel panel-default"
            }, el.div({
                className: "panel-body"
            }, el.ul({
                className: "chat-list list-unstyled",
                ref: "chatListRef"
            }, chatStore.state.messages.toArray().map(
                function(e) {
                    return el.li({
                            key: e.id
                        }, helpers.roleToLabelElement(
                            e.user.role), " ",
                        el.code(null, e.user.uname +
                            ":"), el.span({
                            dangerouslySetInnerHTML: {
                                __html: " " +
                                    helpers
                                    .autolink(
                                        e.text
                                    )
                            }
                        }))
                }))), el.div({
                className: "panel-footer"
            }, React.createElement(ChatBoxInput, null))), el.p({
                className: "text-right text-muted",
                style: {
                    marginTop: "-15px"
                }
            }, "Users online: " + Object.keys(chatStore.state
                .userList).length + " ", el.button({
                    className: "btn btn-default btn-xs",
                    onClick: this._onUserListToggle
                }, chatStore.state.showUserList ? "Hide" :
                "Show")), chatStore.state.showUserList ? React.createElement(
                ChatUserList, null) : "")
        }
    }),
    TryMe = React.createClass({
        displayName: "TryMe",
        _onStoreChange: function() {
            this.forceUpdate()
        },
        componentDidMount: function() {
            worldStore.on("change", this._onStoreChange)
        },
        componentWillUnmount: function() {
            worldStore.off("change", this._onStoreChange)
        },
        render: function() {
            return el.div({
                    className: "no-select"
                }, worldStore.state.user || worldStore.state.isLoading ?
                "" : el.div({
                    className: "text-center"
                }, el.img({
                    src: "try-me.PNG",
                    style: {
                        maxWidth: "150px",
                        width: "100%"
                    }
                })))
        }
    }),
    FaucetTabContent = React.createClass({
        displayName: "FaucetTabContent",
        getInitialState: function() {
            return {
                faucetState: "SHOW_RECAPTCHA",
                claimAmount: void 0
            }
        },
        _renderRecaptcha: function() {
            worldStore.state.grecaptcha.render("recaptcha-target", {
                sitekey: config.recaptcha_sitekey,
                callback: this._onRecaptchaSubmit
            })
        },
        _onRecaptchaSubmit: function(e) {
            var t = this;
            console.log("recaptcha submitted: ", e), t.setState({
                faucetState: "WAITING_FOR_SERVER"
            }), MoneyPot.claimFaucet(e, {
                success: function(e) {
                    Dispatcher.sendAction("UPDATE_USER", {
                        balance: worldStore.state.user
                            .balance + e.amount
                    }), Dispatcher.sendAction(
                        "UPDATE_WAGER", {}), t.setState({
                        faucetState: "SUCCESSFULLY_CLAIMED",
                        claimAmount: e.amount
                    })
                },
                error: function(e, o, n) {
                    e.responseJSON &&
                        "FAUCET_ALREADY_CLAIMED" === e.responseJSON
                        .error && t.setState({
                            faucetState: "ALREADY_CLAIMED"
                        })
                }
            })
        },
        componentDidMount: function() {
            worldStore.state.grecaptcha && this._renderRecaptcha(),
                worldStore.on("grecaptcha_loaded", this._renderRecaptcha)
        },
        componentWillUnmount: function() {
            worldStore.off("grecaptcha_loaded", this._renderRecaptcha)
        },
        render: function() {
            if (!worldStore.state.user) return el.p({
                className: "lead"
            }, "You must login to claim faucet");
            var e;
            switch (this.state.faucetState) {
                case "SHOW_RECAPTCHA":
                    e = el.div({
                            id: "recaptcha-target"
                        }, worldStore.state.grecaptcha ? "" :
                        "Loading...");
                    break;
                case "SUCCESSFULLY_CLAIMED":
                    e = el.div(null, "Successfully claimed " + this.state
                        .claimAmount / 100 +
                        " bits. You can claim again in 5 minutes.");
                    break;
                case "ALREADY_CLAIMED":
                    e = el.div(null, "ALREADY_CLAIMED");
                    break;
                case "WAITING_FOR_SERVER":
                    e = el.div(null, "WAITING_FOR_SERVER");
                    break;
                default:
                    return void alert("Unhandled faucet state")
            }
            return el.div(null, e)
        }
    }),
    ProvablyFairTabContent = React.createClass({
        displayName: "ProvablyFairTabContent",
        _onStoreChange: function() {
            this.forceUpdate()
        },
        componentDidMount: function() {
            worldStore.on(worldStore.events.NEXT_HASH_CHANGED, this._onStoreChange)
        },
        componentWillUnmount: function() {
            worldStore.off(worldStore.events.NEXT_HASH_CHANGED, this._onStoreChange)
        },
        _onClientSeedChange: function(e) {
            Dispatcher.sendAction("UPDATE_CLIENT_SEED", {
                str: e.target.value
            })
        },
        _onRefreshClientSeed: function() {
            var e = helpers.randomUint32();
            Dispatcher.sendAction("UPDATE_CLIENT_SEED", {
                num: e,
                str: e.toString()
            })
        },
        _onInputFocus: function() {
            worldStore.state.hotkeysEnabled && Dispatcher.sendAction(
                "DISABLE_HOTKEYS")
        },
        render: function() {
            return el.div({
                className: "panel panel-default"
            }, el.div({
                className: "panel-body"
            }, el.p(null, "Read more: ", el.a({
                    href: "https://www.moneypot.com/provably-fair"
                },
                "https://www.moneypot.com/provably-fair"
            )), el.p({}, "Next Bet Hash: ", el.code(null,
                worldStore.state.nextHash)), el.p({},
                "Your Client Seed: ", el.span({
                        style: worldStore.state.clientSeed.error ? {
                            color: "red"
                        } : {}
                    }, worldStore.state.clientSeed.error ?
                    errorConstantToMessage(worldStore.state
                        .clientSeed.error) : ""), el.input({
                    className: "form-control",
                    value: worldStore.state.clientSeed.str,
                    onChange: this._onClientSeedChange,
                    onFocus: this._onInputFocus
                }), el.span({
                        className: "help-block"
                    }, el.a({
                        href: "javascript:void(0)",
                        onClick: this._onRefreshClientSeed
                    }, "Refresh"),
                    " Seed must be a number. Minimum: 0, Maximum: 2",
                    el.sup(null, 32), "-1"))))
        }
    }),
    MyBetsTabContent = React.createClass({
        displayName: "MyBetsTabContent",
        _onStoreChange: function() {
            this.forceUpdate()
        },
        componentDidMount: function() {
            worldStore.on("change", this._onStoreChange)
        },
        componentWillUnmount: function() {
            worldStore.off("change", this._onStoreChange)
        },
        render: function() {
            return el.div(null, el.table({
                className: "table table-condensed"
            }, el.thead(null, el.tr(null, el.th(null, "ID"),
                el.th(null, "Wager"), el.th(null,
                    "Profit"), el.th(null, "Table"), el
                .th(null, "Provably Fair?"))), el.tbody(
                null, worldStore.state.pucks.toArray().map(
                    function(e) {
                        return el.tr({
                                key: e.id
                            }, el.td(null, e.isRevealed ?
                                el.a({
                                    href: config.mp_browser_uri +
                                        "/bets/" +
                                        e.bet.bet_id
                                }, e.bet.bet_id) : "?"),
                            el.td(null, e.wager_satoshis /
                                100 + " bits"), e.isRevealed ?
                            el.td({
                                    style: {
                                        color: e.profit_satoshis >=
                                            0 ? "green" : "red"
                                    }
                                }, (e.profit_satoshis >=
                                    0 ? "+" + helpers.floor10(
                                        e.profit_satoshis /
                                        100, -2) :
                                    helpers.floor10(e.profit_satoshis /
                                        100, -2)) +
                                " bits") : el.td(null,
                                "?"), el.td(null, el.div({
                                style: {
                                    backgroundColor: config
                                        .hexColors
                                        .fade[e
                                            .color
                                        ],
                                    width: "200px",
                                    borderRadius: "5px",
                                    display: "inline-block",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    color: config
                                        .hexColors
                                        .dark[e
                                            .color
                                        ]
                                }
                            }, el.span({
                                    style: {
                                        fontFamily: "Courier New"
                                    }
                                }, e.isRevealed ?
                                helpers.calcMultiplier(
                                    e.wager_satoshis,
                                    e.profit_satoshis
                                ).toString() +
                                "x" : "?"))), e.isRevealed ?
                            el.td(null, el.span(e.isFair ? {
                                className: "glyphicon glyphicon-ok",
                                style: {
                                    color: "green"
                                }
                            } : {
                                className: "glyphicon glyphicon-remove",
                                style: {
                                    color: "red"
                                }
                            })) : el.td(null, "?"))
                    }).reverse())))
        }
    }),
    EdgeLegend = React.createClass({
        displayName: "EdgeLegend",
        shouldComponentUpdate: function() {
            return !1
        },
        render: function() {
            var e = {};
            return _.pairs(config.pay_tables).forEach(function(t) {
                var o = t[0],
                    n = t[1];
                e[o] = helpers.round10(helpers.payTableToEdge(n), -
                    2)
            }), el.div({}, el.span({
                className: "text-muted"
            }, "House Edges: "), el.ul({
                className: "list-inline",
                style: {
                    display: "inline-block"
                }
            }, _.pairs(e).map(function(e) {
                var t = e[0],
                    o = e[1];
                return el.li({
                    key: t
                }, el.div({
                    style: {
                        backgroundColor: config
                            .hexColors.fade[
                                t],
                        width: "50px",
                        height: "20px",
                        borderRadius: "5px",
                        textAlign: "center",
                        color: config.hexColors
                            .dark[t],
                        fontWeight: "bold",
                        fontFamily: "Courier New"
                    }
                }, o + "%"))
            })))
        }
    }),
    Tabs = React.createClass({
        displayName: "Tabs",
        _onStoreChange: function() {
            this.forceUpdate()
        },
        componentDidMount: function() {
            worldStore.on("change", this._onStoreChange)
        },
        componentWillUnmount: function() {
            worldStore.off("change", this._onStoreChange)
        },
        _makeTabChangeHandler: function(e) {
            return function() {
                Dispatcher.sendAction("CHANGE_TAB", e)
            }
        },
        render: function() {
            return el.ul({
                    className: "nav nav-tabs",
                    style: {
                        marginBottom: "15px"
                    }
                }, el.li({
                    className: "MY_BETS" === worldStore.state.currTab ?
                        "active" : ""
                }, el.a({
                    href: "javascript:void(0)",
                    onClick: this._makeTabChangeHandler(
                        "MY_BETS")
                }, "My Bets")), config.recaptcha_sitekey ? el.li({
                    className: "FAUCET" === worldStore.state.currTab ?
                        "active" : ""
                }, el.a({
                    href: "javascript:void(0)",
                    onClick: this._makeTabChangeHandler(
                        "FAUCET")
                }, el.span(null, "Faucet "))) : "", worldStore.state
                .user ? el.li({
                    className: "PROVABLY_FAIR" === worldStore.state
                        .currTab ? "active" : ""
                }, el.a({
                    href: "javascript:void(0)",
                    onClick: this._makeTabChangeHandler(
                        "PROVABLY_FAIR")
                }, el.span({
                    style: worldStore.state.clientSeed.error ? {
                        color: "red"
                    } : {}
                }, "Provably Fair "))) : null)
        }
    }),
    TabContent = React.createClass({
        displayName: "TabContent",
        _onStoreChange: function() {
            this.forceUpdate()
        },
        componentDidMount: function() {
            worldStore.on("change", this._onStoreChange)
        },
        componentWillUnmount: function() {
            worldStore.off("change", this._onStoreChange)
        },
        render: function() {
            switch (worldStore.state.currTab) {
                case "FAUCET":
                    return React.createElement(FaucetTabContent, null);
                case "MY_BETS":
                    return React.createElement(MyBetsTabContent, null);
                case "PROVABLY_FAIR":
                    return React.createElement(ProvablyFairTabContent,
                        null);
                default:
                    alert("Unsupported currTab value: ", worldStore.state
                        .currTab)
            }
        }
    }),
    SessionStats = React.createClass({
        displayName: "SessionStats",
        _onStoreChange: function() {
            this.forceUpdate()
        },
        componentDidMount: function() {
            worldStore.on(worldStore.events.SESSION_STATS_UPDATE, this._onStoreChange)
        },
        componentWillUnmount: function() {
            worldStore.off(worldStore.events.SESSION_STATS_UPDATE, this
                ._onStoreChange)
        },
        _onResetSessionStats: function() {
            Dispatcher.sendAction("UPDATE_SESSION_STATS", {
                revealedBetCount: 0,
                totalBetCount: _.keys(worldStore.state.activePucks)
                    .length,
                profit: 0
            })
        },
        render: function() {
            return worldStore.state.user ? el.div({
                className: "text-right text-muted"
            }, el.ul({
                className: "list-inline",
                style: {
                    display: "inline-block"
                }
            }, el.li(null, worldStore.state.sessionStats.revealedBetCount,
                "/", worldStore.state.sessionStats.totalBetCount,
                " bets "), el.li({}, worldStore.state.sessionStats
                .profit >= 0 ? el.span({
                    style: {
                        color: config.hexColors.dark.green,
                        backgroundColor: config.hexColors
                            .fade.green,
                        padding: "3px",
                        borderRadius: "5px"
                    }
                }, "+" + helpers.floor10(worldStore.state
                    .sessionStats.profit / 100, -2)) : el.span({
                    style: {
                        color: config.hexColors.dark.red,
                        backgroundColor: config.hexColors
                            .fade.red,
                        padding: "3px",
                        borderRadius: "5px"
                    }
                }, helpers.floor10(worldStore.state.sessionStats
                    .profit / 100, -2)), " bits profit")), el.button({
                type: "button",
                className: "btn-link",
                onClick: this._onResetSessionStats
            }, "Reset Stats")) : el.div()
        }
    }),
    HotkeyToggle = React.createClass({
        displayName: "HotkeyToggle",
        _onStoreChange: function() {
            this.forceUpdate()
        },
        componentDidMount: function() {
            worldStore.on(worldStore.events.HOTKEYS_CHANGED, this._onStoreChange),
                worldStore.on("change", this._onStoreChange)
        },
        componentWillUnmount: function() {
            worldStore.off(worldStore.events.HOTKEYS_CHANGED, this._onStoreChange),
                worldStore.off("change", this._onStoreChange)
        },
        _onClick: function() {
            Dispatcher.sendAction("TOGGLE_HOTKEYS")
        },
        render: function() {
            return worldStore.state.user ? el.div({
                className: "text-center",
                style: {
                    marginBottom: "10px"
                }
            }, el.button({
                    type: "button",
                    className: "btn btn-default btn-sm",
                    onClick: this._onClick,
                    style: {
                        marginTop: "-15px"
                    }
                }, "Hotkeys: ", worldStore.state.hotkeysEnabled ?
                el.span({
                    className: "label label-success",
                    style: {
                        textShadow: "none"
                    }
                }, "ON") : el.span({
                    className: "label label-default",
                    style: {
                        textShadow: "none"
                    }
                }, "OFF"))) : el.div()
        }
    }),
    PremadePayouts = React.createClass({
        displayName: "PremadePayouts",
        _onStoreChange: function() {
            this.forceUpdate()
        },
        componentDidMount: function() {
            worldStore.on(worldStore.events.PAYOUT_EDITOR_TOGGLED, this
                ._onStoreChange), worldStore.on(worldStore.events.RENDERED_PUCKS_CHANGED,
                this._onStoreChange)
        },
        componentWillUnmount: function() {
            worldStore.off(worldStore.events.PAYOUT_EDITOR_TOGGLED,
                this._onStoreChange), worldStore.off(worldStore.events
                .RENDERED_PUCKS_CHANGED, this._onStoreChange)
        },
        _onPayoutEditorToggle: function() {
            console.log("test"), Dispatcher.sendAction(
                "TOGGLE_PAYOUT_EDITOR")
        },
        _premadeUrls: function() {
            var e = {
                    Traditional: "?green=4+1.6+1.4+1.3+1.3+0.2+1.1+1.1+1.1+1.1+1.1+0.2+1.3+1.3+1.4+1.6+4&yellow=30+9+3+2+1.6+1.2+1.1+1+0.4+1+1.1+1.2+1.6+2+3+9+30&red=100+40+14+5+3.1+1.4+1+0.5+0.3+0.5+1+1.4+3.1+5+14+40+100",
                    "Center Snipe": "?green=0+0+0+0+0+0.1+1.1+1.2+1.5+1.2+1.1+0.1+0+0+0+0+0&yellow=0+0+0+0+0+0+0.28+1.25+2.5+1.25+0.28+0+0+0+0+0+0&red=0+0+0+0+0+0+0+0.6+4+0.6+0+0+0+0+0+0+0",
                    "Jackpot Board": "?green=12+8+3.4+2+1.7+1.3+1.2+1.1+0+1.1+1.2+1.3+1.7+2+3.4+8+12&yellow=80+24+8.3+3.8+2+1.6+1.3+0.7+0+0.7+1.3+1.6+2+3.8+8.3+24+80&red=999+49+12.5+4.7+3.6+2.1+0.8+0.4+0+0.4+0.8+2.1+3.6+4.7+12.5+49+999",
                    "Pick-A-Side": "?green=12+5.6+5.2+5+4.8+4.1+1.2+1.1+1+0+0+0+0+0+0+0+0&yellow=0+0+0+0+0+0+0+0+1+1.1+1.2+4.1+4.8+5+5.2+5.6+12&red=0+0+0+0+0+1.1+1.1+1.1+1+1.1+1.1+1.1+0+0+0+0+0",
                    "@cancerbola's Board": "?green=32+7.5+3.5+2.89+2+1.5+1.1+1+0+1+1.1+1.5+2+2.89+3.5+7.5+32&yellow=12+7.77+2.6+0+0+0+1+1.24+1.55+1.24+1+0+0+0+2.6+7.77+12&red=999+777+77.7+7.77+0.77+0.35+0.1+0.1+0.1+0.1+0.1+0.35+0.77+7.77+77.7+777+999"
                },
                t = window.location.origin + window.location.pathname,
                o = {};
            return _.pairs(e).forEach(function(e) {
                o[e[0]] = t + e[1]
            }), o
        }(),
        render: function() {
            var e = _.keys(worldStore.state.renderedPucks).length > 0;
            return el.ul({
                    className: "list-unstyled list-inline"
                }, el.li(null, "Try these boards:"), _.pairs(this._premadeUrls)
                .map(function(t) {
                    var o = t[0],
                        n = t[1];
                    return el.li({
                        key: o
                    }, el.a({
                        className: "btn btn-default",
                        href: n,
                        disabled: e
                    }, o))
                }), el.li(null, el.button({
                        className: "btn btn-link",
                        type: "button",
                        onClick: this._onPayoutEditorToggle
                    }, worldStore.state.showPayoutEditor ?
                    "Hide Payout Editor" : "Show Payout Editor"
                )))
        }
    }),
    PayoutEditor = React.createClass({
        displayName: "PayoutEditor",
        _onStoreChange: function() {
            this.forceUpdate()
        },
        componentDidMount: function() {
            worldStore.on(worldStore.events.PAYOUT_EDITOR_TOGGLED, this
                ._onStoreChange), worldStore.on(worldStore.events.RENDERED_PUCKS_CHANGED,
                this._onStoreChange), worldStore.on(worldStore.events
                .BANKROLL_CHANGED, this._onStoreChange)
        },
        componentWillUnmount: function() {
            worldStore.off(worldStore.events.PAYOUT_EDITOR_TOGGLED,
                    this._onStoreChange), worldStore.off(worldStore.events
                    .RENDERED_PUCKS_CHANGED, this._onStoreChange),
                worldStore.off(worldStore.events.BANKROLL_CHANGED, this
                    ._onStoreChange)
        },
        _toStrings: function(e) {
            return e.map(function(e) {
                return e.toString()
            })
        },
        getInitialState: function() {
            return {
                green: {
                    error: void 0,
                    strings: this._toStrings(worldStore.state.pay_tables
                        .green)
                },
                yellow: {
                    error: void 0,
                    strings: this._toStrings(worldStore.state.pay_tables
                        .yellow)
                },
                red: {
                    error: void 0,
                    strings: this._toStrings(worldStore.state.pay_tables
                        .red)
                }
            }
        },
        _onReset: function() {
            var e = {
                green: {
                    error: void 0,
                    strings: this._toStrings(worldStore.state.pay_tables
                        .green)
                },
                yellow: {
                    error: void 0,
                    strings: this._toStrings(worldStore.state.pay_tables
                        .yellow)
                },
                red: {
                    error: void 0,
                    strings: this._toStrings(worldStore.state.pay_tables
                        .red)
                }
            };
            this.replaceState(e)
        },
        _validateState: function() {
            var e = _.clone(this.state);
            ["green", "yellow", "red"].forEach(function(t) {
                var o = helpers.payTableToEdge(helpers.toFloats(
                    e[t].strings));
                console.log(t + " edge:", o);
                var n = _.some(e[t].strings, _.negate(helpers.isValidPayout));
                e[t].error = n ? "INVALID_PAYOUT" : .4 > o ?
                    "EDGE_TOO_SMALL" : null
            }), this.setState(e)
        },
        _onSave: function() {
            console.log("saving...", this.state.red), Dispatcher.sendAction(
                "UPDATE_PAY_TABLES", {
                    green: helpers.toFloats(this.state.green.strings),
                    yellow: helpers.toFloats(this.state.yellow.strings),
                    red: helpers.toFloats(this.state.red.strings)
                })
        },
        _makeChangeHandler: function(e, t) {
            var o = this;
            return function(n) {
                var a = _.clone(o.state);
                a[e].strings[t] = n.target.value.slice(0, 4), o.setState(
                    a), o._validateState()
            }
        },
        _calcHouseEdge: function(e) {
            var t = helpers.round10(helpers.payTableToEdge(helpers.toFloats(
                this.state[e].strings)), -2);
            return t
        },
        _translateErrorConstant: function() {
            var e = {
                EDGE_TOO_SMALL: "House edge must be at least 0.40%",
                INVALID_PAYOUT: "At least one payout in this row is invalid"
            };
            return function(t) {
                return e[t]
            }
        }(),
        _generateShareUrl: function() {
            var e = window.location.origin + window.location.pathname +
                "?green=" + this.state.green.strings.join("+") +
                "&yellow=" + this.state.yellow.strings.join("+") +
                "&red=" + this.state.red.strings.join("+");
            return e
        },
        _onSelectAllClick: function(e) {
            var t = this.refs.shareUrlRef.getDOMNode();
            t.focus(), t.select()
        },
        _onHideEditor: function() {
            Dispatcher.sendAction("TOGGLE_PAYOUT_EDITOR")
        },
        _calcMaxBet: function(e) {
            if (!this.state[e].error) {
                var t = _.max(helpers.toFloats(this.state[e].strings));
                if (0 !== t) {
                    var o = this._calcHouseEdge(e),
                        n = worldStore.state.bankroll / (t - 1) * (o /
                            100);
                    return helpers.floor10(n / 100, -2)
                }
            }
        },
        _onInputFocus: function() {
            worldStore.state.hotkeysEnabled && Dispatcher.sendAction(
                "DISABLE_HOTKEYS")
        },
        render: function() {
            var e = this;
            if (!worldStore.state.showPayoutEditor) return el.div();
            var t = _.some(["green", "yellow", "red"], function(t) {
                    return e.state[t].error
                }),
                o = _.keys(worldStore.state.renderedPucks).length > 0;
            return el.div({
                className: "panel panel-default"
            }, el.div({
                className: "panel-heading"
            }, el.button({
                className: "btn btn-link pull-right",
                type: "button",
                onClick: this._onHideEditor
            }, "Hide"), el.h5(null, "Payout Editor")), el.div({
                className: "panel-body"
            }, el.p({},
                "You can set your own payouts (the colored rows beneath the pyramid), but here are some tips:",
                el.ul(null, el.li(null,
                    "House edge must be at least ", el.code(
                        null, "0.40%")), el.li(null,
                    "Payouts can have up to three significant digits, i.e. ",
                    el.code(null, "XXX"), " or ", el.code(
                        null, "XX.X"), " or ", el.code(
                        null, "X.XX")), el.li(null,
                    "The max bet allowed on a row is determined by the row's highest payout and house edge",
                    el.ul(null, el.li(null,
                        "The max bets below are highly approximated and based off a ",
                        el.a({
                            href: "https://www.moneypot.com/investment",
                            target: "_blank"
                        }, "Moneypot bankroll"),
                        " of ", el.code(null,
                            helpers.commafy(helpers
                                .floor10(worldStore
                                    .state.bankroll /
                                    100, -2))),
                        " bits"))))), el.hr(), ["green",
                "yellow", "red"
            ].map(function(t) {
                return el.div({
                    key: t
                }, el.p({
                        style: {}
                    }, el.span({
                        style: {
                            color: config.hexColors
                                .dark[t],
                            backgroundColor: config
                                .hexColors.fade[
                                    t],
                            padding: "2px 3px",
                            width: "100px",
                            display: "inline-block",
                            textAlign: "center"
                        }
                    }, _.capitalize(t)), " ",
                    el.span({
                            style: {
                                fontFamily: "Courier New"
                            }
                        }, el.span({
                                style: {
                                    borderBottom: "1px solid #333",
                                    borderColor: "EDGE_TOO_SMALL" ===
                                        e.state[
                                            t].error ||
                                        _.isNaN(
                                            e._calcHouseEdge(
                                                t
                                            )) ?
                                        "red" : "#333",
                                    color: "EDGE_TOO_SMALL" ===
                                        e.state[
                                            t].error ||
                                        _.isNaN(
                                            e._calcHouseEdge(
                                                t
                                            )) ?
                                        "red" : "#333"
                                }
                            }, e.state[t].error &&
                            "EDGE_TOO_SMALL" !==
                            e.state[t].error ?
                            "XXX" : e._calcHouseEdge(
                                t).toFixed(2) +
                            "%"),
                        " house edge, "), el.span({
                        style: {
                            fontFamily: "Courier New"
                        }
                    }, "~", function() {
                        var o = e._calcMaxBet(
                            t);
                        return el.span({
                                style: {
                                    borderBottom: "1px solid #333"
                                }
                            }, o ?
                            helpers.commafy(
                                helpers
                                .round10(
                                    o,
                                    3)) :
                            "XXX")
                    }(), " bits max bet"), " ",
                    e.state[t].error ? el.span({
                        style: {
                            color: "red"
                        }
                    }, e._translateErrorConstant(
                        e.state[t].error)) : ""
                ), e.state[t].strings.map(
                    function(o, n) {
                        return el.span({
                            key: t +
                                "-" + n
                        }, el.input({
                            key: t +
                                "-" +
                                n,
                            type: "text",
                            className: "form-control input-sm payout-control",
                            value: o,
                            style: {
                                fontFamily: "Courier New",
                                width: "55px",
                                display: "inline-block",
                                marginLeft: "5px",
                                marginBottom: "10px",
                                borderColor: "INVALID_PAYOUT" !==
                                    e
                                    .state[
                                        t
                                    ]
                                    .error ||
                                    helpers
                                    .isValidPayout(
                                        o
                                    ) ?
                                    "#ccc" : "red",
                                color: "INVALID_PAYOUT" !==
                                    e
                                    .state[
                                        t
                                    ]
                                    .error ||
                                    helpers
                                    .isValidPayout(
                                        o
                                    ) ?
                                    "#333" : "red"
                            },
                            onChange: e
                                ._makeChangeHandler(
                                    t,
                                    n
                                ),
                            onFocus: e
                                ._onInputFocus
                        }), _.contains(
                            [3, 7, 8,
                                12
                            ], n) ? el.span({
                            dangerouslySetInnerHTML: {
                                __html: " &mdash;"
                            }
                        }) : "")
                    }))
            }), el.div({}, "Share these payouts:", t ? "" :
                el.button({
                    onClick: this._onSelectAllClick,
                    className: "btn btn-default btn-xs"
                }, "Select"), t ? " --" : el.textarea({
                    ref: "shareUrlRef",
                    className: "form-control",
                    readOnly: !0,
                    value: this._generateShareUrl()
                }))), el.div({
                    className: "panel-footer"
                }, el.button({
                    type: "button",
                    className: "btn btn-default",
                    onClick: this._onReset
                }, "Reset"), " ", el.button({
                    type: "button",
                    className: "btn btn-primary",
                    onClick: this._onSave,
                    disabled: t || o
                }, "Save"), " ", t ? el.span({
                        style: {
                            color: "red"
                        }
                    },
                    "You must fix the errors before you can save"
                ) : o ? el.span({
                        style: {
                            color: "red"
                        }
                    },
                    "Wait until pucks are finished animating") :
                "Clicking save will update the current payouts below the pyramid"
            ))
        }
    }),
    App = React.createClass({
        displayName: "App",
        render: function() {
            return el.div({
                className: "container"
            }, React.createElement(Navbar, null), el.div({
                className: "row"
            }, el.div({
                className: "col-sm-7 board-container"
            }, React.createElement(Board, null)), el.div({
                    className: "col-sm-5"
                }, React.createElement(BetBox, null), React
                .createElement(HotkeyToggle, null), React.createElement(
                    TryMe, null), React.createElement(
                    ChatBox, null))), React.createElement(
                PremadePayouts, null), React.createElement(
                PayoutEditor, null), el.div({
                style: {
                    marginTop: "15px"
                }
            }, React.createElement(Tabs, null)), React.createElement(
                TabContent, null))
        }
    });
React.render(React.createElement(App, null), document.getElementById("app")),
    worldStore.state.accessToken ? (MoneyPot.getTokenInfo({
        success: function(e) {
            console.log(
                "Successfully loaded user from tokens endpoint",
                e);
            var t = e.auth.user;
            Dispatcher.sendAction("UPDATE_USER", t), Dispatcher.sendAction(
                "UPDATE_WAGER", {})
        },
        error: function(e) {
            console.log("Error hitting token endpoint:", e)
        },
        complete: function() {
            Dispatcher.sendAction("STOP_LOADING"),
                connectToChatServer()
        }
    }), MoneyPot.generateBetHash({
        success: function(e) {
            Dispatcher.sendAction("SET_NEXT_HASH", e.hash)
        },
        error: function(e) {
            console.log("Error fetching next bet hash:", e)
        }
    }), MoneyPot.getBankroll({
        success: function(e) {
            Dispatcher.sendAction("UPDATE_BANKROLL", e.balance)
        },
        error: function(e) {
            console.log("Error fetching Moneypot's bankroll:", e)
        }
    })) : (Dispatcher.sendAction("STOP_LOADING"), connectToChatServer()), $(
        document).on("keydown", function(e) {
        var t = 74,
            o = 75,
            n = 76,
            a = 67,
            r = 88,
            s = e.which;
        if (worldStore.state.hotkeysEnabled && !(e.shiftKey || e.altKey ||
            e.ctrlKey || e.metaKey) && _.contains([t, o, n, a, r], s))
            switch (e.stopPropagation(), e.preventDefault(), s) {
                case a:
                    var i = Math.max(1, 2 * worldStore.state.wager.num);
                    Dispatcher.sendAction("UPDATE_WAGER", {
                        num: i,
                        str: i.toString()
                    });
                    break;
                case r:
                    var l = Math.max(1, Math.floor(worldStore.state.wager.num /
                        2));
                    Dispatcher.sendAction("UPDATE_WAGER", {
                        num: l,
                        str: l.toString()
                    });
                    break;
                case t:
                    $("#green-btn").click();
                    break;
                case o:
                    $("#yellow-btn").click();
                    break;
                case n:
                    $("#red-btn").click();
                    break;
                default:
                    return
            }
    }), window.addEventListener("message", function(e) {
        e.origin === config.mp_browser_uri && "UPDATE_BALANCE" === e.data &&
            Dispatcher.sendAction("REFRESH_USER")
    }, !1);
