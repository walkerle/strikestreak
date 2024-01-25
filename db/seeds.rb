puts "☠️ Deleting old data..."
User.destroy_all
Stat.destroy_all
GameSession.destroy_all
Game.destroy_all
JoinFriend.destroy_all

# Seed Data
puts "🌱 Seeding data..."

puts "Seeding Users..."
User.create(username: "Walker", email: "walker@gmail.com", password: "1234")
User.create(username: "Pete Weber", email: "pete@gmail.com", password: "1234") #2
User.create(username: "Norm Duke", email: "norm@gmail.com", password: "1234")
User.create(username: "Jason Belmonte", email: "jason@gmail.com", password: "1234")
User.create(username: "EJ Tackett", email: "ej@gmail.com", password: "1234") #5
User.create(username: "Kyle Troup", email: "kyle@gmail.com", password: "1234")
User.create(username: "Anthony Simonsen", email: "anthony@gmail.com", password: "1234")
User.create(username: "Ron Swanson", email: "ron@gmail.com", password: "1234") #8
User.create(username: "Tom Haverford", email: "tom@gmail.com", password: "1234") #9
User.create(username: "Andy Dwyer", email: "andy@gmail.com", password: "1234") #10
User.create(username: "April Ludgate", email: "april@gmail.com", password: "1234")
User.create(username: "Leslie Knope", email: "leslie@gmail.com", password: "1234")
User.create(username: "Charlie Kelly", email: "charlie@gmail.com", password: "1234")
User.create(username: "Ronald 'Mac' McDonald", email: "mac@gmail.com", password: "1234")
User.create(username: "Frank Reynolds", email: "frank@gmail.com", password: "1234") #15
User.create(username: "Kevin", email: "kevin@gmail.com", password: "1234")
User.create(username: "Vuong", email: "vuong@gmail.com", password: "1234")
User.create(username: "Phi", email: "phi@gmail.com", password: "1234")
User.create(username: "Evan", email: "evan@gmail.com", password: "1234")
User.create(username: "Paul", email: "paul@gmail.com", password: "1234") #20
User.create(username: "Tony", email: "tony@gmail.com", password: "1234")
User.create(username: "Matt", email: "matt@gmail.com", password: "1234")
User.create(username: "DeAngelo", email: "DeAngelo@gmail.com", password: "1234")

puts "Seeding Stats..."
Stat.create(user_id: 1, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 2, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 3, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 4, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 5, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 6, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 7, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 8, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 9, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 10, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 11, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 12, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 13, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 14, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 15, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 16, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 17, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 18, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 19, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 20, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 21, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 22, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)
Stat.create(user_id: 23, total_games: 0, total_pinfall: 0, average: 0, high_score: 0, low_score: 0, total_strikes: 0, total_spares: 0, total_open_frames: 0)

puts "Seeding GameSessions..."
GameSession.create(stat_id: 8, date: "08/26/2023", number_of_games: 0, pinfall: 0, average: 0, high_score: 0, low_score: 0, strikes: 0, spares: 0, open_frames: 0, notes: "Average night")
GameSession.create(stat_id: 8, date: "09/02/2023", number_of_games: 0, pinfall: 0, average: 0, high_score: 0, low_score: 0, strikes: 0, spares: 0, open_frames: 0, notes: "Good night")
GameSession.create(stat_id: 8, date: "09/07/2023", number_of_games: 0, pinfall: 0, average: 0, high_score: 0, low_score: 0, strikes: 0, spares: 0, open_frames: 0, notes: "Lane conditions were great!")
GameSession.create(stat_id: 9, date: "01/26/2012", number_of_games: 0, pinfall: 0, average: 0, high_score: 0, low_score: 0, strikes: 0, spares: 0, open_frames: 0, notes: "Perfect game!")
GameSession.create(stat_id: 2, date: "02/26/2012", number_of_games: 0, pinfall: 0, average: 0, high_score: 0, low_score: 0, strikes: 0, spares: 0, open_frames: 0, notes: "Pete Weber Day")
GameSession.create(stat_id: 5, date: "09/07/2023", number_of_games: 0, pinfall: 0, average: 0, high_score: 0, low_score: 0, strikes: 0, spares: 0, open_frames: 0, notes: "600 series night!")


puts "Seeding Games..."
Game.create(game_session_id: 1, f1b1: 8, f1b2: 2, f2b1: 9, f2b2: 0, f3b1: 10, f3b2: 0, f4b1: 9, f4b2: 1, f5b1: 8, f5b2: 2, f6b1: 10, f6b2: 0, f7b1: 5, f7b2: 3, f8b1: 10, f8b2: 0, f9b1: 10, f9b2: 0, f10b1: 10, f10b2: 9, f10b3: 0, score: 190, strikes: 5, spares: 3, open_frames: 3, notes: "Good start")
Game.create(game_session_id: 1, f1b1: 9, f1b2: 1, f2b1: 8, f2b2: 1, f3b1: 9, f3b2: 1, f4b1: 7, f4b2: 2, f5b1: 9, f5b2: 0, f6b1: 8, f6b2: 0, f7b1: 9, f7b2: 1, f8b1: 9, f8b2: 1, f9b1: 9, f9b2: 1, f10b1: 10, f10b2: 10, f10b3: 9, score: 157, strikes: 2, spares: 5, open_frames: 4, notes: "Bad start, good finish")
Game.create(game_session_id: 2, f1b1: 10, f1b2: 0, f2b1: 7, f2b2: 3, f3b1: 10, f3b2: 0, f4b1: 5, f4b2: 5, f5b1: 9, f5b2: 1, f6b1: 10, f6b2: 0, f7b1: 9, f7b2: 1, f8b1: 7, f8b2: 2, f9b1: 10, f9b2: 0, f10b1: 7, f10b2: 3, f10b3: 0, score: 175, strikes: 4, spares: 5, open_frames: 1, notes: "Lane oil was good")
Game.create(game_session_id: 3, f1b1: 9, f1b2: 1, f2b1: 7, f2b2: 2, f3b1: 7, f3b2: 3, f4b1: 8, f4b2: 0, f5b1: 4, f5b2: 6, f6b1: 10, f6b2: 0, f7b1: 10, f7b2: 0, f8b1: 10, f8b2: 0, f9b1: 10, f9b2: 0, f10b1: 10, f10b2: 6, f10b3: 1, score: 205, strikes: 5, spares: 3, open_frames: 3, notes: "200 game!")
Game.create(game_session_id: 3, f1b1: 10, f1b2: 0, f2b1: 6, f2b2: 2, f3b1: 8, f3b2: 2, f4b1: 10, f4b2: 0, f5b1: 9, f5b2: 1, f6b1: 10, f6b2: 0, f7b1: 9, f7b2: 1, f8b1: 10, f8b2: 0, f9b1: 10, f9b2: 0, f10b1: 6, f10b2: 3, f10b3: 0, score: 180, strikes: 5, spares: 3, open_frames: 2, notes: "Great lane conditions")
Game.create(game_session_id: 4, f1b1: 10, f1b2: 0, f2b1: 10, f2b2: 0, f3b1: 10, f3b2: 0, f4b1: 10, f4b2: 0, f5b1: 10, f5b2: 0, f6b1: 10, f6b2: 0, f7b1: 10, f7b2: 0, f8b1: 10, f8b2: 0, f9b1: 10, f9b2: 0, f10b1: 10, f10b2: 10, f10b3: 10, score: 300, strikes: 12, spares: 0, open_frames: 0, notes: "Granny Shot Perfect game!")
Game.create(game_session_id: 6, f1b1: 10, f1b2: 0, f2b1: 7, f2b2: 3, f3b1: 10, f3b2: 0, f4b1: 9, f4b2: 1, f5b1: 5, f5b2: 3, f6b1: 10, f6b2: 0, f7b1: 10, f7b2: 0, f8b1: 5, f8b2: 5, f9b1: 8, f9b2: 2, f10b1: 10, f10b2: 10, f10b3: 10, score: 196, strikes: 7, spares: 4, open_frames: 1, notes: "Almost got the 200")
Game.create(game_session_id: 6, f1b1: 10, f1b2: 0, f2b1: 9, f2b2: 1, f3b1: 10, f3b2: 0, f4b1: 10, f4b2: 0, f5b1: 8, f5b2: 0, f6b1: 10, f6b2: 0, f7b1: 10, f7b2: 0, f8b1: 10, f8b2: 0, f9b1: 10, f9b2: 0, f10b1: 6, f10b2: 2, f10b3: 0, score: 206, strikes: 7, spares: 1, open_frames: 2, notes: "Easy 200 game")
Game.create(game_session_id: 6, f1b1: 10, f1b2: 0, f2b1: 9, f2b2: 1, f3b1: 9, f3b2: 1, f4b1: 10, f4b2: 0, f5b1: 10, f5b2: 0, f6b1: 7, f6b2: 3, f7b1: 9, f7b2: 1, f8b1: 10, f8b2: 0, f9b1: 7, f9b2: 3, f10b1: 9, f10b2: 1, f10b3: 9, score: 203, strikes: 4, spares: 6, open_frames: 0, notes: "Another one!")

# Game.create(game_session_id: 1, f1b1: 0, f1b2: 0, f2b1: 0, f2b2: 0, f3b1: 0, f3b2: 0, f4b1: 0, f4b2: 0, f5b1: 0, f5b2: 0, f6b1: 0, f6b2: 0, f7b1: 0, f7b2: 0, f8b1: 0, f8b2: 0, f9b1: 0, f9b2: 0, f10b1: 0, f10b2: 0, f10b3: 0, score: 0, strikes: 0, spares: 0, open_frames: 0, notes: "")

# Pete Weber Game
Game.create(game_session_id: 5, f1b1: 9, f1b2: 1, f2b1: 9, f2b2: 1, f3b1: 9, f3b2: 1, f4b1: 10, f4b2: 0, f5b1: 9, f5b2: 1, f6b1: 8, f6b2: 2, f7b1: 10, f7b2: 0, f8b1: 10, f8b2: 0, f9b1: 10, f9b2: 0, f10b1: 9, f10b2: 1, f10b3: 10, score: 215, strikes: 5, spares: 6, open_frames: 0, notes: "Who do you think you are? I am!")

puts "Seeding JoinFriends..."
JoinFriend.create(friender_id: 8, friendee_id: 9)
JoinFriend.create(friender_id: 8, friendee_id: 2)
JoinFriend.create(friender_id: 8, friendee_id: 5)
JoinFriend.create(friender_id: 8, friendee_id: 12)
JoinFriend.create(friender_id: 9, friendee_id: 8)
JoinFriend.create(friender_id: 2, friendee_id: 3)
JoinFriend.create(friender_id: 5, friendee_id: 4)
JoinFriend.create(friender_id: 1, friendee_id: 16) # Walker
JoinFriend.create(friender_id: 1, friendee_id: 17)
JoinFriend.create(friender_id: 1, friendee_id: 18)
JoinFriend.create(friender_id: 1, friendee_id: 19)
JoinFriend.create(friender_id: 1, friendee_id: 20)
JoinFriend.create(friender_id: 1, friendee_id: 21)
JoinFriend.create(friender_id: 1, friendee_id: 22)
JoinFriend.create(friender_id: 1, friendee_id: 23)
JoinFriend.create(friender_id: 16, friendee_id: 1) # Kevin
JoinFriend.create(friender_id: 16, friendee_id: 17)
JoinFriend.create(friender_id: 16, friendee_id: 18)
JoinFriend.create(friender_id: 16, friendee_id: 19)
JoinFriend.create(friender_id: 16, friendee_id: 20)
JoinFriend.create(friender_id: 16, friendee_id: 21)
JoinFriend.create(friender_id: 16, friendee_id: 22)
JoinFriend.create(friender_id: 16, friendee_id: 23)
JoinFriend.create(friender_id: 17, friendee_id: 1) # Vuong
JoinFriend.create(friender_id: 17, friendee_id: 16)
JoinFriend.create(friender_id: 17, friendee_id: 18)
JoinFriend.create(friender_id: 17, friendee_id: 19)
JoinFriend.create(friender_id: 17, friendee_id: 20)
JoinFriend.create(friender_id: 17, friendee_id: 21)
JoinFriend.create(friender_id: 17, friendee_id: 22)
JoinFriend.create(friender_id: 17, friendee_id: 23)
JoinFriend.create(friender_id: 18, friendee_id: 1) # Phi
JoinFriend.create(friender_id: 18, friendee_id: 16)
JoinFriend.create(friender_id: 18, friendee_id: 17)
JoinFriend.create(friender_id: 18, friendee_id: 19)
JoinFriend.create(friender_id: 18, friendee_id: 20)
JoinFriend.create(friender_id: 18, friendee_id: 21)
JoinFriend.create(friender_id: 18, friendee_id: 22)
JoinFriend.create(friender_id: 18, friendee_id: 23)
JoinFriend.create(friender_id: 19, friendee_id: 1) # Evan
JoinFriend.create(friender_id: 19, friendee_id: 16)
JoinFriend.create(friender_id: 19, friendee_id: 17)
JoinFriend.create(friender_id: 19, friendee_id: 18)
JoinFriend.create(friender_id: 19, friendee_id: 20)
JoinFriend.create(friender_id: 19, friendee_id: 21)
JoinFriend.create(friender_id: 19, friendee_id: 22)
JoinFriend.create(friender_id: 19, friendee_id: 23)
JoinFriend.create(friender_id: 20, friendee_id: 1) # Paul
JoinFriend.create(friender_id: 20, friendee_id: 16)
JoinFriend.create(friender_id: 20, friendee_id: 17)
JoinFriend.create(friender_id: 20, friendee_id: 18)
JoinFriend.create(friender_id: 20, friendee_id: 19)
JoinFriend.create(friender_id: 20, friendee_id: 21)
JoinFriend.create(friender_id: 20, friendee_id: 22)
JoinFriend.create(friender_id: 20, friendee_id: 23)
JoinFriend.create(friender_id: 21, friendee_id: 1) # Tony
JoinFriend.create(friender_id: 21, friendee_id: 16)
JoinFriend.create(friender_id: 21, friendee_id: 17)
JoinFriend.create(friender_id: 21, friendee_id: 18)
JoinFriend.create(friender_id: 21, friendee_id: 19)
JoinFriend.create(friender_id: 21, friendee_id: 20)
JoinFriend.create(friender_id: 21, friendee_id: 22)
JoinFriend.create(friender_id: 21, friendee_id: 23)
JoinFriend.create(friender_id: 22, friendee_id: 1) # Matt
JoinFriend.create(friender_id: 22, friendee_id: 16)
JoinFriend.create(friender_id: 22, friendee_id: 17)
JoinFriend.create(friender_id: 22, friendee_id: 18)
JoinFriend.create(friender_id: 22, friendee_id: 19)
JoinFriend.create(friender_id: 22, friendee_id: 20)
JoinFriend.create(friender_id: 22, friendee_id: 21)
JoinFriend.create(friender_id: 22, friendee_id: 23)
JoinFriend.create(friender_id: 23, friendee_id: 1) # DeAngelo
JoinFriend.create(friender_id: 23, friendee_id: 16)
JoinFriend.create(friender_id: 23, friendee_id: 17)
JoinFriend.create(friender_id: 23, friendee_id: 18)
JoinFriend.create(friender_id: 23, friendee_id: 19)
JoinFriend.create(friender_id: 23, friendee_id: 20)
JoinFriend.create(friender_id: 23, friendee_id: 21)
JoinFriend.create(friender_id: 23, friendee_id: 22)
  
puts "✅ Done seeding!"
