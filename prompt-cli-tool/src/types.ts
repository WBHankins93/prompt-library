export interface Skill {
  id: string;
  name: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  author: string;
  path: string;
}

export interface SkillsConfig {
  skills: string[];
}
