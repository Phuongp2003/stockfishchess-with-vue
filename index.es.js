var Cn = Object.defineProperty;
var En = (e, t, o) => t in e ? Cn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var A = (e, t, o) => En(e, typeof t != "symbol" ? t + "" : t, o);
import { defineComponent as go, ref as kn, reactive as Ut, onMounted as Tn, watch as Pn, openBlock as z, createElementBlock as ve, normalizeClass as Ue, createElementVNode as R, createBlock as be, createCommentVNode as bo, Fragment as An, renderList as Rn, nextTick as On, toDisplayString as vo, resolveComponent as je, Teleport as tt, createVNode as Le, normalizeStyle as Mn, createTextVNode as jt, withDirectives as xn, vModelCheckbox as Nn } from "vue";
const Ln = {
  class: "promotion-dialog",
  open: ""
}, Bn = ["aria-label", "onClick", "onTouchstartPassive"], In = /* @__PURE__ */ go({
  __name: "PromotionDialog",
  props: {
    state: {}
  },
  emits: ["promotionSelected"],
  setup(e, { emit: t }) {
    const o = e, n = [
      { name: "Queen", data: "q" },
      { name: "Knight", data: "n" },
      { name: "Rook", data: "r" },
      { name: "Bishop", data: "b" }
    ];
    function r(s) {
      var i, a;
      (a = (i = o.state).callback) == null || a.call(i, s.data), t("promotionSelected");
    }
    return (s, i) => (z(), ve("dialog", Ln, [
      (z(), ve(An, null, Rn(n, (a) => R("button", {
        key: a.name,
        type: "button",
        class: Ue([a.name.toLowerCase(), s.state.color]),
        "aria-label": a.name,
        onClick: (c) => r(a),
        onTouchstartPassive: (c) => r(a)
      }, null, 42, Bn)), 64))
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
const B = "w", V = "b", x = "p", ht = "n", De = "b", ke = "r", ie = "q", N = "k", ot = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", $ = -1, Dn = {
  NORMAL: "n",
  CAPTURE: "c",
  BIG_PAWN: "b",
  EP_CAPTURE: "e",
  PROMOTION: "p",
  KSIDE_CASTLE: "k",
  QSIDE_CASTLE: "q"
}, qn = [
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
}, $t = {
  n: [-18, -33, -31, -14, 18, 33, 31, 14],
  b: [-17, -15, 17, 15],
  r: [-16, 1, 16, -1],
  q: [-17, -16, -15, 1, 17, 16, 15, -1],
  k: [-17, -16, -15, 1, 17, 16, 15, -1]
}, Fn = [
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
], Un = [
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
], jn = { p: 1, n: 2, b: 4, r: 8, q: 16, k: 32 }, $n = "pnbrqkPNBRQK", Kt = [ht, De, ke, ie], Kn = 7, Hn = 6, Vn = 1, Wn = 0, Be = {
  [N]: w.KSIDE_CASTLE,
  [ie]: w.QSIDE_CASTLE
}, oe = {
  w: [
    { square: _.a1, flag: w.QSIDE_CASTLE },
    { square: _.h1, flag: w.KSIDE_CASTLE }
  ],
  b: [
    { square: _.a8, flag: w.QSIDE_CASTLE },
    { square: _.h8, flag: w.KSIDE_CASTLE }
  ]
}, zn = { b: Vn, w: Hn }, Gn = ["1-0", "0-1", "1/2-1/2", "*"];
function de(e) {
  return e >> 4;
}
function Te(e) {
  return e & 15;
}
function yo(e) {
  return "0123456789".indexOf(e) !== -1;
}
function K(e) {
  const t = Te(e), o = de(e);
  return "abcdefgh".substring(t, t + 1) + "87654321".substring(o, o + 1);
}
function _e(e) {
  return e === B ? V : B;
}
function Qn(e) {
  const t = e.split(/\s+/);
  if (t.length !== 6)
    return {
      ok: !1,
      error: "Invalid FEN: must contain six space-delimited fields"
    };
  const o = parseInt(t[5], 10);
  if (isNaN(o) || o <= 0)
    return {
      ok: !1,
      error: "Invalid FEN: move number must be a positive integer"
    };
  const n = parseInt(t[4], 10);
  if (isNaN(n) || n < 0)
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
  const r = t[0].split("/");
  if (r.length !== 8)
    return {
      ok: !1,
      error: "Invalid FEN: piece data does not contain 8 '/'-delimited rows"
    };
  for (let i = 0; i < r.length; i++) {
    let a = 0, c = !1;
    for (let l = 0; l < r[i].length; l++)
      if (yo(r[i][l])) {
        if (c)
          return {
            ok: !1,
            error: "Invalid FEN: piece data is invalid (consecutive number)"
          };
        a += parseInt(r[i][l], 10), c = !0;
      } else {
        if (!/^[prnbqkPRNBQK]$/.test(r[i][l]))
          return {
            ok: !1,
            error: "Invalid FEN: piece data is invalid (invalid piece)"
          };
        a += 1, c = !1;
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
function Jn(e, t) {
  const o = e.from, n = e.to, r = e.piece;
  let s = 0, i = 0, a = 0;
  for (let c = 0, l = t.length; c < l; c++) {
    const u = t[c].from, f = t[c].to, p = t[c].piece;
    r === p && o !== u && n === f && (s++, de(o) === de(u) && i++, Te(o) === Te(u) && a++);
  }
  return s > 0 ? i > 0 && a > 0 ? K(o) : a > 0 ? K(o).charAt(1) : K(o).charAt(0) : "";
}
function ne(e, t, o, n, r, s = void 0, i = w.NORMAL) {
  const a = de(n);
  if (r === x && (a === Kn || a === Wn))
    for (let c = 0; c < Kt.length; c++) {
      const l = Kt[c];
      e.push({
        color: t,
        from: o,
        to: n,
        piece: r,
        captured: s,
        promotion: l,
        flags: i | w.PROMOTION
      });
    }
  else
    e.push({
      color: t,
      from: o,
      to: n,
      piece: r,
      captured: s,
      flags: i
    });
}
function Ht(e) {
  let t = e.charAt(0);
  return t >= "a" && t <= "h" ? e.match(/[a-h]\d.*[a-h]\d/) ? void 0 : x : (t = t.toLowerCase(), t === "o" ? N : t);
}
function rt(e) {
  return e.replace(/=/, "").replace(/[+#]?[?!]*$/, "");
}
class Xn {
  constructor(t = ot) {
    A(this, "_board", new Array(128));
    A(this, "_turn", B);
    A(this, "_header", {});
    A(this, "_kings", { w: $, b: $ });
    A(this, "_epSquare", -1);
    A(this, "_halfMoves", 0);
    A(this, "_moveNumber", 0);
    A(this, "_history", []);
    A(this, "_comments", {});
    A(this, "_castling", { w: 0, b: 0 });
    this.load(t);
  }
  clear(t = !1) {
    this._board = new Array(128), this._kings = { w: $, b: $ }, this._turn = B, this._castling = { w: 0, b: 0 }, this._epSquare = $, this._halfMoves = 0, this._moveNumber = 1, this._history = [], this._comments = {}, this._header = t ? this._header : {}, this._updateSetup(this.fen());
  }
  removeHeader(t) {
    t in this._header && delete this._header[t];
  }
  load(t, o = !1) {
    let n = t.split(/\s+/);
    if (n.length >= 2 && n.length < 6) {
      const c = ["-", "-", "0", "1"];
      t = n.concat(c.slice(-(6 - n.length))).join(" ");
    }
    n = t.split(/\s+/);
    const { ok: r, error: s } = Qn(t);
    if (!r)
      throw new Error(s);
    const i = n[0];
    let a = 0;
    this.clear(o);
    for (let c = 0; c < i.length; c++) {
      const l = i.charAt(c);
      if (l === "/")
        a += 8;
      else if (yo(l))
        a += parseInt(l, 10);
      else {
        const u = l < "a" ? B : V;
        this.put({ type: l.toLowerCase(), color: u }, K(a)), a++;
      }
    }
    this._turn = n[1], n[2].indexOf("K") > -1 && (this._castling.w |= w.KSIDE_CASTLE), n[2].indexOf("Q") > -1 && (this._castling.w |= w.QSIDE_CASTLE), n[2].indexOf("k") > -1 && (this._castling.b |= w.KSIDE_CASTLE), n[2].indexOf("q") > -1 && (this._castling.b |= w.QSIDE_CASTLE), this._epSquare = n[3] === "-" ? $ : _[n[3]], this._halfMoves = parseInt(n[4], 10), this._moveNumber = parseInt(n[5], 10), this._updateSetup(this.fen());
  }
  fen() {
    var s, i;
    let t = 0, o = "";
    for (let a = _.a8; a <= _.h1; a++) {
      if (this._board[a]) {
        t > 0 && (o += t, t = 0);
        const { color: c, type: l } = this._board[a];
        o += c === B ? l.toUpperCase() : l.toLowerCase();
      } else
        t++;
      a + 1 & 136 && (t > 0 && (o += t), a !== _.h1 && (o += "/"), t = 0, a += 8);
    }
    let n = "";
    this._castling[B] & w.KSIDE_CASTLE && (n += "K"), this._castling[B] & w.QSIDE_CASTLE && (n += "Q"), this._castling[V] & w.KSIDE_CASTLE && (n += "k"), this._castling[V] & w.QSIDE_CASTLE && (n += "q"), n = n || "-";
    let r = "-";
    if (this._epSquare !== $) {
      const a = this._epSquare + (this._turn === B ? 16 : -16), c = [a + 1, a - 1];
      for (const l of c) {
        if (l & 136)
          continue;
        const u = this._turn;
        if (((s = this._board[l]) == null ? void 0 : s.color) === u && ((i = this._board[l]) == null ? void 0 : i.type) === x) {
          this._makeMove({
            color: u,
            from: l,
            to: this._epSquare,
            piece: x,
            captured: x,
            flags: w.EP_CAPTURE
          });
          const f = !this._isKingAttacked(u);
          if (this._undoMove(), f) {
            r = K(this._epSquare);
            break;
          }
        }
      }
    }
    return [
      o,
      this._turn,
      n,
      r,
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
  put({ type: t, color: o }, n) {
    if ($n.indexOf(t.toLowerCase()) === -1 || !(n in _))
      return !1;
    const r = _[n];
    return t == N && !(this._kings[o] == $ || this._kings[o] == r) ? !1 : (this._board[r] = { type: t, color: o }, t === N && (this._kings[o] = r), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), !0);
  }
  remove(t) {
    const o = this.get(t);
    return delete this._board[_[t]], o && o.type === N && (this._kings[o.color] = $), this._updateCastlingRights(), this._updateEnPassantSquare(), this._updateSetup(this.fen()), o;
  }
  _updateCastlingRights() {
    var n, r, s, i, a, c, l, u, f, p, v, d;
    const t = ((n = this._board[_.e1]) == null ? void 0 : n.type) === N && ((r = this._board[_.e1]) == null ? void 0 : r.color) === B, o = ((s = this._board[_.e8]) == null ? void 0 : s.type) === N && ((i = this._board[_.e8]) == null ? void 0 : i.color) === V;
    (!t || ((a = this._board[_.a1]) == null ? void 0 : a.type) !== ke || ((c = this._board[_.a1]) == null ? void 0 : c.color) !== B) && (this._castling.w &= ~w.QSIDE_CASTLE), (!t || ((l = this._board[_.h1]) == null ? void 0 : l.type) !== ke || ((u = this._board[_.h1]) == null ? void 0 : u.color) !== B) && (this._castling.w &= ~w.KSIDE_CASTLE), (!o || ((f = this._board[_.a8]) == null ? void 0 : f.type) !== ke || ((p = this._board[_.a8]) == null ? void 0 : p.color) !== V) && (this._castling.b &= ~w.QSIDE_CASTLE), (!o || ((v = this._board[_.h8]) == null ? void 0 : v.type) !== ke || ((d = this._board[_.h8]) == null ? void 0 : d.color) !== V) && (this._castling.b &= ~w.KSIDE_CASTLE);
  }
  _updateEnPassantSquare() {
    var s, i;
    if (this._epSquare === $)
      return;
    const t = this._epSquare + (this._turn === B ? -16 : 16), o = this._epSquare + (this._turn === B ? 16 : -16), n = [o + 1, o - 1];
    if (this._board[t] !== null || this._board[this._epSquare] !== null || ((s = this._board[o]) == null ? void 0 : s.color) !== _e(this._turn) || ((i = this._board[o]) == null ? void 0 : i.type) !== x) {
      this._epSquare = $;
      return;
    }
    const r = (a) => {
      var c, l;
      return !(a & 136) && ((c = this._board[a]) == null ? void 0 : c.color) === this._turn && ((l = this._board[a]) == null ? void 0 : l.type) === x;
    };
    n.some(r) || (this._epSquare = $);
  }
  _attacked(t, o) {
    for (let n = _.a8; n <= _.h1; n++) {
      if (n & 136) {
        n += 7;
        continue;
      }
      if (this._board[n] === void 0 || this._board[n].color !== t)
        continue;
      const r = this._board[n], s = n - o;
      if (s === 0)
        continue;
      const i = s + 119;
      if (Fn[i] & jn[r.type]) {
        if (r.type === x) {
          if (s > 0) {
            if (r.color === B)
              return !0;
          } else if (r.color === V)
            return !0;
          continue;
        }
        if (r.type === "n" || r.type === "k")
          return !0;
        const a = Un[i];
        let c = n + a, l = !1;
        for (; c !== o; ) {
          if (this._board[c] != null) {
            l = !0;
            break;
          }
          c += a;
        }
        if (!l)
          return !0;
      }
    }
    return !1;
  }
  _isKingAttacked(t) {
    const o = this._kings[t];
    return o === -1 ? !1 : this._attacked(_e(t), o);
  }
  isAttacked(t, o) {
    return this._attacked(o, _[t]);
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
    }, o = [];
    let n = 0, r = 0;
    for (let s = _.a8; s <= _.h1; s++) {
      if (r = (r + 1) % 2, s & 136) {
        s += 7;
        continue;
      }
      const i = this._board[s];
      i && (t[i.type] = i.type in t ? t[i.type] + 1 : 1, i.type === De && o.push(r), n++);
    }
    if (n === 2 || // k vs. kn .... or .... k vs. kb
    n === 3 && (t[De] === 1 || t[ht] === 1))
      return !0;
    if (n === t[De] + 2) {
      let s = 0;
      const i = o.length;
      for (let a = 0; a < i; a++)
        s += o[a];
      if (s === 0 || s === i)
        return !0;
    }
    return !1;
  }
  isThreefoldRepetition() {
    const t = [], o = {};
    let n = !1;
    for (; ; ) {
      const r = this._undoMove();
      if (!r)
        break;
      t.push(r);
    }
    for (; ; ) {
      const r = this.fen().split(" ").slice(0, 4).join(" ");
      o[r] = r in o ? o[r] + 1 : 1, o[r] >= 3 && (n = !0);
      const s = t.pop();
      if (s)
        this._makeMove(s);
      else
        break;
    }
    return n;
  }
  isDraw() {
    return this._halfMoves >= 100 || // 50 moves per side = 100 half moves
    this.isStalemate() || this.isInsufficientMaterial() || this.isThreefoldRepetition();
  }
  isGameOver() {
    return this.isCheckmate() || this.isStalemate() || this.isDraw();
  }
  moves({ verbose: t = !1, square: o = void 0, piece: n = void 0 } = {}) {
    const r = this._moves({ square: o, piece: n });
    return t ? r.map((s) => this._makePretty(s)) : r.map((s) => this._moveToSan(s, r));
  }
  _moves({ legal: t = !0, piece: o = void 0, square: n = void 0 } = {}) {
    var v;
    const r = n ? n.toLowerCase() : void 0, s = o == null ? void 0 : o.toLowerCase(), i = [], a = this._turn, c = _e(a);
    let l = _.a8, u = _.h1, f = !1;
    if (r)
      if (r in _)
        l = u = _[r], f = !0;
      else
        return [];
    for (let d = l; d <= u; d++) {
      if (d & 136) {
        d += 7;
        continue;
      }
      if (!this._board[d] || this._board[d].color === c)
        continue;
      const { type: m } = this._board[d];
      let g;
      if (m === x) {
        if (s && s !== m)
          continue;
        g = d + nt[a][0], this._board[g] || (ne(i, a, d, g, x), g = d + nt[a][1], zn[a] === de(d) && !this._board[g] && ne(i, a, d, g, x, void 0, w.BIG_PAWN));
        for (let y = 2; y < 4; y++)
          g = d + nt[a][y], !(g & 136) && (((v = this._board[g]) == null ? void 0 : v.color) === c ? ne(i, a, d, g, x, this._board[g].type, w.CAPTURE) : g === this._epSquare && ne(i, a, d, g, x, x, w.EP_CAPTURE));
      } else {
        if (s && s !== m)
          continue;
        for (let y = 0, b = $t[m].length; y < b; y++) {
          const C = $t[m][y];
          for (g = d; g += C, !(g & 136); ) {
            if (!this._board[g])
              ne(i, a, d, g, m);
            else {
              if (this._board[g].color === a)
                break;
              ne(i, a, d, g, m, this._board[g].type, w.CAPTURE);
              break;
            }
            if (m === ht || m === N)
              break;
          }
        }
      }
    }
    if ((s === void 0 || s === N) && (!f || u === this._kings[a])) {
      if (this._castling[a] & w.KSIDE_CASTLE) {
        const d = this._kings[a], m = d + 2;
        !this._board[d + 1] && !this._board[m] && !this._attacked(c, this._kings[a]) && !this._attacked(c, d + 1) && !this._attacked(c, m) && ne(i, a, this._kings[a], m, N, void 0, w.KSIDE_CASTLE);
      }
      if (this._castling[a] & w.QSIDE_CASTLE) {
        const d = this._kings[a], m = d - 2;
        !this._board[d - 1] && !this._board[d - 2] && !this._board[d - 3] && !this._attacked(c, this._kings[a]) && !this._attacked(c, d - 1) && !this._attacked(c, m) && ne(i, a, this._kings[a], m, N, void 0, w.QSIDE_CASTLE);
      }
    }
    if (!t || this._kings[a] === -1)
      return i;
    const p = [];
    for (let d = 0, m = i.length; d < m; d++)
      this._makeMove(i[d]), this._isKingAttacked(a) || p.push(i[d]), this._undoMove();
    return p;
  }
  move(t, { strict: o = !1 } = {}) {
    let n = null;
    if (typeof t == "string")
      n = this._moveFromSan(t, o);
    else if (typeof t == "object") {
      const s = this._moves();
      for (let i = 0, a = s.length; i < a; i++)
        if (t.from === K(s[i].from) && t.to === K(s[i].to) && (!("promotion" in s[i]) || t.promotion === s[i].promotion)) {
          n = s[i];
          break;
        }
    }
    if (!n)
      throw typeof t == "string" ? new Error(`Invalid move: ${t}`) : new Error(`Invalid move: ${JSON.stringify(t)}`);
    const r = this._makePretty(n);
    return this._makeMove(n), r;
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
    const o = this._turn, n = _e(o);
    if (this._push(t), this._board[t.to] = this._board[t.from], delete this._board[t.from], t.flags & w.EP_CAPTURE && (this._turn === V ? delete this._board[t.to - 16] : delete this._board[t.to + 16]), t.promotion && (this._board[t.to] = { type: t.promotion, color: o }), this._board[t.to].type === N) {
      if (this._kings[o] = t.to, t.flags & w.KSIDE_CASTLE) {
        const r = t.to - 1, s = t.to + 1;
        this._board[r] = this._board[s], delete this._board[s];
      } else if (t.flags & w.QSIDE_CASTLE) {
        const r = t.to + 1, s = t.to - 2;
        this._board[r] = this._board[s], delete this._board[s];
      }
      this._castling[o] = 0;
    }
    if (this._castling[o]) {
      for (let r = 0, s = oe[o].length; r < s; r++)
        if (t.from === oe[o][r].square && this._castling[o] & oe[o][r].flag) {
          this._castling[o] ^= oe[o][r].flag;
          break;
        }
    }
    if (this._castling[n]) {
      for (let r = 0, s = oe[n].length; r < s; r++)
        if (t.to === oe[n][r].square && this._castling[n] & oe[n][r].flag) {
          this._castling[n] ^= oe[n][r].flag;
          break;
        }
    }
    t.flags & w.BIG_PAWN ? o === V ? this._epSquare = t.to - 16 : this._epSquare = t.to + 16 : this._epSquare = $, t.piece === x ? this._halfMoves = 0 : t.flags & (w.CAPTURE | w.EP_CAPTURE) ? this._halfMoves = 0 : this._halfMoves++, o === V && this._moveNumber++, this._turn = n;
  }
  undo() {
    const t = this._undoMove();
    return t ? this._makePretty(t) : null;
  }
  _undoMove() {
    const t = this._history.pop();
    if (t === void 0)
      return null;
    const o = t.move;
    this._kings = t.kings, this._turn = t.turn, this._castling = t.castling, this._epSquare = t.epSquare, this._halfMoves = t.halfMoves, this._moveNumber = t.moveNumber;
    const n = this._turn, r = _e(n);
    if (this._board[o.from] = this._board[o.to], this._board[o.from].type = o.piece, delete this._board[o.to], o.captured)
      if (o.flags & w.EP_CAPTURE) {
        let s;
        n === V ? s = o.to - 16 : s = o.to + 16, this._board[s] = { type: x, color: r };
      } else
        this._board[o.to] = { type: o.captured, color: r };
    if (o.flags & (w.KSIDE_CASTLE | w.QSIDE_CASTLE)) {
      let s, i;
      o.flags & w.KSIDE_CASTLE ? (s = o.to + 1, i = o.to - 1) : (s = o.to - 2, i = o.to + 1), this._board[s] = this._board[i], delete this._board[i];
    }
    return o;
  }
  pgn({ newline: t = `
`, maxWidth: o = 0 } = {}) {
    const n = [];
    let r = !1;
    for (const p in this._header)
      n.push("[" + p + ' "' + this._header[p] + '"]' + t), r = !0;
    r && this._history.length && n.push(t);
    const s = (p) => {
      const v = this._comments[this.fen()];
      if (typeof v < "u") {
        const d = p.length > 0 ? " " : "";
        p = `${p}${d}{${v}}`;
      }
      return p;
    }, i = [];
    for (; this._history.length > 0; )
      i.push(this._undoMove());
    const a = [];
    let c = "";
    for (i.length === 0 && a.push(s("")); i.length > 0; ) {
      c = s(c);
      const p = i.pop();
      if (!p)
        break;
      if (!this._history.length && p.color === "b") {
        const v = `${this._moveNumber}. ...`;
        c = c ? `${c} ${v}` : v;
      } else
        p.color === "w" && (c.length && a.push(c), c = this._moveNumber + ".");
      c = c + " " + this._moveToSan(p, this._moves({ legal: !0 })), this._makeMove(p);
    }
    if (c.length && a.push(s(c)), typeof this._header.Result < "u" && a.push(this._header.Result), o === 0)
      return n.join("") + a.join(" ");
    const l = function() {
      return n.length > 0 && n[n.length - 1] === " " ? (n.pop(), !0) : !1;
    }, u = function(p, v) {
      for (const d of v.split(" "))
        if (d) {
          if (p + d.length > o) {
            for (; l(); )
              p--;
            n.push(t), p = 0;
          }
          n.push(d), p += d.length, n.push(" "), p++;
        }
      return l() && p--, p;
    };
    let f = 0;
    for (let p = 0; p < a.length; p++) {
      if (f + a[p].length > o && a[p].includes("{")) {
        f = u(f, a[p]);
        continue;
      }
      f + a[p].length > o && p !== 0 ? (n[n.length - 1] === " " && n.pop(), n.push(t), f = 0) : p !== 0 && (n.push(" "), f++), n.push(a[p]), f += a[p].length;
    }
    return n.join("");
  }
  header(...t) {
    for (let o = 0; o < t.length; o += 2)
      typeof t[o] == "string" && typeof t[o + 1] == "string" && (this._header[t[o]] = t[o + 1]);
    return this._header;
  }
  loadPgn(t, { strict: o = !1, newlineChar: n = `\r?
` } = {}) {
    function r(b) {
      return b.replace(/\\/g, "\\");
    }
    function s(b) {
      const C = {}, P = b.split(new RegExp(r(n)));
      let k = "", I = "";
      for (let L = 0; L < P.length; L++) {
        const E = /^\s*\[\s*([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;
        k = P[L].replace(E, "$1"), I = P[L].replace(E, "$2"), k.trim().length > 0 && (C[k] = I);
      }
      return C;
    }
    t = t.trim();
    const i = new RegExp("^(\\[((?:" + r(n) + ")|.)*\\])((?:\\s*" + r(n) + "){2}|(?:\\s*" + r(n) + ")*$)").exec(t), a = i && i.length >= 2 ? i[1] : "";
    this.reset();
    const c = s(a);
    let l = "";
    for (const b in c)
      b.toLowerCase() === "fen" && (l = c[b]), this.header(b, c[b]);
    if (!o)
      l && this.load(l, !0);
    else if (c.SetUp === "1") {
      if (!("FEN" in c))
        throw new Error("Invalid PGN: FEN tag must be supplied with SetUp tag");
      this.load(c.FEN, !0);
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
      return b = b.replace(new RegExp(r(n), "g"), " "), `{${u(b.slice(1, b.length - 1))}}`;
    }, v = function(b) {
      if (b.startsWith("{") && b.endsWith("}"))
        return f(b.slice(1, b.length - 1));
    };
    let d = t.replace(a, "").replace(
      // encode comments so they don't get deleted below
      new RegExp(`({[^}]*})+?|;([^${r(n)}]*)`, "g"),
      function(b, C, P) {
        return C !== void 0 ? p(C) : " " + p(`{${P.slice(1)}}`);
      }
    ).replace(new RegExp(r(n), "g"), " ");
    const m = /(\([^()]+\))+?/g;
    for (; m.test(d); )
      d = d.replace(m, "");
    d = d.replace(/\d+\.(\.\.)?/g, ""), d = d.replace(/\.\.\./g, ""), d = d.replace(/\$\d+/g, "");
    let g = d.trim().split(new RegExp(/\s+/));
    g = g.filter((b) => b !== "");
    let y = "";
    for (let b = 0; b < g.length; b++) {
      const C = v(g[b]);
      if (C !== void 0) {
        this._comments[this.fen()] = C;
        continue;
      }
      const P = this._moveFromSan(g[b], o);
      if (P == null)
        if (Gn.indexOf(g[b]) > -1)
          y = g[b];
        else
          throw new Error(`Invalid move in PGN: ${g[b]}`);
      else
        y = "", this._makeMove(P);
    }
    y && Object.keys(this._header).length && !this._header.Result && this.header("Result", y);
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
  _moveToSan(t, o) {
    let n = "";
    if (t.flags & w.KSIDE_CASTLE)
      n = "O-O";
    else if (t.flags & w.QSIDE_CASTLE)
      n = "O-O-O";
    else {
      if (t.piece !== x) {
        const r = Jn(t, o);
        n += t.piece.toUpperCase() + r;
      }
      t.flags & (w.CAPTURE | w.EP_CAPTURE) && (t.piece === x && (n += K(t.from)[0]), n += "x"), n += K(t.to), t.promotion && (n += "=" + t.promotion.toUpperCase());
    }
    return this._makeMove(t), this.isCheck() && (this.isCheckmate() ? n += "#" : n += "+"), this._undoMove(), n;
  }
  // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
  _moveFromSan(t, o = !1) {
    const n = rt(t);
    let r = Ht(n), s = this._moves({ legal: !0, piece: r });
    for (let p = 0, v = s.length; p < v; p++)
      if (n === rt(this._moveToSan(s[p], s)))
        return s[p];
    if (o)
      return null;
    let i, a, c, l, u, f = !1;
    if (a = n.match(
      /([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/
      //     piece         from              to       promotion
    ), a ? (i = a[1], c = a[2], l = a[3], u = a[4], c.length == 1 && (f = !0)) : (a = n.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/), a && (i = a[1], c = a[2], l = a[3], u = a[4], c.length == 1 && (f = !0))), r = Ht(n), s = this._moves({
      legal: !0,
      piece: i || r
    }), !l)
      return null;
    for (let p = 0, v = s.length; p < v; p++)
      if (c) {
        if ((!i || i.toLowerCase() == s[p].piece) && _[c] == s[p].from && _[l] == s[p].to && (!u || u.toLowerCase() == s[p].promotion))
          return s[p];
        if (f) {
          const d = K(s[p].from);
          if ((!i || i.toLowerCase() == s[p].piece) && _[l] == s[p].to && (c == d[0] || c == d[1]) && (!u || u.toLowerCase() == s[p].promotion))
            return s[p];
        }
      } else if (n === rt(this._moveToSan(s[p], s)).replace("x", ""))
        return s[p];
    return null;
  }
  ascii() {
    let t = `   +------------------------+
`;
    for (let o = _.a8; o <= _.h1; o++) {
      if (Te(o) === 0 && (t += " " + "87654321"[de(o)] + " |"), this._board[o]) {
        const n = this._board[o].type, r = this._board[o].color === B ? n.toUpperCase() : n.toLowerCase();
        t += " " + r + " ";
      } else
        t += " . ";
      o + 1 & 136 && (t += `|
`, o += 8);
    }
    return t += `   +------------------------+
`, t += "     a  b  c  d  e  f  g  h", t;
  }
  perft(t) {
    const o = this._moves({ legal: !1 });
    let n = 0;
    const r = this._turn;
    for (let s = 0, i = o.length; s < i; s++)
      this._makeMove(o[s]), this._isKingAttacked(r) || (t - 1 > 0 ? n += this.perft(t - 1) : n++), this._undoMove();
    return n;
  }
  // pretty = external move object
  _makePretty(t) {
    const { color: o, piece: n, from: r, to: s, flags: i, captured: a, promotion: c } = t;
    let l = "";
    for (const v in w)
      w[v] & i && (l += Dn[v]);
    const u = K(r), f = K(s), p = {
      color: o,
      piece: n,
      from: u,
      to: f,
      san: this._moveToSan(t, this._moves({ legal: !0 })),
      flags: l,
      lan: u + f,
      before: this.fen(),
      after: ""
    };
    return this._makeMove(t), p.after = this.fen(), this._undoMove(), a && (p.captured = a), c && (p.promotion = c, p.lan += c), p;
  }
  turn() {
    return this._turn;
  }
  board() {
    const t = [];
    let o = [];
    for (let n = _.a8; n <= _.h1; n++)
      this._board[n] == null ? o.push(null) : o.push({
        square: K(n),
        type: this._board[n].type,
        color: this._board[n].color
      }), n + 1 & 136 && (t.push(o), o = [], n += 8);
    return t;
  }
  squareColor(t) {
    if (t in _) {
      const o = _[t];
      return (de(o) + Te(o)) % 2 === 0 ? "light" : "dark";
    }
    return null;
  }
  history({ verbose: t = !1 } = {}) {
    const o = [], n = [];
    for (; this._history.length > 0; )
      o.push(this._undoMove());
    for (; ; ) {
      const r = o.pop();
      if (!r)
        break;
      t ? n.push(this._makePretty(r)) : n.push(this._moveToSan(r, this._moves())), this._makeMove(r);
    }
    return n;
  }
  _pruneComments() {
    const t = [], o = {}, n = (r) => {
      r in this._comments && (o[r] = this._comments[r]);
    };
    for (; this._history.length > 0; )
      t.push(this._undoMove());
    for (n(this.fen()); ; ) {
      const r = t.pop();
      if (!r)
        break;
      this._makeMove(r), n(this.fen());
    }
    this._comments = o;
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
      const o = this._comments[t];
      return delete this._comments[t], { fen: t, comment: o };
    });
  }
  setCastlingRights(t, o) {
    for (const r of [N, ie])
      o[r] !== void 0 && (o[r] ? this._castling[t] |= Be[r] : this._castling[t] &= ~Be[r]);
    this._updateCastlingRights();
    const n = this.getCastlingRights(t);
    return (o[N] === void 0 || o[N] === n[N]) && (o[ie] === void 0 || o[ie] === n[ie]);
  }
  getCastlingRights(t) {
    return {
      [N]: (this._castling[t] & Be[N]) !== 0,
      [ie]: (this._castling[t] & Be[ie]) !== 0
    };
  }
  moveNumber() {
    return this._moveNumber;
  }
}
function Zn(e) {
  const t = [];
  for (const o of e)
    t.push({ orig: o.to, brush: "yellow" }), o.captured && t.push({ orig: o.from, dest: o.to, brush: "red" }), o.san.includes("+") && t.push({ orig: o.from, dest: o.to, brush: "blue" });
  return t;
}
function Ie(e) {
  return e === "w" ? "white" : "black";
}
function Vt(e) {
  const t = /* @__PURE__ */ new Map();
  for (const o of qn) {
    const n = e.moves({ square: o, verbose: !0 });
    n.length && t.set(
      n[0].from,
      n.map((r) => r.to)
    );
  }
  return t;
}
function Yn(e, t) {
  if ((t == null ? void 0 : t.type) !== "p")
    return !1;
  const o = (t == null ? void 0 : t.color) === "w" ? "8" : "1";
  return e[1] === o;
}
function Pe(e) {
  return !!e && e instanceof Object && !(e instanceof Array) && !(e instanceof Function);
}
function $e(e) {
  return Pe(e) ? Object.fromEntries(
    Object.entries(e).map(([t, o]) => [
      t,
      $e(o)
    ])
  ) : e;
}
function wo(e, t) {
  const o = { ...e, ...t };
  for (const n in o)
    o[n] = Pe(e == null ? void 0 : e[n]) && Pe(t == null ? void 0 : t[n]) ? wo(e[n], t[n]) : $e(o[n]);
  return o;
}
function _o(e, t) {
  const o = {};
  for (const n in t)
    if (Pe(e == null ? void 0 : e[n]) && Pe(t == null ? void 0 : t[n])) {
      const r = _o(
        e[n],
        t[n]
      );
      Object.keys(r).length > 0 && (o[n] = r);
    } else
      (e == null ? void 0 : e[n]) !== t[n] && (o[n] = t[n]);
  return o;
}
const er = {
  p: "pawn",
  n: "knight",
  b: "bishop",
  r: "rook",
  q: "queen",
  k: "king"
}, tr = /* @__PURE__ */ new Map([
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
]), or = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", nr = {
  fen: or,
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
    dests: tr,
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
}, rr = ["white", "black"], Et = ["a", "b", "c", "d", "e", "f", "g", "h"], kt = ["1", "2", "3", "4", "5", "6", "7", "8"], sr = [...kt].reverse(), Tt = Array.prototype.concat(...Et.map((e) => kt.map((t) => e + t))), W = (e) => Tt[8 * e[0] + e[1]], T = (e) => [e.charCodeAt(0) - 97, e.charCodeAt(1) - 49], So = Tt.map(T);
function ir(e) {
  let t;
  const o = () => (t === void 0 && (t = e()), t);
  return o.clear = () => {
    t = void 0;
  }, o;
}
const ar = () => {
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
}, Pt = (e) => e === "white" ? "black" : "white", Ae = (e, t) => {
  const o = e[0] - t[0], n = e[1] - t[1];
  return o * o + n * n;
}, ft = (e, t) => e.role === t.role && e.color === t.color, Oe = (e) => (t, o) => [
  (o ? t[0] : 7 - t[0]) * e.width / 8,
  (o ? 7 - t[1] : t[1]) * e.height / 8
], Z = (e, t) => {
  e.style.transform = `translate(${t[0]}px,${t[1]}px)`;
}, Co = (e, t, o = 1) => {
  e.style.transform = `translate(${t[0]}px,${t[1]}px) scale(${o})`;
}, At = (e, t) => {
  e.style.visibility = t ? "visible" : "hidden";
}, me = (e) => {
  var t;
  if (e.clientX || e.clientX === 0)
    return [e.clientX, e.clientY];
  if (!((t = e.targetTouches) === null || t === void 0) && t[0])
    return [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
}, Eo = (e) => e.buttons === 2 || e.button === 2, ee = (e, t) => {
  const o = document.createElement(e);
  return t && (o.className = t), o;
};
function ko(e, t, o) {
  const n = T(e);
  return t || (n[0] = 7 - n[0], n[1] = 7 - n[1]), [
    o.left + o.width * n[0] / 8 + o.width / 16,
    o.top + o.height * (7 - n[1]) / 8 + o.height / 16
  ];
}
const fe = (e, t) => Math.abs(e - t), cr = (e) => (t, o, n, r) => fe(t, n) < 2 && (e === "white" ? (
  // allow 2 squares from first two ranks, for horde
  r === o + 1 || o <= 1 && r === o + 2 && t === n
) : r === o - 1 || o >= 6 && r === o - 2 && t === n), To = (e, t, o, n) => {
  const r = fe(e, o), s = fe(t, n);
  return r === 1 && s === 2 || r === 2 && s === 1;
}, Po = (e, t, o, n) => fe(e, o) === fe(t, n), Ao = (e, t, o, n) => e === o || t === n, Ro = (e, t, o, n) => Po(e, t, o, n) || Ao(e, t, o, n), lr = (e, t, o) => (n, r, s, i) => fe(n, s) < 2 && fe(r, i) < 2 || o && r === i && r === (e === "white" ? 0 : 7) && (n === 4 && (s === 2 && t.includes(0) || s === 6 && t.includes(7)) || t.includes(s));
function ur(e, t) {
  const o = t === "white" ? "1" : "8", n = [];
  for (const [r, s] of e)
    r[1] === o && s.color === t && s.role === "rook" && n.push(T(r)[0]);
  return n;
}
function Oo(e, t, o) {
  const n = e.get(t);
  if (!n)
    return [];
  const r = T(t), s = n.role, i = s === "pawn" ? cr(n.color) : s === "knight" ? To : s === "bishop" ? Po : s === "rook" ? Ao : s === "queen" ? Ro : lr(n.color, ur(e, n.color), o);
  return So.filter((a) => (r[0] !== a[0] || r[1] !== a[1]) && i(r[0], r[1], a[0], a[1])).map(W);
}
function U(e, ...t) {
  e && setTimeout(() => e(...t), 1);
}
function dr(e) {
  e.orientation = Pt(e.orientation), e.animation.current = e.draggable.current = e.selected = void 0;
}
function hr(e, t) {
  for (const [o, n] of t)
    n ? e.pieces.set(o, n) : e.pieces.delete(o);
}
function fr(e, t) {
  if (e.check = void 0, t === !0 && (t = e.turnColor), t)
    for (const [o, n] of e.pieces)
      n.role === "king" && n.color === t && (e.check = o);
}
function pr(e, t, o, n) {
  ce(e), e.premovable.current = [t, o], U(e.premovable.events.set, t, o, n);
}
function ae(e) {
  e.premovable.current && (e.premovable.current = void 0, U(e.premovable.events.unset));
}
function mr(e, t, o) {
  ae(e), e.predroppable.current = { role: t, key: o }, U(e.predroppable.events.set, t, o);
}
function ce(e) {
  const t = e.predroppable;
  t.current && (t.current = void 0, U(t.events.unset));
}
function gr(e, t, o) {
  if (!e.autoCastle)
    return !1;
  const n = e.pieces.get(t);
  if (!n || n.role !== "king")
    return !1;
  const r = T(t), s = T(o);
  if (r[1] !== 0 && r[1] !== 7 || r[1] !== s[1])
    return !1;
  r[0] === 4 && !e.pieces.has(o) && (s[0] === 6 ? o = W([7, s[1]]) : s[0] === 2 && (o = W([0, s[1]])));
  const i = e.pieces.get(o);
  return !i || i.color !== n.color || i.role !== "rook" ? !1 : (e.pieces.delete(t), e.pieces.delete(o), r[0] < s[0] ? (e.pieces.set(W([6, s[1]]), n), e.pieces.set(W([5, s[1]]), i)) : (e.pieces.set(W([2, s[1]]), n), e.pieces.set(W([3, s[1]]), i)), !0);
}
function Mo(e, t, o) {
  const n = e.pieces.get(t), r = e.pieces.get(o);
  if (t === o || !n)
    return !1;
  const s = r && r.color !== n.color ? r : void 0;
  return o === e.selected && G(e), U(e.events.move, t, o, s), gr(e, t, o) || (e.pieces.set(o, n), e.pieces.delete(t)), e.lastMove = [t, o], e.check = void 0, U(e.events.change), s || !0;
}
function Rt(e, t, o, n) {
  if (e.pieces.has(o))
    if (n)
      e.pieces.delete(o);
    else
      return !1;
  return U(e.events.dropNewPiece, t, o), e.pieces.set(o, t), e.lastMove = [o], e.check = void 0, U(e.events.change), e.movable.dests = void 0, e.turnColor = Pt(e.turnColor), !0;
}
function xo(e, t, o) {
  const n = Mo(e, t, o);
  return n && (e.movable.dests = void 0, e.turnColor = Pt(e.turnColor), e.animation.current = void 0), n;
}
function No(e, t, o) {
  if (Ot(e, t, o)) {
    const n = xo(e, t, o);
    if (n) {
      const r = e.hold.stop();
      G(e);
      const s = {
        premove: !1,
        ctrlKey: e.stats.ctrlKey,
        holdTime: r
      };
      return n !== !0 && (s.captured = n), U(e.movable.events.after, t, o, s), !0;
    }
  } else if (vr(e, t, o))
    return pr(e, t, o, {
      ctrlKey: e.stats.ctrlKey
    }), G(e), !0;
  return G(e), !1;
}
function Lo(e, t, o, n) {
  const r = e.pieces.get(t);
  r && (br(e, t, o) || n) ? (e.pieces.delete(t), Rt(e, r, o, n), U(e.movable.events.afterNewPiece, r.role, o, {
    premove: !1,
    predrop: !1
  })) : r && yr(e, t, o) ? mr(e, r.role, o) : (ae(e), ce(e)), e.pieces.delete(t), G(e);
}
function pt(e, t, o) {
  if (U(e.events.select, t), e.selected) {
    if (e.selected === t && !e.draggable.enabled) {
      G(e), e.hold.cancel();
      return;
    } else if ((e.selectable.enabled || o) && e.selected !== t && No(e, e.selected, t)) {
      e.stats.dragged = !1;
      return;
    }
  }
  (e.selectable.enabled || e.draggable.enabled) && (Io(e, t) || Mt(e, t)) && (Bo(e, t), e.hold.start());
}
function Bo(e, t) {
  e.selected = t, Mt(e, t) ? e.premovable.customDests || (e.premovable.dests = Oo(e.pieces, t, e.premovable.castle)) : e.premovable.dests = void 0;
}
function G(e) {
  e.selected = void 0, e.premovable.dests = void 0, e.hold.cancel();
}
function Io(e, t) {
  const o = e.pieces.get(t);
  return !!o && (e.movable.color === "both" || e.movable.color === o.color && e.turnColor === o.color);
}
const Ot = (e, t, o) => {
  var n, r;
  return t !== o && Io(e, t) && (e.movable.free || !!(!((r = (n = e.movable.dests) === null || n === void 0 ? void 0 : n.get(t)) === null || r === void 0) && r.includes(o)));
};
function br(e, t, o) {
  const n = e.pieces.get(t);
  return !!n && (t === o || !e.pieces.has(o)) && (e.movable.color === "both" || e.movable.color === n.color && e.turnColor === n.color);
}
function Mt(e, t) {
  const o = e.pieces.get(t);
  return !!o && e.premovable.enabled && e.movable.color === o.color && e.turnColor !== o.color;
}
function vr(e, t, o) {
  var n, r;
  const s = (r = (n = e.premovable.customDests) === null || n === void 0 ? void 0 : n.get(t)) !== null && r !== void 0 ? r : Oo(e.pieces, t, e.premovable.castle);
  return t !== o && Mt(e, t) && s.includes(o);
}
function yr(e, t, o) {
  const n = e.pieces.get(t), r = e.pieces.get(o);
  return !!n && (!r || r.color !== e.movable.color) && e.predroppable.enabled && (n.role !== "pawn" || o[1] !== "1" && o[1] !== "8") && e.movable.color === n.color && e.turnColor !== n.color;
}
function wr(e, t) {
  const o = e.pieces.get(t);
  return !!o && e.draggable.enabled && (e.movable.color === "both" || e.movable.color === o.color && (e.turnColor === o.color || e.premovable.enabled));
}
function _r(e) {
  const t = e.premovable.current;
  if (!t)
    return !1;
  const o = t[0], n = t[1];
  let r = !1;
  if (Ot(e, o, n)) {
    const s = xo(e, o, n);
    if (s) {
      const i = { premove: !0 };
      s !== !0 && (i.captured = s), U(e.movable.events.after, o, n, i), r = !0;
    }
  }
  return ae(e), r;
}
function Sr(e, t) {
  const o = e.predroppable.current;
  let n = !1;
  if (!o)
    return !1;
  if (t(o)) {
    const r = {
      role: o.role,
      color: e.movable.color
    };
    Rt(e, r, o.key) && (U(e.movable.events.afterNewPiece, o.role, o.key, {
      premove: !1,
      predrop: !0
    }), n = !0);
  }
  return ce(e), n;
}
function xt(e) {
  ae(e), ce(e), G(e);
}
function Wt(e) {
  e.movable.color = e.movable.dests = e.animation.current = void 0, xt(e);
}
function ge(e, t, o) {
  let n = Math.floor(8 * (e[0] - o.left) / o.width);
  t || (n = 7 - n);
  let r = 7 - Math.floor(8 * (e[1] - o.top) / o.height);
  return t || (r = 7 - r), n >= 0 && n < 8 && r >= 0 && r < 8 ? W([n, r]) : void 0;
}
function Cr(e, t, o, n) {
  const r = T(e), s = So.filter((c) => Ro(r[0], r[1], c[0], c[1]) || To(r[0], r[1], c[0], c[1])), i = s.map((c) => ko(W(c), o, n)).map((c) => Ae(t, c)), [, a] = i.reduce((c, l, u) => c[0] < l ? c : [l, u], [i[0], 0]);
  return W(s[a]);
}
const j = (e) => e.orientation === "white", Do = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR", Er = {
  p: "pawn",
  r: "rook",
  n: "knight",
  b: "bishop",
  q: "queen",
  k: "king"
}, kr = {
  pawn: "p",
  rook: "r",
  knight: "n",
  bishop: "b",
  queen: "q",
  king: "k"
};
function qo(e) {
  e === "start" && (e = Do);
  const t = /* @__PURE__ */ new Map();
  let o = 7, n = 0;
  for (const r of e)
    switch (r) {
      case " ":
      case "[":
        return t;
      case "/":
        if (--o, o < 0)
          return t;
        n = 0;
        break;
      case "~": {
        const s = t.get(W([n - 1, o]));
        s && (s.promoted = !0);
        break;
      }
      default: {
        const s = r.charCodeAt(0);
        if (s < 57)
          n += s - 48;
        else {
          const i = r.toLowerCase();
          t.set(W([n, o]), {
            role: Er[i],
            color: r === i ? "black" : "white"
          }), ++n;
        }
      }
    }
  return t;
}
function Tr(e) {
  return sr.map((t) => Et.map((o) => {
    const n = e.get(o + t);
    if (n) {
      let r = kr[n.role];
      return n.color === "white" && (r = r.toUpperCase()), n.promoted && (r += "~"), r;
    } else
      return "1";
  }).join("")).join("/").replace(/1{2,}/g, (t) => t.length.toString());
}
function Fo(e, t) {
  t.animation && (Nt(e.animation, t.animation), (e.animation.duration || 0) < 70 && (e.animation.enabled = !1));
}
function Uo(e, t) {
  var o, n, r;
  if (!((o = t.movable) === null || o === void 0) && o.dests && (e.movable.dests = void 0), !((n = t.drawable) === null || n === void 0) && n.autoShapes && (e.drawable.autoShapes = []), Nt(e, t), t.fen && (e.pieces = qo(t.fen), e.drawable.shapes = ((r = t.drawable) === null || r === void 0 ? void 0 : r.shapes) || []), "check" in t && fr(e, t.check || !1), "lastMove" in t && !t.lastMove ? e.lastMove = void 0 : t.lastMove && (e.lastMove = t.lastMove), e.selected && Bo(e, e.selected), Fo(e, t), !e.movable.rookCastle && e.movable.dests) {
    const s = e.movable.color === "white" ? "1" : "8", i = "e" + s, a = e.movable.dests.get(i), c = e.pieces.get(i);
    if (!a || !c || c.role !== "king")
      return;
    e.movable.dests.set(i, a.filter((l) => !(l === "a" + s && a.includes("c" + s)) && !(l === "h" + s && a.includes("g" + s))));
  }
}
function Nt(e, t) {
  for (const o in t)
    Object.prototype.hasOwnProperty.call(t, o) && (Object.prototype.hasOwnProperty.call(e, o) && zt(e[o]) && zt(t[o]) ? Nt(e[o], t[o]) : e[o] = t[o]);
}
function zt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null;
}
const le = (e, t) => t.animation.enabled ? Rr(e, t) : se(e, t);
function se(e, t) {
  const o = e(t);
  return t.dom.redraw(), o;
}
const st = (e, t) => ({
  key: e,
  pos: T(e),
  piece: t
}), Pr = (e, t) => t.sort((o, n) => Ae(e.pos, o.pos) - Ae(e.pos, n.pos))[0];
function Ar(e, t) {
  const o = /* @__PURE__ */ new Map(), n = [], r = /* @__PURE__ */ new Map(), s = [], i = [], a = /* @__PURE__ */ new Map();
  let c, l, u;
  for (const [f, p] of e)
    a.set(f, st(f, p));
  for (const f of Tt)
    c = t.pieces.get(f), l = a.get(f), c ? l ? ft(c, l.piece) || (s.push(l), i.push(st(f, c))) : i.push(st(f, c)) : l && s.push(l);
  for (const f of i)
    l = Pr(f, s.filter((p) => ft(f.piece, p.piece))), l && (u = [l.pos[0] - f.pos[0], l.pos[1] - f.pos[1]], o.set(f.key, u.concat(u)), n.push(l.key));
  for (const f of s)
    n.includes(f.key) || r.set(f.key, f.piece);
  return {
    anims: o,
    fadings: r
  };
}
function jo(e, t) {
  const o = e.animation.current;
  if (o === void 0) {
    e.dom.destroyed || e.dom.redrawNow();
    return;
  }
  const n = 1 - (t - o.start) * o.frequency;
  if (n <= 0)
    e.animation.current = void 0, e.dom.redrawNow();
  else {
    const r = Or(n);
    for (const s of o.plan.anims.values())
      s[2] = s[0] * r, s[3] = s[1] * r;
    e.dom.redrawNow(!0), requestAnimationFrame((s = performance.now()) => jo(e, s));
  }
}
function Rr(e, t) {
  const o = new Map(t.pieces), n = e(t), r = Ar(o, t);
  if (r.anims.size || r.fadings.size) {
    const s = t.animation.current && t.animation.current.start;
    t.animation.current = {
      start: performance.now(),
      frequency: 1 / t.animation.duration,
      plan: r
    }, s || jo(t, performance.now());
  } else
    t.dom.redraw();
  return n;
}
const Or = (e) => e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1, Mr = ["green", "red", "blue", "yellow"];
function xr(e, t) {
  if (t.touches && t.touches.length > 1)
    return;
  t.stopPropagation(), t.preventDefault(), t.ctrlKey ? G(e) : xt(e);
  const o = me(t), n = ge(o, j(e), e.dom.bounds());
  n && (e.drawable.current = {
    orig: n,
    pos: o,
    brush: Ir(t),
    snapToValidMove: e.drawable.defaultSnapToValidMove
  }, $o(e));
}
function $o(e) {
  requestAnimationFrame(() => {
    const t = e.drawable.current;
    if (t) {
      const o = ge(t.pos, j(e), e.dom.bounds());
      o || (t.snapToValidMove = !1);
      const n = t.snapToValidMove ? Cr(t.orig, t.pos, j(e), e.dom.bounds()) : o;
      n !== t.mouseSq && (t.mouseSq = n, t.dest = n !== t.orig ? n : void 0, e.dom.redrawNow()), $o(e);
    }
  });
}
function Nr(e, t) {
  e.drawable.current && (e.drawable.current.pos = me(t));
}
function Lr(e) {
  const t = e.drawable.current;
  t && (t.mouseSq && Dr(e.drawable, t), Ko(e));
}
function Ko(e) {
  e.drawable.current && (e.drawable.current = void 0, e.dom.redraw());
}
function Br(e) {
  e.drawable.shapes.length && (e.drawable.shapes = [], e.dom.redraw(), Ho(e.drawable));
}
function Ir(e) {
  var t;
  const o = (e.shiftKey || e.ctrlKey) && Eo(e), n = e.altKey || e.metaKey || ((t = e.getModifierState) === null || t === void 0 ? void 0 : t.call(e, "AltGraph"));
  return Mr[(o ? 1 : 0) + (n ? 2 : 0)];
}
function Dr(e, t) {
  const o = (r) => r.orig === t.orig && r.dest === t.dest, n = e.shapes.find(o);
  n && (e.shapes = e.shapes.filter((r) => !o(r))), (!n || n.brush !== t.brush) && e.shapes.push({
    orig: t.orig,
    dest: t.dest,
    brush: t.brush
  }), Ho(e);
}
function Ho(e) {
  e.onChange && e.onChange(e.shapes);
}
function qr(e, t) {
  if (!(e.trustAllEvents || t.isTrusted) || t.button !== void 0 && t.button !== 0 || t.touches && t.touches.length > 1)
    return;
  const o = e.dom.bounds(), n = me(t), r = ge(n, j(e), o);
  if (!r)
    return;
  const s = e.pieces.get(r), i = e.selected;
  if (!i && e.drawable.enabled && (e.drawable.eraseOnClick || !s || s.color !== e.turnColor) && Br(e), t.cancelable !== !1 && (!t.touches || e.blockTouchScroll || s || i || Fr(e, n)))
    t.preventDefault();
  else if (t.touches)
    return;
  const a = !!e.premovable.current, c = !!e.predroppable.current;
  e.stats.ctrlKey = t.ctrlKey, e.selected && Ot(e, e.selected, r) ? le((f) => pt(f, r), e) : pt(e, r);
  const l = e.selected === r, u = Wo(e, r);
  if (s && u && l && wr(e, r)) {
    e.draggable.current = {
      orig: r,
      piece: s,
      origPos: n,
      pos: n,
      started: e.draggable.autoDistance && e.stats.dragged,
      element: u,
      previouslySelected: i,
      originTarget: t.target,
      keyHasChanged: !1
    }, u.cgDragging = !0, u.classList.add("dragging");
    const f = e.dom.elements.ghost;
    f && (f.className = `ghost ${s.color} ${s.role}`, Z(f, Oe(o)(T(r), j(e))), At(f, !0)), Lt(e);
  } else
    a && ae(e), c && ce(e);
  e.dom.redraw();
}
function Fr(e, t) {
  const o = j(e), n = e.dom.bounds(), r = Math.pow(n.width / 8, 2);
  for (const s of e.pieces.keys()) {
    const i = ko(s, o, n);
    if (Ae(i, t) <= r)
      return !0;
  }
  return !1;
}
function Ur(e, t, o, n) {
  const r = "a0";
  e.pieces.set(r, t), e.dom.redraw();
  const s = me(o);
  e.draggable.current = {
    orig: r,
    piece: t,
    origPos: s,
    pos: s,
    started: !0,
    element: () => Wo(e, r),
    originTarget: o.target,
    newPiece: !0,
    force: !!n,
    keyHasChanged: !1
  }, Lt(e);
}
function Lt(e) {
  requestAnimationFrame(() => {
    var t;
    const o = e.draggable.current;
    if (!o)
      return;
    !((t = e.animation.current) === null || t === void 0) && t.plan.anims.has(o.orig) && (e.animation.current = void 0);
    const n = e.pieces.get(o.orig);
    if (!n || !ft(n, o.piece))
      Ke(e);
    else if (!o.started && Ae(o.pos, o.origPos) >= Math.pow(e.draggable.distance, 2) && (o.started = !0), o.started) {
      if (typeof o.element == "function") {
        const s = o.element();
        if (!s)
          return;
        s.cgDragging = !0, s.classList.add("dragging"), o.element = s;
      }
      const r = e.dom.bounds();
      Z(o.element, [
        o.pos[0] - r.left - r.width / 16,
        o.pos[1] - r.top - r.height / 16
      ]), o.keyHasChanged || (o.keyHasChanged = o.orig !== ge(o.pos, j(e), r));
    }
    Lt(e);
  });
}
function jr(e, t) {
  e.draggable.current && (!t.touches || t.touches.length < 2) && (e.draggable.current.pos = me(t));
}
function $r(e, t) {
  const o = e.draggable.current;
  if (!o)
    return;
  if (t.type === "touchend" && t.cancelable !== !1 && t.preventDefault(), t.type === "touchend" && o.originTarget !== t.target && !o.newPiece) {
    e.draggable.current = void 0;
    return;
  }
  ae(e), ce(e);
  const n = me(t) || o.pos, r = ge(n, j(e), e.dom.bounds());
  r && o.started && o.orig !== r ? o.newPiece ? Lo(e, o.orig, r, o.force) : (e.stats.ctrlKey = t.ctrlKey, No(e, o.orig, r) && (e.stats.dragged = !0)) : o.newPiece ? e.pieces.delete(o.orig) : e.draggable.deleteOnDropOff && !r && (e.pieces.delete(o.orig), U(e.events.change)), (o.orig === o.previouslySelected || o.keyHasChanged) && (o.orig === r || !r) ? G(e) : e.selectable.enabled || G(e), Vo(e), e.draggable.current = void 0, e.dom.redraw();
}
function Ke(e) {
  const t = e.draggable.current;
  t && (t.newPiece && e.pieces.delete(t.orig), e.draggable.current = void 0, G(e), Vo(e), e.dom.redraw());
}
function Vo(e) {
  const t = e.dom.elements;
  t.ghost && At(t.ghost, !1);
}
function Wo(e, t) {
  let o = e.dom.elements.board.firstChild;
  for (; o; ) {
    if (o.cgKey === t && o.tagName === "PIECE")
      return o;
    o = o.nextSibling;
  }
}
function Kr(e, t) {
  e.exploding = { stage: 1, keys: t }, e.dom.redraw(), setTimeout(() => {
    Gt(e, 2), setTimeout(() => Gt(e, void 0), 120);
  }, 120);
}
function Gt(e, t) {
  e.exploding && (t ? e.exploding.stage = t : e.exploding = void 0, e.dom.redraw());
}
function Hr(e, t) {
  function o() {
    dr(e), t();
  }
  return {
    set(n) {
      n.orientation && n.orientation !== e.orientation && o(), Fo(e, n), (n.fen ? le : se)((r) => Uo(r, n), e);
    },
    state: e,
    getFen: () => Tr(e.pieces),
    toggleOrientation: o,
    setPieces(n) {
      le((r) => hr(r, n), e);
    },
    selectSquare(n, r) {
      n ? le((s) => pt(s, n, r), e) : e.selected && (G(e), e.dom.redraw());
    },
    move(n, r) {
      le((s) => Mo(s, n, r), e);
    },
    newPiece(n, r) {
      le((s) => Rt(s, n, r), e);
    },
    playPremove() {
      if (e.premovable.current) {
        if (le(_r, e))
          return !0;
        e.dom.redraw();
      }
      return !1;
    },
    playPredrop(n) {
      if (e.predroppable.current) {
        const r = Sr(e, n);
        return e.dom.redraw(), r;
      }
      return !1;
    },
    cancelPremove() {
      se(ae, e);
    },
    cancelPredrop() {
      se(ce, e);
    },
    cancelMove() {
      se((n) => {
        xt(n), Ke(n);
      }, e);
    },
    stop() {
      se((n) => {
        Wt(n), Ke(n);
      }, e);
    },
    explode(n) {
      Kr(e, n);
    },
    setAutoShapes(n) {
      se((r) => r.drawable.autoShapes = n, e);
    },
    setShapes(n) {
      se((r) => r.drawable.shapes = n, e);
    },
    getKeyAtDomPos(n) {
      return ge(n, j(e), e.dom.bounds());
    },
    redrawAll: t,
    dragNewPiece(n, r, s) {
      Ur(e, n, r, s);
    },
    destroy() {
      Wt(e), e.dom.unbind && e.dom.unbind(), e.dom.destroyed = !0;
    }
  };
}
function Vr() {
  return {
    pieces: qo(Do),
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
    hold: ar()
  };
}
function Wr() {
  const e = M("defs"), t = D(M("filter"), { id: "cg-filter-blur" });
  return t.appendChild(D(M("feGaussianBlur"), { stdDeviation: "0.022" })), e.appendChild(t), e;
}
function zr(e, t, o) {
  var n;
  const r = e.drawable, s = r.current, i = s && s.mouseSq ? s : void 0, a = /* @__PURE__ */ new Map(), c = e.dom.bounds(), l = r.autoShapes.filter((v) => !v.piece);
  for (const v of r.shapes.concat(l).concat(i ? [i] : [])) {
    if (!v.dest)
      continue;
    const d = (n = a.get(v.dest)) !== null && n !== void 0 ? n : /* @__PURE__ */ new Set(), m = Ve(He(T(v.orig), e.orientation), c), g = Ve(He(T(v.dest), e.orientation), c);
    d.add(gt(m, g)), a.set(v.dest, d);
  }
  const u = r.shapes.concat(l).map((v) => ({
    shape: v,
    current: !1,
    hash: Qt(v, mt(v.dest, a), !1, c)
  }));
  i && u.push({
    shape: i,
    current: !0,
    hash: Qt(i, mt(i.dest, a), !0, c)
  });
  const f = u.map((v) => v.hash).join(";");
  if (f === e.drawable.prevSvgHash)
    return;
  e.drawable.prevSvgHash = f;
  const p = t.querySelector("defs");
  Gr(r, u, p), Qr(u, t.querySelector("g"), o.querySelector("g"), (v) => Zr(e, v, r.brushes, a, c));
}
function Gr(e, t, o) {
  var n;
  const r = /* @__PURE__ */ new Map();
  let s;
  for (const c of t.filter((l) => l.shape.dest && l.shape.brush))
    s = zo(e.brushes[c.shape.brush], c.shape.modifiers), !((n = c.shape.modifiers) === null || n === void 0) && n.hilite && r.set("hilite", e.brushes.hilite), r.set(s.key, s);
  const i = /* @__PURE__ */ new Set();
  let a = o.firstElementChild;
  for (; a; )
    i.add(a.getAttribute("cgKey")), a = a.nextElementSibling;
  for (const [c, l] of r.entries())
    i.has(c) || o.appendChild(ts(l));
}
function Qr(e, t, o, n) {
  const r = /* @__PURE__ */ new Map();
  for (const s of e)
    r.set(s.hash, !1);
  for (const s of [t, o]) {
    const i = [];
    let a = s.firstElementChild, c;
    for (; a; )
      c = a.getAttribute("cgHash"), r.has(c) ? r.set(c, !0) : i.push(a), a = a.nextElementSibling;
    for (const l of i)
      s.removeChild(l);
  }
  for (const s of e.filter((i) => !r.get(i.hash)))
    for (const i of n(s))
      i.isCustom ? o.appendChild(i.el) : t.appendChild(i.el);
}
function Qt({ orig: e, dest: t, brush: o, piece: n, modifiers: r, customSvg: s, label: i }, a, c, l) {
  var u, f;
  return [
    l.width,
    l.height,
    c,
    e,
    t,
    o,
    a && "-",
    n && Jr(n),
    r && Xr(r),
    s && `custom-${Jt(s.html)},${(f = (u = s.center) === null || u === void 0 ? void 0 : u[0]) !== null && f !== void 0 ? f : "o"}`,
    i && `label-${Jt(i.text)}`
  ].filter((p) => p).join(",");
}
function Jr(e) {
  return [e.color, e.role, e.scale].filter((t) => t).join(",");
}
function Xr(e) {
  return [e.lineWidth, e.hilite && "*"].filter((t) => t).join(",");
}
function Jt(e) {
  let t = 0;
  for (let o = 0; o < e.length; o++)
    t = (t << 5) - t + e.charCodeAt(o) >>> 0;
  return t.toString();
}
function Zr(e, { shape: t, current: o, hash: n }, r, s, i) {
  var a, c;
  const l = Ve(He(T(t.orig), e.orientation), i), u = t.dest ? Ve(He(T(t.dest), e.orientation), i) : l, f = t.brush && zo(r[t.brush], t.modifiers), p = s.get(t.dest), v = [];
  if (f) {
    const d = D(M("g"), { cgHash: n });
    v.push({ el: d }), l[0] !== u[0] || l[1] !== u[1] ? d.appendChild(es(t, f, l, u, o, mt(t.dest, s))) : d.appendChild(Yr(r[t.brush], l, o, i));
  }
  if (t.label) {
    const d = t.label;
    (a = d.fill) !== null && a !== void 0 || (d.fill = t.brush && r[t.brush].color);
    const m = t.brush ? void 0 : "tr";
    v.push({ el: os(d, n, l, u, p, m), isCustom: !0 });
  }
  if (t.customSvg) {
    const d = (c = t.customSvg.center) !== null && c !== void 0 ? c : "orig", [m, g] = d === "label" ? Qo(l, u, p).map((b) => b - 0.5) : d === "dest" ? u : l, y = D(M("g"), { transform: `translate(${m},${g})`, cgHash: n });
    y.innerHTML = `<svg width="1" height="1" viewBox="0 0 100 100">${t.customSvg.html}</svg>`, v.push({ el: y, isCustom: !0 });
  }
  return v;
}
function Yr(e, t, o, n) {
  const r = ns(), s = (n.width + n.height) / (4 * Math.max(n.width, n.height));
  return D(M("circle"), {
    stroke: e.color,
    "stroke-width": r[o ? 0 : 1],
    fill: "none",
    opacity: Go(e, o),
    cx: t[0],
    cy: t[1],
    r: s - r[1] / 2
  });
}
function es(e, t, o, n, r, s) {
  var i;
  function a(u) {
    var f;
    const p = ss(s && !r), v = n[0] - o[0], d = n[1] - o[1], m = Math.atan2(d, v), g = Math.cos(m) * p, y = Math.sin(m) * p;
    return D(M("line"), {
      stroke: u ? "white" : t.color,
      "stroke-width": rs(t, r) + (u ? 0.04 : 0),
      "stroke-linecap": "round",
      "marker-end": `url(#arrowhead-${u ? "hilite" : t.key})`,
      opacity: !((f = e.modifiers) === null || f === void 0) && f.hilite ? 1 : Go(t, r),
      x1: o[0],
      y1: o[1],
      x2: n[0] - g,
      y2: n[1] - y
    });
  }
  if (!(!((i = e.modifiers) === null || i === void 0) && i.hilite))
    return a(!1);
  const c = M("g"), l = D(M("g"), { filter: "url(#cg-filter-blur)" });
  return l.appendChild(is(o, n)), l.appendChild(a(!0)), c.appendChild(l), c.appendChild(a(!1)), c;
}
function ts(e) {
  const t = D(M("marker"), {
    id: "arrowhead-" + e.key,
    orient: "auto",
    overflow: "visible",
    markerWidth: 4,
    markerHeight: 4,
    refX: e.key === "hilite" ? 1.86 : 2.05,
    refY: 2
  });
  return t.appendChild(D(M("path"), {
    d: "M0,0 V4 L3,2 Z",
    fill: e.color
  })), t.setAttribute("cgKey", e.key), t;
}
function os(e, t, o, n, r, s) {
  var i;
  const a = 0.4 * 0.75 ** e.text.length, c = Qo(o, n, r), l = s === "tr" ? 0.4 : 0, u = D(M("g"), {
    transform: `translate(${c[0] + l},${c[1] - l})`,
    cgHash: t
  });
  u.appendChild(D(M("circle"), {
    r: 0.4 / 2,
    "fill-opacity": s ? 1 : 0.8,
    "stroke-opacity": s ? 1 : 0.7,
    "stroke-width": 0.03,
    fill: (i = e.fill) !== null && i !== void 0 ? i : "#666",
    stroke: "white"
  }));
  const f = D(M("text"), {
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
function mt(e, t) {
  return (e && t.has(e) && t.get(e).size > 1) === !0;
}
function M(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function D(e, t) {
  for (const o in t)
    Object.prototype.hasOwnProperty.call(t, o) && e.setAttribute(o, t[o]);
  return e;
}
function zo(e, t) {
  return t ? {
    color: e.color,
    opacity: Math.round(e.opacity * 10) / 10,
    lineWidth: Math.round(t.lineWidth || e.lineWidth),
    key: [e.key, t.lineWidth].filter((o) => o).join("")
  } : e;
}
function ns() {
  return [3 / 64, 4 / 64];
}
function rs(e, t) {
  return (e.lineWidth || 10) * (t ? 0.85 : 1) / 64;
}
function Go(e, t) {
  return (e.opacity || 1) * (t ? 0.9 : 1);
}
function ss(e) {
  return (e ? 20 : 10) / 64;
}
function Ve(e, t) {
  const o = Math.min(1, t.width / t.height), n = Math.min(1, t.height / t.width);
  return [(e[0] - 3.5) * o, (3.5 - e[1]) * n];
}
function is(e, t) {
  const o = {
    from: [Math.floor(Math.min(e[0], t[0])), Math.floor(Math.min(e[1], t[1]))],
    to: [Math.ceil(Math.max(e[0], t[0])), Math.ceil(Math.max(e[1], t[1]))]
  };
  return D(M("rect"), {
    x: o.from[0],
    y: o.from[1],
    width: o.to[0] - o.from[0],
    height: o.to[1] - o.from[1],
    fill: "none",
    stroke: "none"
  });
}
function gt(e, t, o = !0) {
  const n = Math.atan2(t[1] - e[1], t[0] - e[0]) + Math.PI;
  return o ? (Math.round(n * 8 / Math.PI) + 16) % 16 : n;
}
function as(e, t) {
  return Math.sqrt([e[0] - t[0], e[1] - t[1]].reduce((o, n) => o + n * n, 0));
}
function Qo(e, t, o) {
  let n = as(e, t);
  const r = gt(e, t, !1);
  if (o && (n -= 33 / 64, o.size > 1)) {
    n -= 10 / 64;
    const s = gt(e, t);
    (o.has((s + 1) % 16) || o.has((s + 15) % 16)) && s & 1 && (n -= 0.4);
  }
  return [e[0] - Math.cos(r) * n, e[1] - Math.sin(r) * n].map((s) => s + 0.5);
}
function cs(e, t) {
  e.innerHTML = "", e.classList.add("cg-wrap");
  for (const c of rr)
    e.classList.toggle("orientation-" + c, t.orientation === c);
  e.classList.toggle("manipulable", !t.viewOnly);
  const o = ee("cg-container");
  e.appendChild(o);
  const n = ee("cg-board");
  o.appendChild(n);
  let r, s, i;
  if (t.drawable.visible && (r = D(M("svg"), {
    class: "cg-shapes",
    viewBox: "-4 -4 8 8",
    preserveAspectRatio: "xMidYMid slice"
  }), r.appendChild(Wr()), r.appendChild(M("g")), s = D(M("svg"), {
    class: "cg-custom-svgs",
    viewBox: "-3.5 -3.5 8 8",
    preserveAspectRatio: "xMidYMid slice"
  }), s.appendChild(M("g")), i = ee("cg-auto-pieces"), o.appendChild(r), o.appendChild(s), o.appendChild(i)), t.coordinates) {
    const c = t.orientation === "black" ? " black" : "", l = t.ranksPosition === "left" ? " left" : "";
    o.appendChild(Xt(kt, "ranks" + c + l)), o.appendChild(Xt(Et, "files" + c));
  }
  let a;
  return t.draggable.enabled && t.draggable.showGhost && (a = ee("piece", "ghost"), At(a, !1), o.appendChild(a)), {
    board: n,
    container: o,
    wrap: e,
    ghost: a,
    svg: r,
    customSvg: s,
    autoPieces: i
  };
}
function Xt(e, t) {
  const o = ee("coords", t);
  let n;
  for (const r of e)
    n = ee("coord"), n.textContent = r, o.appendChild(n);
  return o;
}
function ls(e, t) {
  if (!e.dropmode.active)
    return;
  ae(e), ce(e);
  const o = e.dropmode.piece;
  if (o) {
    e.pieces.set("a0", o);
    const n = me(t), r = n && ge(n, j(e), e.dom.bounds());
    r && Lo(e, "a0", r);
  }
  e.dom.redraw();
}
function us(e, t) {
  const o = e.dom.elements.board;
  if ("ResizeObserver" in window && new ResizeObserver(t).observe(e.dom.elements.wrap), (e.disableContextMenu || e.drawable.enabled) && o.addEventListener("contextmenu", (r) => r.preventDefault()), e.viewOnly)
    return;
  const n = hs(e);
  o.addEventListener("touchstart", n, {
    passive: !1
  }), o.addEventListener("mousedown", n, {
    passive: !1
  });
}
function ds(e, t) {
  const o = [];
  if ("ResizeObserver" in window || o.push(Se(document.body, "chessground.resize", t)), !e.viewOnly) {
    const n = Zt(e, jr, Nr), r = Zt(e, $r, Lr);
    for (const i of ["touchmove", "mousemove"])
      o.push(Se(document, i, n));
    for (const i of ["touchend", "mouseup"])
      o.push(Se(document, i, r));
    const s = () => e.dom.bounds.clear();
    o.push(Se(document, "scroll", s, { capture: !0, passive: !0 })), o.push(Se(window, "resize", s, { passive: !0 }));
  }
  return () => o.forEach((n) => n());
}
function Se(e, t, o, n) {
  return e.addEventListener(t, o, n), () => e.removeEventListener(t, o, n);
}
const hs = (e) => (t) => {
  e.draggable.current ? Ke(e) : e.drawable.current ? Ko(e) : t.shiftKey || Eo(t) ? e.drawable.enabled && xr(e, t) : e.viewOnly || (e.dropmode.active ? ls(e, t) : qr(e, t));
}, Zt = (e, t, o) => (n) => {
  e.drawable.current ? e.drawable.enabled && o(e, n) : e.viewOnly || t(e, n);
};
function fs(e) {
  const t = j(e), o = Oe(e.dom.bounds()), n = e.dom.elements.board, r = e.pieces, s = e.animation.current, i = s ? s.plan.anims : /* @__PURE__ */ new Map(), a = s ? s.plan.fadings : /* @__PURE__ */ new Map(), c = e.draggable.current, l = ms(e), u = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
  let d, m, g, y, b, C, P, k, I, L;
  for (m = n.firstChild; m; ) {
    if (d = m.cgKey, Jo(m))
      if (g = r.get(d), b = i.get(d), C = a.get(d), y = m.cgPiece, m.cgDragging && (!c || c.orig !== d) && (m.classList.remove("dragging"), Z(m, o(T(d), t)), m.cgDragging = !1), !C && m.cgFading && (m.cgFading = !1, m.classList.remove("fading")), g) {
        if (b && m.cgAnimating && y === Ce(g)) {
          const E = T(d);
          E[0] += b[2], E[1] += b[3], m.classList.add("anim"), Z(m, o(E, t));
        } else
          m.cgAnimating && (m.cgAnimating = !1, m.classList.remove("anim"), Z(m, o(T(d), t)), e.addPieceZIndex && (m.style.zIndex = it(T(d), t)));
        y === Ce(g) && (!C || !m.cgFading) ? u.add(d) : C && y === Ce(C) ? (m.classList.add("fading"), m.cgFading = !0) : at(p, y, m);
      } else
        at(p, y, m);
    else if (Xo(m)) {
      const E = m.className;
      l.get(d) === E ? f.add(d) : at(v, E, m);
    }
    m = m.nextSibling;
  }
  for (const [E, te] of l)
    if (!f.has(E)) {
      I = v.get(te), L = I && I.pop();
      const J = o(T(E), t);
      if (L)
        L.cgKey = E, Z(L, J);
      else {
        const X = ee("square", te);
        X.cgKey = E, Z(X, J), n.insertBefore(X, n.firstChild);
      }
    }
  for (const [E, te] of r)
    if (b = i.get(E), !u.has(E))
      if (P = p.get(Ce(te)), k = P && P.pop(), k) {
        k.cgKey = E, k.cgFading && (k.classList.remove("fading"), k.cgFading = !1);
        const J = T(E);
        e.addPieceZIndex && (k.style.zIndex = it(J, t)), b && (k.cgAnimating = !0, k.classList.add("anim"), J[0] += b[2], J[1] += b[3]), Z(k, o(J, t));
      } else {
        const J = Ce(te), X = ee("piece", J), Ne = T(E);
        X.cgPiece = J, X.cgKey = E, b && (X.cgAnimating = !0, Ne[0] += b[2], Ne[1] += b[3]), Z(X, o(Ne, t)), e.addPieceZIndex && (X.style.zIndex = it(Ne, t)), n.appendChild(X);
      }
  for (const E of p.values())
    eo(e, E);
  for (const E of v.values())
    eo(e, E);
}
function ps(e) {
  const t = j(e), o = Oe(e.dom.bounds());
  let n = e.dom.elements.board.firstChild;
  for (; n; )
    (Jo(n) && !n.cgAnimating || Xo(n)) && Z(n, o(T(n.cgKey), t)), n = n.nextSibling;
}
function Yt(e) {
  var t, o;
  const n = e.dom.elements.wrap.getBoundingClientRect(), r = e.dom.elements.container, s = n.height / n.width, i = Math.floor(n.width * window.devicePixelRatio / 8) * 8 / window.devicePixelRatio, a = i * s;
  r.style.width = i + "px", r.style.height = a + "px", e.dom.bounds.clear(), (t = e.addDimensionsCssVarsTo) === null || t === void 0 || t.style.setProperty("--cg-width", i + "px"), (o = e.addDimensionsCssVarsTo) === null || o === void 0 || o.style.setProperty("--cg-height", a + "px");
}
const Jo = (e) => e.tagName === "PIECE", Xo = (e) => e.tagName === "SQUARE";
function eo(e, t) {
  for (const o of t)
    e.dom.elements.board.removeChild(o);
}
function it(e, t) {
  const o = e[1];
  return `${t ? 10 - o : 3 + o}`;
}
const Ce = (e) => `${e.color} ${e.role}`;
function ms(e) {
  var t, o, n;
  const r = /* @__PURE__ */ new Map();
  if (e.lastMove && e.highlight.lastMove)
    for (const a of e.lastMove)
      Y(r, a, "last-move");
  if (e.check && e.highlight.check && Y(r, e.check, "check"), e.selected && (Y(r, e.selected, "selected"), e.movable.showDests)) {
    const a = (t = e.movable.dests) === null || t === void 0 ? void 0 : t.get(e.selected);
    if (a)
      for (const l of a)
        Y(r, l, "move-dest" + (e.pieces.has(l) ? " oc" : ""));
    const c = (n = (o = e.premovable.customDests) === null || o === void 0 ? void 0 : o.get(e.selected)) !== null && n !== void 0 ? n : e.premovable.dests;
    if (c)
      for (const l of c)
        Y(r, l, "premove-dest" + (e.pieces.has(l) ? " oc" : ""));
  }
  const s = e.premovable.current;
  if (s)
    for (const a of s)
      Y(r, a, "current-premove");
  else
    e.predroppable.current && Y(r, e.predroppable.current.key, "current-premove");
  const i = e.exploding;
  if (i)
    for (const a of i.keys)
      Y(r, a, "exploding" + i.stage);
  return e.highlight.custom && e.highlight.custom.forEach((a, c) => {
    Y(r, c, a);
  }), r;
}
function Y(e, t, o) {
  const n = e.get(t);
  n ? e.set(t, `${n} ${o}`) : e.set(t, o);
}
function at(e, t, o) {
  const n = e.get(t);
  n ? n.push(o) : e.set(t, [o]);
}
function gs(e, t, o) {
  const n = /* @__PURE__ */ new Map(), r = [];
  for (const a of e)
    n.set(a.hash, !1);
  let s = t.firstElementChild, i;
  for (; s; )
    i = s.getAttribute("cgHash"), n.has(i) ? n.set(i, !0) : r.push(s), s = s.nextElementSibling;
  for (const a of r)
    t.removeChild(a);
  for (const a of e)
    n.get(a.hash) || t.appendChild(o(a));
}
function bs(e, t) {
  const o = e.drawable.autoShapes.filter((n) => n.piece).map((n) => ({
    shape: n,
    hash: ws(n),
    current: !1
  }));
  gs(o, t, (n) => ys(e, n, e.dom.bounds()));
}
function vs(e) {
  var t;
  const o = j(e), n = Oe(e.dom.bounds());
  let r = (t = e.dom.elements.autoPieces) === null || t === void 0 ? void 0 : t.firstChild;
  for (; r; )
    Co(r, n(T(r.cgKey), o), r.cgScale), r = r.nextSibling;
}
function ys(e, { shape: t, hash: o }, n) {
  var r, s, i;
  const a = t.orig, c = (r = t.piece) === null || r === void 0 ? void 0 : r.role, l = (s = t.piece) === null || s === void 0 ? void 0 : s.color, u = (i = t.piece) === null || i === void 0 ? void 0 : i.scale, f = ee("piece", `${c} ${l}`);
  return f.setAttribute("cgHash", o), f.cgKey = a, f.cgScale = u, Co(f, Oe(n)(T(a), j(e)), u), f;
}
const ws = (e) => {
  var t, o, n;
  return [e.orig, (t = e.piece) === null || t === void 0 ? void 0 : t.role, (o = e.piece) === null || o === void 0 ? void 0 : o.color, (n = e.piece) === null || n === void 0 ? void 0 : n.scale].join(",");
};
function _s(e, t) {
  const o = Vr();
  Uo(o, {});
  function n() {
    const r = "dom" in o ? o.dom.unbind : void 0, s = cs(e, o), i = ir(() => s.board.getBoundingClientRect()), a = (u) => {
      fs(l), s.autoPieces && bs(l, s.autoPieces), !u && s.svg && zr(l, s.svg, s.customSvg);
    }, c = () => {
      Yt(l), ps(l), s.autoPieces && vs(l);
    }, l = o;
    return l.dom = {
      elements: s,
      bounds: i,
      redraw: Ss(a),
      redrawNow: a,
      unbind: r
    }, l.drawable.prevSvgHash = "", Yt(l), a(!1), us(l, c), r || (l.dom.unbind = ds(l, c)), l.events.insert && l.events.insert(s), l;
  }
  return Hr(n(), n);
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
  constructor(t, o, n, r) {
    A(this, "game");
    A(this, "board");
    A(this, "boardState");
    A(this, "props");
    A(this, "emit");
    this.boardState = o, this.props = n, this.emit = r, this.game = new Xn(), this.board = _s(t), this.resetBoard();
  }
  //
  //  PRIVATE INTERAL METHODS:
  //
  /**
   * syncs chess.js state with the board
   * @private
   */
  updateGameState({ updateFen: t = !0 } = {}) {
    this.boardState.historyViewerState.isEnabled || (t && this.board.set({ fen: this.game.fen() }), this.board.state.turnColor = this.getTurnColor(), this.board.state.movable.free ? (this.board.state.movable.color = "both", this.board.state.movable.dests = /* @__PURE__ */ new Map()) : (this.board.state.movable.color = this.props.playerColor || this.board.state.turnColor, this.board.state.movable.dests = Vt(this.game)), this.displayInCheck(this.game.inCheck(), this.board.state.turnColor), this.boardState.showThreats && this.drawMoves()), this.emitEvents();
  }
  /**
   * Updates the board state to display whether the king of given color is in check
   * @private
   */
  displayInCheck(t, o) {
    if (t) {
      for (const [n, r] of this.board.state.pieces)
        if (r.role === "king" && r.color === o) {
          this.board.state.check = n;
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
  async changeTurn(t, o, n) {
    let r;
    Yn(o, this.game.get(t)) && (r = await new Promise((s) => {
      this.boardState.promotionDialogState = {
        isEnabled: !0,
        color: this.getTurnColor(),
        callback: s
      };
    })), this.move({
      from: t,
      to: o,
      promotion: r
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
      const o = this.getLastMove();
      this.board.state.lastMove = o ? [o == null ? void 0 : o.from, o == null ? void 0 : o.to] : void 0;
    }
  }
  /**
   * returns the current material count for white, black and the diff.
   * If diff > 0 white is leading, else black.
   */
  getMaterialCount() {
    const t = this.board.state.pieces, o = {
      pawn: 1,
      knight: 3,
      bishop: 3,
      rook: 5,
      queen: 9,
      king: 0
    }, n = {
      materialWhite: 0,
      materialBlack: 0,
      materialDiff: 0
    };
    for (const r of t)
      r[1].color === "white" ? n.materialWhite += o[r[1].role] : n.materialBlack += o[r[1].role];
    return n.materialDiff = n.materialWhite - n.materialBlack, n;
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
    for (const { color: o, captured: n } of this.getHistory(!0))
      n && t[Ie(o)].push(n);
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
    this.boardState.showThreats = !0, this.board.setShapes(Zn(this.game.moves({ verbose: !0 })));
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
  drawMove(t, o, n) {
    this.board.setShapes([
      {
        orig: t,
        dest: o,
        brush: n
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
      const o = this.game.history({ verbose: !0 }).map((n) => n.lan).join(",");
      return ((t = (await (await fetch(
        `https://explorer.lichess.ovh/masters?play=${o}`
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
    let o;
    try {
      o = this.game.move(t);
    } catch {
      return typeof t == "object" && this.board.state.movable.free && (this.board.move(t.from, t.to), this.updateGameState({ updateFen: !1 })), !1;
    }
    return this.emit("move", o), o != null && o.promotion && this.emit("promotion", {
      color: Ie(o.color),
      promotedTo: o.promotion.toUpperCase(),
      sanMove: o.san
    }), this.boardState.historyViewerState.isEnabled || (this.board.move(o.from, o.to), (o.flags === "e" || o != null && o.promotion) && setTimeout(
      () => this.board.set({ fen: o.after }),
      this.board.state.animation.current ? this.board.state.animation.duration : 0
    ), this.updateGameState({ updateFen: !1 }), On(this.board.playPremove)), !0;
  }
  /**
   * returns the current turn color
   * @returns 'white' or 'black'
   */
  getTurnColor() {
    return Ie(this.game.turn());
  }
  /**
   * returns all possible moves for the current position
   *
   */
  getPossibleMoves() {
    return Vt(this.game);
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
  putPiece(t, o) {
    if (this.board.state.movable.free) {
      const n = this.board.state.pieces;
      return n.set(o, {
        color: t.color === "w" ? "white" : "black",
        role: er[t.type]
      }), this.board.setPieces(n), !0;
    } else {
      const n = this.game.put(t, o);
      return n && this.updateGameState(), n;
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
    const o = this.getLastMove();
    o && this.board.set({ lastMove: [o.from, o.to] });
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
  setConfig(t, o = !1) {
    var s;
    if (o && (t = wo(nr, t), this.board.state.selected = void 0), ((s = t.movable) == null ? void 0 : s.events) && "after" in t.movable.events) {
      const i = t.movable.events.after;
      t.movable.events.after = i ? async (...a) => {
        await this.changeTurn(...a), i(...a);
      } : this.changeTurn.bind(this);
    }
    const { fen: n, ...r } = t;
    this.board.set(r), n && this.setPosition(n), this.board.redrawAll();
  }
  /**
   * Views the position at the given ply number in the game's history.
   *
   * @param ply - the ply number of the position to be viewed, where 0 is the initial position, 1 is
   * after white's first move, 2 is after black's first move and so on.
   */
  viewHistory(t) {
    const o = this.getHistory(!0);
    if (t < 0 || t > o.length)
      return;
    const n = this.board.state.animation.enabled && (this.boardState.historyViewerState.isEnabled && Math.abs(this.boardState.historyViewerState.plyViewing - t) !== 1 || !this.boardState.historyViewerState.isEnabled && t !== o.length - 1);
    if (n && this.board.set({ animation: { enabled: !1 } }), t < o.length)
      this.boardState.historyViewerState.isEnabled ? this.boardState.historyViewerState.plyViewing = t : this.boardState.historyViewerState = {
        isEnabled: !0,
        plyViewing: t,
        viewOnly: this.board.state.viewOnly
      }, this.board.set({
        fen: o[t].before,
        viewOnly: !0,
        lastMove: t > 0 ? [o[t - 1].from, o[t - 1].to] : void 0,
        selected: void 0
      }), this.displayInCheck(
        t > 0 ? "+#".includes(o[t - 1].san.at(-1)) : !1,
        Ie(o[t].color)
      ), this.board.cancelPremove();
    else if (this.boardState.historyViewerState.isEnabled) {
      const r = o.at(-1);
      this.board.set({
        fen: r.after,
        viewOnly: this.boardState.historyViewerState.viewOnly,
        lastMove: [r.from, r.to]
      }), this.boardState.historyViewerState = { isEnabled: !1 }, this.updateGameState({ updateFen: !1 });
    }
    n && this.board.set({ animation: { enabled: !0 } });
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
const Es = { class: "main-board" }, ks = /* @__PURE__ */ go({
  __name: "TheChessboard",
  props: {
    boardConfig: { default: () => ({}) },
    playerColor: {},
    reactiveConfig: { type: Boolean, default: !1 }
  },
  emits: ["boardCreated", "check", "checkmate", "stalemate", "draw", "promotion", "move"],
  setup(e, { emit: t }) {
    const o = e, n = kn(null), r = Ut({
      showThreats: !1,
      promotionDialogState: { isEnabled: !1 },
      historyViewerState: { isEnabled: !1 }
    });
    return Tn(() => {
      if (n.value == null)
        throw new Error("vue3-chessboard: Failed to mount board.");
      const s = new Cs(n.value, r, o, t);
      if (t("boardCreated", s), o.reactiveConfig) {
        let i = $e(o.boardConfig);
        Pn(Ut(o.boardConfig), (a) => {
          s.setConfig(_o(i, a)), i = $e(a);
        });
      }
    }), (s, i) => (z(), ve("section", {
      class: Ue(["main-wrap", {
        disabledBoard: r.promotionDialogState.isEnabled,
        viewingHistory: r.historyViewerState.isEnabled
      }])
    }, [
      R("div", Es, [
        r.promotionDialogState.isEnabled ? (z(), be(In, {
          key: 0,
          state: r.promotionDialogState,
          onPromotionSelected: i[0] || (i[0] = (a) => r.promotionDialogState = { isEnabled: !1 })
        }, null, 8, ["state"])) : bo("", !0),
        R("div", {
          ref_key: "boardElement",
          ref: n
        }, null, 512)
      ])
    ], 2));
  }
}), Qe = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, r] of t)
    o[n] = r;
  return o;
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
function Ps(e, t, o, n, r, s) {
  return z(), ve("div", null, vo(s.formattedTime), 1);
}
const As = /* @__PURE__ */ Qe(Ts, [["render", Ps], ["__scopeId", "data-v-3770351d"]]);
class Rs {
  constructor(t, o = "") {
    A(this, "stockfish");
    A(this, "boardApi");
    A(this, "bestMove");
    A(this, "engineName");
    this.boardApi = t;
    const n = typeof WebAssembly == "object" && WebAssembly.validate(
      Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0)
    );
    this.stockfish = new Worker(n ? `${o}/stockfish.wasm.js` : `${o}/stockfish.js`), this.setupListeners(), this.stockfish.postMessage("uci");
  }
  setupListeners() {
    this.stockfish.addEventListener("message", (t) => this.handleEngineStdout(t)), this.stockfish.addEventListener("error", (t) => console.error(t)), this.stockfish.addEventListener("messageerror", (t) => console.error(t));
  }
  handleEngineStdout(t) {
    const o = t.data.split(" ");
    if (o[0] === "uciok") {
      this.setOption("UCI_AnalyseMode", "true"), this.setOption("Analysis Contempt", "Off"), this.stockfish.postMessage("ucinewgame"), this.stockfish.postMessage("isready");
      return;
    }
    if (o[0] === "readyok") {
      this.stockfish.postMessage("go movetime 1200");
      return;
    }
    o[0] === "bestmove" && o[1] && o[1] !== this.bestMove && (this.bestMove = o[1], this.boardApi.getTurnColor() === "black" && this.boardApi.move({
      from: this.bestMove.slice(0, 2),
      to: this.bestMove.slice(2, 4)
    }));
  }
  setOption(t, o) {
    this.stockfish.postMessage(`setoption name ${t} value ${o}`);
  }
  sendPosition(t) {
    this.stockfish.postMessage(`position startpos moves ${t}`);
    const o = this.boardApi.getTurnColor() === "black" ? 7500 : 1200;
    this.stockfish.postMessage(`go movetime ${o}`);
  }
}
const Os = {
  components: {
    TheChessboard: ks,
    Timer: As
  },
  props: {
    handleMove: Function
  },
  inject: ["playerProfiles", "baseUrl"],
  data() {
    return {
      engine: null,
      showSupportLine: !1,
      inTimeout: !1,
      currentPlayer: "white",
      boardAPI: null,
      boardConfig: {}
    };
  },
  created() {
    this.boardConfig = {
      events: {
        select: async () => {
          var e, t;
          (e = this.engine) != null && e.bestMove && this.currentPlayer === "white" && this.showSupportLine && ((t = this.boardAPI) == null || t.drawMove(
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
      blockTouchScroll: !0
    };
  },
  methods: {
    handleBoardCreated(e) {
      this.boardAPI = e, this.engine = new Rs(
        e,
        this.baseUrl || window.location.origin
      );
    },
    handleTimeUp(e) {
      console.log(`${e} time is up!`);
    },
    callTimeout(e) {
      this.$refs.whiteTimer.pauseTimer(), this.$refs.blackTimer.pauseTimer(), this.$refs.timeoutTimer.startTimer(), this.inTimeout = !0, this.boardConfig.viewOnly = !0;
    },
    handleTimeoutOver() {
      this.currentPlayer == "white" ? this.$refs.whiteTimer.resumeTimer() : this.$refs.blackTimer.resumeTimer(), this.inTimeout = !1, this.boardConfig.viewOnly = !1;
    },
    startBlackTimer() {
      this.currentPlayer = "black", this.$refs.blackTimer.resumeTimer(), this.$refs.whiteTimer.pauseTimer();
    },
    startWhiteTimer() {
      this.currentPlayer = "white", this.$refs.whiteTimer.resumeTimer(), this.$refs.blackTimer.pauseTimer();
    }
  }
}, Ms = { class: "game-loadout game-loadout-mobile" }, xs = { class: "profile" }, Ns = { class: "avatar" }, Ls = ["src"], Bs = ["innerHTML"], Is = { class: "profile" }, Ds = { class: "avatar" }, qs = ["src"], Fs = ["innerHTML"], Us = { class: "chessboard-wrap" }, js = { class: "text" };
function $s(e, t, o, n, r, s) {
  const i = je("TheChessboard"), a = je("Timer");
  return z(), ve("div", null, [
    R("div", Ms, [
      R("div", {
        id: "player2-profile",
        class: Ue(["pprofile", r.currentPlayer === "black" ? "in-move" : ""])
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
      t[5] || (t[5] = R("div", { id: "game-field" }, null, -1)),
      R("div", {
        id: "player1-profile",
        class: Ue(["pprofile", r.currentPlayer === "white" ? "in-move" : ""])
      }, [
        R("div", Is, [
          R("div", Ds, [
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
    (z(), be(tt, {
      to: "#game-field",
      defer: ""
    }, [
      R("div", Us, [
        Le(i, {
          ref: "chessboard",
          onBoardCreated: s.handleBoardCreated,
          onMove: o.handleMove,
          "board-config": r.boardConfig,
          "player-color": "white"
        }, null, 8, ["onBoardCreated", "onMove", "board-config"]),
        R("div", {
          class: "chessboard-overlay",
          style: Mn(`display: ${r.inTimeout ? "block" : "none"}`)
        }, [
          R("div", js, [
            jt(vo(r.currentPlayer) + " call timeout ", 1),
            Le(a, {
              ref: "timeoutTimer",
              initialTime: 60,
              onTimeUp: t[0] || (t[0] = (c) => s.handleTimeoutOver())
            }, null, 512)
          ])
        ], 4)
      ])
    ])),
    (z(), be(tt, {
      to: "#player1-profile",
      defer: ""
    }, [
      Le(a, {
        ref: "whiteTimer",
        initialTime: 600,
        onTimeUp: t[1] || (t[1] = (c) => s.handleTimeUp("white"))
      }, null, 512),
      r.currentPlayer == "white" ? (z(), ve("button", {
        key: 0,
        onClick: t[2] || (t[2] = (c) => s.callTimeout(r.currentPlayer))
      }, " Call Timeout ")) : bo("", !0),
      R("label", null, [
        xn(R("input", {
          type: "checkbox",
          "onUpdate:modelValue": t[3] || (t[3] = (c) => r.showSupportLine = c)
        }, null, 512), [
          [Nn, r.showSupportLine]
        ]),
        t[6] || (t[6] = jt(" Show Support Line "))
      ])
    ])),
    (z(), be(tt, {
      to: "#player2-profile",
      defer: ""
    }, [
      Le(a, {
        ref: "blackTimer",
        initialTime: 600,
        onTimeUp: t[4] || (t[4] = (c) => s.handleTimeUp("black"))
      }, null, 512)
    ]))
  ]);
}
const We = /* @__PURE__ */ Qe(Os, [["render", $s], ["__scopeId", "data-v-64f502be"]]);
function Zo(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ks } = Object.prototype, { getPrototypeOf: Bt } = Object, Je = /* @__PURE__ */ ((e) => (t) => {
  const o = Ks.call(t);
  return e[o] || (e[o] = o.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Q = (e) => (e = e.toLowerCase(), (t) => Je(t) === e), Xe = (e) => (t) => typeof t === e, { isArray: ye } = Array, Re = Xe("undefined");
function Hs(e) {
  return e !== null && !Re(e) && e.constructor !== null && !Re(e.constructor) && H(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Yo = Q("ArrayBuffer");
function Vs(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Yo(e.buffer), t;
}
const Ws = Xe("string"), H = Xe("function"), en = Xe("number"), Ze = (e) => e !== null && typeof e == "object", zs = (e) => e === !0 || e === !1, qe = (e) => {
  if (Je(e) !== "object")
    return !1;
  const t = Bt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Gs = Q("Date"), Qs = Q("File"), Js = Q("Blob"), Xs = Q("FileList"), Zs = (e) => Ze(e) && H(e.pipe), Ys = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || H(e.append) && ((t = Je(e)) === "formdata" || // detect form-data instance
  t === "object" && H(e.toString) && e.toString() === "[object FormData]"));
}, ei = Q("URLSearchParams"), [ti, oi, ni, ri] = ["ReadableStream", "Request", "Response", "Headers"].map(Q), si = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Me(e, t, { allOwnKeys: o = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, r;
  if (typeof e != "object" && (e = [e]), ye(e))
    for (n = 0, r = e.length; n < r; n++)
      t.call(null, e[n], n, e);
  else {
    const s = o ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (n = 0; n < i; n++)
      a = s[n], t.call(null, e[a], a, e);
  }
}
function tn(e, t) {
  t = t.toLowerCase();
  const o = Object.keys(e);
  let n = o.length, r;
  for (; n-- > 0; )
    if (r = o[n], t === r.toLowerCase())
      return r;
  return null;
}
const ue = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, on = (e) => !Re(e) && e !== ue;
function bt() {
  const { caseless: e } = on(this) && this || {}, t = {}, o = (n, r) => {
    const s = e && tn(t, r) || r;
    qe(t[s]) && qe(n) ? t[s] = bt(t[s], n) : qe(n) ? t[s] = bt({}, n) : ye(n) ? t[s] = n.slice() : t[s] = n;
  };
  for (let n = 0, r = arguments.length; n < r; n++)
    arguments[n] && Me(arguments[n], o);
  return t;
}
const ii = (e, t, o, { allOwnKeys: n } = {}) => (Me(t, (r, s) => {
  o && H(r) ? e[s] = Zo(r, o) : e[s] = r;
}, { allOwnKeys: n }), e), ai = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ci = (e, t, o, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), o && Object.assign(e.prototype, o);
}, li = (e, t, o, n) => {
  let r, s, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), s = r.length; s-- > 0; )
      i = r[s], (!n || n(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = o !== !1 && Bt(e);
  } while (e && (!o || o(e, t)) && e !== Object.prototype);
  return t;
}, ui = (e, t, o) => {
  e = String(e), (o === void 0 || o > e.length) && (o = e.length), o -= t.length;
  const n = e.indexOf(t, o);
  return n !== -1 && n === o;
}, di = (e) => {
  if (!e) return null;
  if (ye(e)) return e;
  let t = e.length;
  if (!en(t)) return null;
  const o = new Array(t);
  for (; t-- > 0; )
    o[t] = e[t];
  return o;
}, hi = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Bt(Uint8Array)), fi = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let r;
  for (; (r = n.next()) && !r.done; ) {
    const s = r.value;
    t.call(e, s[0], s[1]);
  }
}, pi = (e, t) => {
  let o;
  const n = [];
  for (; (o = e.exec(t)) !== null; )
    n.push(o);
  return n;
}, mi = Q("HTMLFormElement"), gi = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(o, n, r) {
    return n.toUpperCase() + r;
  }
), to = (({ hasOwnProperty: e }) => (t, o) => e.call(t, o))(Object.prototype), bi = Q("RegExp"), nn = (e, t) => {
  const o = Object.getOwnPropertyDescriptors(e), n = {};
  Me(o, (r, s) => {
    let i;
    (i = t(r, s, e)) !== !1 && (n[s] = i || r);
  }), Object.defineProperties(e, n);
}, vi = (e) => {
  nn(e, (t, o) => {
    if (H(e) && ["arguments", "caller", "callee"].indexOf(o) !== -1)
      return !1;
    const n = e[o];
    if (H(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + o + "'");
      });
    }
  });
}, yi = (e, t) => {
  const o = {}, n = (r) => {
    r.forEach((s) => {
      o[s] = !0;
    });
  };
  return ye(e) ? n(e) : n(String(e).split(t)), o;
}, wi = () => {
}, _i = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, ct = "abcdefghijklmnopqrstuvwxyz", oo = "0123456789", rn = {
  DIGIT: oo,
  ALPHA: ct,
  ALPHA_DIGIT: ct + ct.toUpperCase() + oo
}, Si = (e = 16, t = rn.ALPHA_DIGIT) => {
  let o = "";
  const { length: n } = t;
  for (; e--; )
    o += t[Math.random() * n | 0];
  return o;
};
function Ci(e) {
  return !!(e && H(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Ei = (e) => {
  const t = new Array(10), o = (n, r) => {
    if (Ze(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[r] = n;
        const s = ye(n) ? [] : {};
        return Me(n, (i, a) => {
          const c = o(i, r + 1);
          !Re(c) && (s[a] = c);
        }), t[r] = void 0, s;
      }
    }
    return n;
  };
  return o(e, 0);
}, ki = Q("AsyncFunction"), Ti = (e) => e && (Ze(e) || H(e)) && H(e.then) && H(e.catch), sn = ((e, t) => e ? setImmediate : t ? ((o, n) => (ue.addEventListener("message", ({ source: r, data: s }) => {
  r === ue && s === o && n.length && n.shift()();
}, !1), (r) => {
  n.push(r), ue.postMessage(o, "*");
}))(`axios@${Math.random()}`, []) : (o) => setTimeout(o))(
  typeof setImmediate == "function",
  H(ue.postMessage)
), Pi = typeof queueMicrotask < "u" ? queueMicrotask.bind(ue) : typeof process < "u" && process.nextTick || sn, h = {
  isArray: ye,
  isArrayBuffer: Yo,
  isBuffer: Hs,
  isFormData: Ys,
  isArrayBufferView: Vs,
  isString: Ws,
  isNumber: en,
  isBoolean: zs,
  isObject: Ze,
  isPlainObject: qe,
  isReadableStream: ti,
  isRequest: oi,
  isResponse: ni,
  isHeaders: ri,
  isUndefined: Re,
  isDate: Gs,
  isFile: Qs,
  isBlob: Js,
  isRegExp: bi,
  isFunction: H,
  isStream: Zs,
  isURLSearchParams: ei,
  isTypedArray: hi,
  isFileList: Xs,
  forEach: Me,
  merge: bt,
  extend: ii,
  trim: si,
  stripBOM: ai,
  inherits: ci,
  toFlatObject: li,
  kindOf: Je,
  kindOfTest: Q,
  endsWith: ui,
  toArray: di,
  forEachEntry: fi,
  matchAll: pi,
  isHTMLForm: mi,
  hasOwnProperty: to,
  hasOwnProp: to,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: nn,
  freezeMethods: vi,
  toObjectSet: yi,
  toCamelCase: gi,
  noop: wi,
  toFiniteNumber: _i,
  findKey: tn,
  global: ue,
  isContextDefined: on,
  ALPHABET: rn,
  generateString: Si,
  isSpecCompliantForm: Ci,
  toJSONObject: Ei,
  isAsyncFn: ki,
  isThenable: Ti,
  setImmediate: sn,
  asap: Pi
};
function S(e, t, o, n, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), o && (this.config = o), n && (this.request = n), r && (this.response = r, this.status = r.status ? r.status : null);
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
const an = S.prototype, cn = {};
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
  cn[e] = { value: e };
});
Object.defineProperties(S, cn);
Object.defineProperty(an, "isAxiosError", { value: !0 });
S.from = (e, t, o, n, r, s) => {
  const i = Object.create(an);
  return h.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), S.call(i, e.message, t, o, n, r), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const Ai = null;
function vt(e) {
  return h.isPlainObject(e) || h.isArray(e);
}
function ln(e) {
  return h.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function no(e, t, o) {
  return e ? e.concat(t).map(function(r, s) {
    return r = ln(r), !o && s ? "[" + r + "]" : r;
  }).join(o ? "." : "") : t;
}
function Ri(e) {
  return h.isArray(e) && !e.some(vt);
}
const Oi = h.toFlatObject(h, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ye(e, t, o) {
  if (!h.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), o = h.toFlatObject(o, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, g) {
    return !h.isUndefined(g[m]);
  });
  const n = o.metaTokens, r = o.visitor || u, s = o.dots, i = o.indexes, c = (o.Blob || typeof Blob < "u" && Blob) && h.isSpecCompliantForm(t);
  if (!h.isFunction(r))
    throw new TypeError("visitor must be a function");
  function l(d) {
    if (d === null) return "";
    if (h.isDate(d))
      return d.toISOString();
    if (!c && h.isBlob(d))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return h.isArrayBuffer(d) || h.isTypedArray(d) ? c && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function u(d, m, g) {
    let y = d;
    if (d && !g && typeof d == "object") {
      if (h.endsWith(m, "{}"))
        m = n ? m : m.slice(0, -2), d = JSON.stringify(d);
      else if (h.isArray(d) && Ri(d) || (h.isFileList(d) || h.endsWith(m, "[]")) && (y = h.toArray(d)))
        return m = ln(m), y.forEach(function(C, P) {
          !(h.isUndefined(C) || C === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? no([m], P, s) : i === null ? m : m + "[]",
            l(C)
          );
        }), !1;
    }
    return vt(d) ? !0 : (t.append(no(g, m, s), l(d)), !1);
  }
  const f = [], p = Object.assign(Oi, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: vt
  });
  function v(d, m) {
    if (!h.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(d), h.forEach(d, function(y, b) {
        (!(h.isUndefined(y) || y === null) && r.call(
          t,
          y,
          h.isString(b) ? b.trim() : b,
          m,
          p
        )) === !0 && v(y, m ? m.concat(b) : [b]);
      }), f.pop();
    }
  }
  if (!h.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
}
function ro(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function It(e, t) {
  this._pairs = [], e && Ye(e, this, t);
}
const un = It.prototype;
un.append = function(t, o) {
  this._pairs.push([t, o]);
};
un.toString = function(t) {
  const o = t ? function(n) {
    return t.call(this, n, ro);
  } : ro;
  return this._pairs.map(function(r) {
    return o(r[0]) + "=" + o(r[1]);
  }, "").join("&");
};
function Mi(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function dn(e, t, o) {
  if (!t)
    return e;
  const n = o && o.encode || Mi, r = o && o.serialize;
  let s;
  if (r ? s = r(t, o) : s = h.isURLSearchParams(t) ? t.toString() : new It(t, o).toString(n), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class so {
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
  use(t, o, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: o,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
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
    h.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const hn = {
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
}, Dt = typeof window < "u" && typeof document < "u", yt = typeof navigator == "object" && navigator || void 0, Ii = Dt && (!yt || ["ReactNative", "NativeScript", "NS"].indexOf(yt.product) < 0), Di = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", qi = Dt && window.location.href || "http://localhost", Fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Dt,
  hasStandardBrowserEnv: Ii,
  hasStandardBrowserWebWorkerEnv: Di,
  navigator: yt,
  origin: qi
}, Symbol.toStringTag, { value: "Module" })), q = {
  ...Fi,
  ...Bi
};
function Ui(e, t) {
  return Ye(e, new q.classes.URLSearchParams(), Object.assign({
    visitor: function(o, n, r, s) {
      return q.isNode && h.isBuffer(o) ? (this.append(n, o.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function ji(e) {
  return h.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function $i(e) {
  const t = {}, o = Object.keys(e);
  let n;
  const r = o.length;
  let s;
  for (n = 0; n < r; n++)
    s = o[n], t[s] = e[s];
  return t;
}
function fn(e) {
  function t(o, n, r, s) {
    let i = o[s++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), c = s >= o.length;
    return i = !i && h.isArray(r) ? r.length : i, c ? (h.hasOwnProp(r, i) ? r[i] = [r[i], n] : r[i] = n, !a) : ((!r[i] || !h.isObject(r[i])) && (r[i] = []), t(o, n, r[i], s) && h.isArray(r[i]) && (r[i] = $i(r[i])), !a);
  }
  if (h.isFormData(e) && h.isFunction(e.entries)) {
    const o = {};
    return h.forEachEntry(e, (n, r) => {
      t(ji(n), r, o, 0);
    }), o;
  }
  return null;
}
function Ki(e, t, o) {
  if (h.isString(e))
    try {
      return (t || JSON.parse)(e), h.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (0, JSON.stringify)(e);
}
const xe = {
  transitional: hn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, o) {
    const n = o.getContentType() || "", r = n.indexOf("application/json") > -1, s = h.isObject(t);
    if (s && h.isHTMLForm(t) && (t = new FormData(t)), h.isFormData(t))
      return r ? JSON.stringify(fn(t)) : t;
    if (h.isArrayBuffer(t) || h.isBuffer(t) || h.isStream(t) || h.isFile(t) || h.isBlob(t) || h.isReadableStream(t))
      return t;
    if (h.isArrayBufferView(t))
      return t.buffer;
    if (h.isURLSearchParams(t))
      return o.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Ui(t, this.formSerializer).toString();
      if ((a = h.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Ye(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return s || r ? (o.setContentType("application/json", !1), Ki(t)) : t;
  }],
  transformResponse: [function(t) {
    const o = this.transitional || xe.transitional, n = o && o.forcedJSONParsing, r = this.responseType === "json";
    if (h.isResponse(t) || h.isReadableStream(t))
      return t;
    if (t && h.isString(t) && (n && !this.responseType || r)) {
      const i = !(o && o.silentJSONParsing) && r;
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
    FormData: q.classes.FormData,
    Blob: q.classes.Blob
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
  let o, n, r;
  return e && e.split(`
`).forEach(function(i) {
    r = i.indexOf(":"), o = i.substring(0, r).trim().toLowerCase(), n = i.substring(r + 1).trim(), !(!o || t[o] && Hi[o]) && (o === "set-cookie" ? t[o] ? t[o].push(n) : t[o] = [n] : t[o] = t[o] ? t[o] + ", " + n : n);
  }), t;
}, io = Symbol("internals");
function Ee(e) {
  return e && String(e).trim().toLowerCase();
}
function Fe(e) {
  return e === !1 || e == null ? e : h.isArray(e) ? e.map(Fe) : String(e);
}
function Wi(e) {
  const t = /* @__PURE__ */ Object.create(null), o = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = o.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const zi = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function lt(e, t, o, n, r) {
  if (h.isFunction(n))
    return n.call(this, t, o);
  if (r && (t = o), !!h.isString(t)) {
    if (h.isString(n))
      return t.indexOf(n) !== -1;
    if (h.isRegExp(n))
      return n.test(t);
  }
}
function Gi(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, o, n) => o.toUpperCase() + n);
}
function Qi(e, t) {
  const o = h.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + o, {
      value: function(r, s, i) {
        return this[n].call(this, t, r, s, i);
      },
      configurable: !0
    });
  });
}
class F {
  constructor(t) {
    t && this.set(t);
  }
  set(t, o, n) {
    const r = this;
    function s(a, c, l) {
      const u = Ee(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = h.findKey(r, u);
      (!f || r[f] === void 0 || l === !0 || l === void 0 && r[f] !== !1) && (r[f || c] = Fe(a));
    }
    const i = (a, c) => h.forEach(a, (l, u) => s(l, u, c));
    if (h.isPlainObject(t) || t instanceof this.constructor)
      i(t, o);
    else if (h.isString(t) && (t = t.trim()) && !zi(t))
      i(Vi(t), o);
    else if (h.isHeaders(t))
      for (const [a, c] of t.entries())
        s(c, a, n);
    else
      t != null && s(o, t, n);
    return this;
  }
  get(t, o) {
    if (t = Ee(t), t) {
      const n = h.findKey(this, t);
      if (n) {
        const r = this[n];
        if (!o)
          return r;
        if (o === !0)
          return Wi(r);
        if (h.isFunction(o))
          return o.call(this, r, n);
        if (h.isRegExp(o))
          return o.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, o) {
    if (t = Ee(t), t) {
      const n = h.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!o || lt(this, this[n], n, o)));
    }
    return !1;
  }
  delete(t, o) {
    const n = this;
    let r = !1;
    function s(i) {
      if (i = Ee(i), i) {
        const a = h.findKey(n, i);
        a && (!o || lt(n, n[a], a, o)) && (delete n[a], r = !0);
      }
    }
    return h.isArray(t) ? t.forEach(s) : s(t), r;
  }
  clear(t) {
    const o = Object.keys(this);
    let n = o.length, r = !1;
    for (; n--; ) {
      const s = o[n];
      (!t || lt(this, this[s], s, t, !0)) && (delete this[s], r = !0);
    }
    return r;
  }
  normalize(t) {
    const o = this, n = {};
    return h.forEach(this, (r, s) => {
      const i = h.findKey(n, s);
      if (i) {
        o[i] = Fe(r), delete o[s];
        return;
      }
      const a = t ? Gi(s) : String(s).trim();
      a !== s && delete o[s], o[a] = Fe(r), n[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const o = /* @__PURE__ */ Object.create(null);
    return h.forEach(this, (n, r) => {
      n != null && n !== !1 && (o[r] = t && h.isArray(n) ? n.join(", ") : n);
    }), o;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, o]) => t + ": " + o).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...o) {
    const n = new this(t);
    return o.forEach((r) => n.set(r)), n;
  }
  static accessor(t) {
    const n = (this[io] = this[io] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function s(i) {
      const a = Ee(i);
      n[a] || (Qi(r, i), n[a] = !0);
    }
    return h.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
F.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
h.reduceDescriptors(F.prototype, ({ value: e }, t) => {
  let o = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[o] = n;
    }
  };
});
h.freezeMethods(F);
function ut(e, t) {
  const o = this || xe, n = t || o, r = F.from(n.headers);
  let s = n.data;
  return h.forEach(e, function(a) {
    s = a.call(o, s, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), s;
}
function pn(e) {
  return !!(e && e.__CANCEL__);
}
function we(e, t, o) {
  S.call(this, e ?? "canceled", S.ERR_CANCELED, t, o), this.name = "CanceledError";
}
h.inherits(we, S, {
  __CANCEL__: !0
});
function mn(e, t, o) {
  const n = o.config.validateStatus;
  !o.status || !n || n(o.status) ? e(o) : t(new S(
    "Request failed with status code " + o.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4],
    o.config,
    o.request,
    o
  ));
}
function Ji(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Xi(e, t) {
  e = e || 10;
  const o = new Array(e), n = new Array(e);
  let r = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = n[s];
    i || (i = l), o[r] = c, n[r] = l;
    let f = s, p = 0;
    for (; f !== r; )
      p += o[f++], f = f % e;
    if (r = (r + 1) % e, r === s && (s = (s + 1) % e), l - i < t)
      return;
    const v = u && l - u;
    return v ? Math.round(p * 1e3 / v) : void 0;
  };
}
function Zi(e, t) {
  let o = 0, n = 1e3 / t, r, s;
  const i = (l, u = Date.now()) => {
    o = u, r = null, s && (clearTimeout(s), s = null), e.apply(null, l);
  };
  return [(...l) => {
    const u = Date.now(), f = u - o;
    f >= n ? i(l, u) : (r = l, s || (s = setTimeout(() => {
      s = null, i(r);
    }, n - f)));
  }, () => r && i(r)];
}
const ze = (e, t, o = 3) => {
  let n = 0;
  const r = Xi(50, 250);
  return Zi((s) => {
    const i = s.loaded, a = s.lengthComputable ? s.total : void 0, c = i - n, l = r(c), u = i <= a;
    n = i;
    const f = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && a && u ? (a - i) / l : void 0,
      event: s,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, o);
}, ao = (e, t) => {
  const o = e != null;
  return [(n) => t[0]({
    lengthComputable: o,
    total: e,
    loaded: n
  }), t[1]];
}, co = (e) => (...t) => h.asap(() => e(...t)), Yi = q.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = q.navigator && /(msie|trident)/i.test(q.navigator.userAgent), o = document.createElement("a");
    let n;
    function r(s) {
      let i = s;
      return t && (o.setAttribute("href", i), i = o.href), o.setAttribute("href", i), {
        href: o.href,
        protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
        host: o.host,
        search: o.search ? o.search.replace(/^\?/, "") : "",
        hash: o.hash ? o.hash.replace(/^#/, "") : "",
        hostname: o.hostname,
        port: o.port,
        pathname: o.pathname.charAt(0) === "/" ? o.pathname : "/" + o.pathname
      };
    }
    return n = r(window.location.href), function(i) {
      const a = h.isString(i) ? r(i) : i;
      return a.protocol === n.protocol && a.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), ea = q.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, o, n, r, s) {
      const i = [e + "=" + encodeURIComponent(t)];
      h.isNumber(o) && i.push("expires=" + new Date(o).toGMTString()), h.isString(n) && i.push("path=" + n), h.isString(r) && i.push("domain=" + r), s === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function oa(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function gn(e, t) {
  return e && !ta(t) ? oa(e, t) : t;
}
const lo = (e) => e instanceof F ? { ...e } : e;
function pe(e, t) {
  t = t || {};
  const o = {};
  function n(l, u, f) {
    return h.isPlainObject(l) && h.isPlainObject(u) ? h.merge.call({ caseless: f }, l, u) : h.isPlainObject(u) ? h.merge({}, u) : h.isArray(u) ? u.slice() : u;
  }
  function r(l, u, f) {
    if (h.isUndefined(u)) {
      if (!h.isUndefined(l))
        return n(void 0, l, f);
    } else return n(l, u, f);
  }
  function s(l, u) {
    if (!h.isUndefined(u))
      return n(void 0, u);
  }
  function i(l, u) {
    if (h.isUndefined(u)) {
      if (!h.isUndefined(l))
        return n(void 0, l);
    } else return n(void 0, u);
  }
  function a(l, u, f) {
    if (f in t)
      return n(l, u);
    if (f in e)
      return n(void 0, l);
  }
  const c = {
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
    headers: (l, u) => r(lo(l), lo(u), !0)
  };
  return h.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const f = c[u] || r, p = f(e[u], t[u], u);
    h.isUndefined(p) && f !== a || (o[u] = p);
  }), o;
}
const bn = (e) => {
  const t = pe({}, e);
  let { data: o, withXSRFToken: n, xsrfHeaderName: r, xsrfCookieName: s, headers: i, auth: a } = t;
  t.headers = i = F.from(i), t.url = dn(gn(t.baseURL, t.url), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (h.isFormData(o)) {
    if (q.hasStandardBrowserEnv || q.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((c = i.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((f) => f.trim()).filter(Boolean) : [];
      i.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (q.hasStandardBrowserEnv && (n && h.isFunction(n) && (n = n(t)), n || n !== !1 && Yi(t.url))) {
    const l = r && s && ea.read(s);
    l && i.set(r, l);
  }
  return t;
}, na = typeof XMLHttpRequest < "u", ra = na && function(e) {
  return new Promise(function(o, n) {
    const r = bn(e);
    let s = r.data;
    const i = F.from(r.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = r, u, f, p, v, d;
    function m() {
      v && v(), d && d(), r.cancelToken && r.cancelToken.unsubscribe(u), r.signal && r.signal.removeEventListener("abort", u);
    }
    let g = new XMLHttpRequest();
    g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
    function y() {
      if (!g)
        return;
      const C = F.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), k = {
        data: !a || a === "text" || a === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: C,
        config: e,
        request: g
      };
      mn(function(L) {
        o(L), m();
      }, function(L) {
        n(L), m();
      }, k), g = null;
    }
    "onloadend" in g ? g.onloadend = y : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(y);
    }, g.onabort = function() {
      g && (n(new S("Request aborted", S.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function() {
      n(new S("Network Error", S.ERR_NETWORK, e, g)), g = null;
    }, g.ontimeout = function() {
      let P = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const k = r.transitional || hn;
      r.timeoutErrorMessage && (P = r.timeoutErrorMessage), n(new S(
        P,
        k.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        e,
        g
      )), g = null;
    }, s === void 0 && i.setContentType(null), "setRequestHeader" in g && h.forEach(i.toJSON(), function(P, k) {
      g.setRequestHeader(k, P);
    }), h.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), a && a !== "json" && (g.responseType = r.responseType), l && ([p, d] = ze(l, !0), g.addEventListener("progress", p)), c && g.upload && ([f, v] = ze(c), g.upload.addEventListener("progress", f), g.upload.addEventListener("loadend", v)), (r.cancelToken || r.signal) && (u = (C) => {
      g && (n(!C || C.type ? new we(null, e, g) : C), g.abort(), g = null);
    }, r.cancelToken && r.cancelToken.subscribe(u), r.signal && (r.signal.aborted ? u() : r.signal.addEventListener("abort", u)));
    const b = Ji(r.url);
    if (b && q.protocols.indexOf(b) === -1) {
      n(new S("Unsupported protocol " + b + ":", S.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(s || null);
  });
}, sa = (e, t) => {
  const { length: o } = e = e ? e.filter(Boolean) : [];
  if (t || o) {
    let n = new AbortController(), r;
    const s = function(l) {
      if (!r) {
        r = !0, a();
        const u = l instanceof Error ? l : this.reason;
        n.abort(u instanceof S ? u : new we(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, s(new S(`timeout ${t} of ms exceeded`, S.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(s) : l.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", s));
    const { signal: c } = n;
    return c.unsubscribe = () => h.asap(a), c;
  }
}, ia = function* (e, t) {
  let o = e.byteLength;
  if (o < t) {
    yield e;
    return;
  }
  let n = 0, r;
  for (; n < o; )
    r = n + t, yield e.slice(n, r), n = r;
}, aa = async function* (e, t) {
  for await (const o of ca(e))
    yield* ia(o, t);
}, ca = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: o, value: n } = await t.read();
      if (o)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, uo = (e, t, o, n) => {
  const r = aa(e, t);
  let s = 0, i, a = (c) => {
    i || (i = !0, n && n(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: l, value: u } = await r.next();
        if (l) {
          a(), c.close();
          return;
        }
        let f = u.byteLength;
        if (o) {
          let p = s += f;
          o(p);
        }
        c.enqueue(new Uint8Array(u));
      } catch (l) {
        throw a(l), l;
      }
    },
    cancel(c) {
      return a(c), r.return();
    }
  }, {
    highWaterMark: 2
  });
}, et = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", vn = et && typeof ReadableStream == "function", la = et && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), yn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, ua = vn && yn(() => {
  let e = !1;
  const t = new Request(q.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), ho = 64 * 1024, wt = vn && yn(() => h.isReadableStream(new Response("").body)), Ge = {
  stream: wt && ((e) => e.body)
};
et && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ge[t] && (Ge[t] = h.isFunction(e[t]) ? (o) => o[t]() : (o, n) => {
      throw new S(`Response type '${t}' is not supported`, S.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const da = async (e) => {
  if (e == null)
    return 0;
  if (h.isBlob(e))
    return e.size;
  if (h.isSpecCompliantForm(e))
    return (await new Request(q.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (h.isArrayBufferView(e) || h.isArrayBuffer(e))
    return e.byteLength;
  if (h.isURLSearchParams(e) && (e = e + ""), h.isString(e))
    return (await la(e)).byteLength;
}, ha = async (e, t) => {
  const o = h.toFiniteNumber(e.getContentLength());
  return o ?? da(t);
}, fa = et && (async (e) => {
  let {
    url: t,
    method: o,
    data: n,
    signal: r,
    cancelToken: s,
    timeout: i,
    onDownloadProgress: a,
    onUploadProgress: c,
    responseType: l,
    headers: u,
    withCredentials: f = "same-origin",
    fetchOptions: p
  } = bn(e);
  l = l ? (l + "").toLowerCase() : "text";
  let v = sa([r, s && s.toAbortSignal()], i), d;
  const m = v && v.unsubscribe && (() => {
    v.unsubscribe();
  });
  let g;
  try {
    if (c && ua && o !== "get" && o !== "head" && (g = await ha(u, n)) !== 0) {
      let k = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), I;
      if (h.isFormData(n) && (I = k.headers.get("content-type")) && u.setContentType(I), k.body) {
        const [L, E] = ao(
          g,
          ze(co(c))
        );
        n = uo(k.body, ho, L, E);
      }
    }
    h.isString(f) || (f = f ? "include" : "omit");
    const y = "credentials" in Request.prototype;
    d = new Request(t, {
      ...p,
      signal: v,
      method: o.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: y ? f : void 0
    });
    let b = await fetch(d);
    const C = wt && (l === "stream" || l === "response");
    if (wt && (a || C && m)) {
      const k = {};
      ["status", "statusText", "headers"].forEach((te) => {
        k[te] = b[te];
      });
      const I = h.toFiniteNumber(b.headers.get("content-length")), [L, E] = a && ao(
        I,
        ze(co(a), !0)
      ) || [];
      b = new Response(
        uo(b.body, ho, L, () => {
          E && E(), m && m();
        }),
        k
      );
    }
    l = l || "text";
    let P = await Ge[h.findKey(Ge, l) || "text"](b, e);
    return !C && m && m(), await new Promise((k, I) => {
      mn(k, I, {
        data: P,
        headers: F.from(b.headers),
        status: b.status,
        statusText: b.statusText,
        config: e,
        request: d
      });
    });
  } catch (y) {
    throw m && m(), y && y.name === "TypeError" && /fetch/i.test(y.message) ? Object.assign(
      new S("Network Error", S.ERR_NETWORK, e, d),
      {
        cause: y.cause || y
      }
    ) : S.from(y, y && y.code, e, d);
  }
}), _t = {
  http: Ai,
  xhr: ra,
  fetch: fa
};
h.forEach(_t, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const fo = (e) => `- ${e}`, pa = (e) => h.isFunction(e) || e === null || e === !1, wn = {
  getAdapter: (e) => {
    e = h.isArray(e) ? e : [e];
    const { length: t } = e;
    let o, n;
    const r = {};
    for (let s = 0; s < t; s++) {
      o = e[s];
      let i;
      if (n = o, !pa(o) && (n = _t[(i = String(o)).toLowerCase()], n === void 0))
        throw new S(`Unknown adapter '${i}'`);
      if (n)
        break;
      r[i || "#" + s] = n;
    }
    if (!n) {
      const s = Object.entries(r).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? s.length > 1 ? `since :
` + s.map(fo).join(`
`) : " " + fo(s[0]) : "as no adapter specified";
      throw new S(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: _t
};
function dt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new we(null, e);
}
function po(e) {
  return dt(e), e.headers = F.from(e.headers), e.data = ut.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), wn.getAdapter(e.adapter || xe.adapter)(e).then(function(n) {
    return dt(e), n.data = ut.call(
      e,
      e.transformResponse,
      n
    ), n.headers = F.from(n.headers), n;
  }, function(n) {
    return pn(n) || (dt(e), n && n.response && (n.response.data = ut.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = F.from(n.response.headers))), Promise.reject(n);
  });
}
const _n = "1.7.7", qt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  qt[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const mo = {};
qt.transitional = function(t, o, n) {
  function r(s, i) {
    return "[Axios v" + _n + "] Transitional option '" + s + "'" + i + (n ? ". " + n : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new S(
        r(i, " has been removed" + (o ? " in " + o : "")),
        S.ERR_DEPRECATED
      );
    return o && !mo[i] && (mo[i] = !0, console.warn(
      r(
        i,
        " has been deprecated since v" + o + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
function ma(e, t, o) {
  if (typeof e != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let r = n.length;
  for (; r-- > 0; ) {
    const s = n[r], i = t[s];
    if (i) {
      const a = e[s], c = a === void 0 || i(a, s, e);
      if (c !== !0)
        throw new S("option " + s + " must be " + c, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0)
      throw new S("Unknown option " + s, S.ERR_BAD_OPTION);
  }
}
const St = {
  assertOptions: ma,
  validators: qt
}, re = St.validators;
class he {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new so(),
      response: new so()
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
  async request(t, o) {
    try {
      return await this._request(t, o);
    } catch (n) {
      if (n instanceof Error) {
        let r;
        Error.captureStackTrace ? Error.captureStackTrace(r = {}) : r = new Error();
        const s = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? s && !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + s) : n.stack = s;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, o) {
    typeof t == "string" ? (o = o || {}, o.url = t) : o = t || {}, o = pe(this.defaults, o);
    const { transitional: n, paramsSerializer: r, headers: s } = o;
    n !== void 0 && St.assertOptions(n, {
      silentJSONParsing: re.transitional(re.boolean),
      forcedJSONParsing: re.transitional(re.boolean),
      clarifyTimeoutError: re.transitional(re.boolean)
    }, !1), r != null && (h.isFunction(r) ? o.paramsSerializer = {
      serialize: r
    } : St.assertOptions(r, {
      encode: re.function,
      serialize: re.function
    }, !0)), o.method = (o.method || this.defaults.method || "get").toLowerCase();
    let i = s && h.merge(
      s.common,
      s[o.method]
    );
    s && h.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete s[d];
      }
    ), o.headers = F.concat(i, s);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(o) === !1 || (c = c && m.synchronous, a.unshift(m.fulfilled, m.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(m) {
      l.push(m.fulfilled, m.rejected);
    });
    let u, f = 0, p;
    if (!c) {
      const d = [po.bind(this), void 0];
      for (d.unshift.apply(d, a), d.push.apply(d, l), p = d.length, u = Promise.resolve(o); f < p; )
        u = u.then(d[f++], d[f++]);
      return u;
    }
    p = a.length;
    let v = o;
    for (f = 0; f < p; ) {
      const d = a[f++], m = a[f++];
      try {
        v = d(v);
      } catch (g) {
        m.call(this, g);
        break;
      }
    }
    try {
      u = po.call(this, v);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, p = l.length; f < p; )
      u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(t) {
    t = pe(this.defaults, t);
    const o = gn(t.baseURL, t.url);
    return dn(o, t.params, t.paramsSerializer);
  }
}
h.forEach(["delete", "get", "head", "options"], function(t) {
  he.prototype[t] = function(o, n) {
    return this.request(pe(n || {}, {
      method: t,
      url: o,
      data: (n || {}).data
    }));
  };
});
h.forEach(["post", "put", "patch"], function(t) {
  function o(n) {
    return function(s, i, a) {
      return this.request(pe(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  he.prototype[t] = o(), he.prototype[t + "Form"] = o(!0);
});
class Ft {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let o;
    this.promise = new Promise(function(s) {
      o = s;
    });
    const n = this;
    this.promise.then((r) => {
      if (!n._listeners) return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](r);
      n._listeners = null;
    }), this.promise.then = (r) => {
      let s;
      const i = new Promise((a) => {
        n.subscribe(a), s = a;
      }).then(r);
      return i.cancel = function() {
        n.unsubscribe(s);
      }, i;
    }, t(function(s, i, a) {
      n.reason || (n.reason = new we(s, i, a), o(n.reason));
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
    const o = this._listeners.indexOf(t);
    o !== -1 && this._listeners.splice(o, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), o = (n) => {
      t.abort(n);
    };
    return this.subscribe(o), t.signal.unsubscribe = () => this.unsubscribe(o), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Ft(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
}
function ga(e) {
  return function(o) {
    return e.apply(null, o);
  };
}
function ba(e) {
  return h.isObject(e) && e.isAxiosError === !0;
}
const Ct = {
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
Object.entries(Ct).forEach(([e, t]) => {
  Ct[t] = e;
});
function Sn(e) {
  const t = new he(e), o = Zo(he.prototype.request, t);
  return h.extend(o, he.prototype, t, { allOwnKeys: !0 }), h.extend(o, t, null, { allOwnKeys: !0 }), o.create = function(r) {
    return Sn(pe(e, r));
  }, o;
}
const O = Sn(xe);
O.Axios = he;
O.CanceledError = we;
O.CancelToken = Ft;
O.isCancel = pn;
O.VERSION = _n;
O.toFormData = Ye;
O.AxiosError = S;
O.Cancel = O.CanceledError;
O.all = function(t) {
  return Promise.all(t);
};
O.spread = ga;
O.isAxiosError = ba;
O.mergeConfig = pe;
O.AxiosHeaders = F;
O.formToJSON = (e) => fn(h.isHTMLForm(e) ? new FormData(e) : e);
O.getAdapter = wn.getAdapter;
O.HttpStatusCode = Ct;
O.default = O;
const va = {
  components: {
    BaseChessBoard: We
  },
  extends: We,
  methods: {
    async handleMove() {
      var o, n;
      const e = (o = this.$refs.baseChessBoard.boardAPI) == null ? void 0 : o.getHistory(!0), t = e == null ? void 0 : e.map((r) => typeof r == "object" ? r.lan : r);
      if (t)
        try {
          const r = this.$refs.baseChessBoard.boardAPI.getFen(), s = r.split(" ")[1] === "b";
          if ((n = this.$refs.baseChessBoard.engine) == null || n.sendPosition(
            t.join(" ")
          ), s) {
            this.$refs.baseChessBoard.startBlackTimer();
            const a = (await O.post(
              "http://localhost:3000/move",
              {
                move: {
                  lan: t[t.length - 1],
                  after: r
                }
              }
            )).data.bestMove;
            a && this.$refs.baseChessBoard.boardAPI.move({
              from: a.slice(0, 2),
              to: a.slice(2, 4)
            });
          } else
            this.$refs.baseChessBoard.startWhiteTimer();
        } catch (r) {
          console.error("Error sending move to server:", r);
        }
    }
  }
};
function ya(e, t, o, n, r, s) {
  const i = je("BaseChessBoard");
  return z(), be(i, {
    ref: "baseChessBoard",
    handleMove: s.handleMove
  }, null, 8, ["handleMove"]);
}
const wa = /* @__PURE__ */ Qe(va, [["render", ya]]), _a = {
  components: {
    BaseChessBoard: We
  },
  extends: We,
  methods: {
    handleMove() {
      var r, s;
      const e = (r = this.$refs.baseChessBoard.boardAPI) == null ? void 0 : r.getHistory(!0), t = e == null ? void 0 : e.map((i) => typeof i == "object" ? i.lan : i);
      this.$refs.baseChessBoard.boardAPI.getFen().split(" ")[1] === "b" ? this.$refs.baseChessBoard.startBlackTimer() : this.$refs.baseChessBoard.startWhiteTimer(), t && ((s = this.$refs.baseChessBoard.engine) == null || s.sendPosition(
        t.join(" ")
      ));
    }
  }
};
function Sa(e, t, o, n, r, s) {
  const i = je("BaseChessBoard");
  return z(), be(i, {
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
