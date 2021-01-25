import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
var A0Component = /** @class */ (function () {
    function A0Component(http) {
        var _this = this;
        this.http = http;
        this.http.get('./assets/calendar.json').subscribe(function (calendar) {
            _this.parseAssignment(calendar, 'A0');
        });
    }
    A0Component.prototype.ngOnInit = function () {
    };
    A0Component.prototype.parseAssignment = function (calendar, assignment) {
        var events = calendar['events'];
        //Filter to this assignment
        this.assignment = events.filter(function (e) { return e['type'] == 'assignment' && e['title'] == assignment; })[0];
        //Set due date
        var due = moment(this.assignment['date'] + " " + calendar['defaults'].assignment.due);
        this.assignment['due'] = due.format('dddd, MMMM Do, h:mma');
    };
    A0Component = __decorate([
        Component({
            selector: 'app-a0',
            templateUrl: './a0.component.html',
            styleUrls: ['./a0.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], A0Component);
    return A0Component;
}());
export { A0Component };
//# sourceMappingURL=a0.component.js.map