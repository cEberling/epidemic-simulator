# Epidemic Simulator
A small D3.js tool to simulate spread of infection by contact in clustered societies.

## About
Being in social isolation due to the ongoing COVID-19 pandemic I built this simulator to play around with some ideas and learn a bit. 

No setup required, download the repo and open the `index.html` to run the simulation.  
 
Using hosted sources for [D3.js](https://d3js.org/d3.v5.min.js) and [Plotly](https://cdn.plot.ly/plotly-latest.min.js).
Ensure you are able access these from your location so you can run the application.

## Configuration
Detailed description tbd. For now:

Use
`constants.js` to set the general simulation parameters. 
`clusters.js` to define how many clusters of which size you want to create for which duration.

## Idea
This simulator is inspired by [this article in the washington post](https://www.washingtonpost.com/graphics/2020/world/corona-simulator/) by [Harry Stevens](http://harryjstevens.com/).
Stevens shows an interesting visualization of the effects of quarantine and social distancing on the spread of an epidemic.   

The article has become quite well known and was also copied a few times (for example [here](http://web.br.de/interaktiv/corona-simulation/english/)). 

I had a bunch of ideas about it myself. Mainly I did not quite agree with how social distancing is displayed by immovable circles. I also felt that the role of clusters,
hubs of social activity (work, school, family) came a bit short. 

So I built this simulator to play around with the idea.

Evidently, I was not the only one to think of this:  

Youtube channel 3Blue1Brown has made a published a [video](https://www.youtube.com/watch?v=gxAaO2rsdIs&t=750s) with similar ideas.

## Thanks 

In order to understand D3 force simulation I started work on this little project with a copy of [Chris Givens](https://github.com/cmgiven) block [here](https://bl.ocks.org/cmgiven/547658968d365bcc324f3e62e175709b).

## License
[MIT License](https://opensource.org/licenses/MIT)