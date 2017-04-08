"use strict";

var iocane = require("iocane");

module.exports = {

    Archive: require("./system/Archive.js"),
    Westley: require("./system/Westley.js"),
    Inigo: require("./system/InigoGenerator.js"),
    Workspace: require("./system/Workspace.js"),

    createCredentials: require("./system/credentials.js"),
    Model: require("./system/Model.js"),

    Group: require("./system/Group.js"),
    Entry: require("./system/Entry.js"),

    DatasourceAdapter: require("./system/DatasourceAdapter.js"),
    TextDatasource: require("./system/TextDatasource.js"),
    FileDatasource: require("./system/FileDatasource.js"),
    OwnCloudDatasource: require("./system/OwnCloudDatasource.js"),
    WebDAVDatasource: require("./system/WebDAVDatasource.js"),
    ButtercupServerDatasource : require("./system/ButtercupServerDatasource.js"),
    MyButtercupDatasource: require("./system/MyButtercupDatasource.js"),

    Flattener: require("./system/Flattener.js"),
    Descriptor: require("./system/Descriptor.js"),

    tools: {
        encoding: require("./tools/encoding.js"),
        export: require("./tools/export.js"),
        signing: require("./tools/signing.js"),
        searching: {
            instance: require("./tools/searching-instance.js"),
            raw: require("./tools/searching-raw.js")
        }
    },

    vendor: {
        iocane: iocane
    }

};
