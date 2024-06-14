import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const MergeGraph = ({ data }) => {
    const svgRef = useRef();

    useEffect(() => {
        if (!data) return
        let logs = data.end_merge_logs_query.concat(data.start_merge_logs_query);
        let logsArray = logs.map(log => ({
            s_clock_hash: log.s_clock_hash,
            e_clock_hash: log.e_clock_hash,
            from_id: log.from_id,
            to_id: log.to_id
        }));

        let result = [];
        let currentItem = logsArray[0];
        result.push(currentItem.from_id);
        result.push(currentItem.to_id);

        for (let i = 1; i < logsArray.length; i++) {
            if (logsArray[i].s_clock_hash === currentItem.e_clock_hash) {
                currentItem = logsArray[i];
                result.push(currentItem.to_id);
            }
        }

        result = [...new Set(result)];

        const nodes = result.map(id => ({ id }));
        const links = [];
        for (let i = 0; i < result.length - 1; i++) {
            links.push({ source: result[i], target: result[i + 1] });
        }

        const width = window.innerWidth;
        const height = window.innerHeight / 2;

        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height);

        const color = d3.scaleOrdinal(d3.schemeCategory10);

        // 添加箭头定义
        svg.append('defs').append('marker')
            .attr('id', 'arrowhead')
            .attr('viewBox', '-0 -5 10 10')
            .attr('refX', 13)
            .attr('refY', 0)
            .attr('orient', 'auto')
            .attr('markerWidth', 6)
            .attr('markerHeight', 6)
            .attr('xoverflow', 'visible')
            .append('svg:path')
            .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
            .attr('fill', '#999')
            .style('stroke', 'none');

        const simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(d => d.id).distance(100))
            .force('charge', d3.forceManyBody().strength(-400))
            .force('center', d3.forceCenter(width / 2, height / 2));

        const link = svg.append('g')
            .attr('class', 'links')
            .selectAll('line')
            .data(links)
            .enter().append('line')
            .attr('class', 'link')
            .style('stroke', (d, i) => color(i))
            .style('stroke-width', 2)
            .attr('marker-end', 'url(#arrowhead)'); // 添加箭头

        const node = svg.append('g')
            .attr('class', 'nodes')
            .selectAll('circle')
            .data(nodes)
            .enter().append('circle')
            .attr('class', 'node')
            .attr('r', 10)
            .style('fill', (d, i) => color(i));

        const label = svg.append('g')
            .attr('class', 'labels')
            .selectAll('text')
            .data(nodes)
            .enter().append('text')
            .attr('class', 'label')
            .text((d: any) => d.id.substr(0,8));
            // .text(d => d.id);

        simulation.on('tick', () => {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            node
                .attr('cx', d => d.x)
                .attr('cy', d => d.y);

            label
                .attr('x', d => d.x + 15)
                .attr('y', d => d.y + 5);
        });
    }, [data]);

    return <div><svg ref={svgRef}></svg></div >;
};

export default MergeGraph;
