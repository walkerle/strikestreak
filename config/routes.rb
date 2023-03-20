Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create]

  # route to test your configuration, comment out for final product
  get '/hello', to: 'application#hello_world'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#me'
  
end
