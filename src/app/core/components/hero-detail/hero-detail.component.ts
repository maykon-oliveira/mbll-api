import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MBLLService } from 'src/app/services/mbll.service';
import { map, mergeMap, tap } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent implements OnInit {
  hero$ = this.route.paramMap.pipe(
    map((params) => params.get('id')),
    mergeMap((id) => this.mblService.getDetailsById(id!)),
    map(({ data }) => data)
  );

  constructor(
    private readonly mblService: MBLLService,
    private readonly route: ActivatedRoute
  ) {}
  ngOnInit(): void {}
}
