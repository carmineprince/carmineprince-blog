const themeConfig = require("./config/themeConfig.js");

module.exports = {
  title: "Carmineprince's Blog",
  description: "Stay hungry,stay foolish",
  markdown: {
    lineNumbers: true, // 代码行号
  },
  base: '/', // 格式：'/<仓库名>/'， 默认'/'
  theme: "vdoing",
  themeConfig,
};
