import { TestBed } from "@angular/core/testing"
import { LoginComponent } from "./login.component"
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { SharedModule } from "src/app/shared/shared.module"
import { AuthService } from '../../services/auth.service';
import { provideMockStore, MockStore } from "@ngrx/store/testing";

describe('LoginComponent', () => {
    let loginComponent : LoginComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [HttpClientTestingModule, SharedModule],
            providers: [ provideMockStore({}) ],
        });

        const fixture = TestBed.createComponent(LoginComponent);
        loginComponent = fixture.componentInstance;
    })

    it('Should create login component', () => {
        expect(loginComponent).toBeTruthy();
    })

    it('Should mark all fields with touched, if is invalid', () => {
        loginComponent.loginForm.patchValue({
            email: 'testexample',
            password: '',
        })

        loginComponent.login()
        expect(loginComponent.emailControl.touched).toBeTrue();
        expect(loginComponent.passwordControl.touched).toBeTrue();
    })

    it('Should call method login from AuthService, if the form is valid', () => {
        loginComponent.loginForm.patchValue({
            email: "admin@example.com",
            password: "admin",
        })

        const spyOnAuthServiceLogin = spyOn(
            (loginComponent as any).AuthService,
            'login'
            );

        loginComponent.login()
        
        expect(spyOnAuthServiceLogin).toHaveBeenCalled();
    })
})