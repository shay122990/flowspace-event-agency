export type ServiceStat = {
  label: string;
  value: string;
};

export type ServiceSection = {
  id: string;
  kicker: string;
  title: string;
  desc: string;
  bullets: string[];
  stats: ServiceStat[];
  img: string;
  accentFrom: string;
  accentTo: string;
};
