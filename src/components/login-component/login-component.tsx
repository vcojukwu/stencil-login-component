import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'login-component',
  styleUrl: 'login-component.css',
  shadow: true
})
export class LoginComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
