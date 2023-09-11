class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.belongs_to :game_session
      t.integer :f1b1
      t.integer :f1b2
      t.integer :f2b1
      t.integer :f2b2
      t.integer :f3b1
      t.integer :f3b2
      t.integer :f4b1
      t.integer :f4b2
      t.integer :f5b1
      t.integer :f5b2
      t.integer :f6b1
      t.integer :f6b2
      t.integer :f7b1
      t.integer :f7b2
      t.integer :f8b1
      t.integer :f8b2
      t.integer :f9b1
      t.integer :f9b2
      t.integer :f10b1
      t.integer :f10b2
      t.integer :f10b3
      t.integer :score
      t.integer :strikes
      t.integer :spares
      t.integer :open_frames
      t.string :notes

      t.timestamps
    end
  end
end
