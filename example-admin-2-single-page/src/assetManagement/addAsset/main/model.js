import itemModel from "srcDir/common/model/itemModel";

const data = itemModel({
  url: "/ad/debtorInfo/show",
  method: "GET",
  // 参数改由调用的时候传递
  // params: {
  //   id: "57"
  // }
});

export { data as default };
