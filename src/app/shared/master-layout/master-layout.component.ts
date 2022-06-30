import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.css']
})
export class MasterLayoutComponent implements OnInit {

  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;

  ///  User Id   ///
  Id!: string | null;
  ///  User first name   ///
  firstName!: string;
  ///  User last name   ///
  lastName!: string;
  /// user fullName ///
  fullName!: string;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private route: ActivatedRoute,

  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  submitLogout() {
    //console.log('logout');

    // this._loginService.logoutAPI().subscribe(() => {
    // //   console.log(data);

    //   //to delete data from local storage
    //   localStorage.removeItem('token');

    //   // navigate to login page
    //   //   this.router.navigateByUrl('/auth/login');
    // });


  }

  ngOnInit(): void {

    this.getUserInfo();
    // this.route.params.subscribe(params=>{
    //   this.userId=params.id;
    // })
  }

  getUserInfo(): void {
    if (localStorage.getItem('userId') !== null) {
      this.Id = localStorage.getItem('userId');
    } else {
      this.Id = '0';
    }


  }

}
