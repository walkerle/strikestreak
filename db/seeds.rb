puts "☠️ Deleting old data..."
User.destroy_all
JoinFriend.destroy_all

# Seed Data
puts "🌱 Seeding data..."

puts "Seeding Users..."
User.create(username: "Charlie", email: "charlie@gmail.com", password: "1234")
User.create(username: "Mac", email: "mac@gmail.com", password: "1234")
User.create(username: "Dennis", email: "dennis@gmail.com", password: "1234")
User.create(username: "Dee", email: "dee@gmail.com", password: "1234")
User.create(username: "Frank", email: "frank@gmail.com", password: "1234")

puts "Seeding JoinFriends..."
JoinFriend.create(friender_id: 1, friendee_id: 2)
JoinFriend.create(friender_id: 1, friendee_id: 4)
JoinFriend.create(friender_id: 1, friendee_id: 5)
JoinFriend.create(friender_id: 2, friendee_id: 1)
JoinFriend.create(friender_id: 2, friendee_id: 3)
JoinFriend.create(friender_id: 3, friendee_id: 1)
JoinFriend.create(friender_id: 3, friendee_id: 2)
JoinFriend.create(friender_id: 5, friendee_id: 1)

puts "Seeding OverallStats..."
OverallStat.create(user_id: 1, total_games: 3, total_pinfall: 500, average: 166, high_score: 171, low_score: 159, total_strikes: 9, total_spares: 12, total_open_frames: 9)
OverallStat.create(user_id: 2, total_games: 1, total_pinfall: 170, average: 170, high_score: 170, low_score: 170, total_strikes: 2, total_spares: 6, total_open_frames: 2)
OverallStat.create(user_id: 3, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 4, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 5, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)

puts "Seeding GameSessions..."
GameSession.create(overall_stat_id: 1, date: "03/11/2023", number_of_games: 2, pinfall: 341, average: 170, high_score: 171, low_score: 170, strikes: 6, spares: 9, open_frames: 5, notes: "Charlie's first session")
GameSession.create(overall_stat_id: 1, date: "03/04/2023", number_of_games: 1, pinfall: 159, average: 159, high_score: 159, low_score: 159, strikes: 3, spares: 3, open_frames: 4, notes: "Charlie's second session")
GameSession.create(overall_stat_id: 1, date: "03/04/2023", number_of_games: 1, pinfall: 159, average: 159, high_score: 159, low_score: 159, strikes: 3, spares: 3, open_frames: 4, notes: "Charlie's second session")
GameSession.create(overall_stat_id: 1, date: "03/04/2023", number_of_games: 1, pinfall: 159, average: 159, high_score: 159, low_score: 159, strikes: 3, spares: 3, open_frames: 4, notes: "Charlie's second session")
GameSession.create(overall_stat_id: 1, date: "03/04/2023", number_of_games: 1, pinfall: 159, average: 159, high_score: 159, low_score: 159, strikes: 3, spares: 3, open_frames: 4, notes: "Charlie's second session")
GameSession.create(overall_stat_id: 2, date: "03/05/2023", number_of_games: 1, pinfall: 170, average: 170, high_score: 170, low_score: 170, strikes: 2, spares: 6, open_frames: 2, notes: "Mac's session")
GameSession.create(overall_stat_id: 3, date: "01/01/2023", number_of_games: 0, pinfall: 0, average: 0, high_score: 0, low_score: 0, strikes: 0, spares: 0, open_frames: 0, notes: "Dennis' session")
GameSession.create(overall_stat_id: 4, date: "01/01/2023", number_of_games: 0, pinfall: 0, average: 0, high_score: 0, low_score: 0, strikes: 0, spares: 0, open_frames: 0, notes: "Dee's session")
GameSession.create(overall_stat_id: 5, date: "01/01/2023", number_of_games: 0, pinfall: 0, average: 0, high_score: 0, low_score: 0, strikes: 0, spares: 0, open_frames: 0, notes: "Frank's session")

puts "Seeding Games..."
Game.create(game_session_id: 1, first_frame_1: 9, first_frame_2: 1, second_frame_1: 10, second_frame_2: 0, third_frame_1: 8, third_frame_2: 1, fourth_frame_1: 6, fourth_frame_2: 2, fifth_frame_1: 10, fifth_frame_2: 0, sixth_frame_1: 10, sixth_frame_2: 0, seventh_frame_1: 9, seventh_frame_2: 0, eighth_frame_1: 10, eighth_frame_2: 0, ninth_frame_1: 7, ninth_frame_2: 3, tenth_frame_1: 9, tenth_frame_2: 1, tenth_frame_3: 5, score: 171, notes: "Decent game")
Game.create(game_session_id: 1, first_frame_1: 10, first_frame_2: 0, second_frame_1: 8, second_frame_2: 1, third_frame_1: 9, third_frame_2: 1, fourth_frame_1: 9, fourth_frame_2: 1, fifth_frame_1: 9, fifth_frame_2: 0, sixth_frame_1: 9, sixth_frame_2: 1, seventh_frame_1: 9, seventh_frame_2: 1, eighth_frame_1: 10, eighth_frame_2: 0, ninth_frame_1: 6, ninth_frame_2: 4, tenth_frame_1: 8, tenth_frame_2: 2, tenth_frame_3: 8, score: 170, notes: "Another decent game")
Game.create(game_session_id: 2, first_frame_1: 7, first_frame_2: 2, second_frame_1: 8, second_frame_2: 2, third_frame_1: 7, third_frame_2: 2, fourth_frame_1: 8, fourth_frame_2: 1, fifth_frame_1: 7, fifth_frame_2: 0, sixth_frame_1: 10, sixth_frame_2: 0, seventh_frame_1: 10, seventh_frame_2: 0, eighth_frame_1: 9, eighth_frame_2: 1, ninth_frame_1: 9, ninth_frame_2: 1, tenth_frame_1: 10, tenth_frame_2: 9, tenth_frame_3: 1, score: 159, notes: "Okay game")
Game.create(game_session_id: 3, first_frame_1: 10, first_frame_2: 0, second_frame_1: 8, second_frame_2: 1, third_frame_1: 9, third_frame_2: 1, fourth_frame_1: 9, fourth_frame_2: 1, fifth_frame_1: 9, fifth_frame_2: 0, sixth_frame_1: 9, sixth_frame_2: 1, seventh_frame_1: 9, seventh_frame_2: 1, eighth_frame_1: 10, eighth_frame_2: 0, ninth_frame_1: 6, ninth_frame_2: 4, tenth_frame_1: 8, tenth_frame_2: 2, tenth_frame_3: 8, score: 170, notes: "Mac's game")
Game.create(game_session_id: 4, first_frame_1: 5, first_frame_2: 5, second_frame_1: 5, second_frame_2: 5, third_frame_1: 5, third_frame_2: 5, fourth_frame_1: 5, fourth_frame_2: 5, fifth_frame_1: 5, fifth_frame_2: 5, sixth_frame_1: 5, sixth_frame_2: 5, seventh_frame_1: 5, seventh_frame_2: 5, eighth_frame_1: 5, eighth_frame_2: 5, ninth_frame_1: 5, ninth_frame_2: 5, tenth_frame_1: 5, tenth_frame_2: 5, tenth_frame_3: 5, score: 150, notes: "Dennis' game")
Game.create(game_session_id: 5, first_frame_1: 5, first_frame_2: 5, second_frame_1: 5, second_frame_2: 5, third_frame_1: 5, third_frame_2: 5, fourth_frame_1: 5, fourth_frame_2: 5, fifth_frame_1: 5, fifth_frame_2: 5, sixth_frame_1: 5, sixth_frame_2: 5, seventh_frame_1: 5, seventh_frame_2: 5, eighth_frame_1: 5, eighth_frame_2: 5, ninth_frame_1: 5, ninth_frame_2: 5, tenth_frame_1: 5, tenth_frame_2: 5, tenth_frame_3: 5, score: 150, notes: "Dee's game")
Game.create(game_session_id: 6, first_frame_1: 5, first_frame_2: 5, second_frame_1: 5, second_frame_2: 5, third_frame_1: 5, third_frame_2: 5, fourth_frame_1: 5, fourth_frame_2: 5, fifth_frame_1: 5, fifth_frame_2: 5, sixth_frame_1: 5, sixth_frame_2: 5, seventh_frame_1: 5, seventh_frame_2: 5, eighth_frame_1: 5, eighth_frame_2: 5, ninth_frame_1: 5, ninth_frame_2: 5, tenth_frame_1: 5, tenth_frame_2: 5, tenth_frame_3: 5, score: 150, notes: "Frank's game")

puts "✅ Done seeding!"
