function cbfunc(data){
   var result = data.query.results.optionsChain;
   window.opCh = result;

   //TODO: derive date from result.option.symbol

   console.log(result);
   console.log(_.keys(result.option));

   $(function(){drawChainChart(result)});
}

function drawChainChart(data){
   d3 .select('body').selectAll("div")
      .data(data.option)
      .enter()
      .append("p")
      .text(function(d){ return d.symbol })
      .style('color', function(d){return colorOptionType(d)});

}

function colorOptionType(option){
   if(option.type === 'C'){
      return 'green';
   }else if(option.type === 'P'){
      return 'blue';
   }
}

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

   //Color Puts and Calls differently

   //Symbol contains date information: YY MM DD?

   //Need some kind of graphical way to represent "in the money"

