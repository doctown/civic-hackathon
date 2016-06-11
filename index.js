/**
 * Created by dogor on 6/4/16.
 */
var width = 900;
var height = 600;

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

var g = svg.append("g");


d3.json("caCountiesTopoSimple.json", function(error, cali) {
  if (error) return console.error(error);

  var subunits = topojson.feature(cali, cali.objects.subunits);
  var projection  = d3.geo.mercator()
    .scale(500)
    .translate([width / 2, height / 2]);

  var  projection = d3.geo.mercator()
    .scale(1000 * 2)
    .center([-120, 36])
    .translate([width/2, height/2]);


  var path = d3.geo.path()
    .projection(projection);

  svg.append("path")
    .datum(subunits)
    .attr('d', path);

  svg.selectAll(".subunit")
    .data(topojson.feature(cali, cali.objects.subunits).features)
    .enter().append("path")
    .attr("class", function(d) { return "subunit" + d.id; })
    .attr("d", path);

  svg.selectAll(".subunit06089").style( {fill: '#ddc'});

  /*
  svg.append("path")
    .datum(topojson.feature(cali, cali.objects.subunits))
    .attr("d", d3.geo.path().projection(d3.geo.mercator()));
  */
});
/*
d3.json("caCountiesTopoSimple.json", function(error, topology) {
  console.log(topology);
  g.selectAll("path")
    .data(topojson.object(topology, topology.objects.countries)
      .geometries)
    .enter()
    .append("path")
    .attr("d", path)
});

  */