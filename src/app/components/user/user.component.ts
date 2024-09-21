import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faRemove } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'dob'];

  editicon = faEdit;
  deleteicon = faRemove;
  message!: string;
  userEmail!: String;

  userData: any;

  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.message = this.route.snapshot.queryParams['message'] || '';
      }
    });
  }


  ngOnInit(): void {
    

    this.getUser();
  }

  getUser() {
    return this.service.getUsers().subscribe(data => {
      this.userData = data
    })
  }

  delete(id: number) {
    return this.service.delete(id).subscribe(response => {
      console.log(response)
      this.getUser();
    })
  }

  edit(id: number) {
    this.router.navigate([`/user/update/${id}`])
  }


}
