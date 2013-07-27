function cbfunc(data){
   var result = data.query.results.optionsChain;
   window.opCh = result;

   //TODO: derive date from result.option.symbol

   console.log(result);
   console.log(_.keys(result.option));

   $(function(){drawChainChart(result)});
}

function drawChainChart(data){
   var svgBase =   d3 .select('body').append("svg").attr('width', 500).attr('height', 500);

   var baseGraphic = svgBase.selectAll('circle').data(data.option).enter().append('circle')
                              .attr({cx: _.random(0,200), cy: function(d){return initialOptionPlacement(d);}, r: 0});

   //TODO: Need bette placement than _.random... //TODO: .ease('circle')? bounce?
   var extendedGraphic =   baseGraphic.transition().duration(750)
                                      .attr('cx', function(d, i){ return (i*10 + _.random(10,200)); }) 
                                      .attr('cy', function(d, i){ return placeOption(d); })
                                      .attr('r',  function(d)   { return d.strikePrice/10; });

   extendedGraphic.attr('fill', function(d){ return colorOptionType(d); })

   //TODO: Add stroke and stroke width?? what would that mean? how would you read it back?
   //Without the delay, the objects don't get resized or positioned..
   setTimeout(function() {d3.selectAll('circle').transition().duration(1000).attr('stroke', 'orange');}, 700);

}



//draw horizontal axis with strike price, calls on top puts on bottom.
//what does the vertical direction represent? ask/bid prices?


// (call)                 (call)
//
//---10------30------40-------50------60---70
//
//                   ()


//Turn it in to a class? _ merge methods?
//Start at top or bottom, depending on option type.
//Adds for a nice distinguishing effect. 
function initialOptionPlacement(op){
   if(op.type === 'C'){
      return _.random(-10, 50);
   }else if(op.type === 'P'){
      return _.random(100,300);
   }
}

function placeOption(op){
   if(op.type === 'C'){
      return _.random(10,50);
   }else if(op.type === 'P'){
      return _.random(80,120);
   }
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

