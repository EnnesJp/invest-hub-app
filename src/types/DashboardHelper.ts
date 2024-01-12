export type Portfolio = {
  id: string;
  name: string;
  description: string;
  balance: float;
};

export type SavingPlan = {
  id: string;
  name: string;
  description: string;
  target_value: float;
  target_date: string;
  total_accumulated: float;
};