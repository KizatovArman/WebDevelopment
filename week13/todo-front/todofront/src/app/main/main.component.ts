import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { TaskList, Task } from '../shared/models/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public task_lists: TaskList[] = [];
  public loading = false;
  public name: any = '';
  public logged = false;

  public login: any ='';
  public password: any='';

  public tasks: Task[] = [];

  constructor(private provider: ProviderService) { }

  ngOnInit() {

    const token = localStorage.getItem('token');
    if(token){
      this.logged = true;
    }

    if(this.logged){
      this.provider.getTaskLists().then(res=>{
        this.task_lists = res;
        this.loading = true;
      });
    }
  }

  getTasks(task_lists: TaskList){
    this.provider.getTasks(task_lists).then(res=>{
      this.tasks = res;
    })
  }

  createTaskList(){
    if(this.name !== ''){
      this.provider.createTaskList(this.name).then(res=>{
        this.name = '';
        this.task_lists.push(res);
      });
    }
  }

  updateTaskList(tl: TaskList){
    this.provider.updateTaskList(tl).then(res=>{
      console.log(tl.name + 'has been updated!');
    })
  }

  deleteTaskList(tl: TaskList){
    this.provider.deleteTaskList(tl.id).then(res=>{
      console.log(tl.name + 'has been deleted!');
      this.provider.getTaskLists().then(r =>{
        this.task_lists = r;
      });
    });
  }

  auth(){
    if(this.login !== '' && this.password !==''){
      this.provider.auth(this.login,this.password).then(res=>{
        localStorage.setItem('token',res.token);

        this.logged = true;

        this.provider.getTaskLists().then(r=>{
          this.task_lists = r;
          this.loading = true;
        });

      });
    }
  }

  logout(){
    this.provider.logout().then(res=>{
      localStorage.clear();
      this.logged = false;
    });
  }

}
