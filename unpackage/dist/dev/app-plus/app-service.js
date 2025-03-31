if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _imports_0$1 = "/static/img/swiper1.jpg";
  const _imports_1$1 = "/static/img/swiper2.jpg";
  const _imports_2$1 = "/static/img/swiper3.jpg";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$9 = {};
  function _sfc_render$8(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("swiper", {
      "indicator-dots": true,
      autoplay: true,
      interval: 3e3,
      duration: 1e3
    }, [
      vue.createElementVNode("swiper-item", null, [
        vue.createElementVNode("view", { class: "swiper-item" }, [
          vue.createElementVNode("image", {
            class: "swiper-img",
            src: _imports_0$1,
            mode: ""
          })
        ])
      ]),
      vue.createElementVNode("swiper-item", null, [
        vue.createElementVNode("view", { class: "swiper-item" }, [
          vue.createElementVNode("image", {
            class: "swiper-img",
            src: _imports_1$1,
            mode: ""
          })
        ])
      ]),
      vue.createElementVNode("swiper-item", null, [
        vue.createElementVNode("view", { class: "swiper-item" }, [
          vue.createElementVNode("image", {
            class: "swiper-img",
            src: _imports_2$1,
            mode: ""
          })
        ])
      ])
    ]);
  }
  const IndexSwiper = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-53d9d14f"], ["__file", "D:/商城uniapp/app/components/index/indexSwiper.vue"]]);
  const _imports_0 = "/static/img/Children.jpg";
  const _imports_1 = "/static/img/Children1.jpg";
  const _imports_2 = "/static/img/Furnishing.jpg";
  const _imports_3 = "/static/img/Furnishing1.jpg";
  const _imports_4 = "/static/img/Furnishing2.jpg";
  const _imports_5 = "/static/img/Furnishing3.jpg";
  const _sfc_main$8 = {};
  function _sfc_render$7(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "recommend bg-color" }, [
      vue.createElementVNode("view", { class: "recommend-item" }, [
        vue.createElementVNode("image", {
          class: "item-big",
          src: _imports_0,
          mode: ""
        }),
        vue.createElementVNode("view", { class: "item-small" }, [
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_1,
            mode: ""
          }),
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_1,
            mode: ""
          }),
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_1,
            mode: ""
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "recommend-item" }, [
        vue.createElementVNode("image", {
          class: "item-big",
          src: _imports_2,
          mode: ""
        }),
        vue.createElementVNode("view", { class: "item-small" }, [
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_3,
            mode: ""
          }),
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_4,
            mode: ""
          }),
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_5,
            mode: ""
          })
        ])
      ])
    ]);
  }
  const Recommend = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-9d217078"], ["__file", "D:/商城uniapp/app/components/index/Recommend.vue"]]);
  const _sfc_main$7 = {};
  function _sfc_render$6(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "card" }, [
      vue.createElementVNode("view", null, "-"),
      vue.createElementVNode("view", { class: "card-name" }, "猜你喜欢"),
      vue.createElementVNode("view", null, "-")
    ]);
  }
  const Card = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-aea130cd"], ["__file", "D:/商城uniapp/app/components/common/Card.vue"]]);
  const _sfc_main$6 = {
    __name: "Commodity",
    props: {
      dataList: {
        type: Array,
        required: true
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "commodity" }, [
      vue.createCommentVNode(" 单个商品组件 "),
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($setup.props.dataList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "commodity-item",
            key: index
          }, [
            vue.createElementVNode("image", {
              class: "commodty-img",
              src: item.imgUrl,
              mode: ""
            }, null, 8, ["src"]),
            vue.createElementVNode("view", { class: "commodity-content" }, [
              vue.createElementVNode(
                "text",
                { class: "commodity-name" },
                vue.toDisplayString(item.name),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", null, [
                vue.createElementVNode(
                  "text",
                  { class: "pprice" },
                  "￥" + vue.toDisplayString(item.pprice),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "text",
                  { class: "oprice" },
                  "￥" + vue.toDisplayString(item.oprice),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode(
                "text",
                { class: "discount" },
                vue.toDisplayString(item.discount) + "折",
                1
                /* TEXT */
              )
            ])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  const Commodity = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-1cb28c60"], ["__file", "D:/商城uniapp/app/components/common/Commodity.vue"]]);
  const _sfc_main$5 = {
    __name: "CommodityList",
    setup(__props, { expose: __expose }) {
      __expose();
      const commodityList = [
        {
          id: 1,
          imgUrl: "/static/img/commodity1.jpg",
          name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        },
        {
          id: 2,
          imgUrl: "../../static/img/commodity2.jpg",
          name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        },
        {
          id: 3,
          imgUrl: "../../static/img/commodity3.jpg",
          name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        },
        {
          id: 4,
          imgUrl: "../../static/img/commodity4.jpg",
          name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        }
      ];
      const __returned__ = { commodityList, Commodity };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "Commodity-list" }, [
      vue.createCommentVNode(" 商品列表组件 "),
      vue.createVNode($setup["Commodity"], { dataList: $setup.commodityList })
    ]);
  }
  const CommodityList = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "D:/商城uniapp/app/components/common/CommodityList.vue"]]);
  const _sfc_main$4 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = { IndexSwiper, Recommend, Card, CommodityList };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode($setup["IndexSwiper"]),
      vue.createVNode($setup["Recommend"]),
      vue.createVNode($setup["Card"], { cardTitle: "猜你喜欢" }),
      vue.createVNode($setup["CommodityList"])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "D:/商城uniapp/app/pages/index/index.vue"]]);
  const _sfc_main$3 = {};
  function _sfc_render$2(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 分类 ");
  }
  const PagesListList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/商城uniapp/app/pages/list/list.vue"]]);
  const _sfc_main$2 = {};
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "" }, " 购物车 ");
  }
  const PagesShopcarShopcar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/商城uniapp/app/pages/shopcar/shopcar.vue"]]);
  const _sfc_main$1 = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "" }, " 我的 ");
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/商城uniapp/app/pages/my/my.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/list/list", PagesListList);
  __definePage("pages/shopcar/shopcar", PagesShopcarShopcar);
  __definePage("pages/my/my", PagesMyMy);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/商城uniapp/app/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
