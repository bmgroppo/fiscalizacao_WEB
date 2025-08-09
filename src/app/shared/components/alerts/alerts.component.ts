import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsService, Alert } from '../../../services/alerts.service';
import { Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-alerts',
  imports: [CommonModule],
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms ease-in', style({ transform: 'translateX(0%)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class AlertsComponent implements OnInit, OnDestroy {
  alerts: Alert[] = [];
  private alertsSubscription?: Subscription;

  constructor(
    public alertsService: AlertsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.alertsSubscription = this.alertsService.alerts$.subscribe(
      alerts => {
        this.alerts = alerts;
        // Força a detecção de mudanças
        this.cdr.detectChanges();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.alertsSubscription) {
      this.alertsSubscription.unsubscribe();
    }
  }

  closeAlert(id: string): void {
    this.alertsService.removeAlert(id);
  }

  getAlertIcon(type: Alert['type']): string {
    switch (type) {
      case 'success': return 'check_circle';
      case 'error': return 'error';
      case 'warning': return 'warning';
      case 'info': return 'info';
      default: return 'info';
    }
  }

  trackByFn(index: number, alert: Alert): string {
    return alert.id;
  }
}
