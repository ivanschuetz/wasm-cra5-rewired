/* config-overrides.js */

const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = function override(config, env) {
  const wasmExtensionRegExp = /\.wasm$/;
  config.resolve.extensions.push(".wasm");

  //do stuff with the webpack config...
  if (!Array.isArray(config.plugins)) {
    config.plugins = [];
  }

  const crateDirectory = path.resolve(__dirname, "../wasm");
  config.plugins.push(
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, "../wasm"),
      outDir: path.resolve(__dirname, "src/pkg"),
    })
  );

  config.experiments = {
    asyncWebAssembly: true,
  };

  config.module.rules.forEach((rule) => {
    (rule.oneOf || []).forEach((oneOf) => {
      if (oneOf.type === "asset/resource") {
        oneOf.exclude.push(wasmExtensionRegExp);
      }
    });
  });

  return config;
};
