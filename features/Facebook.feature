Feature: Validate Facebook Login

@regression
 Scenario:  Login with validate Credientiasls

 Given Login a Facebook application with valid credientials "navay@gmail.com" and "navya096"
 When  Click on login button
 Then vertify user is able to login successfully