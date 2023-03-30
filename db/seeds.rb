puts "☠️ Deleting old data..."
User.destroy_all
JoinFriend.destroy_all

# Seed Data
puts "🌱 Seeding data..."

puts "Seeding Users..."
User.create(username: "Walker", email: "walker@gmail.com", password: "1234")
User.create(username: "Austin", email: "austin@gmail.com", password: "1234")
User.create(username: "Ben", email: "ben@gmail.com", password: "1234")
User.create(username: "Caleigh", email: "caleigh@gmail.com", password: "1234")
User.create(username: "Colm", email: "colm@gmail.com", password: "1234") #5
User.create(username: "Ja'Vonn", email: "javonn@gmail.com", password: "1234")
User.create(username: "Jaz", email: "jaz@gmail.com", password: "1234")
User.create(username: "Jensen", email: "Jensen@gmail.com", password: "1234")
User.create(username: "Lantz", email: "lantz@gmail.com", password: "1234")
User.create(username: "Matt", email: "matt@gmail.com", password: "1234") #10
User.create(username: "Rebecca", email: "rebecca@gmail.com", password: "1234")
User.create(username: "Ryan", email: "ryan@gmail.com", password: "1234")
User.create(username: "Sam", email: "sam@gmail.com", password: "1234")
User.create(username: "Surapat", email: "Surapat@gmail.com", password: "1234")
User.create(username: "Topher", email: "topher@gmail.com", password: "1234") #15
User.create(username: "Charlie Kelly", email: "charlie@gmail.com", password: "1234")
User.create(username: "Ronald 'Mac' McDonald", email: "mac@gmail.com", password: "1234")
User.create(username: "Dennis Reynolds", email: "dennis@gmail.com", password: "1234")
User.create(username: "Dee Reynolds", email: "dee@gmail.com", password: "1234")
User.create(username: "Frank Reynolds", email: "frank@gmail.com", password: "1234") #20
User.create(username: "Andy Dwyer", email: "andy@gmail.com", password: "1234")
User.create(username: "Ann Perkins", email: "ann@gmail.com", password: "1234")
User.create(username: "April Ludgate", email: "april@gmail.com", password: "1234")
User.create(username: "Ben Wyatt", email: "ben2@gmail.com", password: "1234")
User.create(username: "Chris Traeger", email: "chris@gmail.com", password: "1234") #25
User.create(username: "Councilman Jamm", email: "jamm@gmail.com", password: "1234")
User.create(username: "Donna Meagle", email: "donna@gmail.com", password: "1234")
User.create(username: "Ethel Beavers", email: "ethel@gmail.com", password: "1234")
User.create(username: "Jean-Ralphio Saperstein", email: "jean@gmail.com", password: "1234")
User.create(username: "Jerry Gergich", email: "jerry@gmail.com", password: "1234") #30
User.create(username: "Leslie Knope", email: "leslie@gmail.com", password: "1234")
User.create(username: "Ron Swanson", email: "ron@gmail.com", password: "1234")
User.create(username: "Tom Haverford", email: "tom@gmail.com", password: "1234")

puts "Seeding JoinFriends..."
JoinFriend.create(friender_id: 1, friendee_id: 16)
JoinFriend.create(friender_id: 1, friendee_id: 17)
JoinFriend.create(friender_id: 1, friendee_id: 21)
JoinFriend.create(friender_id: 1, friendee_id: 23)
JoinFriend.create(friender_id: 1, friendee_id: 32) # Ron Swanson
JoinFriend.create(friender_id: 1, friendee_id: 33)
JoinFriend.create(friender_id: 2, friendee_id: 1)
JoinFriend.create(friender_id: 2, friendee_id: 3)
JoinFriend.create(friender_id: 3, friendee_id: 1)
JoinFriend.create(friender_id: 3, friendee_id: 4)
JoinFriend.create(friender_id: 4, friendee_id: 1)
JoinFriend.create(friender_id: 4, friendee_id: 2)
JoinFriend.create(friender_id: 4, friendee_id: 3)
JoinFriend.create(friender_id: 4, friendee_id: 5)
JoinFriend.create(friender_id: 5, friendee_id: 1)

puts "Seeding OverallStats..."
OverallStat.create(user_id: 1, total_games: 27, total_pinfall: 4848, average: 179, high_score: 246, low_score: 62, total_strikes: 120, total_spares: 71, total_open_frames: 79)
OverallStat.create(user_id: 2, total_games: 1, total_pinfall: 170, average: 170, high_score: 170, low_score: 170, total_strikes: 2, total_spares: 6, total_open_frames: 2)
OverallStat.create(user_id: 3, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 4, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 5, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 6, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 7, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 8, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 9, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 10, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 11, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 12, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 13, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 14, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 15, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 16, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 17, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 18, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 19, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 20, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 21, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 22, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 23, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 24, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 25, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 26, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 27, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 28, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 29, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 30, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 31, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
OverallStat.create(user_id: 32, total_games: 33, total_pinfall: 6518, average: 197, high_score: 254, low_score: 168, total_strikes: 153, total_spares: 88, total_open_frames: 89) # Ron Swanson
OverallStat.create(user_id: 33, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)

puts "Seeding GameSessions..."
GameSession.create(overall_stat_id: 1, date: "03/22/2023", number_of_games: 6, pinfall: 918, average: 153, high_score: 198, low_score: 62, strikes: 19, spares: 12, open_frames: 29, notes: "Decent night, lanes were dry")
GameSession.create(overall_stat_id: 1, date: "03/11/2023", number_of_games: 4, pinfall: 696, average: 174, high_score: 222, low_score: 133, strikes: 16, spares: 9, open_frames: 15, notes: "Great practice session")
GameSession.create(overall_stat_id: 1, date: "03/04/2023", number_of_games: 7, pinfall: 1268, average: 181, high_score: 198, low_score: 159, strikes: 29, spares: 24, open_frames: 17, notes: "Solid session")
GameSession.create(overall_stat_id: 1, date: "03/01/2023", number_of_games: 5, pinfall: 988, average: 198, high_score: 246, low_score: 142, strikes: 30, spares: 9, open_frames: 11, notes: "Great session")
GameSession.create(overall_stat_id: 1, date: "02/20/2023", number_of_games: 5, pinfall: 978, average: 196, high_score: 223, low_score: 176, strikes: 26, spares: 17, open_frames: 7, notes: "Solid session")

GameSession.create(overall_stat_id: 2, date: "02/18/2023", number_of_games: 6, pinfall: 1088, average: 181, high_score: 203, low_score: 135, strikes: 2, spares: 6, open_frames: 2, notes: "No comment")
GameSession.create(overall_stat_id: 3, date: "02/10/2023", number_of_games: 3, pinfall: 573, average: 191, high_score: 211, low_score: 169, strikes: 0, spares: 0, open_frames: 0, notes: "No comment")
GameSession.create(overall_stat_id: 4, date: "01/26/2023", number_of_games: 3, pinfall: 597, average: 199, high_score: 214, low_score: 182, strikes: 0, spares: 0, open_frames: 0, notes: "No comment")
GameSession.create(overall_stat_id: 5, date: "01/20/2023", number_of_games: 4, pinfall: 746, average: 187, high_score: 225, low_score: 128, strikes: 0, spares: 0, open_frames: 0, notes: "No comment")

puts "Seeding Games..."
Game.create(game_session_id: 1, first_frame_1: 8, first_frame_2: 2, second_frame_1: 5, second_frame_2: 5, third_frame_1: 10, third_frame_2: 0, fourth_frame_1: 10, fourth_frame_2: 0, fifth_frame_1: 7, fifth_frame_2: 3, sixth_frame_1: 10, sixth_frame_2: 0, seventh_frame_1: 10, seventh_frame_2: 0, eighth_frame_1: 8, eighth_frame_2: 2, ninth_frame_1: 10, ninth_frame_2: 0, tenth_frame_1: 8, tenth_frame_2: 1, tenth_frame_3: 0, score: 198, notes: "Great start")
Game.create(game_session_id: 1, first_frame_1: 9, first_frame_2: 1, second_frame_1: 9, second_frame_2: 1, third_frame_1: 10, third_frame_2: 0, fourth_frame_1: 8, fourth_frame_2: 2, fifth_frame_1: 8, fifth_frame_2: 2, sixth_frame_1: 10, sixth_frame_2: 0, seventh_frame_1: 9, seventh_frame_2: 0, eighth_frame_1: 9, eighth_frame_2: 0, ninth_frame_1: 9, ninth_frame_2: 0, tenth_frame_1: 6, tenth_frame_2: 4, tenth_frame_3: 7, score: 160, notes: "Decent game")
Game.create(game_session_id: 1, first_frame_1: 10, first_frame_2: 0, second_frame_1: 10, second_frame_2: 0, third_frame_1: 9, third_frame_2: 1, fourth_frame_1: 10, fourth_frame_2: 0, fifth_frame_1: 9, fifth_frame_2: 0, sixth_frame_1: 7, sixth_frame_2: 0, seventh_frame_1: 9, seventh_frame_2: 0, eighth_frame_1: 10, eighth_frame_2: 0, ninth_frame_1: 10, ninth_frame_2: 0, tenth_frame_1: 9, tenth_frame_2: 0, tenth_frame_3: 0, score: 170, notes: "Warmed up now")
Game.create(game_session_id: 1, first_frame_1: 10, first_frame_2: 0, second_frame_1: 9, second_frame_2: 0, third_frame_1: 10, third_frame_2: 0, fourth_frame_1: 9, fourth_frame_2: 1, fifth_frame_1: 5, fifth_frame_2: 3, sixth_frame_1: 6, sixth_frame_2: 3, seventh_frame_1: 9, seventh_frame_2: 1, eighth_frame_1: 10, eighth_frame_2: 0, ninth_frame_1: 9, ninth_frame_2: 0, tenth_frame_1: 10, tenth_frame_2: 9, tenth_frame_3: 1, score: 148, notes: "Oil drying up")
Game.create(game_session_id: 1, first_frame_1: 9, first_frame_2: 1, second_frame_1: 10, second_frame_2: 0, third_frame_1: 10, third_frame_2: 0, fourth_frame_1: 10, fourth_frame_2: 0, fifth_frame_1: 9, fifth_frame_2: 1, sixth_frame_1: 9, sixth_frame_2: 1, seventh_frame_1: 8, seventh_frame_2: 0, eighth_frame_1: 8, eighth_frame_2: 2, ninth_frame_1: 8, ninth_frame_2: 1, tenth_frame_1: 8, tenth_frame_2: 1, tenth_frame_3: 0, score: 180, notes: "Good adjustments, bad ending")
Game.create(game_session_id: 1, first_frame_1: 6, first_frame_2: 0, second_frame_1: 4, second_frame_2: 3, third_frame_1: 0, third_frame_2: 9, fourth_frame_1: 0, fourth_frame_2: 7, fifth_frame_1: 8, fifth_frame_2: 0, sixth_frame_1: 6, sixth_frame_2: 1, seventh_frame_1: 7, seventh_frame_2: 0, eighth_frame_1: 1, eighth_frame_2: 0, ninth_frame_1: 3, ninth_frame_2: 1, tenth_frame_1: 1, tenth_frame_2: 6, tenth_frame_3: 0, score: 62, notes: "Aiming for 10 pin")
Game.create(game_session_id: 2, first_frame_1: 6, first_frame_2: 2, second_frame_1: 9, second_frame_2: 0, third_frame_1: 6, third_frame_2: 0, fourth_frame_1: 9, fourth_frame_2: 0, fifth_frame_1: 10, fifth_frame_2: 0, sixth_frame_1: 7, sixth_frame_2: 1, seventh_frame_1: 10, seventh_frame_2: 0, eighth_frame_1: 10, eighth_frame_2: 0, ninth_frame_1: 8, ninth_frame_2: 1, tenth_frame_1: 8, tenth_frame_2: 2, tenth_frame_3: 9, score: 133, notes: "Warmup game")
Game.create(game_session_id: 2, first_frame_1: 9, first_frame_2: 1, second_frame_1: 10, second_frame_2: 0, third_frame_1: 8, third_frame_2: 1, fourth_frame_1: 6, fourth_frame_2: 2, fifth_frame_1: 10, fifth_frame_2: 0, sixth_frame_1: 10, sixth_frame_2: 0, seventh_frame_1: 9, seventh_frame_2: 0, eighth_frame_1: 10, eighth_frame_2: 0, ninth_frame_1: 7, ninth_frame_2: 3, tenth_frame_1: 9, tenth_frame_2: 1, tenth_frame_3: 9, score: 171, notes: "Game 1")
Game.create(game_session_id: 2, first_frame_1: 10, first_frame_2: 0, second_frame_1: 8, second_frame_2: 1, third_frame_1: 9, third_frame_2: 1, fourth_frame_1: 9, fourth_frame_2: 1, fifth_frame_1: 9, fifth_frame_2: 0, sixth_frame_1: 9, sixth_frame_2: 1, seventh_frame_1: 9, seventh_frame_2: 1, eighth_frame_1: 10, eighth_frame_2: 0, ninth_frame_1: 6, ninth_frame_2: 4, tenth_frame_1: 8, tenth_frame_2: 2, tenth_frame_3: 8, score: 170, notes: "Game 2")
Game.create(game_session_id: 2, first_frame_1: 8, first_frame_2: 1, second_frame_1: 9, second_frame_2: 0, third_frame_1: 10, third_frame_2: 0, fourth_frame_1: 10, fourth_frame_2: 0, fifth_frame_1: 10, fifth_frame_2: 0, sixth_frame_1: 10, sixth_frame_2: 0, seventh_frame_1: 7, seventh_frame_2: 3, eighth_frame_1: 10, eighth_frame_2: 0, ninth_frame_1: 10, ninth_frame_2: 0, tenth_frame_1: 10, tenth_frame_2: 8, tenth_frame_3: 1, score: 222, notes: "Game 3")
Game.create(game_session_id: 3, first_frame_1: 10, first_frame_2: 0, second_frame_1: 8, second_frame_2: 1, third_frame_1: 9, third_frame_2: 1, fourth_frame_1: 9, fourth_frame_2: 1, fifth_frame_1: 9, fifth_frame_2: 0, sixth_frame_1: 9, sixth_frame_2: 1, seventh_frame_1: 9, seventh_frame_2: 1, eighth_frame_1: 10, eighth_frame_2: 0, ninth_frame_1: 6, ninth_frame_2: 4, tenth_frame_1: 8, tenth_frame_2: 2, tenth_frame_3: 8, score: 170, notes: "Good game")
Game.create(game_session_id: 3, first_frame_1: 5, first_frame_2: 5, second_frame_1: 5, second_frame_2: 5, third_frame_1: 5, third_frame_2: 5, fourth_frame_1: 5, fourth_frame_2: 5, fifth_frame_1: 5, fifth_frame_2: 5, sixth_frame_1: 5, sixth_frame_2: 5, seventh_frame_1: 5, seventh_frame_2: 5, eighth_frame_1: 5, eighth_frame_2: 5, ninth_frame_1: 5, ninth_frame_2: 5, tenth_frame_1: 5, tenth_frame_2: 5, tenth_frame_3: 5, score: 150, notes: "Average game")
Game.create(game_session_id: 4, first_frame_1: 5, first_frame_2: 5, second_frame_1: 5, second_frame_2: 5, third_frame_1: 5, third_frame_2: 5, fourth_frame_1: 5, fourth_frame_2: 5, fifth_frame_1: 5, fifth_frame_2: 5, sixth_frame_1: 5, sixth_frame_2: 5, seventh_frame_1: 5, seventh_frame_2: 5, eighth_frame_1: 5, eighth_frame_2: 5, ninth_frame_1: 5, ninth_frame_2: 5, tenth_frame_1: 5, tenth_frame_2: 5, tenth_frame_3: 5, score: 150, notes: "Average game")
Game.create(game_session_id: 5, first_frame_1: 5, first_frame_2: 5, second_frame_1: 5, second_frame_2: 5, third_frame_1: 5, third_frame_2: 5, fourth_frame_1: 5, fourth_frame_2: 5, fifth_frame_1: 5, fifth_frame_2: 5, sixth_frame_1: 5, sixth_frame_2: 5, seventh_frame_1: 5, seventh_frame_2: 5, eighth_frame_1: 5, eighth_frame_2: 5, ninth_frame_1: 5, ninth_frame_2: 5, tenth_frame_1: 5, tenth_frame_2: 5, tenth_frame_3: 5, score: 150, notes: "Average game")
Game.create(game_session_id: 6, first_frame_1: 10, first_frame_2: 0, second_frame_1: 8, second_frame_2: 1, third_frame_1: 9, third_frame_2: 1, fourth_frame_1: 9, fourth_frame_2: 1, fifth_frame_1: 9, fifth_frame_2: 0, sixth_frame_1: 9, sixth_frame_2: 1, seventh_frame_1: 9, seventh_frame_2: 1, eighth_frame_1: 10, eighth_frame_2: 0, ninth_frame_1: 6, ninth_frame_2: 4, tenth_frame_1: 8, tenth_frame_2: 2, tenth_frame_3: 8, score: 170, notes: "Good game")
Game.create(game_session_id: 7, first_frame_1: 10, first_frame_2: 0, second_frame_1: 8, second_frame_2: 1, third_frame_1: 9, third_frame_2: 1, fourth_frame_1: 9, fourth_frame_2: 1, fifth_frame_1: 9, fifth_frame_2: 0, sixth_frame_1: 9, sixth_frame_2: 1, seventh_frame_1: 9, seventh_frame_2: 1, eighth_frame_1: 10, eighth_frame_2: 0, ninth_frame_1: 6, ninth_frame_2: 4, tenth_frame_1: 8, tenth_frame_2: 2, tenth_frame_3: 8, score: 170, notes: "Good game")
Game.create(game_session_id: 7, first_frame_1: 5, first_frame_2: 5, second_frame_1: 5, second_frame_2: 5, third_frame_1: 5, third_frame_2: 5, fourth_frame_1: 5, fourth_frame_2: 5, fifth_frame_1: 5, fifth_frame_2: 5, sixth_frame_1: 5, sixth_frame_2: 5, seventh_frame_1: 5, seventh_frame_2: 5, eighth_frame_1: 5, eighth_frame_2: 5, ninth_frame_1: 5, ninth_frame_2: 5, tenth_frame_1: 5, tenth_frame_2: 5, tenth_frame_3: 5, score: 150, notes: "Average game")
Game.create(game_session_id: 8, first_frame_1: 10, first_frame_2: 0, second_frame_1: 8, second_frame_2: 1, third_frame_1: 9, third_frame_2: 1, fourth_frame_1: 9, fourth_frame_2: 1, fifth_frame_1: 9, fifth_frame_2: 0, sixth_frame_1: 9, sixth_frame_2: 1, seventh_frame_1: 9, seventh_frame_2: 1, eighth_frame_1: 10, eighth_frame_2: 0, ninth_frame_1: 6, ninth_frame_2: 4, tenth_frame_1: 8, tenth_frame_2: 2, tenth_frame_3: 8, score: 170, notes: "Good game")
Game.create(game_session_id: 8, first_frame_1: 5, first_frame_2: 5, second_frame_1: 5, second_frame_2: 5, third_frame_1: 5, third_frame_2: 5, fourth_frame_1: 5, fourth_frame_2: 5, fifth_frame_1: 5, fifth_frame_2: 5, sixth_frame_1: 5, sixth_frame_2: 5, seventh_frame_1: 5, seventh_frame_2: 5, eighth_frame_1: 5, eighth_frame_2: 5, ninth_frame_1: 5, ninth_frame_2: 5, tenth_frame_1: 5, tenth_frame_2: 5, tenth_frame_3: 5, score: 150, notes: "Average game")
Game.create(game_session_id: 9, first_frame_1: 10, first_frame_2: 0, second_frame_1: 8, second_frame_2: 1, third_frame_1: 9, third_frame_2: 1, fourth_frame_1: 9, fourth_frame_2: 1, fifth_frame_1: 9, fifth_frame_2: 0, sixth_frame_1: 9, sixth_frame_2: 1, seventh_frame_1: 9, seventh_frame_2: 1, eighth_frame_1: 10, eighth_frame_2: 0, ninth_frame_1: 6, ninth_frame_2: 4, tenth_frame_1: 8, tenth_frame_2: 2, tenth_frame_3: 8, score: 170, notes: "Good game")

puts "✅ Done seeding!"
