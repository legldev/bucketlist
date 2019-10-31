import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private goals = new BehaviorSubject<string[]>([
    'Watch the sunrise from a new city',
    'Learn to cook a signature dish',
    'Take a week off without checking email'
  ]);

  goal = this.goals.asObservable();

  changeGoal(goal: string[]) {
    this.goals.next(goal);
  }
}
