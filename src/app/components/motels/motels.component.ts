import {Component, OnInit} from '@angular/core';
import {MotelService} from '../../motel.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-motels',
  templateUrl: './motels.component.html',
  styleUrls: ['./motels.component.css']
})
export class MotelsComponent implements OnInit {
  motels = [];

  constructor(private motelService: MotelService,
              private activateRoute: ActivatedRoute,
              private route: Router,
  ) {
  }

  ngOnInit() {
    this.motelService.getListMotel().subscribe(data => {
      this.motels = data;
    });
  }

  destroyMotel(id) {
    this.motelService.destroyMotel(id).subscribe(data => {
      const arr = _.filter(this.motels,(v) => v.id !== data.id);
      this.motels = arr;
    });
  }
}
