sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.app.project1.controller.Logout", {
            onInit: function () {
                
            },
            onGoHomePage: function(){
                // alert("Going to Details Page....");
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            }
        });
    });
