/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "com/app/project1/model/models",
        "sap/ui/core/routing/Router",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent, Device, models, Router, JSONModel) {
        "use strict";

        return UIComponent.extend("com.app.project1.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);


                var oUserData = new JSONModel({
                    name: ""
                });
    
                // Set the model to the component
                this.setModel(oUserData, "userData");

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);