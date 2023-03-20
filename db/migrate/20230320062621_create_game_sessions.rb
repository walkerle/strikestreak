class CreateGameSessions < ActiveRecord::Migration[7.0]
  def change
    create_table :game_sessions do |t|
      t.belongs_to :overall_stat, null: false, foreign_key: true
      t.string :date
      t.integer :number_of_games
      t.integer :pinfall
      t.integer :average
      t.integer :high_score
      t.integer :low_score
      t.integer :strikes
      t.integer :spares
      t.integer :open_frames
      t.string :notes

      t.timestamps
    end
  end
end
