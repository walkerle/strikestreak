class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.belongs_to :game_session
      t.integer :first_frame_1
      t.integer :first_frame_2
      t.integer :second_frame_1
      t.integer :second_frame_2
      t.integer :third_frame_1
      t.integer :third_frame_2
      t.integer :fourth_frame_1
      t.integer :fourth_frame_2
      t.integer :fifth_frame_1
      t.integer :fifth_frame_2
      t.integer :sixth_frame_1
      t.integer :sixth_frame_2
      t.integer :seventh_frame_1
      t.integer :seventh_frame_2
      t.integer :eighth_frame_1
      t.integer :eighth_frame_2
      t.integer :ninth_frame_1
      t.integer :ninth_frame_2
      t.integer :tenth_frame_1
      t.integer :tenth_frame_2
      t.integer :tenth_frame_3
      t.integer :score
      t.string :notes

      t.timestamps
    end
  end
end
