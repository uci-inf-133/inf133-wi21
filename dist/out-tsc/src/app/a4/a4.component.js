import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
var A4Component = /** @class */ (function () {
    function A4Component(http) {
        var _this = this;
        this.http = http;
        this.http.get('./assets/calendar.json').subscribe(function (calendar) {
            _this.parseAssignment(calendar, 'A4');
        });
    }
    A4Component.prototype.ngOnInit = function () {
    };
    A4Component.prototype.parseAssignment = function (calendar, assignment) {
        var events = calendar['events'];
        //Filter to this assignment
        this.assignment = events.filter(function (e) { return e['type'] == 'assignment' && e['title'] == assignment; })[0];
        //Set due date
        var due = moment(this.assignment['date'] + " " + calendar['defaults'].assignment.due);
        this.assignment['due'] = due.format('dddd, MMMM Do, h:mma');
    };
    A4Component = __decorate([
        Component({
            selector: 'app-a4',
            templateUrl: './a4.component.html',
            styleUrls: ['./a4.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], A4Component);
    return A4Component;
}());
export { A4Component };
//# sourceMappingURL=a4.component.js.map