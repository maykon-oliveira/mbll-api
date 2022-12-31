export interface ListResponse {
  channel_data: { id: number; label: string }[];
  hero_data: {
    type_0: HeroData[];
    type_1: HeroData[];
    type_2: HeroData[];
    type_3: HeroData[];
    type_4: HeroData[];
    type_5: HeroData[];
    type_6: HeroData[];
  };
}

export interface HeroData {
  avatar: string;
  id: number;
  is_free: boolean;
  name: string;
  rank_data: {
    ban: string;
    use: string;
    win: string;
  }
}
