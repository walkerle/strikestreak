Rails.application.routes.draw do
  resources :stats
  resources :users, only: [:index, :show]
  resources :stats, only: [:index, :show]
  resources :game_sessions
  resources :games
  resources :join_friends, except: [:index, :show, :update]

  post '/signup', to: 'users#create'
  get '/me', to: 'sessions#me'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
end
