!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return (
      e[i].call(r.exports, r, r.exports, n),
      (r.l = !0),
      r.exports
    );
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: i,
        });
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Module',
        }),
        Object.defineProperty(e, '__esModule', {
          value: !0,
        });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (
        4 & t &&
        'object' == typeof e &&
        e &&
        e.__esModule
      )
        return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, 'default', {
          enumerable: !0,
          value: e,
        }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          n.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 3));
})([
  function (e, t) {
    !(function () {
      if ('undefined' != typeof window)
        try {
          var e = new window.CustomEvent('test', {
            cancelable: !0,
          });
          if (
            (e.preventDefault(), !0 !== e.defaultPrevented)
          )
            throw new Error('Could not prevent default');
        } catch (e) {
          var t = function (e, t) {
            var n, i;
            return (
              ((t = t || {}).bubbles = !!t.bubbles),
              (t.cancelable = !!t.cancelable),
              (n =
                document.createEvent(
                  'CustomEvent'
                )).initCustomEvent(
                e,
                t.bubbles,
                t.cancelable,
                t.detail
              ),
              (i = n.preventDefault),
              (n.preventDefault = function () {
                i.call(this);
                try {
                  Object.defineProperty(
                    this,
                    'defaultPrevented',
                    {
                      get: function () {
                        return !0;
                      },
                    }
                  );
                } catch (e) {
                  this.defaultPrevented = !0;
                }
              }),
              n
            );
          };
          (t.prototype = window.Event.prototype),
            (window.CustomEvent = t);
        }
    })();
  },
  function (e, t, n) {
    (t = n(2)(!1)).push([
      e.i,
      '.slide-menu{position:fixed;width:320px;max-width:100%;height:100vh;top:0;right:0;display:none;overflow:hidden;box-sizing:border-box;transform:translateX(100%);overflow-y:auto;z-index:1000}.slide-menu,.slide-menu .slide-menu__slider{transition:transform .3s ease-in-out;will-change:transform}.slide-menu .slide-menu__slider{width:100%;transform:translateX(0)}.slide-menu ul{position:relative;width:100%;margin:0;padding-left:0;list-style:none}.slide-menu ul ul{position:absolute;top:0;left:100%;display:none}.slide-menu ul a{display:block}.slide-menu a{cursor:pointer}',
      '',
    ]),
      (e.exports = t);
  },
  function (e, t, n) {
    'use strict';
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || '',
                i = e[3];
              if (!i) return n;
              if (t && 'function' == typeof btoa) {
                var r =
                    ((s = i),
                    (a = btoa(
                      unescape(
                        encodeURIComponent(
                          JSON.stringify(s)
                        )
                      )
                    )),
                    (l =
                      'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                        a
                      )),
                    '/*# '.concat(l, ' */')),
                  o = i.sources.map(function (e) {
                    return '/*# sourceURL='
                      .concat(i.sourceRoot)
                      .concat(e, ' */');
                  });
                return [n].concat(o).concat([r]).join('\n');
              }
              var s, a, l;
              return [n].join('\n');
            })(t, e);
            return t[2]
              ? '@media '.concat(t[2], ' {').concat(n, '}')
              : n;
          }).join('');
        }),
        (t.i = function (e, n) {
          'string' == typeof e && (e = [[null, e, '']]);
          for (var i = 0; i < e.length; i++) {
            var r = [].concat(e[i]);
            n &&
              (r[2]
                ? (r[2] = ''
                    .concat(n, ' and ')
                    .concat(r[2]))
                : (r[2] = n)),
              t.push(r);
          }
        }),
        t
      );
    };
  },
  function (e, t, n) {
    'use strict';
    n.r(t);
    n(0);
    Element.prototype.matches ||
      (Element.prototype.matches =
        Element.prototype.msMatchesSelector);
    var i, r, o;
    n(1);
    function s(e, t, n) {
      const i = [];
      for (
        ;
        e &&
        null !== e.parentElement &&
        (void 0 === n || i.length < n);

      )
        e instanceof HTMLElement &&
          e.matches(t) &&
          i.push(e),
          (e = e.parentElement);
      return i;
    }
    function a(e, t) {
      const n = s(e, t, 1);
      return n.length ? n[0] : null;
    }
    !(function (e) {
      (e[(e.Backward = -1)] = 'Backward'),
        (e[(e.Forward = 1)] = 'Forward');
    })(i || (i = {})),
      (function (e) {
        (e.Left = 'left'), (e.Right = 'right');
      })(r || (r = {})),
      (function (e) {
        (e.Back = 'back'),
          (e.Close = 'close'),
          (e.Forward = 'forward'),
          (e.Navigate = 'navigate'),
          (e.Open = 'open');
      })(o || (o = {}));
    const l = {
      backLinkAfter: '',
      backLinkBefore: '',
      keyClose: '',
      keyOpen: '',
      position: 'right',
      showBackLink: !0,
      submenuLinkAfter: '',
      submenuLinkBefore: '',
    };
    class c {
      constructor(e, t) {
        if (
          ((this.level = 0),
          (this.isOpen = !1),
          (this.isAnimating = !1),
          (this.lastAction = null),
          null === e)
        )
          throw new Error(
            'Argument `elem` must be a valid HTML node'
          );
        (this.options = Object.assign({}, l, t)),
          (this.menuElem = e),
          (this.wrapperElem =
            document.createElement('div')),
          this.wrapperElem.classList.add(
            c.CLASS_NAMES.wrapper
          );
        const n = this.menuElem.querySelector('ul');
        n &&
          (function (e, t) {
            if (null === e.parentElement)
              throw Error('`elem` has no parentElement');
            e.parentElement.insertBefore(t, e),
              t.appendChild(e);
          })(n, this.wrapperElem),
          this.initMenu(),
          this.initSubmenus(),
          this.initEventHandlers(),
          (this.menuElem._slideMenu = this);
      }
      toggle(e, t = !0) {
        let n;
        if (void 0 === e)
          return this.isOpen ? this.close(t) : this.open(t);
        if (
          ((n = e
            ? 0
            : this.options.position === r.Left
            ? '-100%'
            : '100%'),
          (this.isOpen = e),
          t)
        )
          this.moveSlider(this.menuElem, n, !0);
        else {
          const e = this.moveSlider.bind(
            this,
            this.menuElem,
            n,
            !0
          );
          this.runWithoutAnimation(e);
        }
      }
      open(e = !0) {
        this.triggerEvent(o.Open), this.toggle(!0, e);
      }
      close(e = !0) {
        this.triggerEvent(o.Close), this.toggle(!1, e);
      }
      back() {
        this.navigate(i.Backward);
      }
      destroy() {
        const {
          submenuLinkAfter: e,
          submenuLinkBefore: t,
          showBackLink: n,
        } = this.options;
        if (e || t) {
          Array.from(
            this.wrapperElem.querySelectorAll(
              '.' + c.CLASS_NAMES.decorator
            )
          ).forEach((e) => {
            e.parentElement &&
              e.parentElement.removeChild(e);
          });
        }
        if (n) {
          Array.from(
            this.wrapperElem.querySelectorAll(
              '.' + c.CLASS_NAMES.control
            )
          ).forEach((e) => {
            const t = a(e, 'li');
            t &&
              t.parentElement &&
              t.parentElement.removeChild(t);
          });
        }
        !(function (e) {
          const t = e.parentElement;
          if (null === t)
            throw Error('`elem` has no parentElement');
          for (; e.firstChild; )
            t.insertBefore(e.firstChild, e);
          t.removeChild(e);
        })(this.wrapperElem),
          (this.menuElem.style.cssText = ''),
          this.menuElem
            .querySelectorAll('ul')
            .forEach((e) => (e.style.cssText = '')),
          delete this.menuElem._slideMenu;
      }
      navigateTo(e) {
        if (
          (this.triggerEvent(o.Navigate),
          'string' == typeof e)
        ) {
          const t = document.querySelector(e);
          if (!(t instanceof HTMLElement))
            throw new Error(
              'Invalid parameter `target`. A valid query selector is required.'
            );
          e = t;
        }
        Array.from(
          this.wrapperElem.querySelectorAll(
            '.' + c.CLASS_NAMES.active
          )
        ).forEach((e) => {
          (e.style.display = 'none'),
            e.classList.remove(c.CLASS_NAMES.active);
        });
        const t = s(e, 'ul'),
          n = t.length - 1;
        n >= 0 &&
          n !== this.level &&
          ((this.level = n),
          this.moveSlider(
            this.wrapperElem,
            100 * -this.level
          )),
          t.forEach((e) => {
            (e.style.display = 'block'),
              e.classList.add(c.CLASS_NAMES.active);
          });
      }
      initEventHandlers() {
        Array.from(
          this.menuElem.querySelectorAll('a')
        ).forEach((e) =>
          e.addEventListener('click', (e) => {
            const t = e.target,
              n = t.matches('a') ? t : a(t, 'a');
            n && this.navigate(i.Forward, n);
          })
        ),
          this.menuElem.addEventListener(
            'transitionend',
            this.onTransitionEnd.bind(this)
          ),
          this.wrapperElem.addEventListener(
            'transitionend',
            this.onTransitionEnd.bind(this)
          ),
          this.initKeybindings(),
          this.initSubmenuVisibility();
      }
      onTransitionEnd(e) {
        (e.target !== this.menuElem &&
          e.target !== this.wrapperElem) ||
          ((this.isAnimating = !1),
          this.lastAction &&
            (this.triggerEvent(this.lastAction, !0),
            (this.lastAction = null)));
      }
      initKeybindings() {
        document.addEventListener('keydown', (e) => {
          switch (e.key) {
            case this.options.keyClose:
              this.close();
              break;
            case this.options.keyOpen:
              this.open();
              break;
            default:
              return;
          }
          e.preventDefault();
        });
      }
      initSubmenuVisibility() {
        this.menuElem.addEventListener(
          'sm.back-after',
          () => {
            const e = `.${c.CLASS_NAMES.active} `.repeat(
                this.level + 1
              ),
              t = this.menuElem.querySelector('ul ' + e);
            t &&
              ((t.style.display = 'none'),
              t.classList.remove(c.CLASS_NAMES.active));
          }
        );
      }
      triggerEvent(e, t = !1) {
        this.lastAction = e;
        const n = new CustomEvent(
          `sm.${e}${t ? '-after' : ''}`
        );
        this.menuElem.dispatchEvent(n);
      }
      navigate(e = i.Forward, t) {
        if (
          this.isAnimating ||
          (e === i.Backward && 0 === this.level)
        )
          return;
        const n = -100 * (this.level + e);
        if (
          t &&
          null !== t.parentElement &&
          e === i.Forward
        ) {
          const e = t.parentElement.querySelector('ul');
          if (!e) return;
          e.classList.add(c.CLASS_NAMES.active),
            (e.style.display = 'block');
        }
        const r = e === i.Forward ? o.Forward : o.Back;
        this.triggerEvent(r),
          (this.level = this.level + e),
          this.moveSlider(this.wrapperElem, n);
      }
      moveSlider(e, t, n) {
        'string' == typeof t && (t = Number.parseInt(t)),
          this.options.position !== r.Right ||
            n ||
            (t *= -1),
          (t = t.toString()).includes('%') || (t += '%'),
          (e.style.transform = `translateX(${t})`),
          (this.isAnimating = !0);
      }
      initMenu() {
        this.runWithoutAnimation(() => {
          switch (this.options.position) {
            case r.Left:
              Object.assign(this.menuElem.style, {
                left: 0,
                right: 'auto',
                transform: 'translateX(-100%)',
              });
              break;
            default:
              Object.assign(this.menuElem.style, {
                left: 'auto',
                right: 0,
              });
          }
          this.menuElem.style.display = 'block';
        });
      }
      runWithoutAnimation(e) {
        const t = [this.menuElem, this.wrapperElem];
        t.forEach((e) => (e.style.transition = 'none')),
          e(),
          this.menuElem.offsetHeight,
          t.forEach((e) =>
            e.style.removeProperty('transition')
          ),
          (this.isAnimating = !1);
      }
      initSubmenus() {
        this.menuElem.querySelectorAll('a').forEach((e) => {
          if (null === e.parentElement) return;
          const t = e.parentElement.querySelector('ul');
          if (!t) return;
          e.addEventListener('click', (e) => {
            e.preventDefault();
          });
          const n = e.textContent;
          if (
            (this.addLinkDecorators(e),
            this.options.showBackLink)
          ) {
            const { backLinkBefore: e, backLinkAfter: i } =
                this.options,
              r = document.createElement('a');
            (r.innerHTML = e + n + i),
              r.classList.add(
                c.CLASS_NAMES.backlink,
                c.CLASS_NAMES.control
              ),
              r.setAttribute('data-action', o.Back);
            const s = document.createElement('li');
            s.appendChild(r),
              t.insertBefore(s, t.firstChild);
          }
        });
      }
      addLinkDecorators(e) {
        const {
          submenuLinkBefore: t,
          submenuLinkAfter: n,
        } = this.options;
        if (t) {
          const n = document.createElement('span');
          n.classList.add(c.CLASS_NAMES.decorator),
            (n.innerHTML = t),
            e.insertBefore(n, e.firstChild);
        }
        if (n) {
          const t = document.createElement('span');
          t.classList.add(c.CLASS_NAMES.decorator),
            (t.innerHTML = n),
            e.appendChild(t);
        }
        return e;
      }
    }
    (c.NAMESPACE = 'slide-menu'),
      (c.CLASS_NAMES = {
        active: c.NAMESPACE + '__submenu--active',
        backlink: c.NAMESPACE + '__backlink',
        control: c.NAMESPACE + '__control',
        decorator: c.NAMESPACE + '__decorator',
        wrapper: c.NAMESPACE + '__slider',
      }),
      document.addEventListener('click', (e) => {
        if (!(e.target instanceof HTMLElement)) return;
        const t = e.target.className.includes(
          c.CLASS_NAMES.control
        )
          ? e.target
          : a(e.target, '.' + c.CLASS_NAMES.control);
        if (
          !t ||
          !t.className.includes(c.CLASS_NAMES.control)
        )
          return;
        const n = t.getAttribute('data-target'),
          i =
            n && 'this' !== n
              ? document.getElementById(n)
              : a(t, '.' + c.NAMESPACE);
        if (!i) throw new Error('Unable to find menu ' + n);
        const r = i._slideMenu,
          o = t.getAttribute('data-action'),
          s = t.getAttribute('data-arg');
        r &&
          o &&
          'function' == typeof r[o] &&
          (s ? r[o](s) : r[o]());
      }),
      (window.SlideMenu = c);
  },
]);
