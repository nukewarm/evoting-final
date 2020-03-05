import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Injectable()
export class Navigate {

    private firstNavigation = true; //every browser refresh or change in URL is a new navigation

    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.firstNavigation) { //this is first access by user
            this.firstNavigation = false;
            if(route.component != HomeComponent) { //first component generated is not AciStoreComponent; i.e. user is trying to directly access the forbidden URL before visiting website and going through the necessary steps
                this.router.navigateByUrl("home");
                return false;
            }
        }
        return true;
    }

}