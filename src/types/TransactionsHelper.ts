export type Transaction = {
  id: string;
  asset_id: string;
  description: string;
  date: string;
  type: string;
  value: float;
  asset_total_value: float;
  is_manual_movement: boolean;
};