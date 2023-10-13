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

  # Checks the GET request, if not found in above backend routes, redirects to fallback controller index action to render frontend html
  get '*path', to: 'fallback#index', constraints: -> (req) { !req.xhr? && req.format.html? } # stabby lambda syntax ("arrow" function notation)
  
end
