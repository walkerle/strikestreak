class GameSession < ApplicationRecord
  belongs_to :stat
  has_many :games, dependent: :destroy

  def number_of_games
    self.games.length
  end

  def pinfall
    self.games.sum{|game| game.score}
  end

  def average
    (number_of_games == 0 ? 0 : (pinfall / number_of_games))
  end

  def high_score
    (number_of_games == 0 ? 0 : self.games.map{|game| game.score}.max)
  end

  def low_score
    (number_of_games == 0 ? 0 : self.games.map{|game| game.score}.min)
  end

  def strikes
    self.games.map{|game| game.strikes}.sum
  end

  def spares
    self.games.map{|game| game.spares}.sum
  end

  def open_frames
    self.games.map{|game| game.open_frames}.sum
  end

end
