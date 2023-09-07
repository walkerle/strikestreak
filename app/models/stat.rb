class Stat < ApplicationRecord
  belongs_to :user
  has_many :game_sessions

  def total_games # method_name = attribute_name??
    self.game_sessions.map{|session| session.number_of_games}.sum
  end

  def total_pinfall
    self.game_sessions.map {|session| session.pinfall}.sum
  end

  def average
    (total_games == 0 ? 0 : (total_pinfall / total_games))
  end

  def high_score
    (total_games == 0 ? 0 : self.game_sessions.map{|session| session.high_score}.max)
  end

  def low_score
    (total_games == 0 ? 0 : self.game_sessions.map{|session| session.low_score}.min)
  end

  def total_strikes
    self.game_sessions.map{|session| session.strikes}.sum
  end

  def total_spares
    self.game_sessions.map{|session| session.spares}.sum
  end

  def total_open_frames
    self.game_sessions.map{|session| session.open_frames}.sum
  end

end
