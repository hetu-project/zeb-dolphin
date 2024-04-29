export interface Node {
  node_id: string;
  neighbor_nodes: string[];
  is_alive: boolean;
}

export interface NodesOverviewResponse {
  nodes: Node[];
  total_node_count: number;
  total_message_count: number;
}

export interface NodeId {
  node_id: string;
}

export interface NodeDetailResponse {
  node_id: string;
  is_alive: boolean;
  clock: Record<string, number>;
  message_list: MessageInfo[];
}

export interface MessageInfo {
  message_id: string;
  from_addr: string;
  to_addr: string;
}

export interface MessageId {
  message_id: string;
}

export interface MessageDetailResponse {
  message_id: string;
  clock: Record<string, number>;
  event_count: number;
  is_zk: boolean;
  from_addr: string;
  to_addr: string;
  raw_message: string;
  signature: string;
}
