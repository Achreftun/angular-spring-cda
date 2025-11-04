import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification';
import { SenderMessage } from '../../models/sender-message';

@Component({
  selector: 'app-participant',
  imports: [FormsModule],
  templateUrl: './participant.html',
  styleUrl: './participant.css'
})
export class ParticipantComponent implements OnInit {
  @Input() nom = ''
  message = ""
  senderMessages: SenderMessage[] =[]

  constructor(private notify: NotificationService) {}
  ngOnInit(): void {
    this.notify.accederNotification().subscribe(response => {
      if (response.sender != this.nom) {
        this.senderMessages.push(response)
      }
    })
  }
  envoyer() {
    this.notify.envoyerNotification({sender: this.nom, message: this.message})
    this.message = ''
  }
}
