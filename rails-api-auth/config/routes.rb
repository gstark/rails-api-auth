Rails.application.routes.draw do
  get '/oauth2authorize' => 'authentication#oauth2authorize'
  get '/oauth2callback'  => 'authentication#oauth2callback'

  get '/calendar' => 'calendar#index'

  root 'authentication#root'
end
