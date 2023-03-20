class CreateOverallStats < ActiveRecord::Migration[7.0]
  def change
    create_table :overall_stats do |t|
      t.belongs_to :user, foreign_key: true
      t.integer :total_games
      t.integer :total_pinfall
      t.integer :average
      t.integer :high_score
      t.integer :low_score
      t.integer :total_strikes
      t.integer :total_spares
      t.integer :total_open_frames

      t.timestamps
    end
  end
end
