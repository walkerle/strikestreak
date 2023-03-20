class CreateJoinFriends < ActiveRecord::Migration[7.0]
  def change
    create_table :join_friends do |t|
      t.integer :friender_id, foreign_key: true
      t.integer :friendee_id, foreign_key: true

      t.timestamps
    end
  end
end
