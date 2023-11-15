import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';

fdescribe('AuthService', () => {
    let authService: AuthService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
        });

        authService = TestBed.inject(AuthService);
    });

    it('AuthService should be defined', () => {

        expect(authService).toBeTruthy();
    });
})