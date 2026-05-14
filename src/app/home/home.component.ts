import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataService } from '../data.service';

type Language = 'en' | 'es';

interface HomeCopy {
  addButton: string;
  counterAria: string;
  doneButton: string;
  emptyState: string;
  eyebrow: string;
  headline: string;
  itemLabel: string;
  itemsLabel: string;
  listAria: string;
  listTitle: string;
  newGoalLabel: string;
  placeholder: string;
  removeAria: string;
  totalLabel: string;
}

@Component({
  selector: 'app-home',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' }
  ];

  readonly copy: Record<Language, HomeCopy> = {
    en: {
      addButton: 'Add item',
      counterAria: 'Bucket list item count',
      doneButton: 'Done',
      emptyState: 'Start with one thing you cannot stop thinking about.',
      eyebrow: 'Bucket list',
      headline: 'Things worth making time for.',
      itemLabel: 'item',
      itemsLabel: 'items',
      listAria: 'Your bucket list',
      listTitle: 'Your list',
      newGoalLabel: 'New goal',
      placeholder: 'See the northern lights',
      removeAria: 'Remove item',
      totalLabel: 'total'
    },
    es: {
      addButton: 'Agregar',
      counterAria: 'Cantidad de objetivos en la bucket list',
      doneButton: 'Listo',
      emptyState: 'Empezá con eso que no podés dejar de imaginar.',
      eyebrow: 'Bucket list',
      headline: 'Cosas por las que vale hacer tiempo.',
      itemLabel: 'objetivo',
      itemsLabel: 'objetivos',
      listAria: 'Tu bucket list',
      listTitle: 'Tu lista',
      newGoalLabel: 'Nuevo objetivo',
      placeholder: 'Ver auroras boreales',
      removeAria: 'Eliminar objetivo',
      totalLabel: 'en total'
    }
  };

  language: Language = 'en';
  goalText = '';
  goals: string[] = [];

  constructor(private data: DataService) {}

  get itemCount(): number {
    return this.goals.length;
  }

  get text(): HomeCopy {
    return this.copy[this.language];
  }

  ngOnInit() {
    this.data.goal.subscribe((goals) => {
      this.goals = goals;
    });
  }

  addItem() {
    const nextGoal = this.goalText.trim();

    if (!nextGoal) {
      return;
    }

    this.goals = [nextGoal, ...this.goals];
    this.goalText = '';
    this.data.changeGoal(this.goals);
  }

  removeItem(index: number) {
    this.goals = this.goals.filter((_, itemIndex) => itemIndex !== index);
    this.data.changeGoal(this.goals);
  }

  setLanguage(language: Language) {
    this.language = language;
  }
}
