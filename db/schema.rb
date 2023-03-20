# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_20_063418) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "game_sessions", force: :cascade do |t|
    t.bigint "overall_stat_id", null: false
    t.string "date"
    t.integer "number_of_games"
    t.integer "pinfall"
    t.integer "average"
    t.integer "high_score"
    t.integer "low_score"
    t.integer "strikes"
    t.integer "spares"
    t.integer "open_frames"
    t.string "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["overall_stat_id"], name: "index_game_sessions_on_overall_stat_id"
  end

  create_table "games", force: :cascade do |t|
    t.bigint "game_session_id"
    t.integer "first_frame_1"
    t.integer "first_frame_2"
    t.integer "second_frame_1"
    t.integer "second_frame_2"
    t.integer "third_frame_1"
    t.integer "third_frame_2"
    t.integer "fourth_frame_1"
    t.integer "fourth_frame_2"
    t.integer "fifth_frame_1"
    t.integer "fifth_frame_2"
    t.integer "sixth_frame_1"
    t.integer "sixth_frame_2"
    t.integer "seventh_frame_1"
    t.integer "seventh_frame_2"
    t.integer "eighth_frame_1"
    t.integer "eighth_frame_2"
    t.integer "ninth_frame_1"
    t.integer "ninth_frame_2"
    t.integer "tenth_frame_1"
    t.integer "tenth_frame_2"
    t.integer "tenth_frame_3"
    t.integer "score"
    t.string "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_session_id"], name: "index_games_on_game_session_id"
  end

  create_table "join_friends", force: :cascade do |t|
    t.integer "friender_id"
    t.integer "friendee_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "overall_stats", force: :cascade do |t|
    t.bigint "user_id"
    t.integer "total_games"
    t.integer "total_pinfall"
    t.integer "average"
    t.integer "high_score"
    t.integer "low_score"
    t.integer "total_strikes"
    t.integer "total_spares"
    t.integer "total_open_frames"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_overall_stats_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "game_sessions", "overall_stats"
  add_foreign_key "overall_stats", "users"
end
