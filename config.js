const path = require("path");

const projectBasePath = path.resolve(__dirname);

let cesiumModuleFolder = "node_modules/cesium/";
let cesiumBuildFolder = path.join(cesiumModuleFolder, "/Build/");
let cesiumSourceFolder = path.join("cesiumModuleFolder", "/Source/");

let cesiumDebugName = "/CesiumUnminified/";
let cesiumProdName = "/Cesium/";

let cesiumDebugFolder = path.join(cesiumBuildFolder, cesiumDebugName);
let cesiumProdFolder = path.join(cesiumBuildFolder, cesiumProdName);

let localCesiumDebugPath = path.join(projectBasePath, cesiumDebugFolder);
let localCesiumProdPath = path.join(projectBasePath, cesiumProdFolder);


const config = {
    PATHS : {
        base : projectBasePath,
        src: path.resolve(projectBasePath, 'src'),
        dist: path.resolve(projectBasePath, 'dist')
    },

    CESIUM : {
        moduleFolder : cesiumModuleFolder,
        buildFolder : cesiumBuildFolder,
        sourceFolder : cesiumSourceFolder,
        debugBuildPath : localCesiumDebugPath,
        prodBuildPath : localCesiumProdPath
    }
};


module.exports = config;