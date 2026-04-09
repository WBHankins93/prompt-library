export interface Persona {
  id: string;
  display_name: string;
  category: string;
  summary: string;
}

export interface TaskItem {
  id: string;
  name: string;
  category: string;
  summary: string;
}

export interface ProjectConfig {
  personas: string[];
  tasks: string[];
  foundation: string[];
  response_standards: string[];
}
