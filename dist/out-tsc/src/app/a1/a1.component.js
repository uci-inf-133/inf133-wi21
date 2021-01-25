import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
var A1Component = /** @class */ (function () {
    function A1Component(http) {
        var _this = this;
        this.http = http;
        this.http.get('./assets/calendar.json').subscribe(function (calendar) {
            _this.parseAssignment(calendar, 'A1');
        });
    }
    A1Component.prototype.ngOnInit = function () {
    };
    A1Component.prototype.parseAssignment = function (calendar, assignment) {
        var events = calendar['events'];
        //Filter to this assignment
        this.assignment = events.filter(function (e) { return e['type'] == 'assignment' && e['title'] == assignment; })[0];
        //Set due date
        var due = moment(this.assignment['date'] + " " + calendar['defaults'].assignment.due);
        this.assignment['due'] = due.format('dddd, MMMM Do, h:mma');
    };
    A1Component = __decorate([
        Component({
            selector: 'app-a1',
            templateUrl: './a1.component.html',
            styleUrls: ['./a1.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], A1Component);
    return A1Component;
}());
export { A1Component };
//# sourceMappingURL=a1.component.js.map