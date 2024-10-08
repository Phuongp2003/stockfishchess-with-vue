var So = Object.defineProperty;
var Co = (e, t, r) => t in e ? So(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var T = (e, t, r) => Co(e, typeof t != "symbol" ? t + "" : t, r);
import { defineComponent as gr, ref as ko, reactive as jt, onMounted as Eo, watch as To, openBlock as q, createElementBlock as he, normalizeClass as Ue, createElementVNode as R, createBlock as ue, createCommentVNode as De, Fragment as Po, renderList as Ao, nextTick as Ro, toDisplayString as br, resolveComponent as je, Teleport as tt, createVNode as rt, normalizeStyle as Oo, createTextVNode as $t, withDirectives as Mo, vModelCheckbox as xo } from "vue";
const No = {
  class: "promotion-dialog",
  open: ""
}, Lo = ["aria-label", "onClick", "onTouchstartPassive"], Bo = /* @__PURE__ */ gr({
  __name: "PromotionDialog",
  props: {
    state: {}
  },
  emits: ["promotionSelected"],
  setup(e, { emit: t }) {
    const r = e, o = [
      { name: "Queen", data: "q" },
      { name: "Knight", data: "n" },
      { name: "Rook", data: "r" },
      { name: "Bishop", data: "b" }
    ];
    function n(s) {
      var i, a;
      (a = (i = r.state).callback) == null || a.call(i, s.data), t("promotionSelected");
    }
    return (s, i) => (q(), he("dialog", No, [
      (q(), he(Po, null, Ao(o, (a) => R("button", {
        key: a.name,
        type: "button",
        class: Ue([a.name.toLowerCase(), s.state.color]),
        "aria-label": a.name,
        onClick: (l) => n(a),
        onTouchstartPassive: (l) => n(a)
      }, null, 42, Lo)), 64))
    ]));
  }
});
/**
 * @license
 * Copyright (c) 2023, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */
const B = "w", W = "b", x = "p", ft = "n", Ie = "b", Ee = "r", ie = "q", N = "k", ot = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", K = -1, Do = {
  NORMAL: "n",
  CAPTURE: "c",
  BIG_PAWN: "b",
  EP_CAPTURE: "e",
  PROMOTION: "p",
  KSIDE_CASTLE: "k",
  QSIDE_CASTLE: "q"
}, Io = [
  "a8",
  "b8",
  "c8",
  "d8",
  "e8",
  "f8",
  "g8",
  "h8",
  "a7",
  "b7",
  "c7",
  "d7",
  "e7",
  "f7",
  "g7",
  "h7",
  "a6",
  "b6",
  "c6",
  "d6",
  "e6",
  "f6",
  "g6",
  "h6",
  "a5",
  "b5",
  "c5",
  "d5",
  "e5",
  "f5",
  "g5",
  "h5",
  "a4",
  "b4",
  "c4",
  "d4",
  "e4",
  "f4",
  "g4",
  "h4",
  "a3",
  "b3",
  "c3",
  "d3",
  "e3",
  "f3",
  "g3",
  "h3",
  "a2",
  "b2",
  "c2",
  "d2",
  "e2",
  "f2",
  "g2",
  "h2",
  "a1",
  "b1",
  "c1",
  "d1",
  "e1",
  "f1",
  "g1",
  "h1"
], w = {
  NORMAL: 1,
  CAPTURE: 2,
  BIG_PAWN: 4,
  EP_CAPTURE: 8,
  PROMOTION: 16,
  KSIDE_CASTLE: 32,
  QSIDE_CASTLE: 64
}, _ = {
  a8: 0,
  b8: 1,
  c8: 2,
  d8: 3,
  e8: 4,
  f8: 5,
  g8: 6,
  h8: 7,
  a7: 16,
  b7: 17,
  c7: 18,
  d7: 19,
  e7: 20,
  f7: 21,
  g7: 22,
  h7: 23,
  a6: 32,
  b6: 33,
  c6: 34,
  d6: 35,
  e6: 36,
  f6: 37,
  g6: 38,
  h6: 39,
  a5: 48,
  b5: 49,
  c5: 50,
  d5: 51,
  e5: 52,
  f5: 53,
  g5: 54,
  h5: 55,
  a4: 64,
  b4: 65,
  c4: 66,
  d4: 67,
  e4: 68,
  f4: 69,
  g4: 70,
  h4: 71,
  a3: 80,
  b3: 81,
  c3: 82,
  d3: 83,
  e3: 84,
  f3: 85,
  g3: 86,
  h3: 87,
  a2: 96,
  b2: 97,
  c2: 98,
  d2: 99,
  e2: 100,
  f2: 101,
  g2: 102,
  h2: 103,
  a1: 112,
  b1: 113,
  c1: 114,
  d1: 115,
  e1: 116,
  f1: 117,
  g1: 118,
  h1: 119
}, nt = {
  b: [16, 32, 17, 15],
  w: [-16, -32, -17, -15]
}, Kt = {
  n: [-18, -33, -31, -14, 18, 33, 31, 14],
  b: [-17, -15, 17, 15],
  r: [-16, 1, 16, -1],
  q: [-17, -16, -15, 1, 17, 16, 15, -1],
  k: [-17, -16, -15, 1, 17, 16, 15, -1]
}, qo = [
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  24,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  2,
  24,
  2,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  53,
  56,
  53,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  24,
  24,
  24,
  24,
  24,
  56,
  0,
  56,
  24,
  24,
  24,
  24,
  24,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  2,
  53,
  56,
  53,
  2,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  2,
  24,
  2,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  24,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  20,
  0,
  0,
  20,
  0,
  0,
  0,
  0,
  0,
  0,
  24,
  0,
  0,
  0,
  0,
  0,
  0,
  20
], Fo = [
  17,
  0,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  17,
  0,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  0,
  16,
  0,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  0,
  16,
  0,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  0,
  16,
  0,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  17,
  16,
  15,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  0,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  -16,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  -16,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  -16,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  -17,
  0,
  0,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  0,
  -17,
  0,
  0,
  -15,
  0,
  0,
  0,
  0,
  0,
  0,
  -16,
  0,
  0,
  0,
  0,
  0,
  0,
  -17
], Uo = { p: 1, n: 2, b: 4, r: 8, q: 16, k: 32 }, jo = "pnbrqkPNBRQK", Ht = [ft, Ie, Ee, ie], $o = 7, Ko = 6, Ho = 1, Vo = 0, Le = {
  [N]: w.KSIDE_CASTLE,
  [ie]: w.QSIDE_CASTLE
}, re = {
  w: [
    { square: _.a1, flag: w.QSIDE_CASTLE },
    { square: _.h1, flag: w.KSIDE_CASTLE }
  ],
  b: [
    { square: _.a8, flag: w.QSIDE_CASTLE },
    { square: _.h8, flag: w.KSIDE_CASTLE }
  ]
}, Wo = { b: Ho, w: Ko }, zo = ["1-0", "0-1", "1/2-1/2", "*"];
function fe(e) {
  return e >> 4;
}
function Te(e) {
  return e & 15;
}
function yr(e) {
  return "0123456789".indexOf(e) !== -1;
}
function H(e) {
  const t = Te(e), r = fe(e);
  return "abcdefgh".substring(t, t + 1) + "87654321".substring(r, r + 1);
}
function _e(e) {
  return e === B ? W : B;
}
function Go(e) {
  const t = e.split(/\s+/);
  if (t.length !== 6)
    return {
      ok: !1,
      error: "Invalid FEN: must contain six space-delimited fields"
    };
  const r = parseInt(t[5], 10);
  if (isNaN(r) || r <= 0)
    return {
      ok: !1,
      error: "Invalid FEN: move number must be a positive integer"
    };
  const o = parseInt(t[4], 10);
  if (isNaN(o) || o < 0)
    return {
      ok: !1,
      error: "Invalid FEN: half move counter number must be a non-negative integer"
    };
  if (!/^(-|[abcdefgh][36])$/.test(t[3]))
    return { ok: !1, error: "Invalid FEN: en-passant square is invalid" };
  if (/[^kKqQ-]/.test(t[2]))
    return { ok: !1, error: "Invalid FEN: castling availability is invalid" };
  if (!/^(w|b)$/.test(t[1]))
    return { ok: !1, error: "Invalid FEN: side-to-move is invalid" };
  const n = t[0].split("/");
  if (n.length !== 8)
    return {
      ok: !1,
      error: "Invalid FEN: piece data does not contain 8 '/'-delimited rows"
    };
  for (let i = 0; i < n.length; i++) {
    let a = 0, l = !1;
    for (let c = 0; c < n[i].length; c++)
      if (yr(n[i][c])) {
        if (l)
          return {
            ok: !1,
            error: "Invalid FEN: piece data is invalid (consecutive number)"
          };
        a += parseInt(n[i][c], 10), l = !0;
      } else {
        if (!/^[prnbqkPRNBQK]$/.test(n[i][c]))
          return {
            ok: !1,
            error: "Invalid FEN: piece data is invalid (invalid piece)"
          };
        a += 1, l = !1;
      }
    if (a !== 8)
      return {
        ok: !1,
        error: "Invalid FEN: piece data is invalid (too many squares in rank)"
      };
  }
  if (t[3][1] == "3" && t[1] == "w" || t[3][1] == "6" && t[1] == "b")
    return { ok: !1, error: "Invalid FEN: illegal en-passant square" };
  const s = [
    { color: "white", regex: /K/g },
    { color: "black", regex: /k/g }
  ];
  for (const { color: i, regex: a } of s) {
    if (!a.test(t[0]))
      return { ok: !1, error: `Invalid FEN: missing ${i} king` };
    if ((t[0].match(a) || []).length > 1)
      return { ok: !1, error: `Invalid FEN: too many ${i} kings` };
  }
  return { ok: !0 };
}
function Qo(e, t) {
  const r = e.from, o = e.to, n = e.piece;
  let s = 0, i = 0, a = 0;
  for (let l = 0, c = t.length; l < c; l++) {
    const u = t[l].from, f = t[l].to, p = t[l].piece;
    n === p && r !== u && o === f && (s++, fe(r) === fe(u) && i++, Te(r) === Te(u) && a++);
  }
  return s > 0 ? i > 0 && a > 0 ? H(r) : a > 0 ? H(r).charAt(1) : H(r).charAt(0) : "";
}
function oe(e, t, r, o, n, s = void 0, i = w.NORMAL) {
  const a = fe(o);
  if (n === x && (a === $o || a === Vo))
    for (let l = 0; l < Ht.length; l++) {
      const c = Ht[l];
      e.push({
        color: t,
        from: r,
        to: o,
        piece: n,
        captured: s,
        promotion: c,
        flags: i | w.PROMOTION
      });
    }
  else
    e.push({
      color: t,
      from: r,
      to: o,
      piece: n,
      captured: s,
      flags: i
    });
}
function Vt(e) {
  let t = e.charAt(0);
  return t >= "a" && t <= "h" ? e.match(/[a-h]\d.*[a-h]\d/) ? void 0 : x : (t = t.toLowerCase(), t === "o" ? N : t);
}
function st(e) {
  return e.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
}
class Jo {
  constructor(t = ot) {
    T(this, "_board", new Array(128));
    T(this, "_turn", B);
    T(this, "_header", {});
    T(this, "_kings", { w: K, b: K });
    T(this, "_epSquare", -1);
    T(this, "_halfMoves", 0);
    T(this, "_moveNumber", 0);
    T(this, "_history", []);
    T(this, "_comments", {});
    T(this, "_castling", { w: 0, b: 0 });
    this.load(t);
  }
  clear(t = !1) {
    this._board = new Array(128), this._kings = { w: K, b: K }, this._turn = B, this._castling = { w: 0, b: 0 }, this._epSquare = K, this._halfMoves = 0, this._moveNumber = 1, this._history = [], this._comments = {}, this._header = t ? this._header : {}, this._updateSetup(this.fen());
  }
  removeHeader(t) {
    t in this._header && delete this._header[t];
  }
  load(t, r = !1) {
    let o = t.split(/\s+/);
    if (o.length >= 2 && o.length < 6) {
      const l = ["-", "-", "0", "1"];
      t = o.concat(l.slice(-(6 - o.length))).join(" ");
    }
    o = t.split(/\s+/);
    const { ok: n, error: s } = Go(t);
    if (!n)
      throw new Error(s);
    const i = o[0];
    let a = 0;
    this.clear(r);
    for (let l = 0; l < i.length; l++) {
      const c = i.charAt(l);
      if (c === "/")
        a += 8;
      else if (yr(c))
        a += parseInt(c, 10);
      else {
        const u = c < "a" ? B : W;
        this.put({ type: c.toLowerCase(), color: u }, H(a)), a++;
      }
    }
    this._turn = o[1], o[2].indexOf("K") > -1 && (this._castling.w |= w.KSIDE_CASTLE), o[2].indexOf("Q") > -1 && (this._castling.w |= w.QSIDE_CASTLE), o[2].indexOf("k") > -1 && (this._castling.b |= w.KSIDE_CASTLE), o[2].indexOf("q") > -1 && (this._castling.b |= w.QSIDE_CASTLE), this._epSquare = o[3] === "-" ? K : _[o[3]], this._halfMoves = parseInt(o[4], 10), this._moveNumber = parseInt(o[5], 10), this._updateSetup(this.fen());
  }
  fen() {
    var s, i;
    let t = 0, r = "";
    for (let a = _.a8; a <= _.h1; a++) {
      if (this._board[a]) {
        t > 0 && (r += t, t = 0);
        const { color: l, type: c } = this._board[a];
        r += l === B ? c.toUpperCase() : c.toLowerCase();
      } else
        t++;
      a + 1 & 136 && (t > 0 && (r += t), a !== _.h1 && (r += "/"), t = 0, a += 8);
    }
    let o = "";
    this._castling[B] & w.KSIDE_CASTLE && (o += "K"), this._castling[B] & w.QSIDE_CASTLE && (o += "Q"), this._castling[W] & w.KSIDE_CASTLE && (o += "k"), this._castling[W] & w.QSIDE_CASTLE && (o += "q"), o = o || "-";
    let n = "-";
    if (this._epSquare !== K) {
      const a = this._epSquare + (this._turn === B ? 16 : -16), l = [a + 1, a - 1];
      for (const c of l) {
        if (c & 136)
          continue;
        const u = this._turn;
        if (((s = this._board[c]) == null ? void 0 : s.color) === u && ((i = this._board[c]) == null ? void 0 : i.type) === x) {
          this._makeMove({
            color: u,
            from: c,
            to: this._epSquare,
            piece: x,
            captured: x,
            flags: w.EP_CAPTURE
          });
          const f = !this._isKingAttacked(u);
          if (this._undoMove(), f) {
            n = H(this._epSquare);
            break;
          }
        }
      }
    }
    return [
      r,
      this._turn,
      o,
      n,
      this._halfMoves,
      this._moveNumber
    ].join(" ");
  }
  /*
   * Called when the initial board setup is changed with put() or remove().
   * modifies the SetUp and FEN properties of the header object. If the FEN
   * is equal to the default position, the SetUp and FEN are deleted the setup
   * is only updated if history.length is zero, ie moves haven't been made.
   */
  _updateSetup(t) {
    this._history.length > 0 || (t !== ot ? (this._header.SetUp = "1", this._header.FEN = t) : (delete this._header.SetUp, delete this._header.FEN));
  }
  reset() {
    this.load(ot);
  }
  get(t) {
    return this._board[_[t]] || !1;
  }
  put({ type: t, color: r }, o) {
    if (jo.indexOf(t.toLowerCase()) === -1 || !(o in _))
      return !1;
    const n = _[o];
    return t == N && !(this._kings[r] == K || this._kings[r] == n) ? !1 : (this._board[n] = { type: t, color: r }, t === N && (this._kings[r] = n), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), !0);
  }
  remove(t) {
    const r = this.get(t);
    return delete this._board[_[t]], r && r.type === N && (this._kings[r.color] = K), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), r;
  }
  _updateCastlingRights() {
    var o, n, s, i, a, l, c, u, f, p, y, d;
    const t = ((o = this._board[_.e1]) == null ? void 0 : o.type) === N && ((n = this._board[_.e1]) == null ? void 0 : n.color) === B, r = ((s = this._board[_.e8]) == null ? void 0 : s.type) === N && ((i = this._board[_.e8]) == null ? void 0 : i.color) === W;
    (!t || ((a = this._board[_.a1]) == null ? void 0 : a.type) !== Ee || ((l = this._board[_.a1]) == null ? void 0 : l.color) !== B) && (this._castling.w &= ~w.QSIDE_CASTLE), (!t || ((c = this._board[_.h1]) == null ? void 0 : c.type) !== Ee || ((u = this._board[_.h1]) == null ? void 0 : u.color) !== B) && (this._castling.w &= ~w.KSIDE_CASTLE), (!r || ((f = this._board[_.a8]) == null ? void 0 : f.type) !== Ee || ((p = this._board[_.a8]) == null ? void 0 : p.color) !== W) && (this._castling.b &= ~w.QSIDE_CASTLE), (!r || ((y = this._board[_.h8]) == null ? void 0 : y.type) !== Ee || ((d = this._board[_.h8]) == null ? void 0 : d.color) !== W) && (this._castling.b &= ~w.KSIDE_CASTLE);
  }
  _updateEnPassantSquare() {
    var s, i;
    if (this._epSquare === K)
      return;
    const t = this._epSquare + (this._turn === B ? -16 : 16), r = this._epSquare + (this._turn === B ? 16 : -16), o = [r + 1, r - 1];
    if (this._board[t] !== null || this._board[this._epSquare] !== null || ((s = this._board[r]) == null ? void 0 : s.color) !== _e(this._turn) || ((i = this._board[r]) == null ? void 0 : i.type) !== x) {
      this._epSquare = K;
      return;
    }
    const n = (a) => {
      var l, c;
      return !(a & 136) && ((l = this._board[a]) == null ? void 0 : l.color) === this._turn && ((c = this._board[a]) == null ? void 0 : c.type) === x;
    };
    o.some(n) || (this._epSquare = K);
  }
  _attacked(t, r) {
    for (let o = _.a8; o <= _.h1; o++) {
      if (o & 136) {
        o += 7;
        continue;
      }
      if (this._board[o] === void 0 || this._board[o].color !== t)
        continue;
      const n = this._board[o], s = o - r;
      if (s === 0)
        continue;
      const i = s + 119;
      if (qo[i] & Uo[n.type]) {
        if (n.type === x) {
          if (s > 0) {
            if (n.color === B)
              return !0;
          } else if (n.color === W)
            return !0;
          continue;
        }
        if (n.type === "n" || n.type === "k")
          return !0;
        const a = Fo[i];
        let l = o + a, c = !1;
        for (; l !== r; ) {
          if (this._board[l] != null) {
            c = !0;
            break;
          }
          l += a;
        }
        if (!c)
          return !0;
      }
    }
    return !1;
  }
  _isKingAttacked(t) {
    const r = this._kings[t];
    return r === -1 ? !1 : this._attacked(_e(t), r);
  }
  isAttacked(t, r) {
    return this._attacked(r, _[t]);
  }
  isCheck() {
    return this._isKingAttacked(this._turn);
  }
  inCheck() {
    return this.isCheck();
  }
  isCheckmate() {
    return this.isCheck() && this._moves().length === 0;
  }
  isStalemate() {
    return !this.isCheck() && this._moves().length === 0;
  }
  isInsufficientMaterial() {
    const t = {
      b: 0,
      n: 0,
      r: 0,
      q: 0,
      k: 0,
      p: 0
    }, r = [];
    let o = 0, n = 0;
    for (let s = _.a8; s <= _.h1; s++) {
      if (n = (n + 1) % 2, s & 136) {
        s += 7;
        continue;
      }
      const i = this._board[s];
      i && (t[i.type] = i.type in t ? t[i.type] + 1 : 1, i.type === Ie && r.push(n), o++);
    }
    if (o === 2 || // k vs. kn .... or .... k vs. kb
    o === 3 && (t[Ie] === 1 || t[ft] === 1))
      return !0;
    if (o === t[Ie] + 2) {
      let s = 0;
      const i = r.length;
      for (let a = 0; a < i; a++)
        s += r[a];
      if (s === 0 || s === i)
        return !0;
    }
    return !1;
  }
  isThreefoldRepetition() {
    const t = [], r = {};
    let o = !1;
    for (; ; ) {
      const n = this._undoMove();
      if (!n)
        break;
      t.push(n);
    }
    for (; ; ) {
      const n = this.fen().split(" ").slice(0, 4).join(" ");
      r[n] = n in r ? r[n] + 1 : 1, r[n] >= 3 && (o = !0);
      const s = t.pop();
      if (s)
        this._makeMove(s);
      else
        break;
    }
    return o;
  }
  isDraw() {
    return this._halfMoves >= 100 || // 50 moves per side = 100 half moves
    this.isStalemate() || this.isInsufficientMaterial() || this.isThreefoldRepetition();
  }
  isGameOver() {
    return this.isCheckmate() || this.isStalemate() || this.isDraw();
  }
  moves({ verbose: t = !1, square: r = void 0, piece: o = void 0 } = {}) {
    const n = this._moves({ square: r, piece: o });
    return t ? n.map((s) => this._makePretty(s)) : n.map((s) => this._moveToSan(s, n));
  }
  _moves({ legal: t = !0, piece: r = void 0, square: o = void 0 } = {}) {
    var y;
    const n = o ? o.toLowerCase() : void 0, s = r == null ? void 0 : r.toLowerCase(), i = [], a = this._turn, l = _e(a);
    let c = _.a8, u = _.h1, f = !1;
    if (n)
      if (n in _)
        c = u = _[n], f = !0;
      else
        return [];
    for (let d = c; d <= u; d++) {
      if (d & 136) {
        d += 7;
        continue;
      }
      if (!this._board[d] || this._board[d].color === l)
        continue;
      const { type: m } = this._board[d];
      let g;
      if (m === x) {
        if (s && s !== m)
          continue;
        g = d + nt[a][0], this._board[g] || (oe(i, a, d, g, x), g = d + nt[a][1], Wo[a] === fe(d) && !this._board[g] && oe(i, a, d, g, x, void 0, w.BIG_PAWN));
        for (let v = 2; v < 4; v++)
          g = d + nt[a][v], !(g & 136) && (((y = this._board[g]) == null ? void 0 : y.color) === l ? oe(i, a, d, g, x, this._board[g].type, w.CAPTURE) : g === this._epSquare && oe(i, a, d, g, x, x, w.EP_CAPTURE));
      } else {
        if (s && s !== m)
          continue;
        for (let v = 0, b = Kt[m].length; v < b; v++) {
          const C = Kt[m][v];
          for (g = d; g += C, !(g & 136); ) {
            if (!this._board[g])
              oe(i, a, d, g, m);
            else {
              if (this._board[g].color === a)
                break;
              oe(i, a, d, g, m, this._board[g].type, w.CAPTURE);
              break;
            }
            if (m === ft || m === N)
              break;
          }
        }
      }
    }
    if ((s === void 0 || s === N) && (!f || u === this._kings[a])) {
      if (this._castling[a] & w.KSIDE_CASTLE) {
        const d = this._kings[a], m = d + 2;
        !this._board[d + 1] && !this._board[m] && !this._attacked(l, this._kings[a]) && !this._attacked(l, d + 1) && !this._attacked(l, m) && oe(i, a, this._kings[a], m, N, void 0, w.KSIDE_CASTLE);
      }
      if (this._castling[a] & w.QSIDE_CASTLE) {
        const d = this._kings[a], m = d - 2;
        !this._board[d - 1] && !this._board[d - 2] && !this._board[d - 3] && !this._attacked(l, this._kings[a]) && !this._attacked(l, d - 1) && !this._attacked(l, m) && oe(i, a, this._kings[a], m, N, void 0, w.QSIDE_CASTLE);
      }
    }
    if (!t || this._kings[a] === -1)
      return i;
    const p = [];
    for (let d = 0, m = i.length; d < m; d++)
      this._makeMove(i[d]), this._isKingAttacked(a) || p.push(i[d]), this._undoMove();
    return p;
  }
  move(t, { strict: r = !1 } = {}) {
    let o = null;
    if (typeof t == "string")
      o = this._moveFromSan(t, r);
    else if (typeof t == "object") {
      const s = this._moves();
      for (let i = 0, a = s.length; i < a; i++)
        if (t.from === H(s[i].from) && t.to === H(s[i].to) && (!("promotion" in s[i]) || t.promotion === s[i].promotion)) {
          o = s[i];
          break;
        }
    }
    if (!o)
      throw typeof t == "string" ? new Error(`Invalid move: ${t}`) : new Error(`Invalid move: ${JSON.stringify(t)}`);
    const n = this._makePretty(o);
    return this._makeMove(o), n;
  }
  _push(t) {
    this._history.push({
      move: t,
      kings: { b: this._kings.b, w: this._kings.w },
      turn: this._turn,
      castling: { b: this._castling.b, w: this._castling.w },
      epSquare: this._epSquare,
      halfMoves: this._halfMoves,
      moveNumber: this._moveNumber
    });
  }
  _makeMove(t) {
    const r = this._turn, o = _e(r);
    if (this._push(t), this._board[t.to] = this._board[t.from], delete this._board[t.from], t.flags & w.EP_CAPTURE && (this._turn === W ? delete this._board[t.to - 16] : delete this._board[t.to + 16]), t.promotion && (this._board[t.to] = { type: t.promotion, color: r }), this._board[t.to].type === N) {
      if (this._kings[r] = t.to, t.flags & w.KSIDE_CASTLE) {
        const n = t.to - 1, s = t.to + 1;
        this._board[n] = this._board[s], delete this._board[s];
      } else if (t.flags & w.QSIDE_CASTLE) {
        const n = t.to + 1, s = t.to - 2;
        this._board[n] = this._board[s], delete this._board[s];
      }
      this._castling[r] = 0;
    }
    if (this._castling[r]) {
      for (let n = 0, s = re[r].length; n < s; n++)
        if (t.from === re[r][n].square && this._castling[r] & re[r][n].flag) {
          this._castling[r] ^= re[r][n].flag;
          break;
        }
    }
    if (this._castling[o]) {
      for (let n = 0, s = re[o].length; n < s; n++)
        if (t.to === re[o][n].square && this._castling[o] & re[o][n].flag) {
          this._castling[o] ^= re[o][n].flag;
          break;
        }
    }
    t.flags & w.BIG_PAWN ? r === W ? this._epSquare = t.to - 16 : this._epSquare = t.to + 16 : this._epSquare = K, t.piece === x ? this._halfMoves = 0 : t.flags & (w.CAPTURE | w.EP_CAPTURE) ? this._halfMoves = 0 : this._halfMoves++, r === W && this._moveNumber++, this._turn = o;
  }
  undo() {
    const t = this._undoMove();
    return t ? this._makePretty(t) : null;
  }
  _undoMove() {
    const t = this._history.pop();
    if (t === void 0)
      return null;
    const r = t.move;
    this._kings = t.kings, this._turn = t.turn, this._castling = t.castling, this._epSquare = t.epSquare, this._halfMoves = t.halfMoves, this._moveNumber = t.moveNumber;
    const o = this._turn, n = _e(o);
    if (this._board[r.from] = this._board[r.to], this._board[r.from].type = r.piece, delete this._board[r.to], r.captured)
      if (r.flags & w.EP_CAPTURE) {
        let s;
        o === W ? s = r.to - 16 : s = r.to + 16, this._board[s] = { type: x, color: n };
      } else
        this._board[r.to] = { type: r.captured, color: n };
    if (r.flags & (w.KSIDE_CASTLE | w.QSIDE_CASTLE)) {
      let s, i;
      r.flags & w.KSIDE_CASTLE ? (s = r.to + 1, i = r.to - 1) : (s = r.to - 2, i = r.to + 1), this._board[s] = this._board[i], delete this._board[i];
    }
    return r;
  }
  pgn({ newline: t = `
`, maxWidth: r = 0 } = {}) {
    const o = [];
    let n = !1;
    for (const p in this._header)
      o.push("[" + p + ' "' + this._header[p] + '"]' + t), n = !0;
    n && this._history.length && o.push(t);
    const s = (p) => {
      const y = this._comments[this.fen()];
      if (typeof y < "u") {
        const d = p.length > 0 ? " " : "";
        p = `${p}${d}{${y}}`;
      }
      return p;
    }, i = [];
    for (; this._history.length > 0; )
      i.push(this._undoMove());
    const a = [];
    let l = "";
    for (i.length === 0 && a.push(s("")); i.length > 0; ) {
      l = s(l);
      const p = i.pop();
      if (!p)
        break;
      if (!this._history.length && p.color === "b") {
        const y = `${this._moveNumber}. ...`;
        l = l ? `${l} ${y}` : y;
      } else
        p.color === "w" && (l.length && a.push(l), l = this._moveNumber + ".");
      l = l + " " + this._moveToSan(p, this._moves({ legal: !0 })), this._makeMove(p);
    }
    if (l.length && a.push(s(l)), typeof this._header.Result < "u" && a.push(this._header.Result), r === 0)
      return o.join("") + a.join(" ");
    const c = function() {
      return o.length > 0 && o[o.length - 1] === " " ? (o.pop(), !0) : !1;
    }, u = function(p, y) {
      for (const d of y.split(" "))
        if (d) {
          if (p + d.length > r) {
            for (; c(); )
              p--;
            o.push(t), p = 0;
          }
          o.push(d), p += d.length, o.push(" "), p++;
        }
      return c() && p--, p;
    };
    let f = 0;
    for (let p = 0; p < a.length; p++) {
      if (f + a[p].length > r && a[p].includes("{")) {
        f = u(f, a[p]);
        continue;
      }
      f + a[p].length > r && p !== 0 ? (o[o.length - 1] === " " && o.pop(), o.push(t), f = 0) : p !== 0 && (o.push(" "), f++), o.push(a[p]), f += a[p].length;
    }
    return o.join("");
  }
  header(...t) {
    for (let r = 0; r < t.length; r += 2)
      typeof t[r] == "string" && typeof t[r + 1] == "string" && (this._header[t[r]] = t[r + 1]);
    return this._header;
  }
  loadPgn(t, { strict: r = !1, newlineChar: o = `\r?
` } = {}) {
    function n(b) {
      return b.replace(/\\/g, "\\");
    }
    function s(b) {
      const C = {}, A = b.split(new RegExp(n(o)));
      let E = "", D = "";
      for (let L = 0; L < A.length; L++) {
        const k = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
        E = A[L].replace(k, "$1"), D = A[L].replace(k, "$2"), E.trim().length > 0 && (C[E] = D);
      }
      return C;
    }
    t = t.trim();
    const i = new RegExp("^(\\[((?:" + n(o) + ")|.)*\\])((?:\\s*" + n(o) + "){2}|(?:\\s*" + n(o) + ")*$)").exec(t), a = i && i.length >= 2 ? i[1] : "";
    this.reset();
    const l = s(a);
    let c = "";
    for (const b in l)
      b.toLowerCase() === "fen" && (c = l[b]), this.header(b, l[b]);
    if (!r)
      c && this.load(c, !0);
    else if (l.SetUp === "1") {
      if (!("FEN" in l))
        throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
      this.load(l.FEN, !0);
    }
    function u(b) {
      return Array.from(b).map(function(C) {
        return C.charCodeAt(0) < 128 ? C.charCodeAt(0).toString(16) : encodeURIComponent(C).replace(/%/g, "").toLowerCase();
      }).join("");
    }
    function f(b) {
      return b.length == 0 ? "" : decodeURIComponent("%" + (b.match(/.{1,2}/g) || []).join("%"));
    }
    const p = function(b) {
      return b = b.replace(new RegExp(n(o), "g"), " "), `{${u(b.slice(1, b.length - 1))}}`;
    }, y = function(b) {
      if (b.startsWith("{") && b.endsWith("}"))
        return f(b.slice(1, b.length - 1));
    };
    let d = t.replace(a, "").replace(
      // encode comments so they don't get deleted below
      new RegExp(`({[^}]*})+?|;([^${n(o)}]*)`, "g"),
      function(b, C, A) {
        return C !== void 0 ? p(C) : " " + p(`{${A.slice(1)}}`);
      }
    ).replace(new RegExp(n(o), "g"), " ");
    const m = /(\([^()]+\))+?/g;
    for (; m.test(d); )
      d = d.replace(m, "");
    d = d.replace(/\d+\.(\.\.)?/g, ""), d = d.replace(/\.\.\./g, ""), d = d.replace(/\$\d+/g, "");
    let g = d.trim().split(new RegExp(/\s+/));
    g = g.filter((b) => b !== "");
    let v = "";
    for (let b = 0; b < g.length; b++) {
      const C = y(g[b]);
      if (C !== void 0) {
        this._comments[this.fen()] = C;
        continue;
      }
      const A = this._moveFromSan(g[b], r);
      if (A == null)
        if (zo.indexOf(g[b]) > -1)
          v = g[b];
        else
          throw new Error(`Invalid move in PGN: ${g[b]}`);
      else
        v = "", this._makeMove(A);
    }
    v && Object.keys(this._header).length && !this._header.Result && this.header("Result", v);
  }
  /*
   * Convert a move from 0x88 coordinates to Standard Algebraic Notation
   * (SAN)
   *
   * @param {boolean} strict Use the strict SAN parser. It will throw errors
   * on overly disambiguated moves (see below):
   *
   * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
   * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
   * 4. ... Ne7 is technically the valid SAN
   */
  _moveToSan(t, r) {
    let o = "";
    if (t.flags & w.KSIDE_CASTLE)
      o = "O-O";
    else if (t.flags & w.QSIDE_CASTLE)
      o = "O-O-O";
    else {
      if (t.piece !== x) {
        const n = Qo(t, r);
        o += t.piece.toUpperCase() + n;
      }
      t.flags & (w.CAPTURE | w.EP_CAPTURE) && (t.piece === x && (o += H(t.from)[0]), o += "x"), o += H(t.to), t.promotion && (o += "=" + t.promotion.toUpperCase());
    }
    return this._makeMove(t), this.isCheck() && (this.isCheckmate() ? o += "#" : o += "+"), this._undoMove(), o;
  }
  // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
  _moveFromSan(t, r = !1) {
    const o = st(t);
    let n = Vt(o), s = this._moves({ legal: !0, piece: n });
    for (let p = 0, y = s.length; p < y; p++)
      if (o === st(this._moveToSan(s[p], s)))
        return s[p];
    if (r)
      return null;
    let i, a, l, c, u, f = !1;
    if (a = o.match(
      /([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/
      //     piece         from              to       promotion
    ), a ? (i = a[1], l = a[2], c = a[3], u = a[4], l.length == 1 && (f = !0)) : (a = o.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), a && (i = a[1], l = a[2], c = a[3], u = a[4], l.length == 1 && (f = !0))), n = Vt(o), s = this._moves({
      legal: !0,
      piece: i || n
    }), !c)
      return null;
    for (let p = 0, y = s.length; p < y; p++)
      if (l) {
        if ((!i || i.toLowerCase() == s[p].piece) && _[l] == s[p].from && _[c] == s[p].to && (!u || u.toLowerCase() == s[p].promotion))
          return s[p];
        if (f) {
          const d = H(s[p].from);
          if ((!i || i.toLowerCase() == s[p].piece) && _[c] == s[p].to && (l == d[0] || l == d[1]) && (!u || u.toLowerCase() == s[p].promotion))
            return s[p];
        }
      } else if (o === st(this._moveToSan(s[p], s)).replace("x", ""))
        return s[p];
    return null;
  }
  ascii() {
    let t = `   +------------------------+
`;
    for (let r = _.a8; r <= _.h1; r++) {
      if (Te(r) === 0 && (t += " " + "87654321"[fe(r)] + " |"), this._board[r]) {
        const o = this._board[r].type, n = this._board[r].color === B ? o.toUpperCase() : o.toLowerCase();
        t += " " + n + " ";
      } else
        t += " . ";
      r + 1 & 136 && (t += `|
`, r += 8);
    }
    return t += `   +------------------------+
`, t += "     a  b  c  d  e  f  g  h", t;
  }
  perft(t) {
    const r = this._moves({ legal: !1 });
    let o = 0;
    const n = this._turn;
    for (let s = 0, i = r.length; s < i; s++)
      this._makeMove(r[s]), this._isKingAttacked(n) || (t - 1 > 0 ? o += this.perft(t - 1) : o++), this._undoMove();
    return o;
  }
  // pretty = external move object
  _makePretty(t) {
    const { color: r, piece: o, from: n, to: s, flags: i, captured: a, promotion: l } = t;
    let c = "";
    for (const y in w)
      w[y] & i && (c += Do[y]);
    const u = H(n), f = H(s), p = {
      color: r,
      piece: o,
      from: u,
      to: f,
      san: this._moveToSan(t, this._moves({ legal: !0 })),
      flags: c,
      lan: u + f,
      before: this.fen(),
      after: ""
    };
    return this._makeMove(t), p.after = this.fen(), this._undoMove(), a && (p.captured = a), l && (p.promotion = l, p.lan += l), p;
  }
  turn() {
    return this._turn;
  }
  board() {
    const t = [];
    let r = [];
    for (let o = _.a8; o <= _.h1; o++)
      this._board[o] == null ? r.push(null) : r.push({
        square: H(o),
        type: this._board[o].type,
        color: this._board[o].color
      }), o + 1 & 136 && (t.push(r), r = [], o += 8);
    return t;
  }
  squareColor(t) {
    if (t in _) {
      const r = _[t];
      return (fe(r) + Te(r)) % 2 === 0 ? "light" : "dark";
    }
    return null;
  }
  history({ verbose: t = !1 } = {}) {
    const r = [], o = [];
    for (; this._history.length > 0; )
      r.push(this._undoMove());
    for (; ; ) {
      const n = r.pop();
      if (!n)
        break;
      t ? o.push(this._makePretty(n)) : o.push(this._moveToSan(n, this._moves())), this._makeMove(n);
    }
    return o;
  }
  _pruneComments() {
    const t = [], r = {}, o = (n) => {
      n in this._comments && (r[n] = this._comments[n]);
    };
    for (; this._history.length > 0; )
      t.push(this._undoMove());
    for (o(this.fen()); ; ) {
      const n = t.pop();
      if (!n)
        break;
      this._makeMove(n), o(this.fen());
    }
    this._comments = r;
  }
  getComment() {
    return this._comments[this.fen()];
  }
  setComment(t) {
    this._comments[this.fen()] = t.replace("{", "[").replace("}", "]");
  }
  deleteComment() {
    const t = this._comments[this.fen()];
    return delete this._comments[this.fen()], t;
  }
  getComments() {
    return this._pruneComments(), Object.keys(this._comments).map((t) => ({ fen: t, comment: this._comments[t] }));
  }
  deleteComments() {
    return this._pruneComments(), Object.keys(this._comments).map((t) => {
      const r = this._comments[t];
      return delete this._comments[t], { fen: t, comment: r };
    });
  }
  setCastlingRights(t, r) {
    for (const n of [N, ie])
      r[n] !== void 0 && (r[n] ? this._castling[t] |= Le[n] : this._castling[t] &= ~Le[n]);
    this._updateCastlingRights();
    const o = this.getCastlingRights(t);
    return (r[N] === void 0 || r[N] === o[N]) && (r[ie] === void 0 || r[ie] === o[ie]);
  }
  getCastlingRights(t) {
    return {
      [N]: (this._castling[t] & Le[N]) !== 0,
      [ie]: (this._castling[t] & Le[ie]) !== 0
    };
  }
  moveNumber() {
    return this._moveNumber;
  }
}
function Xo(e) {
  const t = [];
  for (const r of e)
    t.push({ orig: r.to, brush: "yellow" }), r.captured && t.push({ orig: r.from, dest: r.to, brush: "red" }), r.san.includes("+") && t.push({ orig: r.from, dest: r.to, brush: "blue" });
  return t;
}
function Be(e) {
  return e === "w" ? "white" : "black";
}
function Wt(e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of Io) {
    const o = e.moves({ square: r, verbose: !0 });
    o.length && t.set(
      o[0].from,
      o.map((n) => n.to)
    );
  }
  return t;
}
function Zo(e, t) {
  if ((t == null ? void 0 : t.type) !== "p")
    return !1;
  const r = (t == null ? void 0 : t.color) === "w" ? "8" : "1";
  return e[1] === r;
}
function Pe(e) {
  return !!e && e instanceof Object && !(e instanceof Array) && !(e instanceof Function);
}
function $e(e) {
  return Pe(e) ? Object.fromEntries(
    Object.entries(e).map(([t, r]) => [
      t,
      $e(r)
    ])
  ) : e;
}
function vr(e, t) {
  const r = { ...e, ...t };
  for (const o in r)
    r[o] = Pe(e == null ? void 0 : e[o]) && Pe(t == null ? void 0 : t[o]) ? vr(e[o], t[o]) : $e(r[o]);
  return r;
}
function wr(e, t) {
  const r = {};
  for (const o in t)
    if (Pe(e == null ? void 0 : e[o]) && Pe(t == null ? void 0 : t[o])) {
      const n = wr(
        e[o],
        t[o]
      );
      Object.keys(n).length > 0 && (r[o] = n);
    } else
      (e == null ? void 0 : e[o]) !== t[o] && (r[o] = t[o]);
  return r;
}
const Yo = {
  p: "pawn",
  n: "knight",
  b: "bishop",
  r: "rook",
  q: "queen",
  k: "king"
}, en = /* @__PURE__ */ new Map([
  ["b1", ["a3", "c3"]],
  ["g1", ["f3", "h3"]],
  ["a2", ["a3", "a4"]],
  ["b2", ["b3", "b4"]],
  ["c2", ["c3", "c4"]],
  ["d2", ["d3", "d4"]],
  ["e2", ["e3", "e4"]],
  ["f2", ["f3", "f4"]],
  ["g2", ["g3", "g4"]],
  ["h2", ["h3", "h4"]]
]), tn = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", rn = {
  fen: tn,
  orientation: "white",
  turnColor: "white",
  coordinates: !1,
  autoCastle: !0,
  viewOnly: !1,
  disableContextMenu: !1,
  addPieceZIndex: !1,
  blockTouchScroll: !1,
  highlight: {
    lastMove: !0,
    check: !0
  },
  animation: {
    enabled: !0,
    duration: 300
  },
  lastMove: void 0,
  movable: {
    free: !1,
    color: "white",
    showDests: !0,
    dests: en,
    // We need to specify movable.events.after as an empty function so that we always have something to patch
    // BoardApi.changeTurn onto. Other functions need to be specifed as undefined so that BoardApi.setConfig
    // can reset values back to undefined, eg. if the user calls BoardApi.setConfig({}, true).
    //
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    events: { after: () => {
    }, afterNewPiece: void 0 },
    rookCastle: !0
  },
  premovable: {
    enabled: !0,
    showDests: !0,
    castle: !0,
    events: { set: void 0, unset: void 0 }
  },
  predroppable: {
    enabled: !1,
    events: { set: void 0, unset: void 0 }
  },
  draggable: {
    enabled: !0,
    distance: 3,
    autoDistance: !0,
    showGhost: !0,
    deleteOnDropOff: !1
  },
  selectable: {
    enabled: !0
  },
  events: {
    change: void 0,
    move: void 0,
    dropNewPiece: void 0,
    select: void 0,
    insert: void 0
  },
  drawable: {
    enabled: !0,
    visible: !0,
    defaultSnapToValidMove: !0,
    eraseOnClick: !0,
    shapes: [],
    autoShapes: [],
    brushes: {
      green: { key: "g", color: "#15781B", opacity: 1, lineWidth: 10 },
      red: { key: "r", color: "#882020", opacity: 1, lineWidth: 10 },
      blue: { key: "b", color: "#003088", opacity: 1, lineWidth: 10 },
      yellow: { key: "y", color: "#e68f00", opacity: 1, lineWidth: 10 },
      paleBlue: { key: "pb", color: "#003088", opacity: 0.4, lineWidth: 15 },
      paleGreen: { key: "pg", color: "#15781B", opacity: 0.4, lineWidth: 15 },
      paleRed: { key: "pr", color: "#882020", opacity: 0.4, lineWidth: 15 },
      paleGrey: {
        key: "pgr",
        color: "#4a4a4a",
        opacity: 0.35,
        lineWidth: 15
      }
    }
  }
}, on = ["white", "black"], Et = ["a", "b", "c", "d", "e", "f", "g", "h"], Tt = ["1", "2", "3", "4", "5", "6", "7", "8"], nn = [...Tt].reverse(), Pt = Array.prototype.concat(...Et.map((e) => Tt.map((t) => e + t))), z = (e) => Pt[8 * e[0] + e[1]], P = (e) => [e.charCodeAt(0) - 97, e.charCodeAt(1) - 49], _r = Pt.map(P);
function sn(e) {
  let t;
  const r = () => (t === void 0 && (t = e()), t);
  return r.clear = () => {
    t = void 0;
  }, r;
}
const an = () => {
  let e;
  return {
    start() {
      e = performance.now();
    },
    cancel() {
      e = void 0;
    },
    stop() {
      if (!e)
        return 0;
      const t = performance.now() - e;
      return e = void 0, t;
    }
  };
}, At = (e) => e === "white" ? "black" : "white", Ae = (e, t) => {
  const r = e[0] - t[0], o = e[1] - t[1];
  return r * r + o * o;
}, pt = (e, t) => e.role === t.role && e.color === t.color, Oe = (e) => (t, r) => [
  (r ? t[0] : 7 - t[0]) * e.width / 8,
  (r ? 7 - t[1] : t[1]) * e.height / 8
], Z = (e, t) => {
  e.style.transform = `translate(${t[0]}px,${t[1]}px)`;
}, Sr = (e, t, r = 1) => {
  e.style.transform = `translate(${t[0]}px,${t[1]}px) scale(${r})`;
}, Rt = (e, t) => {
  e.style.visibility = t ? "visible" : "hidden";
}, be = (e) => {
  var t;
  if (e.clientX || e.clientX === 0)
    return [e.clientX, e.clientY];
  if (!((t = e.targetTouches) === null || t === void 0) && t[0])
    return [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
}, Cr = (e) => e.buttons === 2 || e.button === 2, ee = (e, t) => {
  const r = document.createElement(e);
  return t && (r.className = t), r;
};
function kr(e, t, r) {
  const o = P(e);
  return t || (o[0] = 7 - o[0], o[1] = 7 - o[1]), [
    r.left + r.width * o[0] / 8 + r.width / 16,
    r.top + r.height * (7 - o[1]) / 8 + r.height / 16
  ];
}
const me = (e, t) => Math.abs(e - t), ln = (e) => (t, r, o, n) => me(t, o) < 2 && (e === "white" ? (
  // allow 2 squares from first two ranks, for horde
  n === r + 1 || r <= 1 && n === r + 2 && t === o
) : n === r - 1 || r >= 6 && n === r - 2 && t === o), Er = (e, t, r, o) => {
  const n = me(e, r), s = me(t, o);
  return n === 1 && s === 2 || n === 2 && s === 1;
}, Tr = (e, t, r, o) => me(e, r) === me(t, o), Pr = (e, t, r, o) => e === r || t === o, Ar = (e, t, r, o) => Tr(e, t, r, o) || Pr(e, t, r, o), cn = (e, t, r) => (o, n, s, i) => me(o, s) < 2 && me(n, i) < 2 || r && n === i && n === (e === "white" ? 0 : 7) && (o === 4 && (s === 2 && t.includes(0) || s === 6 && t.includes(7)) || t.includes(s));
function un(e, t) {
  const r = t === "white" ? "1" : "8", o = [];
  for (const [n, s] of e)
    n[1] === r && s.color === t && s.role === "rook" && o.push(P(n)[0]);
  return o;
}
function Rr(e, t, r) {
  const o = e.get(t);
  if (!o)
    return [];
  const n = P(t), s = o.role, i = s === "pawn" ? ln(o.color) : s === "knight" ? Er : s === "bishop" ? Tr : s === "rook" ? Pr : s === "queen" ? Ar : cn(o.color, un(e, o.color), r);
  return _r.filter((a) => (n[0] !== a[0] || n[1] !== a[1]) && i(n[0], n[1], a[0], a[1])).map(z);
}
function j(e, ...t) {
  e && setTimeout(() => e(...t), 1);
}
function dn(e) {
  e.orientation = At(e.orientation), e.animation.current = e.draggable.current = e.selected = void 0;
}
function hn(e, t) {
  for (const [r, o] of t)
    o ? e.pieces.set(r, o) : e.pieces.delete(r);
}
function fn(e, t) {
  if (e.check = void 0, t === !0 && (t = e.turnColor), t)
    for (const [r, o] of e.pieces)
      o.role === "king" && o.color === t && (e.check = r);
}
function pn(e, t, r, o) {
  le(e), e.premovable.current = [t, r], j(e.premovable.events.set, t, r, o);
}
function ae(e) {
  e.premovable.current && (e.premovable.current = void 0, j(e.premovable.events.unset));
}
function mn(e, t, r) {
  ae(e), e.predroppable.current = { role: t, key: r }, j(e.predroppable.events.set, t, r);
}
function le(e) {
  const t = e.predroppable;
  t.current && (t.current = void 0, j(t.events.unset));
}
function gn(e, t, r) {
  if (!e.autoCastle)
    return !1;
  const o = e.pieces.get(t);
  if (!o || o.role !== "king")
    return !1;
  const n = P(t), s = P(r);
  if (n[1] !== 0 && n[1] !== 7 || n[1] !== s[1])
    return !1;
  n[0] === 4 && !e.pieces.has(r) && (s[0] === 6 ? r = z([7, s[1]]) : s[0] === 2 && (r = z([0, s[1]])));
  const i = e.pieces.get(r);
  return !i || i.color !== o.color || i.role !== "rook" ? !1 : (e.pieces.delete(t), e.pieces.delete(r), n[0] < s[0] ? (e.pieces.set(z([6, s[1]]), o), e.pieces.set(z([5, s[1]]), i)) : (e.pieces.set(z([2, s[1]]), o), e.pieces.set(z([3, s[1]]), i)), !0);
}
function Or(e, t, r) {
  const o = e.pieces.get(t), n = e.pieces.get(r);
  if (t === r || !o)
    return !1;
  const s = n && n.color !== o.color ? n : void 0;
  return r === e.selected && G(e), j(e.events.move, t, r, s), gn(e, t, r) || (e.pieces.set(r, o), e.pieces.delete(t)), e.lastMove = [t, r], e.check = void 0, j(e.events.change), s || !0;
}
function Ot(e, t, r, o) {
  if (e.pieces.has(r))
    if (o)
      e.pieces.delete(r);
    else
      return !1;
  return j(e.events.dropNewPiece, t, r), e.pieces.set(r, t), e.lastMove = [r], e.check = void 0, j(e.events.change), e.movable.dests = void 0, e.turnColor = At(e.turnColor), !0;
}
function Mr(e, t, r) {
  const o = Or(e, t, r);
  return o && (e.movable.dests = void 0, e.turnColor = At(e.turnColor), e.animation.current = void 0), o;
}
function xr(e, t, r) {
  if (Mt(e, t, r)) {
    const o = Mr(e, t, r);
    if (o) {
      const n = e.hold.stop();
      G(e);
      const s = {
        premove: !1,
        ctrlKey: e.stats.ctrlKey,
        holdTime: n
      };
      return o !== !0 && (s.captured = o), j(e.movable.events.after, t, r, s), !0;
    }
  } else if (yn(e, t, r))
    return pn(e, t, r, {
      ctrlKey: e.stats.ctrlKey
    }), G(e), !0;
  return G(e), !1;
}
function Nr(e, t, r, o) {
  const n = e.pieces.get(t);
  n && (bn(e, t, r) || o) ? (e.pieces.delete(t), Ot(e, n, r, o), j(e.movable.events.afterNewPiece, n.role, r, {
    premove: !1,
    predrop: !1
  })) : n && vn(e, t, r) ? mn(e, n.role, r) : (ae(e), le(e)), e.pieces.delete(t), G(e);
}
function mt(e, t, r) {
  if (j(e.events.select, t), e.selected) {
    if (e.selected === t && !e.draggable.enabled) {
      G(e), e.hold.cancel();
      return;
    } else if ((e.selectable.enabled || r) && e.selected !== t && xr(e, e.selected, t)) {
      e.stats.dragged = !1;
      return;
    }
  }
  (e.selectable.enabled || e.draggable.enabled) && (Br(e, t) || xt(e, t)) && (Lr(e, t), e.hold.start());
}
function Lr(e, t) {
  e.selected = t, xt(e, t) ? e.premovable.customDests || (e.premovable.dests = Rr(e.pieces, t, e.premovable.castle)) : e.premovable.dests = void 0;
}
function G(e) {
  e.selected = void 0, e.premovable.dests = void 0, e.hold.cancel();
}
function Br(e, t) {
  const r = e.pieces.get(t);
  return !!r && (e.movable.color === "both" || e.movable.color === r.color && e.turnColor === r.color);
}
const Mt = (e, t, r) => {
  var o, n;
  return t !== r && Br(e, t) && (e.movable.free || !!(!((n = (o = e.movable.dests) === null || o === void 0 ? void 0 : o.get(t)) === null || n === void 0) && n.includes(r)));
};
function bn(e, t, r) {
  const o = e.pieces.get(t);
  return !!o && (t === r || !e.pieces.has(r)) && (e.movable.color === "both" || e.movable.color === o.color && e.turnColor === o.color);
}
function xt(e, t) {
  const r = e.pieces.get(t);
  return !!r && e.premovable.enabled && e.movable.color === r.color && e.turnColor !== r.color;
}
function yn(e, t, r) {
  var o, n;
  const s = (n = (o = e.premovable.customDests) === null || o === void 0 ? void 0 : o.get(t)) !== null && n !== void 0 ? n : Rr(e.pieces, t, e.premovable.castle);
  return t !== r && xt(e, t) && s.includes(r);
}
function vn(e, t, r) {
  const o = e.pieces.get(t), n = e.pieces.get(r);
  return !!o && (!n || n.color !== e.movable.color) && e.predroppable.enabled && (o.role !== "pawn" || r[1] !== "1" && r[1] !== "8") && e.movable.color === o.color && e.turnColor !== o.color;
}
function wn(e, t) {
  const r = e.pieces.get(t);
  return !!r && e.draggable.enabled && (e.movable.color === "both" || e.movable.color === r.color && (e.turnColor === r.color || e.premovable.enabled));
}
function _n(e) {
  const t = e.premovable.current;
  if (!t)
    return !1;
  const r = t[0], o = t[1];
  let n = !1;
  if (Mt(e, r, o)) {
    const s = Mr(e, r, o);
    if (s) {
      const i = { premove: !0 };
      s !== !0 && (i.captured = s), j(e.movable.events.after, r, o, i), n = !0;
    }
  }
  return ae(e), n;
}
function Sn(e, t) {
  const r = e.predroppable.current;
  let o = !1;
  if (!r)
    return !1;
  if (t(r)) {
    const n = {
      role: r.role,
      color: e.movable.color
    };
    Ot(e, n, r.key) && (j(e.movable.events.afterNewPiece, r.role, r.key, {
      premove: !1,
      predrop: !0
    }), o = !0);
  }
  return le(e), o;
}
function Nt(e) {
  ae(e), le(e), G(e);
}
function zt(e) {
  e.movable.color = e.movable.dests = e.animation.current = void 0, Nt(e);
}
function ye(e, t, r) {
  let o = Math.floor(8 * (e[0] - r.left) / r.width);
  t || (o = 7 - o);
  let n = 7 - Math.floor(8 * (e[1] - r.top) / r.height);
  return t || (n = 7 - n), o >= 0 && o < 8 && n >= 0 && n < 8 ? z([o, n]) : void 0;
}
function Cn(e, t, r, o) {
  const n = P(e), s = _r.filter((l) => Ar(n[0], n[1], l[0], l[1]) || Er(n[0], n[1], l[0], l[1])), i = s.map((l) => kr(z(l), r, o)).map((l) => Ae(t, l)), [, a] = i.reduce((l, c, u) => l[0] < c ? l : [c, u], [i[0], 0]);
  return z(s[a]);
}
const $ = (e) => e.orientation === "white", Dr = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR", kn = {
  p: "pawn",
  r: "rook",
  n: "knight",
  b: "bishop",
  q: "queen",
  k: "king"
}, En = {
  pawn: "p",
  rook: "r",
  knight: "n",
  bishop: "b",
  queen: "q",
  king: "k"
};
function Ir(e) {
  e === "start" && (e = Dr);
  const t = /* @__PURE__ */ new Map();
  let r = 7, o = 0;
  for (const n of e)
    switch (n) {
      case " ":
      case "[":
        return t;
      case "/":
        if (--r, r < 0)
          return t;
        o = 0;
        break;
      case "~": {
        const s = t.get(z([o - 1, r]));
        s && (s.promoted = !0);
        break;
      }
      default: {
        const s = n.charCodeAt(0);
        if (s < 57)
          o += s - 48;
        else {
          const i = n.toLowerCase();
          t.set(z([o, r]), {
            role: kn[i],
            color: n === i ? "black" : "white"
          }), ++o;
        }
      }
    }
  return t;
}
function Tn(e) {
  return nn.map((t) => Et.map((r) => {
    const o = e.get(r + t);
    if (o) {
      let n = En[o.role];
      return o.color === "white" && (n = n.toUpperCase()), o.promoted && (n += "~"), n;
    } else
      return "1";
  }).join("")).join("/").replace(/1{2,}/g, (t) => t.length.toString());
}
function qr(e, t) {
  t.animation && (Lt(e.animation, t.animation), (e.animation.duration || 0) < 70 && (e.animation.enabled = !1));
}
function Fr(e, t) {
  var r, o, n;
  if (!((r = t.movable) === null || r === void 0) && r.dests && (e.movable.dests = void 0), !((o = t.drawable) === null || o === void 0) && o.autoShapes && (e.drawable.autoShapes = []), Lt(e, t), t.fen && (e.pieces = Ir(t.fen), e.drawable.shapes = ((n = t.drawable) === null || n === void 0 ? void 0 : n.shapes) || []), "check" in t && fn(e, t.check || !1), "lastMove" in t && !t.lastMove ? e.lastMove = void 0 : t.lastMove && (e.lastMove = t.lastMove), e.selected && Lr(e, e.selected), qr(e, t), !e.movable.rookCastle && e.movable.dests) {
    const s = e.movable.color === "white" ? "1" : "8", i = "e" + s, a = e.movable.dests.get(i), l = e.pieces.get(i);
    if (!a || !l || l.role !== "king")
      return;
    e.movable.dests.set(i, a.filter((c) => !(c === "a" + s && a.includes("c" + s)) && !(c === "h" + s && a.includes("g" + s))));
  }
}
function Lt(e, t) {
  for (const r in t)
    Object.prototype.hasOwnProperty.call(t, r) && (Object.prototype.hasOwnProperty.call(e, r) && Gt(e[r]) && Gt(t[r]) ? Lt(e[r], t[r]) : e[r] = t[r]);
}
function Gt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null;
}
const ce = (e, t) => t.animation.enabled ? Rn(e, t) : se(e, t);
function se(e, t) {
  const r = e(t);
  return t.dom.redraw(), r;
}
const it = (e, t) => ({
  key: e,
  pos: P(e),
  piece: t
}), Pn = (e, t) => t.sort((r, o) => Ae(e.pos, r.pos) - Ae(e.pos, o.pos))[0];
function An(e, t) {
  const r = /* @__PURE__ */ new Map(), o = [], n = /* @__PURE__ */ new Map(), s = [], i = [], a = /* @__PURE__ */ new Map();
  let l, c, u;
  for (const [f, p] of e)
    a.set(f, it(f, p));
  for (const f of Pt)
    l = t.pieces.get(f), c = a.get(f), l ? c ? pt(l, c.piece) || (s.push(c), i.push(it(f, l))) : i.push(it(f, l)) : c && s.push(c);
  for (const f of i)
    c = Pn(f, s.filter((p) => pt(f.piece, p.piece))), c && (u = [c.pos[0] - f.pos[0], c.pos[1] - f.pos[1]], r.set(f.key, u.concat(u)), o.push(c.key));
  for (const f of s)
    o.includes(f.key) || n.set(f.key, f.piece);
  return {
    anims: r,
    fadings: n
  };
}
function Ur(e, t) {
  const r = e.animation.current;
  if (r === void 0) {
    e.dom.destroyed || e.dom.redrawNow();
    return;
  }
  const o = 1 - (t - r.start) * r.frequency;
  if (o <= 0)
    e.animation.current = void 0, e.dom.redrawNow();
  else {
    const n = On(o);
    for (const s of r.plan.anims.values())
      s[2] = s[0] * n, s[3] = s[1] * n;
    e.dom.redrawNow(!0), requestAnimationFrame((s = performance.now()) => Ur(e, s));
  }
}
function Rn(e, t) {
  const r = new Map(t.pieces), o = e(t), n = An(r, t);
  if (n.anims.size || n.fadings.size) {
    const s = t.animation.current && t.animation.current.start;
    t.animation.current = {
      start: performance.now(),
      frequency: 1 / t.animation.duration,
      plan: n
    }, s || Ur(t, performance.now());
  } else
    t.dom.redraw();
  return o;
}
const On = (e) => e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, Mn = ["green", "red", "blue", "yellow"];
function xn(e, t) {
  if (t.touches && t.touches.length > 1)
    return;
  t.stopPropagation(), t.preventDefault(), t.ctrlKey ? G(e) : Nt(e);
  const r = be(t), o = ye(r, $(e), e.dom.bounds());
  o && (e.drawable.current = {
    orig: o,
    pos: r,
    brush: Dn(t),
    snapToValidMove: e.drawable.defaultSnapToValidMove
  }, jr(e));
}
function jr(e) {
  requestAnimationFrame(() => {
    const t = e.drawable.current;
    if (t) {
      const r = ye(t.pos, $(e), e.dom.bounds());
      r || (t.snapToValidMove = !1);
      const o = t.snapToValidMove ? Cn(t.orig, t.pos, $(e), e.dom.bounds()) : r;
      o !== t.mouseSq && (t.mouseSq = o, t.dest = o !== t.orig ? o : void 0, e.dom.redrawNow()), jr(e);
    }
  });
}
function Nn(e, t) {
  e.drawable.current && (e.drawable.current.pos = be(t));
}
function Ln(e) {
  const t = e.drawable.current;
  t && (t.mouseSq && In(e.drawable, t), $r(e));
}
function $r(e) {
  e.drawable.current && (e.drawable.current = void 0, e.dom.redraw());
}
function Bn(e) {
  e.drawable.shapes.length && (e.drawable.shapes = [], e.dom.redraw(), Kr(e.drawable));
}
function Dn(e) {
  var t;
  const r = (e.shiftKey || e.ctrlKey) && Cr(e), o = e.altKey || e.metaKey || ((t = e.getModifierState) === null || t === void 0 ? void 0 : t.call(e, "AltGraph"));
  return Mn[(r ? 1 : 0) + (o ? 2 : 0)];
}
function In(e, t) {
  const r = (n) => n.orig === t.orig && n.dest === t.dest, o = e.shapes.find(r);
  o && (e.shapes = e.shapes.filter((n) => !r(n))), (!o || o.brush !== t.brush) && e.shapes.push({
    orig: t.orig,
    dest: t.dest,
    brush: t.brush
  }), Kr(e);
}
function Kr(e) {
  e.onChange && e.onChange(e.shapes);
}
function qn(e, t) {
  if (!(e.trustAllEvents || t.isTrusted) || t.button !== void 0 && t.button !== 0 || t.touches && t.touches.length > 1)
    return;
  const r = e.dom.bounds(), o = be(t), n = ye(o, $(e), r);
  if (!n)
    return;
  const s = e.pieces.get(n), i = e.selected;
  if (!i && e.drawable.enabled && (e.drawable.eraseOnClick || !s || s.color !== e.turnColor) && Bn(e), t.cancelable !== !1 && (!t.touches || e.blockTouchScroll || s || i || Fn(e, o)))
    t.preventDefault();
  else if (t.touches)
    return;
  const a = !!e.premovable.current, l = !!e.predroppable.current;
  e.stats.ctrlKey = t.ctrlKey, e.selected && Mt(e, e.selected, n) ? ce((f) => mt(f, n), e) : mt(e, n);
  const c = e.selected === n, u = Vr(e, n);
  if (s && u && c && wn(e, n)) {
    e.draggable.current = {
      orig: n,
      piece: s,
      origPos: o,
      pos: o,
      started: e.draggable.autoDistance && e.stats.dragged,
      element: u,
      previouslySelected: i,
      originTarget: t.target,
      keyHasChanged: !1
    }, u.cgDragging = !0, u.classList.add("dragging");
    const f = e.dom.elements.ghost;
    f && (f.className = `ghost ${s.color} ${s.role}`, Z(f, Oe(r)(P(n), $(e))), Rt(f, !0)), Bt(e);
  } else
    a && ae(e), l && le(e);
  e.dom.redraw();
}
function Fn(e, t) {
  const r = $(e), o = e.dom.bounds(), n = Math.pow(o.width / 8, 2);
  for (const s of e.pieces.keys()) {
    const i = kr(s, r, o);
    if (Ae(i, t) <= n)
      return !0;
  }
  return !1;
}
function Un(e, t, r, o) {
  const n = "a0";
  e.pieces.set(n, t), e.dom.redraw();
  const s = be(r);
  e.draggable.current = {
    orig: n,
    piece: t,
    origPos: s,
    pos: s,
    started: !0,
    element: () => Vr(e, n),
    originTarget: r.target,
    newPiece: !0,
    force: !!o,
    keyHasChanged: !1
  }, Bt(e);
}
function Bt(e) {
  requestAnimationFrame(() => {
    var t;
    const r = e.draggable.current;
    if (!r)
      return;
    !((t = e.animation.current) === null || t === void 0) && t.plan.anims.has(r.orig) && (e.animation.current = void 0);
    const o = e.pieces.get(r.orig);
    if (!o || !pt(o, r.piece))
      Ke(e);
    else if (!r.started && Ae(r.pos, r.origPos) >= Math.pow(e.draggable.distance, 2) && (r.started = !0), r.started) {
      if (typeof r.element == "function") {
        const s = r.element();
        if (!s)
          return;
        s.cgDragging = !0, s.classList.add("dragging"), r.element = s;
      }
      const n = e.dom.bounds();
      Z(r.element, [
        r.pos[0] - n.left - n.width / 16,
        r.pos[1] - n.top - n.height / 16
      ]), r.keyHasChanged || (r.keyHasChanged = r.orig !== ye(r.pos, $(e), n));
    }
    Bt(e);
  });
}
function jn(e, t) {
  e.draggable.current && (!t.touches || t.touches.length < 2) && (e.draggable.current.pos = be(t));
}
function $n(e, t) {
  const r = e.draggable.current;
  if (!r)
    return;
  if (t.type === "touchend" && t.cancelable !== !1 && t.preventDefault(), t.type === "touchend" && r.originTarget !== t.target && !r.newPiece) {
    e.draggable.current = void 0;
    return;
  }
  ae(e), le(e);
  const o = be(t) || r.pos, n = ye(o, $(e), e.dom.bounds());
  n && r.started && r.orig !== n ? r.newPiece ? Nr(e, r.orig, n, r.force) : (e.stats.ctrlKey = t.ctrlKey, xr(e, r.orig, n) && (e.stats.dragged = !0)) : r.newPiece ? e.pieces.delete(r.orig) : e.draggable.deleteOnDropOff && !n && (e.pieces.delete(r.orig), j(e.events.change)), (r.orig === r.previouslySelected || r.keyHasChanged) && (r.orig === n || !n) ? G(e) : e.selectable.enabled || G(e), Hr(e), e.draggable.current = void 0, e.dom.redraw();
}
function Ke(e) {
  const t = e.draggable.current;
  t && (t.newPiece && e.pieces.delete(t.orig), e.draggable.current = void 0, G(e), Hr(e), e.dom.redraw());
}
function Hr(e) {
  const t = e.dom.elements;
  t.ghost && Rt(t.ghost, !1);
}
function Vr(e, t) {
  let r = e.dom.elements.board.firstChild;
  for (; r; ) {
    if (r.cgKey === t && r.tagName === "PIECE")
      return r;
    r = r.nextSibling;
  }
}
function Kn(e, t) {
  e.exploding = { stage: 1, keys: t }, e.dom.redraw(), setTimeout(() => {
    Qt(e, 2), setTimeout(() => Qt(e, void 0), 120);
  }, 120);
}
function Qt(e, t) {
  e.exploding && (t ? e.exploding.stage = t : e.exploding = void 0, e.dom.redraw());
}
function Hn(e, t) {
  function r() {
    dn(e), t();
  }
  return {
    set(o) {
      o.orientation && o.orientation !== e.orientation && r(), qr(e, o), (o.fen ? ce : se)((n) => Fr(n, o), e);
    },
    state: e,
    getFen: () => Tn(e.pieces),
    toggleOrientation: r,
    setPieces(o) {
      ce((n) => hn(n, o), e);
    },
    selectSquare(o, n) {
      o ? ce((s) => mt(s, o, n), e) : e.selected && (G(e), e.dom.redraw());
    },
    move(o, n) {
      ce((s) => Or(s, o, n), e);
    },
    newPiece(o, n) {
      ce((s) => Ot(s, o, n), e);
    },
    playPremove() {
      if (e.premovable.current) {
        if (ce(_n, e))
          return !0;
        e.dom.redraw();
      }
      return !1;
    },
    playPredrop(o) {
      if (e.predroppable.current) {
        const n = Sn(e, o);
        return e.dom.redraw(), n;
      }
      return !1;
    },
    cancelPremove() {
      se(ae, e);
    },
    cancelPredrop() {
      se(le, e);
    },
    cancelMove() {
      se((o) => {
        Nt(o), Ke(o);
      }, e);
    },
    stop() {
      se((o) => {
        zt(o), Ke(o);
      }, e);
    },
    explode(o) {
      Kn(e, o);
    },
    setAutoShapes(o) {
      se((n) => n.drawable.autoShapes = o, e);
    },
    setShapes(o) {
      se((n) => n.drawable.shapes = o, e);
    },
    getKeyAtDomPos(o) {
      return ye(o, $(e), e.dom.bounds());
    },
    redrawAll: t,
    dragNewPiece(o, n, s) {
      Un(e, o, n, s);
    },
    destroy() {
      zt(e), e.dom.unbind && e.dom.unbind(), e.dom.destroyed = !0;
    }
  };
}
function Vn() {
  return {
    pieces: Ir(Dr),
    orientation: "white",
    turnColor: "white",
    coordinates: !0,
    ranksPosition: "right",
    autoCastle: !0,
    viewOnly: !1,
    disableContextMenu: !1,
    addPieceZIndex: !1,
    blockTouchScroll: !1,
    pieceKey: !1,
    trustAllEvents: !1,
    highlight: {
      lastMove: !0,
      check: !0
    },
    animation: {
      enabled: !0,
      duration: 200
    },
    movable: {
      free: !0,
      color: "both",
      showDests: !0,
      events: {},
      rookCastle: !0
    },
    premovable: {
      enabled: !0,
      showDests: !0,
      castle: !0,
      events: {}
    },
    predroppable: {
      enabled: !1,
      events: {}
    },
    draggable: {
      enabled: !0,
      distance: 3,
      autoDistance: !0,
      showGhost: !0,
      deleteOnDropOff: !1
    },
    dropmode: {
      active: !1
    },
    selectable: {
      enabled: !0
    },
    stats: {
      // on touchscreen, default to "tap-tap" moves
      // instead of drag
      dragged: !("ontouchstart" in window)
    },
    events: {},
    drawable: {
      enabled: !0,
      visible: !0,
      defaultSnapToValidMove: !0,
      eraseOnClick: !0,
      shapes: [],
      autoShapes: [],
      brushes: {
        green: { key: "g", color: "#15781B", opacity: 1, lineWidth: 10 },
        red: { key: "r", color: "#882020", opacity: 1, lineWidth: 10 },
        blue: { key: "b", color: "#003088", opacity: 1, lineWidth: 10 },
        yellow: { key: "y", color: "#e68f00", opacity: 1, lineWidth: 10 },
        paleBlue: { key: "pb", color: "#003088", opacity: 0.4, lineWidth: 15 },
        paleGreen: { key: "pg", color: "#15781B", opacity: 0.4, lineWidth: 15 },
        paleRed: { key: "pr", color: "#882020", opacity: 0.4, lineWidth: 15 },
        paleGrey: {
          key: "pgr",
          color: "#4a4a4a",
          opacity: 0.35,
          lineWidth: 15
        },
        purple: { key: "purp", color: "#68217a", opacity: 0.65, lineWidth: 10 },
        pink: { key: "pink", color: "#ee2080", opacity: 0.5, lineWidth: 10 },
        hilite: { key: "hilite", color: "#fff", opacity: 1, lineWidth: 1 }
      },
      prevSvgHash: ""
    },
    hold: an()
  };
}
function Wn() {
  const e = M("defs"), t = I(M("filter"), { id: "cg-filter-blur" });
  return t.appendChild(I(M("feGaussianBlur"), { stdDeviation: "0.022" })), e.appendChild(t), e;
}
function zn(e, t, r) {
  var o;
  const n = e.drawable, s = n.current, i = s && s.mouseSq ? s : void 0, a = /* @__PURE__ */ new Map(), l = e.dom.bounds(), c = n.autoShapes.filter((y) => !y.piece);
  for (const y of n.shapes.concat(c).concat(i ? [i] : [])) {
    if (!y.dest)
      continue;
    const d = (o = a.get(y.dest)) !== null && o !== void 0 ? o : /* @__PURE__ */ new Set(), m = Ve(He(P(y.orig), e.orientation), l), g = Ve(He(P(y.dest), e.orientation), l);
    d.add(bt(m, g)), a.set(y.dest, d);
  }
  const u = n.shapes.concat(c).map((y) => ({
    shape: y,
    current: !1,
    hash: Jt(y, gt(y.dest, a), !1, l)
  }));
  i && u.push({
    shape: i,
    current: !0,
    hash: Jt(i, gt(i.dest, a), !0, l)
  });
  const f = u.map((y) => y.hash).join(";");
  if (f === e.drawable.prevSvgHash)
    return;
  e.drawable.prevSvgHash = f;
  const p = t.querySelector("defs");
  Gn(n, u, p), Qn(u, t.querySelector("g"), r.querySelector("g"), (y) => Zn(e, y, n.brushes, a, l));
}
function Gn(e, t, r) {
  var o;
  const n = /* @__PURE__ */ new Map();
  let s;
  for (const l of t.filter((c) => c.shape.dest && c.shape.brush))
    s = Wr(e.brushes[l.shape.brush], l.shape.modifiers), !((o = l.shape.modifiers) === null || o === void 0) && o.hilite && n.set("hilite", e.brushes.hilite), n.set(s.key, s);
  const i = /* @__PURE__ */ new Set();
  let a = r.firstElementChild;
  for (; a; )
    i.add(a.getAttribute("cgKey")), a = a.nextElementSibling;
  for (const [l, c] of n.entries())
    i.has(l) || r.appendChild(ts(c));
}
function Qn(e, t, r, o) {
  const n = /* @__PURE__ */ new Map();
  for (const s of e)
    n.set(s.hash, !1);
  for (const s of [t, r]) {
    const i = [];
    let a = s.firstElementChild, l;
    for (; a; )
      l = a.getAttribute("cgHash"), n.has(l) ? n.set(l, !0) : i.push(a), a = a.nextElementSibling;
    for (const c of i)
      s.removeChild(c);
  }
  for (const s of e.filter((i) => !n.get(i.hash)))
    for (const i of o(s))
      i.isCustom ? r.appendChild(i.el) : t.appendChild(i.el);
}
function Jt({ orig: e, dest: t, brush: r, piece: o, modifiers: n, customSvg: s, label: i }, a, l, c) {
  var u, f;
  return [
    c.width,
    c.height,
    l,
    e,
    t,
    r,
    a && "-",
    o && Jn(o),
    n && Xn(n),
    s && `custom-${Xt(s.html)},${(f = (u = s.center) === null || u === void 0 ? void 0 : u[0]) !== null && f !== void 0 ? f : "o"}`,
    i && `label-${Xt(i.text)}`
  ].filter((p) => p).join(",");
}
function Jn(e) {
  return [e.color, e.role, e.scale].filter((t) => t).join(",");
}
function Xn(e) {
  return [e.lineWidth, e.hilite && "*"].filter((t) => t).join(",");
}
function Xt(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++)
    t = (t << 5) - t + e.charCodeAt(r) >>> 0;
  return t.toString();
}
function Zn(e, { shape: t, current: r, hash: o }, n, s, i) {
  var a, l;
  const c = Ve(He(P(t.orig), e.orientation), i), u = t.dest ? Ve(He(P(t.dest), e.orientation), i) : c, f = t.brush && Wr(n[t.brush], t.modifiers), p = s.get(t.dest), y = [];
  if (f) {
    const d = I(M("g"), { cgHash: o });
    y.push({ el: d }), c[0] !== u[0] || c[1] !== u[1] ? d.appendChild(es(t, f, c, u, r, gt(t.dest, s))) : d.appendChild(Yn(n[t.brush], c, r, i));
  }
  if (t.label) {
    const d = t.label;
    (a = d.fill) !== null && a !== void 0 || (d.fill = t.brush && n[t.brush].color);
    const m = t.brush ? void 0 : "tr";
    y.push({ el: rs(d, o, c, u, p, m), isCustom: !0 });
  }
  if (t.customSvg) {
    const d = (l = t.customSvg.center) !== null && l !== void 0 ? l : "orig", [m, g] = d === "label" ? Gr(c, u, p).map((b) => b - 0.5) : d === "dest" ? u : c, v = I(M("g"), { transform: `translate(${m},${g})`, cgHash: o });
    v.innerHTML = `<svg width="1" height="1" viewBox="0 0 100 100">${t.customSvg.html}</svg>`, y.push({ el: v, isCustom: !0 });
  }
  return y;
}
function Yn(e, t, r, o) {
  const n = os(), s = (o.width + o.height) / (4 * Math.max(o.width, o.height));
  return I(M("circle"), {
    stroke: e.color,
    "stroke-width": n[r ? 0 : 1],
    fill: "none",
    opacity: zr(e, r),
    cx: t[0],
    cy: t[1],
    r: s - n[1] / 2
  });
}
function es(e, t, r, o, n, s) {
  var i;
  function a(u) {
    var f;
    const p = ss(s && !n), y = o[0] - r[0], d = o[1] - r[1], m = Math.atan2(d, y), g = Math.cos(m) * p, v = Math.sin(m) * p;
    return I(M("line"), {
      stroke: u ? "white" : t.color,
      "stroke-width": ns(t, n) + (u ? 0.04 : 0),
      "stroke-linecap": "round",
      "marker-end": `url(#arrowhead-${u ? "hilite" : t.key})`,
      opacity: !((f = e.modifiers) === null || f === void 0) && f.hilite ? 1 : zr(t, n),
      x1: r[0],
      y1: r[1],
      x2: o[0] - g,
      y2: o[1] - v
    });
  }
  if (!(!((i = e.modifiers) === null || i === void 0) && i.hilite))
    return a(!1);
  const l = M("g"), c = I(M("g"), { filter: "url(#cg-filter-blur)" });
  return c.appendChild(is(r, o)), c.appendChild(a(!0)), l.appendChild(c), l.appendChild(a(!1)), l;
}
function ts(e) {
  const t = I(M("marker"), {
    id: "arrowhead-" + e.key,
    orient: "auto",
    overflow: "visible",
    markerWidth: 4,
    markerHeight: 4,
    refX: e.key === "hilite" ? 1.86 : 2.05,
    refY: 2
  });
  return t.appendChild(I(M("path"), {
    d: "M0,0 V4 L3,2 Z",
    fill: e.color
  })), t.setAttribute("cgKey", e.key), t;
}
function rs(e, t, r, o, n, s) {
  var i;
  const a = 0.4 * 0.75 ** e.text.length, l = Gr(r, o, n), c = s === "tr" ? 0.4 : 0, u = I(M("g"), {
    transform: `translate(${l[0] + c},${l[1] - c})`,
    cgHash: t
  });
  u.appendChild(I(M("circle"), {
    r: 0.4 / 2,
    "fill-opacity": s ? 1 : 0.8,
    "stroke-opacity": s ? 1 : 0.7,
    "stroke-width": 0.03,
    fill: (i = e.fill) !== null && i !== void 0 ? i : "#666",
    stroke: "white"
  }));
  const f = I(M("text"), {
    "font-size": a,
    "font-family": "Noto Sans",
    "text-anchor": "middle",
    fill: "white",
    y: 0.13 * 0.75 ** e.text.length
  });
  return f.innerHTML = e.text, u.appendChild(f), u;
}
function He(e, t) {
  return t === "white" ? e : [7 - e[0], 7 - e[1]];
}
function gt(e, t) {
  return (e && t.has(e) && t.get(e).size > 1) === !0;
}
function M(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function I(e, t) {
  for (const r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.setAttribute(r, t[r]);
  return e;
}
function Wr(e, t) {
  return t ? {
    color: e.color,
    opacity: Math.round(e.opacity * 10) / 10,
    lineWidth: Math.round(t.lineWidth || e.lineWidth),
    key: [e.key, t.lineWidth].filter((r) => r).join("")
  } : e;
}
function os() {
  return [3 / 64, 4 / 64];
}
function ns(e, t) {
  return (e.lineWidth || 10) * (t ? 0.85 : 1) / 64;
}
function zr(e, t) {
  return (e.opacity || 1) * (t ? 0.9 : 1);
}
function ss(e) {
  return (e ? 20 : 10) / 64;
}
function Ve(e, t) {
  const r = Math.min(1, t.width / t.height), o = Math.min(1, t.height / t.width);
  return [(e[0] - 3.5) * r, (3.5 - e[1]) * o];
}
function is(e, t) {
  const r = {
    from: [Math.floor(Math.min(e[0], t[0])), Math.floor(Math.min(e[1], t[1]))],
    to: [Math.ceil(Math.max(e[0], t[0])), Math.ceil(Math.max(e[1], t[1]))]
  };
  return I(M("rect"), {
    x: r.from[0],
    y: r.from[1],
    width: r.to[0] - r.from[0],
    height: r.to[1] - r.from[1],
    fill: "none",
    stroke: "none"
  });
}
function bt(e, t, r = !0) {
  const o = Math.atan2(t[1] - e[1], t[0] - e[0]) + Math.PI;
  return r ? (Math.round(o * 8 / Math.PI) + 16) % 16 : o;
}
function as(e, t) {
  return Math.sqrt([e[0] - t[0], e[1] - t[1]].reduce((r, o) => r + o * o, 0));
}
function Gr(e, t, r) {
  let o = as(e, t);
  const n = bt(e, t, !1);
  if (r && (o -= 33 / 64, r.size > 1)) {
    o -= 10 / 64;
    const s = bt(e, t);
    (r.has((s + 1) % 16) || r.has((s + 15) % 16)) && s & 1 && (o -= 0.4);
  }
  return [e[0] - Math.cos(n) * o, e[1] - Math.sin(n) * o].map((s) => s + 0.5);
}
function ls(e, t) {
  e.innerHTML = "", e.classList.add("cg-wrap");
  for (const l of on)
    e.classList.toggle("orientation-" + l, t.orientation === l);
  e.classList.toggle("manipulable", !t.viewOnly);
  const r = ee("cg-container");
  e.appendChild(r);
  const o = ee("cg-board");
  r.appendChild(o);
  let n, s, i;
  if (t.drawable.visible && (n = I(M("svg"), {
    class: "cg-shapes",
    viewBox: "-4 -4 8 8",
    preserveAspectRatio: "xMidYMid slice"
  }), n.appendChild(Wn()), n.appendChild(M("g")), s = I(M("svg"), {
    class: "cg-custom-svgs",
    viewBox: "-3.5 -3.5 8 8",
    preserveAspectRatio: "xMidYMid slice"
  }), s.appendChild(M("g")), i = ee("cg-auto-pieces"), r.appendChild(n), r.appendChild(s), r.appendChild(i)), t.coordinates) {
    const l = t.orientation === "black" ? " black" : "", c = t.ranksPosition === "left" ? " left" : "";
    r.appendChild(Zt(Tt, "ranks" + l + c)), r.appendChild(Zt(Et, "files" + l));
  }
  let a;
  return t.draggable.enabled && t.draggable.showGhost && (a = ee("piece", "ghost"), Rt(a, !1), r.appendChild(a)), {
    board: o,
    container: r,
    wrap: e,
    ghost: a,
    svg: n,
    customSvg: s,
    autoPieces: i
  };
}
function Zt(e, t) {
  const r = ee("coords", t);
  let o;
  for (const n of e)
    o = ee("coord"), o.textContent = n, r.appendChild(o);
  return r;
}
function cs(e, t) {
  if (!e.dropmode.active)
    return;
  ae(e), le(e);
  const r = e.dropmode.piece;
  if (r) {
    e.pieces.set("a0", r);
    const o = be(t), n = o && ye(o, $(e), e.dom.bounds());
    n && Nr(e, "a0", n);
  }
  e.dom.redraw();
}
function us(e, t) {
  const r = e.dom.elements.board;
  if ("ResizeObserver" in window && new ResizeObserver(t).observe(e.dom.elements.wrap), (e.disableContextMenu || e.drawable.enabled) && r.addEventListener("contextmenu", (n) => n.preventDefault()), e.viewOnly)
    return;
  const o = hs(e);
  r.addEventListener("touchstart", o, {
    passive: !1
  }), r.addEventListener("mousedown", o, {
    passive: !1
  });
}
function ds(e, t) {
  const r = [];
  if ("ResizeObserver" in window || r.push(Se(document.body, "chessground.resize", t)), !e.viewOnly) {
    const o = Yt(e, jn, Nn), n = Yt(e, $n, Ln);
    for (const i of ["touchmove", "mousemove"])
      r.push(Se(document, i, o));
    for (const i of ["touchend", "mouseup"])
      r.push(Se(document, i, n));
    const s = () => e.dom.bounds.clear();
    r.push(Se(document, "scroll", s, { capture: !0, passive: !0 })), r.push(Se(window, "resize", s, { passive: !0 }));
  }
  return () => r.forEach((o) => o());
}
function Se(e, t, r, o) {
  return e.addEventListener(t, r, o), () => e.removeEventListener(t, r, o);
}
const hs = (e) => (t) => {
  e.draggable.current ? Ke(e) : e.drawable.current ? $r(e) : t.shiftKey || Cr(t) ? e.drawable.enabled && xn(e, t) : e.viewOnly || (e.dropmode.active ? cs(e, t) : qn(e, t));
}, Yt = (e, t, r) => (o) => {
  e.drawable.current ? e.drawable.enabled && r(e, o) : e.viewOnly || t(e, o);
};
function fs(e) {
  const t = $(e), r = Oe(e.dom.bounds()), o = e.dom.elements.board, n = e.pieces, s = e.animation.current, i = s ? s.plan.anims : /* @__PURE__ */ new Map(), a = s ? s.plan.fadings : /* @__PURE__ */ new Map(), l = e.draggable.current, c = ms(e), u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
  let d, m, g, v, b, C, A, E, D, L;
  for (m = o.firstChild; m; ) {
    if (d = m.cgKey, Qr(m))
      if (g = n.get(d), b = i.get(d), C = a.get(d), v = m.cgPiece, m.cgDragging && (!l || l.orig !== d) && (m.classList.remove("dragging"), Z(m, r(P(d), t)), m.cgDragging = !1), !C && m.cgFading && (m.cgFading = !1, m.classList.remove("fading")), g) {
        if (b && m.cgAnimating && v === Ce(g)) {
          const k = P(d);
          k[0] += b[2], k[1] += b[3], m.classList.add("anim"), Z(m, r(k, t));
        } else
          m.cgAnimating && (m.cgAnimating = !1, m.classList.remove("anim"), Z(m, r(P(d), t)), e.addPieceZIndex && (m.style.zIndex = at(P(d), t)));
        v === Ce(g) && (!C || !m.cgFading) ? u.add(d) : C && v === Ce(C) ? (m.classList.add("fading"), m.cgFading = !0) : lt(p, v, m);
      } else
        lt(p, v, m);
    else if (Jr(m)) {
      const k = m.className;
      c.get(d) === k ? f.add(d) : lt(y, k, m);
    }
    m = m.nextSibling;
  }
  for (const [k, te] of c)
    if (!f.has(k)) {
      D = y.get(te), L = D && D.pop();
      const J = r(P(k), t);
      if (L)
        L.cgKey = k, Z(L, J);
      else {
        const X = ee("square", te);
        X.cgKey = k, Z(X, J), o.insertBefore(X, o.firstChild);
      }
    }
  for (const [k, te] of n)
    if (b = i.get(k), !u.has(k))
      if (A = p.get(Ce(te)), E = A && A.pop(), E) {
        E.cgKey = k, E.cgFading && (E.classList.remove("fading"), E.cgFading = !1);
        const J = P(k);
        e.addPieceZIndex && (E.style.zIndex = at(J, t)), b && (E.cgAnimating = !0, E.classList.add("anim"), J[0] += b[2], J[1] += b[3]), Z(E, r(J, t));
      } else {
        const J = Ce(te), X = ee("piece", J), Ne = P(k);
        X.cgPiece = J, X.cgKey = k, b && (X.cgAnimating = !0, Ne[0] += b[2], Ne[1] += b[3]), Z(X, r(Ne, t)), e.addPieceZIndex && (X.style.zIndex = at(Ne, t)), o.appendChild(X);
      }
  for (const k of p.values())
    tr(e, k);
  for (const k of y.values())
    tr(e, k);
}
function ps(e) {
  const t = $(e), r = Oe(e.dom.bounds());
  let o = e.dom.elements.board.firstChild;
  for (; o; )
    (Qr(o) && !o.cgAnimating || Jr(o)) && Z(o, r(P(o.cgKey), t)), o = o.nextSibling;
}
function er(e) {
  var t, r;
  const o = e.dom.elements.wrap.getBoundingClientRect(), n = e.dom.elements.container, s = o.height / o.width, i = Math.floor(o.width * window.devicePixelRatio / 8) * 8 / window.devicePixelRatio, a = i * s;
  n.style.width = i + "px", n.style.height = a + "px", e.dom.bounds.clear(), (t = e.addDimensionsCssVarsTo) === null || t === void 0 || t.style.setProperty("--cg-width", i + "px"), (r = e.addDimensionsCssVarsTo) === null || r === void 0 || r.style.setProperty("--cg-height", a + "px");
}
const Qr = (e) => e.tagName === "PIECE", Jr = (e) => e.tagName === "SQUARE";
function tr(e, t) {
  for (const r of t)
    e.dom.elements.board.removeChild(r);
}
function at(e, t) {
  const r = e[1];
  return `${t ? 10 - r : 3 + r}`;
}
const Ce = (e) => `${e.color} ${e.role}`;
function ms(e) {
  var t, r, o;
  const n = /* @__PURE__ */ new Map();
  if (e.lastMove && e.highlight.lastMove)
    for (const a of e.lastMove)
      Y(n, a, "last-move");
  if (e.check && e.highlight.check && Y(n, e.check, "check"), e.selected && (Y(n, e.selected, "selected"), e.movable.showDests)) {
    const a = (t = e.movable.dests) === null || t === void 0 ? void 0 : t.get(e.selected);
    if (a)
      for (const c of a)
        Y(n, c, "move-dest" + (e.pieces.has(c) ? " oc" : ""));
    const l = (o = (r = e.premovable.customDests) === null || r === void 0 ? void 0 : r.get(e.selected)) !== null && o !== void 0 ? o : e.premovable.dests;
    if (l)
      for (const c of l)
        Y(n, c, "premove-dest" + (e.pieces.has(c) ? " oc" : ""));
  }
  const s = e.premovable.current;
  if (s)
    for (const a of s)
      Y(n, a, "current-premove");
  else
    e.predroppable.current && Y(n, e.predroppable.current.key, "current-premove");
  const i = e.exploding;
  if (i)
    for (const a of i.keys)
      Y(n, a, "exploding" + i.stage);
  return e.highlight.custom && e.highlight.custom.forEach((a, l) => {
    Y(n, l, a);
  }), n;
}
function Y(e, t, r) {
  const o = e.get(t);
  o ? e.set(t, `${o} ${r}`) : e.set(t, r);
}
function lt(e, t, r) {
  const o = e.get(t);
  o ? o.push(r) : e.set(t, [r]);
}
function gs(e, t, r) {
  const o = /* @__PURE__ */ new Map(), n = [];
  for (const a of e)
    o.set(a.hash, !1);
  let s = t.firstElementChild, i;
  for (; s; )
    i = s.getAttribute("cgHash"), o.has(i) ? o.set(i, !0) : n.push(s), s = s.nextElementSibling;
  for (const a of n)
    t.removeChild(a);
  for (const a of e)
    o.get(a.hash) || t.appendChild(r(a));
}
function bs(e, t) {
  const r = e.drawable.autoShapes.filter((o) => o.piece).map((o) => ({
    shape: o,
    hash: ws(o),
    current: !1
  }));
  gs(r, t, (o) => vs(e, o, e.dom.bounds()));
}
function ys(e) {
  var t;
  const r = $(e), o = Oe(e.dom.bounds());
  let n = (t = e.dom.elements.autoPieces) === null || t === void 0 ? void 0 : t.firstChild;
  for (; n; )
    Sr(n, o(P(n.cgKey), r), n.cgScale), n = n.nextSibling;
}
function vs(e, { shape: t, hash: r }, o) {
  var n, s, i;
  const a = t.orig, l = (n = t.piece) === null || n === void 0 ? void 0 : n.role, c = (s = t.piece) === null || s === void 0 ? void 0 : s.color, u = (i = t.piece) === null || i === void 0 ? void 0 : i.scale, f = ee("piece", `${l} ${c}`);
  return f.setAttribute("cgHash", r), f.cgKey = a, f.cgScale = u, Sr(f, Oe(o)(P(a), $(e)), u), f;
}
const ws = (e) => {
  var t, r, o;
  return [e.orig, (t = e.piece) === null || t === void 0 ? void 0 : t.role, (r = e.piece) === null || r === void 0 ? void 0 : r.color, (o = e.piece) === null || o === void 0 ? void 0 : o.scale].join(",");
};
function _s(e, t) {
  const r = Vn();
  Fr(r, {});
  function o() {
    const n = "dom" in r ? r.dom.unbind : void 0, s = ls(e, r), i = sn(() => s.board.getBoundingClientRect()), a = (u) => {
      fs(c), s.autoPieces && bs(c, s.autoPieces), !u && s.svg && zn(c, s.svg, s.customSvg);
    }, l = () => {
      er(c), ps(c), s.autoPieces && ys(c);
    }, c = r;
    return c.dom = {
      elements: s,
      bounds: i,
      redraw: Ss(a),
      redrawNow: a,
      unbind: n
    }, c.drawable.prevSvgHash = "", er(c), a(!1), us(c, l), n || (c.dom.unbind = ds(c, l)), c.events.insert && c.events.insert(s), c;
  }
  return Hn(o(), o);
}
function Ss(e) {
  let t = !1;
  return () => {
    t || (t = !0, requestAnimationFrame(() => {
      e(), t = !1;
    }));
  };
}
class Cs {
  constructor(t, r, o, n) {
    T(this, "game");
    T(this, "board");
    T(this, "boardState");
    T(this, "props");
    T(this, "emit");
    this.boardState = r, this.props = o, this.emit = n, this.game = new Jo(), this.board = _s(t), this.resetBoard();
  }
  //
  //  PRIVATE INTERAL METHODS:
  //
  /**
   * syncs chess.js state with the board
   * @private
   */
  updateGameState({ updateFen: t = !0 } = {}) {
    this.boardState.historyViewerState.isEnabled || (t && this.board.set({ fen: this.game.fen() }), this.board.state.turnColor = this.getTurnColor(), this.board.state.movable.free ? (this.board.state.movable.color = "both", this.board.state.movable.dests = /* @__PURE__ */ new Map()) : (this.board.state.movable.color = this.props.playerColor || this.board.state.turnColor, this.board.state.movable.dests = Wt(this.game)), this.displayInCheck(this.game.inCheck(), this.board.state.turnColor), this.boardState.showThreats && this.drawMoves()), this.emitEvents();
  }
  /**
   * Updates the board state to display whether the king of given color is in check
   * @private
   */
  displayInCheck(t, r) {
    if (t) {
      for (const [o, n] of this.board.state.pieces)
        if (n.role === "king" && n.color === r) {
          this.board.state.check = o;
          return;
        }
    } else
      this.board.state.check = void 0;
  }
  /**
   * emits neccessary events
   * @private
   */
  emitEvents() {
    this.game.inCheck() && this.emit(
      this.game.isCheckmate() ? "checkmate" : "check",
      this.board.state.turnColor
    ), this.game.isDraw() && this.emit("draw"), this.game.isStalemate() && this.emit("stalemate");
  }
  /**
   * Changes the turn of the game, triggered by config.movable.events.after
   * @private
   */
  async changeTurn(t, r, o) {
    let n;
    Zo(r, this.game.get(t)) && (n = await new Promise((s) => {
      this.boardState.promotionDialogState = {
        isEnabled: !0,
        color: this.getTurnColor(),
        callback: s
      };
    })), this.move({
      from: t,
      to: r,
      promotion: n
    });
  }
  //
  //  PUBLIC API METHODS:
  //
  /**
   * Resets the board to the initial starting configuration.
   */
  resetBoard() {
    this.setConfig(this.props.boardConfig, !0);
  }
  /**
   * undo last move, if possible
   */
  undoLastMove() {
    const t = this.game.undo();
    if (t != null && (this.boardState.historyViewerState.isEnabled && this.boardState.historyViewerState.plyViewing === this.getCurrentPlyNumber() && this.stopViewingHistory(), !this.boardState.historyViewerState.isEnabled)) {
      this.board.set({ fen: t.before }), this.updateGameState({ updateFen: !1 });
      const r = this.getLastMove();
      this.board.state.lastMove = r ? [r == null ? void 0 : r.from, r == null ? void 0 : r.to] : void 0;
    }
  }
  /**
   * returns the current material count for white, black and the diff.
   * If diff > 0 white is leading, else black.
   */
  getMaterialCount() {
    const t = this.board.state.pieces, r = {
      pawn: 1,
      knight: 3,
      bishop: 3,
      rook: 5,
      queen: 9,
      king: 0
    }, o = {
      materialWhite: 0,
      materialBlack: 0,
      materialDiff: 0
    };
    for (const n of t)
      n[1].color === "white" ? o.materialWhite += r[n[1].role] : o.materialBlack += r[n[1].role];
    return o.materialDiff = o.materialWhite - o.materialBlack, o;
  }
  /**
   * Finds all the captured pieces from the game history.
   *
   * Note: results may be innaccurate if game history has been lost, eg. if
   * setPosition has been called.
   *
   * @returns an object with white and black properties whose values are arrays
   * of all the pieces captured by that player this game.
   */
  getCapturedPieces() {
    const t = {
      white: [],
      black: []
    };
    for (const { color: r, captured: o } of this.getHistory(!0))
      o && t[Be(r)].push(o);
    return t;
  }
  /**
   * toggles the board orientation.
   */
  toggleOrientation() {
    this.board.toggleOrientation();
  }
  /**
   * draws arrows and circles on the board for possible moves/captures
   */
  drawMoves() {
    this.boardState.showThreats = !0, this.board.setShapes(Xo(this.game.moves({ verbose: !0 })));
  }
  /**
   * removes arrows and circles from the board for possible moves/captures
   */
  hideMoves() {
    this.boardState.showThreats = !1, this.board.setShapes([]);
  }
  /**
   * draws an arrow on the board
   */
  drawMove(t, r, o) {
    this.board.setShapes([
      {
        orig: t,
        dest: r,
        brush: o
      }
    ]);
  }
  /**
   * toggle drawing of arrows and circles on the board for possible moves/captures
   */
  toggleMoves() {
    this.boardState.showThreats ? this.hideMoves() : this.drawMoves();
  }
  /**
   * returns the opening name for the current position from lichess api
   */
  async getOpeningName() {
    var t;
    try {
      const r = this.game.history({ verbose: !0 }).map((o) => o.lan).join(",");
      return ((t = (await (await fetch(
        `https://explorer.lichess.ovh/masters?play=${r}`
      )).json()).opening) == null ? void 0 : t.name) ?? null;
    } catch {
      return null;
    }
  }
  /**
   * make a move programmatically on the board
   * @param move either a string in Standard Algebraic Notation (SAN), eg. 'e4', 'exd5', 'O-O', 'Nf3' or 'e8=Q'
   * or an object of shape { from: string; to: string; promotion?: string; }, eg. { from: 'g8', to: 'f6' } or
   * { from: 'e7', to: 'e8', promotion: 'q'}
   * @returns true if the move was made, false if the move was illegal
   */
  move(t) {
    let r;
    try {
      r = this.game.move(t);
    } catch {
      return typeof t == "object" && this.board.state.movable.free && (this.board.move(t.from, t.to), this.updateGameState({ updateFen: !1 })), !1;
    }
    return this.emit("move", r), r != null && r.promotion && this.emit("promotion", {
      color: Be(r.color),
      promotedTo: r.promotion.toUpperCase(),
      sanMove: r.san
    }), this.boardState.historyViewerState.isEnabled || (this.board.move(r.from, r.to), (r.flags === "e" || r != null && r.promotion) && setTimeout(
      () => this.board.set({ fen: r.after }),
      this.board.state.animation.current ? this.board.state.animation.duration : 0
    ), this.updateGameState({ updateFen: !1 }), Ro(this.board.playPremove)), !0;
  }
  /**
   * returns the current turn color
   * @returns 'white' or 'black'
   */
  getTurnColor() {
    return Be(this.game.turn());
  }
  /**
   * returns all possible moves for the current position
   *
   */
  getPossibleMoves() {
    return Wt(this.game);
  }
  /**
   *
   * @returns the current turn number
   * @example e4 e5 -> turn number is 2
   */
  getCurrentTurnNumber() {
    return this.game.moveNumber();
  }
  /**
   *
   * @returns the current ply number
   * @example e4 e5 Nf3 -> ply number is 3
   */
  getCurrentPlyNumber() {
    return 2 * this.getCurrentTurnNumber() - (this.getTurnColor() === "black" ? 1 : 2);
  }
  /**
   * returns the latest move made on the board
   */
  getLastMove() {
    return this.game.history({ verbose: !0 }).at(-1);
  }
  getHistory(t = !1) {
    return this.game.history({ verbose: t });
  }
  /**
   * Returns the FEN string for the current position.
   */
  getFen() {
    return this.game.fen();
  }
  /**
   * Returns the board position as a 2D array.
   */
  getBoardPosition() {
    return this.game.board();
  }
  /**
   * returns the PGN string for the current position.
   */
  getPgn() {
    return this.game.pgn();
  }
  /**
   * returns true of false depending on if the game is over
   */
  getIsGameOver() {
    return this.game.isGameOver();
  }
  /**
   * returns true or false depending on if a player is checkmated
   */
  getIsCheckmate() {
    return this.game.isCheckmate();
  }
  /**
   * returns true or false depending on if a player is in check
   */
  getIsCheck() {
    return this.game.isCheck();
  }
  /**
   * returns true or false depending on if a player is in stalemate
   */
  getIsStalemate() {
    return this.game.isStalemate();
  }
  /**
   * returns true or false depending on if a game is drawn
   */
  getIsDraw() {
    return this.game.isDraw();
  }
  /**
   * returns true or false depending on if a game is drawn by threefold repetition
   */
  getIsThreefoldRepetition() {
    return this.game.isThreefoldRepetition();
  }
  /**
   * returns true or false depending on if a game is drawn by insufficient material
   */
  getIsInsufficientMaterial() {
    return this.game.isInsufficientMaterial();
  }
  /**
   * returns the color of a given square
   */
  getSquareColor(t) {
    return this.game.squareColor(t);
  }
  /**
   * Returns the piece on the square or null if there is no piece
   */
  getSquare(t) {
    return this.game.get(t);
  }
  /**
   * loads a fen into the board
   * Caution: this will erase the game history. To set position with history call loadPgn with a pgn instead
   */
  setPosition(t) {
    this.game.load(t), this.boardState.historyViewerState = { isEnabled: !1 }, this.updateGameState();
  }
  /**
   * puts a piece on a given square on the board
   * returns true on success, else false
   */
  putPiece(t, r) {
    if (this.board.state.movable.free) {
      const o = this.board.state.pieces;
      return o.set(r, {
        color: t.color === "w" ? "white" : "black",
        role: Yo[t.type]
      }), this.board.setPieces(o), !0;
    } else {
      const o = this.game.put(t, r);
      return o && this.updateGameState(), o;
    }
  }
  /**
   * Removes a piece from the board.
   * @param square - The square where the piece is located.
   */
  removePiece(t) {
    this.board.state.pieces.delete(t), this.game.remove(t);
  }
  /**
   * removes all pieces from the board
   */
  clearBoard() {
    this.game.clear(), this.boardState.historyViewerState = { isEnabled: !1 }, this.updateGameState();
  }
  /**
   * draw multiple arrows on the board
   */
  setShapes(t) {
    this.board.setShapes(t);
  }
  /**
   * loads a pgn into the board
   *
   * @param pgn - the pgn to load
   */
  loadPgn(t) {
    this.game.loadPgn(t), this.boardState.historyViewerState = { isEnabled: !1 }, this.updateGameState();
    const r = this.getLastMove();
    r && this.board.set({ lastMove: [r.from, r.to] });
  }
  /**
   * returns the header information of the current pgn, if no pgn is loaded, returns an empty object
   * @example {
   * "Event": "IBM Kasparov vs. Deep Blue Rematch",
   * "Site": "New York, NY USA",
   * "Date": "1997.05.11",
   * "Round": "6",
   * "White": "Deep Blue",
   * "Black": "Kasparov, Garry",
   * "Opening": "Caro-Kann: 4...Nd7",
   * "ECO": "B17",
   * "Result": "1-0"
   * }
   */
  getPgnInfo() {
    return this.game.header();
  }
  /**
   * Sets a header in the PGN.
   *
   * @param changes a record of key value pairs to change in the PGN, eg. `{ White: 'Deep Blue', Black: 'Kasparov, Garry' }`
   */
  setPgnInfo(t) {
    return this.game.header(...Object.entries(t).flat());
  }
  /**
   * Sets the config of the board.
   * Caution: providing a config with a fen will erase the game history and change the starting position
   * for resetBoard. To keep history and starting position: omit fen from the given config and call
   * loadPgn with a pgn instead.
   *
   * @param config - a subset of config options, eg. `{ viewOnly: true, animation: { enabled: false } }`
   * or `{ movable: { events: { after: afterFunc }, showDests: false }, drawable: { enabled: false } }`
   * @param fillDefaults - if true unprovided config options will be substituted with default values, if
   * false the unprovided options will remain unchanged.
   */
  setConfig(t, r = !1) {
    var s;
    if (r && (t = vr(rn, t), this.board.state.selected = void 0), ((s = t.movable) == null ? void 0 : s.events) && "after" in t.movable.events) {
      const i = t.movable.events.after;
      t.movable.events.after = i ? async (...a) => {
        await this.changeTurn(...a), i(...a);
      } : this.changeTurn.bind(this);
    }
    const { fen: o, ...n } = t;
    this.board.set(n), o && this.setPosition(o), this.board.redrawAll();
  }
  /**
   * Views the position at the given ply number in the game's history.
   *
   * @param ply - the ply number of the position to be viewed, where 0 is the initial position, 1 is
   * after white's first move, 2 is after black's first move and so on.
   */
  viewHistory(t) {
    const r = this.getHistory(!0);
    if (t < 0 || t > r.length)
      return;
    const o = this.board.state.animation.enabled && (this.boardState.historyViewerState.isEnabled && Math.abs(this.boardState.historyViewerState.plyViewing - t) !== 1 || !this.boardState.historyViewerState.isEnabled && t !== r.length - 1);
    if (o && this.board.set({ animation: { enabled: !1 } }), t < r.length)
      this.boardState.historyViewerState.isEnabled ? this.boardState.historyViewerState.plyViewing = t : this.boardState.historyViewerState = {
        isEnabled: !0,
        plyViewing: t,
        viewOnly: this.board.state.viewOnly
      }, this.board.set({
        fen: r[t].before,
        viewOnly: !0,
        lastMove: t > 0 ? [r[t - 1].from, r[t - 1].to] : void 0,
        selected: void 0
      }), this.displayInCheck(
        t > 0 ? "+#".includes(r[t - 1].san.at(-1)) : !1,
        Be(r[t].color)
      ), this.board.cancelPremove();
    else if (this.boardState.historyViewerState.isEnabled) {
      const n = r.at(-1);
      this.board.set({
        fen: n.after,
        viewOnly: this.boardState.historyViewerState.viewOnly,
        lastMove: [n.from, n.to]
      }), this.boardState.historyViewerState = { isEnabled: !1 }, this.updateGameState({ updateFen: !1 });
    }
    o && this.board.set({ animation: { enabled: !0 } });
  }
  /**
   * Stops viewing history and returns the board to the present position, ie. after the latest move.
   */
  stopViewingHistory() {
    this.boardState.historyViewerState.isEnabled && this.viewHistory(this.getCurrentPlyNumber());
  }
  /**
   * Views the starting position of this game.
   */
  viewStart() {
    this.viewHistory(0);
  }
  /**
   * If viewing history, views the move after the one currently being viewed.
   * If that move is the latest move, stops viewing history.
   */
  viewNext() {
    this.boardState.historyViewerState.isEnabled && this.viewHistory(this.boardState.historyViewerState.plyViewing + 1);
  }
  /**
   * If viewing history, views the previous move to the one currently being viewed.
   * Else, starts viewing history and views the move previous to the latest move.
   */
  viewPrevious() {
    const t = this.boardState.historyViewerState.isEnabled ? this.boardState.historyViewerState.plyViewing : this.getCurrentPlyNumber();
    this.viewHistory(t - 1);
  }
}
const ks = { class: "main-board" }, Es = /* @__PURE__ */ gr({
  __name: "TheChessboard",
  props: {
    boardConfig: { default: () => ({}) },
    playerColor: {},
    reactiveConfig: { type: Boolean, default: !1 }
  },
  emits: ["boardCreated", "check", "checkmate", "stalemate", "draw", "promotion", "move"],
  setup(e, { emit: t }) {
    const r = e, o = ko(null), n = jt({
      showThreats: !1,
      promotionDialogState: { isEnabled: !1 },
      historyViewerState: { isEnabled: !1 }
    });
    return Eo(() => {
      if (o.value == null)
        throw new Error("vue3-chessboard: Failed to mount board.");
      const s = new Cs(o.value, n, r, t);
      if (t("boardCreated", s), r.reactiveConfig) {
        let i = $e(r.boardConfig);
        To(jt(r.boardConfig), (a) => {
          s.setConfig(wr(i, a)), i = $e(a);
        });
      }
    }), (s, i) => (q(), he("section", {
      class: Ue(["main-wrap", {
        disabledBoard: n.promotionDialogState.isEnabled,
        viewingHistory: n.historyViewerState.isEnabled
      }])
    }, [
      R("div", ks, [
        n.promotionDialogState.isEnabled ? (q(), ue(Bo, {
          key: 0,
          state: n.promotionDialogState,
          onPromotionSelected: i[0] || (i[0] = (a) => n.promotionDialogState = { isEnabled: !1 })
        }, null, 8, ["state"])) : De("", !0),
        R("div", {
          ref_key: "boardElement",
          ref: o
        }, null, 512)
      ])
    ], 2));
  }
}), Qe = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, Ts = {
  props: {
    initialTime: {
      type: Number,
      required: !0
    }
  },
  data() {
    return {
      timeLeft: this.initialTime,
      timer: null
    };
  },
  computed: {
    formattedTime() {
      const e = Math.floor(this.timeLeft / 60), t = this.timeLeft % 60;
      return `${e}:${t < 10 ? "0" : ""}${t}`;
    }
  },
  beforeUnmount() {
    this.clearTimer();
  },
  methods: {
    startTimer() {
      this.timeLeft = this.initialTime, this.resumeTimer();
    },
    resumeTimer() {
      this.timer = setInterval(() => {
        this.timeLeft > 0 ? this.timeLeft -= 1 : (this.clearTimer(), this.$emit("time-up"));
      }, 1e3);
    },
    pauseTimer() {
      this.timer && (clearInterval(this.timer), this.timer = null);
    },
    clearTimer() {
      this.timer && (clearInterval(this.timer), this.timer = null);
    }
  }
};
function Ps(e, t, r, o, n, s) {
  return q(), he("div", null, br(s.formattedTime), 1);
}
const As = /* @__PURE__ */ Qe(Ts, [["render", Ps], ["__scopeId", "data-v-3770351d"]]);
class Rs {
  constructor(t, r = "", o = 1, n = "white", s = !0) {
    T(this, "stockfish");
    T(this, "boardApi");
    T(this, "bestMove");
    T(this, "level");
    T(this, "currentPlayer");
    T(this, "isPlayWithBot");
    T(this, "isStarted", !1);
    T(this, "engineName");
    this.boardApi = t;
    const i = typeof WebAssembly == "object" && WebAssembly.validate(
      Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0)
    );
    this.stockfish = new Worker(i ? `${r}/stockfish.wasm.js` : `${r}/stockfish.js`), this.setupListeners(), this.stockfish.postMessage("uci"), this.level = o, this.currentPlayer = n, this.isPlayWithBot = s;
  }
  setupListeners() {
    this.stockfish.addEventListener("message", (t) => this.handleEngineStdout(t)), this.stockfish.addEventListener("error", (t) => console.error(t)), this.stockfish.addEventListener("messageerror", (t) => console.error(t));
  }
  startGame() {
    this.isStarted = !0, this.isPlayWithBot && this.currentPlayer !== "white" && this.boardApi.move({
      from: this.bestMove.slice(0, 2),
      to: this.bestMove.slice(2, 4)
    });
  }
  handleEngineStdout(t) {
    const r = t.data.split(" ");
    if (r[0] === "uciok") {
      this.setOption("UCI_AnalyseMode", "true"), this.setOption("Analysis Contempt", "Off"), this.stockfish.postMessage("ucinewgame"), this.stockfish.postMessage("isready");
      return;
    }
    if (r[0] === "readyok") {
      this.stockfish.postMessage("go movetime" + 12 * this.level);
      return;
    }
    r[0] === "bestmove" && r[1] && r[1] !== this.bestMove && (this.bestMove = r[1], this.isStarted && this.isPlayWithBot && this.boardApi.getTurnColor() === (this.currentPlayer === "white" ? "black" : "white") && this.boardApi.move({
      from: this.bestMove.slice(0, 2),
      to: this.bestMove.slice(2, 4)
    }));
  }
  setOption(t, r) {
    this.stockfish.postMessage(`setoption name ${t} value ${r}`);
  }
  sendPosition(t) {
    this.stockfish.postMessage(`position startpos moves ${t}`);
    const r = this.boardApi.getTurnColor() !== this.currentPlayer ? this.level : 1;
    this.stockfish.postMessage(`go dept ${r}`);
  }
}
const Os = {
  components: {
    TheChessboard: Es,
    Timer: As
  },
  props: {
    handleMove: Function
  },
  inject: ["playerProfiles", "baseUrl", "isetupPlayer", "iPlayWithBot"],
  data() {
    return {
      isFirstMoveDone: !1,
      engine: null,
      showSupportLine: !1,
      inTimePause: !0,
      currentPlayer: "white",
      setupPlayer: this.isetupPlayer || "white",
      boardAPI: null,
      boardConfig: {},
      end: !0,
      message: "Wait for start"
    };
  },
  created() {
    this.boardConfig = {
      events: {
        select: async () => {
          var e, t;
          (e = this.engine) != null && e.bestMove && this.currentPlayer === this.setupPlayer && this.showSupportLine && ((t = this.boardAPI) == null || t.drawMove(
            this.engine.bestMove.slice(0, 2),
            this.engine.bestMove.slice(2, 4),
            "paleBlue"
          ));
        },
        move: () => {
          var e;
          (e = this.boardAPI) == null || e.hideMoves();
        }
      },
      autoCastle: !0,
      viewOnly: !1,
      disableContextMenu: !1,
      addPieceZIndex: !0,
      blockTouchScroll: !0,
      orientation: this.setupPlayer
    };
  },
  methods: {
    handleBoardCreated(e) {
      this.boardAPI = e, this.engine = new Rs(
        e,
        this.baseUrl || window.location.origin,
        1,
        this.setupPlayer,
        this.iPlayWithBot
      );
    },
    handleTimeUp(e) {
      this.message = `${e} time is up!`, this.end = !0, this.inTimePause = !0;
    },
    callTimeout(e) {
      this.$refs.whiteTimer.pauseTimer(), this.$refs.blackTimer.pauseTimer(), this.$refs.timeoutTimer.startTimer(), this.inTimePause = !0, this.boardConfig.viewOnly = !0;
    },
    handleTimeoutOver() {
      this.currentPlayer == "white" ? this.$refs.whiteTimer.resumeTimer() : this.$refs.blackTimer.resumeTimer(), this.inTimePause = !1, this.boardConfig.viewOnly = !1;
    },
    startBlackTimer() {
      this.currentPlayer = "black", this.$refs.blackTimer.resumeTimer(), this.$refs.whiteTimer.pauseTimer();
    },
    startWhiteTimer() {
      this.currentPlayer = "white", this.$refs.whiteTimer.resumeTimer(), this.$refs.blackTimer.pauseTimer();
    },
    handleStalemate() {
      this.message = "Stalemate! The game is a draw.", this.end = !0, this.inTimePause = !0;
    },
    handleCheckmate({ winner: e, loser: t }) {
      this.message = `Checkmate! ${e} wins against ${t}.`, this.end = !0, this.inTimePause = !0;
    },
    handleDraw() {
      this.message = "Draw! The game is a draw.", this.end = !0, this.inTimePause = !0;
    },
    handleCheck({ playerInCheck: e }) {
      this.message = `Check! ${e} is in check.`;
    },
    handlePromotion({ player: e, from: t, to: r, promotionPiece: o }) {
      this.message = `${e} promoted a pawn from ${t} to ${r} to a ${o}.`;
    },
    startGame() {
      this.engine.startGame(), this.inTimePause = !1, this.end = !1, this.message = "";
    }
  }
}, Ms = { class: "game-loadout game-loadout-mobile" }, xs = { class: "profile" }, Ns = { class: "avatar" }, Ls = ["src"], Bs = ["innerHTML"], Ds = { class: "profile" }, Is = { class: "avatar" }, qs = ["src"], Fs = ["innerHTML"], Us = { class: "chessboard-wrap" }, js = { class: "text" };
function $s(e, t, r, o, n, s) {
  const i = je("TheChessboard"), a = je("Timer");
  return q(), he("div", null, [
    R("div", Ms, [
      R("div", {
        id: "player2-profile",
        class: Ue(["pprofile", n.setupPlayer === "black" ? "in-move" : ""])
      }, [
        R("div", xs, [
          R("div", Ns, [
            R("img", {
              src: s.playerProfiles.player2.avatar
            }, null, 8, Ls)
          ]),
          R("div", {
            class: "player-name",
            innerHTML: s.playerProfiles.player2.name
          }, null, 8, Bs)
        ])
      ], 2),
      t[6] || (t[6] = R("div", { id: "game-field" }, null, -1)),
      R("div", {
        id: "player1-profile",
        class: Ue(["pprofile", n.setupPlayer === "white" ? "in-move" : ""])
      }, [
        R("div", Ds, [
          R("div", Is, [
            R("img", {
              src: s.playerProfiles.player1.avatar
            }, null, 8, qs)
          ]),
          R("div", {
            class: "player-name",
            innerHTML: s.playerProfiles.player1.name
          }, null, 8, Fs)
        ])
      ], 2)
    ]),
    (q(), ue(tt, {
      to: "#game-field",
      defer: ""
    }, [
      R("div", Us, [
        rt(i, {
          ref: "chessboard",
          onStalemate: s.handleStalemate,
          onBoardCreated: s.handleBoardCreated,
          onMove: r.handleMove,
          onCheckmate: s.handleCheckmate,
          onDraw: s.handleDraw,
          onCheck: s.handleCheck,
          onPromotion: s.handlePromotion,
          "board-config": n.boardConfig,
          "player-color": n.setupPlayer,
          orientation: n.setupPlayer
        }, null, 8, ["onStalemate", "onBoardCreated", "onMove", "onCheckmate", "onDraw", "onCheck", "onPromotion", "board-config", "player-color", "orientation"]),
        R("div", {
          class: "chessboard-overlay",
          style: Oo(`display: ${n.inTimePause ? "block" : "none"}`)
        }, [
          R("div", js, [
            $t(br(n.end ? n.message : `${n.currentPlayer} call timeout`) + " ", 1),
            n.end ? De("", !0) : (q(), ue(a, {
              key: 0,
              ref: "timeoutTimer",
              initialTime: 60,
              onTimeUp: t[0] || (t[0] = (l) => s.handleTimeoutOver())
            }, null, 512)),
            n.isFirstMoveDone ? De("", !0) : (q(), he("button", {
              key: 1,
              onClick: t[1] || (t[1] = (l) => s.startGame())
            }, " Start game "))
          ])
        ], 4)
      ])
    ])),
    (q(), ue(tt, {
      to: "#player1-profile",
      defer: ""
    }, [
      rt(a, {
        ref: n.setupPlayer === "white" ? "whiteTimer" : "blackTimer",
        initialTime: 600,
        onTimeUp: t[2] || (t[2] = (l) => s.handleTimeUp(n.setupPlayer))
      }, null, 512),
      n.currentPlayer === n.setupPlayer ? (q(), he("button", {
        key: 0,
        onClick: t[3] || (t[3] = (l) => s.callTimeout(n.setupPlayer))
      }, " Call Timeout ")) : De("", !0),
      R("label", null, [
        Mo(R("input", {
          type: "checkbox",
          "onUpdate:modelValue": t[4] || (t[4] = (l) => n.showSupportLine = l)
        }, null, 512), [
          [xo, n.showSupportLine]
        ]),
        t[7] || (t[7] = $t(" Show Support Line "))
      ])
    ])),
    (q(), ue(tt, {
      to: "#player2-profile",
      defer: ""
    }, [
      rt(a, {
        ref: n.setupPlayer === "black" ? "whiteTimer" : "blackTimer",
        initialTime: 600,
        onTimeUp: t[5] || (t[5] = (l) => s.handleTimeUp(n.currentPlayer === "white" ? "black" : "white"))
      }, null, 512)
    ]))
  ]);
}
const We = /* @__PURE__ */ Qe(Os, [["render", $s], ["__scopeId", "data-v-1c777a78"]]);
function Xr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ks } = Object.prototype, { getPrototypeOf: Dt } = Object, Je = /* @__PURE__ */ ((e) => (t) => {
  const r = Ks.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Q = (e) => (e = e.toLowerCase(), (t) => Je(t) === e), Xe = (e) => (t) => typeof t === e, { isArray: ve } = Array, Re = Xe("undefined");
function Hs(e) {
  return e !== null && !Re(e) && e.constructor !== null && !Re(e.constructor) && V(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Zr = Q("ArrayBuffer");
function Vs(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Zr(e.buffer), t;
}
const Ws = Xe("string"), V = Xe("function"), Yr = Xe("number"), Ze = (e) => e !== null && typeof e == "object", zs = (e) => e === !0 || e === !1, qe = (e) => {
  if (Je(e) !== "object")
    return !1;
  const t = Dt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Gs = Q("Date"), Qs = Q("File"), Js = Q("Blob"), Xs = Q("FileList"), Zs = (e) => Ze(e) && V(e.pipe), Ys = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || V(e.append) && ((t = Je(e)) === "formdata" || // detect form-data instance
  t === "object" && V(e.toString) && e.toString() === "[object FormData]"));
}, ei = Q("URLSearchParams"), [ti, ri, oi, ni] = ["ReadableStream", "Request", "Response", "Headers"].map(Q), si = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Me(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let o, n;
  if (typeof e != "object" && (e = [e]), ve(e))
    for (o = 0, n = e.length; o < n; o++)
      t.call(null, e[o], o, e);
  else {
    const s = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (o = 0; o < i; o++)
      a = s[o], t.call(null, e[a], a, e);
  }
}
function eo(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let o = r.length, n;
  for (; o-- > 0; )
    if (n = r[o], t === n.toLowerCase())
      return n;
  return null;
}
const de = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, to = (e) => !Re(e) && e !== de;
function yt() {
  const { caseless: e } = to(this) && this || {}, t = {}, r = (o, n) => {
    const s = e && eo(t, n) || n;
    qe(t[s]) && qe(o) ? t[s] = yt(t[s], o) : qe(o) ? t[s] = yt({}, o) : ve(o) ? t[s] = o.slice() : t[s] = o;
  };
  for (let o = 0, n = arguments.length; o < n; o++)
    arguments[o] && Me(arguments[o], r);
  return t;
}
const ii = (e, t, r, { allOwnKeys: o } = {}) => (Me(t, (n, s) => {
  r && V(n) ? e[s] = Xr(n, r) : e[s] = n;
}, { allOwnKeys: o }), e), ai = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), li = (e, t, r, o) => {
  e.prototype = Object.create(t.prototype, o), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, ci = (e, t, r, o) => {
  let n, s, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (n = Object.getOwnPropertyNames(e), s = n.length; s-- > 0; )
      i = n[s], (!o || o(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = r !== !1 && Dt(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, ui = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const o = e.indexOf(t, r);
  return o !== -1 && o === r;
}, di = (e) => {
  if (!e) return null;
  if (ve(e)) return e;
  let t = e.length;
  if (!Yr(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, hi = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Dt(Uint8Array)), fi = (e, t) => {
  const o = (e && e[Symbol.iterator]).call(e);
  let n;
  for (; (n = o.next()) && !n.done; ) {
    const s = n.value;
    t.call(e, s[0], s[1]);
  }
}, pi = (e, t) => {
  let r;
  const o = [];
  for (; (r = e.exec(t)) !== null; )
    o.push(r);
  return o;
}, mi = Q("HTMLFormElement"), gi = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, o, n) {
    return o.toUpperCase() + n;
  }
), rr = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), bi = Q("RegExp"), ro = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), o = {};
  Me(r, (n, s) => {
    let i;
    (i = t(n, s, e)) !== !1 && (o[s] = i || n);
  }), Object.defineProperties(e, o);
}, yi = (e) => {
  ro(e, (t, r) => {
    if (V(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const o = e[r];
    if (V(o)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, vi = (e, t) => {
  const r = {}, o = (n) => {
    n.forEach((s) => {
      r[s] = !0;
    });
  };
  return ve(e) ? o(e) : o(String(e).split(t)), r;
}, wi = () => {
}, _i = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, ct = "abcdefghijklmnopqrstuvwxyz", or = "0123456789", oo = {
  DIGIT: or,
  ALPHA: ct,
  ALPHA_DIGIT: ct + ct.toUpperCase() + or
}, Si = (e = 16, t = oo.ALPHA_DIGIT) => {
  let r = "";
  const { length: o } = t;
  for (; e--; )
    r += t[Math.random() * o | 0];
  return r;
};
function Ci(e) {
  return !!(e && V(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ki = (e) => {
  const t = new Array(10), r = (o, n) => {
    if (Ze(o)) {
      if (t.indexOf(o) >= 0)
        return;
      if (!("toJSON" in o)) {
        t[n] = o;
        const s = ve(o) ? [] : {};
        return Me(o, (i, a) => {
          const l = r(i, n + 1);
          !Re(l) && (s[a] = l);
        }), t[n] = void 0, s;
      }
    }
    return o;
  };
  return r(e, 0);
}, Ei = Q("AsyncFunction"), Ti = (e) => e && (Ze(e) || V(e)) && V(e.then) && V(e.catch), no = ((e, t) => e ? setImmediate : t ? ((r, o) => (de.addEventListener("message", ({ source: n, data: s }) => {
  n === de && s === r && o.length && o.shift()();
}, !1), (n) => {
  o.push(n), de.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  V(de.postMessage)
), Pi = typeof queueMicrotask < "u" ? queueMicrotask.bind(de) : typeof process < "u" && process.nextTick || no, h = {
  isArray: ve,
  isArrayBuffer: Zr,
  isBuffer: Hs,
  isFormData: Ys,
  isArrayBufferView: Vs,
  isString: Ws,
  isNumber: Yr,
  isBoolean: zs,
  isObject: Ze,
  isPlainObject: qe,
  isReadableStream: ti,
  isRequest: ri,
  isResponse: oi,
  isHeaders: ni,
  isUndefined: Re,
  isDate: Gs,
  isFile: Qs,
  isBlob: Js,
  isRegExp: bi,
  isFunction: V,
  isStream: Zs,
  isURLSearchParams: ei,
  isTypedArray: hi,
  isFileList: Xs,
  forEach: Me,
  merge: yt,
  extend: ii,
  trim: si,
  stripBOM: ai,
  inherits: li,
  toFlatObject: ci,
  kindOf: Je,
  kindOfTest: Q,
  endsWith: ui,
  toArray: di,
  forEachEntry: fi,
  matchAll: pi,
  isHTMLForm: mi,
  hasOwnProperty: rr,
  hasOwnProp: rr,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ro,
  freezeMethods: yi,
  toObjectSet: vi,
  toCamelCase: gi,
  noop: wi,
  toFiniteNumber: _i,
  findKey: eo,
  global: de,
  isContextDefined: to,
  ALPHABET: oo,
  generateString: Si,
  isSpecCompliantForm: Ci,
  toJSONObject: ki,
  isAsyncFn: Ei,
  isThenable: Ti,
  setImmediate: no,
  asap: Pi
};
function S(e, t, r, o, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), o && (this.request = o), n && (this.response = n, this.status = n.status ? n.status : null);
}
h.inherits(S, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: h.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const so = S.prototype, io = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  io[e] = { value: e };
});
Object.defineProperties(S, io);
Object.defineProperty(so, "isAxiosError", { value: !0 });
S.from = (e, t, r, o, n, s) => {
  const i = Object.create(so);
  return h.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), S.call(i, e.message, t, r, o, n), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const Ai = null;
function vt(e) {
  return h.isPlainObject(e) || h.isArray(e);
}
function ao(e) {
  return h.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function nr(e, t, r) {
  return e ? e.concat(t).map(function(n, s) {
    return n = ao(n), !r && s ? "[" + n + "]" : n;
  }).join(r ? "." : "") : t;
}
function Ri(e) {
  return h.isArray(e) && !e.some(vt);
}
const Oi = h.toFlatObject(h, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ye(e, t, r) {
  if (!h.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = h.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, g) {
    return !h.isUndefined(g[m]);
  });
  const o = r.metaTokens, n = r.visitor || u, s = r.dots, i = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && h.isSpecCompliantForm(t);
  if (!h.isFunction(n))
    throw new TypeError("visitor must be a function");
  function c(d) {
    if (d === null) return "";
    if (h.isDate(d))
      return d.toISOString();
    if (!l && h.isBlob(d))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(d) || h.isTypedArray(d) ? l && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function u(d, m, g) {
    let v = d;
    if (d && !g && typeof d == "object") {
      if (h.endsWith(m, "{}"))
        m = o ? m : m.slice(0, -2), d = JSON.stringify(d);
      else if (h.isArray(d) && Ri(d) || (h.isFileList(d) || h.endsWith(m, "[]")) && (v = h.toArray(d)))
        return m = ao(m), v.forEach(function(C, A) {
          !(h.isUndefined(C) || C === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? nr([m], A, s) : i === null ? m : m + "[]",
            c(C)
          );
        }), !1;
    }
    return vt(d) ? !0 : (t.append(nr(g, m, s), c(d)), !1);
  }
  const f = [], p = Object.assign(Oi, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: vt
  });
  function y(d, m) {
    if (!h.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(d), h.forEach(d, function(v, b) {
        (!(h.isUndefined(v) || v === null) && n.call(
          t,
          v,
          h.isString(b) ? b.trim() : b,
          m,
          p
        )) === !0 && y(v, m ? m.concat(b) : [b]);
      }), f.pop();
    }
  }
  if (!h.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function sr(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(o) {
    return t[o];
  });
}
function It(e, t) {
  this._pairs = [], e && Ye(e, this, t);
}
const lo = It.prototype;
lo.append = function(t, r) {
  this._pairs.push([t, r]);
};
lo.toString = function(t) {
  const r = t ? function(o) {
    return t.call(this, o, sr);
  } : sr;
  return this._pairs.map(function(n) {
    return r(n[0]) + "=" + r(n[1]);
  }, "").join("&");
};
function Mi(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function co(e, t, r) {
  if (!t)
    return e;
  const o = r && r.encode || Mi, n = r && r.serialize;
  let s;
  if (n ? s = n(t, r) : s = h.isURLSearchParams(t) ? t.toString() : new It(t, r).toString(o), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class ir {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, o) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    h.forEach(this.handlers, function(o) {
      o !== null && t(o);
    });
  }
}
const uo = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, xi = typeof URLSearchParams < "u" ? URLSearchParams : It, Ni = typeof FormData < "u" ? FormData : null, Li = typeof Blob < "u" ? Blob : null, Bi = {
  isBrowser: !0,
  classes: {
    URLSearchParams: xi,
    FormData: Ni,
    Blob: Li
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, qt = typeof window < "u" && typeof document < "u", wt = typeof navigator == "object" && navigator || void 0, Di = qt && (!wt || ["ReactNative", "NativeScript", "NS"].indexOf(wt.product) < 0), Ii = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", qi = qt && window.location.href || "http://localhost", Fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: qt,
  hasStandardBrowserEnv: Di,
  hasStandardBrowserWebWorkerEnv: Ii,
  navigator: wt,
  origin: qi
}, Symbol.toStringTag, { value: "Module" })), F = {
  ...Fi,
  ...Bi
};
function Ui(e, t) {
  return Ye(e, new F.classes.URLSearchParams(), Object.assign({
    visitor: function(r, o, n, s) {
      return F.isNode && h.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function ji(e) {
  return h.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function $i(e) {
  const t = {}, r = Object.keys(e);
  let o;
  const n = r.length;
  let s;
  for (o = 0; o < n; o++)
    s = r[o], t[s] = e[s];
  return t;
}
function ho(e) {
  function t(r, o, n, s) {
    let i = r[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), l = s >= r.length;
    return i = !i && h.isArray(n) ? n.length : i, l ? (h.hasOwnProp(n, i) ? n[i] = [n[i], o] : n[i] = o, !a) : ((!n[i] || !h.isObject(n[i])) && (n[i] = []), t(r, o, n[i], s) && h.isArray(n[i]) && (n[i] = $i(n[i])), !a);
  }
  if (h.isFormData(e) && h.isFunction(e.entries)) {
    const r = {};
    return h.forEachEntry(e, (o, n) => {
      t(ji(o), n, r, 0);
    }), r;
  }
  return null;
}
function Ki(e, t, r) {
  if (h.isString(e))
    try {
      return (t || JSON.parse)(e), h.trim(e);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (0, JSON.stringify)(e);
}
const xe = {
  transitional: uo,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const o = r.getContentType() || "", n = o.indexOf("application/json") > -1, s = h.isObject(t);
    if (s && h.isHTMLForm(t) && (t = new FormData(t)), h.isFormData(t))
      return n ? JSON.stringify(ho(t)) : t;
    if (h.isArrayBuffer(t) || h.isBuffer(t) || h.isStream(t) || h.isFile(t) || h.isBlob(t) || h.isReadableStream(t))
      return t;
    if (h.isArrayBufferView(t))
      return t.buffer;
    if (h.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return Ui(t, this.formSerializer).toString();
      if ((a = h.isFileList(t)) || o.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Ye(
          a ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || n ? (r.setContentType("application/json", !1), Ki(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || xe.transitional, o = r && r.forcedJSONParsing, n = this.responseType === "json";
    if (h.isResponse(t) || h.isReadableStream(t))
      return t;
    if (t && h.isString(t) && (o && !this.responseType || n)) {
      const i = !(r && r.silentJSONParsing) && n;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? S.from(a, S.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: F.classes.FormData,
    Blob: F.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
h.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  xe.headers[e] = {};
});
const Hi = h.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Vi = (e) => {
  const t = {};
  let r, o, n;
  return e && e.split(`
`).forEach(function(i) {
    n = i.indexOf(":"), r = i.substring(0, n).trim().toLowerCase(), o = i.substring(n + 1).trim(), !(!r || t[r] && Hi[r]) && (r === "set-cookie" ? t[r] ? t[r].push(o) : t[r] = [o] : t[r] = t[r] ? t[r] + ", " + o : o);
  }), t;
}, ar = Symbol("internals");
function ke(e) {
  return e && String(e).trim().toLowerCase();
}
function Fe(e) {
  return e === !1 || e == null ? e : h.isArray(e) ? e.map(Fe) : String(e);
}
function Wi(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(e); )
    t[o[1]] = o[2];
  return t;
}
const zi = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ut(e, t, r, o, n) {
  if (h.isFunction(o))
    return o.call(this, t, r);
  if (n && (t = r), !!h.isString(t)) {
    if (h.isString(o))
      return t.indexOf(o) !== -1;
    if (h.isRegExp(o))
      return o.test(t);
  }
}
function Gi(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, o) => r.toUpperCase() + o);
}
function Qi(e, t) {
  const r = h.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(e, o + r, {
      value: function(n, s, i) {
        return this[o].call(this, t, n, s, i);
      },
      configurable: !0
    });
  });
}
class U {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, o) {
    const n = this;
    function s(a, l, c) {
      const u = ke(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = h.findKey(n, u);
      (!f || n[f] === void 0 || c === !0 || c === void 0 && n[f] !== !1) && (n[f || l] = Fe(a));
    }
    const i = (a, l) => h.forEach(a, (c, u) => s(c, u, l));
    if (h.isPlainObject(t) || t instanceof this.constructor)
      i(t, r);
    else if (h.isString(t) && (t = t.trim()) && !zi(t))
      i(Vi(t), r);
    else if (h.isHeaders(t))
      for (const [a, l] of t.entries())
        s(l, a, o);
    else
      t != null && s(r, t, o);
    return this;
  }
  get(t, r) {
    if (t = ke(t), t) {
      const o = h.findKey(this, t);
      if (o) {
        const n = this[o];
        if (!r)
          return n;
        if (r === !0)
          return Wi(n);
        if (h.isFunction(r))
          return r.call(this, n, o);
        if (h.isRegExp(r))
          return r.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = ke(t), t) {
      const o = h.findKey(this, t);
      return !!(o && this[o] !== void 0 && (!r || ut(this, this[o], o, r)));
    }
    return !1;
  }
  delete(t, r) {
    const o = this;
    let n = !1;
    function s(i) {
      if (i = ke(i), i) {
        const a = h.findKey(o, i);
        a && (!r || ut(o, o[a], a, r)) && (delete o[a], n = !0);
      }
    }
    return h.isArray(t) ? t.forEach(s) : s(t), n;
  }
  clear(t) {
    const r = Object.keys(this);
    let o = r.length, n = !1;
    for (; o--; ) {
      const s = r[o];
      (!t || ut(this, this[s], s, t, !0)) && (delete this[s], n = !0);
    }
    return n;
  }
  normalize(t) {
    const r = this, o = {};
    return h.forEach(this, (n, s) => {
      const i = h.findKey(o, s);
      if (i) {
        r[i] = Fe(n), delete r[s];
        return;
      }
      const a = t ? Gi(s) : String(s).trim();
      a !== s && delete r[s], r[a] = Fe(n), o[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return h.forEach(this, (o, n) => {
      o != null && o !== !1 && (r[n] = t && h.isArray(o) ? o.join(", ") : o);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const o = new this(t);
    return r.forEach((n) => o.set(n)), o;
  }
  static accessor(t) {
    const o = (this[ar] = this[ar] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function s(i) {
      const a = ke(i);
      o[a] || (Qi(n, i), o[a] = !0);
    }
    return h.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
U.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
h.reduceDescriptors(U.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(o) {
      this[r] = o;
    }
  };
});
h.freezeMethods(U);
function dt(e, t) {
  const r = this || xe, o = t || r, n = U.from(o.headers);
  let s = o.data;
  return h.forEach(e, function(a) {
    s = a.call(r, s, n.normalize(), t ? t.status : void 0);
  }), n.normalize(), s;
}
function fo(e) {
  return !!(e && e.__CANCEL__);
}
function we(e, t, r) {
  S.call(this, e ?? "canceled", S.ERR_CANCELED, t, r), this.name = "CanceledError";
}
h.inherits(we, S, {
  __CANCEL__: !0
});
function po(e, t, r) {
  const o = r.config.validateStatus;
  !r.status || !o || o(r.status) ? e(r) : t(new S(
    "Request failed with status code " + r.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Ji(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Xi(e, t) {
  e = e || 10;
  const r = new Array(e), o = new Array(e);
  let n = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), u = o[s];
    i || (i = c), r[n] = l, o[n] = c;
    let f = s, p = 0;
    for (; f !== n; )
      p += r[f++], f = f % e;
    if (n = (n + 1) % e, n === s && (s = (s + 1) % e), c - i < t)
      return;
    const y = u && c - u;
    return y ? Math.round(p * 1e3 / y) : void 0;
  };
}
function Zi(e, t) {
  let r = 0, o = 1e3 / t, n, s;
  const i = (c, u = Date.now()) => {
    r = u, n = null, s && (clearTimeout(s), s = null), e.apply(null, c);
  };
  return [(...c) => {
    const u = Date.now(), f = u - r;
    f >= o ? i(c, u) : (n = c, s || (s = setTimeout(() => {
      s = null, i(n);
    }, o - f)));
  }, () => n && i(n)];
}
const ze = (e, t, r = 3) => {
  let o = 0;
  const n = Xi(50, 250);
  return Zi((s) => {
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, l = i - o, c = n(l), u = i <= a;
    o = i;
    const f = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && a && u ? (a - i) / c : void 0,
      event: s,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, r);
}, lr = (e, t) => {
  const r = e != null;
  return [(o) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: o
  }), t[1]];
}, cr = (e) => (...t) => h.asap(() => e(...t)), Yi = F.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = F.navigator && /(msie|trident)/i.test(F.navigator.userAgent), r = document.createElement("a");
    let o;
    function n(s) {
      let i = s;
      return t && (r.setAttribute("href", i), i = r.href), r.setAttribute("href", i), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return o = n(window.location.href), function(i) {
      const a = h.isString(i) ? n(i) : i;
      return a.protocol === o.protocol && a.host === o.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), ea = F.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, o, n, s) {
      const i = [e + "=" + encodeURIComponent(t)];
      h.isNumber(r) && i.push("expires=" + new Date(r).toGMTString()), h.isString(o) && i.push("path=" + o), h.isString(n) && i.push("domain=" + n), s === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function ta(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ra(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function mo(e, t) {
  return e && !ta(t) ? ra(e, t) : t;
}
const ur = (e) => e instanceof U ? { ...e } : e;
function ge(e, t) {
  t = t || {};
  const r = {};
  function o(c, u, f) {
    return h.isPlainObject(c) && h.isPlainObject(u) ? h.merge.call({ caseless: f }, c, u) : h.isPlainObject(u) ? h.merge({}, u) : h.isArray(u) ? u.slice() : u;
  }
  function n(c, u, f) {
    if (h.isUndefined(u)) {
      if (!h.isUndefined(c))
        return o(void 0, c, f);
    } else return o(c, u, f);
  }
  function s(c, u) {
    if (!h.isUndefined(u))
      return o(void 0, u);
  }
  function i(c, u) {
    if (h.isUndefined(u)) {
      if (!h.isUndefined(c))
        return o(void 0, c);
    } else return o(void 0, u);
  }
  function a(c, u, f) {
    if (f in t)
      return o(c, u);
    if (f in e)
      return o(void 0, c);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (c, u) => n(ur(c), ur(u), !0)
  };
  return h.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = l[u] || n, p = f(e[u], t[u], u);
    h.isUndefined(p) && f !== a || (r[u] = p);
  }), r;
}
const go = (e) => {
  const t = ge({}, e);
  let { data: r, withXSRFToken: o, xsrfHeaderName: n, xsrfCookieName: s, headers: i, auth: a } = t;
  t.headers = i = U.from(i), t.url = co(mo(t.baseURL, t.url), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let l;
  if (h.isFormData(r)) {
    if (F.hasStandardBrowserEnv || F.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((l = i.getContentType()) !== !1) {
      const [c, ...u] = l ? l.split(";").map((f) => f.trim()).filter(Boolean) : [];
      i.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (F.hasStandardBrowserEnv && (o && h.isFunction(o) && (o = o(t)), o || o !== !1 && Yi(t.url))) {
    const c = n && s && ea.read(s);
    c && i.set(n, c);
  }
  return t;
}, oa = typeof XMLHttpRequest < "u", na = oa && function(e) {
  return new Promise(function(r, o) {
    const n = go(e);
    let s = n.data;
    const i = U.from(n.headers).normalize();
    let { responseType: a, onUploadProgress: l, onDownloadProgress: c } = n, u, f, p, y, d;
    function m() {
      y && y(), d && d(), n.cancelToken && n.cancelToken.unsubscribe(u), n.signal && n.signal.removeEventListener("abort", u);
    }
    let g = new XMLHttpRequest();
    g.open(n.method.toUpperCase(), n.url, !0), g.timeout = n.timeout;
    function v() {
      if (!g)
        return;
      const C = U.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), E = {
        data: !a || a === "text" || a === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: C,
        config: e,
        request: g
      };
      po(function(L) {
        r(L), m();
      }, function(L) {
        o(L), m();
      }, E), g = null;
    }
    "onloadend" in g ? g.onloadend = v : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, g.onabort = function() {
      g && (o(new S("Request aborted", S.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function() {
      o(new S("Network Error", S.ERR_NETWORK, e, g)), g = null;
    }, g.ontimeout = function() {
      let A = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const E = n.transitional || uo;
      n.timeoutErrorMessage && (A = n.timeoutErrorMessage), o(new S(
        A,
        E.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        e,
        g
      )), g = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in g && h.forEach(i.toJSON(), function(A, E) {
      g.setRequestHeader(E, A);
    }), h.isUndefined(n.withCredentials) || (g.withCredentials = !!n.withCredentials), a && a !== "json" && (g.responseType = n.responseType), c && ([p, d] = ze(c, !0), g.addEventListener("progress", p)), l && g.upload && ([f, y] = ze(l), g.upload.addEventListener("progress", f), g.upload.addEventListener("loadend", y)), (n.cancelToken || n.signal) && (u = (C) => {
      g && (o(!C || C.type ? new we(null, e, g) : C), g.abort(), g = null);
    }, n.cancelToken && n.cancelToken.subscribe(u), n.signal && (n.signal.aborted ? u() : n.signal.addEventListener("abort", u)));
    const b = Ji(n.url);
    if (b && F.protocols.indexOf(b) === -1) {
      o(new S("Unsupported protocol " + b + ":", S.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(s || null);
  });
}, sa = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let o = new AbortController(), n;
    const s = function(c) {
      if (!n) {
        n = !0, a();
        const u = c instanceof Error ? c : this.reason;
        o.abort(u instanceof S ? u : new we(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, s(new S(`timeout ${t} of ms exceeded`, S.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(s) : c.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", s));
    const { signal: l } = o;
    return l.unsubscribe = () => h.asap(a), l;
  }
}, ia = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let o = 0, n;
  for (; o < r; )
    n = o + t, yield e.slice(o, n), o = n;
}, aa = async function* (e, t) {
  for await (const r of la(e))
    yield* ia(r, t);
}, la = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: o } = await t.read();
      if (r)
        break;
      yield o;
    }
  } finally {
    await t.cancel();
  }
}, dr = (e, t, r, o) => {
  const n = aa(e, t);
  let s = 0, i, a = (l) => {
    i || (i = !0, o && o(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: c, value: u } = await n.next();
        if (c) {
          a(), l.close();
          return;
        }
        let f = u.byteLength;
        if (r) {
          let p = s += f;
          r(p);
        }
        l.enqueue(new Uint8Array(u));
      } catch (c) {
        throw a(c), c;
      }
    },
    cancel(l) {
      return a(l), n.return();
    }
  }, {
    highWaterMark: 2
  });
}, et = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", bo = et && typeof ReadableStream == "function", ca = et && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), yo = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, ua = bo && yo(() => {
  let e = !1;
  const t = new Request(F.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), hr = 64 * 1024, _t = bo && yo(() => h.isReadableStream(new Response("").body)), Ge = {
  stream: _t && ((e) => e.body)
};
et && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ge[t] && (Ge[t] = h.isFunction(e[t]) ? (r) => r[t]() : (r, o) => {
      throw new S(`Response type '${t}' is not supported`, S.ERR_NOT_SUPPORT, o);
    });
  });
})(new Response());
const da = async (e) => {
  if (e == null)
    return 0;
  if (h.isBlob(e))
    return e.size;
  if (h.isSpecCompliantForm(e))
    return (await new Request(F.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (h.isArrayBufferView(e) || h.isArrayBuffer(e))
    return e.byteLength;
  if (h.isURLSearchParams(e) && (e = e + ""), h.isString(e))
    return (await ca(e)).byteLength;
}, ha = async (e, t) => {
  const r = h.toFiniteNumber(e.getContentLength());
  return r ?? da(t);
}, fa = et && (async (e) => {
  let {
    url: t,
    method: r,
    data: o,
    signal: n,
    cancelToken: s,
    timeout: i,
    onDownloadProgress: a,
    onUploadProgress: l,
    responseType: c,
    headers: u,
    withCredentials: f = "same-origin",
    fetchOptions: p
  } = go(e);
  c = c ? (c + "").toLowerCase() : "text";
  let y = sa([n, s && s.toAbortSignal()], i), d;
  const m = y && y.unsubscribe && (() => {
    y.unsubscribe();
  });
  let g;
  try {
    if (l && ua && r !== "get" && r !== "head" && (g = await ha(u, o)) !== 0) {
      let E = new Request(t, {
        method: "POST",
        body: o,
        duplex: "half"
      }), D;
      if (h.isFormData(o) && (D = E.headers.get("content-type")) && u.setContentType(D), E.body) {
        const [L, k] = lr(
          g,
          ze(cr(l))
        );
        o = dr(E.body, hr, L, k);
      }
    }
    h.isString(f) || (f = f ? "include" : "omit");
    const v = "credentials" in Request.prototype;
    d = new Request(t, {
      ...p,
      signal: y,
      method: r.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: o,
      duplex: "half",
      credentials: v ? f : void 0
    });
    let b = await fetch(d);
    const C = _t && (c === "stream" || c === "response");
    if (_t && (a || C && m)) {
      const E = {};
      ["status", "statusText", "headers"].forEach((te) => {
        E[te] = b[te];
      });
      const D = h.toFiniteNumber(b.headers.get("content-length")), [L, k] = a && lr(
        D,
        ze(cr(a), !0)
      ) || [];
      b = new Response(
        dr(b.body, hr, L, () => {
          k && k(), m && m();
        }),
        E
      );
    }
    c = c || "text";
    let A = await Ge[h.findKey(Ge, c) || "text"](b, e);
    return !C && m && m(), await new Promise((E, D) => {
      po(E, D, {
        data: A,
        headers: U.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: d
      });
    });
  } catch (v) {
    throw m && m(), v && v.name === "TypeError" && /fetch/i.test(v.message) ? Object.assign(
      new S("Network Error", S.ERR_NETWORK, e, d),
      {
        cause: v.cause || v
      }
    ) : S.from(v, v && v.code, e, d);
  }
}), St = {
  http: Ai,
  xhr: na,
  fetch: fa
};
h.forEach(St, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const fr = (e) => `- ${e}`, pa = (e) => h.isFunction(e) || e === null || e === !1, vo = {
  getAdapter: (e) => {
    e = h.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, o;
    const n = {};
    for (let s = 0; s < t; s++) {
      r = e[s];
      let i;
      if (o = r, !pa(r) && (o = St[(i = String(r)).toLowerCase()], o === void 0))
        throw new S(`Unknown adapter '${i}'`);
      if (o)
        break;
      n[i || "#" + s] = o;
    }
    if (!o) {
      const s = Object.entries(n).map(
        ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? s.length > 1 ? `since :
` + s.map(fr).join(`
`) : " " + fr(s[0]) : "as no adapter specified";
      throw new S(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return o;
  },
  adapters: St
};
function ht(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new we(null, e);
}
function pr(e) {
  return ht(e), e.headers = U.from(e.headers), e.data = dt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), vo.getAdapter(e.adapter || xe.adapter)(e).then(function(o) {
    return ht(e), o.data = dt.call(
      e,
      e.transformResponse,
      o
    ), o.headers = U.from(o.headers), o;
  }, function(o) {
    return fo(o) || (ht(e), o && o.response && (o.response.data = dt.call(
      e,
      e.transformResponse,
      o.response
    ), o.response.headers = U.from(o.response.headers))), Promise.reject(o);
  });
}
const wo = "1.7.7", Ft = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ft[e] = function(o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const mr = {};
Ft.transitional = function(t, r, o) {
  function n(s, i) {
    return "[Axios v" + wo + "] Transitional option '" + s + "'" + i + (o ? ". " + o : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new S(
        n(i, " has been removed" + (r ? " in " + r : "")),
        S.ERR_DEPRECATED
      );
    return r && !mr[i] && (mr[i] = !0, console.warn(
      n(
        i,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
function ma(e, t, r) {
  if (typeof e != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(e);
  let n = o.length;
  for (; n-- > 0; ) {
    const s = o[n], i = t[s];
    if (i) {
      const a = e[s], l = a === void 0 || i(a, s, e);
      if (l !== !0)
        throw new S("option " + s + " must be " + l, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new S("Unknown option " + s, S.ERR_BAD_OPTION);
  }
}
const Ct = {
  assertOptions: ma,
  validators: Ft
}, ne = Ct.validators;
class pe {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ir(),
      response: new ir()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (o) {
      if (o instanceof Error) {
        let n;
        Error.captureStackTrace ? Error.captureStackTrace(n = {}) : n = new Error();
        const s = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? s && !String(o.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + s) : o.stack = s;
        } catch {
        }
      }
      throw o;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = ge(this.defaults, r);
    const { transitional: o, paramsSerializer: n, headers: s } = r;
    o !== void 0 && Ct.assertOptions(o, {
      silentJSONParsing: ne.transitional(ne.boolean),
      forcedJSONParsing: ne.transitional(ne.boolean),
      clarifyTimeoutError: ne.transitional(ne.boolean)
    }, !1), n != null && (h.isFunction(n) ? r.paramsSerializer = {
      serialize: n
    } : Ct.assertOptions(n, {
      encode: ne.function,
      serialize: ne.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i = s && h.merge(
      s.common,
      s[r.method]
    );
    s && h.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete s[d];
      }
    ), r.headers = U.concat(i, s);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(r) === !1 || (l = l && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let u, f = 0, p;
    if (!l) {
      const d = [pr.bind(this), void 0];
      for (d.unshift.apply(d, a), d.push.apply(d, c), p = d.length, u = Promise.resolve(r); f < p; )
        u = u.then(d[f++], d[f++]);
      return u;
    }
    p = a.length;
    let y = r;
    for (f = 0; f < p; ) {
      const d = a[f++], m = a[f++];
      try {
        y = d(y);
      } catch (g) {
        m.call(this, g);
        break;
      }
    }
    try {
      u = pr.call(this, y);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, p = c.length; f < p; )
      u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(t) {
    t = ge(this.defaults, t);
    const r = mo(t.baseURL, t.url);
    return co(r, t.params, t.paramsSerializer);
  }
}
h.forEach(["delete", "get", "head", "options"], function(t) {
  pe.prototype[t] = function(r, o) {
    return this.request(ge(o || {}, {
      method: t,
      url: r,
      data: (o || {}).data
    }));
  };
});
h.forEach(["post", "put", "patch"], function(t) {
  function r(o) {
    return function(s, i, a) {
      return this.request(ge(a || {}, {
        method: t,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  pe.prototype[t] = r(), pe.prototype[t + "Form"] = r(!0);
});
class Ut {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(s) {
      r = s;
    });
    const o = this;
    this.promise.then((n) => {
      if (!o._listeners) return;
      let s = o._listeners.length;
      for (; s-- > 0; )
        o._listeners[s](n);
      o._listeners = null;
    }), this.promise.then = (n) => {
      let s;
      const i = new Promise((a) => {
        o.subscribe(a), s = a;
      }).then(n);
      return i.cancel = function() {
        o.unsubscribe(s);
      }, i;
    }, t(function(s, i, a) {
      o.reason || (o.reason = new we(s, i, a), r(o.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (o) => {
      t.abort(o);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Ut(function(n) {
        t = n;
      }),
      cancel: t
    };
  }
}
function ga(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function ba(e) {
  return h.isObject(e) && e.isAxiosError === !0;
}
const kt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(kt).forEach(([e, t]) => {
  kt[t] = e;
});
function _o(e) {
  const t = new pe(e), r = Xr(pe.prototype.request, t);
  return h.extend(r, pe.prototype, t, { allOwnKeys: !0 }), h.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(n) {
    return _o(ge(e, n));
  }, r;
}
const O = _o(xe);
O.Axios = pe;
O.CanceledError = we;
O.CancelToken = Ut;
O.isCancel = fo;
O.VERSION = wo;
O.toFormData = Ye;
O.AxiosError = S;
O.Cancel = O.CanceledError;
O.all = function(t) {
  return Promise.all(t);
};
O.spread = ga;
O.isAxiosError = ba;
O.mergeConfig = ge;
O.AxiosHeaders = U;
O.formToJSON = (e) => ho(h.isHTMLForm(e) ? new FormData(e) : e);
O.getAdapter = vo.getAdapter;
O.HttpStatusCode = kt;
O.default = O;
const ya = {
  components: {
    BaseChessBoard: We
  },
  extends: We,
  provide() {
    return {
      iPlayWithBot: !1
      //must have
    };
  },
  methods: {
    async handleMove() {
      var r;
      const e = (r = this.$refs.baseChessBoard.boardAPI) == null ? void 0 : r.getHistory(!0), t = e == null ? void 0 : e.map((o) => typeof o == "object" ? o.lan : o);
      if (t)
        try {
          const o = this.$refs.baseChessBoard.boardAPI.getFen();
          if (o.split(" ")[1] === "b") {
            this.$refs.baseChessBoard.startBlackTimer();
            const i = (await O.post(
              "http://localhost:3000/move",
              {
                move: {
                  lan: t[t.length - 1],
                  after: o
                }
              }
            )).data.bestMove;
            i && this.$refs.baseChessBoard.boardAPI.move({
              from: i.slice(0, 2),
              to: i.slice(2, 4)
            });
          } else
            this.$refs.baseChessBoard.startWhiteTimer();
        } catch (o) {
          console.error("Error sending move to server:", o);
        }
    }
  }
};
function va(e, t, r, o, n, s) {
  const i = je("BaseChessBoard");
  return q(), ue(i, {
    ref: "baseChessBoard",
    handleMove: s.handleMove
  }, null, 8, ["handleMove"]);
}
const wa = /* @__PURE__ */ Qe(ya, [["render", va]]), _a = {
  components: {
    BaseChessBoard: We
  },
  extends: We,
  methods: {
    handleMove() {
      var n, s;
      const e = (n = this.$refs.baseChessBoard.boardAPI) == null ? void 0 : n.getHistory(!0), t = e == null ? void 0 : e.map((i) => typeof i == "object" ? i.lan : i);
      this.$refs.baseChessBoard.boardAPI.getFen().split(" ")[1] === "b" ? this.$refs.baseChessBoard.startBlackTimer() : this.$refs.baseChessBoard.startWhiteTimer(), t && ((s = this.$refs.baseChessBoard.engine) == null || s.sendPosition(
        t.join(" ")
      ));
    }
  }
};
function Sa(e, t, r, o, n, s) {
  const i = je("BaseChessBoard");
  return q(), ue(i, {
    ref: "baseChessBoard",
    handleMove: s.handleMove
  }, null, 8, ["handleMove"]);
}
const Ca = /* @__PURE__ */ Qe(_a, [["render", Sa]]), Ta = {
  install(e) {
    e.component(wa), e.component(Ca);
  }
};
export {
  wa as ChessBoard,
  Ca as ChessBoardServerless,
  Ta as default
};
