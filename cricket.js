var foursScoreBoard=function(cricket,four)
{
        var count=0;
    for(var i=0; i<cricket.length; i++)
    {
        if(cricket[i].four==four)
        {
            count++;
            //console.log
        }
    }
    console.log(count);
}

var sixesScoreBoard=function(cricket,six)
{
        var count=0;
    for(var i=0; i<cricket.length; i++)
    {
        if(cricket[i].six==six)
        {
            count++;
          
        }
    }
    console.log(count);
}
var noOfWicketsDowen=function(cricket,wicket)
{
        var count=0;
    for(var i=0; i<cricket.length; i++)
    {
        if(cricket[i].wicket==wicket)
        {
            count++;
          
        }
    }
    console.log(count);
}


var cricket = [{over:1, ball:0.1, runs:0, four:1, six:0, wicket:0},
              {over:1, ball:0.2, runs:2, four:0, six:0, wicket:0},
              {over:1, ball:0.3, runs:0, four:0, six:1, wicket:0},
              {over:1, ball:0.4, runs:0, four:0, six:0, wicket:1},
              {over:1, ball:0.5, runs:3, four:0, six:0, wicket:0},
              {over:1, ball:0.6, runs:0, four:0, six:1, wicket:0},
              {over:2, ball:1.1, runs:0, four:1, six:0, wicket:0},
              {over:2, ball:1.2, runs:1, four:0, six:0, wicket:1},
              {over:2, ball:1.3, runs:0, four:0, six:1, wicket:0},
              {over:2, ball:1.4, runs:0, four:0, six:0, wicket:1},
              {over:2, ball:1.5, runs:0, four:1, six:0, wicket:0},
              {over:2, ball:1.6, runs:2, four:0, six:1, wicket:0}];

var totalFoursInCricket=foursScoreBoard(cricket,1);
var totalSixesInCricket=sixesScoreBoard(cricket,1);
var totalWicketsInCricket=noOfWicketsDowen(cricket,1);