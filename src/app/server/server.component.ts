import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  // variables for 1st line in server.component.html
  serverId = 0;
  serverStatus = '';

  // variables for other lines in server.component.html
  serverName = '';
  serverCreationStatus = '';
  serverCreated = false;
  servers = [];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  ngOnInit() {}

  onCreateServer() {
    if (this.serverCreated) {
      this.serverCreated = false;
      this.serverCreationStatus = `No server was created!`;
    } else {
      this.servers.push(this.serverName);
      this.serverCreated = true;
      this.serverCreationStatus = `Server was created with name ${this.serverName}!`;
    }
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
