import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface P2PNetworkTopologyProps {
  nodeList: any[];
}

const P2PNetworkTopology: React.FC<P2PNetworkTopologyProps> = ({ nodeList }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  // const nodeInfoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!nodeList) return;
    const data = nodeList
    const svg = d3.select(svgRef.current);
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    // const nodeInfo = d3.select(nodeInfoRef.current);

    const simulation = d3.forceSimulation(data.nodes)
      .force("link", d3.forceLink().links(getLinks(data.nodes)).id((d: any) => d.node_id).distance(100))
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(20))
      .on("tick", () => {
        link.attr("d", (d: any) => {
          return `M${d.source.x},${d.source.y} L${d.target.x},${d.target.y}`;
        });
        node.attr("cx", (d: any) => d.x)
          .attr("cy", (d: any) => d.y);
        text.attr("x", (d: any) => d.x)
          .attr("y", (d: any) => d.y);
      });

    const color = d3.scaleOrdinal(d3.schemeCategory10);


    const link = svg.selectAll(".link")
      .data(getLinks(data.nodes))
      .enter().append("path")
      .attr("class", "link")
      .attr("stroke", "#888") // 设置连线颜色
      .attr("stroke-width", 2); // 设置连线宽度

    const node = svg.selectAll(".node")
      .data(data.nodes)
      .enter().append("circle")
      .attr("class", "node")
      .style("fill", (d: any) => color(d.node_id))
      .attr("r", 26) // Node circle size
      // .on("click", showNodeInfo)
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    const text = svg.selectAll(".node-label")
      .data(data.nodes)
      .enter().append("text")
      .attr("class", "node-label")
      .text((d: any) => d.node_id.substr(0,6))
      .attr("dx", 40) // Offset 20 pixels to the right of the node
      .attr("dy", 20); // Offset 5 pixels below the node

    function getLinks(nodes: any[]) {
      const links: any[] = [];
      nodes.forEach(node => {
        node.neighbor_nodes.forEach((neighbor: string) => {
          links.push({ source: node, target: getNodeById(neighbor, nodes) });
        });
      });
      return links;
    }

    function getNodeById(id: string, nodes: any[]) {
      return nodes.find(node => node.node_id === id);
    }

    function showNodeInfo(event: any, d: any) {
      // nodeInfo.text("Node ID: " + d.node_id);
    }

    svg.attr("width", width)
      .attr("height", height);

    function dragstarted(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }, [nodeList]);

  return (
    <div>
      <svg ref={svgRef}></svg>
      {/* <div className='float' ref={nodeInfoRef}></div> */}
    </div>
  );
};

export default P2PNetworkTopology;
