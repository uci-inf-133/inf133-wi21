import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
var AssignmentsComponent = /** @class */ (function () {
    function AssignmentsComponent(http) {
        var _this = this;
        this.http = http;
        this.assignments = [];
        this.http.get('./assets/calendar.json').subscribe(function (calendar) {
            _this.parseCalendar(calendar);
        });
    }
    AssignmentsComponent.prototype.ngOnInit = function () {
    };
    AssignmentsComponent.prototype.parseCalendar = function (calendar) {
        var events = calendar['events'];
        //Add date string to each event
        events.map(function (e) {
            var hhmm = calendar['defaults']['assignment']['due'].split(":");
            var dueDate = moment(e['date']);
            dueDate.hours(hhmm[0]);
            dueDate.minutes(hhmm[1]);
            e['due'] = dueDate.format('dddd, MMMM Do, h:mma');
            return e;
        });
        //Filter by type
        this.assignments = events.filter(function (e) { return e['type'] == 'assignment'; });
    };
    AssignmentsComponent = __decorate([
        Component({
            selector: 'app-assignments',
            templateUrl: './assignments.component.html',
            styleUrls: ['./assignments.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], AssignmentsComponent);
    return AssignmentsComponent;
}());
export { AssignmentsComponent };
//# sourceMappingURL=assignments.component.js.map