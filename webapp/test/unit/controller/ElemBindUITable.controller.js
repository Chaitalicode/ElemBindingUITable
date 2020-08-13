/*global QUnit*/

sap.ui.define([
	"uitab/ElemBindingUITable/controller/ElemBindUITable.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ElemBindUITable Controller");

	QUnit.test("I should test the ElemBindUITable controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});