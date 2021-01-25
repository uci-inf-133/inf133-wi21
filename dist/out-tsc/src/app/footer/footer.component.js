import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import * as moment from 'moment';
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = moment().year();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Component({
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map