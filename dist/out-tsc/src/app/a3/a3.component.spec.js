import { async, TestBed } from '@angular/core/testing';
import { A3Component } from './a3.component';
describe('A3Component', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [A3Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(A3Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=a3.component.spec.js.map