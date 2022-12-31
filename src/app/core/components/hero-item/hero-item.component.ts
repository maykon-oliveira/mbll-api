import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroData } from 'src/app/services/model/list-response';

@Component({
  selector: 'app-hero-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroItemComponent {
  @Input()
  hero!: HeroData;
}
