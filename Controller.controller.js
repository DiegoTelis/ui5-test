sap.ui.define([
	"sap/base/Log",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/core/format/DateFormat",
	"sap/ui/thirdparty/jquery"
], function(Log, Controller, JSONModel, MessageToast, DateFormat, jQuery) {
	
	"use strict";

	return Controller.extend("sap.ui.table.sample.Basic.Controller", {

		onInit : function() {
			// set explored app's demo model on this sample
			this.GetTodo();
		},
		RestFail:function(data){
			debugger;
        },
        RestSuccess:function(data){
			
			var myData = data; 

			//p1 pegando em json e buscando view
			var nJSON = new JSONModel();
			nJSON.setData({
				"TodoCollection": myData
			}); 
			var  myView = this.getView();
			myView.setModel(nJSON);

        },

		GetTodo : function() {
			
			var urlR = "https://jsonplaceholder.typicode.com/todos";
            $.ajax({
				type: "GET",
				url: urlR,
				contentType: "application/json",
				dataType: "json",
				success: this.RestSuccess.bind(this),
				error: function() {
					Log.error("failed to load json");
				}
			});

		
		},

		onClickCol: function(){
			console.log("algo aqui");

		}

	});

	$('#col4').change(function(){
		alert('click coluna');
  });
  $('#cb').change(function(){
	alert('click  checkbox');
});


});