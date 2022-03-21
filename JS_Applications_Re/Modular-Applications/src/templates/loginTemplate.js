import { html } from '../../node_modules/lit-html/lit-html.js'

export default () => html `
<form class="row g-3">
  <div class="col-auto">
    <label for="email" class="visually-hidden">Email</label>
    <input type="text" class="form-control" id="login-email" name="email" placeholder="Email">
  </div>
  <div class="col-auto">
    <label for="password" class="visually-hidden">Password</label>
    <input type="password" class="form-control" id="login-password" name="password" placeholder="Password">
  </div>
  <div class="col-auto">
    <input type="submit" class="btn btn-primary mb-3" value="Login">
  </div>
</form>
`