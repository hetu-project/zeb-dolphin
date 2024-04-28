import { useState } from 'react';

interface Node {
  node_id: string;
  neighbor_nodes: string[];
  is_alive: boolean;
}

interface NodesOverviewResponse {
  nodes: Node[];
  total_node_count: number;
  total_message_count: number;
}

interface NodeId {
  node_id: string;
}

interface NodeDetailResponse {
  node_id: string;
  is_alive: boolean;
  clock: Record<string, number>;
  message_list: MessageInfo[];
}

interface MessageInfo {
  message_id: string;
  from_addr: string;
  to_addr: string;
}

interface MessageId {
  message_id: string;
}

interface MessageDetailResponse {
  message_id: string;
  clock: Record<string, number>;
  event_count: number;
  is_zk: boolean;
  from_addr: string;
  to_addr: string;
  raw_message: string;
  signature: string;
}


export const fetchNodeList = async () => {
  try {
    const response = await fetch('/src/http/data.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const fetchNodeDetail = async (nodeId: string) => {
  // fetch(`/nodes/${nodeId}`)
  try {
    const response = await fetch('/src/http/data.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const fetchMessageDetail = async (messageId: string) => {
  // fetch(`/messages/${messageId}`)
  try {
    const response = await fetch('/src/http/data.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching data:', error);
  }

};
