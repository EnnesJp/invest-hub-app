export type Asset = {
  id: string;
  portfolio_id: string;
  saving_plan_id: string;
  name: string;
  value: float;
  acquisition_date: string;
  quantity: float;
  liquidity_days: number;
  liquidity_date: string;
  income_tax: float;
};