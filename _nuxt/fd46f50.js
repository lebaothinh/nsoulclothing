(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{320:function(t,n,e){"use strict";e.r(n);var o=e(26),c=(e(34),e(87),e(23),e(33),e(42),e(125),e(90),e(70),{data:function(){return{cart:[],name:"",phoneNumber:"",address:""}},methods:{onOrder:function(t){var n=this;if(t.preventDefault(),this.cart.length){var e,c="";if(this.cart.forEach((function(t,e){c+="".concat(e+1,".ID: ").concat(t.product.id," - ").concat(t.product.title," (Size ").concat(t.size,", ").concat(t.color," ").concat(t.amount," cái) | ").concat(n.$config.baseUrl,"/product?id=").concat(t.product.id,"  \n")})),this.name&&this.phoneNumber&&this.address)this.$axios.post("https://formspree.io/f/mleadkya",(e={},Object(o.a)(e,"Tên Khách Hàng",this.name),Object(o.a)(e,"Số Điện Thoại",this.phoneNumber),Object(o.a)(e,"Địa chỉ",this.address),Object(o.a)(e,"Sản phẩm đặt mua",c),e)).then((function(t){swal("Đặt Hàng Thành Công!","Cảm ơn bạn đã đặt hàng, NSoulClothing sẽ liên hệ lại với bạn để xác nhận đơn hàng!","success"),localStorage.removeItem("CozaShopCart"),n.$root.$emit("cartChange"),n.$router.push("/shop")})).catch((function(t){swal("Gửi thất bại!","Vui lòng chat Messenger với với chúng tôi ngay bên dưới phải để đặt hàng nhanh!","info")}));else swal("Thiếu thông tin!","Vui lòng điền đầy đủ thông tin!","info")}else swal("Không có sản phẩm nào!","Vui lòng thêm sản phẩm vào giỏ hàng!","info")},onRemoveCart:function(t){localStorage.setItem("CozaShopCart",JSON.stringify(this.cart.filter((function(n){return n.id!=t})))),this.$root.$emit("cartChange"),this.cart=JSON.parse(localStorage.getItem("CozaShopCart"))||[]},onChangeQuantity:function(t,n){this.cart=this.cart.map((function(p){return p.id==t&&(p.amount=n?p.amount+1:p.amount-1),p})),localStorage.setItem("CozaShopCart",JSON.stringify(this.cart))}},computed:{getTotal:function(){var t=0;return this.cart.forEach((function(n){t+=n.amount*Number(n.product.price.replace(/[^0-9.-]+/g,""))})),Number(t).toLocaleString()}},mounted:function(){this.cart=JSON.parse(localStorage.getItem("CozaShopCart"))||[]}}),r=e(11),component=Object(r.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("form",{staticClass:"bg0 p-t-75 p-b-85"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-10 col-xl-7 m-lr-auto m-b-50"},[e("div",{staticClass:"m-l-25 m-r--38 m-lr-0-xl"},[e("div",{staticClass:"wrap-table-shopping-cart"},[e("table",{staticClass:"table-shopping-cart"},[t._m(0),t._v(" "),t._l(t.cart,(function(n,o){return e("tr",{key:o,staticClass:"table_row"},[e("td",{staticClass:"column-1"},[e("div",{staticClass:"how-itemcart1",on:{click:function(){return t.onRemoveCart(n.id)}}},[e("img",{attrs:{src:"images/products/"+n.product.images[0],alt:"IMG"}})])]),t._v(" "),e("td",{staticClass:"column-2"},[t._v("\n                    "+t._s(n.product.title)),e("br"),t._v(t._s("(Size "+n.size+", "+n.color+")")+"\n                  ")]),t._v(" "),e("td",{staticClass:"column-3"},[t._v(t._s(Number(n.product.price).toLocaleString()))]),t._v(" "),e("td",{staticClass:"column-4"},[e("div",{staticClass:"wrap-num-product flex-w m-l-auto m-r-0"},[e("div",{staticClass:"btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m",on:{click:function(e){return t.onChangeQuantity(n.id,!1)}}},[e("i",{staticClass:"fs-16 zmdi zmdi-minus"})]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.amount,expression:"product.amount"}],staticClass:"mtext-104 cl3 txt-center num-product",attrs:{type:"number",name:"num-product1"},domProps:{value:n.amount},on:{input:function(e){e.target.composing||t.$set(n,"amount",e.target.value)}}}),t._v(" "),e("div",{staticClass:"btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m",on:{click:function(e){return t.onChangeQuantity(n.id,!0)}}},[e("i",{staticClass:"fs-16 zmdi zmdi-plus"})])])]),t._v(" "),e("td",{staticClass:"column-5"},[t._v("\n                    "+t._s(Number(n.amount*Number(n.product.price.replace(/[^0-9.-]+/g,""))).toLocaleString())+"\n                  ")])])}))],2)]),t._v(" "),e("div",{staticClass:"flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm"},[e("div",{staticClass:"cl2"},[t._v("\n                Tổng Tiền: "),e("b",[t._v(t._s(t.getTotal)+" VNĐ")]),t._v(" (Chưa tính phí ship)\n                "),e("p",{staticClass:"m-t-7"},[t._v("Sau khi khi đặt hàng, shop sẽ liên hệ lại với bạn để xác nhận đơn hàng")])])])])]),t._v(" "),e("div",{staticClass:"col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50"},[e("div",{staticClass:"bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm"},[e("h4",{staticClass:"mtext-109 cl2 p-b-30"},[t._v("THÔNG TIN GIAO HÀNG")]),t._v(" "),e("div",[e("div",{staticClass:"bor8 bg0 m-b-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"stext-111 cl8 plh3 size-111 p-lr-15",attrs:{type:"text",name:"name",placeholder:"Tên"},domProps:{value:t.name},on:{input:function(n){n.target.composing||(t.name=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"bor8 bg0 m-b-12"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"stext-111 cl8 plh3 size-111 p-lr-15",attrs:{type:"number",name:"phonenumber",placeholder:"Số Điện Thoại"},domProps:{value:t.phoneNumber},on:{input:function(n){n.target.composing||(t.phoneNumber=n.target.value)}}})]),t._v(" "),e("div",{staticClass:"bor8 bg0 m-b-22"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"stext-111 cl8 plh3 size-111 p-lr-15",attrs:{type:"text",name:"address",placeholder:"Địa Chỉ"},domProps:{value:t.address},on:{input:function(n){n.target.composing||(t.address=n.target.value)}}})])]),t._v(" "),e("div",{staticClass:"flex-w flex-t p-t-27 p-b-33"},[t._m(1),t._v(" "),e("div",{staticClass:"size-209 p-t-1"},[e("span",{staticClass:"mtext-110 cl2"},[t._v(" "+t._s(t.getTotal+" VNĐ"))])])]),t._v(" "),e("button",{staticClass:"flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer",on:{click:t.onOrder}},[t._v("\n              ĐẶT HÀNG\n            ")])])])])])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("tr",{staticClass:"table_head"},[e("th",{staticClass:"column-1"},[t._v("Sản Phẩm")]),t._v(" "),e("th",{staticClass:"column-2"}),t._v(" "),e("th",{staticClass:"column-3"},[t._v("Giá")]),t._v(" "),e("th",{staticClass:"column-4"},[t._v("Số Lượng")]),t._v(" "),e("th",{staticClass:"column-5"},[t._v("Tổng")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"size-208"},[e("span",{staticClass:"mtext-101 cl2"},[t._v(" Tổng: ")])])}],!1,null,null,null);n.default=component.exports}}]);