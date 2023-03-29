Rails.application.routes.draw do
  resources :games
  resources :game_sessions do
    resources :games
  end
  resources :overall_stats do
    resources :game_sessions
  end
  resources :join_friends
  resources :users, only: [:index, :show, :create] do
    resources :overall_stats
    resources :join_friends
  end

  get '/me', to: 'users#me'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  
end
