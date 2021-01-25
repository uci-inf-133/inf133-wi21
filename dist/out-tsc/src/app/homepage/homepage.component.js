import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(http) {
        var _this = this;
        this.http = http;
        this.assignments_and_quizzes = [];
        this.lectures = [];
        this.http.get('./assets/calendar.json').subscribe(function (calendar) {
            _this.parseCalendar(calendar);
        });
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent.prototype.parseCalendar = function (calendar) {
        var events = calendar['events'];
        //Add date string to each event
        events.map(function (e) {
            e['dateStr'] = moment(e['date']).format('ddd MMM D');
            return e;
        });
        //Filter by type
        this.assignments_and_quizzes = events.filter(function (e) { return e['type'] == 'assignment' || e['type'] == 'quiz'; });
        this.lectures = events.filter(function (e) { return e['type'] == 'lecture' || e['type'] == 'discussion'; });
        //Filter by past/future
        this.assignments_and_quizzes = this.assignments_and_quizzes.filter(function (e) { return moment().isSameOrBefore(moment(e['date']), 'days'); }).slice(0, 2);
        this.lectures = this.lectures.filter(function (e) { return moment().isSameOrAfter(moment(e['date']), 'days'); });
        this.lectures = this.lectures.reverse().slice(0, 5);
    };
    HomepageComponent = __decorate([
        Component({
            selector: 'app-homepage',
            templateUrl: './homepage.component.html',
            styleUrls: ['./homepage.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], HomepageComponent);
    return HomepageComponent;
}());
export { HomepageComponent };
//# sourceMappingURL=homepage.component.js.map