var data = [
        { 'id': 1, 'x': 15, 'y': 35 },
        { 'id': 1, 'x': 20, 'y': 20 },
        { 'id': 1, 'x': 25, 'y': 45 },
        { 'id': 1, 'x': 30, 'y': 10 },
        { 'id': 1, 'x': 35, 'y': 38 },
        { 'id': 1, 'x': 40, 'y': 20 },
        { 'id': 2, 'x': 15, 'y': 25 },
        { 'id': 2, 'x': 20, 'y': 15 },
        { 'id': 2, 'x': 25, 'y': 35 },
        { 'id': 2, 'x': 30, 'y': 10 },
        { 'id': 2, 'x': 35, 'y': 35 },
        { 'id': 2, 'x': 40, 'y': 20 },
        { 'id': 3, 'x': 15, 'y': 5 },
        { 'id': 3, 'x': 20, 'y': 15 },
        { 'id': 3, 'x': 25, 'y': 25 },
        { 'id': 3, 'x': 30, 'y': 20 },
        { 'id': 3, 'x': 35, 'y': 45 },
        { 'id': 3, 'x': 40, 'y': 50 }

    ],
    margin = { top: 20, right: 20, bottom: 30, left: 50 },
    width = $('.line-chart').parent().width(),
    height = $('.line-chart').parent().height();

var colors = ["#1980ff", "#ffab00", "#a2a6a9"];

var setColor = function (color, i) {
        return color[i];
}



var dataset = d3.nest().key(function (d) { return d.id; }).entries(data);



//// set the ranges
var x = d3.scaleLinear().range([0, width - margin.right]);
var y = d3.scaleLinear().range([height - margin.top, 0]);


//draw the line
var line = d3.line()
    .x(function (d) { return x(d.x); })
    .y(function (d) { return y(d.y); })
    .curve(d3.curveMonotoneX);

//// append the svg obgect to the body of the page
//// appends a 'group' element to 'svg'
//// moves the 'group' element to the top left margin
var chart = d3.select('.line-chart').append('svg')
    .attrs({
        width: '100%',
        height: '100%',
        'viewBox': '0 0 ' + Math.max(width, height) + ' ' + (Math.min(width, height) + 40),
        'preserveAspectRatio': 'xMinYMin'
    });

var svg = d3.select('.line-chart svg'),
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");


//// Scale the range of the data in the domains
x.domain(d3.extent(data, function (d) { return d.x; }));
y.domain([0, d3.max(data, function (d) {
    return Math.max(d.y);
})]);


/// Custom axis

var yAxis = d3.axisRight(y).tickSize(width);
var xAxis = d3.axisBottom(x);


////// add the x Axis
g.append("g")
    .attr("transform", "translate(-20," + height + ")")
    .attr('class','xAxis')
    .call(customXAxis);

function customXAxis(g) {
    g.call(xAxis);
    g.select(".domain").remove();
}

//// add the y Axis
g.append('g').call(customYAxis);

function customYAxis(g) {
    g.call(yAxis);
    g.select(".domain").remove();
    g.selectAll(".tick text").attr("x", -35).attr("dy", 0);
}

dataset.forEach(function (d, i) {
    g.append('g').attr('class','lines').append("path")
    .attr("class", "line")
    .attr('stroke-width', 2)
    .attr("d", line(d.values))
    .style("stroke", setColor(colors, i) );
});


