import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
var A2Component = /** @class */ (function () {
    function A2Component(http) {
        var _this = this;
        this.http = http;
        this.http.get('./assets/calendar.json').subscribe(function (calendar) {
            _this.parseAssignment(calendar, 'A2');
        });
    }
    A2Component.prototype.ngOnInit = function () {
    };
    A2Component.prototype.parseAssignment = function (calendar, assignment) {
        var events = calendar['events'];
        //Filter to this assignment
        this.assignment = events.filter(function (e) { return e['type'] == 'assignment' && e['title'] == assignment; })[0];
        //Set due date
        var due = moment(this.assignment['date'] + " " + calendar['defaults'].assignment.due);
        this.assignment['due'] = due.format('dddd, MMMM Do, h:mma');
    };
    A2Component = __decorate([
        Component({
            selector: 'app-a2',
            templateUrl: './a2.component.html',
            styleUrls: ['./a2.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], A2Component);
    return A2Component;
}());
export { A2Component };
//# sourceMappingURL=a2.component.js.map