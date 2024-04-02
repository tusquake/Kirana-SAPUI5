sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.app.project1.controller.Details", {
        onInit: function() {

        },

        onGoLogoutPage: function(){
            // Handle logout functionality
            this.getOwnerComponent().getRouter().navTo("logout");
        },

		onPressNavToDetail: function () {
			this.getSplitAppObj().to(this.createId("detail"));
		},
		onPressNavToDetail1: function () {
			this.getSplitAppObj().to(this.createId("detail1"));
		},
		onPressNavToDetail2: function () {
			this.getSplitAppObj().to(this.createId("detail2"));
		},
		onPressNavToDetail3: function () {
			this.getSplitAppObj().to(this.createId("detail3"));
		},

		getSplitAppObj: function () {
			var result = this.byId("SplitAppDemo");
			if (!result) {
				Log.info("SplitApp object can't be found");
			}
			return result;
		}
    });
});
