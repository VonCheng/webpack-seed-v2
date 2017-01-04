import ajax from "srcDir/common/ajax";

const fetch = function ({ url, method, q }) {
  return ajax({
    method,
    url,
    params: q
  });
};

export { fetch as default };
