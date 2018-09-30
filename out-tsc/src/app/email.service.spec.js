import { TestBed } from '@angular/core/testing';
import { EmailService } from './email.service';
describe('EmailService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(EmailService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=email.service.spec.js.map