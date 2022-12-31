import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroItemComponent } from '../hero-item/hero-item.component';
import { MBLLService } from 'src/app/services/mbll.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [CommonModule, HeroItemComponent],
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroListComponent {
  herosResponse$ = this.mbllService.findAll();
  heros$ = this.herosResponse$.pipe(
    map(
      ({
        data: {
          hero_data: { type_0, type_1, type_2, type_3, type_4, type_5, type_6 },
        },
      }) => [
        ...type_0,
        ...type_1,
        ...type_2,
        ...type_3,
        ...type_4,
        ...type_5,
        ...type_6,
      ]
    )
  );

  constructor(private mbllService: MBLLService) {}
}
