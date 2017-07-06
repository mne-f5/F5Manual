var margin = { top: 20, right: 20, bottom: 20, left: 20 },
    width = $('.progress-chart').parent().width(),
    height = $('.progress-chart').parent().height(),
    radius = Math.min(width, height) / 2.5,
    percent = 75/100,
    twoPI = 2 * Math.PI,
    baseColor = '#cfd8dc',
    primaryColor = '#ff5d5e',
    legendText = '#5b5b5b';

 var chart = d3.select('.progress-chart').append('svg')
    .attrs({
        width: '100%',
        height: '100%',
        'viewBox': '0 0 ' + Math.min(width, height) + ' ' + Math.min(width, height),
        'preserveAspectRatio': 'xMinYMin'
    });

var svg = d3.select('.progress-chart svg'),
    g = svg.append("g").attr("transform", "translate(" + Math.min(width, height) / 2 + "," + Math.min(width, height) / 2 + ")");

var pie = d3.pie()
            .value(function (d) { return d; })
            .sort(null);

var backArc = d3.arc()
            .innerRadius(radius - 13)
            .outerRadius(radius)
            .startAngle(0);

var frontArc = d3.arc()
            .innerRadius(radius - 13)
            .outerRadius(radius)
            .startAngle(0);



g.append('g')
    .attr('class', 'background')
    .append('path')
    .attrs({
        d: backArc.endAngle(twoPI),
        fill: baseColor
    });


g.append('g')
        .attr('class', 'filled-line')
        .append('path')
        .attrs({
            d: frontArc.endAngle(twoPI * percent),
            fill: primaryColor
        });

g.append('g')
        .attr('class', 'middleText')
        .append('text')
        .text(percent * 100 + ' %')
        .attrs({
            'text-anchor': 'middle',
            y: 0,
            fill: primaryColor,
            class: 'number'
        });

var filledText = d3.select('.middleText');
filledText.append('text')
        .text('Filled')
        .attrs({
            'text-anchor': 'middle',
            y: 30,
            fill: baseColor,
            class: 'status'
        });

svg.append('g')
    .attrs({
        class: 'legend',
        'transform': 'translate(' + margin.top + "," + (height - 20) + ')'
    });

var legend = d3.select('.legend');

legend.append('g')
        .attr('class', 'bullets');

var bullet = d3.select('.bullets');

bullet.append('circle')
        .attrs({
            r: 6,
            fill: primaryColor
        });

bullet.append('text')
        .text('Filled')
        .attrs({
            'text-anchor': 'left',
            y: 5,
            x: 15,
            fill: primaryColor
        });

bullet.append('circle')
        .attrs({
            'transform': 'translate(' + (width / 2 + 40) + "," + 0 + ')',
            r: 6,
            fill: baseColor
        });

bullet.append('text')
        .text('Free')
        .attrs({
            'text-anchor': 'left',
            y: 5,
            'transform': 'translate(' + (width / 2 + 50) + "," + 0 + ')',
            fill: baseColor
        });



