Rails.application.routes.draw do
  resources :users, only: [:index, :show]
  resources :overall_stats, only: [:index, :show]
  resources :game_sessions
  resources :games
  resources :join_friends, except: [:index, :show, :update]

  get '/me', to: 'sessions#me'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  
end
