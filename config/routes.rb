Rails.application.routes.draw do
  resources :users

  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  post '/login', to: 'sessions#create'
  
end
