import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
var A3Component = /** @class */ (function () {
    function A3Component(http) {
        var _this = this;
        this.http = http;
        this.http.get('./assets/calendar.json').subscribe(function (calendar) {
            _this.parseAssignment(calendar, 'A3');
        });
    }
    A3Component.prototype.ngOnInit = function () {
    };
    A3Component.prototype.parseAssignment = function (calendar, assignment) {
        var events = calendar['events'];
        //Filter to this assignment
        this.assignment = events.filter(function (e) { return e['type'] == 'assignment' && e['title'] == assignment; })[0];
        //Set due date
        var due = moment(this.assignment['date'] + " " + calendar['defaults'].assignment.due);
        this.assignment['due'] = due.format('dddd, MMMM Do, h:mma');
    };
    A3Component = __decorate([
        Component({
            selector: 'app-a3',
            templateUrl: './a3.component.html',
            styleUrls: ['./a3.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], A3Component);
    return A3Component;
}());
export { A3Component };
//# sourceMappingURL=a3.component.js.map