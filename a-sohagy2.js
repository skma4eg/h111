    ! function(a, b, c) {
        var d = function(a) {
                return b.getElementById(a) ? !0 : !1
            },
            e = function(a) {
                return b.getElementById(a)
            },
            f = function(a, c) {
                return b.getElementById(a).getAttribute(c)
            },
            g = function(a, c) {
                b.getElementById(a).removeAttribute(c)
            },
            h = function(a) {
                a.style.display = "none"
            },
            i = function(a) {
                a.style.display = "block"
            },
            j = function(a) {
                var c = b.createElement("script");
                c.src = a, b.getElementsByTagName("head")[0].appendChild(c)
            },
            k = function(a) {
                b.getElementById(a).parentNode.removeChild(b.getElementById(a))
            },
            l = function(a) {
                return encodeURIComponent(a)
            },
            m = function(a) {
                return decodeURIComponent(a)
            },

            o = function(a, b) {
                var c = XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Msxml2.XMLHTTP") || new ActiveXObject("Microsoft.XMLHTTP");
                c.open("get", a, !0), c.onreadystatechange = function() {
                    var a;
                    4 == c.readyState && (a = c.status, 200 == a ? b && b(JSON.parse(c.responseText)) : function() {})
                }, c.send()
            },

            p = function(a) {
                var b = screen.width ? (screen.width - 500) / 2 : 0,
                    c = screen.height ? (screen.height - 400) / 2 : 0,
                    d = "height=400,width=500,top=" + c + ",left=" + b + ",scrollbars=no,resizable=no";
                window.open(a, 500, d)
            }

        , r = function(a) {
            var b=(a.substring(0, 0), a.substring(0, 0), a.substring(0, 4), {
                seconds: "ÀÊ«‰Ï", minute: "œﬁÌﬁ…", minutes: "%d œﬁ«∆ﬁ", hour: "”«⁄…", hours: "%d ”«⁄« ", day: "ÌÊ„", days: "%d √Ì«„", month: "‘Â—", months: "%d √‘Â—", year: "”‰…", years: "%d ”‰Ê« "
            }
            
            ),
                c = function(a, c) {
                    return b[a] && b[a].replace(/%d/i, Math.abs(Math.round(c)))
                },
                d = function(a) {
                    if (a) {
                        a = a.replace(/\.\d+/, ""), a = a.replace(/-/, "/").replace(/-/, "/"), a = a.replace(/T/, " ").replace(/Z/, " UTC"), a = a.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), a = new Date(1e3 * a || a);
                        var b = new Date,
                            d = .001 * (b.getTime() - a) >> 0,
                            e = d / 60,
                            f = e / 60,
                            g = f / 24,
                            h = g / 365;
                        return 45 > d && c("seconds", d) || 90 > d && c("minute", 1) || 45 > e && c("minutes", e) || 90 > e && c("hour", 1) || 24 > f && c("hours", f) || 42 > f && c("day", 1) || 30 > g && c("days", g) || 45 > g && c("month", 1) || 365 > g && c("months", g / 30) || 1.5 > h && c("year", 1) || c("years", h)
                    }
                };
            return "\u0645\u0646\u0630 " + d(a)
        }, s = function(a) {
            return a.match(/08574642666298779508/) ? !0 : !1
        }, t = function(a) {
            return a.match(/http:/) || a.match(/https:/) ? a.replace(/^http:/, "").replace(/^https:/, "") : a
        }, u = function() {
            return '<iframe src="' + q() + '"></iframe>'
        }, v = function(a) {
            return a.replace(/^\/\/(.*?)\//, "/")
        }, w = function(a) {
            return a.replace(/<\S[^>]*>/g, "").replace(/\n/g, "").replace(/\n+/g, "").replace(/\s/g, "").replace(/\s+/g, "").replace(/\r/g, "").replace(/\r+/g, "")
        }, x = function(a) {
            return a = a.replace(/^(.*?)posts/g, "/feeds/posts").replace(/^(.*?)\/-\/(.*?)\/-\//g, "/feeds/posts/summary/-/")
        }, y = function(a, b) {
            return a = a.replace(/^(.*?)\/s72-c\/(.*?)$/, "$1/" + b + "/"), -1 != a.indexOf("img.youtube.com") && (a = a.replace("default", "sddefault")), a
        }, z = function() {
            var a = e("HMeta").getElementsByTagName("article").length || 9;
            return a > 15 ? 15 : a
        }, A = function(b) {
            a(b).scrollTop() > 100 ? a("#Toop").fadeIn() : a("#Toop").fadeOut()
        }, B = function(a, c, d) {
            b.body.innerHTML = a + c + d + u()
        }, C = function(a) {
            for (var c = new Masonry(e("HPost"), {
                    isOriginLeft: !1,
                    containerStyle: null,
                    transitionDuration: "300ms"
                }), d = 0; d < a.length; d++) {
                for (var f, g = a[d].link, h = 0; h < g.length; h++) "alternate" == g[h].rel && (f = v(t(g[h].href)));
                var i = "thr$total" in a[d] ? a[d].thr$total.$t : "*",
                    j = "media$thumbnail" in a[d] ? a[d].media$thumbnail.url : "",
                    k = a[d].title.$t,
                    m = r(a[d].published.$t),
                    n = b.createElement("article"),
                    o = "";
                if ("category" in a[d]) {
                    o += '<li><i class="fa fa-tags"></i>';
                    for (var p = a[d].category, q = 0; q < p.length; q++) o += (q > 0 ? " \u060c " : "") + '<a href="/search/label/' + l(p[q].term) + '">' + p[q].term + "</a>";
                    o += "</li>"
                }
                j = "" != j ? '<a title="' + k + '" href="' + f + '"><img src="' + t(y(j, "w450-h300-n")) + '"/></a>' : "", n.className = "Post", n.innerHTML = "<div>" + j + '<div><h2><a href="' + f + '">' + k + '</a></h2><ul><li><time><i class="fa fa-clock-o"></i>' + m + '</time></li><li><a href="' + f + '#Comments"><i class="fa fa-comments"></i>' + i + "</a></li>" + o + "</ul></div></div>", e("HPost").appendChild(n), c.appended(n), c.layout()
            }
        }, D = function(a) {
            e("Warp").onscroll = "" != a ? function() {
                A(this);
                var c = this;
                if (c.scrollTop > c.scrollHeight - c.clientHeight - 20 && 0 == d("HLoad")) {
                    var f = b.createElement("i");
                    f.id = "HLoad", f.className = "loader", e("Blog1").appendChild(f), o(a, function(a) {
                        for (var b = "", c = a.feed.link, d = 0; d < c.length; d++) "next" == c[d].rel && (b = x(c[d].href));
                        k("HLoad"), C(a.feed.entry), D(b)
                    })
                }
            } : function() {
                A(this)
            }
        }, E = function(a, b) {
            o("/feeds/posts/summary" + a, function(a) {
                var c, d = "",
                    f = "",
                    g = a.feed.entry,
                    h = a.feed.link;
                for (c = 0; c < h.length; c++) "next" == h[c].rel && (d = x(h[c].href));
                "entry" in a.feed ? (e("HPost").innerHTML = "", C(g), D(d)) : ("l" == b ? f = "<b>⁄›Ê« ° Â–« «·ﬁ”„ ·« ÌÕ ÊÏ ⁄·Ï „Ê÷Ê⁄« </b>" : "s" == b && (f = "<b>⁄›Ê« ° ·« ÌÊÃœ ‰ ÌÃ… ·⁄„·Ì… «·»ÕÀ Â–… Ã—» „—… √Œ—Ï</b>"), "h" == b && (f = "<b>⁄›Ê« ° «·„œÊ‰… ·«  Õ ÊÏ ⁄·Ï „Ê÷Ê⁄«  »⁄œ</b>"), e("HPost").innerHTML = f, e("Warp").onscroll = function() {
                    A(this)
                })
            })
        }, F = function(a) {
            var b, c = [{
                s: /<\S[^>]*>/g,
                r: "\n"
            }, {
                s: /\n+/g,
                r: "\n"
            }, {
                s: /\n/g,
                r: "</p><p>"
            }, {
                s: /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
                r: ' <a target="_blank" rel="nofollow" href="$1">$1</a> '
            }];
            for (b = 0; b < c.length; b++) a = a.replace(c[b].s, c[b].r);
            return "<p>" + a + "</p>"
        }, G = function(a, c, g, h) {
            if (1 == d("Frame-" + h)) k("Frame-" + h), a.innerHTML = '<i class="fa fa-reply"></i> \u0631\u062f';
            else {
                var i = b.createElement("div");
                i.id = "Frame-" + h, i.className = "Frame", i.innerHTML = '<a></a><iframe src="https://www.blogger.com/comment-iframe.g?blogID=' + c + "&p" + ("item" == f("Get", "c") ? "ost" : "age") + "ID=" + g + "&parentID=" + h + '"></iframe>', e("c" + h).appendChild(i), e("Frame-" + h).getElementsByTagName("a")[0].onclick = function() {}, a.innerHTML = '<i class="fa fa-reply"></i> \u0627\u0644\u063a\u0627\u0621'
            }
        }, H = function(a, b) {
            for (var c = e(a).getElementsByClassName("rep"), d = 0; d < c.length; d++) 1 == b ? c[d].onclick = function() {
                G(this, this.getAttribute("a"), this.getAttribute("b"), this.getAttribute("c"))
            } : h(c[d].parentNode)
        }, I = function(a) {
            for (var b = e(a).getElementsByClassName("del"), c = 0; c < b.length; c++) b[c].onclick = function() {
                p("https://www.blogger.com/delete-comment.g?blogID=" + this.getAttribute("a") + "&postID=" + this.getAttribute("b"))
            }
        }, J = function() {
            for (var a = f("Get", "a").split(""), b = 0, c = 1; b < a.length; b++) a[b] > 0 && (c += a[b] > 5 ? a[b] * a[b] * a[b] : a[b]);
            return c
        }, K = function(a, c) {
            var d = b.createElement("li");
            d.innerHTML = '<a href="' + a + '" title="\u0634\u0627\u0631\u0643 \u0627\u0644\u062a\u062f\u0648\u064a\u0646\u0629" target="_blank"><i class="fa fa-' + c + '"></i></a>', e("Share").getElementsByTagName("ul")[0].appendChild(d), d.getElementsByTagName("a")[0].onclick = function() {
                return p(this.href), !1
            }
        }, L = function(b, c) {
            e("Share").innerHTML = '<h2><i class="fa fa-share-alt"></i> \u0634\u0627\u0631\u0643</h2><ul></ul>', K("https://www.twitter.com/intent/tweet?url=" + b + "&text=" + c, "twitter"), K("https://www.facebook.com/sharer/sharer.php?u=" + b + "&t=" + c, "facebook"), K("https://plus.google.com/share?url=" + b, "google-plus"),K("whatsapp://send?text=" + m(b) + " - " + m(c), "whatsapp"), K("https://www.addtoany.com/share?linkurl=" + b + "&linkname=" + c, "location-arrow"), a("#Share h2").click(function() {
                a("#Share ul").slideToggle("slow")
            })
        }, M = function() {
            setTimeout(function() {
                if ("owsal0" !== location.hostname.split(".")[0]) {
                    var a = b.createElement("div");
                    a.innerHTML = '                    ', a.setAttribute("style", "position:absolute!important;top:100%!important;right:0!important;display:block!important;font-size:11px!important;color:#fff!important;font-family:monospace!important;z-index:99999999!important;padding:4px 0!important;margin:0!important;text-shadow:1px 1px 1px #000!important;"), e("Main").parentNode.appendChild(a)
                }
            }, 2e3)
        }, N = function() {
            a("html").hasClass("isopen") && a("html").removeClass("isopen"), a("#Too2").hasClass("active") && (a("#Too2").removeClass("active"), a("#LinkList1").removeAttr("style")), a("#Too1").hasClass("active") && a("#Too1").removeClass("active"), a("#LinkList1").removeAttr("style")
        }, O = function(a, c) {
            for (var d = 0; d < a.length; d++) {
                var g = "avatarUrl" in a[d].author ? a[d].author.avatarUrl : "",
                    h = t("profileUrl" in a[d].author ? a[d].author.profileUrl : "#"),
                    i = a[d].author.name,
                    j = v(t(a[d].permalink)),
                    k = b.createElement("div"),
                    l = a[d].displayTime,
                    m = a[d].id,
                    n = f("Get", "a"),
                    o = f("Get", "b"),
                    p = F(a[d].body);
                g = g.match(/googleusercontent/) ? g : "//gravatar.com/avatar?size=35", k.id = "c" + m, k.className = "Comment" + ("parentId" in a[d] ? (e("c" + a[d].parentId).className.match(/Tik/) ? "" : " Tik") + " Replay" : "") + (1 == s(h) ? " Admin" : ""), k.innerHTML = '<ul><li><img src="' + g + '" /><a class="user" target="_blank" rel="nofollow" href="' + h + '" t="' + i + '"><i class="fa fa-user"></i> ' + (i.length > 25 ? i.substring(0, 22) + "..." : i) + "</a></li>" + ("parentId" in a[d] ? "BloggerCom" != e("c" + a[d].parentId).parentNode.parentNode.parentNode.getAttribute("id") ? '<li><a class="rep" href="#" a="' + n + '" b="' + o + '" c="' + m + '"><i class="fa fa-reply"></i> \u0631\u062f</a></li>' : "" : '<li><a class="rep" href="#" a="' + n + '" b="' + o + '" c="' + m + '"><i class="fa fa-reply"></i> \u0631\u062f</a></li>') + '<li><a class="time" target="_blank" rel="nofollow" href="' + j + '"><i class="fa fa-clock-o"></i> ' + l + '</a></li><li><a class="del" href="#" a="' + n + '" b="' + m + '"><i class="fa fa-trash"></i></a></li></ul><div class="ComBod">' + p + "</div>", e("parentId" in a[d] ? "c" + a[d].parentId : "BloggerCom").appendChild(k)
            }
            H("BloggerCom", c), I("BloggerCom")
        }, P = function(b) {
            if (1 == d(b)) {
                if (e(b).getElementsByTagName("img"))
                    for (var c = e(b).getElementsByTagName("img"), f = 0; f < c.length; f++) c[f].setAttribute("src", t(y(c[f].getAttribute("a"), "w300-h200-n")));
                e(b).getElementsByTagName("li") && a("#" + b + " .slide").owlCarousel({
                    navigation: !1,
                    slideSpeed: 300,
                    paginationSpeed: 400,
                    autoPlay: !0,
                    singleItem: !0
                })
            }
        }, Q = function(b) {
            o("/feeds/posts/summary/-/" + l(b.getAttribute("a")) + "?alt=json&max-results=10", function(c) {
                for (var d = c.feed.entry, e = 0, f = ""; e < d.length; e++) {
                    for (var g, h = d[e].link, j = 0; j < h.length; j++) "alternate" == h[j].rel && (g = v(t(h[j].href)));
                    var k = "media$thumbnail" in d[e] ? d[e].media$thumbnail.url : "",
                        l = d[e].title.$t,
                        m = r(d[e].published.$t);
                    k = "" != k ? '<img src="' + t(y(k, "w450-h300-n")) + '"/>' : "", f += '<li class="items"><a title="' + l + '" href="' + g + '">' + k + '</a><h3><a href="' + g + '">' + l + " - " + m + "</a></h3></li>"
                }
                b.getElementsByTagName("ol")[0].innerHTML = f, a(b.getElementsByTagName("ol")[0]).owlCarousel({
                    navigation: !1,
                    slideSpeed: 300,
                    paginationSpeed: 400,
                    autoPlay: !0,
                    singleItem: !0
                }), i(b)
            })
        }, R = function() {
            if (1 == d("Label2") && b.getElementsByClassName("recents"))
                for (var a = 0, c = b.getElementsByClassName("recents"); a < c.length; a++) Q(c[a])
        };
        M(), ("index" == f("Get", "c") || "archive" == f("Get", "c") || "error_page" == f("Get", "c")) && k("Left");
        for (var S = b.getElementsByTagName("div"), T = 0; T < S.length; T++)(-1 != S[T].className.indexOf("section") || -1 != S[T].className.indexOf("widget")) && S[T].removeAttribute("class");
        "index" == f("Get", "c") && ("h" == f("Typ", "a") ? E("?alt=json&max-results=" + z(), "h") : "l" == f("Typ", "a") ? E("/-/" + l(f("Typ", "b")) + "?alt=json&max-results=" + z(), "l") : "s" == f("Typ", "a") && E("?q=" + l(f("Typ", "b")) + "&alt=json&max-results=" + z(), "s")), 1 == d("Seain") && (e("Seain").onkeyup = function() {
            e("HPost").innerHTML = '<i class="loader"></i>', e("HPost").removeAttribute("style"), e("Warp").onscroll = function() {
                A(this)
            }, E("?q=" + l(this.value) + "&alt=json&max-results=6", "s"), history.pushState("", "", "/search?q=" + this.value)
        }), ("item" == f("Get", "c") || "static_page" == f("Get", "c")) && (e("Warp").onscroll = function() {
            A(this)
        }, 1 == d("Poti") && (e("Poti").innerHTML = r(f("Poti", "a")), g("Poti", "a")), L(l(f("Get", "d")), l(f("Get", "e"))), P("PopularPosts1"), P("PopularPosts2"), P("PopularPosts3"), R(), "true" == f("BloggerCom", "a") && "true" == f("BloggerCom", "b") ? (e("BloggerCom").innerHTML = "<h4>" + f("BloggerCom", "c") + '</h4><div class="Frame"><iframe src="https://www.blogger.com/comment-iframe.g?blogID=' + f("Get", "a") + "&p" + ("item" == f("Get", "c") ? "ost" : "age") + "ID=" + f("Get", "b") + '"' + (-1 != location.href.indexOf("?showComment=") && -1 != location.href.indexOf("#c") ? 'style="height: 259px;"' : "") + "></iframe></div>", "" != BloggerCom && O(BloggerCom, !0)) : "true" == f("BloggerCom", "a") && "false" == f("BloggerCom", "b") ? (e("BloggerCom").innerHTML = "<h4>·« Ì„ﬂ‰ﬂ «÷«›…  ⁄·Ìﬁ Õ«·Ì« ° Ì„ﬂ‰ﬂ «·«ÿ·«⁄ ⁄·Ï «· ⁄·Ìﬁ«  «·ﬁœÌ„… ›ﬁÿ</h4>", "" != BloggerCom && O(BloggerCom, !1)) : e("BloggerCom").innerHTML = "<h4>«· ⁄·Ìﬁ«  „€·ﬁ… ›Ï «·Êﬁ  «·Õ«·Ï —»„«  ⁄„· ·«Õﬁ«</h4>", 1 == d("Fbfb") && (e("Fbfb").onclick = function() {
            var a = this;
            i(e("FacebokCom")), h(e("BloggerCom")), a.className = "active", e("Bgbg").removeAttribute("class"), "0" == a.getAttribute("a") && (a.setAttribute("a", "1"), e("FacebokCom").getElementsByTagName("div")[0].setAttribute("data-width", e("Comments").clientWidth + ""), j("https://connect.facebook.net/ar_AR/all.js#xfbml=1&version=v2.4&appId=" + f("Get", "g"), "FaceBookScriptLoader"))
        }), 1 == d("Bgbg") && (e("Bgbg").onclick = function() {
            var a = this;
            i(e("BloggerCom")), h(e("FacebokCom")), a.className = "active", e("Fbfb").removeAttribute("class")
        })), a("#Too1").click(function() {
            a("html").toggleClass("isopen"), a(this).toggleClass("active")
        }), a("#Too2").click(function() {
            a("#LinkList1").slideToggle("slow"), a(this).toggleClass("active")
        }), e("Toremo").onclick = function() {
            N()
        }, a("#Toop").click(function() {
            a("#Warp").animate({
                scrollTop: 0
            }, 600)
        }), 0 != a(".follow-by-email-address").size() && a("#FollowByEmail1 form").submit(function() {
            var b = a(".follow-by-email-address").val();
            return "" == b ? (alert("√„·« Õﬁ· «·»—Ìœ «·«·Ìﬂ —Ê‰Ï"), !1) : -1 === b.indexOf("@") || -1 === b.indexOf(".") || b.length <= 7 ? (alert("«·»—Ìœ «·«·Ìﬂ —Ê‰Ï «·–Ï «œŒ· … €Ì— ’«·Õ"), !1) : void 0        }), e("Warp").getElementsByTagName("div")[0].style.minHeight = b.body.clientHeight + "px", c.onload = function() {
            setTimeout(function() {
                -1 === w(b.body.innerHTML).indexOf(J()) && B("", "", "")
            }, 1e4)
        }
    }(jQuery, document, window);