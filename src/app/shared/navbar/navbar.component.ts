import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/interfaces/auth.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  public token!: string

  constructor(private authService: AuthService, private router: Router) {
    this.token = localStorage.getItem('token')!;
  }


  ngOnInit(): void {

  }




  get user():User | undefined {
    return this.authService.currentUser;

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
