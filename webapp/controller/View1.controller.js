sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/IntervalTrigger"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, IntervalTrigger) {
        "use strict";

        return Controller.extend("com.app.project1.controller.View1", {
            onInit: function () {
                this._updateLiveTime();
            },
            _updateLiveTime: function() {
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData({
                  liveTime: new Date().toLocaleTimeString()
                });
                this.getView().setModel(oModel);
          
                var intervalTrigger = new IntervalTrigger(1000);
                intervalTrigger.addListener(() => {
                  oModel.setProperty("/liveTime", new Date().toLocaleTimeString());
                });
              },
            onGoDetailsPage: function(){
                // alert("Going to Details Page....");
                this.getOwnerComponent().getRouter().navTo("details");
            },
            onLogin: function(){
                var username = this.getView().byId("idinun").getValue();
                var password = this.getView().byId("idinps").getValue();
                var NameRegExp = /^[a-zA-Z ]+$/;
                var PassRegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*0-9]{8,}$/;

                if(username === ""){
                    this.getView().byId("idinun").setValueState("Error");
                    this.getView().byId("idinun").setValueStateText("UserName is mandatory please fill it");
                }
                else{
                    this.getView().byId("idinun").setValueState("None");
                    
                    if(!username.match(NameRegExp)){
                            this.getView().byId("idinun").setValueState("Error");
                            this.getView().byId("idinun").setValueStateText("UserName should be only be alphabets of length 20");
                    }
                }


                if(password === ""){
                    this.getView().byId("idinps").setValueState("Error");
                    this.getView().byId("idinps").setValueStateText("Password is mandatory please fill it");
                }
                else{
                    this.getView().byId("idinps").setValueState("None");
                    if(!password.match(PassRegExp)){
                            this.getView().byId("idinps").setValueState("Error");
                            this.getView().byId("idinps").setValueStateText("Password should contain atleast one number and one special character");
                    }
                }
                if(username !== "" && password !== "" &&username.match(NameRegExp)&&password.match(PassRegExp)){
                
                // this.getView().byId("detailtxt").setText(username);
                var sName = this.getView().getModel("userData").getProperty("/name");
                this.getOwnerComponent().getRouter().navTo("details",{
                    name: sName
                });
                }

            },

            ShowHidePass: function(){
                const oInput = this.byId("idinps");
                const currentType = oInput.getType();
                const newType = currentType === "Password" ? "Text" : "Password";
                oInput.setType(newType);

                const newText = newType === "Password" ? "Show Password" : "Hide Password";
                this.getView().getModel().setProperty("/showHideText", newText);
            },
            onContact: function(){
                alert("Contact Us Section will be added soon...")
            },
            onRaiseQuery: function(){
                alert("Raise a Query Section will be added soon...")
            }

        });
    });
