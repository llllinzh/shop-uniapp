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
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$d = {
    __name: "indexSwiper",
    props: {
      dataList: {
        type: Array,
        required: true
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("swiper", {
      "indicator-dots": true,
      autoplay: true,
      interval: 3e3,
      duration: 1e3
    }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($props.dataList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
            vue.createElementVNode("view", { class: "swiper-item" }, [
              vue.createElementVNode("image", {
                class: "swiper-img",
                src: item.imgUrl,
                mode: ""
              }, null, 8, ["src"])
            ])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  const IndexSwiper = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-53d9d14f"], ["__file", "D:/商城uniapp/app/components/index/indexSwiper.vue"]]);
  const _imports_0$3 = "/static/img/Children.jpg";
  const _imports_1$1 = "/static/img/Children1.jpg";
  const _imports_2$1 = "/static/img/Furnishing.jpg";
  const _imports_3$1 = "/static/img/Furnishing1.jpg";
  const _imports_4$1 = "/static/img/Furnishing2.jpg";
  const _imports_5$1 = "/static/img/Furnishing3.jpg";
  const _sfc_main$c = {};
  function _sfc_render$b(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "recommend bg-color" }, [
      vue.createElementVNode("view", { class: "recommend-item" }, [
        vue.createElementVNode("image", {
          class: "item-big",
          src: _imports_0$3,
          mode: ""
        }),
        vue.createElementVNode("view", { class: "item-small" }, [
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_1$1,
            mode: ""
          }),
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_1$1,
            mode: ""
          }),
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_1$1,
            mode: ""
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "recommend-item" }, [
        vue.createElementVNode("image", {
          class: "item-big",
          src: _imports_2$1,
          mode: ""
        }),
        vue.createElementVNode("view", { class: "item-small" }, [
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_3$1,
            mode: ""
          }),
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_4$1,
            mode: ""
          }),
          vue.createElementVNode("image", {
            class: "item-img",
            src: _imports_5$1,
            mode: ""
          })
        ])
      ])
    ]);
  }
  const Recommend = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-9d217078"], ["__file", "D:/商城uniapp/app/components/index/Recommend.vue"]]);
  const _sfc_main$b = {
    __name: "Card",
    props: {
      cardTitle: String
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "card" }, [
      vue.createElementVNode("view", null, "-"),
      vue.renderSlot(_ctx.$slots, "default", {}, () => [
        vue.createElementVNode(
          "view",
          { class: "card-name" },
          vue.toDisplayString($props.cardTitle),
          1
          /* TEXT */
        )
      ], true),
      vue.createElementVNode("view", null, "-")
    ]);
  }
  const Card = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-aea130cd"], ["__file", "D:/商城uniapp/app/components/common/Card.vue"]]);
  const _sfc_main$a = {
    __name: "Commodity",
    props: {
      dataList: Array,
      //宽度
      itemW: {
        type: String,
        default: "375rpx"
      },
      //高度
      bigH: {
        type: String,
        default: "375rpx"
      },
      //是否换行
      wrap: {
        type: String,
        default: "wrap"
      },
      //文字大小
      nameSize: {
        type: String,
        default: "26rpx"
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
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "commodity",
        style: vue.normalizeStyle("flex-wrap:" + $props.wrap + ";")
      },
      [
        vue.createCommentVNode(" 单个商品组件 "),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.props.dataList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock(
              "view",
              {
                class: "commodity-item",
                key: index,
                style: vue.normalizeStyle("width:" + $props.itemW + ";")
              },
              [
                vue.createElementVNode("image", {
                  class: "commodity-img",
                  src: item.imgUrl,
                  mode: "",
                  style: vue.normalizeStyle("height:" + $props.bigH + ";")
                }, null, 12, ["src"]),
                vue.createElementVNode("view", { class: "commodity-content" }, [
                  vue.createElementVNode(
                    "text",
                    {
                      class: "commodity-name",
                      style: vue.normalizeStyle("font-size:" + $props.nameSize + ";")
                    },
                    vue.toDisplayString(item.name),
                    5
                    /* TEXT, STYLE */
                  ),
                  vue.createElementVNode("view", null, [
                    vue.createElementVNode(
                      "text",
                      {
                        class: "pprice",
                        style: vue.normalizeStyle("font-size:" + $props.nameSize + ";")
                      },
                      "￥" + vue.toDisplayString(item.pprice),
                      5
                      /* TEXT, STYLE */
                    ),
                    vue.createElementVNode(
                      "text",
                      {
                        class: "oprice",
                        style: vue.normalizeStyle("font-size:" + $props.nameSize + ";")
                      },
                      "￥" + vue.toDisplayString(item.oprice),
                      5
                      /* TEXT, STYLE */
                    )
                  ]),
                  vue.createElementVNode(
                    "text",
                    {
                      class: "discount",
                      style: vue.normalizeStyle("font-size:" + $props.nameSize + ";")
                    },
                    vue.toDisplayString(item.discount) + "折",
                    5
                    /* TEXT, STYLE */
                  )
                ])
              ],
              4
              /* STYLE */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      4
      /* STYLE */
    );
  }
  const Commodity = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-1cb28c60"], ["__file", "D:/商城uniapp/app/components/common/Commodity.vue"]]);
  const _sfc_main$9 = {
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
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "Commodity-list" }, [
      vue.createCommentVNode(" 商品列表组件 "),
      vue.createVNode($setup["Commodity"], { dataList: $setup.commodityList })
    ]);
  }
  const CommodityList = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "D:/商城uniapp/app/components/common/CommodityList.vue"]]);
  const _imports_0$2 = "/static/img/banner1.jpg";
  const _sfc_main$8 = {};
  function _sfc_render$7(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "banner" }, [
      vue.createElementVNode("image", {
        class: "banner-img",
        src: _imports_0$2
      })
    ]);
  }
  const Banner = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-b9a50e02"], ["__file", "D:/商城uniapp/app/components/index/Banner.vue"]]);
  const _imports_0$1 = "/static/img/icons1.png";
  const _imports_1 = "/static/img/icons2.png";
  const _imports_2 = "/static/img/icons3.png";
  const _imports_3 = "/static/img/icons4.png";
  const _imports_4 = "/static/img/icons5.png";
  const _imports_5 = "/static/img/icons6.png";
  const _imports_6 = "/static/img/icons7.png";
  const _imports_7 = "/static/img/icons8.png";
  const _sfc_main$7 = {};
  function _sfc_render$6(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "icons" }, [
      vue.createElementVNode("view", { class: "icons-item" }, [
        vue.createElementVNode("image", {
          class: "icons-img",
          src: _imports_0$1,
          mode: ""
        }),
        vue.createElementVNode("text", { class: "f-color" }, "运动户外")
      ]),
      vue.createElementVNode("view", { class: "icons-item" }, [
        vue.createElementVNode("image", {
          class: "icons-img",
          src: _imports_1,
          mode: ""
        }),
        vue.createElementVNode("text", { class: "f-color" }, "运动户外")
      ]),
      vue.createElementVNode("view", { class: "icons-item" }, [
        vue.createElementVNode("image", {
          class: "icons-img",
          src: _imports_2,
          mode: ""
        }),
        vue.createElementVNode("text", { class: "f-color" }, "运动户外")
      ]),
      vue.createElementVNode("view", { class: "icons-item" }, [
        vue.createElementVNode("image", {
          class: "icons-img",
          src: _imports_3,
          mode: ""
        }),
        vue.createElementVNode("text", { class: "f-color" }, "运动户外")
      ]),
      vue.createElementVNode("view", { class: "icons-item" }, [
        vue.createElementVNode("image", {
          class: "icons-img",
          src: _imports_4,
          mode: ""
        }),
        vue.createElementVNode("text", { class: "f-color" }, "运动户外")
      ]),
      vue.createElementVNode("view", { class: "icons-item" }, [
        vue.createElementVNode("image", {
          class: "icons-img",
          src: _imports_5,
          mode: ""
        }),
        vue.createElementVNode("text", { class: "f-color" }, "运动户外")
      ]),
      vue.createElementVNode("view", { class: "icons-item" }, [
        vue.createElementVNode("image", {
          class: "icons-img",
          src: _imports_6,
          mode: ""
        }),
        vue.createElementVNode("text", { class: "f-color" }, "运动户外")
      ]),
      vue.createElementVNode("view", { class: "icons-item" }, [
        vue.createElementVNode("image", {
          class: "icons-img",
          src: _imports_7,
          mode: ""
        }),
        vue.createElementVNode("text", { class: "f-color" }, "运动户外")
      ])
    ]);
  }
  const Icons = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-295f4700"], ["__file", "D:/商城uniapp/app/components/index/Icons.vue"]]);
  const _sfc_main$6 = {
    __name: "Hot",
    setup(__props, { expose: __expose }) {
      __expose();
      const hotList = [
        {
          id: 1,
          imgUrl: "/static/img/hot1.jpg",
          name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        },
        {
          id: 1,
          imgUrl: "/static/img/hot2.jpg",
          name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        },
        {
          id: 1,
          imgUrl: "/static/img/hot3.jpg",
          name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        }
      ];
      const __returned__ = { hotList, Commodity };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "hot" }, [
      vue.createVNode($setup["Commodity"], {
        dataList: $setup.hotList,
        itemW: "250rpx",
        bigH: "220rpx"
      })
    ]);
  }
  const Hot = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "D:/商城uniapp/app/components/index/Hot.vue"]]);
  const _imports_0 = "/static/img/shop.jpg";
  const _sfc_main$5 = {
    __name: "Shop",
    setup(__props, { expose: __expose }) {
      __expose();
      const shopList = [
        {
          id: 1,
          imgUrl: "/static/img/shop1.jpg",
          name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        },
        {
          id: 2,
          imgUrl: "/static/img/shop2.jpg",
          name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        },
        {
          id: 3,
          imgUrl: "/static/img/shop3.jpg",
          name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        },
        {
          id: 4,
          imgUrl: "/static/img/shop4.jpg",
          name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        },
        {
          id: 1,
          imgUrl: "/static/img/shop1.jpg",
          name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        },
        {
          id: 2,
          imgUrl: "/static/img/shop2.jpg",
          name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        },
        {
          id: 3,
          imgUrl: "/static/img/shop3.jpg",
          name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        },
        {
          id: 4,
          imgUrl: "/static/img/shop4.jpg",
          name: "大衣绒毛大款2020年必买，不买你就不行了，爆款疯狂GG008",
          pprice: "299",
          oprice: "659",
          discount: "5.2"
        }
      ];
      const __returned__ = { shopList, Commodity };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "shop" }, [
      vue.createElementVNode("view", { class: "shop-item" }, [
        vue.createElementVNode("view", { class: "shop-big" }, [
          vue.createElementVNode("image", {
            class: "shop-big",
            src: _imports_0
          })
        ]),
        vue.createElementVNode("scroll-view", {
          "scroll-x": "true",
          class: "scroll-content"
        }, [
          vue.createElementVNode("view", { class: "scroll-item" }, [
            vue.createVNode($setup["Commodity"], {
              dataList: $setup.shopList,
              wrap: "no-wrap",
              itemW: "200rpx",
              bigH: "200rpx",
              nameSize: "20rpx"
            })
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "shop-item" }, [
        vue.createElementVNode("view", { class: "shop-big" }, [
          vue.createElementVNode("image", {
            class: "shop-big",
            src: _imports_0
          })
        ]),
        vue.createElementVNode("scroll-view", {
          "scroll-x": "true",
          class: "scroll-content"
        }, [
          vue.createElementVNode("view", { class: "scroll-item" }, [
            vue.createVNode($setup["Commodity"], {
              dataList: $setup.shopList,
              wrap: "no-wrap",
              itemW: "200rpx",
              bigH: "200rpx",
              nameSize: "20rpx"
            })
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "shop-item" }, [
        vue.createElementVNode("view", { class: "shop-big" }, [
          vue.createElementVNode("image", {
            class: "shop-big",
            src: _imports_0
          })
        ]),
        vue.createElementVNode("scroll-view", {
          "scroll-x": "true",
          class: "scroll-content"
        }, [
          vue.createElementVNode("view", { class: "scroll-item" }, [
            vue.createVNode($setup["Commodity"], {
              dataList: $setup.shopList,
              wrap: "no-wrap",
              itemW: "200rpx",
              bigH: "200rpx",
              nameSize: "20rpx"
            })
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "shop-item" }, [
        vue.createElementVNode("view", { class: "shop-big" }, [
          vue.createElementVNode("image", {
            class: "shop-big",
            src: _imports_0
          })
        ]),
        vue.createElementVNode("scroll-view", {
          "scroll-x": "true",
          class: "scroll-content"
        }, [
          vue.createElementVNode("view", { class: "scroll-item" }, [
            vue.createVNode($setup["Commodity"], {
              dataList: $setup.shopList,
              wrap: "no-wrap",
              itemW: "200rpx",
              bigH: "200rpx",
              nameSize: "20rpx"
            })
          ])
        ])
      ])
    ]);
  }
  const Shop = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-1cf9dac3"], ["__file", "D:/商城uniapp/app/components/index/Shop.vue"]]);
  const _sfc_main$4 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const topBarIndex = vue.ref(0);
      const scrollIntoIndex = vue.ref("top0");
      const clentHeight = vue.ref(0);
      const topBar = vue.ref([]);
      const newTopBar = vue.ref([]);
      vue.onMounted(() => {
        let view = uni.createSelectorQuery().select(".home-data");
        view.boundingClientRect((data) => {
          clentHeight.value = 1e3;
        }).exec();
        __init();
      });
      function __init() {
        uni.request({
          url: "http://192.168.146.31:3000/api/index_list/data",
          success: (res) => {
            let data = res.data.data;
            topBar.value = data.topBar;
            newTopBar.value = initData(data);
          }
        });
      }
      function initData(res) {
        let arr = [];
        for (let i = 0; i < topBar.value.length; i++) {
          let obj = {
            data: []
          };
          if (i == 0) {
            obj.data = res.data;
          }
          arr.push(obj);
        }
        return arr;
      }
      function changeTab(index) {
        if (topBarIndex.value === index) {
          return;
        }
        topBarIndex.value = index;
        scrollIntoIndex.value = "top" + index;
      }
      function onChangeTab(e) {
        topBarIndex.value = e.detail.current;
      }
      const __returned__ = { topBarIndex, scrollIntoIndex, clentHeight, topBar, newTopBar, __init, initData, changeTab, onChangeTab, IndexSwiper, Recommend, Card, CommodityList, Banner, Icons, Hot, Shop, onMounted: vue.onMounted, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
      vue.createElementVNode("scroll-view", {
        "scroll-x": "true",
        class: "scroll-content",
        "scroll-into-view": $setup.scrollIntoIndex
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.topBar, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              id: "top" + index,
              key: index,
              class: "scroll-item",
              onClick: ($event) => $setup.changeTab(index)
            }, [
              vue.createElementVNode(
                "text",
                {
                  class: vue.normalizeClass($setup.topBarIndex === index ? "f-active-color" : "f-color")
                },
                vue.toDisplayString(item.name),
                3
                /* TEXT, CLASS */
              )
            ], 8, ["id", "onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ], 8, ["scroll-into-view"]),
      vue.createElementVNode("swiper", {
        onChange: $setup.onChangeTab,
        current: $setup.topBarIndex,
        style: vue.normalizeStyle("height:" + $setup.clentHeight + "px;")
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.newTopBar, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
              vue.createElementVNode("view", { class: "home-data" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(item.data, (k, i) => {
                    return vue.openBlock(), vue.createElementBlock(
                      vue.Fragment,
                      { key: i },
                      [
                        k.type === "swiperList" ? (vue.openBlock(), vue.createBlock($setup["IndexSwiper"], {
                          key: 0,
                          dataList: k.data
                        }, null, 8, ["dataList"])) : vue.createCommentVNode("v-if", true),
                        vue.createVNode($setup["Recommend"]),
                        vue.createVNode($setup["Card"], { cardTitle: "猜你喜欢" }),
                        vue.createVNode($setup["CommodityList"])
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ], 44, ["current"]),
      vue.createCommentVNode(" 首页推荐模板 "),
      vue.createCommentVNode(" <IndexSwiper></IndexSwiper>\r\n		<Recommend></Recommend>\r\n		<Card cardTitle='猜你喜欢'></Card>\r\n		<CommodityList></CommodityList> "),
      vue.createCommentVNode(" 其他模板：运动户外、美妆... "),
      vue.createCommentVNode(" <Banner></Banner>\r\n		<Icons></Icons>\r\n		<Card cardTitle='热销爆品'></Card>\r\n		<Hot></Hot>\r\n		<Card cardTitle='推荐店铺'></Card>\r\n		<Shop></Shop>\r\n		<Card cardTitle='为您推荐'></Card>\r\n		<CommodityList></CommodityList> ")
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/商城uniapp/app/pages/index/index.vue"]]);
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
