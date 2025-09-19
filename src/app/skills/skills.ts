import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillService } from '../services/skill.service';
import { Skill } from '../services/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent {
  skills: Skill[] = [];

  constructor(private skillService: SkillService) {}

  ngOnInit() {
    this.skillService.getSkills().subscribe({
      next: (data) => this.skills = data,
      error: (err) => console.error('Erreur API:', err)
    });
  }
}
