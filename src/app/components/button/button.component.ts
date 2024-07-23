import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
/**
 * @Input text? => recebe um text como uma prop (formato string), refere-se ao texto que vai aparecer no botão
 * @Input color? => recebe um color como uma prop (formato string), refere-se a cor o botão terá
 * @Input btnClick => instancia-se um emissor de eventos (EventEmitter). Dispara um sinalizador para disparar a chamada anexada
 */
export class ButtonComponent {
  @Input() text?: string;
  @Input() color?: string;
  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
