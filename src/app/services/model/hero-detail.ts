export interface HeroDetail {
  cover_picture: string;
  gallery_picture: string;
  junling: string;
  cost: string;
  des: string;
  mag: string;
  phy: string;
  alive: string;
  diff: string;
  name: string;
  type: string;
  skill: {
    skill: HeroSkill[];
    item: {
      main: {
        icon: string;
      };
      secondary: {
        icon: string;
      };
      battle_first: {
        icon: string;
      };
      battle_second: {
        icon: string;
      };
      tips: string;
    };
  };
  gear: {
    out_pack: Gear[];
    out_pack_tips: string;
    verysix: [];
  };
  counters: {
    best: HeroCounter;
    counters: HeroCounter;
    countered: HeroCounter;
  };
}

interface HeroSkill {
  name: string;
  icon: string;
  des: string;
  tips: string;
}

interface Gear {
  equipment_id: number;
  equip: {
    icon: string;
    name: string;
    des: string[];
  };
}

interface HeroCounter {
  heroid: string;
  best_mate_tips: string;
  name: string;
  icon: string;
}
