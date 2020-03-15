const path = require("path");
const { pathAlias } = require("./config");

const obj = {};
pathAlias.map((item) => {
  obj[item.alias] = path.resolve(__dirname, `src/${item.path}`);
  return obj;
});

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: obj,
    },
  });
};
