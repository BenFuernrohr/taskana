import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistComponent } from './tasklist.component';
import { TaskListToolbarComponent } from './tasklist-toolbar/tasklist-toolbar.component';
import { SvgIconComponent, SvgIconRegistryService } from 'angular-svg-icon';
import { PaginationComponent } from 'app/shared/pagination/pagination.component';
import { CodeComponent } from '../components/code/code.component';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule, ComponentLoaderFactory, PositioningService } from 'ngx-bootstrap';
import { SortComponent } from 'app/shared/sort/sort.component';
import { FilterComponent } from 'app/shared/filter/filter.component';
import { SpreadNumberPipe } from 'app/shared/pipes/spreadNumber/spread-number';
import { MapValuesPipe } from 'app/shared/pipes/mapValues/map-values.pipe';
import { IconTypeComponent } from 'app/administration/components/type-icon/icon-type.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WorkplaceService } from '../services/workplace.service';
import { AlertService } from 'app/services/alert/alert.service';
import { OrientationService } from 'app/services/orientation/orientation.service';
import { WorkbasketService } from 'app/services/workbasket/workbasket.service';
import { DomainService } from 'app/services/domain/domain.service';
import { RequestInProgressService } from 'app/services/requestInProgress/request-in-progress.service';
import { SelectedRouteService } from 'app/services/selected-route/selected-route';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
	selector: 'taskana-dummy-detail',
	template: 'dummydetail'
})
export class DummyDetailComponent {
}

// TODO: test pending to test. Failing random
xdescribe('TasklistComponent', () => {
  let component: TasklistComponent;
  let fixture: ComponentFixture<TasklistComponent>;

  const routes: Routes = [
		{ path: '*', component: DummyDetailComponent }
	];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, TypeaheadModule, RouterTestingModule.withRoutes(routes),
        HttpClientModule, BrowserAnimationsModule],
      declarations: [TasklistComponent, TaskListToolbarComponent, SvgIconComponent,
        PaginationComponent, CodeComponent, SortComponent, FilterComponent,
        SpreadNumberPipe, MapValuesPipe, IconTypeComponent, DummyDetailComponent],
      providers: [TaskService, HttpClient, WorkplaceService, AlertService, OrientationService,
        WorkbasketService, DomainService, RequestInProgressService, SelectedRouteService,
        ComponentLoaderFactory, PositioningService, SvgIconRegistryService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
