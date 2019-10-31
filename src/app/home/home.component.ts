import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly btnText = 'Add item';

  goalText = '';
  goals: string[] = [];

  constructor(private data: DataService) {}

  get itemCount(): number {
    return this.goals.length;
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
}
