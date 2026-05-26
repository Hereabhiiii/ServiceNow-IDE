import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "2be2bb6ddbce46f08cf3e2102010a100"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "d188798321474a0eb119d5101a62066f"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "c5b514c19de0462b8d5d557098c4a854"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "2519d15a979b44e4ad9540d0504bb7e6"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "c8c08c3e72744c74be7d6bbccacacb3b",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "547b787fad0c41cba31dcc7c5a461c7f",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "00f866ff0b744e4d92e9c6f088900b4d",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
