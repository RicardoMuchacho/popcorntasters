import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  constructor(private router: Router) { }
  
  ngOnInit() {
  }
  
  username:string;
  name:string;
  password:string;
  
  register(){

    const username = this.username;
    const name = this.name;
    const password = this.password;
    
    fetch('http://localhost:3000/auth/register',{
    method: 'POST',
    headers: new Headers({
      // Encabezados
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(
      {  
        "username": username,
        "name": name,
        "password": password
      })
      
    }).then(response=>{
      console.log(response);
      if (response.redirected == true)
      {
        window.location.replace(response.url)
      }
      return response.json()
    }).then(r =>{
      console.log(r);
    }).catch(e => console.log(e))
    
    //var p = document.createElement("p");
    //cont1.appendChild(p);
    //p.innerHTML = "Succesfully updated";
    
    this.router.navigate(['/login']);
  }
}

/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
  }
  
}*/