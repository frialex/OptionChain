function cbfunc(data){
	console.log(data);
	window.gd = data;
	window.OpCh = data.query.results.optionsChain;


	//Use D3

	//Data Format
   // "symbol":"COMPANY SYMBOL",
   //          "option":[ option1, option2 ]

   //Where optionsX is:
   //             {
   //                "symbol":"FDS130720C00070000",
   //                "type":"C",
   //                "strikePrice":"70",
   //                "lastPrice":"27.50",
   //                "change":"0",
   //                "changeDir":null,
   //                "bid":"36.5",
   //                "ask":"38",
   //                "vol":"4",
   //                "openInt":"4"
   //             }


   //Pump that in to D3

   //Color Puts and Calls differently

   //Symbol contains date information: YY MM DD?

   //Need some kind of graphical way to represent "in the money"

}