sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("uitab.ElemBindingUITable.controller.ElemBindUITable", {
		onInit: function () {

		},
		selectionRow:function(oEvent){
	debugger;
			var data = oEvent.getParameter("rowContext").getPath();      //"/empDetails/0"
			var listItm = this.getView().byId("listObj");
			listItm.bindElement(data);
			sap.m.MessageToast.show("Hi Usha");
		}
	});
});