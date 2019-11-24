window.onload = function init()
{
    console.log('hi')
    var jsnx = require('jsnetworkx');

    var G = new jsnx.Graph();
 
    G.addNodesFrom([1,2,3,4], {group:0});
    G.addNodesFrom([5,6,7], {group:1});
    G.addNodesFrom([8,9,10,11], {group:2});
     
    G.addPath([1,2,5,6,7,8,11]);
    G.addEdgesFrom([[1,3],[1,4],[3,4],[2,3],[2,4],[8,9],[8,10],[9,10],[11,10],[11,9]]);
     
    var color = d3.scale.category20();
    jsnx.draw(G, {
        element: '#canvas',
        layoutAttr: {
            charge: -120,
            linkDistance: 20
        },
        nodeAttr: {
            r: 5,
            title: function(d) { return d.label;}
        },
        nodeStyle: {
            fill: function(d) { 
                return color(d.data.group); 
            },
            stroke: 'none'
        },
        edgeStyle: {
            fill: '#999'
        }
    });
};