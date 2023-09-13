Rails.application.routes.draw do
  resources :users, only: [:index, :show]
  resources :stats, only: [:index, :show]
  resources :game_sessions
  resources :games
  resources :join_friends, except: [:show, :update]

  post '/signup', to: 'users#create'
  get '/me', to: 'sessions#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Redirect get requests to frontend client side routes
  get '*path', to: 'fallback#index', constraints:-> (req) { !req.xhr? && req.format.html? }
  
end
